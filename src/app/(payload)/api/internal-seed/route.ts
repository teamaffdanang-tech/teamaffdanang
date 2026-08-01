import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

/**
 * One-time production backfill for the Back to School blog batch,
 * gated by PAYLOAD_SECRET. Scoped to exactly the ApoloSign-related slice
 * of the dataset (category/brand/retailer/occasions/products already
 * exist in production as direct DB records; the 3 blog posts are new) so
 * the upsert never touches unrelated products (StationeryPal, LukeCase,
 * Vaucluse). Delete this file once run.
 */
const PRODUCT_SLUGS = [
  'apolosign-32-inch-smart-portable-tv',
  'apolosign-24-inch-smart-portable-tv',
  'apolosign-packgo-27-portable-tv',
  'apolosign-15-6-digital-calendar',
  'apolosign-21-5-digital-calendar',
  'apolosign-27-digital-calendar',
  'apolosign-27-4k-digital-calendar',
]
const BLOG_POST_SLUGS = [
  'back-to-school-tech-essentials-dorm-room-displays',
  'best-portable-tv-college-dorms-2026',
  'digital-calendar-for-students-stay-on-top-of-deadlines',
]

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-migration-secret')
  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const payload = await getPayloadClient()

  const scopedDataset: SeedDataset = {
    categories: importedDataset.categories.filter((c) => c.slug === 'smart-displays'),
    occasions: importedDataset.occasions.filter((o) => ['back-to-school', 'black-friday'].includes(o.slug)),
    brands: importedDataset.brands.filter((b) => b.slug === 'apolosign'),
    retailers: importedDataset.retailers.filter((r) => r.slug === 'apolosign'),
    authors: [],
    products: importedDataset.products.filter((p) => PRODUCT_SLUGS.includes(p.slug)),
    blogPosts: importedDataset.blogPosts.filter((b) => BLOG_POST_SLUGS.includes(b.slug)),
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
    products: scopedDataset.products.length,
    blogPosts: scopedDataset.blogPosts.length,
    errors,
  })
}
