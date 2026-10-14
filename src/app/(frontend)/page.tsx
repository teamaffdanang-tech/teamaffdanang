import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { BlogCard } from "@/components/site/BlogCard";
import { CategoryCard } from "@/components/site/CategoryCard";
import { CouponCard } from "@/components/site/CouponCard";
import { NewsletterSignup } from "@/components/site/NewsletterSignup";
import { OccasionCard } from "@/components/site/OccasionCard";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickAnswerTable } from "@/components/site/QuickAnswerTable";
import { RetailerCard } from "@/components/site/RetailerCard";
import { couponAppliesToProduct, discountLabel, getActiveCoupons } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";
import { getActiveSeason, SEASON_HERO_SLUGS } from "@/lib/seasonalNav";
import type { Media, Product } from "@/payload-types";

// A card in the seasonal "trend drop" hero grid. `deal` is a real
// coupon-backed discount label (e.g. "16% off") or undefined — never fabricated.
type HeroProduct = {
  title: string;
  slug: string;
  image?: Media;
  price?: number;
  currency?: string;
  deal?: string;
};

const CAMPAIGN_SLUGS = new Set(["black-friday", "christmas", "new-year"]);

const firstGalleryImage = (product: Product): Media | undefined => {
  const image = product.gallery?.[0]?.image;
  return image && typeof image !== "number" ? (image as Media) : undefined;
};

// ISR: the home page is heavy (many catalog queries), so it is rendered once
// and cached for an hour rather than rebuilt per request. Prerendering runs at
// build/revalidate time, which needs Postgres reachable then (it is on Vercel
// and in CI). The on-demand /revalidate route can bust this after a seed.
export const revalidate = 3600;

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
        limit: 12,
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

  const homeProducts = [...featuredProducts.docs, ...labelledProducts.docs, ...latestReviews.docs, ...newArrivals.docs];
  const couponedProductIds = new Set(
    homeProducts.filter((p) => activeCoupons.some((coupon) => couponAppliesToProduct(coupon, p))).map((p) => p.id),
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

  // In-season campaign (US Eastern). When one is active, the hero becomes a
  // "trend drop" grid of up to 4 products from that campaign — pinned by slug in
  // SEASON_HERO_SLUGS, else auto-picked from products that actually have an image.
  const activeSeason = getActiveSeason();
  let seasonHeroProducts: HeroProduct[] = [];
  if (activeSeason) {
    const occ = occasions.docs.find((o) => o.slug === activeSeason);
    if (occ) {
      const pinned = SEASON_HERO_SLUGS[activeSeason] ?? [];
      let docs: Product[] = [];
      if (pinned.length > 0) {
        const res = await payload.find({
          collection: "products",
          where: { and: [{ slug: { in: pinned } }, { _status: { equals: "published" } }] },
          depth: 1,
          limit: pinned.length,
        });
        // Preserve the curated order from the config.
        docs = pinned
          .map((slug) => res.docs.find((d) => d.slug === slug))
          .filter((d): d is Product => Boolean(d));
      } else {
        const res = await payload.find({
          collection: "products",
          where: { and: [{ occasions: { equals: occ.id } }, { _status: { equals: "published" } }] },
          limit: 12,
          depth: 1,
        });
        docs = res.docs.filter((d) => firstGalleryImage(d));
      }
      seasonHeroProducts = docs.slice(0, 4).map((product) => {
        const link = product.retailerLinks?.[0];
        // Real discount only — a coupon that genuinely applies to this product.
        const coupon = activeCoupons.find((c) => couponAppliesToProduct(c, product));
        return {
          title: product.title,
          slug: product.slug,
          image: firstGalleryImage(product),
          price: link?.price ?? undefined,
          currency: link?.currency ?? "USD",
          deal: coupon ? discountLabel(coupon) : undefined,
        };
      });
    }
  }

  // Off-season single hero image (unchanged default hero).
  const heroImage = newArrivals.docs
    .map((product) => product.gallery?.[0]?.image)
    .find((image): image is Media => Boolean(image && typeof image !== "number"));

  // Hide "Coming soon" (zero-product) occasion cards on the home page unless
  // they're one of the seasonal campaigns — this drops the Halloween/off-season
  // teasers the nav already hides, while keeping Black Friday/Christmas.
  const visibleOccasions = occasionsWithStats.filter(
    ({ occasion, productCount }) => productCount > 0 || CAMPAIGN_SLUGS.has(occasion.slug),
  );

  // Distinct brands that actually have a published product — the honest
  // "Brands featured" count. (retailers.totalDocs would also count brands that
  // have nothing published yet.) One query; cheap under hourly ISR.
  const publishedForBrands = await payload.find({
    collection: "products",
    where: { _status: { equals: "published" } },
    depth: 0,
    limit: 5000,
  });
  const featuredBrandIds = new Set<number>();
  for (const product of publishedForBrands.docs) {
    for (const link of product.retailerLinks ?? []) {
      const id = typeof link.retailer === "number" ? link.retailer : link.retailer?.id;
      if (id != null) featuredBrandIds.add(id);
    }
  }
  const totalBrandsFeatured = featuredBrandIds.size;

  return {
    occasionsWithStats: visibleOccasions,
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
    seasonHeroProducts,
    activeSeason,
    // Real counts only — no fabricated "trusted by X people" style claims.
    totalReviewed: latestReviews.totalDocs,
    totalCategories: categoriesWithStats.filter((entry) => entry.productCount > 0).length,
    totalBrandsFeatured,
  };
};

const trustBadges = [
  {
    label: "Independently researched",
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

const CURRENCY_SYMBOL: Record<string, string> = { USD: "$", GBP: "£", EUR: "€", HKD: "HK$" };
const fmtPrice = (price?: number, currency?: string): string | null =>
  price == null ? null : `${CURRENCY_SYMBOL[currency ?? "USD"] ?? "$"}${price.toFixed(2).replace(/\.00$/, "")}`;

// Seasonal "trend drop" hero theme — GTF voice + plum/pine palettes, distinct
// from the off-season dark hero and from GSF entirely.
const SEASONAL_HERO: Record<
  "black-friday" | "christmas",
  {
    eyebrow: string;
    title: string;
    blurb: string;
    cta: string;
    href: string;
    bg: string;
    text: string;
    sub: string;
    cardBg: string;
    cardBorder: string;
    accent: string;
    dealBg: string;
    dealText: string;
    btnBg: string;
    btnText: string;
  }
> = {
  "black-friday": {
    eyebrow: "Black Friday 2026 · Nov 27–30",
    title: "Trending this Black Friday",
    blurb:
      "Based on what shoppers searched for most last holiday season — the gifts and lifestyle finds everyone's hunting for, curated into one drop.",
    cta: "Shop the trend drop",
    href: "/black-friday",
    bg: "linear-gradient(135deg, #2a0c24 0%, #4a1540 55%, #7a1f55 100%)",
    text: "#fff0f5",
    sub: "rgba(255,240,245,0.82)",
    cardBg: "rgba(255,255,255,0.08)",
    cardBorder: "rgba(255,180,200,0.26)",
    accent: "#ffb3c6",
    dealBg: "#ff6f91",
    dealText: "#3a0f2e",
    btnBg: "#ff6f91",
    btnText: "#3a0f2e",
  },
  christmas: {
    eyebrow: "Christmas 2026",
    title: "Trending this Christmas",
    blurb:
      "The cosy, giftable finds shoppers are searching for this season — curated into one drop, before they sell out.",
    cta: "Shop the trend drop",
    href: "/christmas",
    bg: "linear-gradient(135deg, #0b2f1c 0%, #124029 55%, #1a5433 100%)",
    text: "#f6efdd",
    sub: "rgba(246,239,221,0.82)",
    cardBg: "rgba(255,255,255,0.08)",
    cardBorder: "rgba(246,239,221,0.26)",
    accent: "#f3e3a0",
    dealBg: "#f3e3a0",
    dealText: "#143f26",
    btnBg: "#f3e3a0",
    btnText: "#143f26",
  },
};

export default async function HomePage() {
  const {
    occasionsWithStats,
    categoriesWithStats,
    retailersWithStats,
    featuredProducts,
    labelledProducts,
    newArrivals,
    posts,
    activeCoupons,
    couponedProductIds,
    heroImage,
    seasonHeroProducts,
    activeSeason,
    totalReviewed,
    totalCategories,
    totalBrandsFeatured,
  } = await getHomeData();

  const seasonalHero =
    activeSeason === "black-friday" || activeSeason === "christmas" ? SEASONAL_HERO[activeSeason] : null;
  const showTrendDrop = Boolean(seasonalHero) && seasonHeroProducts.length > 0;

  const trustBar = (
    <div className="border-t border-white/10 bg-black/25">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:px-6">
        {trustBadges.map((badge) => (
          <div key={badge.label} className="flex items-center gap-3">
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-8 w-8 shrink-0 text-hero-foreground">
              {badge.icon}
            </svg>
            <span className="text-sm font-semibold text-hero-foreground">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-16 pb-16">
      {showTrendDrop && seasonalHero ? (
        <section className="relative overflow-hidden" style={{ background: seasonalHero.bg }}>
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-[0.9fr_1.1fr] md:py-24">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: seasonalHero.accent }}>
                {seasonalHero.eyebrow}
              </span>
              <h1
                className="max-w-xl font-heading text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl"
                style={{ color: seasonalHero.text }}
              >
                {seasonalHero.title}
              </h1>
              <p className="max-w-md text-base sm:text-lg" style={{ color: seasonalHero.sub }}>
                {seasonalHero.blurb}
              </p>
              <Link
                href={seasonalHero.href}
                className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-full px-7 py-3.5 text-base font-extrabold shadow-lg transition-transform duration-200 hover:-translate-y-0.5 sm:text-lg"
                style={{ background: seasonalHero.btnBg, color: seasonalHero.btnText }}
              >
                {seasonalHero.cta}
                <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
                  <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            {/* Trend-drop grid: 2×2 on desktop, horizontal snap-scroll on mobile. */}
            <div className="-mx-4 flex gap-4 overflow-x-auto px-4 pb-2 snap-x snap-mandatory sm:mx-0 sm:px-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:pb-0">
              {seasonHeroProducts.map((product) => {
                const priceText = fmtPrice(product.price, product.currency);
                return (
                  <Link
                    key={product.slug}
                    href={`/products/${product.slug}`}
                    className="group w-44 shrink-0 snap-start overflow-hidden rounded-2xl transition-transform duration-200 hover:-translate-y-1 md:w-auto"
                    style={{ background: seasonalHero.cardBg, border: `1px solid ${seasonalHero.cardBorder}` }}
                  >
                    <div className="relative aspect-square w-full overflow-hidden">
                      {product.image?.url ? (
                        <Image
                          src={product.image.url}
                          alt={product.image.alt || product.title}
                          fill
                          sizes="(min-width: 768px) 280px, 176px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          priority
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-xs" style={{ color: seasonalHero.sub }}>
                          No image yet
                        </div>
                      )}
                      {product.deal && (
                        <span
                          className="absolute left-2 top-2 rounded-full px-2.5 py-1 text-[11px] font-extrabold shadow"
                          style={{ background: seasonalHero.dealBg, color: seasonalHero.dealText }}
                        >
                          {product.deal}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col gap-1 p-3">
                      <span className="line-clamp-2 text-sm font-semibold" style={{ color: seasonalHero.text }}>
                        {product.title}
                      </span>
                      {priceText && (
                        <span className="text-sm font-bold" style={{ color: seasonalHero.accent }}>
                          {priceText}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {trustBar}
        </section>
      ) : (
        <section className="relative overflow-hidden bg-hero-bg">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 md:grid-cols-[1fr_1.15fr] md:py-32">
            <div className="flex flex-col gap-6">
              <span aria-hidden="true" className="h-1.5 w-16 rounded-full bg-accent" />
              <h1 className="max-w-xl font-heading text-5xl font-semibold leading-[1.05] text-hero-foreground sm:text-6xl lg:text-7xl">
                Get Trendy Finds
              </h1>
              <p className="max-w-lg text-lg text-hero-muted sm:text-xl">
                Trending gifts, lifestyle finds and decor picks — independently researched and curated. When you buy
                through our links, we may earn an affiliate commission, at no extra cost to you and never in exchange for
                a positive placement.
              </p>
              <Link
                href="#editors-picks"
                className="inline-flex min-h-11 w-fit cursor-pointer items-center gap-2 rounded-lg bg-accent px-7 py-4 text-base font-semibold text-accent-foreground shadow-[0_20px_45px_-15px_color-mix(in_oklab,var(--color-accent)_60%,transparent)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_25px_55px_-12px_color-mix(in_oklab,var(--color-accent)_70%,transparent)] sm:text-lg"
              >
                See our picks
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
          {trustBar}
        </section>
      )}

      {labelledProducts.length > 0 && (
        <section id="editors-picks" className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
            <SectionHeading className="text-3xl">Editor&apos;s picks</SectionHeading>
            <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
              Our top recommendations, chosen from everything we feature.
            </p>
            <div className="mt-6">
              <QuickAnswerTable products={labelledProducts} />
            </div>
          </div>
        </section>
      )}

      {(totalReviewed > 0 || totalCategories > 0 || totalBrandsFeatured > 0) && (
        <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-surface p-6 sm:grid-cols-3 sm:p-8">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalReviewed}</span>
              <span className="text-sm text-muted-foreground">Products featured</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalCategories}</span>
              <span className="text-sm text-muted-foreground">Active categories</span>
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="font-heading text-3xl font-semibold text-accent">{totalBrandsFeatured}</span>
              <span className="text-sm text-muted-foreground">Brands featured</span>
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

      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <NewsletterSignup season={activeSeason} source="home" />
      </section>

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
