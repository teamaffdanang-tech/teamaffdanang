import type { CollectionConfig, RelationshipFieldSingleValidation } from 'payload'

const requiredWhenScopeIs = (scope: 'product' | 'brand', message: string): RelationshipFieldSingleValidation => (
  value,
  { siblingData },
) => ((siblingData as { scope?: string } | undefined)?.scope === scope && !value ? message : true)

import { revalidateCouponAfterChange, revalidateCouponAfterDelete } from '../hooks/revalidateCoupon'

export const Coupons: CollectionConfig = {
  slug: 'coupons',
  admin: {
    useAsTitle: 'code',
    defaultColumns: ['code', 'scope', 'linkedProduct', 'linkedBrand', 'discountType', 'expiresAt', 'isActive'],
    description:
      'Discount coupons shown on /coupons and on the relevant product page(s) — scoped to a single product or sitewide to a whole brand. Distinct from a Retailer\'s site-wide couponCode.',
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
      name: 'scope',
      type: 'select',
      required: true,
      defaultValue: 'product',
      options: [
        { label: 'Single product', value: 'product' },
        { label: 'Brand (sitewide)', value: 'brand' },
      ],
      admin: {
        description: 'Product: applies to and shows only on the linked product. Brand: applies sitewide to every product from the linked brand.',
      },
    },
    {
      name: 'linkedProduct',
      type: 'relationship',
      relationTo: 'products',
      admin: {
        description: 'Required when scope is "Single product". When scope is "Brand", optional — only used as the display-anchor image/title on the coupon card.',
      },
      validate: requiredWhenScopeIs('product', 'Required when scope is "Single product".'),
    },
    {
      name: 'linkedBrand',
      type: 'relationship',
      relationTo: 'brands',
      admin: {
        description: 'Required when scope is "Brand" — the coupon applies to every product from this brand.',
        condition: (_, siblingData) => siblingData?.scope === 'brand',
      },
      validate: requiredWhenScopeIs('brand', 'Required when scope is "Brand".'),
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
