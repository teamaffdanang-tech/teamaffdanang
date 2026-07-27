import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

import { getPayload } from 'payload'

import config from '../../payload.config'
import { buildDraftEntry } from './draft'
import type { DraftBatch, DraftEntry } from './types'

const DELAY_BETWEEN_REQUESTS_MS = 1_500

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const draftsDir = path.resolve(dirname, '..', '..', 'seed', 'drafts')

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const printEntry = (entry: DraftEntry) => {
  console.log(`\n[${entry.sourceUrl}]`)

  if (entry.kind === 'collection') {
    console.log(`  TYPE: Collection/listing page — ${entry.candidates.length} candidate product link(s) found:`)
    entry.candidates.forEach((c, i) => console.log(`    ${i + 1}. ${c.nameGuess} — ${c.url}`))
    console.log('  (Re-run import:links with the specific product URLs you want from this list.)')
    return
  }

  const { extraction } = entry
  if (extraction.error) {
    console.log(`  STATUS: ${extraction.blocked ? 'BLOCKED' : 'ERROR'} — ${extraction.error}`)
    return
  }
  console.log(
    `  Retailer: ${extraction.retailerName}${entry.references.retailer ? ' (existing)' : ' (NEW — needs creating)'}`,
  )
  console.log(`  Title:    ${extraction.data.title ?? '(missing)'}`)
  console.log(
    `  Price:    ${extraction.data.price !== undefined ? `${extraction.data.price} ${extraction.data.currency ?? ''}`.trim() : '(missing)'}`,
  )
  console.log(`  Rating:   ${extraction.data.rating ?? '(missing)'}`)
  console.log(`  Images:   ${extraction.data.imageUrls.length} found`)
  console.log(
    `  Brand:    ${extraction.data.brandName ?? '(none detected)'}${entry.references.missing.brand ? ' (NEW — needs creating)' : ''}`,
  )
  console.log(`  Suggested slug: ${entry.suggestedSlug}`)
  if (extraction.missingFields.length) {
    console.log(`  Missing fields: ${extraction.missingFields.join(', ')}`)
  }
}

const printSummary = (batch: DraftBatch) => {
  console.log(`\n${'='.repeat(70)}`)
  console.log(`  IMPORT DRAFT — ${batch.entries.length} link(s)`)
  console.log('='.repeat(70))
  batch.entries.forEach(printEntry)
  console.log(`\n${'='.repeat(70)}\n`)
}

const run = async () => {
  const urls = process.argv.slice(2)
  if (urls.length === 0) {
    console.error('Usage: npm run import:links -- <url1> [url2] [url3] ...')
    process.exit(1)
  }

  const payload = await getPayload({ config })

  const entries: DraftEntry[] = []
  for (const [index, url] of urls.entries()) {
    entries.push(await buildDraftEntry(payload, url))

    if (index < urls.length - 1) {
      await sleep(DELAY_BETWEEN_REQUESTS_MS)
    }
  }

  const batch: DraftBatch = { createdAt: new Date().toISOString(), entries }

  fs.mkdirSync(draftsDir, { recursive: true })
  const outputPath = path.join(draftsDir, `${Date.now()}.json`)
  fs.writeFileSync(outputPath, JSON.stringify(batch, null, 2))

  printSummary(batch)
  console.log(`Draft written to: ${outputPath}`)
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
