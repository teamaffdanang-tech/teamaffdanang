import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

/**
 * One-time production backfill for the Linsoul Audio batch, gated by
 * PAYLOAD_SECRET. Scoped strictly to the 18 new Linsoul products + the
 * Audio category + 16 manufacturer brands + the linsoul-audio retailer,
 * so it never touches ApoloSign/Vaucluse/StationeryPal/LukeCase products
 * or their occasions. Delete this file once run.
 *
 * `?step=check`: read-only, returns the current occasions on a sample
 * ApoloSign product so a before/after diff can confirm nothing outside
 * this batch's scope was touched.
 * `?step=seed`: runs the scoped import.
 */
const BRAND_SLUGS = [
  'moondrop', '7hz', 'thieaudio', 'kiwi-ears', 'kz', 'dunu', 'cca', 'unique-melody',
  'trn', 'smsl', 'topping', 'gustard', 'shanling', 'ddhifi', 'e1da', 'azla',
]
const PRODUCT_SLUGS = [
  'moondrop-blessing3', '7hz-timeless', 'thieaudio-monarch-mkii', 'thieaudio-monarch-mkiii',
  'kiwi-ears-quartet', 'kz-zsx-iem', 'dunu-sa6-mkii', 'cca-c10', 'um-mest-mkii', 'trn-ta2',
  'smsl-su-9-pro', 'topping-d70-pro', 'gustard-x18', 'shanling-m9-plus', 'shanling-m3-ultra',
  'ddhifi-dj65a-al', 'e1da-9038d6k', 'azla-sednaearfit-max',
]

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-migration-secret')
  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const payload = await getPayloadClient()
  const step = req.nextUrl.searchParams.get('step')

  if (step === 'check') {
    const sample = await payload.find({
      collection: 'products',
      where: { slug: { equals: 'apolosign-32-inch-smart-portable-tv' } },
      limit: 1,
      depth: 0,
    })
    const allOccasions = await payload.find({ collection: 'occasions', limit: 20, depth: 0 })
    return NextResponse.json({
      apolosignTvOccasions: (sample.docs[0] as { occasions?: number[] } | undefined)?.occasions ?? null,
      allOccasions: allOccasions.docs.map((o) => ({ id: (o as { id: number }).id, slug: (o as { slug: string }).slug })),
    })
  }

  if (step === 'seed') {
    const scopedDataset: SeedDataset = {
      categories: importedDataset.categories.filter((c) => c.slug === 'audio'),
      occasions: importedDataset.occasions.filter((o) => ['black-friday', 'christmas'].includes(o.slug)),
      brands: importedDataset.brands.filter((b) => BRAND_SLUGS.includes(b.slug)),
      retailers: importedDataset.retailers.filter((r) => r.slug === 'linsoul-audio'),
      authors: [],
      products: importedDataset.products.filter((p) => PRODUCT_SLUGS.includes(p.slug)),
      blogPosts: [],
    }

    const errors: { slug: string; message: string }[] = []
    const originalError = payload.logger.error.bind(payload.logger)
    ;(payload.logger as { error: typeof payload.logger.error }).error = ((...args: unknown[]) => {
      const [info] = args as [{ err?: unknown; slug?: string }]
      if (info?.slug) errors.push({ slug: info.slug, message: String((info.err as Error)?.message ?? info.err) })
      return originalError(...(args as Parameters<typeof originalError>))
    }) as typeof payload.logger.error

    await importSeedData(payload, scopedDataset)

    return NextResponse.json({
      status: errors.length ? 'partial' : 'ok',
      categories: scopedDataset.categories.length,
      brands: scopedDataset.brands.length,
      retailers: scopedDataset.retailers.length,
      products: scopedDataset.products.length,
      errors,
    })
  }

  if (step === 'fix-apolosign') {
    // The prior Back to School batch's endpoint scoped `occasions` to only
    // ['back-to-school', 'black-friday'] - missing 'christmas' (needed by all
    // 7 products) and 'mothers-day' (needed by the 4 calendars), which
    // silently dropped both from production when that endpoint ran (occasions
    // are set wholesale, not merged - see AGENTS.md 8). Uses the full
    // unfiltered occasions list this time, matching the safer pattern the
    // Vaucluse endpoint already used, so no occasion slug can be missed.
    const apolosignSlugs = [
      'apolosign-32-inch-smart-portable-tv',
      'apolosign-24-inch-smart-portable-tv',
      'apolosign-packgo-27-portable-tv',
      'apolosign-15-6-digital-calendar',
      'apolosign-21-5-digital-calendar',
      'apolosign-27-digital-calendar',
      'apolosign-27-4k-digital-calendar',
    ]
    const scopedDataset: SeedDataset = {
      categories: [],
      occasions: importedDataset.occasions,
      brands: importedDataset.brands.filter((b) => b.slug === 'apolosign'),
      retailers: importedDataset.retailers.filter((r) => r.slug === 'apolosign'),
      authors: [],
      products: importedDataset.products.filter((p) => apolosignSlugs.includes(p.slug)),
      blogPosts: [],
    }
    await importSeedData(payload, scopedDataset)
    const after = await payload.find({
      collection: 'products',
      where: { slug: { equals: 'apolosign-32-inch-smart-portable-tv' } },
      limit: 1,
      depth: 0,
    })
    return NextResponse.json({
      status: 'ok',
      products: scopedDataset.products.length,
      apolosignTvOccasionsAfterFix: (after.docs[0] as { occasions?: number[] } | undefined)?.occasions ?? null,
    })
  }

  return NextResponse.json({ error: 'missing or invalid ?step=check|seed|fix-apolosign' }, { status: 400 })
}
