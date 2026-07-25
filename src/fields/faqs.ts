import type { Field } from 'payload'

/** Shared FAQ array field, reused across Products and BuyingGuides. */
export const faqsField = (): Field => ({
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
})
