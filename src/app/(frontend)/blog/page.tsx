import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { BlogCard } from "@/components/site/BlogCard";
import { getPayloadClient } from "@/lib/payload";
import { resolveSeo } from "@/lib/seo/metadata";

// No dynamic segment on this route, so Next.js would try to prerender it at build
// time by default (needs a live Postgres). force-dynamic keeps the build
// DB-independent; switch to `revalidate = 1800` once Postgres is available at build time.
export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: { metaDescription: "Every blog post, in one place — independently researched and tested." },
    fallbackTitle: "Blog",
    path: "/blog",
  });

export default async function BlogIndexPage() {
  const payload = await getPayloadClient();
  const posts = await payload.find({
    collection: "blog-posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    depth: 1,
    limit: 50,
  });

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">Blog</h1>

      {posts.docs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {posts.docs.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No blog posts published yet.</p>
      )}
    </div>
  );
}
