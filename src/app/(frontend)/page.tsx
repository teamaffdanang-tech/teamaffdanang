import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { BlogCard } from "@/components/site/BlogCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { CouponCard } from "@/components/site/CouponCard";
import { OccasionCard } from "@/components/site/OccasionCard";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickAnswerTable } from "@/components/site/QuickAnswerTable";
import { RetailerCard } from "@/components/site/RetailerCard";
import { getActiveCoupons } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";
import type { Media } from "@/payload-types";

// No generateStaticParams-free params here, so Next.js would otherwise try to
// prerender this page at build time (needs a live Postgres, which isn't guaranteed
// during local `npm run build`). force-dynamic keeps the build DB-independent;
// switch to `revalidate = 1800` once Postgres is available at build time.
export const dynamic = "force-dynamic";

const getHomeData = async () => {
  const payload = await getPayloadClient();

  const [occasions, categories, retailers, featuredProducts, labelledProducts, latestReviews, newArrivals, posts, activeCoupons] =
    await Promise.all([
      payload.find({ collection: "occasions", limit: 20, sort: "startMonth", depth: 1 }),
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
        collection: "blog-posts",
        where: { _status: { equals: "published" } },
        sort: "-publishedAt",
        limit: 4,
        depth: 1,
      }),
      getActiveCoupons(payload, { limit: 8 }),
    ]);

  const couponedProductIds = new Set(
    activeCoupons
      .map((coupon) => (typeof coupon.linkedProduct === "number" ? coupon.linkedProduct : coupon.linkedProduct?.id))
      .filter((id): id is number => typeof id === "number"),
  );

  // Categories with zero published products still render — as a "Coming
  // soon" card (see CategoryCard) — rather than being hidden, since the site
  // is explicitly expected to grow into new categories over time.
  const categoriesWithStats = await Promise.all(
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
  );

  // Same "Coming soon" treatment as categories, and same image-card style —
  // an occasion's own curated heroImage wins when set, else fall back to a
  // representative product photo like categories do.
  const occasionsWithStats = await Promise.all(
    occasions.docs.map(async (occasion) => {
      const result = await payload.find({
        collection: "products",
        where: { and: [{ occasions: { equals: occasion.id } }, { _status: { equals: "published" } }] },
        limit: 1,
        depth: 1,
      });
      const heroImage = occasion.heroImage && typeof occasion.heroImage !== "number" ? occasion.heroImage : undefined;
      const firstProductImage = result.docs[0]?.gallery?.[0]?.image;
      return {
        occasion,
        productCount: result.totalDocs,
        image: heroImage ?? (firstProductImage && typeof firstProductImage !== "number" ? (firstProductImage as Media) : undefined),
      };
    }),
  );

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

  const heroImage = newArrivals.docs
    .map((product) => product.gallery?.[0]?.image)
    .find((image): image is Media => Boolean(image && typeof image !== "number"));

  return {
    occasionsWithStats,
    categoriesWithStats,
    retailersWithStats,
    featuredProducts: featuredProducts.docs,
    labelledProducts: labelledProducts.docs,
    latestReviews: latestReviews.docs,
    newArrivals: newArrivals.docs,
    posts: posts.docs,
    activeCoupons,
    couponedProductIds,
    heroImage,
    // Real counts only — no fabricated "trusted by X people" style claims.
    totalReviewed: latestReviews.totalDocs,
    totalCategories: categoriesWithStats.filter((entry) => entry.productCount > 0).length,
    totalRetailers: retailersWithStats.length,
  };
};

const trustBadges = [
  {
    label: "Independently tested",
    icon: (
      <path
        d="M10 2l6.5 2.6v5.2c0 4.2-2.8 7.9-6.5 9.2-3.7-1.3-6.5-5-6.5-9.2V4.6L10 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Updated monthly",
    icon: (
      <>
        <path d="M3 8h14M7 3v3M13 3v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="3" y="5" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      </>
    ),
  },
  {
    label: "Transparent affiliate policy",
    icon: (
      <>
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6.5v4l2.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

const SectionHeading = ({ children, className }: { children: ReactNode; className?: string }) => (
  <div className="flex items-center gap-3">
    <span aria-hidden="true" className="h-6 w-1.5 shrink-0 rounded-full bg-accent" />
    <h2 className={`font-heading font-semibold text-foreground ${className ?? "text-2xl"}`}>{children}</h2>
  </div>
);

export default async function HomePage() {
  const {
    occasionsWithStats,
    categoriesWithStats,
    retailersWithStats,
    featuredProducts,
    labelledProducts,
    latestReviews,
    newArrivals,
    posts,
    activeCoupons,
    couponedProductIds,
    heroImage,
    totalReviewed,
    totalCategories,
    totalRetailers,
  } = await getHomeData();

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="relative overflow-hidden bg-hero-bg">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_1.15fr] md:py-32">
          <div className="flex flex-col gap-6">
            <span aria-hidden="true" className="h-1.5 w-16 rounded-full bg-accent" />
            <h1 className="max-w-xl font-heading text-5xl font-semibold leading-[1.05] text-hero-foreground sm:text-6xl lg:text-7xl">
              Get Trendy Finds
            </h1>
            <p className="max-w-lg text-lg text-hero-muted sm:text-xl">
              Independent, tested product reviews. Every recommendation is based on our research and evaluation. When
              you buy through our links, we may earn an affiliate commission — at no extra cost to you, and never in
              exchange for a positive review.
            </p>
            <Link
              href="#editors-picks"
              className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-lg bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[0_20px_45px_-15px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_55px_-12px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] sm:text-lg"
            >
              See Latest Reviews
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          <div className="relative h-[320px] w-full overflow-hidden rounded-2xl ring-4 ring-accent/40 shadow-2xl sm:h-[400px] md:h-[440px] lg:h-[520px]">
            {heroImage?.url ? (
              <>
                <Image
                  src={heroImage.url}
                  alt={heroImage.alt || "Featured product"}
                  fill
                  sizes="(min-width: 768px) 560px, 100vw"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-hero-muted">
                No image yet
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/20">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center gap-3">
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-8 w-8 shrink-0 text-accent">
                  {badge.icon}
                </svg>
                <span className="text-sm font-semibold text-hero-foreground">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {labelledProducts.length > 0 && (
        <section id="editors-picks" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <SectionHeading className="text-3xl">Editor&apos;s picks</SectionHeading>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Our top recommendations, chosen from every product we&apos;ve tested.
            </p>
            <div className="mt-6">
              <QuickAnswerTable products={labelledProducts} />
            </div>
          </div>
        </section>
      )}

      {(totalReviewed > 0 || totalCategories > 0 || totalRetailers > 0) && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-3 sm:p-8">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalReviewed}</span>
              <span className="text-sm text-muted-foreground">Products reviewed</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalCategories}</span>
              <span className="text-sm text-muted-foreground">Active categories</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalRetailers}</span>
              <span className="text-sm text-muted-foreground">Retailers covered</span>
            </div>
          </div>
        </section>
      )}

      {categoriesWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Shop by category</SectionHeading>
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

      {occasionsWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Shop by occasion</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {occasionsWithStats.map(({ occasion, productCount, image }) => (
              <OccasionCard
                key={occasion.id}
                slug={occasion.slug}
                title={occasion.title}
                description={occasion.description}
                productCount={productCount}
                image={image}
              />
            ))}
          </div>
        </section>
      )}

      {retailersWithStats.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Featured retailers</SectionHeading>
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

      {activeCoupons.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Active deals</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {activeCoupons.map((coupon) => (
              <CouponCard key={coupon.id} coupon={coupon} />
            ))}
          </div>
        </section>
      )}

      {latestReviews.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Latest reviews</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {latestReviews.map((product) => (
              <ProductCard key={product.id} product={product} hasCoupon={couponedProductIds.has(product.id)} />
            ))}
          </div>
        </section>
      )}

      {newArrivals.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>New arrivals</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} hasCoupon={couponedProductIds.has(product.id)} />
            ))}
          </div>
        </section>
      )}

      {featuredProducts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Featured picks</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} hasCoupon={couponedProductIds.has(product.id)} />
            ))}
          </div>
        </section>
      )}

      {posts.length > 0 && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading>Latest blog posts</SectionHeading>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
