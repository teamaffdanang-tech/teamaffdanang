import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'

/**
 * One-time READ-ONLY diagnostic for the "Back to School" occasion
 * investigation, gated by PAYLOAD_SECRET. No writes anywhere — only
 * payload.find(). Delete this file once the investigation is done.
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-migration-secret')
  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const payload = await getPayloadClient()

  const backToSchool = await payload.find({
    collection: 'occasions',
    where: { slug: { equals: 'back-to-school' } },
    limit: 1,
    depth: 0,
  })

  const brand = await payload.find({
    collection: 'brands',
    where: { slug: { equals: 'apolosign' } },
    limit: 1,
    depth: 0,
  })

  let apolosignProducts: unknown[] = []
  if (brand.docs[0]) {
    const brandId = (brand.docs[0] as { id: number }).id
    const products = await payload.find({
      collection: 'products',
      where: { brand: { equals: brandId } },
      limit: 100,
      depth: 0,
    })
    apolosignProducts = products.docs.map((p) => {
      const doc = p as { slug: string; title: string; occasions?: number[]; updatedAt: string; createdAt: string }
      return { slug: doc.slug, title: doc.title, occasions: doc.occasions, updatedAt: doc.updatedAt, createdAt: doc.createdAt }
    })
  }

  let productsWithBackToSchool: unknown[] = []
  if (backToSchool.docs[0]) {
    const btsId = (backToSchool.docs[0] as { id: number }).id
    const result = await payload.find({
      collection: 'products',
      where: { occasions: { equals: btsId } },
      limit: 100,
      depth: 0,
    })
    productsWithBackToSchool = result.docs.map((p) => {
      const doc = p as { slug: string; title: string }
      return { slug: doc.slug, title: doc.title }
    })
  }

  return NextResponse.json({
    backToSchoolOccasion: backToSchool.docs[0] ?? null,
    apolosignBrand: brand.docs[0] ?? null,
    apolosignProducts,
    productsWithBackToSchool,
    totalWithBackToSchool: productsWithBackToSchool.length,
  })
}
