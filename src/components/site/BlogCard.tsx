import Image from "next/image";
import Link from "next/link";

import { formatDate } from "@/lib/formatDate";
import type { BlogPost, Media } from "@/payload-types";

export function BlogCard({ post }: { post: BlogPost }) {
  const image = post.coverImage && typeof post.coverImage !== "number" ? (post.coverImage as Media) : undefined;

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || post.title}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h3 className="font-heading text-lg font-semibold leading-snug text-foreground">{post.title}</h3>
        {post.excerpt && <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>}
        <div className="mt-1 flex items-center justify-between gap-2">
          {post.publishedAt ? (
            <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
          ) : (
            <span />
          )}
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent">
            Read post
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
