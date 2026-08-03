import type { Payload } from "payload";

import type { Coupon, Product } from "@/payload-types";

/**
 * Resolves the product used as a coupon's display anchor (image/title on
 * CouponCard and JSON-LD). Brand-scope coupons often have no linkedProduct —
 * fall back to that brand's most recently published product. Keeps a simple
 * heuristic (newest) rather than trying to rank by "best" image.
 */
export const resolveCouponDisplayProduct = async (
  payload: Payload,
  coupon: Pick<Coupon, "scope" | "linkedProduct" | "linkedBrand">,
): Promise<Product | undefined> => {
  if (coupon.linkedProduct && typeof coupon.linkedProduct !== "number") return coupon.linkedProduct as Product;
  if (coupon.scope !== "brand") return undefined;

  const brandId = typeof coupon.linkedBrand === "number" ? coupon.linkedBrand : coupon.linkedBrand?.id;
  if (!brandId) return undefined;

  const result = await payload.find({
    collection: "products",
    where: { and: [{ brand: { equals: brandId } }, { _status: { equals: "published" } }] },
    sort: "-createdAt",
    limit: 1,
    depth: 1,
  });
  return result.docs[0] as Product | undefined;
};

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

/**
 * Whether an active coupon applies to a given product — "product" scope matches
 * only its own linkedProduct; "brand" scope matches every product sharing its
 * linkedBrand, regardless of which product (if any) the coupon is anchored to
 * for display purposes.
 */
export const couponAppliesToProduct = (
  coupon: Pick<Coupon, "scope" | "linkedProduct" | "linkedBrand">,
  product: Pick<Product, "id" | "brand">,
): boolean => {
  if (coupon.scope === "brand") {
    const brandId = typeof coupon.linkedBrand === "number" ? coupon.linkedBrand : coupon.linkedBrand?.id;
    const productBrandId = typeof product.brand === "number" ? product.brand : product.brand?.id;
    return brandId != null && brandId === productBrandId;
  }
  const linkedProductId = typeof coupon.linkedProduct === "number" ? coupon.linkedProduct : coupon.linkedProduct?.id;
  return linkedProductId === product.id;
};

export const discountLabel = (coupon: Pick<Coupon, "discountType" | "discountValue">): string => {
  if (coupon.discountType === "free-shipping") return "Free shipping";
  if (coupon.discountType === "percentage") return `${coupon.discountValue ?? 0}% off`;
  return `$${(coupon.discountValue ?? 0).toFixed(2)} off`;
};
