import type { Field } from 'payload'

/**
 * Shared SEO Meta + Open Graph field set, reused across content collections
 * (Products, BuyingGuides) so the shape stays identical everywhere.
 */
export const seoField = (): Field => ({
  name: 'seo',
  type: 'group',
  label: 'SEO',
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      admin: {
        description: 'Overrides the page <title>. Falls back to the content title if empty.',
      },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      admin: {
        description: 'Meta description shown in search results (~155 characters).',
      },
    },
    {
      name: 'metaImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'Used for both the meta image and as the Open Graph image fallback.',
      },
    },
    {
      name: 'ogTitle',
      type: 'text',
      admin: {
        description: 'Optional Open Graph title override. Falls back to metaTitle if empty.',
      },
    },
    {
      name: 'ogDescription',
      type: 'textarea',
      admin: {
        description: 'Optional Open Graph description override. Falls back to metaDescription if empty.',
      },
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Prevent search engines from indexing this page.',
      },
    },
  ],
})
