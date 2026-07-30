import Link from "next/link";

import { CategoryCard } from "@/components/site/CategoryCard";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickAnswerTable } from "@/components/site/QuickAnswerTable";
import { RetailerCard } from "@/components/site/RetailerCard";
import { getPayloadClient } from "@/lib/payload";
import type { Media } from "@/payload-types";

// No generateStaticParams-free params here, so Next.js would otherwise try to
// prerender this page at build time (needs a live Postgres, which isn't guaranteed
// during local `npm run build`). force-dynamic keeps the build DB-independent;
// switch to `revalidate = 1800` once Postgres is available at build time.
export const dynamic = "force-dynamic";

const getHomeData = async () => {
  const payload = await getPayloadClient();

  const [occasions, categories, retailers, featuredProducts, labelledProducts, latestReviews, newArrivals, guides] =
    await Promise.all([
      payload.find({ collection: "occasions", limit: 6, sort: "startMonth", depth: 1 }),
      payload.find({ collection: "categories", limit: 20, depth: 0 }),
      payload.find({ collection: "retailers", limit: 20, depth: 0 }),
      payload.find({
        collection: "products",
        where: { and: [{ isFeatured: { equals: true } }, { _status: { equals: "published" } }] },
        limit: 8,
        depth: 1,
      }),
      payload.find({
        collection: "products",
        where: { and: [{ bestPickLabel: { not_equals: "none" } }, { _status: { equals: "published" } }] },
        limit: 8,
        depth: 1,
      }),
      payload.find({
        collection: "products",
        where: { _status: { equals: "published" } },
        sort: "-updatedAt",
        limit: 8,
        depth: 1,
      }),
      payload.find({
        collection: "products",
        where: { _status: { equals: "published" } },
        sort: "-createdAt",
        limit: 8,
        depth: 1,
      }),
      payload.find({
        collection: "buying-guides",
        where: { _status: { equals: "published" } },
        sort: "-publishedAt",
        limit: 4,
        depth: 0,
      }),
    ]);

  // Categories/retailers with zero published products are leftover scaffolding
  // (e.g. an early "Kitchen" category with nothing in it yet) — showing them
  // as empty cards would look broken, not "coming soon", so filter them out.
  const categoriesWithStats = (
    await Promise.all(
      categories.docs.map(async (category) => {
        const result = await payload.find({
          collection: "products",
          where: { and: [{ categories: { equals: category.id } }, { _status: { equals: "published" } }] },
          limit: 1,
          depth: 1,
        });
        const firstImage = result.docs[0]?.gallery?.[0]?.image;
        return {
          category,
          productCount: result.totalDocs,
          image: firstImage && typeof firstImage !== "number" ? (firstImage as Media) : undefined,
        };
      }),
    )
  ).filter((entry) => entry.productCount > 0);

  const retailersWithStats = (
    await Promise.all(
      retailers.docs.map(async (retailer) => {
        const result = await payload.find({
          collection: "products",
          where: {
            and: [{ "retailerLinks.retailer": { equals: retailer.id } }, { _status: { equals: "published" } }],
          },
          limit: 0,
        });
        return { retailer, productCount: result.totalDocs };
      }),
    )
  ).filter((entry) => entry.productCount > 0);

  return {
    occasions: occasions.docs,
    categoriesWithStats,
    retailersWithStats,
    featuredProducts: featuredProducts.docs,
    labelledProducts: labelledProducts.docs,
    latestReviews: latestReviews.docs,
    newArrivals: newArrivals.docs,
    guides: guides.docs,
  };
};

export default async function HomePage() {
  const {
    occasions,
    categoriesWithStats,
    retailersWithStats,
    featuredProducts,
    labelledProducts,
    latestReviews,
    newArrivals,
    guides,
  } = await getHomeData();

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Get Trendy Finds
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            Independent, tested product reviews. Every recommendation is based on our research and evaluation. When
            you buy through our links, we may earn an affiliate commission — at no extra cost to you, and never in
            exchange for a positive review.
          </p>
        </div>
      </section>

      {categoriesWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Shop by category</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {categoriesWithStats.map(({ category, productCount }) => (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="cursor-pointer rounded-lg border border-border bg-surface px-4 py-6 text-center font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {category.title}
                <span className="mt-1 block text-xs font-normal text-muted-foreground">{productCount} products</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {labelledProducts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Quick picks</h2>
          <div className="mt-6">
            <QuickAnswerTable products={labelledProducts} />
          </div>
        </section>
      )}

      {occasions.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Shop by occasion</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {occasions.map((occasion) => (
              <Link
                key={occasion.id}
                href={`/${occasion.slug}`}
                className="cursor-pointer rounded-lg border border-border bg-surface px-4 py-6 text-center font-medium text-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
              >
                {occasion.title}
              </Link>
            ))}
          </div>
        </section>
      )}

      {categoriesWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Featured categories</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categoriesWithStats.map(({ category, productCount, image }) => (
              <CategoryCard
                key={category.id}
                slug={category.slug}
                title={category.title}
                description={category.description}
                productCount={productCount}
                image={image}
              />
            ))}
          </div>
        </section>
      )}

      {retailersWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Featured retailers</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {retailersWithStats.map(({ retailer, productCount }) => (
              <RetailerCard
                key={retailer.id}
                name={retailer.name}
                productCount={productCount}
                couponCode={retailer.couponCode}
                couponDiscountPercent={retailer.couponDiscountPercent}
              />
            ))}
          </div>
        </section>
      )}

      {latestReviews.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Latest reviews</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestReviews.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {newArrivals.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">New arrivals</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {featuredProducts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Featured picks</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {guides.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Latest buying guides</h2>
          <ul className="mt-6 flex flex-col divide-y divide-border rounded-lg border border-border bg-surface">
            {guides.map((guide) => (
              <li key={guide.id}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="block cursor-pointer px-5 py-4 font-medium text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {guide.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
