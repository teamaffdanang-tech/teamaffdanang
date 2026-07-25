import type { SeedDataset } from '../types'

/**
 * Minimal proof-of-concept dataset exercising every relation in the import
 * engine. Milestone 8 expands this into the full sample catalog across all
 * six launch occasions using the same `importSeedData` engine — no new
 * import logic needed, only more data.
 */
export const sampleDataset: SeedDataset = {
  categories: [
    {
      slug: 'kitchen',
      title: 'Kitchen & Dining',
      description: 'Appliances and tools for cooking, baking, and serving.',
    },
  ],
  occasions: [
    {
      slug: 'christmas',
      title: 'Christmas',
      description: 'Gift guides for the December holiday season.',
      startMonth: 11,
      endMonth: 12,
    },
  ],
  brands: [
    {
      slug: 'brewcraft',
      name: 'BrewCraft',
      website: 'https://example.com/brewcraft',
      description: 'Sample brand for the proof-of-concept dataset.',
    },
  ],
  retailers: [
    {
      slug: 'amazon',
      name: 'Amazon',
      urlPattern: 'https://www.amazon.com/dp/{asin}?tag=REPLACE_WITH_ASSOCIATE_TAG',
    },
  ],
  authors: [
    {
      slug: 'jane-doe',
      name: 'Jane Doe',
      title: 'Senior Reviewer',
      bio: 'Sample author for the proof-of-concept dataset.',
    },
  ],
  products: [
    {
      slug: 'brewcraft-pour-over-kettle',
      title: 'BrewCraft Gooseneck Pour-Over Kettle',
      excerpt: 'A precise, comfortable gooseneck kettle that makes pour-over coffee foolproof.',
      description:
        'Sample product description for the proof-of-concept dataset. Replace with real copy in Milestone 8.',
      categorySlugs: ['kitchen'],
      occasionSlugs: ['christmas'],
      brandSlug: 'brewcraft',
      officialUrl: 'https://example.com/brewcraft/kettle',
      pros: ['Precise pour control', 'Comfortable handle', 'Fast to heat'],
      cons: ['No temperature display'],
      specifications: [
        { label: 'Capacity', value: '1.0 L' },
        { label: 'Material', value: 'Stainless steel' },
      ],
      faqs: [
        {
          question: 'Is it dishwasher safe?',
          answer: 'Hand-washing is recommended to preserve the finish.',
        },
      ],
      ratingOverall: 8.7,
      isFeatured: true,
      bestPickLabel: 'best-overall',
      retailerLinks: [
        {
          retailerSlug: 'amazon',
          affiliateUrl: 'https://www.amazon.com/dp/B000EXAMPLE?tag=REPLACE_WITH_ASSOCIATE_TAG',
          price: 45,
        },
      ],
      publish: true,
    },
  ],
  buyingGuides: [
    {
      slug: 'best-coffee-gifts-christmas',
      title: 'The Best Coffee Gifts for Christmas',
      intro: 'Sample intro for the proof-of-concept dataset. Replace with real copy in Milestone 8.',
      methodology: 'Sample methodology text.',
      verdict: 'Sample verdict text.',
      occasionSlug: 'christmas',
      categorySlug: 'kitchen',
      authorSlug: 'jane-doe',
      productSlugs: ['brewcraft-pour-over-kettle'],
      picks: [
        {
          productSlug: 'brewcraft-pour-over-kettle',
          pickLabel: 'Best Overall',
          blurb: 'Sample pick blurb for the proof-of-concept dataset.',
        },
      ],
      faqs: [
        {
          question: 'What if the recipient already owns a kettle?',
          answer: 'Pair it with a bag of specialty beans instead.',
        },
      ],
      publish: true,
    },
  ],
}
