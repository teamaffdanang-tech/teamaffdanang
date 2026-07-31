import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig, type Plugin } from 'payload'
import sharp from 'sharp'

import { Authors } from './collections/Authors'
import { BlogPosts } from './collections/BlogPosts'
import { Brands } from './collections/Brands'
import { Categories } from './collections/Categories'
import { Coupons } from './collections/Coupons'
import { Media } from './collections/Media'
import { Occasions } from './collections/Occasions'
import { Products } from './collections/Products'
import { Retailers } from './collections/Retailers'
import { Users } from './collections/Users'
import { hostingerStorageAdapter } from './lib/hostingerStorageAdapter'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// Media storage, in priority order — first one configured wins, so exactly one
// of these is ever active. Without either set, Payload falls back to local disk
// (fine for local dev; production must have one of these configured).
const plugins: Plugin[] = []
if (process.env.HOSTINGER_SFTP_HOST) {
  // Hostinger over SFTP: files are uploaded to public_html/media/products/ and
  // served directly by Hostinger's own web server — Payload never proxies them,
  // so disablePayloadAccessControl makes the stored `url` field the real public
  // Hostinger URL instead of Payload's own /api/media/file/... route.
  plugins.push(
    cloudStoragePlugin({
      collections: {
        media: {
          adapter: hostingerStorageAdapter,
          disableLocalStorage: true,
          disablePayloadAccessControl: true,
        },
      },
    }),
  )
} else if (process.env.S3_BUCKET) {
  // S3-compatible object storage (Cloudflare R2, AWS S3, or self-hosted MinIO on
  // VPS) — kept available as a portable alternative even though Hostinger is the
  // configured production path today.
  plugins.push(
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET,
      config: {
        region: process.env.S3_REGION || 'auto',
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        endpoint: process.env.S3_ENDPOINT,
        forcePathStyle: true,
      },
    }),
  )
}

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Categories, Occasions, Brands, Authors, Retailers, Products, BlogPosts, Coupons],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
  }),
  sharp,
  plugins,
})
