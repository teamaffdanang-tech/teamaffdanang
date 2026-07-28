import { absoluteUrl, getSiteUrl, mediaUrl } from './shared'
import { buildAffiliateUrl } from '@/lib/affiliateUrl'
import type { Brand, Product, Retailer } from '@/payload-types'

/**
 * Schema.org JSON-LD builders. Each returns a plain object ready to be
 * serialized into a <script type="application/ld+json"> tag by the page
 * component (wired up in Milestone 6) — no rendering here.
 */

const brandName = (brand: Product['brand']): string | undefined => {
  if (!brand || typeof brand === 'number') return undefined
  return (brand as Brand).name
}

export const productJsonLd = (product: Product, productPath: string) => {
  const siteUrl = getSiteUrl()
  const url = absoluteUrl(productPath, siteUrl)
  const images = (product.gallery || [])
    .map((row) => mediaUrl(row.image))
    .filter((src): src is string => Boolean(src))

  const offers = (product.retailerLinks || []).map((link) => ({
    '@type': 'Offer',
    url: buildAffiliateUrl(link.affiliateUrl, link.retailer as Retailer | number | null | undefined),
    ...(typeof link.price === 'number' ? { price: link.price, priceCurrency: 'USD' } : {}),
    availability: 'https://schema.org/InStock',
  }))

  const overall = product.ratings?.overall

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    url,
    ...(images.length ? { image: images } : {}),
    ...(brandName(product.brand) ? { brand: { '@type': 'Brand', name: brandName(product.brand) } } : {}),
    ...(offers.length ? { offers } : {}),
    ...(typeof overall === 'number'
      ? {
          review: {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: overall,
              bestRating: 10,
              worstRating: 0,
            },
            author: {
              '@type': 'Organization',
              name: 'Seasonal Picks Hub',
            },
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: overall,
            bestRating: 10,
            worstRating: 0,
            reviewCount: 1,
          },
        }
      : {}),
  }
}

export const faqJsonLd = (product: Pick<Product, 'faqs'>) => {
  if (!product.faqs || product.faqs.length === 0) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: product.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export type BreadcrumbItem = {
  name: string
  path: string
}

export const breadcrumbJsonLd = (items: BreadcrumbItem[]) => {
  const siteUrl = getSiteUrl()

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, siteUrl),
    })),
  }
}
