import type { ProductExtractor } from './types'

/**
 * NOT IMPLEMENTED. Amazon Product Advertising API requires an Associates account
 * that has already driven qualifying sales — not available yet. Once
 * AMAZON_PA_API_ACCESS_KEY/SECRET_KEY/ASSOCIATE_TAG are set, implement the real
 * PA-API call here; extractors/index.ts already routes Amazon URLs to this
 * module whenever those env vars are present, so no other file needs to change.
 */
export const amazonPaApiExtractor: ProductExtractor = async () => {
  throw new Error(
    'Amazon PA-API extractor is not implemented yet. Unset AMAZON_PA_API_ACCESS_KEY or leave it empty to fall back to the HTML extractor.',
  )
}
