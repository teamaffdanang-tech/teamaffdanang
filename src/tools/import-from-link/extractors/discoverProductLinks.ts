import * as cheerio from 'cheerio'

const PRODUCT_PATH_PATTERN = /\/(products?|item|p|dp)\//i
const MAX_CANDIDATES = 60

const humanizeSlug = (slug: string): string =>
  slug
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())

export type ProductLinkCandidate = {
  url: string
  nameGuess: string
}

/**
 * Best-effort discovery of individual product links on a listing/collection
 * page — reads only what the page already links to publicly (no bypassing
 * anything). Matches common product path conventions (Shopify's /products/,
 * generic /product/, /item/, /p/, Amazon's /dp/) since there's no universal
 * schema.org ItemList support across storefronts to rely on instead.
 */
export const discoverProductLinks = (html: string, baseUrl: string): ProductLinkCandidate[] => {
  const $ = cheerio.load(html)
  const seen = new Map<string, ProductLinkCandidate>()

  $('a[href]').each((_, el) => {
    if (seen.size >= MAX_CANDIDATES) return

    const href = $(el).attr('href')
    if (!href || !PRODUCT_PATH_PATTERN.test(href)) return

    let absoluteUrl: string
    try {
      absoluteUrl = new URL(href, baseUrl).toString()
    } catch {
      return
    }

    if (seen.has(absoluteUrl)) return

    const text = $(el).text().trim()
    const imgAlt = $(el).find('img').attr('alt')?.trim()
    const lastSegment = absoluteUrl.split('?')[0].split('/').filter(Boolean).pop() ?? ''

    seen.set(absoluteUrl, {
      url: absoluteUrl,
      nameGuess: text || imgAlt || humanizeSlug(lastSegment),
    })
  })

  return Array.from(seen.values())
}
