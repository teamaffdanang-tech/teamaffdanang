import { amazonPaApiExtractor } from './amazonPaApiExtractor'
import { htmlExtractor } from './htmlExtractor'
import type { ProductExtractor } from './types'

/**
 * Picks the extractor for a given retailer. Amazon routes to the PA-API stub
 * only when credentials are configured; everything else (including Amazon
 * without credentials) uses the generic HTML/OG/JSON-LD extractor.
 */
export const getExtractor = (retailerName: string): ProductExtractor => {
  const hasAmazonPaApiKeys = Boolean(
    process.env.AMAZON_PA_API_ACCESS_KEY && process.env.AMAZON_PA_API_SECRET_KEY && process.env.AMAZON_PA_API_ASSOCIATE_TAG,
  )

  if (retailerName === 'Amazon' && hasAmazonPaApiKeys) {
    return amazonPaApiExtractor
  }

  return htmlExtractor
}
