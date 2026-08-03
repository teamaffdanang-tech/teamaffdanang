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
  const couponCode = req.nextUrl.searchParams.get('couponCode')
  const payload = await getPayload({ config })

  if (couponCode) {
    const result = await payload.find({
      collection: 'coupons',
      where: { code: { equals: couponCode } },
      limit: 1,
      depth: 1,
    })
    const doc = result.docs[0] as
      | { id: number; code: string; discountValue?: number; termsNote?: string; isActive?: boolean; linkedProduct?: { slug?: string } | number }
      | undefined
    if (!doc) return NextResponse.json({ error: 'Not found', couponCode }, { status: 404 })
    return NextResponse.json({
      id: doc.id,
      code: doc.code,
      discountValue: doc.discountValue,
      termsNote: doc.termsNote,
      isActive: doc.isActive,
      linkedProduct: typeof doc.linkedProduct === 'object' ? doc.linkedProduct?.slug : doc.linkedProduct,
    })
  }

  if (!slug) return NextResponse.json({ error: 'Missing ?slug= or ?couponCode=' }, { status: 400 })

  const result = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1,
  })
  const doc = result.docs[0] as
    | { id: number; slug: string; title: string; occasions?: { slug: string; title: string }[]; gallery?: unknown[] }
    | undefined
  if (!doc) return NextResponse.json({ error: 'Not found', slug }, { status: 404 })

  return NextResponse.json({
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    occasions: doc.occasions?.map((o) => o.slug) ?? [],
    galleryCount: doc.gallery?.length ?? 0,
  })
}
