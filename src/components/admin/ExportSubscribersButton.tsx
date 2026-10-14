import React from 'react'

/**
 * "Export CSV" button shown above the Subscribers list in the Payload admin.
 * Links to the collection's /export-csv endpoint, which returns a CSV download
 * (admin-session authenticated). No JS needed — the browser sends the admin
 * cookie with the same-origin request.
 */
export function ExportSubscribersButton() {
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '0 0 var(--base, 1rem)' }}>
      <a
        href="/api/subscribers/export-csv"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '8px 16px',
          borderRadius: 4,
          background: 'var(--theme-elevation-800, #222)',
          color: 'var(--theme-elevation-0, #fff)',
          textDecoration: 'none',
          fontWeight: 600,
          fontSize: 13,
          lineHeight: 1.2,
        }}
      >
        <span aria-hidden="true">⬇</span> Export CSV
      </a>
    </div>
  )
}
