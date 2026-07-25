import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'brand', '_status'],
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
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
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    },
    {
      name: 'occasions',
      type: 'relationship',
      relationTo: 'occasions',
      hasMany: true,
      admin: {
        description: 'Which seasonal/event gift guides this product belongs to.',
      },
    },
    {
      name: 'brand',
      type: 'relationship',
      relationTo: 'brands',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'officialUrl',
      type: 'text',
      admin: {
        description: "Manufacturer/official product page (non-affiliate).",
      },
    },
    {
      name: 'gallery',
      type: 'array',
      labels: {
        singular: 'Image',
        plural: 'Gallery',
      },
      admin: {
        description: 'Product photo gallery. Drag rows to reorder.',
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'caption',
          type: 'text',
        },
      ],
    },
    {
      name: 'retailerLinks',
      type: 'array',
      labels: {
        singular: 'Retailer Link',
        plural: 'Retailer Links',
      },
      admin: {
        description: 'Where this product can be bought, each with its own affiliate URL.',
      },
      fields: [
        {
          name: 'retailer',
          type: 'relationship',
          relationTo: 'retailers',
          required: true,
        },
        {
          name: 'affiliateUrl',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'number',
          admin: {
            description: 'Optional last-known price for display (not live-synced in MVP).',
          },
        },
      ],
    },
  ],
}
