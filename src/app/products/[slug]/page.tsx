import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { JsonLd } from "@/components/site/JsonLd";
import { ProductCard } from "@/components/site/ProductCard";
import { Prose } from "@/components/site/Prose";
import { RatingBadge } from "@/components/site/RatingBadge";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";
import { getRelatedProducts } from "@/lib/seo/relatedProducts";
import type { Brand, Category, Media, Retailer } from "@/payload-types";

export const dynamic = "force-dynamic";

type Params = { slug: string };

const getProduct = async (slug: string) => {
  const payload = await getPayloadClient();
  const result = await payload.find({
    collection: "products",
    where: { and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }] },
    limit: 1,
    depth: 2,
  });
  return result.docs[0];
};

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) return {};

  return resolveSeo({ seo: product.seo, fallbackTitle: product.title, path: `/products/${product.slug}` });
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product) notFound();

  const payload = await getPayloadClient();
  const relatedProducts = await getRelatedProducts(payload, product, 4);

  const brand = product.brand && typeof product.brand !== "number" ? (product.brand as Brand) : undefined;
  const overall = product.ratings?.overall;
  const primaryCategory =
    product.categories?.[0] && typeof product.categories[0] !== "number" ? (product.categories[0] as Category) : undefined;

  const breadcrumbs = [
    { name: "Home", path: "/" },
    ...(primaryCategory ? [{ name: primaryCategory.title, path: `/categories/${primaryCategory.slug}` }] : []),
    { name: product.title, path: `/products/${product.slug}` },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10 sm:px-6">
      <JsonLd data={productJsonLd(product, `/products/${product.slug}`)} />
      {product.faqs && product.faqs.length > 0 && <JsonLd data={faqJsonLd(product)} />}
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <Breadcrumbs items={breadcrumbs} />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductGallery gallery={product.gallery} title={product.title} />

        <div className="flex flex-col gap-4">
          {brand && <p className="text-sm font-medium text-muted-foreground">{brand.name}</p>}
          <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">{product.title}</h1>
          <div className="flex items-center gap-3">
            {typeof overall === "number" && <RatingBadge score={overall} />}
            {product.bestPickLabel && product.bestPickLabel !== "none" && (
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
                {bestPickLabels[product.bestPickLabel]}
              </span>
            )}
          </div>
          {product.excerpt && <p className="text-lg text-muted-foreground">{product.excerpt}</p>}

          {product.retailerLinks && product.retailerLinks.length > 0 && (
            <div className="mt-2 flex flex-col gap-2">
              {product.retailerLinks.map((link) => {
                const retailer = typeof link.retailer !== "number" ? (link.retailer as Retailer) : undefined;
                return (
                  <a
                    key={link.id}
                    href={link.affiliateUrl}
                    target="_blank"
                    rel="nofollow sponsored noopener noreferrer"
                    className="flex cursor-pointer items-center justify-between rounded-lg bg-primary px-5 py-3 font-semibold text-on-primary transition-opacity duration-200 hover:opacity-90"
                  >
                    <span>Buy at {retailer?.name ?? "Retailer"}</span>
                    {typeof link.price === "number" && <span>${link.price.toFixed(2)}</span>}
                  </a>
                );
              })}
            </div>
          )}

          {product.officialUrl && (
            <a
              href={product.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-sm text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              Official product page
            </a>
          )}
        </div>
      </div>

      {product.description && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Overview</h2>
          <Prose data={product.description} className="mt-4" />
        </section>
      )}

      {(product.pros?.length || product.cons?.length) ? (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {product.pros && product.pros.length > 0 && (
            <div className="rounded-lg border border-border bg-surface p-5">
              <h2 className="font-heading text-lg font-semibold text-foreground">Pros</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground">
                {product.pros.map((pro) => (
                  <li key={pro.id} className="flex gap-2">
                    <span aria-hidden="true" className="text-accent">
                      +
                    </span>
                    {pro.point}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {product.cons && product.cons.length > 0 && (
            <div className="rounded-lg border border-border bg-surface p-5">
              <h2 className="font-heading text-lg font-semibold text-foreground">Cons</h2>
              <ul className="mt-3 flex flex-col gap-2 text-sm text-foreground">
                {product.cons.map((con) => (
                  <li key={con.id} className="flex gap-2">
                    <span aria-hidden="true" className="text-destructive">
                      −
                    </span>
                    {con.point}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      ) : null}

      {product.specifications && product.specifications.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Specifications</h2>
          <dl className="mt-4 divide-y divide-border rounded-lg border border-border bg-surface">
            {product.specifications.map((spec) => (
              <div key={spec.id} className="flex justify-between gap-4 px-5 py-3 text-sm">
                <dt className="font-medium text-muted-foreground">{spec.label}</dt>
                <dd className="text-right text-foreground">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      {product.testingNotes && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">How we tested</h2>
          <Prose data={product.testingNotes} className="mt-4" />
        </section>
      )}

      {product.faqs && product.faqs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">FAQs</h2>
          <div className="mt-4 flex flex-col gap-4">
            {product.faqs.map((faq) => (
              <div key={faq.id}>
                <h3 className="font-medium text-foreground">{faq.question}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {relatedProducts.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">You might also like</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProducts.map((related) => (
              <ProductCard key={related.id} product={related} />
            ))}
          </div>
        </section>
      )}

      {product.buyingGuides?.docs && product.buyingGuides.docs.length > 0 && (
        <section>
          <h2 className="font-heading text-2xl font-semibold text-foreground">Featured in</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {product.buyingGuides.docs.map((guide) =>
              typeof guide !== "number" ? (
                <li key={guide.id}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="cursor-pointer font-medium text-accent underline underline-offset-2"
                  >
                    {guide.title}
                  </Link>
                </li>
              ) : null,
            )}
          </ul>
        </section>
      )}
    </div>
  );
}

const bestPickLabels: Record<string, string> = {
  "best-overall": "Best Overall",
  "best-budget": "Best Budget",
  "best-upgrade": "Best Upgrade",
  "best-for-beginners": "Best for Beginners",
};

function ProductGallery({
  gallery,
  title,
}: {
  gallery: { image: number | Media; caption?: string | null; id?: string | null }[] | null | undefined;
  title: string;
}) {
  const first = gallery?.[0]?.image;
  const image = first && typeof first !== "number" ? first : undefined;

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-xl border border-border bg-muted">
      {image?.url ? (
        <Image src={image.url} alt={image.alt || title} fill sizes="(min-width: 768px) 480px, 100vw" className="object-cover" priority />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
          No image yet
        </div>
      )}
    </div>
  );
}
