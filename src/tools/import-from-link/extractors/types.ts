import type { ExtractedProductData } from '../types'

export type ExtractorOutcome = {
  data: ExtractedProductData
  missingFields: string[]
  blocked: boolean
  error?: string
}

/**
 * A ProductExtractor turns a product URL into publicly-available data.
 * Swap the implementation behind extractors/index.ts's registry (e.g. to plug in
 * Amazon PA-API later) without touching any other part of the import pipeline.
 */
export type ProductExtractor = (url: string) => Promise<ExtractorOutcome>
