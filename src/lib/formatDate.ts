const formatter = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric" });

/** Formats an ISO date string (e.g. Payload's `updatedAt`) as "January 5, 2026". */
export const formatDate = (iso: string): string => formatter.format(new Date(iso));
