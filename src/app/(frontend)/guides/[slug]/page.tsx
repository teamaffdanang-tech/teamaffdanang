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
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";
import type { Author, Media, Product } from "@/payload-types";

export const revalidate = 3600;

type Params = { slug: string };

const getGuide = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "buying-guides",
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
    limit: 1,
    depth: 2,
  });
  return result.docs[0];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) return {};

  return resolveSeo({ seo: guide.seo, fallbackTitle: guide.title, path: `/guides/${guide.slug}` });
}

export default async function BuyingGuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const guide = await getGuide(slug);
  if (!guide) notFound();

  const author = guide.author && typeof guide.author !== "number" ? (guide.author as Author) : undefined;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Guides", path: "/guides" },
    { name: guide.title, path: `/guides/${guide.slug}` },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {guide.faqs && guide.faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }}
        />
      )}

      <Breadcrumbs items={breadcrumbs} />

      <header className="flex flex-col gap-3">
        <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{guide.title}</h1>
        {author && <p className="text-sm text-muted-foreground">By {author.name}</p>}
        <p className="text-xs text-muted-foreground">Last updated {formatDate(guide.updatedAt)}</p>
      </header>

      <Prose data={guide.intro} />

      <AffiliateDisclosure />

      {guide.methodology && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">How we picked</h2>
          <Prose data={guide.methodology} className="mt-4" />
        </section>
      )}

      {guide.picks && guide.picks.length > 0 && (
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Our picks</h2>
          {guide.picks.map((pick) => {
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
                    <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-white">
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

      {guide.verdict && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">The verdict</h2>
          <Prose data={guide.verdict} className="mt-4" />
        </section>
      )}

      {guide.faqs && guide.faqs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">FAQs</h2>
          <div className="mt-4 flex flex-col gap-4">
            {guide.faqs.map((faq) => (
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
