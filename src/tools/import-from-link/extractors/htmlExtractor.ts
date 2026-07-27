import * as cheerio from 'cheerio'

import type { ExtractedProductData } from '../types'
import type { ExtractorOutcome, ProductExtractor } from './types'

// A standard browser User-Agent avoids being rejected outright for having no/an
// obviously-scripted UA — the same courtesy any link-preview/unfurl bot extends.
// This is not bot-detection evasion: no headless browser, no proxy rotation, no
// captcha solving, and a single plain request per URL.
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'

const BLOCK_MARKERS = [
  'captcha',
  'robot check',
  'access denied',
  'are you a human',
  'unusual traffic',
  'verify you are a human',
]

const FETCH_TIMEOUT_MS = 15_000

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

    const product = candidates.find((node) => {
      const type = node['@type']
      return type === 'Product' || (Array.isArray(type) && type.includes('Product'))
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

  const offers = asArray(product.offers as JsonLdNode | JsonLdNode[] | undefined)[0]
  if (offers) {
    const price = parsePrice(offers.price ?? offers.lowPrice)
    if (price !== undefined) result.price = price
    if (typeof offers.priceCurrency === 'string') result.currency = offers.priceCurrency
  }

  const aggregateRating = product.aggregateRating as { ratingValue?: unknown } | undefined
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

const looksBlocked = (status: number, body: string): boolean => {
  if (status === 403 || status === 429 || status === 503) return true
  const sample = body.slice(0, 20_000).toLowerCase()
  return BLOCK_MARKERS.some((marker) => sample.includes(marker))
}

const REQUIRED_FIELDS: (keyof ExtractedProductData)[] = ['title', 'price', 'description', 'rating']
const ALL_TRACKED_FIELDS: string[] = [...REQUIRED_FIELDS, 'imageUrls']

const computeMissingFields = (data: ExtractedProductData): string[] => {
  const missing: string[] = REQUIRED_FIELDS.filter((field) => data[field] === undefined)
  if (data.imageUrls.length === 0) missing.push('imageUrls')
  return missing
}

export const htmlExtractor: ProductExtractor = async (url) => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)

  let response: Response
  try {
    response = await fetch(url, {
      headers: {
        'User-Agent': USER_AGENT,
        Accept: 'text/html,application/xhtml+xml',
      },
      redirect: 'follow',
      signal: controller.signal,
    })
  } catch (err) {
    clearTimeout(timeout)
    return {
      data: { imageUrls: [] },
      missingFields: ALL_TRACKED_FIELDS,
      blocked: false,
      error: err instanceof Error ? err.message : 'Fetch failed',
    }
  }
  clearTimeout(timeout)

  const body = await response.text()

  if (looksBlocked(response.status, body)) {
    const outcome: ExtractorOutcome = {
      data: { imageUrls: [] },
      missingFields: [],
      blocked: true,
      error: `Site blocked the request (HTTP ${response.status}) or served a bot-check page.`,
    }
    return outcome
  }

  if (!response.ok) {
    return {
      data: { imageUrls: [] },
      missingFields: [],
      blocked: false,
      error: `HTTP ${response.status} ${response.statusText}`,
    }
  }

  const $ = cheerio.load(body)
  const jsonLdProduct = findJsonLdProduct($)

  // JSON-LD Product schema is more structured/reliable than OG tags, so it wins
  // when both are present; OG tags fill in whatever JSON-LD didn't provide.
  const merged: ExtractedProductData = {
    imageUrls: [],
    ...extractFromMetaTags($),
    ...(jsonLdProduct ? extractFromJsonLd(jsonLdProduct) : {}),
  }

  return {
    data: merged,
    missingFields: computeMissingFields(merged),
    blocked: false,
  }
}
