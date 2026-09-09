import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'
export const maxDuration = 300
export const dynamic = 'force-dynamic'
const ALLOWED = new Set(['b1-'])
const buildSubset = (prefix: string): SeedDataset => {
  const products = importedDataset.products.filter((p) => p.slug.startsWith(prefix))
  const cats = new Set<string>(); const brands = new Set<string>(); const rets = new Set<string>()
  for (const p of products) { (p.categorySlugs || []).forEach((c) => cats.add(c)); if (p.brandSlug) brands.add(p.brandSlug); for (const rl of p.retailerLinks || []) if (rl.retailerSlug) rets.add(rl.retailerSlug) }
  return { categories: importedDataset.categories.filter((c) => cats.has(c.slug)), occasions: [], brands: importedDataset.brands.filter((b) => brands.has(b.slug)), retailers: importedDataset.retailers.filter((r) => rets.has(r.slug)), authors: [], products, coupons: [], blogPosts: [] }
}
const isAuth = (req: NextRequest) => { const s = req.headers.get('x-migration-secret'); return Boolean(s) && s === process.env.MIGRATION_TEMP_SECRET }
export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const prefix = req.nextUrl.searchParams.get('prefix') || ''
  if (!ALLOWED.has(prefix)) return NextResponse.json({ error: 'bad prefix' }, { status: 400 })
  const payload = await getPayload({ config })
  const subset = buildSubset(prefix)
  await importSeedData(payload, subset)
  const now = await payload.find({ collection: 'products', where: { slug: { like: prefix } }, limit: 500, depth: 0, pagination: false })
  const n = now.docs.filter((d) => String((d as { slug?: string }).slug || '').startsWith(prefix)).length
  return NextResponse.json({ status: 'ok', prefix, seeded: { categories: subset.categories.length, brands: subset.brands.length, retailers: subset.retailers.length, products: subset.products.length }, productsNowInDb: n })
}
export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = await getPayload({ config })
  const counts = req.nextUrl.searchParams.get('counts'); const verify = req.nextUrl.searchParams.get('verify'); const images = req.nextUrl.searchParams.get('images')
  if (counts) {
    const [p, c, b, r] = await Promise.all([payload.find({ collection: 'products', where: {}, limit: 0 }), payload.find({ collection: 'categories', where: {}, limit: 0 }), payload.find({ collection: 'brands', where: {}, limit: 0 }), payload.find({ collection: 'retailers', where: {}, limit: 0 })])
    return NextResponse.json({ totalProducts: p.totalDocs, totalCategories: c.totalDocs, totalBrands: b.totalDocs, totalRetailers: r.totalDocs })
  }
  const prefix = verify || images
  if (prefix) {
    const res = await payload.find({ collection: 'products', where: { slug: { like: prefix } }, limit: 500, depth: 2, pagination: false })
    const docs = res.docs.filter((d) => String((d as { slug?: string }).slug || '').startsWith(prefix))
    if (images) { const urls: string[] = []; for (const d0 of docs) { for (const g of (((d0 as unknown as Record<string, unknown>).gallery as Record<string, unknown>[]) || [])) { const u = (g.image as Record<string, unknown>)?.url as string | undefined; if (u) urls.push(u) } } return NextResponse.json({ prefix, totalImages: urls.length, images: urls }) }
    const slugs = new Set<string>(); const affs = new Set<string>(); const brandCount: Record<string, number> = {}; const catCount: Record<string, number> = {}; let problems = 0; const bad: string[] = []
    for (const d0 of docs) {
      const d = d0 as unknown as Record<string, unknown>; const slug = String(d.slug)
      const rl = ((d.retailerLinks as Record<string, unknown>[]) || [])[0] || {}; const ret = (rl.retailer as Record<string, unknown>) || {}
      const brand = (d.brand as Record<string, unknown>)?.slug as string | undefined
      const cats = ((d.categories as Record<string, unknown>[]) || []).map((c) => (c as Record<string, unknown>)?.slug as string)
      const ratings = (d.ratings as Record<string, unknown>) || {}; const gallery = (d.gallery as unknown[]) || []
      const aff = String(rl.affiliateUrl || ''); const off = String(d.officialUrl || '')
      const dupSlug = slugs.has(slug); slugs.add(slug); const dupAff = affs.has(aff); affs.add(aff)
      if (brand) brandCount[brand] = (brandCount[brand] || 0) + 1; for (const c of cats) catCount[c] = (catCount[c] || 0) + 1
      const ok = d._status === 'published' && cats.length > 0 && !!ret.slug && rl.currency === 'USD' && !aff.includes('?') && aff === off && (ratings.overall === undefined || ratings.overall === null) && ((d.occasions as unknown[]) || []).length === 0 && gallery.length >= 1 && !dupSlug && !dupAff
      if (!ok) { problems++; bad.push(slug) }
    }
    return NextResponse.json({ prefix, count: slugs.size, uniqueAff: affs.size, brandCount, catCount, problems, bad })
  }
  return NextResponse.json({ error: 'use ?counts=1|?verify=|?images=' }, { status: 400 })
}
