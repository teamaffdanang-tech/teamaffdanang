import type { Payload } from 'payload'

import { computeMissingFields, extractProductFromHtml, htmlExtractor } from './extractors/htmlExtractor'
import { discoverProductLinks } from './extractors/discoverProductLinks'
import { fetchPage } from './extractors/fetchPage'
import { getExtractor } from './extractors'
import { detectRetailer } from './retailerDetect'
import { resolveReferences } from './resolveReferences'
import type { DraftEntry, ExtractionResult } from './types'

const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80) || 'untitled-product'

// A listing page's own "you might also like"/related-product widgets mean even
// a genuine product page can have a couple of stray product-shaped links, so
// require several candidates before treating the page as a collection.
const MIN_CANDIDATES_FOR_COLLECTION = 4

const buildErrorEntry = (url: string, retailerName: string, error: string): DraftEntry => ({
  kind: 'product',
  sourceUrl: url,
  extraction: { sourceUrl: url, retailerName, data: { imageUrls: [] }, missingFields: [], blocked: false, error },
  references: { category: null, brand: null, retailer: null, missing: {} },
  suggestedSlug: 'invalid-url',
})

/** Builds one DraftEntry for a single URL — either a product draft or a
 * collection-page draft listing candidate product links. Never throws. */
export const buildDraftEntry = async (payload: Payload, url: string): Promise<DraftEntry> => {
  const retailerName = detectRetailer(url)

  let parsedUrl: URL
  try {
    parsedUrl = new URL(url)
  } catch {
    return buildErrorEntry(url, retailerName, 'Not a valid URL.')
  }

  const extractor = getExtractor(retailerName)
  const usesSharedHtmlFetch = extractor === htmlExtractor

  if (!usesSharedHtmlFetch) {
    // A non-HTML extractor (e.g. a future Amazon PA-API implementation) does its
    // own thing entirely and has no concept of "listing page" — go straight to
    // the product path.
    try {
      return buildProductEntry(payload, url, retailerName, await extractor(url))
    } catch (err) {
      return buildErrorEntry(url, retailerName, err instanceof Error ? err.message : 'Unknown extractor error')
    }
  }

  const page = await fetchPage(url)
  if (page.blocked || !page.html) {
    return buildErrorEntry(url, retailerName, page.error ?? 'Unknown fetch error')
  }

  const { data, hasProductSchema } = extractProductFromHtml(page.html)
  const candidates = discoverProductLinks(page.html, parsedUrl.toString())

  // A resolved price is as strong a "this is one product" signal as JSON-LD
  // Product/ProductGroup schema — some storefronts only expose price via a
  // plain og:price:amount meta tag with no structured data at all.
  const looksLikeOneProduct = hasProductSchema || data.price !== undefined
  if (!looksLikeOneProduct && candidates.length >= MIN_CANDIDATES_FOR_COLLECTION) {
    return { kind: 'collection', sourceUrl: url, candidates }
  }

  return buildProductEntry(payload, url, retailerName, {
    data,
    missingFields: computeMissingFields(data),
    blocked: false,
  })
}

const buildProductEntry = async (
  payload: Payload,
  url: string,
  retailerName: string,
  outcome: { data: ExtractionResult['data']; missingFields: string[]; blocked: boolean; error?: string },
): Promise<DraftEntry> => {
  const extraction: ExtractionResult = { sourceUrl: url, retailerName, ...outcome }

  const references = await resolveReferences(payload, {
    retailerName,
    brandName: extraction.data.brandName,
  })

  return {
    kind: 'product',
    sourceUrl: url,
    extraction,
    references,
    suggestedSlug: slugify(extraction.data.title || url),
  }
}
