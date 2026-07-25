import type { Media } from '@/payload-types'

export const getSiteUrl = (): string => process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

/** Prefixes a possibly-relative Payload media URL with the site origin. */
export const absoluteUrl = (path: string, siteUrl: string = getSiteUrl()): string =>
  /^https?:\/\//i.test(path) ? path : `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`

export const mediaUrl = (media: Media | number | null | undefined): string | undefined => {
  if (!media || typeof media === 'number' || !media.url) return undefined
  return absoluteUrl(media.url)
}
