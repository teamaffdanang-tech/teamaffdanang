import { NextRequest, NextResponse } from 'next/server'

import { getPayloadClient } from '@/lib/payload'

/**
 * One-time production schema fix: Payload's Postgres adapter only auto-pushes
 * schema changes when NODE_ENV !== 'production' (see
 * node_modules/@payloadcms/db-postgres/dist/connect.js), so the `currency`
 * enum/column added in this batch never reached the production database via
 * the normal dev-server push. This route applies the equivalent DDL directly,
 * gated by PAYLOAD_SECRET so it can't be triggered by anyone else. Delete
 * this file once run.
 */
export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-migration-secret')
  if (!secret || secret !== process.env.PAYLOAD_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }

  const payload = await getPayloadClient()
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

  return NextResponse.json({ status: 'ok' })
}
