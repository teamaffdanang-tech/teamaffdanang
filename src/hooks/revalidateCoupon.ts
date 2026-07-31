import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import type { Coupon, Product } from "@/payload-types";
import { safeRevalidatePaths } from "./revalidate";

const productPath = (doc: Coupon): string[] => {
  const product = doc.linkedProduct;
  return product && typeof product !== "number" ? [`/products/${(product as Product).slug}`] : [];
};

export const revalidateCouponAfterChange: CollectionAfterChangeHook<Coupon> = ({ doc }) => {
  safeRevalidatePaths(["/", "/coupons", ...productPath(doc)]);
  return doc;
};

export const revalidateCouponAfterDelete: CollectionAfterDeleteHook<Coupon> = ({ doc }) => {
  safeRevalidatePaths(["/", "/coupons", ...productPath(doc)]);
  return doc;
};
