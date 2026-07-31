import type { CollectionConfig } from 'payload'

import { faqsField } from '../fields/faqs'
import { seoField } from '../fields/seo'
import { revalidateBlogPostAfterChange, revalidateBlogPostAfterDelete } from '../hooks/revalidateBlogPost'

export const BlogPosts: CollectionConfig = {
  slug: 'blog-posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'occasion', '_status'],
  },
  versions: {
    drafts: true,
  },
  hooks: {
    afterChange: [revalidateBlogPostAfterChange],
    afterDelete: [revalidateBlogPostAfterDelete],
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
      name: 'excerpt',
      type: 'textarea',
      admin: {
        description: 'Short summary shown on the blog list card and used as a fallback meta description.',
      },
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Shown on the blog list card and at the top of the post.',
      },
    },
    {
      name: 'intro',
      type: 'richText',
      admin: {
        description: 'Opening hook — what this post covers and who it is for.',
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
          'Source of truth for which products belong to this post (powers Product → Blog Posts). Keep in sync with Picks below.',
      },
    },
    {
      name: 'picks',
      type: 'array',
      labels: { singular: 'Pick', plural: 'Picks' },
      admin: {
        description:
          'Post-specific write-up per product — why it earned its spot here. Drag rows to reorder. Each product referenced here should also be listed in Products above.',
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
            description: 'e.g. "Best Overall", "Best Budget Pick" — specific to this post.',
          },
        },
        {
          name: 'blurb',
          type: 'richText',
          admin: {
            description: 'Why this product made the list, in the context of this post.',
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
