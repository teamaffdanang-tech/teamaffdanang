import Link from "next/link";

const exploreLinks = [
  { label: "About us", href: "/about" },
  { label: "Buying guides", href: "/guides" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-4">
        <div className="max-w-md sm:col-span-2">
          <p className="font-heading text-lg font-semibold text-foreground">Get Trendy Finds</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Independent, tested product reviews across leather goods, mystery sets, bags &amp; cases, and gifts. We
            choose what to test based on what&apos;s genuinely useful to readers, not what pays the most commission.
          </p>
        </div>

        <nav aria-label="Explore">
          <p className="font-heading text-sm font-semibold text-foreground">Explore</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {exploreLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading text-sm font-semibold text-foreground">Affiliate disclosure</p>
          <p className="mt-3 text-sm text-muted-foreground">
            When you buy through our links, we may earn a commission — at no extra cost to you, and never in
            exchange for a positive review.{" "}
            <Link href="/about" className="cursor-pointer text-accent underline underline-offset-2">
              Read our full policy
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Get Trendy Finds. All rights reserved.
      </div>
    </footer>
  );
}
