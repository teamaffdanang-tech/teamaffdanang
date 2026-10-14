import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

// On-demand ISR revalidation. The seed/publish pipeline calls this after a run
// so edits go live immediately instead of waiting out the 1h window.
// Secret-gated (REVALIDATE_SECRET) so only our tooling can trigger it.
// Lives at /revalidate (not /api/*) because Payload owns /api/[...slug].

export async function POST(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  const expected = process.env.REVALIDATE_SECRET;
  if (!expected || secret !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  let paths: string[] = [];
  try {
    const body = (await req.json()) as { paths?: unknown };
    if (Array.isArray(body?.paths)) {
      paths = body.paths.filter((p): p is string => typeof p === "string" && p.startsWith("/"));
    }
  } catch {
    // no body → fall through to a full refresh
  }

  if (paths.length > 0) {
    for (const p of paths) revalidatePath(p);
    return NextResponse.json({ revalidated: paths, at: Date.now() });
  }

  // Default: refresh every page under the root layout (used after a seed that
  // may have touched many products/posts at once).
  revalidatePath("/", "layout");
  return NextResponse.json({ revalidated: "all", at: Date.now() });
}
