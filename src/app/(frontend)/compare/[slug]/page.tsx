import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { RatingBadge } from "@/components/site/RatingBadge";
import { formatPrice } from "@/lib/formatPrice";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";
import { getSiteUrl, absoluteUrl } from "@/lib/seo/shared";
import type { Media } from "@/payload-types";

export const revalidate = 1800;

type Params = { slug: string };

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

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) return {};

  return resolveSeo({
    seo: { metaDescription: `Side-by-side comparison of every ${category.title} product we've reviewed — price, rating, and pros/cons at a glance.` },
    fallbackTitle: `Compare ${category.title}`,
    path: `/compare/${category.slug}`,
  });
}

export default async function ComparePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const payload = await getPayloadClient();
  const products = await payload.find({
    collection: "products",
    where: { and: [{ categories: { equals: category.id } }, { _status: { equals: "published" } }] },
    sort: "title",
    depth: 1,
    limit: 50,
  });

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: category.title, path: `/categories/${category.slug}` },
    { name: "Compare", path: `/compare/${category.slug}` },
  ];

  const siteUrl = getSiteUrl();

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {products.docs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: products.docs.map((product, index) => ({
              "@type": "ListItem",
              position: index + 1,
              url: absoluteUrl(`/products/${product.slug}`, siteUrl),
              name: product.title,
            })),
          }}
        />
      )}

      <Breadcrumbs items={breadcrumbs} />

      <div>
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">Compare {category.title}</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          {`Side-by-side comparison of every ${category.title} product we've reviewed — price, rating, and pros/cons at a glance.`}
        </p>
      </div>

      {products.docs.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Pros</th>
                <th className="p-3">Cons</th>
                <th className="p-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {products.docs.map((product) => {
                const image =
                  product.gallery?.[0]?.image && typeof product.gallery[0].image !== "number"
                    ? (product.gallery[0].image as Media)
                    : undefined;
                const priceLink = product.retailerLinks?.find((link) => typeof link.price === "number");
                const overall = product.ratings?.overall;
                const firstPro = product.pros?.[0]?.point;
                const firstCon = product.cons?.[0]?.point;

                return (
                  <tr key={product.id} className="align-top transition-colors duration-200 hover:bg-muted/50">
                    <td className="p-3">
                      <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
                          {image?.url ? (
                            <Image src={image.url} alt={image.alt || product.title} fill sizes="56px" className="object-cover" />
                          ) : null}
                        </div>
                        <Link
                          href={`/products/${product.slug}`}
                          className="cursor-pointer font-medium text-foreground hover:text-accent"
                        >
                          {product.title}
                        </Link>
                      </div>
                    </td>
                    <td className="p-3 whitespace-nowrap font-medium text-foreground">
                      {priceLink && typeof priceLink.price === "number" ? formatPrice(priceLink.price, priceLink.currency) : "—"}
                    </td>
                    <td className="p-3 whitespace-nowrap">
                      {typeof overall === "number" ? <RatingBadge score={overall} /> : <span className="text-muted-foreground">—</span>}
                    </td>
                    <td className="max-w-[220px] p-3 text-muted-foreground">{firstPro ?? "—"}</td>
                    <td className="max-w-[220px] p-3 text-muted-foreground">{firstCon ?? "—"}</td>
                    <td className="p-3">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex min-h-9 cursor-pointer items-center whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                      >
                        Read review
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted-foreground">No products in this category yet to compare.</p>
      )}
    </div>
  );
}
