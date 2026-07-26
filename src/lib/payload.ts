import { getPayload } from 'payload'

import config from '../payload.config'

/** Shared Payload Local API client for server components/route handlers on the public site. */
export const getPayloadClient = () => getPayload({ config })
