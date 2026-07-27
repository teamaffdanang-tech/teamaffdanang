import type { SeedDataset } from '../types'

/**
 * Real products imported via `npm run import:links` + chat review (not the
 * proof-of-concept data in sample.ts). Append new products here as more links
 * are approved — the import engine is idempotent (upsert by slug).
 */
export const importedDataset: SeedDataset = {
  categories: [
    {
      slug: 'gifts',
      title: 'Gifts',
    },
  ],
  occasions: [],
  brands: [],
  retailers: [
    {
      slug: 'stationerypal',
      name: 'StationeryPal',
    },
  ],
  authors: [],
  products: [
    {
      slug: 'stationery-pal-gift-card',
      title: 'Stationery Pal Gift Card',
      excerpt:
        'Give the gift of choice with a Stationery Pal gift card — delivered by email, no processing fees, never expires.',
      description:
        'Shopping for someone else but not sure what to give them? Give them the gift of choice with a Stationery Pal gift card. Gift cards are delivered by email and contain instructions to redeem them at checkout. Our gift cards have no additional processing fees and never expire.',
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/products/Artboard1.png?v=1640326523'],
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/stationery-pal-gift-card/?ref=nnsfaquk',
          price: 10,
        },
      ],
      publish: true,
    },
  ],
  buyingGuides: [],
}
