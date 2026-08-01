import type { Payload } from 'payload'

import { downloadImageAsMedia } from './downloadImage'
import { plainTextToLexical } from './lexical'
import type {
  SeedAuthor,
  SeedBlogPost,
  SeedBrand,
  SeedCategory,
  SeedDataset,
  SeedOccasion,
  SeedProduct,
  SeedRetailer,
} from './types'

type SlugCollection =
  | 'categories'
  | 'occasions'
  | 'brands'
  | 'retailers'
  | 'authors'
  | 'products'
  | 'blog-posts'

type SlugMap = Record<string, number>

/** Finds a doc's id by slug within a collection, or undefined if it doesn't exist yet. */
const findIdBySlug = async (
  payload: Payload,
  collection: SlugCollection,
  slug: string,
): Promise<number | undefined> => {
  const result = await payload.find({
    collection,
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const doc = result.docs[0] as { id: number } | undefined
  return doc?.id
}

/** Creates the doc if its slug doesn't exist yet, otherwise updates it in place. Returns the id. */
const upsert = async (
  payload: Payload,
  collection: SlugCollection,
  slug: string,
  data: Record<string, unknown>,
): Promise<number> => {
  const existingId = await findIdBySlug(payload, collection, slug)
  // Payload's Local API types `create`/`update` as a discriminated union keyed by a literal
  // collection slug (some collections require `draft`, others don't); a dynamic union
  // `collection` param with generic `data` can't satisfy that at the type level, so this
  // boundary is intentionally untyped — `upsert`'s own signature stays fully typed.
  if (existingId) {
    await (payload.update as (args: unknown) => Promise<unknown>)({ collection, id: existingId, data })
    return existingId
  }
  const created = (await (payload.create as (args: unknown) => Promise<unknown>)({ collection, data })) as {
    id: number
  }
  return created.id
}

const seedTaxonomy = async <T extends { slug: string }>(
  payload: Payload,
  collection: SlugCollection,
  rows: T[],
  toData: (row: T) => Record<string, unknown>,
): Promise<SlugMap> => {
  const map: SlugMap = {}
  for (const row of rows) {
    map[row.slug] = await upsert(payload, collection, row.slug, toData(row))
  }
  return map
}

const seedCategories = (payload: Payload, rows: SeedCategory[]) =>
  seedTaxonomy(payload, 'categories', rows, (r) => ({
    title: r.title,
    slug: r.slug,
    description: r.description,
  }))

const seedOccasions = (payload: Payload, rows: SeedOccasion[]) =>
  seedTaxonomy(payload, 'occasions', rows, (r) => ({
    title: r.title,
    slug: r.slug,
    description: r.description,
    startMonth: r.startMonth,
    endMonth: r.endMonth,
  }))

const seedBrands = (payload: Payload, rows: SeedBrand[]) =>
  seedTaxonomy(payload, 'brands', rows, (r) => ({
    name: r.name,
    slug: r.slug,
    website: r.website,
    description: r.description,
  }))

const seedRetailers = (payload: Payload, rows: SeedRetailer[]) =>
  seedTaxonomy(payload, 'retailers', rows, (r) => ({
    name: r.name,
    slug: r.slug,
    urlPattern: r.urlPattern,
    couponCode: r.couponCode,
    couponDiscountPercent: r.couponDiscountPercent,
    network: r.network,
    trackingParam: r.trackingParam,
  }))

const seedAuthors = (payload: Payload, rows: SeedAuthor[]) =>
  seedTaxonomy(payload, 'authors', rows, (r) => ({
    name: r.name,
    slug: r.slug,
    title: r.title,
    bio: r.bio,
  }))

/** Existing gallery image ids for a product, if any — so re-seeding doesn't re-download
 * and duplicate media that's already attached. */
const getExistingGalleryIds = async (payload: Payload, slug: string): Promise<number[]> => {
  const result = await payload.find({
    collection: 'products',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const doc = result.docs[0] as { gallery?: { image: number }[] } | undefined
  return (doc?.gallery ?? []).map((row) => row.image).filter((id): id is number => typeof id === 'number')
}

const seedProducts = async (
  payload: Payload,
  rows: SeedProduct[],
  categoryIds: SlugMap,
  occasionIds: SlugMap,
  brandIds: SlugMap,
  retailerIds: SlugMap,
): Promise<SlugMap> => {
  const map: SlugMap = {}
  for (const row of rows) {
    try {
      const galleryImageIds = await getExistingGalleryIds(payload, row.slug)
      if (galleryImageIds.length === 0) {
        for (const imageUrl of row.galleryImageUrls ?? []) {
          const mediaId = await downloadImageAsMedia(payload, imageUrl, row.title)
          if (mediaId) galleryImageIds.push(mediaId)
        }
      }

      const data: Record<string, unknown> = {
        title: row.title,
        slug: row.slug,
        excerpt: row.excerpt,
        description: row.description ? plainTextToLexical(row.description) : undefined,
        officialUrl: row.officialUrl,
        categories: row.categorySlugs?.map((s) => categoryIds[s]).filter(Boolean),
        occasions: row.occasionSlugs?.map((s) => occasionIds[s]).filter(Boolean),
        brand: row.brandSlug ? brandIds[row.brandSlug] : undefined,
        pros: row.pros?.map((point) => ({ point })),
        cons: row.cons?.map((point) => ({ point })),
        specifications: row.specifications,
        faqs: row.faqs,
        ratings: row.ratingOverall !== undefined ? { overall: row.ratingOverall } : undefined,
        isFeatured: row.isFeatured,
        bestPickLabel: row.bestPickLabel,
        retailerLinks: row.retailerLinks?.map((link) => ({
          retailer: retailerIds[link.retailerSlug],
          affiliateUrl: link.affiliateUrl,
          price: link.price,
          currency: link.currency,
        })),
        gallery: galleryImageIds.length ? galleryImageIds.map((image) => ({ image })) : undefined,
        seo:
          row.metaTitle || row.metaDescription
            ? {
                metaTitle: row.metaTitle,
                metaDescription: row.metaDescription,
                // Reuse the already-downloaded first gallery image as the
                // Open Graph image fallback — no separate download needed.
                metaImage: galleryImageIds[0],
              }
            : undefined,
        _status: row.publish ? 'published' : 'draft',
      }
      map[row.slug] = await upsert(payload, 'products', row.slug, data)
    } catch (err) {
      // One bad product (network hiccup, validation error) shouldn't abort the whole batch.
      payload.logger.error({ err, slug: row.slug }, 'Failed to seed product, skipping')
    }
  }
  return map
}

/** Existing coverImage id for a blog post, if any — so re-seeding doesn't re-download. */
const getExistingCoverImageId = async (payload: Payload, slug: string): Promise<number | undefined> => {
  const result = await payload.find({
    collection: 'blog-posts',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  })
  const doc = result.docs[0] as { coverImage?: number } | undefined
  return doc?.coverImage
}

const seedBlogPosts = async (
  payload: Payload,
  rows: SeedBlogPost[],
  occasionIds: SlugMap,
  categoryIds: SlugMap,
  authorIds: SlugMap,
  productIds: SlugMap,
): Promise<void> => {
  for (const row of rows) {
    let coverImageId = await getExistingCoverImageId(payload, row.slug)
    if (!coverImageId && row.coverImageUrl) {
      coverImageId = await downloadImageAsMedia(payload, row.coverImageUrl, row.title)
    }

    const data: Record<string, unknown> = {
      title: row.title,
      slug: row.slug,
      excerpt: row.excerpt,
      coverImage: coverImageId,
      intro: row.intro ? plainTextToLexical(row.intro) : undefined,
      methodology: row.methodology ? plainTextToLexical(row.methodology) : undefined,
      verdict: row.verdict ? plainTextToLexical(row.verdict) : undefined,
      occasion: row.occasionSlug ? occasionIds[row.occasionSlug] : undefined,
      category: row.categorySlug ? categoryIds[row.categorySlug] : undefined,
      author: row.authorSlug ? authorIds[row.authorSlug] : undefined,
      products: row.productSlugs.map((s) => productIds[s]).filter(Boolean),
      picks: row.picks?.map((pick) => ({
        product: productIds[pick.productSlug],
        pickLabel: pick.pickLabel,
        blurb: pick.blurb ? plainTextToLexical(pick.blurb) : undefined,
      })),
      faqs: row.faqs,
      publishedAt: row.publishedAt,
      seo:
        row.metaTitle || row.metaDescription
          ? {
              metaTitle: row.metaTitle,
              metaDescription: row.metaDescription ?? row.excerpt,
              metaImage: coverImageId,
            }
          : undefined,
      _status: row.publish ? 'published' : 'draft',
    }
    await upsert(payload, 'blog-posts', row.slug, data)
  }
}

/**
 * Imports a seed dataset in dependency order (taxonomy first, then products,
 * then blog posts), upserting by slug so it is safe to re-run.
 */
export const importSeedData = async (payload: Payload, dataset: SeedDataset): Promise<void> => {
  const categoryIds = await seedCategories(payload, dataset.categories)
  const occasionIds = await seedOccasions(payload, dataset.occasions)
  const brandIds = await seedBrands(payload, dataset.brands)
  const retailerIds = await seedRetailers(payload, dataset.retailers)
  const authorIds = await seedAuthors(payload, dataset.authors)

  const productIds = await seedProducts(payload, dataset.products, categoryIds, occasionIds, brandIds, retailerIds)

  await seedBlogPosts(payload, dataset.blogPosts, occasionIds, categoryIds, authorIds, productIds)
}
