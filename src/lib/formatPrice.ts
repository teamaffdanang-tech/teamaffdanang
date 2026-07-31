const symbols: Record<string, string> = {
  USD: "$",
  HKD: "HK$",
};

/** Formats a price with the correct currency symbol — never assume USD. */
export const formatPrice = (price: number, currency?: string | null): string =>
  `${symbols[currency ?? "USD"] ?? "$"}${price.toFixed(2)}`;
