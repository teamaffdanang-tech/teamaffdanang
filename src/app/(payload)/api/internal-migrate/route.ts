import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

/**
 * One-time production fixes for the Vaucluse Fragrance batch, gated by
 * PAYLOAD_SECRET so nobody else can trigger it. Delete this file once run.
 *
 * `?step=schema`: Payload's Postgres adapter only auto-pushes schema changes
 * when NODE_ENV !== 'production' (see node_modules/@payloadcms/db-postgres/
 * dist/connect.js), so the `currency` enum/column added in this batch never
 * reached production via the normal dev-server push. Applies the equivalent
 * DDL directly.
 *
 * `?step=data`: `npm run seed` was only ever run against the dev database
 * this session, so the Home Fragrance category / Vaucluse brand+retailer /
 * 78 products only exist in dev, never in production. Scoped to exactly the
 * new Vaucluse-only slice of the dataset (all brand-new slugs, so upsert is
 * guaranteed to create — never touches the pre-existing 50 products).
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-migration-secret')
  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const step = req.nextUrl.searchParams.get('step')
  const payload = await getPayloadClient()

  if (step === 'schema') {
    const pool = (payload.db as { pool: { query: (sql: string) => Promise<unknown> } }).pool
    await pool.query(`
      DO $$ BEGIN
        CREATE TYPE "enum_products_retailer_links_currency" AS ENUM ('USD', 'HKD');
      EXCEPTION WHEN duplicate_object THEN null;
      END $$;
    `)
    await pool.query(`
      ALTER TABLE "products_retailer_links"
        ADD COLUMN IF NOT EXISTS "currency" "enum_products_retailer_links_currency" DEFAULT 'USD';
    `)
    return NextResponse.json({ status: 'ok', step: 'schema' })
  }

  if (step === 'data') {
    const scopedDataset: SeedDataset = {
      categories: importedDataset.categories.filter((c) => c.slug === 'home-fragrance'),
      occasions: importedDataset.occasions,
      brands: importedDataset.brands.filter((b) => b.slug === 'vaucluse-fragrance'),
      retailers: importedDataset.retailers.filter((r) => r.slug === 'vaucluse-fragrance'),
      authors: [],
      products: importedDataset.products.filter((p) => p.brandSlug === 'vaucluse-fragrance'),
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
      step: 'data',
      attempted: scopedDataset.products.length,
      errors,
    })
  }

  if (step === 'verify') {
    const [category, brand, retailer, products] = await Promise.all([
      payload.find({ collection: 'categories', where: { slug: { equals: 'home-fragrance' } }, limit: 1, depth: 0 }),
      payload.find({ collection: 'brands', where: { slug: { equals: 'vaucluse-fragrance' } }, limit: 1, depth: 0 }),
      payload.find({ collection: 'retailers', where: { slug: { equals: 'vaucluse-fragrance' } }, limit: 1, depth: 0 }),
      payload.find({ collection: 'products', where: { slug: { equals: 'blossom-eau-de-parfum' } }, limit: 1, depth: 0 }),
    ])
    const categoryDoc = category.docs[0] as { id: number } | undefined
    const totalProducts = categoryDoc
      ? await payload.find({
          collection: 'products',
          where: { categories: { equals: categoryDoc.id } },
          limit: 0,
          depth: 0,
        })
      : null
    return NextResponse.json({
      categoryFound: category.docs.length > 0,
      brandFound: brand.docs.length > 0,
      retailerFound: retailer.docs.length > 0,
      sampleProductFound: products.docs.length > 0,
      sampleProduct: products.docs[0] ?? null,
      totalProductsInCategory: totalProducts?.totalDocs ?? 0,
    })
  }

  return NextResponse.json({ error: 'missing or invalid ?step=schema|data|verify' }, { status: 400 })
}
