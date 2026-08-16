import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import { sql } from '@payloadcms/db-postgres'

import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

/**
 * Temporary, one-off production seed endpoint — gated by MIGRATION_TEMP_SECRET
 * (set only in Vercel production env for this operation), not PAYLOAD_SECRET.
 *
 * POST is scoped to the Engwe e-bike batch ONLY (20 new products, 1 new brand,
 * 1 new retailer, plus the existing `electric-bikes` category upserted with its
 * unchanged imported.ts value). No existing product is re-seeded.
 *
 * GET ?enumCurrency=1 reports the DB enum values for currency so the EUR
 * migration can be verified BEFORE seeding EUR-priced products.
 *
 * Delete this route (and the MIGRATION_TEMP_SECRET env) once verified.
 */
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const NEW_PRODUCT_SLUGS = new Set([
  'engwe-p275-se', 'engwe-p20', 'engwe-ep-2-boost', 'engwe-ep-2-pro', 'engwe-o20-boost', 'engwe-zip',
  'engwe-m20', 'engwe-m1', 'engwe-l20-boost', 'engwe-ep-2-3-0-boost', 'engwe-n1-air', 'engwe-engine-x',
  'engwe-l20-3-0-boost', 'engwe-engine-pro-2-0', 'engwe-e26', 'engwe-n1-pro', 'engwe-engine-pro-3-0-boost',
  'engwe-l20-3-0-pro', 'engwe-e26-3-0-pro', 'engwe-x26-x24-x20',
])

const engweBatch = (): SeedDataset => ({
  categories: importedDataset.categories.filter((c) => c.slug === 'electric-bikes'),
  occasions: [],
  brands: importedDataset.brands.filter((b) => b.slug === 'engwe'),
  retailers: importedDataset.retailers.filter((r) => r.slug === 'engwe'),
  authors: [],
  products: importedDataset.products.filter((p) => NEW_PRODUCT_SLUGS.has(p.slug)),
  coupons: [],
  blogPosts: [],
})

const isAuthorized = (req: NextRequest): boolean => {
  const secret = req.headers.get('x-migration-secret')
  return Boolean(secret) && secret === process.env.MIGRATION_TEMP_SECRET
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const payload = await getPayload({ config })
  const batch = engweBatch()
  await importSeedData(payload, batch)

  const imported = await payload.find({
    collection: 'products',
    where: { slug: { in: [...NEW_PRODUCT_SLUGS] } },
    limit: 100,
    depth: 0,
    pagination: false,
  })

  return NextResponse.json({
    status: 'ok',
    scope: 'engwe-ebike-batch',
    seeded: {
      categories: batch.categories.length,
      brands: batch.brands.length,
      retailers: batch.retailers.length,
      products: batch.products.length,
    },
    productsNowInDb: imported.docs.length,
    slugs: imported.docs.map((d) => (d as { slug?: string }).slug),
  })
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const payload = await getPayload({ config })
  const counts = req.nextUrl.searchParams.get('counts')
  const categorySlug = req.nextUrl.searchParams.get('categorySlug')
  const listCollection = req.nextUrl.searchParams.get('list')
  const slug = req.nextUrl.searchParams.get('slug')
  const enumCurrency = req.nextUrl.searchParams.get('enumCurrency')

  if (enumCurrency) {
    // Verify the EUR migration applied by reading the actual DB enum values.
    const drizzle = (payload.db as unknown as { drizzle: { execute: (q: unknown) => Promise<unknown> } }).drizzle
    const q = async (typname: string) => {
      const res = (await drizzle.execute(sql`
        SELECT e.enumlabel AS label
        FROM pg_type t JOIN pg_enum e ON e.enumtypid = t.oid
        WHERE t.typname = ${typname}
        ORDER BY e.enumsortorder
      `)) as { rows?: { label: string }[] }
      return (res.rows ?? []).map((r) => r.label)
    }
    const main = await q('enum_products_retailer_links_currency')
    const version = await q('enum__products_v_version_retailer_links_currency')
    return NextResponse.json({
      productsCurrencyEnum: main,
      versionCurrencyEnum: version,
      eurPresentMain: main.includes('EUR'),
      eurPresentVersion: version.includes('EUR'),
      legacyIntact: ['USD', 'HKD', 'GBP'].every((c) => main.includes(c)),
    })
  }

  if (counts) {
    const [products, categories, brands, retailers] = await Promise.all([
      payload.find({ collection: 'products', where: {}, limit: 0 }),
      payload.find({ collection: 'categories', where: {}, limit: 0 }),
      payload.find({ collection: 'brands', where: {}, limit: 0 }),
      payload.find({ collection: 'retailers', where: {}, limit: 0 }),
    ])
    return NextResponse.json({
      totalProducts: products.totalDocs,
      totalCategories: categories.totalDocs,
      totalBrands: brands.totalDocs,
      totalRetailers: retailers.totalDocs,
    })
  }

  if (listCollection === 'categories' || listCollection === 'retailers' || listCollection === 'brands') {
    const result = await payload.find({ collection: listCollection, where: {}, limit: 200, depth: 0 })
    return NextResponse.json({
      collection: listCollection,
      total: result.totalDocs,
      slugs: result.docs.map((d) => ({
        slug: (d as { slug?: string }).slug,
        name: (d as { name?: string; title?: string }).name ?? (d as { title?: string }).title,
        trackingParam: (d as { trackingParam?: string }).trackingParam,
      })),
    })
  }

  if (categorySlug) {
    const cat = await payload.find({ collection: 'categories', where: { slug: { equals: categorySlug } }, limit: 1 })
    if (!cat.docs[0]) return NextResponse.json({ categorySlug, exists: false, publishedProductCount: 0 })
    const result = await payload.find({
      collection: 'products',
      where: { and: [{ categories: { equals: cat.docs[0].id } }, { _status: { equals: 'published' } }] },
      limit: 0,
    })
    return NextResponse.json({ categorySlug, exists: true, publishedProductCount: result.totalDocs })
  }

  if (slug) {
    const result = await payload.find({ collection: 'products', where: { slug: { equals: slug } }, limit: 1, depth: 1 })
    const doc = result.docs[0] as
      | {
          slug: string
          title: string
          bestFor?: string
          pros?: unknown[]
          cons?: unknown[]
          specifications?: unknown[]
          gallery?: unknown[]
          occasions?: unknown[]
          officialUrl?: string
          ratings?: { overall?: number }
          retailerLinks?: { affiliateUrl?: string; price?: number; currency?: string; retailer?: { slug?: string } }[]
          brand?: { slug?: string; name?: string }
          _status?: string
        }
      | undefined
    if (!doc) return NextResponse.json({ exists: false, slug })
    return NextResponse.json({
      exists: true,
      slug: doc.slug,
      title: doc.title,
      status: doc._status,
      brand: doc.brand,
      bestFor: doc.bestFor,
      officialUrl: doc.officialUrl,
      prosCount: doc.pros?.length ?? 0,
      consCount: doc.cons?.length ?? 0,
      specificationsCount: doc.specifications?.length ?? 0,
      galleryCount: doc.gallery?.length ?? 0,
      occasionsCount: doc.occasions?.length ?? 0,
      ratingOverall: doc.ratings?.overall ?? null,
      retailerLinks: doc.retailerLinks?.map((r) => ({ affiliateUrl: r.affiliateUrl, price: r.price, currency: r.currency, retailer: r.retailer })),
    })
  }

  return NextResponse.json({ error: 'Missing ?counts=1, ?enumCurrency=1, ?list=, ?categorySlug=, or ?slug=' }, { status: 400 })
}
