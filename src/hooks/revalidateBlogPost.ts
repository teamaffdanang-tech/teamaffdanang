import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import type { BlogPost, Occasion } from "@/payload-types";
import { safeRevalidatePaths } from "./revalidate";

const occasionPath = (doc: BlogPost): string[] => {
  const occasion = doc.occasion;
  return occasion && typeof occasion !== "number" ? [`/${(occasion as Occasion).slug}`] : [];
};

export const revalidateBlogPostAfterChange: CollectionAfterChangeHook<BlogPost> = ({ doc }) => {
  safeRevalidatePaths(["/", "/blog", `/blog/${doc.slug}`, ...occasionPath(doc)]);
  return doc;
};

export const revalidateBlogPostAfterDelete: CollectionAfterDeleteHook<BlogPost> = ({ doc }) => {
  safeRevalidatePaths(["/", "/blog", `/blog/${doc.slug}`, ...occasionPath(doc)]);
  return doc;
};
