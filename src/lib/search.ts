/**
 * Lightweight, dependency-free search-query normalization.
 *
 * Product titles / brand names / category titles are stored with inconsistent
 * spacing ("Dash Cam" vs "Dashcam" vs "Dash-Cam"). A raw substring `like`
 * query only matches one of those forms, so equivalent user inputs return
 * different results. `buildSearchVariants` expands a query into every form
 * worth matching, and the search page ORs each variant across all three
 * fields — no external search service, no fuzzy-search package.
 */

/**
 * Known compound terms whose spaced and compact spellings mean the same thing.
 * This is NOT a per-term hack: the generic spaced/compact/hyphen expansion below
 * already covers most cases; these groups only add the hard direction where a
 * single compact token ("dashcam") must also match the spaced stored form
 * ("Dash Cam"), which cannot be derived without knowing the word boundary.
 * Extend freely — each group is a list of equivalent spellings.
 */
const EQUIVALENCE_GROUPS: string[][] = [
  ["dash cam", "dashcam", "dash camera", "dash-cam"],
  ["e bike", "ebike", "electric bike"],
  ["e scooter", "escooter", "electric scooter"],
  ["smart watch", "smartwatch"],
  ["smart home", "smarthome"],
  ["car play", "carplay"],
  ["android auto", "androidauto"],
  ["power bank", "powerbank"],
  ["ear buds", "earbuds"],
  ["ear phones", "earphones"],
  ["head phones", "headphones"],
  ["key board", "keyboard"],
  ["note book", "notebook"],
  ["web cam", "webcam"],
  ["sound bar", "soundbar"],
  ["night light", "nightlight"],
];

/** lowercase, hyphens/underscores → spaces, collapse whitespace, trim. */
export const normalizeSpaced = (raw: string): string =>
  raw.toLowerCase().replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();

/** spaces removed. */
const toCompact = (spaced: string): string => spaced.replace(/\s+/g, "");

/**
 * Expand a raw query into the distinct forms worth matching:
 * the normalized spaced form, the compact form, a hyphenated form, plus every
 * spelling of any equivalence group the query belongs to.
 */
export const buildSearchVariants = (raw: string): string[] => {
  const spaced = normalizeSpaced(raw);
  if (!spaced) return [];

  const variants = new Set<string>();
  const add = (v: string) => {
    if (v.length >= 2) variants.add(v);
  };

  add(spaced);
  add(toCompact(spaced));
  add(spaced.replace(/\s+/g, "-"));

  const compactQuery = toCompact(spaced);
  for (const group of EQUIVALENCE_GROUPS) {
    const forms = group.map(normalizeSpaced);
    const belongs = forms.some((f) => f === spaced || toCompact(f) === compactQuery);
    if (belongs) {
      for (const f of forms) {
        add(f);
        add(toCompact(f));
        add(f.replace(/\s+/g, "-"));
      }
    }
  }

  return [...variants];
};
