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
 * POST is scoped to the Luxury Watch Tools batch ONLY (37 new products, 3 new
 * brands, 1 new retailer, plus the new `watch-repair-tools` category). No
 * existing product is re-seeded. Uses existing USD currency — no migration.
 *
 * Delete this route (and the MIGRATION_TEMP_SECRET env) once verified.
 */
export const maxDuration = 300
export const dynamic = 'force-dynamic'

const isLwt = (slug: string) => slug.startsWith('lwt-')

const lwtBatch = (): SeedDataset => ({
  categories: importedDataset.categories.filter((c) => c.slug === 'watch-repair-tools'),
  occasions: [],
  brands: importedDataset.brands.filter((b) => ['bergeon', 'horotec', 'elma'].includes(b.slug)),
  retailers: importedDataset.retailers.filter((r) => r.slug === 'luxury-watch-tools'),
  authors: [],
  products: importedDataset.products.filter((p) => isLwt(p.slug)),
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
  const batch = lwtBatch()
  await importSeedData(payload, batch)

  const imported = await payload.find({
    collection: 'products',
    where: { slug: { like: 'lwt-' } },
    limit: 100,
    depth: 0,
    pagination: false,
  })

  return NextResponse.json({
    status: 'ok',
    scope: 'luxury-watch-tools-batch',
    seeded: {
      categories: batch.categories.length,
      brands: batch.brands.length,
      retailers: batch.retailers.length,
      products: batch.products.length,
    },
    productsNowInDb: imported.docs.length,
  })
}

export async function GET(req: NextRequest) {
  if (!isAuthorized(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const payload = await getPayload({ config })
  const counts = req.nextUrl.searchParams.get('counts')
  const categorySlug = req.nextUrl.searchParams.get('categorySlug')
  const listCollection = req.nextUrl.searchParams.get('list')
  const verify = req.nextUrl.searchParams.get('verify')
  const images = req.nextUrl.searchParams.get('images')

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

  if (verify || images) {
    const res = await payload.find({ collection: 'products', where: { slug: { like: 'lwt-' } }, limit: 200, depth: 2, pagination: false })
    const slugs = new Set<string>()
    const affUrls = new Set<string>()
    const brandCount: Record<string, number> = {}
    const allImages: string[] = []
    let problems = 0
    const bad: string[] = []
    for (const d0 of res.docs) {
      const d = d0 as unknown as Record<string, unknown>
      const slug = String(d.slug)
      const rl = ((d.retailerLinks as Record<string, unknown>[]) || [])[0] || {}
      const ret = (rl.retailer as Record<string, unknown>) || {}
      const brand = (d.brand as Record<string, unknown>)?.slug as string | undefined
      const cats = ((d.categories as Record<string, unknown>[]) || []).map((c) => (c as Record<string, unknown>)?.slug)
      const ratings = (d.ratings as Record<string, unknown>) || {}
      const gallery = (d.gallery as Record<string, unknown>[]) || []
      const aff = String(rl.affiliateUrl || '')
      const off = String(d.officialUrl || '')
      const dupSlug = slugs.has(slug); slugs.add(slug)
      const dupUrl = affUrls.has(aff); affUrls.add(aff)
      if (brand) brandCount[brand] = (brandCount[brand] || 0) + 1
      for (const g of gallery) {
        const url = (g.image as Record<string, unknown>)?.url as string | undefined
        if (url) allImages.push(url)
      }
      const ok =
        d._status === 'published' && cats.includes('watch-repair-tools') &&
        ret.slug === 'luxury-watch-tools' && ret.network === 'GoAffPro' && rl.currency === 'USD' &&
        !aff.includes('?') && aff === off &&
        (ratings.overall === undefined || ratings.overall === null) &&
        ((d.occasions as unknown[]) || []).length === 0 && gallery.length >= 1 && !dupSlug && !dupUrl
      if (!ok) { problems++; bad.push(slug) }
    }
    if (images) return NextResponse.json({ totalImages: allImages.length, images: allImages })
    return NextResponse.json({
      totalLwt: res.totalDocs, brandCount, uniqueSlugs: slugs.size,
      uniqueAffUrls: affUrls.size, totalImages: allImages.length, problems, bad,
    })
  }

  return NextResponse.json({ error: 'Missing ?counts=1, ?list=, ?categorySlug=, ?verify=1, or ?images=1' }, { status: 400 })
}
