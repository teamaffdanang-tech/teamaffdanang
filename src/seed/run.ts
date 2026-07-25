import { getPayload } from 'payload'

import config from '../payload.config'
import { sampleDataset } from './data/sample'
import { importSeedData } from './import'

const run = async () => {
  const payload = await getPayload({ config })
  await importSeedData(payload, sampleDataset)
  payload.logger.info('Seed import complete.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
