import { readFile } from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

import { getPayload } from 'payload'

import config from '../payload.config'
import { HOSTINGER_PUBLIC_BASE_URL, uploadToHostinger } from '../lib/hostingerSftp'

/**
 * One-time migration: uploads every existing Media doc's locally-stored file
 * to Hostinger over SFTP, then triggers Payload to recompute the `url` field
 * via the cloud-storage adapter (see payload.config.ts). Safe to re-run —
 * docs whose `url` already points at HOSTINGER_PUBLIC_BASE_URL are skipped.
 *
 * Requires HOSTINGER_SFTP_* env vars (see .env.example) and local files still
 * present in the project's local `media/` upload directory.
 */

const dirname = path.dirname(fileURLToPath(import.meta.url))
const LOCAL_MEDIA_DIR = path.resolve(dirname, '../../media')

const run = async () => {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({ collection: 'media', limit: 1000, depth: 0 })

  let migrated = 0
  let skipped = 0
  let failed = 0

  for (const doc of docs) {
    if (typeof doc.filename !== 'string') {
      payload.logger.warn({ id: doc.id }, 'Media doc has no filename, skipping')
      failed++
      continue
    }

    if (typeof doc.url === 'string' && doc.url.startsWith(HOSTINGER_PUBLIC_BASE_URL)) {
      skipped++
      continue
    }

    try {
      const localPath = path.join(LOCAL_MEDIA_DIR, doc.filename)
      const buffer = await readFile(localPath)
      await uploadToHostinger(buffer, doc.filename)

      // No file data in this update — the cloud-storage adapter's field hooks
      // recompute `url` from the (unchanged) filename via generateURL, so this
      // just persists that recomputed value without re-uploading anything.
      await payload.update({ collection: 'media', id: doc.id, data: {} })

      migrated++
      payload.logger.info({ filename: doc.filename }, 'Migrated to Hostinger')
    } catch (err) {
      failed++
      payload.logger.error({ err, filename: doc.filename }, 'Failed to migrate, skipping')
    }
  }

  payload.logger.info({ migrated, skipped, failed, total: docs.length }, 'Hostinger media migration complete')
  process.exit(failed > 0 ? 1 : 0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
