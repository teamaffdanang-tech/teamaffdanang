import { RichText } from "@payloadcms/richtext-lexical/react";

import type { Product } from "@/payload-types";

type LexicalData = NonNullable<Product["description"]>;

export function Prose({ data, className }: { data?: LexicalData | null; className?: string }) {
  if (!data) return null;

  return (
    <RichText
      data={data}
      disableContainer
      className={`prose-content flex flex-col gap-4 text-foreground [&_a]:text-accent [&_a]:underline [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 ${className ?? ""}`}
    />
  );
}
