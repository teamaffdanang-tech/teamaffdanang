/**
 * On-site product search box. Native GET form → /search?q=… so it works without
 * client JS and keeps users inside the funnel (search → product → affiliate CTA).
 */
export function SearchBox({
  defaultValue = "",
  className = "",
  autoFocus = false,
}: {
  defaultValue?: string;
  className?: string;
  autoFocus?: boolean;
}) {
  return (
    <form action="/search" role="search" className={`relative ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      >
        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.75" />
        <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        name="q"
        defaultValue={defaultValue}
        autoFocus={autoFocus}
        placeholder="Search products…"
        aria-label="Search products"
        className="w-full rounded-full border border-border bg-muted py-2 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus-visible:border-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      />
    </form>
  );
}
