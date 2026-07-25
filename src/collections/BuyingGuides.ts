import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'

export const BuyingGuides: CollectionConfig = {
  slug: 'buying-guides',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'occasion', '_status'],
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
      name: 'intro',
      type: 'richText',
    },
    {
      name: 'occasion',
      type: 'relationship',
      relationTo: 'occasions',
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'authors',
    },
    {
      name: 'products',
      type: 'relationship',
      relationTo: 'products',
      hasMany: true,
      admin: {
        description: 'Products featured in this guide, in display order.',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    seoField(),
  ],
}
