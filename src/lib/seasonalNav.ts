// ============================================================================
// Seasonal nav highlight schedule — EDIT HERE to change when each campaign is
// emphasized in the top navigation. Evaluated in US Eastern time.
//
// Only ONE campaign is "in season" (strongly highlighted) at a time; the others
// render as normal links. Windows are inclusive and must not overlap. A window
// whose end is earlier than its start (e.g. Dec 26 → Jan 7) wraps across the
// year boundary.
// ============================================================================

export type SeasonKey = "black-friday" | "christmas" | "new-year";

type MonthDay = [month: number, day: number];

export const SEASON_WINDOWS: { key: SeasonKey; start: MonthDay; end: MonthDay }[] = [
  { key: "black-friday", start: [10, 13], end: [11, 30] }, // Oct 13 – Nov 30
  { key: "christmas", start: [12, 1], end: [12, 25] }, //    Dec 1 – Dec 25
  { key: "new-year", start: [12, 26], end: [1, 7] }, //      Dec 26 – Jan 7 (wraps)
];

// Per-season display extras. `emoji` leads the pill badge chip (sticker feel);
// `badge` is the text after it (null = emoji-only chip). Black Friday's badge
// text is computed by blackFridayBadge() below, so its static value here is
// only a fallback.
export const SEASON_META: Record<SeasonKey, { emoji: string; badge: string | null }> = {
  "black-friday": { emoji: "🛍️", badge: "Nov 27" },
  christmas: { emoji: "🎄", badge: null },
  "new-year": { emoji: "✨", badge: null },
};

// The products featured in the seasonal home-hero "trend drop" grid (up to 4).
// Pin slugs here to curate the grid by hand; leave empty to auto-pick the first
// in-season products that have an image. Order is preserved.
export const SEASON_HERO_SLUGS: Partial<Record<SeasonKey, string[]>> = {
  // Curated for the Black Friday trend-drop grid — all four carry a real active
  // coupon (so a discount badge shows) and a clean product image.
  "black-friday": [
    "voyager-titanium-field-watch-black", // $139 · $10 off
    "jenni-travel-bag-2", // $98 · 5% off
    "c1-oiwas-oiwas-17-3-inch-rolling-backpack-with-wheels", // $89.98 · 10% off
    "c1-hopsandpops-cozycat-3-in-1-plush-hand-warmer-and-blanket-", // $89.99 · 10% off
  ],
  christmas: [],
};

/** A nav href like "/black-friday" → its SeasonKey, or null if not seasonal. */
export const seasonForHref = (href: string): SeasonKey | null => {
  const slug = href.replace(/^\//, "");
  return (SEASON_WINDOWS.find((w) => w.key === slug)?.key as SeasonKey | undefined) ?? null;
};

/** Current month/day in US Eastern, independent of the server's own timezone. */
export const easternMonthDay = (now: Date = new Date()): { month: number; day: number } => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    month: "numeric",
    day: "numeric",
  }).formatToParts(now);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);
  return { month, day };
};

const inWindow = (month: number, day: number, start: MonthDay, end: MonthDay): boolean => {
  const cur = month * 100 + day;
  const s = start[0] * 100 + start[1];
  const e = end[0] * 100 + end[1];
  return s <= e ? cur >= s && cur <= e : cur >= s || cur <= e; // wrap across year end
};

/** Which campaign (if any) is in season right now, in US Eastern time. */
export const getActiveSeason = (now: Date = new Date()): SeasonKey | null => {
  const { month, day } = easternMonthDay(now);
  return SEASON_WINDOWS.find((w) => inWindow(month, day, w.start, w.end))?.key ?? null;
};

// Black Friday 2026 sale runs Nov 27–30. The pill badge evolves with the date
// (US Eastern): a fixed date until Nov 16, a live countdown Nov 17–26, then
// "Live now" during the sale.
export const blackFridayBadge = (now: Date = new Date()): string => {
  const { month, day } = easternMonthDay(now);
  const cur = month * 100 + day;
  if (cur >= 1127 && cur <= 1130) return "Live now"; // Nov 27–30
  if (month === 11 && day >= 17 && day <= 26) {
    const days = 27 - day; // days until Nov 27
    return days === 1 ? "1 day" : `${days} days`;
  }
  return "Nov 27"; // through Nov 16
};

/** The badge text to show for the currently-active season (null = no badge). */
export const activeSeasonBadge = (season: SeasonKey | null, now: Date = new Date()): string | null => {
  if (season === "black-friday") return blackFridayBadge(now);
  return season ? SEASON_META[season].badge : null;
};
