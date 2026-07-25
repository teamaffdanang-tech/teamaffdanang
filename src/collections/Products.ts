import type { CollectionConfig } from 'payload'

import { seoField } from '../fields/seo'

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
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Review',
          fields: [
            {
              name: 'pros',
              type: 'array',
              labels: { singular: 'Pro', plural: 'Pros' },
              fields: [
                {
                  name: 'point',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'cons',
              type: 'array',
              labels: { singular: 'Con', plural: 'Cons' },
              fields: [
                {
                  name: 'point',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'specifications',
              type: 'array',
              labels: { singular: 'Specification', plural: 'Specifications' },
              admin: {
                description: 'Free-form key/value spec rows — flexible across any product category.',
              },
              fields: [
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                },
              ],
            },
            {
              name: 'faqs',
              type: 'array',
              labels: { singular: 'FAQ', plural: 'FAQs' },
              fields: [
                {
                  name: 'question',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'answer',
                  type: 'textarea',
                  required: true,
                },
              ],
            },
            {
              name: 'ratings',
              type: 'group',
              fields: [
                {
                  name: 'overall',
                  type: 'number',
                  min: 0,
                  max: 10,
                  admin: {
                    description: 'Overall score out of 10 (supports one decimal, e.g. 8.5).',
                    step: 0.1,
                  },
                },
                {
                  name: 'criteria',
                  type: 'array',
                  labels: { singular: 'Criterion', plural: 'Criteria' },
                  admin: {
                    description: 'Optional per-criterion breakdown (e.g. Performance, Value, Build Quality).',
                  },
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                    },
                    {
                      name: 'score',
                      type: 'number',
                      min: 0,
                      max: 10,
                      required: true,
                    },
                  ],
                },
              ],
            },
            {
              name: 'testingNotes',
              type: 'richText',
              admin: {
                description:
                  'Optional hands-on testing methodology/notes. Leave empty for curated/aggregated reviews.',
              },
            },
          ],
        },
        {
          label: 'Badges',
          fields: [
            {
              name: 'isFeatured',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Show in featured/homepage placements.',
              },
            },
            {
              name: 'bestPickLabel',
              type: 'select',
              options: [
                { label: 'None', value: 'none' },
                { label: 'Best Overall', value: 'best-overall' },
                { label: 'Best Budget', value: 'best-budget' },
                { label: 'Best Upgrade', value: 'best-upgrade' },
                { label: 'Best for Beginners', value: 'best-for-beginners' },
              ],
              defaultValue: 'none',
            },
          ],
        },
        {
          label: 'SEO',
          fields: [seoField()],
        },
      ],
    },
    {
      name: 'buyingGuides',
      type: 'join',
      collection: 'buying-guides',
      on: 'products',
      admin: {
        description: 'Buying guides that reference this product (read-only, managed from Buying Guides).',
      },
    },
  ],
}
