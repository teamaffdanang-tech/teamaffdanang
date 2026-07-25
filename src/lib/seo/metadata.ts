import type { Metadata } from 'next'

import { absoluteUrl, getSiteUrl, mediaUrl } from './shared'
import type { Media } from '@/payload-types'

type SeoGroup = {
  metaTitle?: string | null
  metaDescription?: string | null
  metaImage?: (number | null) | Media
  ogTitle?: string | null
  ogDescription?: string | null
  noIndex?: boolean | null
} | null | undefined

type ResolveSeoArgs = {
  seo?: SeoGroup
  fallbackTitle: string
  path: string
}

/** Builds a Next.js Metadata object from a content doc's `seo` group, with sane fallbacks. */
export const resolveSeo = ({ seo, fallbackTitle, path }: ResolveSeoArgs): Metadata => {
  const siteUrl = getSiteUrl()
  const title = seo?.metaTitle || fallbackTitle
  const description = seo?.metaDescription || undefined
  const ogTitle = seo?.ogTitle || title
  const ogDescription = seo?.ogDescription || description
  const ogImage = mediaUrl(seo?.metaImage)
  const url = absoluteUrl(path, siteUrl)

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    robots: seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      images: ogImage ? [{ url: ogImage }] : undefined,
    },
    twitter: {
      card: ogImage ? 'summary_large_image' : 'summary',
      title: ogTitle,
      description: ogDescription,
      images: ogImage ? [ogImage] : undefined,
    },
  }
}
