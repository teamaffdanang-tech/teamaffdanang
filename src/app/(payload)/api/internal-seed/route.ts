import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'

/**
 * Temporary, one-off production backfill endpoint — gated by MIGRATION_TEMP_SECRET
 * (set only in Vercel production env for this operation), not PAYLOAD_SECRET.
 * Runs the full unfiltered importedDataset (never a scoped subset) so occasionSlugs
 * stay complete per product — see AGENTS.md §8. Delete this route once the backfill
 * is verified.
 */
const isAuthorized = (req: NextRequest): boolean => {
  const secret = req.headers.get('x-migration-secret')
  return Boolean(secret) && secret === process.env.MIGRATION_TEMP_SECRET
}

export async function POST(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const payload = await getPayload({ config })
  await importSeedData(payload, importedDataset)

  return NextResponse.json({
    status: 'ok',
    categories: importedDataset.categories.length,
    brands: importedDataset.brands.length,
    retailers: importedDataset.retailers.length,
    products: importedDataset.products.length,
    coupons: importedDataset.coupons.length,
  })
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const slug = req.nextUrl.searchParams.get('slug')
  const categorySlug = req.nextUrl.searchParams.get('categorySlug')
  const counts = req.nextUrl.searchParams.get('counts')
  const payload = await getPayload({ config })

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

  if (categorySlug) {
    const cat = await payload.find({ collection: 'categories', where: { slug: { equals: categorySlug } }, limit: 1 })
    if (!cat.docs[0]) return NextResponse.json({ categorySlug, exists: false, productCount: 0 })
    const result = await payload.find({
      collection: 'products',
      where: { and: [{ categories: { equals: cat.docs[0].id } }, { _status: { equals: 'published' } }] },
      limit: 0,
    })
    return NextResponse.json({ categorySlug, exists: true, productCount: result.totalDocs })
  }

  if (!slug) return NextResponse.json({ error: 'Missing ?slug=, ?categorySlug=, or ?counts=1' }, { status: 400 })

  const result = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  const doc = result.docs[0] as
    | {
        id: number
        slug: string
        title: string
        bestFor?: string
        pros?: unknown[]
        cons?: unknown[]
        specifications?: unknown[]
        gallery?: unknown[]
        retailerLinks?: { affiliateUrl?: string; price?: number; retailer?: { slug?: string } }[]
        brand?: { slug?: string; name?: string }
        _status?: string
      }
    | undefined
  if (!doc) return NextResponse.json({ exists: false, slug })

  return NextResponse.json({
    exists: true,
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    status: doc._status,
    bestFor: doc.bestFor,
    prosCount: doc.pros?.length ?? 0,
    consCount: doc.cons?.length ?? 0,
    specificationsCount: doc.specifications?.length ?? 0,
    galleryCount: doc.gallery?.length ?? 0,
    brand: doc.brand,
    retailerLinks: doc.retailerLinks?.map((r) => ({ affiliateUrl: r.affiliateUrl, price: r.price, retailer: r.retailer })),
  })
}
