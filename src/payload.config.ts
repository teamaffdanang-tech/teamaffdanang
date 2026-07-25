import path from 'path'
import { fileURLToPath } from 'url'

import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'
import { buildConfig, type Plugin } from 'payload'
import sharp from 'sharp'

import { Authors } from './collections/Authors'
import { Brands } from './collections/Brands'
import { BuyingGuides } from './collections/BuyingGuides'
import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Occasions } from './collections/Occasions'
import { Products } from './collections/Products'
import { Retailers } from './collections/Retailers'
import { Users } from './collections/Users'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// S3-compatible object storage (Cloudflare R2, AWS S3, or self-hosted MinIO on VPS) is
// opt-in via env vars. Without S3_BUCKET set, Payload falls back to local disk storage
// so dev/build keeps working before a bucket exists — same code, zero branching at deploy time.
const plugins: Plugin[] = []
if (process.env.S3_BUCKET) {
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
  collections: [Users, Media, Categories, Occasions, Brands, Authors, Retailers, Products, BuyingGuides],
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
