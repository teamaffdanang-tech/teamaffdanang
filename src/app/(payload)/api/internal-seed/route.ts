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
 * POST is scoped to the KICA batch ONLY (5 new products, 1 new brand, 1 new
 * retailer, plus the new `massage-recovery` category). No existing product is
 * re-seeded. Uses the existing USD currency — no migration.
 *
 * Delete this route (and the MIGRATION_TEMP_SECRET env) once verified.
 */
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const NEW_PRODUCT_SLUGS = new Set([
  'kica-3-dual-head-massage-gun',
  'kica-evo',
  'kica-k2-massage-gun',
  'kica-mini-3-massage-gun',
  'kica-evo-mini-foldable-massage-gun',
])

const kicaBatch = (): SeedDataset => ({
  categories: importedDataset.categories.filter((c) => c.slug === 'massage-recovery'),
  occasions: [],
  brands: importedDataset.brands.filter((b) => b.slug === 'kica'),
  retailers: importedDataset.retailers.filter((r) => r.slug === 'kica'),
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
  const batch = kicaBatch()
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
    scope: 'kica-batch',
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
    const result = await payload.find({ collection: listCollection, where: {}, limit: 300, depth: 0 })
    return NextResponse.json({
      collection: listCollection,
      total: result.totalDocs,
      slugs: result.docs.map((d) => ({
        slug: (d as { slug?: string }).slug,
        name: (d as { name?: string; title?: string }).name ?? (d as { title?: string }).title,
        network: (d as { network?: string }).network,
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
          gallery?: { url?: string; filename?: string }[]
          occasions?: unknown[]
          pros?: unknown[]
          cons?: unknown[]
          specifications?: { label?: string; value?: string }[]
          ratings?: { overall?: number }
          retailerLinks?: { affiliateUrl?: string; price?: number; currency?: string; retailer?: { slug?: string; network?: string; trackingParam?: string } }[]
          brand?: { slug?: string; name?: string }
          categories?: { slug?: string }[]
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
      category: (doc.categories ?? []).map((c) => c?.slug),
      prosCount: doc.pros?.length ?? 0,
      consCount: doc.cons?.length ?? 0,
      specifications: (doc.specifications ?? []).map((s) => `${s.label}: ${s.value}`),
      galleryCount: doc.gallery?.length ?? 0,
      galleryFiles: (doc.gallery ?? []).map((g) => g?.filename),
      occasionsCount: doc.occasions?.length ?? 0,
      ratingOverall: doc.ratings?.overall ?? null,
      retailerLinks: doc.retailerLinks?.map((r) => ({ affiliateUrl: r.affiliateUrl, price: r.price, currency: r.currency, retailer: r.retailer })),
    })
  }

  return NextResponse.json({ error: 'Missing ?counts=1, ?list=, ?categorySlug=, or ?slug=' }, { status: 400 })
}
