import type { Metadata } from "next";
import type { PaginatedDocs, Where } from "payload";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Pagination } from "@/components/site/Pagination";
import { ProductCard } from "@/components/site/ProductCard";
import { SearchBox } from "@/components/site/SearchBox";
import { couponAppliesToProduct, getActiveCoupons } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";
import { buildSearchVariants } from "@/lib/search";
import { resolveSeo } from "@/lib/seo/metadata";
import type { Product } from "@/payload-types";

// Search results are per-query and must never be indexed.
export const dynamic = "force-dynamic";

const PAGE_SIZE = 24;

type SearchParams = { q?: string; page?: string };

const parsePage = (raw: string | undefined): number => {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
};

const parseQuery = (raw: string | undefined): string => (raw ?? "").trim().slice(0, 100);

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { q } = await searchParams;
  const query = parseQuery(q);
  return resolveSeo({
    seo: {
      metaDescription: query
        ? `Products matching "${query}" on Get Trendy Finds.`
        : "Search tested and reviewed products on Get Trendy Finds.",
      noIndex: true,
    },
    fallbackTitle: query ? `Search: ${query}` : "Search",
    path: "/search",
  });
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q, page: rawPage } = await searchParams;
  const query = parseQuery(q);
  const page = parsePage(rawPage);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Search", path: "/search" },
  ];

  let products: PaginatedDocs<Product> | null = null;
  let couponedProductIds = new Set<number>();

  if (query) {
    const payload = await getPayloadClient();
    // Expand the query into equivalent spelling forms (spaced / compact / hyphen
    // + known compound groups) so "dash cam" and "dashcam" return the same set.
    const variants = buildSearchVariants(query);
    const orConditions: Where[] = variants.flatMap((v): Where[] => [
      { title: { like: v } },
      { "brand.name": { like: v } },
      { "categories.title": { like: v } },
    ]);
    products = await payload.find({
      collection: "products",
      where: {
        and: [{ _status: { equals: "published" } }, { or: orConditions }],
      },
      depth: 1,
      limit: PAGE_SIZE,
      page,
    });

    const activeCoupons = await getActiveCoupons(payload, { limit: 100 });
    couponedProductIds = new Set(
      (products.docs as Product[])
        .filter((p) => activeCoupons.some((coupon) => couponAppliesToProduct(coupon, p)))
        .map((p) => p.id),
    );
  }

  const total = products?.totalDocs ?? 0;

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />

      <div>
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          {query ? <>Results for &ldquo;{query}&rdquo;</> : "Search products"}
        </h1>
        {query && (
          <p className="mt-2 text-muted-foreground">
            {total} {total === 1 ? "product" : "products"} found
          </p>
        )}
        <SearchBox defaultValue={query} autoFocus={!query} className="mt-4 max-w-md" />
      </div>

      {!query ? (
        <p className="text-muted-foreground">
          Enter a product, brand or category above to search everything we&rsquo;ve tested.
        </p>
      ) : products && products.docs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {(products.docs as Product[]).map((product) => (
              <ProductCard key={product.id} product={product} hasCoupon={couponedProductIds.has(product.id)} />
            ))}
          </div>
          <Pagination
            currentPage={products.page ?? 1}
            totalPages={products.totalPages}
            hasNextPage={products.hasNextPage}
            hasPrevPage={products.hasPrevPage}
            basePath={`/search?q=${encodeURIComponent(query)}`}
          />
        </>
      ) : (
        <p className="text-muted-foreground">
          No products match &ldquo;{query}&rdquo;. Try a broader term, a brand name, or a category.
        </p>
      )}
    </div>
  );
}
