import type { Payload, Where } from 'payload'

import type { Product } from '@/payload-types'

const toIds = (relations: Product['categories'] | Product['occasions']): number[] =>
  (relations || []).map((rel) => (typeof rel === 'number' ? rel : rel.id))

/**
 * Internal-linking helper: finds other published products sharing at least
 * one Category or Occasion with the given product, for "related products"
 * blocks on the product detail page (wired up in Milestone 6).
 */
export const getRelatedProducts = async (
  payload: Payload,
  product: Product,
  limit = 4,
): Promise<Product[]> => {
  const categoryIds = toIds(product.categories)
  const occasionIds = toIds(product.occasions)

  if (categoryIds.length === 0 && occasionIds.length === 0) return []

  const or: Where[] = []
  if (categoryIds.length) or.push({ categories: { in: categoryIds } })
  if (occasionIds.length) or.push({ occasions: { in: occasionIds } })

  const result = await payload.find({
    collection: 'products',
    where: {
      and: [{ id: { not_equals: product.id } }, { _status: { equals: 'published' } }, { or }],
    },
    limit,
    depth: 1,
  })

  return result.docs
}
