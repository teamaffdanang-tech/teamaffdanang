import Link from "next/link";

import { SEASON_META, seasonForHref, type SeasonKey } from "@/lib/seasonalNav";

type Variant = "desktop" | "mobile";

const BASE: Record<Variant, string> = {
  desktop:
    "cursor-pointer whitespace-nowrap text-[16px] font-medium text-foreground underline-offset-[6px] decoration-2 transition-colors duration-200 hover:text-accent hover:underline",
  mobile:
    "flex min-h-[44px] items-center cursor-pointer rounded-md px-3 py-2.5 text-[17px] font-medium text-foreground transition-colors duration-200 hover:bg-muted",
};
// When a seasonal pill renders inside the link, the link itself must not also
// paint/reverse colors — keep only layout + cursor (the pill carries the look),
// while still holding the ≥44px tap target.
const BASE_SEASONAL: Record<Variant, string> = {
  desktop: "cursor-pointer whitespace-nowrap",
  mobile: "flex min-h-[44px] items-center cursor-pointer px-3 py-1.5",
};

export function SeasonalNavLink({
  href,
  label,
  activeSeason,
  variant,
  badge,
  onNavigate,
}: {
  href: string;
  label: string;
  activeSeason: SeasonKey | null;
  variant: Variant;
  /** Badge text for the active season (server-computed, e.g. "Nov 27" / "3 days" / "Live now"). */
  badge?: string | null;
  onNavigate?: () => void;
}) {
  const season = seasonForHref(href);
  const isActive = season !== null && season === activeSeason;

  if (!isActive) {
    return (
      <Link href={href} onClick={onNavigate} className={BASE[variant]}>
        {label}
      </Link>
    );
  }

  const emoji = SEASON_META[season].emoji;

  return (
    <Link href={href} onClick={onNavigate} className={BASE_SEASONAL[variant]}>
      <span className={`season-pill season-pill--${season}`}>
        <span className="season-pill__text">{label}</span>
        <span className="season-pill__badge">
          <span className="season-pill__badge-emoji" aria-hidden="true">
            {emoji}
          </span>
          {badge && <span>{badge}</span>}
        </span>
      </span>
    </Link>
  );
}
