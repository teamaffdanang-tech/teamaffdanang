import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { ProductCard } from "@/components/site/ProductCard";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";

export const dynamic = "force-dynamic";

type Params = { occasion: string };

const getOccasion = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "occasions",
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 0,
  });
  return result.docs[0];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { occasion: slug } = await params;
  const occasion = await getOccasion(slug);
  if (!occasion) return {};

  return resolveSeo({
    seo: { metaDescription: occasion.description },
    fallbackTitle: `${occasion.title} Gift Guides`,
    path: `/${occasion.slug}`,
  });
}

export default async function OccasionPage({ params }: { params: Promise<Params> }) {
  const { occasion: slug } = await params;
  const occasion = await getOccasion(slug);
  if (!occasion) notFound();

  const payload = await getPayloadClient();
  const [products, guides] = await Promise.all([
    payload.find({
      collection: "products",
      where: { and: [{ occasions: { equals: occasion.id } }, { _status: { equals: "published" } }] },
      depth: 1,
      limit: 24,
    }),
    payload.find({
      collection: "buying-guides",
      where: { and: [{ occasion: { equals: occasion.id } }, { _status: { equals: "published" } }] },
      depth: 0,
      limit: 12,
    }),
  ]);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: occasion.title, path: `/${occasion.slug}` },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <Breadcrumbs items={breadcrumbs} />

      <div>
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{occasion.title} Gift Guides</h1>
        {occasion.description && <p className="mt-2 max-w-2xl text-muted-foreground">{occasion.description}</p>}
      </div>

      {guides.docs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Buying guides</h2>
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

      <section>
        <h2 className="font-heading text-2xl font-semibold text-foreground">All picks</h2>
        {products.docs.length > 0 ? (
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.docs.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="mt-4 text-muted-foreground">No products for this occasion yet.</p>
        )}
      </section>
    </div>
  );
}
