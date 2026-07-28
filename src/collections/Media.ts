import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    useAsTitle: 'alt',
  },
  // Images are served to real visitors' browsers via plain <img> tags and
  // Next.js's image optimizer, both of which go through the public REST API
  // (unlike page content, which reads via the Local API and already
  // bypasses access control) — so this collection's files must stay
  // publicly readable regardless of the default access policy.
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
