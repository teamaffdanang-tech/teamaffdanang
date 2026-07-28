import type { Retailer } from '@/payload-types'

/**
 * Combines a product's clean base URL with its retailer's tracking param
 * (e.g. "ref=nnsfaquk") at render time. Kept separate in the schema — Products
 * never store a tracking code inline — so rotating a retailer's affiliate
 * code only requires editing the Retailer once, not every product.
 */
export const buildAffiliateUrl = (baseUrl: string, retailer: Retailer | number | null | undefined): string => {
  if (!retailer || typeof retailer === 'number' || !retailer.trackingParam) return baseUrl
  const separator = baseUrl.includes('?') ? '&' : '?'
  return `${baseUrl}${separator}${retailer.trackingParam}`
}
