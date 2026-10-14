import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { resolveSeo } from "@/lib/seo/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: {
      metaDescription:
        "What Get Trendy Finds collects when you visit — Google Analytics, newsletter signups, and how affiliate links work — and what we deliberately do not collect.",
    },
    fallbackTitle: "Privacy Policy",
    path: "/privacy",
  });

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-10 text-foreground sm:px-6">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
      <p className="text-sm text-muted-foreground">Last updated: October 13, 2026</p>

      <p>
        Get Trendy Finds (&ldquo;we&rdquo;, &ldquo;us&rdquo;) publishes gift guides and product picks at
        gettrendyfinds.com. This page describes what happens to your data when you visit. It is written from how the
        site is actually built — if something is not listed here, the site does not collect it.
      </p>

      <h2 className="font-heading text-xl font-semibold">Google Analytics</h2>
      <p>
        We use Google Analytics 4 (measurement ID G-SZ17VPNF8P) to understand how many people visit and which pages
        they read. Google Analytics is operated by Google, not by us. It sets first-party cookies in your browser
        (named <code>_ga</code> and <code>_ga_</code> followed by the property ID) and collects information such as the
        pages you view, the approximate location derived from your IP address, your device and browser type, and how
        you arrived at the site. Your IP address is processed by Google to estimate location and is not stored by us.
        How Google uses this data is governed by the{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          Google Privacy Policy
        </a>
        . You can opt out with the{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-2"
        >
          Google Analytics Opt-out Browser Add-on
        </a>{" "}
        or by blocking analytics cookies in your browser.
      </p>

      <h2 className="font-heading text-xl font-semibold">Newsletter</h2>
      <p>
        If you enter your email address in one of our signup forms, we store that email address, the page the signup
        came from, and the date, in our own database. We use it only to email you deal alerts and gift picks (for
        example when Black Friday deals go live). We do not sell or rent your email address to anyone, and you can
        unsubscribe at any time by replying to any email or contacting us. If you never submit a form, we never have
        your email.
      </p>

      <h2 className="font-heading text-xl font-semibold">Affiliate links</h2>
      <p>
        Most outbound &ldquo;buy&rdquo; and &ldquo;view deal&rdquo; buttons are affiliate links. When you click one, a
        short tracking code is added to the destination address so the retailer can credit the visit to us if you make
        a purchase. The retailer or its affiliate network may set their own cookies on their own website under their
        own privacy policies. We only receive aggregate, anonymous commission reports — we never see your name,
        payment details, or what you bought. See our{" "}
        <Link href="/affiliate-disclosure" className="text-accent underline underline-offset-2">
          Affiliate Disclosure
        </Link>{" "}
        for more.
      </p>

      <h2 className="font-heading text-xl font-semibold">What we do not collect</h2>
      <ul className="ml-5 list-disc space-y-1">
        <li>We have no visitor sign-up or accounts, so we hold no usernames or passwords.</li>
        <li>We never ask for or process payment on this site — all purchases happen on the retailer&rsquo;s site.</li>
        <li>We do not store your IP address or full browser user-agent in our own records.</li>
      </ul>

      <h2 className="font-heading text-xl font-semibold">Service providers &amp; children</h2>
      <p>
        The site is hosted on Vercel and product images are served from our media CDN; analytics is provided by Google
        as described above. This site is intended for adults shopping for consumer products and is not directed to
        children under 13.
      </p>

      <h2 className="font-heading text-xl font-semibold">Changes &amp; contact</h2>
      <p>
        We may update this policy as the site changes and will revise the date above when we do. Questions about
        privacy? Reach us through our{" "}
        <Link href="/about" className="text-accent underline underline-offset-2">
          About page
        </Link>
        .
      </p>
    </div>
  );
}
