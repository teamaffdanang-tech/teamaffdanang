import Link from "next/link";

import { ProductCard } from "@/components/site/ProductCard";
import { getPayloadClient } from "@/lib/payload";

export const dynamic = "force-dynamic";

const getHomeData = async () => {
  const payload = await getPayloadClient();

  const [occasions, featuredProducts, guides] = await Promise.all([
    payload.find({ collection: "occasions", limit: 6, sort: "startMonth", depth: 1 }),
    payload.find({
      collection: "products",
      where: { and: [{ isFeatured: { equals: true } }, { _status: { equals: "published" } }] },
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

  return { occasions: occasions.docs, featuredProducts: featuredProducts.docs, guides: guides.docs };
};

export default async function HomePage() {
  const { occasions, featuredProducts, guides } = await getHomeData();

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="max-w-2xl font-heading text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Independent, tested gift guides for every occasion
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            We test and compare real products so you don&apos;t have to. No sponsored picks — just what we&apos;d
            buy for our own families.
          </p>
        </div>
      </section>

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
