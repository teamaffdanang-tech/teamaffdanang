import Image from "next/image";
import Link from "next/link";

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

export function ProductCard({ product }: { product: Product }) {
  const image = firstImage(product);
  const overall = product.ratings?.overall;
  const badgeLabel = product.bestPickLabel && product.bestPickLabel !== "none" ? bestPickLabels[product.bestPickLabel] : undefined;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
        {badgeLabel && (
          <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-white">
            {badgeLabel}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{product.title}</h3>
          {typeof overall === "number" && <RatingBadge score={overall} />}
        </div>
        {product.excerpt && <p className="line-clamp-2 text-sm text-muted-foreground">{product.excerpt}</p>}
      </div>
    </Link>
  );
}
