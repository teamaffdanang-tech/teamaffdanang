import type { Adapter } from '@payloadcms/plugin-cloud-storage/types'

import { deleteFromHostinger, hostingerPublicUrl, uploadToHostinger } from './hostingerSftp'

/**
 * Payload cloud-storage adapter that uploads Media files to Hostinger over
 * SFTP and serves them directly from Hostinger's own public web server
 * (https://gettrendyfinds.com/media/products/<filename>) — Payload never
 * proxies the file, so `disablePayloadAccessControl` is required (see
 * payload.config.ts) so the stored `url` field is this public URL, not
 * Payload's own /api/media/file/... route.
 */
export const hostingerStorageAdapter: Adapter = () => ({
  name: 'hostinger-sftp',
  generateURL: ({ filename }) => hostingerPublicUrl(filename),
  handleUpload: async ({ data, file }) => {
    await uploadToHostinger(file.buffer, file.filename)
    return data
  },
  handleDelete: async ({ filename }) => {
    await deleteFromHostinger(filename)
  },
  staticHandler: async (_req, { params: { filename } }) => Response.redirect(hostingerPublicUrl(filename), 302),
})
