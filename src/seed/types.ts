/**
 * Author-friendly seed data shapes. Related docs are referenced by `slug`
 * (string) instead of numeric ID, since IDs don't exist yet when this data
 * is authored — `import.ts` resolves slugs to IDs in dependency order.
 */

export type SeedCategory = {
  slug: string
  title: string
  description?: string
}

export type SeedOccasion = {
  slug: string
  title: string
  description?: string
  startMonth?: number
  endMonth?: number
}

export type SeedBrand = {
  slug: string
  name: string
  website?: string
  description?: string
}

export type SeedRetailer = {
  slug: string
  name: string
  urlPattern?: string
  couponCode?: string
  couponDiscountPercent?: number
  network?: string
  trackingParam?: string
}

export type SeedAuthor = {
  slug: string
  name: string
  title?: string
  bio?: string
}

export type SeedProduct = {
  slug: string
  title: string
  excerpt?: string
  /** Plain text — converted to a minimal Lexical doc on import. */
  description?: string
  /** One short, practical sentence naming who this product suits best — not marketing copy. */
  bestFor?: string
  categorySlugs?: string[]
  occasionSlugs?: string[]
  brandSlug?: string
  officialUrl?: string
  pros?: string[]
  cons?: string[]
  specifications?: { label: string; value: string }[]
  faqs?: { question: string; answer: string }[]
  ratingOverall?: number
  isFeatured?: boolean
  bestPickLabel?:
    | 'none'
    | 'best-overall'
    | 'best-budget'
    | 'best-upgrade'
    | 'best-for-beginners'
    | 'editor-choice'
    | 'best-value'
    | 'best-premium'
    | 'best-everyday'
    | 'best-travel'
  retailerLinks?: { retailerSlug: string; affiliateUrl: string; price?: number; currency?: 'USD' | 'HKD' | 'GBP' }[]
  /** SEO meta title override — falls back to `title` if omitted (keep the
   * rendered "{metaTitle} | Get Trendy Finds" under ~60 chars). */
  metaTitle?: string
  /** SEO meta description (~155 chars). No fallback exists in resolveSeo, so
   * omitting this leaves the page with an empty meta description. */
  metaDescription?: string
  /** External image URLs to download and store as Payload Media docs on import. */
  galleryImageUrls?: string[]
  publish?: boolean
}

export type SeedCoupon = {
  code: string
  discountType: 'percentage' | 'fixed-amount' | 'free-shipping'
  discountValue?: number
  /** 'product' (default): applies to and shows only on `linkedProductSlug`.
   * 'brand': applies sitewide to every product from `linkedBrandSlug`. */
  scope?: 'product' | 'brand'
  /** Required when scope is 'product'. Optional display-anchor product when
   * scope is 'brand' (used for the coupon card's image/title). */
  linkedProductSlug?: string
  /** Required when scope is 'brand'. */
  linkedBrandSlug?: string
  expiresAt?: string
  termsNote?: string
  isActive?: boolean
}

export type SeedBlogPost = {
  slug: string
  title: string
  /** Short summary for the /blog list card; also the meta description fallback. */
  excerpt?: string
  /** Plain text — converted to a minimal Lexical doc on import. */
  intro?: string
  methodology?: string
  verdict?: string
  occasionSlug?: string
  categorySlug?: string
  authorSlug?: string
  productSlugs: string[]
  picks?: { productSlug: string; pickLabel?: string; blurb?: string }[]
  faqs?: { question: string; answer: string }[]
  /** SEO meta title override — falls back to `title` if omitted. */
  metaTitle?: string
  /** SEO meta description (~155 chars). Falls back to `excerpt` if omitted. */
  metaDescription?: string
  /** External image URL to download and store as the post's coverImage. */
  coverImageUrl?: string
  /** ISO date string. Drives /blog sort order, the BlogCard date, and JSON-LD datePublished. */
  publishedAt?: string
  publish?: boolean
}

export type SeedDataset = {
  categories: SeedCategory[]
  occasions: SeedOccasion[]
  brands: SeedBrand[]
  retailers: SeedRetailer[]
  authors: SeedAuthor[]
  products: SeedProduct[]
  coupons: SeedCoupon[]
  blogPosts: SeedBlogPost[]
}
