import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Coupon batch: the 9 new merchants + the already-live SoftEdit brand (coupon only).
const BRANDS = new Set([
  '3dkeycap', 'hopsandpops', 'goimu', 'autel', 'oiwas',
  'elephant-robotics', 'wysong', 'intimate-queen', 'fubon', 'softedit-skin',
])

const buildSubset = (): SeedDataset => {
  // Only seed the NEW c1- products (SoftEdit products already live — don't re-download).
  const products = importedDataset.products.filter(
    (p) => p.brandSlug && BRANDS.has(p.brandSlug) && p.slug.startsWith('c1-'),
  )
  const cats = new Set<string>()
  const rets = new Set<string>()
  for (const p of products) {
    ;(p.categorySlugs || []).forEach((c) => cats.add(c))
    for (const rl of p.retailerLinks || []) if (rl.retailerSlug) rets.add(rl.retailerSlug)
  }
  const coupons = importedDataset.coupons.filter((c) => c.linkedBrandSlug && BRANDS.has(c.linkedBrandSlug))
  return {
    categories: importedDataset.categories.filter((c) => cats.has(c.slug)),
    occasions: [],
    brands: importedDataset.brands.filter((b) => BRANDS.has(b.slug)),
    retailers: importedDataset.retailers.filter((r) => rets.has(r.slug) || BRANDS.has(r.slug)),
    authors: [],
    products,
    coupons,
    blogPosts: [],
  }
}

const isAuth = (req: NextRequest) => {
  const s = req.headers.get('x-migration-secret')
  return Boolean(s) && s === process.env.MIGRATION_TEMP_SECRET
}

export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = await getPayload({ config })
  const subset = buildSubset()
  await importSeedData(payload, subset)
  return NextResponse.json({
    status: 'ok',
    seeded: {
      categories: subset.categories.length,
      brands: subset.brands.length,
      retailers: subset.retailers.length,
      products: subset.products.length,
      coupons: subset.coupons.length,
    },
  })
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = await getPayload({ config })
  const counts = req.nextUrl.searchParams.get('counts')
  const verify = req.nextUrl.searchParams.get('verify')
  if (counts) {
    const [p, c, b, r, cp] = await Promise.all([
      payload.find({ collection: 'products', where: {}, limit: 0 }),
      payload.find({ collection: 'categories', where: {}, limit: 0 }),
      payload.find({ collection: 'brands', where: {}, limit: 0 }),
      payload.find({ collection: 'retailers', where: {}, limit: 0 }),
      payload.find({ collection: 'coupons', where: {}, limit: 0 }),
    ])
    return NextResponse.json({
      totalProducts: p.totalDocs,
      totalCategories: c.totalDocs,
      totalBrands: b.totalDocs,
      totalRetailers: r.totalDocs,
      totalCoupons: cp.totalDocs,
    })
  }
  if (verify === 'coupons') {
    const codes = ['TEAMAFFDANANG', 'AFFTEAMDN', 'DA', 'DANA', 'DANA50']
    const res = await payload.find({
      collection: 'coupons',
      where: { code: { in: codes } },
      depth: 1,
      limit: 200,
      pagination: false,
    })
    const rows = (res.docs as unknown as Record<string, unknown>[]).map((d) => {
      const brand = d.linkedBrand as Record<string, unknown> | null
      const prod = d.linkedProduct as Record<string, unknown> | null
      return {
        code: d.code,
        discountType: d.discountType,
        discountValue: d.discountValue,
        scope: d.scope,
        brand: brand?.slug ?? brand?.name ?? null,
        anchor: prod?.slug ?? null,
        isActive: d.isActive,
      }
    })
    return NextResponse.json({ count: rows.length, coupons: rows })
  }
  return NextResponse.json({ error: 'use ?counts=1 | ?verify=coupons' }, { status: 400 })
}
