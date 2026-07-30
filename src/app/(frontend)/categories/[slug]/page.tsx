import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickAnswerTable } from "@/components/site/QuickAnswerTable";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";

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
    seo: { metaDescription: category.description },
    fallbackTitle: category.title,
    path: `/categories/${category.slug}`,
  });
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const category = await getCategory(slug);
  if (!category) notFound();

  const payload = await getPayloadClient();
  const [products, guides] = await Promise.all([
    payload.find({
      collection: "products",
      where: { and: [{ categories: { equals: category.id } }, { _status: { equals: "published" } }] },
      depth: 1,
      limit: 24,
    }),
    payload.find({
      collection: "buying-guides",
      where: { and: [{ category: { equals: category.id } }, { _status: { equals: "published" } }] },
      depth: 0,
      limit: 12,
    }),
  ]);

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
      </div>

      <QuickAnswerTable products={products.docs} />

      {guides.docs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Related guides</h2>
          <ul className="mt-4 flex flex-col divide-y divide-border rounded-lg border border-border bg-surface">
            {guides.docs.map((guide) => (
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

      {products.docs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.docs.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No products in this category yet.</p>
      )}
    </div>
  );
}
