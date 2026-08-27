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
 * POST is scoped to the 8belle batch ONLY (11 new products, 1 new brand, 1 new
 * retailer, plus the new `nail-care` category). No existing product is
 * re-seeded. Uses the existing USD currency — no migration.
 *
 * Delete this route (and the MIGRATION_TEMP_SECRET env) once verified.
 */
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const NEW_PRODUCT_SLUGS = new Set([
  '8belle-expert-graphene-rose-essence-builder-gel-professional-nail-sculpting-gel-1-8-oz',
  '8belle-cover-cake-builder-gel-high-coverage-self-leveling-hard-gel-1-8-oz',
  '8belle-transparent-jelly-builder-gel-non-leveling-sculpting-gel-for-nail-art',
  '8belle-matte-gel-top-coat-professional-no-wipe-gel-top-coat-hema-free',
  '8belle-glossy-no-wipe-gel-top-coat-high-shine-nail-finish-hema-free',
  '8belle-diamond-glow-no-wipe-gel-top-coat-high-shine-shimmer-nail-finish-tpo-free',
  '8belle-expert-rubber-base-professional-rubber-nail-base-tpo-hema-free',
  '8belle-acid-free-primer-hema-free-superior-adhesion-for-gel-acrylic-nails',
  '8belle-prep-dry-dehydrator-professional-nail-degreaser-moisture-remover',
  '8belle-manicure-oil-exotica-touch-cuticle-oil-non-greasy-finish',
  '8belle-goddess-colloidal-gold-hand-body-cream-deeply-nourishing-regenerative-treatment-1-oz',
])

const eightbelleBatch = (): SeedDataset => ({
  categories: importedDataset.categories.filter((c) => c.slug === 'nail-care'),
  occasions: [],
  brands: importedDataset.brands.filter((b) => b.slug === '8belle'),
  retailers: importedDataset.retailers.filter((r) => r.slug === '8belle'),
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
  const batch = eightbelleBatch()
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
    scope: '8belle-batch',
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
          gallery?: unknown[]
          occasions?: unknown[]
          pros?: unknown[]
          cons?: unknown[]
          specifications?: unknown[]
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
      specificationsCount: doc.specifications?.length ?? 0,
      galleryCount: doc.gallery?.length ?? 0,
      occasionsCount: doc.occasions?.length ?? 0,
      ratingOverall: doc.ratings?.overall ?? null,
      retailerLinks: doc.retailerLinks?.map((r) => ({ affiliateUrl: r.affiliateUrl, price: r.price, currency: r.currency, retailer: r.retailer })),
    })
  }

  return NextResponse.json({ error: 'Missing ?counts=1, ?list=, ?categorySlug=, or ?slug=' }, { status: 400 })
}
