import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { GuideCard } from "@/components/site/GuideCard";
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
    depth: 1,
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guides.docs.map((guide) => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No buying guides published yet.</p>
      )}
    </div>
  );
}
