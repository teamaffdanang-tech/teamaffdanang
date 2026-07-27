/** Publicly-extractable product data from a product page's own OG/JSON-LD metadata. */
export type ExtractedProductData = {
  title?: string
  price?: number
  currency?: string
  imageUrls: string[]
  description?: string
  rating?: number
  brandName?: string
}

export type ExtractionResult = {
  sourceUrl: string
  retailerName: string
  data: ExtractedProductData
  missingFields: string[]
  blocked: boolean
  error?: string
}

export type ReferenceResolution = {
  category: { id: number; name: string } | null
  brand: { id: number; name: string } | null
  retailer: { id: number; name: string } | null
  /** Names that were looked up but don't exist yet in the DB — nothing is created automatically. */
  missing: {
    category?: string
    brand?: string
    retailer?: string
  }
}

export type DraftEntry = {
  sourceUrl: string
  extraction: ExtractionResult
  references: ReferenceResolution
  suggestedSlug: string
}

export type DraftBatch = {
  createdAt: string
  entries: DraftEntry[]
}
