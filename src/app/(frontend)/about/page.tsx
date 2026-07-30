import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { resolveSeo } from "@/lib/seo/metadata";

export const generateMetadata = async (): Promise<Metadata> =>
  resolveSeo({
    seo: {
      metaDescription:
        "How Get Trendy Finds tests and reviews products, and how our affiliate links work.",
    },
    fallbackTitle: "About & Affiliate Disclosure",
    path: "/about",
  });

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbs} />
      <h1 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">About & Affiliate Disclosure</h1>

      <div className="flex flex-col gap-4 text-foreground">
        <p>
          Get Trendy Finds publishes independent, tested product reviews and buying guides. We choose what to
          test and review based on what we think our readers will find genuinely useful — never based on what
          pays the most commission.
        </p>
        <p>
          When you buy something through a link on our site, we may earn an affiliate commission from the retailer.
          This comes at no extra cost to you, and it does not influence which products we recommend or how we rate
          them.
        </p>
        <p>
          Every product we feature is evaluated on its own merits. Where we&apos;ve done hands-on testing, we say so;
          where a review is based on research and aggregated data rather than hands-on testing, we note that too.
        </p>
      </div>
    </div>
  );
}
