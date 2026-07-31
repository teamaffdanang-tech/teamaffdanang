import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { CouponCard } from "@/components/site/CouponCard";
import { JsonLd } from "@/components/site/JsonLd";
import { getActiveCoupons } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";
import { breadcrumbJsonLd, couponJsonLd } from "@/lib/seo/jsonld";
import { resolveSeo } from "@/lib/seo/metadata";
import type { Product } from "@/payload-types";

// No dynamic segment on this route, so Next.js would try to prerender it at build
// time by default (needs a live Postgres). force-dynamic keeps the build
// DB-independent, and also keeps the expiry filter always current.
export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: { metaDescription: "Every active coupon code for products we've reviewed, in one place." },
    fallbackTitle: "Coupons",
    path: "/coupons",
  });

export default async function CouponsPage() {
  const payload = await getPayloadClient();
  const coupons = await getActiveCoupons(payload);

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Coupons", path: "/coupons" },
  ];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6">
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      {coupons.map((coupon) => {
        const product = coupon.linkedProduct && typeof coupon.linkedProduct !== "number" ? (coupon.linkedProduct as Product) : undefined;
        return product ? <JsonLd key={coupon.id} data={couponJsonLd(coupon, product)} /> : null;
      })}

      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">Coupons</h1>

      {coupons.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coupons.map((coupon) => (
            <CouponCard key={coupon.id} coupon={coupon} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">No active coupons right now — check back soon.</p>
      )}
    </div>
  );
}
