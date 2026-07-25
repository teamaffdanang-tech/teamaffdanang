import type { CollectionConfig } from 'payload'

export const Occasions: CollectionConfig = {
  slug: 'occasions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'startMonth', 'endMonth'],
    description:
      'Seasonal/event taxonomy (Christmas, Halloween, Black Friday...) — independent from product Category so the site can expand beyond seasonal products later without schema changes.',
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
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'startMonth',
      type: 'number',
      min: 1,
      max: 12,
      admin: {
        description: 'Month (1-12) shopping interest for this occasion typically starts ramping up.',
      },
    },
    {
      name: 'endMonth',
      type: 'number',
      min: 1,
      max: 12,
      admin: {
        description: 'Month (1-12) the occasion ends (e.g. Christmas: 12).',
      },
    },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
  ],
}
