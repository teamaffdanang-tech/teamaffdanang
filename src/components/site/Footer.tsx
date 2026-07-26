import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Guides", href: "/guides" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-md">
          <p className="font-heading text-lg font-semibold text-foreground">Seasonal Picks Hub</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Independent, tested gift guides for every occasion. We independently review every product we recommend.
            When you buy through our links, we may earn an affiliate commission — this never affects our picks.
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-col gap-2 text-sm">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="cursor-pointer text-muted-foreground transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Seasonal Picks Hub. All rights reserved.
      </div>
    </footer>
  );
}
