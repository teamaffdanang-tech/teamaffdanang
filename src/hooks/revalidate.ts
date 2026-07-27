import { revalidatePath } from "next/cache";

/**
 * Wraps revalidatePath so content hooks are safe to run both inside a Next.js
 * request (admin panel edits) and outside of it (the standalone seed script via
 * the Local API) — revalidatePath throws when called outside Next's server
 * context, which would otherwise crash `npm run seed`.
 */
export const safeRevalidatePaths = (paths: string[]) => {
  for (const path of paths) {
    try {
      revalidatePath(path);
    } catch {
      // Not running inside a Next.js request context (e.g. the seed script) — skip.
    }
  }
};
