import type { Payload } from "payload";

import type { Coupon } from "@/payload-types";

/**
 * A coupon is only ever "active" when both are true: the manual `isActive`
 * toggle is on, AND it hasn't passed its own `expiresAt` (if one is set).
 * Filtered here at query time so an expired coupon never round-trips to the
 * client — it isn't just hidden with CSS.
 */
export const getActiveCoupons = async (
  payload: Payload,
  options: { limit?: number; productId?: number } = {},
): Promise<Coupon[]> => {
  const now = new Date().toISOString();

  const result = await payload.find({
    collection: "coupons",
    where: {
      and: [
        { isActive: { equals: true } },
        { or: [{ expiresAt: { equals: null } }, { expiresAt: { greater_than: now } }] },
        ...(options.productId ? [{ linkedProduct: { equals: options.productId } }] : []),
      ],
    },
    depth: 2,
    limit: options.limit ?? 50,
    sort: "-createdAt",
  });

  return result.docs;
};

export const discountLabel = (coupon: Pick<Coupon, "discountType" | "discountValue">): string => {
  if (coupon.discountType === "free-shipping") return "Free shipping";
  if (coupon.discountType === "percentage") return `${coupon.discountValue ?? 0}% off`;
  return `$${(coupon.discountValue ?? 0).toFixed(2)} off`;
};
