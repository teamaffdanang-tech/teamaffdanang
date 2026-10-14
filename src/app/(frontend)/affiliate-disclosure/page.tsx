import type { Metadata } from "next";
import Link from "next/link";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { resolveSeo } from "@/lib/seo/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: {
      metaDescription:
        "Get Trendy Finds earns affiliate commissions when you buy through our links, at no extra cost to you. Here is exactly how that works and how it affects our picks.",
    },
    fallbackTitle: "Affiliate Disclosure",
    path: "/affiliate-disclosure",
  });

export default function AffiliateDisclosurePage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Affiliate Disclosure", path: "/affiliate-disclosure" },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-5 px-4 py-10 text-foreground sm:px-6">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold sm:text-4xl">Affiliate Disclosure</h1>
      <p className="text-sm text-muted-foreground">Last updated: October 13, 2026</p>

      <p>
        Get Trendy Finds is reader-supported. Many of the links on this site are affiliate links, which means we may
        earn a commission when you click one and then buy something from the retailer. This comes at{" "}
        <strong>no extra cost to you</strong> — the price you pay is the same whether or not you use our link.
      </p>

      <h2 className="font-heading text-xl font-semibold">How our links work</h2>
      <p>
        When you click a &ldquo;buy&rdquo; or &ldquo;view deal&rdquo; button, a short tracking code is added to the
        destination address. If you go on to make a purchase, that code lets the retailer credit the sale to us and
        pay a commission. We take part in a number of affiliate programs directly and through networks such as
        GoAffPro, UpPromote, and Impact.
      </p>

      <h2 className="font-heading text-xl font-semibold">How this affects our picks</h2>
      <p>
        It does not change our opinions. We choose which products and gifts to feature based on what we believe is
        genuinely useful to readers — not on which program pays the most. Earning a commission never buys a better
        placement, a higher ranking, or a more favourable write-up. When we think a product has drawbacks, we say so.
      </p>

      <h2 className="font-heading text-xl font-semibold">How we research</h2>
      <p>
        Our gift guides and picks are independently researched and curated using manufacturer specifications,
        aggregated customer feedback, and hands-on research rather than independent laboratory testing. Prices and
        availability change often, so please confirm the current details on the retailer&rsquo;s own page before you
        buy.
      </p>

      <h2 className="font-heading text-xl font-semibold">Questions</h2>
      <p>
        If anything here is unclear, reach us through our{" "}
        <Link href="/about" className="text-accent underline underline-offset-2">
          About page
        </Link>
        .
      </p>
    </div>
  );
}
