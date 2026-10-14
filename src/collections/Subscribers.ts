import type { CollectionConfig, PayloadRequest } from 'payload'

/**
 * Subscribers — newsletter signups captured directly in our own database
 * (the default), so the form works with no third-party dependency. The
 * /newsletter route still supports Brevo behind an env flag for when we want
 * to sync externally again.
 *
 * Write happens server-side via the Local API in the /newsletter route;
 * browse/export in the admin UI (or `npm run export:subscribers`). Not publicly
 * readable.
 */
export const Subscribers: CollectionConfig = {
  slug: 'subscribers',
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'status', 'source', 'createdAt'],
    group: 'Insights',
    description: 'Newsletter email signups collected on the site.',
    components: {
      // "Export CSV" button above the list table.
      beforeListTable: ['/components/admin/ExportSubscribersButton#ExportSubscribersButton'],
    },
  },
  endpoints: [
    {
      // GET /api/subscribers/export-csv — downloads all subscribers as CSV.
      // Admin-session gated (same-origin cookie); never public.
      path: '/export-csv',
      method: 'get',
      handler: async (req: PayloadRequest) => {
        if (!req.user) {
          return Response.json({ error: 'Unauthorized' }, { status: 403 })
        }
        const result = await req.payload.find({
          collection: 'subscribers',
          limit: 100000,
          depth: 0,
          sort: '-createdAt',
        })
        const cell = (v: unknown): string => {
          const s = v === null || v === undefined ? '' : String(v)
          return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
        }
        const rows = [['email', 'status', 'source', 'signed_up_at'].join(',')]
        for (const d of result.docs) {
          rows.push([d.email, d.status, d.source, d.createdAt].map(cell).join(','))
        }
        const today = new Date().toISOString().slice(0, 10)
        return new Response(rows.join('\n') + '\n', {
          headers: {
            'content-type': 'text/csv; charset=utf-8',
            'content-disposition': `attachment; filename="subscribers-${today}.csv"`,
          },
        })
      },
    },
  ],
  access: {
    // Public visitors create through the server (Local API bypasses access);
    // only authenticated admins read/manage these.
    read: ({ req }) => Boolean(req.user),
    create: () => false, // server-side Local API (overrideAccess) only
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'email',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { description: 'Subscriber email address (unique).' },
    },
    {
      name: 'source',
      type: 'text',
      admin: { description: 'Which form/page the signup came from (e.g. "home", "black-friday-top").' },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'subscribed',
      options: [
        { label: 'Subscribed', value: 'subscribed' },
        { label: 'Unsubscribed', value: 'unsubscribed' },
      ],
      admin: { description: 'Set to Unsubscribed to suppress without deleting.' },
    },
  ],
  timestamps: true,
}
