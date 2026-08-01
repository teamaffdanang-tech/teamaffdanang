import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { Pagination } from "@/components/site/Pagination";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickAnswerTable } from "@/components/site/QuickAnswerTable";
import { getActiveCoupons } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";

export const revalidate = 1800;

const PAGE_SIZE = 24;

type Params = { slug: string };
type SearchParams = { page?: string };

const parsePage = (raw: string | undefined): number => {
  const parsed = Number(raw);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : 1;
};

const getCategory = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "categories",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  });
  return result.docs[0];
};

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { page: rawPage } = await searchParams;
  const category = await getCategory(slug);
  if (!category) return {};

  const page = parsePage(rawPage);
  return resolveSeo({
    seo: { metaDescription: category.description },
    fallbackTitle: category.title,
    path: page > 1 ? `/categories/${category.slug}?page=${page}` : `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<Params>;
  searchParams: Promise<SearchParams>;
}) {
  const { slug } = await params;
  const { page: rawPage } = await searchParams;
  const category = await getCategory(slug);
  if (!category) notFound();

  const page = parsePage(rawPage);

  const payload = await getPayloadClient();
  const [products, posts] = await Promise.all([
    payload.find({
      collection: "products",
      where: { and: [{ categories: { equals: category.id } }, { _status: { equals: "published" } }] },
      depth: 1,
      limit: PAGE_SIZE,
      page,
    }),
    payload.find({
      collection: "blog-posts",
      where: { and: [{ category: { equals: category.id } }, { _status: { equals: "published" } }] },
      depth: 0,
      limit: 12,
    }),
  ]);

  const activeCoupons = await getActiveCoupons(payload, { limit: 100 });
  const couponedProductIds = new Set(
    activeCoupons
      .map((coupon) => (typeof coupon.linkedProduct === "number" ? coupon.linkedProduct : coupon.linkedProduct?.id))
      .filter((id): id is number => typeof id === "number"),
  );

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: category.title, path: `/categories/${category.slug}` },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{category.title}</h1>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
            {products.totalDocs} {products.totalDocs === 1 ? "product" : "products"}
          </span>
        </div>
        {category.description && <p className="mt-2 max-w-2xl text-muted-foreground">{category.description}</p>}
        {products.totalDocs > 1 && (
          <Link
            href={`/compare/${category.slug}`}
            className="mt-3 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-accent"
          >
            Compare all {category.title} products
            <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        )}
      </div>

      <QuickAnswerTable products={products.docs} />

      {posts.docs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Related posts</h2>
          <ul className="mt-4 flex flex-col divide-y divide-border rounded-lg border border-border bg-surface">
            {posts.docs.map((post) => (
              <li key={post.id}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block cursor-pointer px-5 py-4 font-medium text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {products.docs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.docs.map((product) => (
            <ProductCard key={product.id} product={product} hasCoupon={couponedProductIds.has(product.id)} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No products in this category yet.</p>
      )}

      <Pagination
        currentPage={products.page ?? 1}
        totalPages={products.totalPages}
        hasNextPage={products.hasNextPage}
        hasPrevPage={products.hasPrevPage}
        basePath={`/categories/${category.slug}`}
      />
    </div>
  );
}
