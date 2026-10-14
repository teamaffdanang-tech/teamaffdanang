import { unstable_cache } from "next/cache";

import { discountLabel, getActiveCoupons, resolveCouponDisplayProduct } from "@/lib/coupons";
import { getPayloadClient } from "@/lib/payload";

export type TickerDeal = { text: string; href: string };

// Build the top-bar ticker from REAL active coupons only — never fabricated
// discounts. Product-scope coupons link to their product; brand/sitewide
// coupons (or any without a display product) link to the coupons hub.
const buildTickerDeals = async (limit: number): Promise<TickerDeal[]> => {
  try {
    const payload = await getPayloadClient();
    const coupons = await getActiveCoupons(payload, { limit: limit * 3 });
    const deals: TickerDeal[] = [];
    const seen = new Set<string>();

    for (const coupon of coupons) {
      const label = discountLabel(coupon); // "16% off" | "$10.00 off" | "Free shipping"
      const product = await resolveCouponDisplayProduct(payload, coupon);
      const name = product?.title;
      const text =
        name && product?.slug
          ? `${name} — ${label} with code ${coupon.code}`
          : `${label} with code ${coupon.code}`;
      const href = name && product?.slug ? `/products/${product.slug}` : "/coupons";

      const dedupeKey = `${coupon.code}:${text}`;
      if (seen.has(dedupeKey)) continue;
      seen.add(dedupeKey);

      deals.push({ text, href });
      if (deals.length >= limit) break;
    }
    return deals;
  } catch {
    // Ticker is non-critical chrome — never let it break the page.
    return [];
  }
};

// Coupons change rarely minute-to-minute; cache for 30 min so the ticker
// doesn't add a DB round-trip to every page render.
export const getTickerDeals = unstable_cache(
  async (limit = 6) => buildTickerDeals(limit),
  ["gtf-ticker-deals"],
  { revalidate: 1800 },
);
