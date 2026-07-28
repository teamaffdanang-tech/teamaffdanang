import type { Payload } from 'payload'

const FETCH_TIMEOUT_MS = 20_000

/**
 * Downloads an external image URL and stores it as a Payload Media doc
 * (local disk today, S3/R2 automatically once a bucket is configured — same
 * code either way). Returns the created media doc's id, or undefined if the
 * download/creation fails, so a bad image URL doesn't abort the whole seed run.
 */
export const downloadImageAsMedia = async (
  payload: Payload,
  imageUrl: string,
  alt: string,
): Promise<number | undefined> => {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS)
  try {
    const response = await fetch(imageUrl, { signal: controller.signal })
    if (!response.ok) return undefined

    const arrayBuffer = await response.arrayBuffer()
    const mimetype = response.headers.get('content-type') || 'image/jpeg'
    const name = imageUrl.split('/').pop()?.split('?')[0] || 'image.jpg'

    const created = (await (payload.create as (args: unknown) => Promise<unknown>)({
      collection: 'media',
      data: { alt },
      file: {
        data: Buffer.from(arrayBuffer),
        mimetype,
        name,
        size: arrayBuffer.byteLength,
      },
    })) as { id: number }

    return created.id
  } catch {
    return undefined
  } finally {
    clearTimeout(timeout)
  }
}
