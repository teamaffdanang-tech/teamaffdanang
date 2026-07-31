import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AffiliateDisclosure } from "@/components/site/AffiliateDisclosure";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { Prose } from "@/components/site/Prose";
import { formatDate } from "@/lib/formatDate";
import { getPayloadClient } from "@/lib/payload";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";
import type { Author, Category, Media, Occasion, Product } from "@/payload-types";

export const revalidate = 3600;

type Params = { slug: string };

const getPost = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "blog-posts",
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
    limit: 1,
    depth: 2,
  });
  return result.docs[0];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  return resolveSeo({
    seo: {
      ...post.seo,
      metaDescription: post.seo?.metaDescription || post.excerpt || undefined,
      metaImage: post.seo?.metaImage ?? post.coverImage,
    },
    fallbackTitle: post.title,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const author = post.author && typeof post.author !== "number" ? (post.author as Author) : undefined;
  const category = post.category && typeof post.category !== "number" ? (post.category as Category) : undefined;
  const occasion = post.occasion && typeof post.occasion !== "number" ? (post.occasion as Occasion) : undefined;
  const coverImage = post.coverImage && typeof post.coverImage !== "number" ? (post.coverImage as Media) : undefined;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-10 sm:px-6">
      <JsonLd data={articleJsonLd(post, `/blog/${post.slug}`)} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      )}

      <Breadcrumbs items={breadcrumbs} />

      {coverImage?.url && (
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
          <Image src={coverImage.url} alt={coverImage.alt || post.title} fill sizes="768px" className="object-cover" priority />
        </div>
      )}

      <header className="flex flex-col gap-3">
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{post.title}</h1>
        {(category || occasion) && (
          <div className="flex flex-wrap gap-2">
            {category && (
              <Link
                href={`/categories/${category.slug}`}
                className="cursor-pointer rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors duration-200 hover:text-accent"
              >
                {category.title}
              </Link>
            )}
            {occasion && (
              <Link
                href={`/${occasion.slug}`}
                className="cursor-pointer rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors duration-200 hover:text-accent"
              >
                {occasion.title}
              </Link>
            )}
          </div>
        )}
        {author && <p className="text-sm text-muted-foreground">By {author.name}</p>}
        <p className="text-xs text-muted-foreground">Last updated {formatDate(post.updatedAt)}</p>
      </header>

      <Prose data={post.intro} />

      <AffiliateDisclosure />

      {post.methodology && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">How we picked</h2>
          <Prose data={post.methodology} className="mt-4" />
        </section>
      )}

      {post.picks && post.picks.length > 0 && (
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Our picks</h2>
          {post.picks.map((pick) => {
            const product = typeof pick.product !== "number" ? (pick.product as Product) : undefined;
            if (!product) return null;
            const image =
              product.gallery?.[0]?.image && typeof product.gallery[0].image !== "number"
                ? (product.gallery[0].image as Media)
                : undefined;

            return (
              <article key={pick.id} className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row">
                {image?.url && (
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg bg-muted sm:w-48">
                    <Image src={image.url} alt={image.alt} fill sizes="192px" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-1 flex-col gap-2">
                  {pick.pickLabel && (
                    <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
                      {pick.pickLabel}
                    </span>
                  )}
                  <Link
                    href={`/products/${product.slug}`}
                    className="cursor-pointer font-heading text-xl font-semibold text-foreground hover:text-accent"
                  >
                    {product.title}
                  </Link>
                  <Prose data={pick.blurb} />
                </div>
              </article>
            );
          })}
        </section>
      )}

      {post.verdict && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">The verdict</h2>
          <Prose data={post.verdict} className="mt-4" />
        </section>
      )}

      {post.faqs && post.faqs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">FAQs</h2>
          <div className="mt-4 flex flex-col gap-4">
            {post.faqs.map((faq) => (
              <div key={faq.id}>
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
