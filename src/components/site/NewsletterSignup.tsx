"use client";

import Link from "next/link";
import { useId, useState, type CSSProperties, type FormEvent } from "react";

import type { SeasonKey } from "@/lib/seasonalNav";

type NewsletterSignupProps = {
  heading?: string;
  description?: string;
  /** Short tag recorded on the subscriber row + analytics, e.g. "home", "black-friday-top". */
  source?: string;
  /** Active season (server-computed) — drives the theme, copy and success line. */
  season?: SeasonKey | null;
  className?: string;
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ThemeKey = SeasonKey | "default";

// GTF voice: playful, trend-led, gift-forward — deliberately NOT the GSF
// "verified deal alerts" copy. The newsletter is "the trend drop".
const COPY: Record<ThemeKey, { heading: string; description: string; success: string; browseLabel: string; browseHref: string }> = {
  "black-friday": {
    heading: "Get the trend drop",
    description: "The gifts everyone's searching for, before they sell out.",
    success: "You're in! Your first trend drop lands before Black Friday (Nov 27).",
    browseLabel: "Browse what's trending now →",
    browseHref: "/black-friday",
  },
  christmas: {
    heading: "Get the Christmas trend drop",
    description: "The cosy, giftable finds everyone's searching for — before they sell out.",
    success: "You're in! Your first trend drop lands before Christmas.",
    browseLabel: "Browse what's trending now →",
    browseHref: "/christmas",
  },
  "new-year": {
    heading: "Get the trend drop",
    description: "The finds everyone's searching for as the new year kicks off.",
    success: "You're in! Watch your inbox for the next trend drop.",
    browseLabel: "Browse what's trending now →",
    browseHref: "/",
  },
  default: {
    heading: "Get the trend drop",
    description: "The gifts everyone's searching for, before they sell out.",
    success: "You're in! Your first trend drop is on its way.",
    browseLabel: "Browse what's trending now →",
    browseHref: "/blog",
  },
};

type Theme = {
  emoji: string;
  card: string; // may be a gradient
  border: string;
  heading: string;
  sub: string;
  inputBg: string;
  inputText: string;
  inputBorder: string;
  btnBg: string;
  btnText: string;
  foot: string;
  link: string;
  successBg: string;
};

const THEME: Record<ThemeKey, Theme> = {
  // Plum → berry → coral gradient. Festive, warm, un-GSF.
  "black-friday": {
    emoji: "🛍️",
    card: "linear-gradient(135deg, #3d1030 0%, #6b1d50 55%, #b23a6b 100%)",
    border: "rgba(255,138,160,0.4)",
    heading: "#fff0f5",
    sub: "rgba(255,240,245,0.84)",
    inputBg: "rgba(255,255,255,0.12)",
    inputText: "#ffffff",
    inputBorder: "rgba(255,180,200,0.45)",
    btnBg: "#ff6f91",
    btnText: "#3a0f2e",
    foot: "rgba(255,240,245,0.72)",
    link: "#ffd0dc",
    successBg: "rgba(255,255,255,0.15)",
  },
  // Pine-forest gradient, cream + pale-yellow.
  christmas: {
    emoji: "🎄",
    card: "linear-gradient(135deg, #0e3a22 0%, #1a5433 60%, #2f7148 100%)",
    border: "rgba(246,239,221,0.34)",
    heading: "#f6efdd",
    sub: "rgba(246,239,221,0.85)",
    inputBg: "rgba(255,255,255,0.14)",
    inputText: "#ffffff",
    inputBorder: "rgba(246,239,221,0.45)",
    btnBg: "#f3e3a0",
    btnText: "#143f26",
    foot: "rgba(246,239,221,0.74)",
    link: "#f3e3a0",
    successBg: "rgba(255,255,255,0.15)",
  },
  "new-year": {
    emoji: "✨",
    card: "linear-gradient(135deg, #0f1736 0%, #20285a 60%, #3a3f7a 100%)",
    border: "rgba(243,230,176,0.4)",
    heading: "#f3e6b0",
    sub: "rgba(255,255,255,0.8)",
    inputBg: "rgba(255,255,255,0.12)",
    inputText: "#ffffff",
    inputBorder: "rgba(243,230,176,0.45)",
    btnBg: "#f3e6b0",
    btnText: "#141a3a",
    foot: "rgba(255,255,255,0.68)",
    link: "#f3e6b0",
    successBg: "rgba(255,255,255,0.15)",
  },
  // Off-season: warm cream → peach, GTF terracotta accent. Light card.
  default: {
    emoji: "✨",
    card: "linear-gradient(135deg, #fef1e9 0%, #fbe3d4 100%)",
    border: "rgba(193,95,60,0.28)",
    heading: "#3a1b10",
    sub: "#6b4a3a",
    inputBg: "#ffffff",
    inputText: "#1c1c1f",
    inputBorder: "rgba(193,95,60,0.3)",
    btnBg: "var(--color-accent)",
    btnText: "#ffffff",
    foot: "#8a6a58",
    link: "#a5492a",
    successBg: "rgba(193,95,60,0.12)",
  },
};

export function NewsletterSignup({ heading, description, source, season, className = "" }: NewsletterSignupProps) {
  const fieldId = useId();
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const key: ThemeKey = season ?? "default";
  const theme = THEME[key];
  const copy = COPY[key];
  const h = heading ?? copy.heading;
  const d = description ?? copy.description;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    const trimmed = email.trim();
    if (!EMAIL_RE.test(trimmed)) {
      setStatus("error");
      setMessage("Hmm, that email doesn't look right — mind checking it?");
      return;
    }
    setStatus("loading");
    setMessage("");
    try {
      const res = await fetch("/newsletter", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: trimmed, company, source }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        doi?: boolean;
        already?: boolean;
        error?: string;
      };
      if (res.ok && data.ok) {
        setStatus("success");
        setMessage(
          data.doi
            ? "Almost there — check your inbox to confirm."
            : data.already
              ? "You're already on the list — see you in the next drop!"
              : copy.success,
        );
        setEmail("");
        if (typeof window !== "undefined") {
          window.fbq?.("track", "Lead");
          window.gtag?.("event", "generate_lead", { method: "newsletter" });
        }
      } else {
        setStatus("error");
        setMessage(data.error || "Couldn't sign you up right now — please try again in a bit.");
      }
    } catch {
      setStatus("error");
      setMessage("Couldn't sign you up right now — please try again in a bit.");
    }
  };

  const cardStyle: CSSProperties = { background: theme.card, border: `1px solid ${theme.border}` };

  return (
    <section
      className={`rounded-3xl p-6 shadow-[0_24px_60px_-28px_rgba(26,8,22,0.5)] sm:p-9 ${className}`}
      style={cardStyle}
      aria-label="Newsletter signup"
    >
      <div className="flex items-center gap-2.5">
        <span aria-hidden="true" className="text-2xl sm:text-3xl">
          {theme.emoji}
        </span>
        <h2 className="font-heading text-2xl font-semibold sm:text-3xl" style={{ color: theme.heading }}>
          {h}
        </h2>
      </div>
      <p className="mt-2 text-sm sm:text-base" style={{ color: theme.sub }}>
        {d}
      </p>
      <p className="mt-3 text-[13px] font-semibold uppercase tracking-wide" style={{ color: theme.sub }}>
        Trending picks · Member-only codes · Early access
      </p>

      {status === "success" ? (
        <div className="mt-5 rounded-2xl px-4 py-4" role="status" style={{ background: theme.successBg }}>
          <p className="text-sm font-semibold" style={{ color: theme.heading }}>
            {message}
          </p>
          <Link
            href={copy.browseHref}
            className="mt-1.5 inline-block text-sm font-semibold underline underline-offset-2"
            style={{ color: theme.link }}
          >
            {copy.browseLabel}
          </Link>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3" noValidate>
          {/* Honeypot — off-screen, not display:none, so bots still see it. */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="absolute left-[-9999px] h-0 w-0 opacity-0"
          />
          <div className="flex flex-col gap-3 sm:flex-row">
            <label htmlFor={fieldId} className="sr-only">
              Email address
            </label>
            <input
              id={fieldId}
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === "loading"}
              className="w-full flex-1 rounded-2xl px-4 py-3.5 text-base outline-none transition focus:ring-2 focus:ring-white/40 disabled:opacity-60"
              style={{ background: theme.inputBg, color: theme.inputText, border: `1px solid ${theme.inputBorder}` }}
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="shrink-0 cursor-pointer rounded-2xl px-8 py-3.5 text-base font-extrabold transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: theme.btnBg, color: theme.btnText }}
            >
              {status === "loading" ? "Joining…" : "I'm in"}
            </button>
          </div>
          {status === "error" && (
            <p className="text-sm font-medium" role="alert" style={{ color: key === "default" ? "#b91c1c" : "#ffd1d1" }}>
              {message}
            </p>
          )}
          <p className="text-xs" style={{ color: theme.foot }}>
            No spam, unsubscribe anytime. See our{" "}
            <Link href="/privacy" className="underline underline-offset-2" style={{ color: theme.link }}>
              Privacy Policy
            </Link>
            .
          </p>
        </form>
      )}
    </section>
  );
}
