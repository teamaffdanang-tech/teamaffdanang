import type { CollectionConfig } from 'payload'

import { faqsField } from '../fields/faqs'
import { seoField } from '../fields/seo'
import { revalidateBuyingGuideAfterChange, revalidateBuyingGuideAfterDelete } from '../hooks/revalidateBuyingGuide'

export const BuyingGuides: CollectionConfig = {
  slug: 'buying-guides',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'occasion', '_status'],
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateBuyingGuideAfterChange],
    afterDelete: [revalidateBuyingGuideAfterDelete],
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
      admin: {
        description: 'Opening hook — what this guide covers and who it is for.',
      },
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
        description:
          'Source of truth for which products belong to this guide (powers Product → Buying Guides). Keep in sync with Picks below.',
      },
    },
    {
      name: 'picks',
      type: 'array',
      labels: { singular: 'Pick', plural: 'Picks' },
      admin: {
        description:
          'Guide-specific write-up per product — why it earned its spot here. Drag rows to reorder. Each product referenced here should also be listed in Products above.',
      },
      fields: [
        {
          name: 'product',
          type: 'relationship',
          relationTo: 'products',
          required: true,
        },
        {
          name: 'pickLabel',
          type: 'text',
          admin: {
            description: 'e.g. "Best Overall", "Best Budget Pick" — specific to this guide.',
          },
        },
        {
          name: 'blurb',
          type: 'richText',
          admin: {
            description: 'Why this product made the list, in the context of this guide.',
          },
        },
      ],
    },
    {
      name: 'methodology',
      type: 'richText',
      admin: {
        description: 'Optional "How we picked/tested" section.',
      },
    },
    {
      name: 'verdict',
      type: 'richText',
      admin: {
        description: 'Optional closing recommendation/summary.',
      },
    },
    faqsField(),
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
