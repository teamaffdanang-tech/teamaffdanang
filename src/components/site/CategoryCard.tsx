import Image from "next/image";
import Link from "next/link";

import type { Media } from "@/payload-types";

export function CategoryCard({
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
  return (
    <Link
      href={`/categories/${slug}`}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-shadow duration-200 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || title}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{title}</h3>
          <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold text-muted-foreground">
            {productCount} {productCount === 1 ? "product" : "products"}
          </span>
        </div>
        {description && <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>}
      </div>
    </Link>
  );
}
