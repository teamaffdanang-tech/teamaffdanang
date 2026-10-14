import { unstable_cache } from "next/cache";
import Image from "next/image";
import Link from "next/link";

import { getPayloadClient } from "@/lib/payload";
import { getTickerDeals } from "@/lib/seasonalDeals";
import { activeSeasonBadge, getActiveSeason } from "@/lib/seasonalNav";
import { MobileMenu } from "./MobileMenu";
import { SearchBox } from "./SearchBox";
import { SeasonalNavLink } from "./SeasonalNavLink";
import { SeasonalTicker } from "./SeasonalTicker";

// Cached across requests: the Header renders on every page. Occasions change
// rarely, so a 24h window is safe (a deploy also busts the cache).
const getOccasionNavItems = unstable_cache(
  async () => {
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
    } catch (err) {
      console.warn(
        "Header: failed to load occasion nav — rendering with an empty occasion menu.",
        err instanceof Error ? err.message : err,
      );
      return [];
    }
  },
  ["header-occasion-nav"],
  { revalidate: 86400 },
);

export async function Header() {
  const occasionItems = await getOccasionNavItems();
  // Show only the current-season campaigns, in campaign order. Off-season
  // occasions (Valentine's Day, Mother's Day, Back to School, Halloween) stay
  // valid pages but are intentionally hidden from the top nav.
  const CAMPAIGN_ORDER = ["black-friday", "christmas", "new-year"];
  const orderedOccasions = CAMPAIGN_ORDER.map((slug) =>
    occasionItems.find((i) => i.href === `/${slug}`),
  ).filter((i): i is { label: string; href: string } => Boolean(i));
  const navItems = [
    ...orderedOccasions,
    { label: "Blog", href: "/blog" },
    { label: "Coupons", href: "/coupons" },
  ];
  // Which seasonal campaign (if any) is in season right now (US Eastern), and
  // the date-aware badge for it (computed once, server-side).
  const activeSeason = getActiveSeason();
  const seasonBadge = activeSeasonBadge(activeSeason);
  // Real coupon-backed deals for the top-bar ticker (empty off-season or when
  // there are no active coupons — the ticker then renders nothing).
  const tickerDeals = activeSeason ? await getTickerDeals(6) : [];

  return (
    <div className="relative border-b border-border bg-surface">
      {activeSeason && tickerDeals.length > 0 && (
        <SeasonalTicker deals={tickerDeals} season={activeSeason} />
      )}
      <p className="border-b border-border bg-muted px-4 py-2 text-center text-xs text-muted-foreground">
        We independently research and curate every pick. When you buy through our links, we may earn a commission.{" "}
        <Link href="/affiliate-disclosure" className="cursor-pointer underline underline-offset-2 hover:text-foreground">
          Learn more
        </Link>
      </p>
      <header className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex cursor-pointer items-center gap-2.5">
          <Image
            src="/brand/logo-icon.png"
            alt=""
            aria-hidden="true"
            width={36}
            height={27}
            className="h-9 w-auto rounded-md"
            priority
          />
          <span className="font-heading text-2xl font-semibold tracking-tight text-foreground">
            Get Trendy Finds
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <SeasonalNavLink
                    href={item.href}
                    label={item.label}
                    activeSeason={activeSeason}
                    badge={seasonBadge}
                    variant="desktop"
                  />
                </li>
              ))}
            </ul>
          </nav>

          <SearchBox className="hidden md:block md:w-52" />
        </div>

        <MobileMenu items={navItems} activeSeason={activeSeason} seasonBadge={seasonBadge} />
      </header>
    </div>
  );
}
