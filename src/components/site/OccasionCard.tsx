import Image from "next/image";
import Link from "next/link";

import type { Media } from "@/payload-types";

const NEW_OCCASION_THRESHOLD = 5;

export function OccasionCard({
  slug,
  title,
  description,
  productCount,
  image,
}: {
  slug: string;
  title: string;
  description?: string | null;
  productCount: number;
  image?: Media;
}) {
  const isComingSoon = productCount === 0;
  const isNew = productCount > 0 && productCount < NEW_OCCASION_THRESHOLD;

  return (
    <Link
      href={`/${slug}`}
      className={`group block overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 ${
        isComingSoon
          ? "cursor-default opacity-70"
          : "cursor-pointer hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
      }`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className={`object-cover transition-transform duration-300 ${!isComingSoon ? "group-hover:scale-105" : ""}`}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
        {isNew && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            New
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{title}</h3>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${
              isComingSoon ? "bg-accent/15 text-accent" : "bg-muted text-muted-foreground"
            }`}
          >
            {isComingSoon ? "Coming soon" : `${productCount} ${productCount === 1 ? "product" : "products"}`}
          </span>
        </div>
        {description && <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>}
        {!isComingSoon && (
          <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Shop this occasion
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        )}
      </div>
    </Link>
  );
}
