import type { CollectionConfig } from 'payload'

import { revalidateCouponAfterChange, revalidateCouponAfterDelete } from '../hooks/revalidateCoupon'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'linkedProduct', 'discountType', 'expiresAt', 'isActive'],
    description:
      'Product-specific discount coupons, shown on /coupons and on the linked product page. Distinct from a Retailer\'s site-wide couponCode.',
  },
  hooks: {
    afterChange: [revalidateCouponAfterChange],
    afterDelete: [revalidateCouponAfterDelete],
  },
  fields: [
    {
      name: 'code',
      type: 'text',
      required: true,
      admin: {
        description: 'The actual coupon code shoppers enter at checkout.',
      },
    },
    {
      name: 'discountType',
      type: 'select',
      required: true,
      defaultValue: 'percentage',
      options: [
        { label: 'Percentage off', value: 'percentage' },
        { label: 'Fixed amount off', value: 'fixed-amount' },
        { label: 'Free shipping', value: 'free-shipping' },
      ],
    },
    {
      name: 'discountValue',
      type: 'number',
      min: 0,
      admin: {
        description: 'Percentage (e.g. 16) or dollar amount off. Ignored when discount type is "Free shipping".',
        condition: (_, siblingData) => siblingData?.discountType !== 'free-shipping',
      },
    },
    {
      name: 'linkedProduct',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'expiresAt',
      type: 'date',
      admin: {
        description: 'Leave empty for a coupon with no expiration date.',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'termsNote',
      type: 'text',
      admin: {
        description: 'Optional short terms, e.g. "min. order $50".',
      },
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
      admin: {
        description:
          'Manual on/off switch. A coupon also stops showing automatically once its expiration date has passed, regardless of this toggle.',
      },
    },
  ],
}
