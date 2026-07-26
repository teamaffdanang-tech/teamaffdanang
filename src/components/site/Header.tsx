import Link from "next/link";

import { getPayloadClient } from "@/lib/payload";
import { MobileMenu } from "./MobileMenu";

const getOccasionNavItems = async () => {
  try {
    const payload = await getPayloadClient();
    const result = await payload.find({
      collection: "occasions",
      limit: 12,
      sort: "startMonth",
      depth: 0,
    });
    return result.docs.map((occasion) => ({
      label: occasion.title,
      href: `/${occasion.slug}`,
    }));
  } catch {
    // Occasion nav is supplementary — a transient DB hiccup shouldn't take down every page.
    return [];
  }
};

export async function Header() {
  const occasionItems = await getOccasionNavItems();
  const navItems = [...occasionItems, { label: "Guides", href: "/guides" }];

  return (
    <div className="relative border-b border-border bg-surface">
      <p className="border-b border-border bg-muted px-4 py-2 text-center text-xs text-muted-foreground">
        We independently test and review every pick. When you buy through our links, we may earn a commission.{" "}
        <Link href="/about" className="cursor-pointer underline underline-offset-2 hover:text-foreground">
          Learn more
        </Link>
      </p>
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="cursor-pointer font-heading text-2xl font-semibold tracking-tight text-foreground">
          Seasonal Picks Hub
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="cursor-pointer text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu items={navItems} />
      </header>
    </div>
  );
}
