import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import type { Category, Occasion } from "@/payload-types";
import { safeRevalidatePaths } from "./revalidate";

export const revalidateCategoryAfterChange: CollectionAfterChangeHook<Category> = ({ doc }) => {
  safeRevalidatePaths(["/", `/categories/${doc.slug}`]);
  return doc;
};

export const revalidateCategoryAfterDelete: CollectionAfterDeleteHook<Category> = ({ doc }) => {
  safeRevalidatePaths(["/", `/categories/${doc.slug}`]);
  return doc;
};

export const revalidateOccasionAfterChange: CollectionAfterChangeHook<Occasion> = ({ doc }) => {
  safeRevalidatePaths(["/", `/${doc.slug}`]);
  return doc;
};

export const revalidateOccasionAfterDelete: CollectionAfterDeleteHook<Occasion> = ({ doc }) => {
  safeRevalidatePaths(["/", `/${doc.slug}`]);
  return doc;
};
