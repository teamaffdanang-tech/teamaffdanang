import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

/**
 * Temporary, one-off production seed endpoint — gated by MIGRATION_TEMP_SECRET
 * (set only in Vercel production env for this operation), not PAYLOAD_SECRET.
 *
 * POST is scoped to the Donovan Watches batch ONLY (9 new products, 1 new
 * brand, 1 new retailer, reusing the existing `watches` category upserted with
 * its unchanged imported.ts value). No existing product is re-seeded. Donovan
 * uses the existing USD currency — no migration involved.
 *
 * Delete this route (and the MIGRATION_TEMP_SECRET env) once verified.
 */
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const NEW_PRODUCT_SLUGS = new Set([
  'donovan-axcent-silver-leather', 'donovan-axcent-gunmetal-steel', 'donovan-axcent-black-steel',
  'donovan-chrono-x-white-rose-gold', 'donovan-chrono-x-black-rose-gold', 'donovan-chrono-x-pacific-navy',
  'donovan-marble-rose-blue', 'donovan-marble-rose-white', 'donovan-marble-rose-gray',
])

const donovanBatch = (): SeedDataset => ({
  categories: importedDataset.categories.filter((c) => c.slug === 'watches'),
  occasions: [],
  brands: importedDataset.brands.filter((b) => b.slug === 'donovan-watches'),
  retailers: importedDataset.retailers.filter((r) => r.slug === 'donovan-watches'),
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
  const batch = donovanBatch()
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
    scope: 'donovan-watch-batch',
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
          excerpt?: string
          description?: unknown
          bestFor?: string
          pros?: unknown[]
          cons?: unknown[]
          specifications?: { label?: string; value?: string }[]
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
    const strapSpec = doc.specifications?.find((s) => s.label === 'Strap')?.value
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
      strapSpec,
      galleryCount: doc.gallery?.length ?? 0,
      occasionsCount: doc.occasions?.length ?? 0,
      ratingOverall: doc.ratings?.overall ?? null,
      retailerLinks: doc.retailerLinks?.map((r) => ({ affiliateUrl: r.affiliateUrl, price: r.price, currency: r.currency, retailer: r.retailer })),
    })
  }

  return NextResponse.json({ error: 'Missing ?counts=1, ?list=, ?categorySlug=, or ?slug=' }, { status: 400 })
}
