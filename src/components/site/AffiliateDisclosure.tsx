import Link from "next/link";

/**
 * Single source of truth for the affiliate disclosure sentence shown next to
 * monetized CTAs. Edit the copy here only — every page renders this
 * component rather than repeating the sentence inline.
 */
export function AffiliateDisclosure() {
  return (
    <p className="text-xs text-muted-foreground">
      We may earn an affiliate commission from links on this page — this never affects our picks. Read our{" "}
      <Link href="/about" className="cursor-pointer underline underline-offset-2 hover:text-foreground">
        full affiliate disclosure
      </Link>
      .
    </p>
  );
}
