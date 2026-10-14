import Link from "next/link";

import type { SeasonKey } from "@/lib/seasonalNav";
import type { TickerDeal } from "@/lib/seasonalDeals";

// Season-colored strip. Pause-on-hover and the reduce-motion static fallback
// are both pure CSS (see .gtf-ticker in globals.css), so this stays a server
// component — no client JS shipped.
const THEME: Record<Extract<SeasonKey, "black-friday" | "christmas"> | "new-year", { bg: string; text: string }> = {
  "black-friday": { bg: "linear-gradient(90deg, #30102a 0%, #581842 100%)", text: "#ffe3ec" },
  christmas: { bg: "linear-gradient(90deg, #0d3a21 0%, #1a5433 100%)", text: "#f6efdd" },
  "new-year": { bg: "linear-gradient(90deg, #0f1736 0%, #20285a 100%)", text: "#f3e6b0" },
};

function DealGroup({ deals, color, hidden }: { deals: TickerDeal[]; color: string; hidden?: boolean }) {
  return (
    <span className="inline-flex items-center" aria-hidden={hidden ? "true" : undefined}>
      {deals.map((deal, i) => (
        <span key={`${deal.href}-${i}`} className="inline-flex items-center">
          <Link
            href={deal.href}
            className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-semibold transition-opacity hover:opacity-80"
            tabIndex={hidden ? -1 : undefined}
          >
            <span aria-hidden="true">🔥</span>
            <span>{deal.text}</span>
          </Link>
          <span aria-hidden="true" style={{ color, opacity: 0.4 }}>
            •
          </span>
        </span>
      ))}
    </span>
  );
}

export function SeasonalTicker({ deals, season }: { deals: TickerDeal[]; season: SeasonKey }) {
  if (deals.length === 0) return null;
  const theme = THEME[season] ?? THEME["new-year"];

  return (
    <div
      className="gtf-ticker border-b border-white/10"
      style={{ background: theme.bg, color: theme.text }}
      aria-label="Current deals"
    >
      <div className="gtf-ticker__track">
        <DealGroup deals={deals} color={theme.text} />
        <DealGroup deals={deals} color={theme.text} hidden />
      </div>
    </div>
  );
}
