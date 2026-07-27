const KNOWN_RETAILERS: { pattern: RegExp; name: string }[] = [
  { pattern: /(^|\.)amazon\./i, name: 'Amazon' },
  { pattern: /(^|\.)shopee\./i, name: 'Shopee' },
  { pattern: /(^|\.)walmart\./i, name: 'Walmart' },
  { pattern: /(^|\.)target\./i, name: 'Target' },
  { pattern: /(^|\.)bestbuy\./i, name: 'Best Buy' },
  { pattern: /(^|\.)etsy\./i, name: 'Etsy' },
]

/** Detects a human-readable retailer name from a product URL's hostname. */
export const detectRetailer = (url: string): string => {
  let hostname: string
  try {
    hostname = new URL(url).hostname
  } catch {
    return 'Unknown'
  }

  const known = KNOWN_RETAILERS.find((r) => r.pattern.test(hostname))
  if (known) return known.name

  // Fallback: title-case the registrable domain label — the second-to-last part
  // of the hostname (e.g. "books.toscrape.com" -> "toscrape" -> "Toscrape"),
  // which is more often the actual brand than the first subdomain.
  const parts = hostname.split('.')
  const label = parts.length >= 2 ? parts[parts.length - 2] : parts[0]
  return label.charAt(0).toUpperCase() + label.slice(1)
}
