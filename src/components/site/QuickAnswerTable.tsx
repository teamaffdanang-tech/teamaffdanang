import Image from "next/image";
import Link from "next/link";

import type { Media, Product } from "@/payload-types";

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

/**
 * Quick-answer summary of labelled picks, shown above the full product grid.
 * Purely navigational — no Buy button or affiliate link, so the conversion
 * path stays Hub -> Money Page -> Affiliate CTA. Renders nothing when no
 * product in the given list has a bestPickLabel set.
 */
export function QuickAnswerTable({ products }: { products: Product[] }) {
  const labelled = products.filter((product) => product.bestPickLabel && product.bestPickLabel !== "none");

  if (labelled.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {labelled.map((product) => {
        const image = firstImage(product);
        return (
          <Link
            key={product.id}
            href={`/products/${product.slug}`}
            className="group flex cursor-pointer flex-col gap-3 rounded-xl border border-border bg-surface p-4 shadow-sm transition-shadow duration-200 hover:shadow-lg"
          >
            <span className="w-fit rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
              {bestPickLabels[product.bestPickLabel as string]}
            </span>

            <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
              {image?.url ? (
                <Image
                  src={image.url}
                  alt={image.alt || product.title}
                  fill
                  sizes="(min-width: 768px) 240px, 100vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  No image yet
                </div>
              )}
            </div>

            <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{product.title}</h3>
            {product.excerpt && <p className="line-clamp-2 text-sm text-muted-foreground">{product.excerpt}</p>}

            <span className="mt-auto cursor-pointer text-sm font-semibold text-accent underline underline-offset-2">
              Read Review
            </span>
          </Link>
        );
      })}
    </div>
  );
}
