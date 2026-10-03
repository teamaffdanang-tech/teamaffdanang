import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import { importedDataset } from '@/seed/data/imported'
import { importSeedData } from '@/seed/import'
import type { SeedDataset } from '@/seed/types'

export const maxDuration = 300
export const dynamic = 'force-dynamic'

// Retailers-only seed: upserts every retailer by slug (idempotent). No products,
// categories, brands, or coupons are touched.
const retailersOnly: SeedDataset = {
  categories: [],
  occasions: [],
  brands: [],
  retailers: importedDataset.retailers,
  authors: [],
  products: [],
  coupons: [],
  blogPosts: [],
}

const isAuth = (req: NextRequest) => {
  const s = req.headers.get('x-migration-secret')
  return Boolean(s) && s === process.env.MIGRATION_TEMP_SECRET
}

export async function POST(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = await getPayload({ config })
  await importSeedData(payload, retailersOnly)
  const r = await payload.find({ collection: 'retailers', where: {}, limit: 0 })
  return NextResponse.json({ status: 'ok', seededRetailers: retailersOnly.retailers.length, totalRetailers: r.totalDocs })
}

export async function GET(req: NextRequest) {
  if (!isAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  const payload = await getPayload({ config })
  const r = await payload.find({ collection: 'retailers', where: {}, limit: 0 })
  return NextResponse.json({ totalRetailers: r.totalDocs })
}
