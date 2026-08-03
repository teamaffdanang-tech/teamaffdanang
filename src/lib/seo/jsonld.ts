import { absoluteUrl, getSiteUrl, mediaUrl } from './shared'
import { buildAffiliateUrl } from '@/lib/affiliateUrl'
import type { Author, Brand, BlogPost, Coupon, Product, Retailer } from '@/payload-types'

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
    ...(typeof link.price === 'number' ? { price: link.price, priceCurrency: link.currency ?? 'USD' } : {}),
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
          // A single editorial score from our own review, not a genuine
          // user-review aggregate — deliberately omits `aggregateRating`
          // (which requires a real `reviewCount` per Google's structured
          // data policy) to avoid misrepresenting it as one.
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
              name: 'Get Trendy Finds',
            },
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

export const articleJsonLd = (post: BlogPost, postPath: string) => {
  const siteUrl = getSiteUrl()
  const url = absoluteUrl(postPath, siteUrl)
  const image = mediaUrl(post.coverImage)
  const author = post.author && typeof post.author !== 'number' ? (post.author as Author) : undefined

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    url,
    ...(image ? { image: [image] } : {}),
    ...(post.publishedAt ? { datePublished: post.publishedAt } : {}),
    dateModified: post.updatedAt,
    author: {
      '@type': author ? 'Person' : 'Organization',
      name: author?.name ?? 'Get Trendy Finds',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Get Trendy Finds',
    },
  }
}

/**
 * `Offer` is the real schema.org type used here — there is no such thing as a
 * "DiscountOffer" type. `discountCode` is a genuine schema.org/Offer property
 * (confirmed against schema.org directly rather than assumed) for exactly
 * this case: a coupon code redeemable against a specific offer.
 */
export const couponJsonLd = (coupon: Coupon, product: Product) => {
  const siteUrl = getSiteUrl()
  const priceLink = product.retailerLinks?.find((link) => typeof link.price === 'number')
  const retailer = product.retailerLinks?.[0]?.retailer as Retailer | number | null | undefined
  const url = product.retailerLinks?.[0]
    ? buildAffiliateUrl(product.retailerLinks[0].affiliateUrl, retailer)
    : absoluteUrl(`/products/${product.slug}`, siteUrl)

  // A manually-authored termsNote always wins; otherwise fall back to a scope-accurate
  // auto description so a brand-scope coupon never implies it's specific to `product`.
  const description =
    coupon.termsNote ??
    (coupon.scope === 'brand' && brandName(coupon.linkedBrand)
      ? `Applies to every ${brandName(coupon.linkedBrand)} product, not just this one.`
      : undefined)

  return {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    url,
    itemOffered: {
      '@type': 'Product',
      name: product.title,
    },
    discountCode: coupon.code,
    ...(description ? { description } : {}),
    ...(priceLink && typeof priceLink.price === 'number'
      ? { price: priceLink.price, priceCurrency: priceLink.currency ?? 'USD' }
      : {}),
    availability: 'https://schema.org/InStock',
    ...(coupon.expiresAt ? { validThrough: coupon.expiresAt } : {}),
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
