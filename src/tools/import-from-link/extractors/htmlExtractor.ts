import * as cheerio from 'cheerio'

import type { ExtractedProductData } from '../types'
import { fetchPage } from './fetchPage'
import type { ExtractorOutcome, ProductExtractor } from './types'

type JsonLdNode = Record<string, unknown>

const asArray = <T>(value: T | T[] | undefined): T[] => {
  if (value === undefined) return []
  return Array.isArray(value) ? value : [value]
}

const parsePrice = (raw: unknown): number | undefined => {
  if (typeof raw === 'number') return raw
  if (typeof raw === 'string') {
    const parsed = Number.parseFloat(raw.replace(/[^0-9.]/g, ''))
    return Number.isNaN(parsed) ? undefined : parsed
  }
  return undefined
}

const findJsonLdProduct = ($: cheerio.CheerioAPI): JsonLdNode | undefined => {
  const scripts = $('script[type="application/ld+json"]').toArray()

  for (const script of scripts) {
    const raw = $(script).contents().text()
    if (!raw?.trim()) continue

    let parsed: unknown
    try {
      parsed = JSON.parse(raw)
    } catch {
      continue
    }

    const candidates: JsonLdNode[] = []
    for (const node of asArray(parsed as JsonLdNode | JsonLdNode[])) {
      candidates.push(node)
      const graph = (node as { '@graph'?: JsonLdNode[] })['@graph']
      if (Array.isArray(graph)) candidates.push(...graph)
    }

    // Shopify (and others) often wrap variants in a top-level ProductGroup rather
    // than a plain Product node, so a page can be a genuine product page without
    // ever having a bare "@type": "Product" at the top level.
    const product = candidates.find((node) => {
      const type = node['@type']
      return (
        type === 'Product' ||
        type === 'ProductGroup' ||
        (Array.isArray(type) && (type.includes('Product') || type.includes('ProductGroup')))
      )
    })
    if (product) return product
  }

  return undefined
}

const extractFromJsonLd = (product: JsonLdNode): Partial<ExtractedProductData> => {
  const result: Partial<ExtractedProductData> = {}

  if (typeof product.name === 'string') result.title = product.name
  if (typeof product.description === 'string') result.description = product.description

  const images = asArray(product.image as string | string[] | undefined).filter(
    (src): src is string => typeof src === 'string',
  )
  if (images.length) result.imageUrls = images

  const brand = product.brand as { name?: string } | string | undefined
  if (typeof brand === 'string') result.brandName = brand
  else if (brand && typeof brand.name === 'string') result.brandName = brand.name

  // A ProductGroup (Shopify's "product with variants" wrapper) often carries
  // price/image/rating on its first variant rather than on itself directly.
  const firstVariant = asArray(product.hasVariant as JsonLdNode | JsonLdNode[] | undefined)[0]
  const offers = asArray((product.offers ?? firstVariant?.offers) as JsonLdNode | JsonLdNode[] | undefined)[0]
  if (offers) {
    const price = parsePrice(offers.price ?? offers.lowPrice)
    if (price !== undefined) result.price = price
    if (typeof offers.priceCurrency === 'string') result.currency = offers.priceCurrency
  }

  if (!result.imageUrls?.length && firstVariant) {
    const variantImages = asArray(firstVariant.image as string | string[] | undefined).filter(
      (src): src is string => typeof src === 'string',
    )
    if (variantImages.length) result.imageUrls = variantImages
  }

  const aggregateRating = (product.aggregateRating ?? firstVariant?.aggregateRating) as
    | { ratingValue?: unknown }
    | undefined
  if (aggregateRating) {
    const rating = parsePrice(aggregateRating.ratingValue)
    if (rating !== undefined) result.rating = rating
  }

  return result
}

const extractFromMetaTags = ($: cheerio.CheerioAPI): Partial<ExtractedProductData> => {
  const meta = (name: string) =>
    $(`meta[property="${name}"]`).attr('content') || $(`meta[name="${name}"]`).attr('content') || undefined

  const result: Partial<ExtractedProductData> = {}

  const title = meta('og:title') || $('title').first().text().trim() || undefined
  if (title) result.title = title

  const description = meta('og:description') || meta('description')
  if (description) result.description = description

  const image = meta('og:image:secure_url') || meta('og:image')
  if (image) result.imageUrls = [image]

  const price = parsePrice(meta('product:price:amount') || meta('og:price:amount'))
  if (price !== undefined) result.price = price

  const currency = meta('product:price:currency') || meta('og:price:currency')
  if (currency) result.currency = currency

  return result
}

const REQUIRED_FIELDS: (keyof ExtractedProductData)[] = ['title', 'price', 'description', 'rating']
export const ALL_TRACKED_FIELDS: string[] = [...REQUIRED_FIELDS, 'imageUrls']

export const computeMissingFields = (data: ExtractedProductData): string[] => {
  const missing: string[] = REQUIRED_FIELDS.filter((field) => data[field] === undefined)
  if (data.imageUrls.length === 0) missing.push('imageUrls')
  return missing
}

/**
 * Pure HTML analysis (no fetching) — extracts product fields and reports
 * whether a schema.org/Product JSON-LD block was actually found, which
 * draft.ts uses to decide "this is a product page" vs. "this looks like a
 * listing/collection page" without re-fetching the same URL.
 */
export const extractProductFromHtml = (html: string): { data: ExtractedProductData; hasProductSchema: boolean } => {
  const $ = cheerio.load(html)
  const jsonLdProduct = findJsonLdProduct($)

  // JSON-LD Product schema is more structured/reliable than OG tags, so it wins
  // when both are present; OG tags fill in whatever JSON-LD didn't provide.
  const data: ExtractedProductData = {
    imageUrls: [],
    ...extractFromMetaTags($),
    ...(jsonLdProduct ? extractFromJsonLd(jsonLdProduct) : {}),
  }

  return { data, hasProductSchema: Boolean(jsonLdProduct) }
}

/** Standalone ProductExtractor (fetches its own page) — used via the registry
 * for any retailer that isn't already covered by draft.ts's shared fetch. */
export const htmlExtractor: ProductExtractor = async (url) => {
  const page = await fetchPage(url)

  if (page.blocked) {
    return { data: { imageUrls: [] }, missingFields: [], blocked: true, error: page.error }
  }
  if (!page.html) {
    return { data: { imageUrls: [] }, missingFields: ALL_TRACKED_FIELDS, blocked: false, error: page.error }
  }

  const { data } = extractProductFromHtml(page.html)
  const outcome: ExtractorOutcome = { data, missingFields: computeMissingFields(data), blocked: false }
  return outcome
}
