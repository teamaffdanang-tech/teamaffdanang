import type { CollectionConfig } from 'payload'

export const Retailers: CollectionConfig = {
  slug: 'retailers',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'slug', 'urlPattern'],
    description:
      'Affiliate retailers (Amazon, Walmart, Target, Best Buy...). Products link to Retailers with a per-product affiliate URL, so the site is not locked into a single affiliate network.',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'urlPattern',
      type: 'text',
      admin: {
        description:
          'Optional base affiliate URL pattern for this retailer/network (e.g. Amazon Associates tag template), for reference when adding a product affiliate link.',
      },
    },
    {
      name: 'network',
      type: 'text',
      admin: {
        description:
          'Affiliate network/program this retailer runs through (e.g. ShareASale, Impact, CJ, Awin, Direct). Informational — not used to construct URLs.',
      },
    },
    {
      name: 'trackingParam',
      type: 'text',
      admin: {
        description:
          'Query string fragment appended to every product URL for this retailer to attribute the sale (e.g. "ref=nnsfaquk" or "sca_ref=12345"). Kept separate from each Product\'s affiliateUrl so changing it updates every product at once.',
      },
    },
    {
      name: 'couponCode',
      type: 'text',
      admin: {
        description: 'Site-wide discount code for this retailer (shown next to Buy buttons on product pages).',
      },
    },
    {
      name: 'couponDiscountPercent',
      type: 'number',
      min: 0,
      max: 100,
      admin: {
        description: 'Discount percentage the coupon code above applies, e.g. 16 for 16% off.',
      },
    },
  ],
}
