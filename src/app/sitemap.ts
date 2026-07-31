import type { MetadataRoute } from "next";

import { getPayloadClient } from "@/lib/payload";
import { getSiteUrl } from "@/lib/seo/shared";

export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = getSiteUrl();
  const payload = await getPayloadClient();

  const [products, categories, occasions, blogPosts] = await Promise.all([
    payload.find({ collection: "products", where: { _status: { equals: "published" } }, limit: 1000, depth: 0 }),
    payload.find({ collection: "categories", limit: 200, depth: 0 }),
    payload.find({ collection: "occasions", limit: 200, depth: 0 }),
    payload.find({ collection: "blog-posts", where: { _status: { equals: "published" } }, limit: 1000, depth: 0 }),
  ]);

  const categoriesWithProductCounts = await Promise.all(
    categories.docs.map(async (category) => {
      const result = await payload.find({
        collection: "products",
        where: { and: [{ categories: { equals: category.id } }, { _status: { equals: "published" } }] },
        limit: 0,
      });
      return { category, productCount: result.totalDocs };
    }),
  );

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "daily", priority: 1 },
    { url: `${siteUrl}/about`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/blog`, changeFrequency: "daily", priority: 0.7 },
    { url: `${siteUrl}/coupons`, changeFrequency: "daily", priority: 0.7 },
  ];

  const productRoutes: MetadataRoute.Sitemap = products.docs.map((product) => ({
    url: `${siteUrl}/products/${product.slug}`,
    lastModified: product.updatedAt,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const categoryRoutes: MetadataRoute.Sitemap = categoriesWithProductCounts.flatMap(({ category, productCount }) => {
    const routes: MetadataRoute.Sitemap = [
      { url: `${siteUrl}/categories/${category.slug}`, changeFrequency: "weekly", priority: 0.6 },
    ];
    if (productCount > 1) {
      routes.push({ url: `${siteUrl}/compare/${category.slug}`, changeFrequency: "weekly", priority: 0.5 });
    }
    return routes;
  });

  const occasionRoutes: MetadataRoute.Sitemap = occasions.docs.map((occasion) => ({
    url: `${siteUrl}/${occasion.slug}`,
    changeFrequency: "weekly",
    priority: 0.5,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.docs.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes, ...categoryRoutes, ...occasionRoutes, ...blogRoutes];
}
