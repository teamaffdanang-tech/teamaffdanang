"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { buildAffiliateUrl } from "@/lib/affiliateUrl";
import { discountLabel } from "@/lib/coupons";
import { formatDate } from "@/lib/formatDate";
import type { Coupon, Media, Product, Retailer } from "@/payload-types";

export function CouponCard({ coupon }: { coupon: Coupon }) {
  const [copied, setCopied] = useState(false);

  const product = coupon.linkedProduct && typeof coupon.linkedProduct !== "number" ? (coupon.linkedProduct as Product) : undefined;
  if (!product) return null;

  const image =
    product.gallery?.[0]?.image && typeof product.gallery[0].image !== "number"
      ? (product.gallery[0].image as Media)
      : undefined;
  const retailerLink = product.retailerLinks?.[0];
  const retailer = retailerLink?.retailer as Retailer | number | null | undefined;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coupon.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — the code is still visible to copy by hand.
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg">
      <Link
        href={`/products/${product.slug}`}
        className="group relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-muted"
      >
        {image?.url ? (
          <Image
            src={image.url}
            alt={image.alt || product.title}
            fill
            sizes="(min-width: 768px) 320px, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
            No image yet
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground">
          {discountLabel(coupon)}
        </span>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <Link
          href={`/products/${product.slug}`}
          className="cursor-pointer font-heading text-lg font-semibold leading-snug text-foreground hover:text-accent"
        >
          {product.title}
        </Link>

        <button
          type="button"
          onClick={handleCopy}
          className="flex min-h-11 cursor-pointer items-center justify-between rounded-lg border border-dashed border-border bg-muted px-3 py-2 text-left transition-colors duration-200 hover:border-accent"
        >
          <span className="font-mono text-sm font-semibold text-foreground">{coupon.code}</span>
          <span className="text-xs font-semibold text-accent">{copied ? "Copied!" : "Copy code"}</span>
        </button>

        {coupon.termsNote && <p className="text-xs text-muted-foreground">{coupon.termsNote}</p>}
        {coupon.expiresAt && <p className="text-xs text-muted-foreground">Expires {formatDate(coupon.expiresAt)}</p>}

        {retailerLink ? (
          <a
            href={buildAffiliateUrl(retailerLink.affiliateUrl, retailer)}
            target="_blank"
            rel="sponsored nofollow noopener noreferrer"
            className="mt-auto inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Get this deal
          </a>
        ) : (
          <Link
            href={`/products/${product.slug}`}
            className="mt-auto inline-flex min-h-11 cursor-pointer items-center justify-center rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            Get this deal
          </Link>
        )}
      </div>
    </div>
  );
}
