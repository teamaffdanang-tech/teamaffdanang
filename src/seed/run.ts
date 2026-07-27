import { getPayload } from 'payload'

import config from '../payload.config'
import { importedDataset } from './data/imported'
import { importSeedData } from './import'

const run = async () => {
  const payload = await getPayload({ config })
  await importSeedData(payload, importedDataset)
  payload.logger.info('Seed import complete.')
  process.exit(0)
}

run().catch((err) => {
  console.error(err)
  process.exit(1)
})
