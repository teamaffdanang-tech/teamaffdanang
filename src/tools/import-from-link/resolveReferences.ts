import type { Payload } from 'payload'

import type { ReferenceResolution } from './types'

const findByName = async (
  payload: Payload,
  collection: 'brands' | 'retailers',
  nameField: 'name',
  name: string,
): Promise<{ id: number; name: string } | null> => {
  const result = await payload.find({
    collection,
    where: { [nameField]: { equals: name } },
    limit: 1,
    depth: 0,
  })
  const doc = result.docs[0] as { id: number; name: string } | undefined
  return doc ? { id: doc.id, name: doc.name } : null
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
  const retailer = await findByName(payload, 'retailers', 'name', args.retailerName)
  const brand = args.brandName ? await findByName(payload, 'brands', 'name', args.brandName) : null

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
