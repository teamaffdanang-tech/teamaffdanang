import type { Payload } from 'payload'

import { plainTextToLexical } from './lexical'
import type {
  SeedAuthor,
  SeedBrand,
  SeedBuyingGuide,
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
  | 'buying-guides'

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
  }))

const seedAuthors = (payload: Payload, rows: SeedAuthor[]) =>
  seedTaxonomy(payload, 'authors', rows, (r) => ({
    name: r.name,
    slug: r.slug,
    title: r.title,
    bio: r.bio,
  }))

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
      })),
      _status: row.publish ? 'published' : 'draft',
    }
    map[row.slug] = await upsert(payload, 'products', row.slug, data)
  }
  return map
}

const seedBuyingGuides = async (
  payload: Payload,
  rows: SeedBuyingGuide[],
  occasionIds: SlugMap,
  categoryIds: SlugMap,
  authorIds: SlugMap,
  productIds: SlugMap,
): Promise<void> => {
  for (const row of rows) {
    const data: Record<string, unknown> = {
      title: row.title,
      slug: row.slug,
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
      _status: row.publish ? 'published' : 'draft',
    }
    await upsert(payload, 'buying-guides', row.slug, data)
  }
}

/**
 * Imports a seed dataset in dependency order (taxonomy first, then products,
 * then buying guides), upserting by slug so it is safe to re-run.
 */
export const importSeedData = async (payload: Payload, dataset: SeedDataset): Promise<void> => {
  const categoryIds = await seedCategories(payload, dataset.categories)
  const occasionIds = await seedOccasions(payload, dataset.occasions)
  const brandIds = await seedBrands(payload, dataset.brands)
  const retailerIds = await seedRetailers(payload, dataset.retailers)
  const authorIds = await seedAuthors(payload, dataset.authors)

  const productIds = await seedProducts(payload, dataset.products, categoryIds, occasionIds, brandIds, retailerIds)

  await seedBuyingGuides(payload, dataset.buyingGuides, occasionIds, categoryIds, authorIds, productIds)
}
