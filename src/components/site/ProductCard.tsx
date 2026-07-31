import Image from "next/image";
import Link from "next/link";

import { formatPrice } from "@/lib/formatPrice";
import type { Media, Product } from "@/payload-types";
import { RatingBadge } from "./RatingBadge";

const bestPickLabels: Record<string, string> = {
  "best-overall": "Best Overall",
  "best-budget": "Best Budget",
  "best-upgrade": "Best Upgrade",
  "best-for-beginners": "Best for Beginners",
};

const firstImage = (product: Pick<Product, "gallery">): Media | undefined => {
  const image = product.gallery?.[0]?.image;
  return image && typeof image !== "number" ? image : undefined;
};

const firstPrice = (product: Pick<Product, "retailerLinks">): { price: number; currency?: string | null } | undefined => {
  const link = product.retailerLinks?.find((l) => typeof l.price === "number");
  return link && typeof link.price === "number" ? { price: link.price, currency: link.currency } : undefined;
};

export function ProductCard({ product, hasCoupon }: { product: Product; hasCoupon?: boolean }) {
  const image = firstImage(product);
  const overall = product.ratings?.overall;
  const price = firstPrice(product);
  const badgeLabel = product.bestPickLabel && product.bestPickLabel !== "none" ? bestPickLabels[product.bestPickLabel] : undefined;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
        {badgeLabel && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
            {badgeLabel}
          </span>
        )}
        {hasCoupon && (
          <span className="absolute right-3 top-3 rounded-full bg-primary px-2.5 py-1 text-xs font-semibold text-on-primary">
            Coupon available
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{product.title}</h3>
          {typeof overall === "number" && <RatingBadge score={overall} />}
        </div>
        {product.excerpt && <p className="line-clamp-2 text-sm text-muted-foreground">{product.excerpt}</p>}

        <div className="mt-1 flex items-center justify-between gap-2">
          {price ? (
            <span className="font-heading text-base font-semibold text-foreground">
              {formatPrice(price.price, price.currency)}
            </span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Read review
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
            >
              <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
