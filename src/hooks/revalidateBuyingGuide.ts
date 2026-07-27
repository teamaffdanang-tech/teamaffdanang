import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from "payload";

import type { BuyingGuide, Occasion } from "@/payload-types";
import { safeRevalidatePaths } from "./revalidate";

const occasionPath = (doc: BuyingGuide): string[] => {
  const occasion = doc.occasion;
  return occasion && typeof occasion !== "number" ? [`/${(occasion as Occasion).slug}`] : [];
};

export const revalidateBuyingGuideAfterChange: CollectionAfterChangeHook<BuyingGuide> = ({ doc }) => {
  safeRevalidatePaths(["/", "/guides", `/guides/${doc.slug}`, ...occasionPath(doc)]);
  return doc;
};

export const revalidateBuyingGuideAfterDelete: CollectionAfterDeleteHook<BuyingGuide> = ({ doc }) => {
  safeRevalidatePaths(["/", "/guides", `/guides/${doc.slug}`, ...occasionPath(doc)]);
  return doc;
};
