import type { Payload } from 'payload'

import type { ReferenceResolution } from './types'

// Auto-detected names (from a URL's domain, or a site's own JSON-LD brand field)
// rarely match an existing record's exact casing (e.g. detected "Stationerypal"
// vs. the stored "StationeryPal") — `like` does a case-insensitive match on
// Postgres, then an exact case-insensitive check confirms it's the same name
// rather than an unrelated substring match.
const findByName = async (
  payload: Payload,
  collection: 'brands' | 'retailers',
  name: string,
): Promise<{ id: number; name: string } | null> => {
  const result = await payload.find({
    collection,
    where: { name: { like: name } },
    limit: 10,
    depth: 0,
  })
  const docs = result.docs as { id: number; name: string }[]
  const match = docs.find((doc) => doc.name.toLowerCase() === name.toLowerCase())
  return match ? { id: match.id, name: match.name } : null
}

/**
 * Looks up existing Retailer/Brand by name — never creates anything. Category
 * is never guessable from a product page alone, so it's always left for the
 * user to assign during draft review.
 */
export const resolveReferences = async (
  payload: Payload,
  args: { retailerName: string; brandName?: string },
): Promise<ReferenceResolution> => {
  const retailer = await findByName(payload, 'retailers', args.retailerName)
  const brand = args.brandName ? await findByName(payload, 'brands', args.brandName) : null

  const missing: ReferenceResolution['missing'] = {}
  if (!retailer) missing.retailer = args.retailerName
  if (args.brandName && !brand) missing.brand = args.brandName

  return {
    category: null,
    brand,
    retailer,
    missing,
  }
}
