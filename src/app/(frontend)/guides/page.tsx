import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { getPayloadClient } from "@/lib/payload";
import { resolveSeo } from "@/lib/seo/metadata";

// No dynamic segment on this route, so Next.js would try to prerender it at build
// time by default (needs a live Postgres). force-dynamic keeps the build
// DB-independent; switch to `revalidate = 1800` once Postgres is available at build time.
export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: { metaDescription: "Every buying guide, in one place — independently researched and tested." },
    fallbackTitle: "Buying Guides",
    path: "/guides",
  });

export default async function GuidesIndexPage() {
  const payload = await getPayloadClient();
  const guides = await payload.find({
    collection: "buying-guides",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 0,
    limit: 50,
  });

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">Buying Guides</h1>

      {guides.docs.length > 0 ? (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {guides.docs.map((guide) => (
            <li key={guide.id}>
              <Link
                href={`/guides/${guide.slug}`}
                className="block cursor-pointer rounded-lg border border-border bg-surface p-5 font-heading text-lg font-semibold text-foreground transition-shadow duration-200 hover:shadow-lg"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No buying guides published yet.</p>
      )}
    </div>
  );
}
