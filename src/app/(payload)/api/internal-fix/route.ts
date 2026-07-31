import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'

/**
 * One-time production fix: add the "Back to School" occasion to 7 specific
 * ApoloSign products (4 digital calendars, 3 portable TVs), additive only —
 * existing occasions (Christmas/Mother's Day/Black Friday) are preserved,
 * not replaced. Confirmed by the user after investigation showed these
 * products never had this occasion since creation (not a regression).
 * Gated by PAYLOAD_SECRET. Delete this file once run.
 */
const TARGET_SLUGS = [
  'apolosign-15-6-digital-calendar',
  'apolosign-21-5-digital-calendar',
  'apolosign-27-digital-calendar',
  'apolosign-27-4k-digital-calendar',
  'apolosign-32-inch-smart-portable-tv',
  'apolosign-24-inch-smart-portable-tv',
  'apolosign-packgo-27-portable-tv',
]

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
  const btsId = (backToSchool.docs[0] as { id: number } | undefined)?.id
  if (!btsId) {
    return NextResponse.json({ error: 'back-to-school occasion not found' }, { status: 500 })
  }

  const results: { slug: string; before: number[]; after: number[] }[] = []

  for (const slug of TARGET_SLUGS) {
    const found = await payload.find({
      collection: 'products',
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    })
    const doc = found.docs[0] as { id: number; occasions?: number[] } | undefined
    if (!doc) {
      results.push({ slug, before: [], after: [] })
      continue
    }
    const before = doc.occasions ?? []
    if (before.includes(btsId)) {
      results.push({ slug, before, after: before })
      continue
    }
    const after = [...before, btsId]
    await payload.update({
      collection: 'products',
      id: doc.id,
      data: { occasions: after },
    })
    results.push({ slug, before, after })
  }

  return NextResponse.json({ status: 'ok', results })
}
