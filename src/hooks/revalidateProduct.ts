import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import type { Category, Occasion, Product } from "@/payload-types";
import { safeRevalidatePaths } from "./revalidate";

const listingPaths = (doc: Product): string[] => {
  const categoryPaths = (doc.categories || [])
    .filter((c): c is Category => typeof c !== "number")
    .map((c) => `/categories/${c.slug}`);
  const occasionPaths = (doc.occasions || [])
    .filter((o): o is Occasion => typeof o !== "number")
    .map((o) => `/${o.slug}`);
  return [...categoryPaths, ...occasionPaths];
};

export const revalidateProductAfterChange: CollectionAfterChangeHook<Product> = ({ doc }) => {
  safeRevalidatePaths(["/", `/products/${doc.slug}`, ...listingPaths(doc)]);
  return doc;
};

export const revalidateProductAfterDelete: CollectionAfterDeleteHook<Product> = ({ doc }) => {
  safeRevalidatePaths(["/", `/products/${doc.slug}`, ...listingPaths(doc)]);
  return doc;
};
