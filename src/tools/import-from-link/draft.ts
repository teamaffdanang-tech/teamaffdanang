import type { Payload } from 'payload'

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

/** Builds one DraftEntry for a single product URL. Never throws — extraction
 * failures are captured on the entry so a batch can continue past bad links. */
export const buildDraftEntry = async (payload: Payload, url: string): Promise<DraftEntry> => {
  const retailerName = detectRetailer(url)
  const extractor = getExtractor(retailerName)

  let extraction: ExtractionResult
  try {
    const outcome = await extractor(url)
    extraction = {
      sourceUrl: url,
      retailerName,
      data: outcome.data,
      missingFields: outcome.missingFields,
      blocked: outcome.blocked,
      error: outcome.error,
    }
  } catch (err) {
    extraction = {
      sourceUrl: url,
      retailerName,
      data: { imageUrls: [] },
      missingFields: [],
      blocked: false,
      error: err instanceof Error ? err.message : 'Unknown extractor error',
    }
  }

  const references = await resolveReferences(payload, {
    retailerName,
    brandName: extraction.data.brandName,
  })

  return {
    sourceUrl: url,
    extraction,
    references,
    suggestedSlug: slugify(extraction.data.title || url),
  }
}
