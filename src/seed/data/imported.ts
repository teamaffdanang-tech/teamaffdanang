import type { SeedDataset } from '../types'

/**
 * Real products imported via `npm run import:links` + chat review (not the
 * proof-of-concept data in sample.ts, which was deleted). Append new products
 * here as more links are approved — the import engine is idempotent (upsert
 * by slug).
 */
export const importedDataset: SeedDataset = {
  categories: [
    {
      slug: 'gifts',
      title: 'Gifts',
      description:
        'A mix of stationery, novelty, and collectible finds that make good gifts but don’t fit neatly into a single product type — from a gift card to DIY kits and desk toys.',
    },
    {
      slug: 'bags-cases',
      title: 'Bags & Cases',
      description:
        'Pencil cases and pouches for carrying pens, pencils, and small stationery — from simple zip pouches to multi-compartment organizers.',
    },
    {
      slug: 'mystery-sets',
      title: 'Mystery Sets',
      description:
        'Blind box collectibles where the specific design inside is a surprise until you open it — Sanrio, Pop Mart, Miniso, and similar licensed character lines.',
    },
    {
      slug: 'leather-goods',
      title: 'Leather Goods',
      description: 'Leather bags, wallets, and accessories — backpacks, a bifold wallet, and a watch storage case.',
    },
    {
      "slug": "home-fragrance",
      "title": "Home Fragrance",
      "description": "Scented candles, reed diffusers, essential oils, and diffusers for filling a room with fragrance — plus the small collection of Eau de Parfum, personal care, and candle-care accessories that round out a home-fragrance routine."
    },
    {
      "slug": "smart-displays",
      "title": "Smart Displays",
      "description": "Digital calendars, portable smart TVs, and digital photo frames for family organization, entertainment, and photo sharing."
    },
    {
      "slug": "audio",
      "title": "Audio",
      "description": "In-ear monitors, desktop and portable DACs/amps, digital audio players, upgrade cables, and eartips — for listeners building a personal audio setup, from budget hybrids to flagship tribrid IEMs and reference-grade desktop DACs."
    },
    {
      "slug": "wall-decor",
      "title": "Wall Decor",
      "description": "Vinyl wall decals, stickers, and wall art quotes — nursery decor, personalised name decals, monograms, and removable art prints for bedrooms, nurseries, and living spaces."
    },
    {
      "slug": "travel-bags",
      "title": "Travel Bags",
      "description": "Carry-on duffels, backpacks, and travel organization gear built to pack efficiently and avoid checked-baggage fees."
    },
    {
      "slug": "watches",
      "title": "Watches",
      "description": "Mechanical, automatic, and quartz watches in titanium, bronze, and stainless steel — field, dive, dress, and complication watches from an independent manufacturer with its own assembly plant."
    },
    {
      "slug": "vr-accessories",
      "title": "VR Accessories",
      "description": "Head straps, facial interfaces, controller grips, charging docks, carrying cases, and lenses for VR headsets including Meta Quest, PICO, Valve Index, and Ray-Ban Meta."
    },
    {
      "slug": "weighted-blankets",
      "title": "Weighted Blankets",
      "description": "Weighted blankets for adults and kids in chenille, minky, cotton, and flannel fabrics, designed for deep pressure therapy and better sleep."
    },
    {
      "slug": "electric-bikes",
      "title": "Electric Bikes",
      "description": "Electric bikes (e-bikes) for commuting, folding, fat-tire, and full-suspension riding — pedal-assist models with hub or mid-drive motors, removable batteries, and a range of frame styles."
    },
    {
      "slug": "e-ink-tablets",
      "title": "E-Ink Tablets",
      "description": "E Ink note-taking tablets and e-readers with paper-like displays — stylus-driven writing tablets and distraction-free Android e-readers for reading, handwriting, and PDF markup."
    },
  ],
  occasions: [
    {
      "slug": "christmas",
      "title": "Christmas",
      "description": "Gift guides for the December holiday season.",
      "startMonth": 11,
      "endMonth": 12
    },
    {
      "slug": "mothers-day",
      "title": "Mother's Day",
      "description": "Gift ideas for Mother's Day.",
      "startMonth": 4,
      "endMonth": 5
    },
    {
      "slug": "valentines-day",
      "title": "Valentine's Day",
      "description": "Gift ideas for Valentine's Day.",
      "startMonth": 1,
      "endMonth": 2
    },
    {
      "slug": "back-to-school",
      "title": "Back to School",
      "description": "Supplies and gear for the back-to-school season.",
      "startMonth": 7,
      "endMonth": 9
    },
    {
      "slug": "black-friday",
      "title": "Black Friday",
      "description": "Deal-hunting picks for Black Friday and Cyber Monday.",
      "startMonth": 10,
      "endMonth": 11
    }
  ],
  brands: [
    {
      slug: 'luke-case',
      name: 'Luke Case',
      website: 'https://www.lukecase.com',
    },
    {
      "slug": "vaucluse-fragrance",
      "name": "Vaucluse Fragrance",
      "website": "https://vauclusefragrance.com",
      "description": "Hong Kong-based home fragrance brand — scented candles, reed diffusers, essential oils, diffusers, and two Eau de Parfum."
    },
    {
      "slug": "apolosign",
      "name": "ApoloSign",
      "website": "https://www.apolosign.com",
      "description": "Manufacturer of smart display devices — digital calendars, portable smart TVs, and digital photo frames."
    },
    {
      "slug": "moondrop",
      "name": "Moondrop"
    },
    {
      "slug": "7hz",
      "name": "7Hz"
    },
    {
      "slug": "thieaudio",
      "name": "ThieAudio"
    },
    {
      "slug": "kiwi-ears",
      "name": "Kiwi Ears"
    },
    {
      "slug": "kz",
      "name": "KZ"
    },
    {
      "slug": "dunu",
      "name": "DUNU"
    },
    {
      "slug": "cca",
      "name": "CCA"
    },
    {
      "slug": "unique-melody",
      "name": "Unique Melody"
    },
    {
      "slug": "trn",
      "name": "TRN"
    },
    {
      "slug": "smsl",
      "name": "SMSL"
    },
    {
      "slug": "topping",
      "name": "Topping"
    },
    {
      "slug": "gustard",
      "name": "Gustard"
    },
    {
      "slug": "shanling",
      "name": "Shanling"
    },
    {
      "slug": "ddhifi",
      "name": "DDHiFi"
    },
    {
      "slug": "e1da",
      "name": "E1DA"
    },
    {
      "slug": "azla",
      "name": "AZLA"
    },
    {
      "slug": "quotemywall",
      "name": "QuoteMyWall",
      "website": "https://www.quotemywall.co.uk",
      "description": "UK-based designer and manufacturer of vinyl wall stickers and decals — made to order in-house from branded vinyl using their own vinyl cutters, UV printers, and Roland printers."
    },
    {
      "slug": "jennibag",
      "name": "JenniBag",
      "website": "https://jennibag.com",
      "description": "Travel bag brand (operated by JOINTANDJOYCO PTE. LTD.) built around the Jenni Travel Bag carry-on duffel and a matching backpack, sold with a 60-day order-protection guarantee."
    },
    {
      "slug": "boderry",
      "name": "Boderry",
      "website": "https://www.boderry.com",
      "description": "Watch brand founded 2019 that designs and assembles its own mechanical, automatic, and quartz watches in-house at its own assembly plant — titanium and bronze cases with Japanese and Swiss movements, sold direct-to-consumer."
    },
    {
      "slug": "sangamon-watch-company",
      "name": "Sangamon Watch Company",
      "website": "https://sangamonwatches.com",
      "description": "US watch brand based in Springfield, IL that designs history-themed commemorative watches (WWII, Route 66, Abraham Lincoln, and other American history subjects), with several lines hand-assembled and tested locally, sold direct-to-consumer."
    },
    {
      "slug": "amvr",
      "name": "AMVR",
      "website": "https://www.amvrshop.com",
      "description": "Third-party VR accessory brand that designs head straps, facial interfaces, controller grips, charging docks, and lenses for Meta Quest, PICO, HP Reverb, and Ray-Ban Meta, sold direct-to-consumer."
    },
    {
      "slug": "magic-weighted-blanket",
      "name": "Magic Weighted Blanket",
      "website": "https://magicweightedblanket.com",
      "description": "US weighted blanket brand (vendor states made in the USA, over 25 years in business) selling chenille, minky, cotton, and flannel weighted blankets for adults and kids, direct-to-consumer."
    },
    {
      "slug": "tevise",
      "name": "TEVISE",
      "description": "Budget watch brand known for open-heart and skeleton automatic mechanical watches."
    },
    {
      "slug": "winner",
      "name": "Winner",
      "description": "Watch brand known for low-cost skeleton hand-wound (manual mechanical) watches."
    },
    {
      "slug": "naviforce",
      "name": "NAVIFORCE",
      "description": "Watch brand known for multifunction analog-digital sport and business watches."
    },
    {
      "slug": "boamigo",
      "name": "BOAMIGO",
      "description": "Sport-watch brand known for analog-digital and LED military-style watches."
    },
    {
      "slug": "benyar",
      "name": "Benyar",
      "description": "Watch brand known for pilot- and business-style quartz and chronograph watches."
    },
    {
      "slug": "olevs",
      "name": "OLEVS",
      "description": "Watch brand known for affordable luminous quartz and automatic dress watches."
    },
    {
      "slug": "nibosi",
      "name": "NIBOSI",
      "description": "Watch brand known for slim quartz business watches with mesh straps."
    },
    {
      "slug": "curren",
      "name": "CURREN",
      "description": "Watch brand known for affordable quartz dress and fashion watches for men and women."
    },
    {
      "slug": "skmei",
      "name": "SKMEI",
      "description": "Watch brand known for affordable digital and sport watches, including kids' models."
    },
    {
      "slug": "engwe",
      "name": "Engwe",
      "website": "https://engwe.com",
      "description": "Electric bike brand selling folding, fat-tire, commuter, and full-suspension e-bikes direct to consumers, with a focus on the EU market."
    },
    {
      "slug": "viwoods",
      "name": "Viwoods",
      "website": "https://viwoods.com",
      "description": "E Ink device brand making the AiPaper line of paper-like note-taking tablets and Android e-readers with stylus support."
    },
    {
      "slug": "donovan-watches",
      "name": "Donovan Watches",
      "website": "https://donovanwatches.com",
      "description": "Direct-to-consumer fashion watch brand making minimalist, chronograph, and marble-dial quartz watches with interchangeable straps."
    },
  ],
  retailers: [
    {
      slug: 'stationerypal',
      name: 'StationeryPal',
      couponCode: 'DNAFFTEAM',
      couponDiscountPercent: 16,
      trackingParam: 'ref=nnsfaquk',
    },
    {
      slug: 'lukecase',
      name: 'LukeCase',
      trackingParam: 'ref=wurkrafk',
    },
    {
      "slug": "vaucluse-fragrance",
      "name": "Vaucluse Fragrance",
      "network": "UpPromote",
      "trackingParam": "sca_ref=11888462.T1kcGC2Rqh&utm_source=uppromote&utm_medium=cpc&utm_campaign=affiliate&utm_term=join-now&utm_content=fragrance"
    },
    {
      "slug": "apolosign",
      "name": "ApoloSign",
      "network": "ShareASale",
      "trackingParam": "sca_ref=11887385.U0CbrIZzctnywNQ"
    },
    {
      "slug": "linsoul-audio",
      "name": "Linsoul Audio",
      "network": "UpPromote",
      "trackingParam": "sca_ref=11887033.CvqDbUPN0z"
    },
    {
      "slug": "quotemywall",
      "name": "QuoteMyWall",
      "network": "UpPromote",
      "trackingParam": "sca_ref=11973561.ns0Bvot2Xz"
    },
    {
      "slug": "jennibag",
      "name": "JenniBag",
      "network": "UpPromote",
      "trackingParam": "sca_ref=10497646.hyD22t1MYAOMp9F4"
    },
    {
      "slug": "boderry",
      "name": "Boderry",
      "trackingParam": "ref=ibxxezxd"
    },
    {
      "slug": "sangamon-watches",
      "name": "Sangamon Watches",
      "trackingParam": "ref=hhdkhvqw"
    },
    {
      "slug": "amvr-shop",
      "name": "AMVR Shop",
      "trackingParam": "ref=gqgjvwdc"
    },
    {
      "slug": "magic-weighted-blanket",
      "name": "Magic Weighted Blanket",
      "trackingParam": "sca_ref=12021948.z10JlD30xE"
    },
    {
      "slug": "burayidi",
      "name": "Burayidi",
      "trackingParam": "sca_ref=11976618.lyY6SAnvjvMNqcO"
    },
    {
      "slug": "engwe",
      "name": "Engwe",
      "trackingParam": "ref=TEAMAFFDANANG"
    },
    {
      "slug": "viwoods",
      "name": "Viwoods",
      "trackingParam": "ref=DNAFFTEAM"
    },
    {
      "slug": "donovan-watches",
      "name": "Donovan Watches",
      "trackingParam": "sca_ref=12029186.EYIMPukPjU"
    },
  ],
  authors: [],
  products: [
    {
      slug: 'stationery-pal-gift-card',
      title: 'Stationery Pal Gift Card',
      excerpt:
        'Give the gift of choice with a Stationery Pal gift card — delivered by email, no processing fees, never expires.',
      description:
        'Shopping for someone else but not sure what to give them? Give them the gift of choice with a Stationery Pal gift card. Gift cards are delivered by email and contain instructions to redeem them at checkout. Our gift cards have no additional processing fees and never expire.',
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/products/Artboard1.png?v=1640326523'],
      officialUrl: 'https://stationerypal.com/products/stationery-pal-gift-card',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/stationery-pal-gift-card',
          price: 10,
        },
      ],
      publish: true,
    },
    {
      slug: 'kokuyo-mag-critz-neo-pencil-case-light-blue',
      title: 'Kokuyo Mag CRITZ NEO Pencil Case - Light Blue',
      bestPickLabel: 'best-budget',
      excerpt: 'A 2-in-1 expandable pen case from Kokuyo\'s Mag CRITZ NEO line — converts between a magnetic pencil stand and a roomier pouch, and doubles as a phone stand.',
      description: 'This 2-in-1 organizer converts between a magnetic pencil stand case and an expandable pouch with more room for stationery. It also works as a phone stand. Made from textile fabric.',
      bestFor: 'Desk organizers who want one case that switches between a compact stand and a bigger pouch.',
      pros: ['Converts between a compact stand and an expandable pouch', 'Doubles as a phone stand', 'Lightweight at 127g'],
      cons: ['Soft textile construction, not a rigid hard-shell case'],
      specifications: [
        { label: 'Dimensions', value: '90mm x 75mm x 175mm' },
        { label: 'Weight', value: '127g' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/KokuyoMagCRITZNEOPencilCase-LightBlue_4.png?v=1743133162&width=1920'],
      officialUrl: 'https://stationerypal.com/products/kokuyo-mag-critz-neo-pencil-case-light-blue',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/kokuyo-mag-critz-neo-pencil-case-light-blue',
          price: 12.09,
        },
      ],
      publish: true,
    },
    {
      slug: 'pizza-novelty-pencil-case',
      title: 'Pizza Novelty Pencil Case',
      excerpt: 'A pizza-shaped novelty pencil case (22cm diameter) made from canvas, with elastic slots to hold pens and pencils in place.',
      description: 'A circular novelty case shaped like a pizza, with a printed pepperoni-and-cheese design. Made from canvas with elastic slots to keep pens and pencils secured in place.',
      bestFor: 'Kids or stationery collectors who want a novelty-shaped case rather than a standard rectangular pouch.',
      pros: ['Novelty shape stands out from standard pencil cases', 'Elastic slots keep items secured in place', 'Lightweight canvas construction (32g)'],
      cons: ['Round novelty shape holds fewer items than a standard rectangular case'],
      specifications: [
        { label: 'Material', value: 'Canvas' },
        { label: 'Size', value: '22cm diameter' },
        { label: 'Weight', value: '32g' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/PizzaNoveltyPencilCase_3.png?v=1722594287&width=1920'],
      officialUrl: 'https://stationerypal.com/products/pizza-novelty-pencil-case',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/pizza-novelty-pencil-case',
          price: 2.48,
        },
      ],
      publish: true,
    },
    {
      slug: 'burrito-roll-novelty-pencil-case',
      title: 'Burrito Roll Novelty Pencil Case',
      excerpt: 'A burrito-shaped novelty pencil case made from canvas, with elastic slots to hold pens and pencils in place.',
      description: 'A novelty case shaped like a rolled burrito or tortilla. Made from canvas with elastic slots to keep pens, pencils, and other small items secure. Can also double as a makeup case or charging-cable organizer.',
      bestFor: 'Kids or stationery collectors who want a novelty-shaped case rather than a standard rectangular pouch.',
      pros: ['Novelty shape stands out from standard pencil cases', 'Elastic slots keep items secured in place', 'Doubles as a makeup or cable organizer'],
      cons: ['Rolled novelty shape holds fewer items than a standard rectangular case'],
      specifications: [
        { label: 'Material', value: 'Canvas' },
        { label: 'Size', value: '22cm diameter' },
        { label: 'Weight', value: '32g' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/BurritoRollNoveltyPencilCase_7.png?v=1722594489&width=1920'],
      officialUrl: 'https://stationerypal.com/products/burrito-roll-novelty-pencil-case',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/burrito-roll-novelty-pencil-case',
          price: 2.13,
        },
      ],
      publish: true,
    },
    {
      slug: 'elastic-band-pen-pouch-pink',
      title: 'Elastic Band Pen Pouch - Pink',
      excerpt: 'A slim pen pouch with an elastic band for attaching directly to a notebook cover.',
      description: 'A slim pouch with an elastic band that attaches directly to a notebook, for carrying a few essential pens or pencils without a separate case.',
      bestFor: 'Notebook users who want to carry a couple of pens without a separate case.',
      pros: ['Elastic band attaches directly to a notebook, no separate case needed', 'Slim, low-profile size'],
      cons: ['Holds only a few items, not a full pen or pencil collection'],
      specifications: [
        { label: 'Size', value: '170mm x 35mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ElasticBandPenPouch-Pink.png?v=1704866878&width=1920'],
      officialUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-pink',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-pink',
          price: 1.32,
        },
      ],
      publish: true,
    },
    {
      slug: 'elastic-band-pen-pouch-white',
      title: 'Elastic Band Pen Pouch - White',
      excerpt: 'A slim pen pouch with an elastic band for attaching directly to a notebook cover.',
      description: 'A slim pouch with an elastic band that attaches directly to a notebook, for carrying a few essential pens or pencils without a separate case.',
      bestFor: 'Notebook users who want to carry a couple of pens without a separate case.',
      pros: ['Elastic band attaches directly to a notebook, no separate case needed', 'Slim, low-profile size'],
      cons: ['Holds only a few items, not a full pen or pencil collection'],
      specifications: [
        { label: 'Size', value: '170mm x 35mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ElasticBandPenPouch-White.png?v=1704866571&width=1920'],
      officialUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-white',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-white',
          price: 1.32,
        },
      ],
      publish: true,
    },
    {
      slug: 'elastic-band-pen-pouch-black',
      title: 'Elastic Band Pen Pouch - Black',
      excerpt: 'A slim pen pouch with an elastic band for attaching directly to a notebook cover.',
      description: 'A slim pouch with an elastic band that attaches directly to a notebook, for carrying a few essential pens or pencils without a separate case.',
      bestFor: 'Notebook users who want to carry a couple of pens without a separate case.',
      pros: ['Elastic band attaches directly to a notebook, no separate case needed', 'Slim, low-profile size'],
      cons: ['Holds only a few items, not a full pen or pencil collection'],
      specifications: [
        { label: 'Size', value: '170mm x 35mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ElasticBandPenPouch-Black.png?v=1704866479&width=1920'],
      officialUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-black',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/elastic-band-pen-pouch-black',
          price: 1.32,
        },
      ],
      publish: true,
    },
    {
      slug: 'zipper-pen-pouch-black',
      title: 'Zipper Pen Pouch - Black',
      excerpt: 'A flat pen pouch styled as a cartoon monster face — unzipped it lies flat, zipped it holds pens and pencils.',
      description: 'A pen pouch styled as a cartoon monster face. Fully unzipped it lays flat as a cloth piece; zipped up it holds pens, pencils, and small items.',
      bestFor: 'Kids or anyone who wants a novelty-shaped pouch instead of a plain rectangular case.',
      pros: ['Lies flat when unzipped', 'Novelty monster-face design'],
      cons: ['Smaller than a standard rectangular pencil case'],
      specifications: [
        { label: 'Size', value: '205mm x 85mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ZipperPenPouch-Black.png?v=1704435566&width=1920'],
      officialUrl: 'https://stationerypal.com/products/zipper-pen-pouch-black',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/zipper-pen-pouch-black',
          price: 3.65,
        },
      ],
      publish: true,
    },
    {
      slug: 'kokuyo-pouch-type-panda-pencil-case-yellow',
      title: 'Kokuyo Pouch Type Panda Pencil Case - Yellow',
      excerpt: 'A large-capacity canvas pencil case with a panda print, an L-shaped zipper opening, an outer pocket, and a side carry handle.',
      description: 'A canvas pencil case with a panda design and an L-shaped zipper opening for easy access to the main compartment. It includes an outer pocket for small items and notes, plus a side handle for carrying.',
      bestFor: 'Students who want a large-capacity case with a dedicated outer pocket for small items.',
      pros: ['L-shaped zipper opening for easy access', 'Separate outer pocket keeps small items organized', 'Side handle makes it easy to carry'],
      cons: ['Canvas construction offers less structure than a hard case'],
      specifications: [
        { label: 'Size', value: '200mm x 100mm x 45mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/KokuyoPouchTypePandaPencilCase-Yellow.png?v=1699864421&width=1920'],
      officialUrl: 'https://stationerypal.com/products/kokuyo-pouch-type-panda-pencil-case-yellow',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/kokuyo-pouch-type-panda-pencil-case-yellow',
          price: 5.21,
        },
      ],
      publish: true,
    },
    {
      slug: 'multi-functional-dual-zippered-pencil-case-cherry-blossom',
      title: 'Multi-functional Dual-Zippered Pencil Case - Cherry Blossom',
      excerpt: 'A dual-compartment pencil case with two main zippered sections plus a smaller front zip pocket for small items.',
      description: 'A pencil case with two spacious zippered compartments for stationery, plus a smaller zip pocket on the front for small items like erasers and paper clips.',
      bestFor: 'Students or professionals who want more than one compartment to separate stationery types.',
      pros: ['Two main compartments plus a dedicated small-items pocket', 'Smooth zippers on all compartments'],
      cons: ['Fixed size, not expandable for extra capacity'],
      specifications: [
        { label: 'Size', value: '210mm x 90mm x 55mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Multi-functionalDual-ZipperedPencilCase-CherryBlossom.png?v=1693210574&width=1920'],
      officialUrl: 'https://stationerypal.com/products/multi-functional-dual-zippered-pencil-case-cherry-blossom',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/multi-functional-dual-zippered-pencil-case-cherry-blossom',
          price: 5.87,
        },
      ],
      publish: true,
    },
    {
      slug: 'multi-functional-dual-zippered-pencil-case-burgundy-red',
      title: 'Multi-functional Dual-Zippered Pencil Case - Burgundy Red',
      excerpt: 'A dual-compartment pencil case with two main zippered sections plus a smaller front zip pocket for small items.',
      description: 'A pencil case with two spacious zippered compartments for stationery, plus a smaller zip pocket on the front for small items like erasers and paper clips.',
      bestFor: 'Students or professionals who want more than one compartment to separate stationery types.',
      pros: ['Two main compartments plus a dedicated small-items pocket', 'Smooth zippers on all compartments'],
      cons: ['Fixed size, not expandable for extra capacity'],
      specifications: [
        { label: 'Size', value: '210mm x 90mm x 55mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Multi-functionalDual-ZipperedPencilCase-BurgundyRed.png?v=1693210672&width=1920'],
      officialUrl: 'https://stationerypal.com/products/multi-functional-dual-zippered-pencil-case-burgundy-red',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/multi-functional-dual-zippered-pencil-case-burgundy-red',
          price: 5.87,
        },
      ],
      publish: true,
    },
    {
      slug: 'classic-large-pencil-case-pink',
      title: 'Classic Large Pencil Case - Pink',
      excerpt: 'A large pencil case holding roughly 30-50 pens or pencils, with a main compartment, a separate compartment for notes/cards, and a protective interlayer.',
      description: 'A large-capacity case that holds roughly 30-50 pens or pencils, with a shape that also accommodates a calculator or ruler. The main compartment is see-through for a clear view of contents, with a separate compartment for small notes and cards, plus an interlayer for extra protection. Can also be used as a travel or cosmetics bag.',
      bestFor: 'Anyone who wants one case to hold a large pen or pencil collection plus a calculator or ruler.',
      pros: ['Holds roughly 30-50 pens or pencils', 'See-through main compartment for a clear view of contents', 'Separate notes/cards compartment plus a protective interlayer'],
      cons: ['Large size may not fit smaller bags or drawers'],
      specifications: [
        { label: 'Size', value: '90mm x 220mm x 130mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ClassicLargePencilCase-Pink_5.png?v=1691574665&width=1920'],
      officialUrl: 'https://stationerypal.com/products/classic-large-pencil-case-pink',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/classic-large-pencil-case-pink',
          price: 8.36,
        },
      ],
      publish: true,
    },
    {
      slug: 'classic-large-pencil-case-green',
      title: 'Classic Large Pencil Case - Green',
      excerpt: 'A large pencil case holding roughly 30-50 pens or pencils, with a main compartment, a separate compartment for notes/cards, and a protective interlayer.',
      description: 'A large-capacity case that holds roughly 30-50 pens or pencils, with a shape that also accommodates a calculator or ruler. The main compartment is see-through for a clear view of contents, with a separate compartment for small notes and cards, plus an interlayer for extra protection. Can also be used as a travel or cosmetics bag.',
      bestFor: 'Anyone who wants one case to hold a large pen or pencil collection plus a calculator or ruler.',
      pros: ['Holds roughly 30-50 pens or pencils', 'See-through main compartment for a clear view of contents', 'Separate notes/cards compartment plus a protective interlayer'],
      cons: ['Large size may not fit smaller bags or drawers'],
      specifications: [
        { label: 'Size', value: '90mm x 220mm x 130mm' },
      ],
      categorySlugs: ['bags-cases'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/ClassicLargePencilCase-Green_5.png?v=1691574639&width=1920'],
      officialUrl: 'https://stationerypal.com/products/classic-large-pencil-case-green',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/classic-large-pencil-case-green',
          price: 8.36,
        },
      ],
      publish: true,
    },
    {
      slug: 'miniso-x-harry-potter-magic-mirror-blind-box-cute-wizard-pet-figures',
      title: 'MINISO x Harry Potter Magic Mirror Blind Box — Wizard & Pet Figures',
      excerpt: 'A Harry Potter blind box using a lenticular mirror effect — the figure shows the wizard from the front and their pet from the side. 6 regular designs plus 1 secret design at a 1-in-72 rate.',
      description: 'Each box contains a half-figure paired with a lenticular mirror insert: viewed from the front it shows one of six Harry Potter characters, and turned to the side the mirror reveals their signature pet or companion instead.\nThe six regular designs are Harry Potter & Hedwig, Hermione Granger & Crookshanks, Ron Weasley & Scabbers, Draco Malfoy as the white ferret, Rubeus Hagrid & Fang, and Albus Dumbledore & Fawkes. A secret variant (Harry & Hedwig, with Hedwig wearing a small scarf) has a 1-in-72 pull rate.\nSold as a single blind box or a full set of 6. The full set guarantees six different regular figures with no duplicates — unless the secret figure is pulled, in which case it replaces one of the six.',
      bestFor: 'Harry Potter fans who want a collectible desk figure and don\'t mind not knowing which character they\'ll get.',
      pros: ['Lenticular mirror gimmick gives two views in one figure', 'Full-set purchase guarantees no duplicate regular designs', 'Officially licensed Harry Potter x Miniso crossover'],
      cons: ['Secret design has a low 1-in-72 pull rate', 'Single blind box purchases can still duplicate designs'],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/stationerypal_harrpotter_magic_house_miniso_9.webp?v=1784868841&width=1920'],
      officialUrl: 'https://stationerypal.com/products/%E2%9A%A1-miniso-x-harry-potter-magic-mirror-blind-box-cute-wizard-pet-figures-%E2%9C%A8',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/%E2%9A%A1-miniso-x-harry-potter-magic-mirror-blind-box-cute-wizard-pet-figures-%E2%9C%A8',
          price: 19,
        },
      ],
      publish: true,
    },
    {
      slug: 'diy-paintable-mecha-chameleon-little-guy-figures-set-of-8-3d-printed-cute-desk-p',
      title: 'DIY Paintable "Mecha Chameleon" Little Guy Figures (Set of 8) | 3D Printed Cute Desk Pets & Blank Canvas Toys for TikTok Hide-and-Seek',
      excerpt: 'A set of 8 blank 3D-printed figures (about 3.1 inches tall) meant to be hand-painted or customized, in 8 different poses.',
      description: 'A set of 8 blank, white 3D-printed figures in 8 different poses — standing, lying on side, holding head, spread eagle, hands raised, curled up, bending over, and sitting — meant to be painted or customized with markers, paint, or gel pens.\nEach standing figure measures about 3.1 inches tall, made from a matte-white 3D-printed resin/filament finish designed to hold paint.',
      bestFor: 'Anyone who wants a blank desk figure to paint or customize themselves, rather than a pre-finished collectible.',
      pros: ['Blank canvas design lets you fully customize each figure', '8 different poses in one set', 'Compact size (about 3.1 inches) for a desk'],
      cons: ['Ships unpainted — paint, markers, or other materials aren\'t included'],
      specifications: [
        { label: 'Height', value: 'About 3.1 inches (standing pose)' },
        { label: 'Material', value: '3D-printed resin/filament, matte white finish' },
        { label: 'Included poses', value: '8 (standing, lying on side, holding head, spread eagle, hands raised, curled up, bending over, sitting)' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/DIYPaintableMechaChameleonLittleGuy_4.jpg?v=1783076314&width=1920'],
      officialUrl: 'https://stationerypal.com/products/diy-paintable-mecha-chameleon-little-guy-figures-set-of-8-3d-printed-cute-desk-pets-blank-canvas-toys-for-tiktok-hide-and-seek',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/diy-paintable-mecha-chameleon-little-guy-figures-set-of-8-3d-printed-cute-desk-pets-blank-canvas-toys-for-tiktok-hide-and-seek',
          price: 9.99,
        },
      ],
      publish: true,
    },
    {
      slug: 'arknights-endfield-gugugaga-gugu-series-kawaii-plushies-charms-starting-from-1-5',
      title: 'Arknights: Endfield "Gugugaga" Gugu Series — Plushies & Charms',
      excerpt: 'Plush, figure, and charm merchandise based on the "Gugugaga" mascot from Arknights: Endfield, in four size and format options from $1.50 charms to a 35cm plush.',
      description: 'Merchandise based on the "Gugugaga" mascot from Arknights: Endfield, available in four formats: a 25cm plush, a 35cm plush, a figure set (pack of 2), and $1.50 items — a plush keychain or one of four acrylic charm designs (A/B/C/D).\nPlushies use a soft plush fabric; the charms are clear acrylic.',
      bestFor: 'Arknights: Endfield fans who want a low-cost way to try the merch line before committing to a full-size plush.',
      pros: ['Wide price range, from $1.50 charms to a 35cm plush', 'Officially licensed Arknights: Endfield merchandise'],
      cons: ['Acrylic charm design (A/B/C/D) isn\'t specified or guaranteed at checkout'],
      specifications: [
        { label: 'Gugu Plush (25cm / 9.8")', value: '$11.00' },
        { label: 'Gugu Plush (35cm / 13.8")', value: '$14.30' },
        { label: 'Gugu Figure Set (Pack of 2)', value: '$11.00' },
        { label: 'Plush Gugu Keychain', value: '$1.50' },
        { label: 'Acrylic Charm (Design A/B/C/D)', value: '$1.50 each' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Arknights_Endfield_Gugugaga_8.png?v=1775122265&width=1920'],
      officialUrl: 'https://stationerypal.com/products/arknights-endfield-gugugaga-gugu-series-%F0%9F%90%A7-kawaii-plushies-charms-starting-from-1-50-%E2%9C%A8',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/arknights-endfield-gugugaga-gugu-series-%F0%9F%90%A7-kawaii-plushies-charms-starting-from-1-50-%E2%9C%A8',
          price: 11,
        },
      ],
      publish: true,
    },
    {
      slug: '2026-new-full-set-zebra-mildliner-mix-dual-color-highlighters-set-of-10-new-aest',
      title: 'Zebra Mildliner Mix Dual-Color Highlighters - Set of 10 Gradient Shades',
      excerpt: 'A set of 10 dual-color Zebra Mildliner highlighters, each with a split-ink chisel tip that blends two shades into a gradient in one stroke.',
      description: 'Each highlighter in this 10-piece set uses a split-ink chisel tip that lays down two complementary shades in a single stroke, creating a two-tone gradient without switching pens. The ink is Zebra\'s water-based Mildliner pigment, designed to be low-bleed on standard notebook paper.\nThe chisel tip works as a broad highlighter on one side and a fine edge for underlining on the other. Each pen is single-ended — one tip per pen. The set includes 10 shade combinations across pastel and muted tones.',
      bestFor: 'Note-takers and planner users who want a two-tone gradient effect without owning two separate highlighters.',
      pros: ['Split-ink chisel tip creates a two-tone gradient in a single stroke', 'Water-based ink designed to be low-bleed on standard paper', 'Chisel tip works for both broad highlighting and fine underlining'],
      cons: ['Single-ended design — only one tip per pen, unlike double-ended highlighters'],
      specifications: [
        { label: 'Set size', value: '10 highlighters' },
        { label: 'Ink', value: 'Zebra Mildliner water-based pigment ink' },
        { label: 'Tip', value: 'Dual-color split-ink chisel tip' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Gemini_Generated_Image_phsh3xphsh3xphsh.png?v=1774868281&width=1920'],
      officialUrl: 'https://stationerypal.com/products/2026-new-zebra-mildliner-mix-dual-color-highlighters-10-new-aesthetic-gradient-shades',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/2026-new-zebra-mildliner-mix-dual-color-highlighters-10-new-aesthetic-gradient-shades',
          price: 21.8,
        },
      ],
      publish: true,
    },
    {
      slug: 'cute-mahjong-tile-game-sanrio-labubu-italian-brainrot-edition',
      title: 'Cute Mahjong Tile Game – Sanrio & Labubu Italian Brainrot Edition',
      excerpt: 'A 2-player tile-matching game with 48 tiles, available in a Sanrio theme or a Labubu "Italian Brainrot" meme theme.',
      description: 'A 2-player matching game with 48 tiles, sold in two character themes: a Sanrio edition and a Labubu "Italian Brainrot" meme-themed edition.\nPlayers place tiles face down and take turns flipping them. A tile matching your own side stays with you; a tile matching your opponent\'s side goes to them.',
      bestFor: 'Sanrio or Labubu fans who want a quick, luck-based 2-player game rather than a strategy game.',
      pros: ['Simple rules, playable by kids through adults', 'Two theme options (Sanrio or Labubu) to choose from'],
      cons: ['Outcome is luck-based, with no skill or strategy component'],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/7.jpg?v=1773214071&width=1920'],
      officialUrl: 'https://stationerypal.com/products/cute-mahjong-tile-game-sanrio-labubu-italian-brainrot-edition',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/cute-mahjong-tile-game-sanrio-labubu-italian-brainrot-edition',
          price: 42,
        },
      ],
      publish: true,
    },
    {
      slug: 'montessori-rainbow-color-sorting-counting-toy-abacus-style-learning-toy',
      title: 'Montessori Rainbow Color Sorting & Counting Toy (Abacus Style Learning Toy)',
      excerpt: 'A wooden bead-sorting and counting toy for teaching color matching, counting, and simple math — also positioned as a fine-motor activity for seniors.',
      description: 'A wooden toy for practicing color matching, counting, and simple sorting: kids stack and match colored beads while building patterns. The same matching-and-sorting activity is also positioned as a fine-motor and focus exercise for seniors, including in memory-care settings.\nSuited to preschool learning, Montessori-style classroom activities, and home use across age groups.',
      bestFor: 'Parents or educators wanting a simple color and counting toy usable across generations, from preschoolers to seniors.',
      pros: ['Works for multiple age groups and settings (preschool, classroom, seniors)', 'Bright colors make the matching activity easy to follow', 'Encourages fine-motor practice through bead handling'],
      cons: ['No specific recommended age range stated by the manufacturer'],
      bestPickLabel: 'best-for-beginners',
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/4.jpg?v=1773211682&width=1920'],
      officialUrl: 'https://stationerypal.com/products/montessori-rainbow-color-sorting-counting-toy-abacus-style-learning-toy',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/montessori-rainbow-color-sorting-counting-toy-abacus-style-learning-toy',
          price: 15,
        },
      ],
      publish: true,
    },
    {
      slug: 'cloud-lamp-diy-kit-create-your-own-dreamy-led-cloud-light',
      title: 'Cloud Lamp DIY Kit – Create Your Own Dreamy LED Cloud Light',
      excerpt: 'A DIY kit for building a cloud-shaped LED light from a die-cut shape, LED strip, and cotton filling — available in 400cm or 800cm LED strip lengths.',
      description: 'A DIY kit for building your own cloud-shaped LED light. You supply the cardboard or foam board to cut the shape; the kit provides the LED strip, cotton filling, and adhesive tape to assemble it.\nIncluded: a USB-powered LED strip (400cm or 800cm length options), cotton filling, and 2 rolls of adhesive tape. You\'ll need your own cardboard or foam board and scissors; a glue gun is optional for more complex shapes.\nThe 400cm kit suits a desk, bedside, or wall-mounted cloud (roughly A3-A2 sized). The 800cm kit suits a ceiling or room-corner installation (roughly 1-1.5m wide). The light is USB-powered, works with power banks, adapters, or a computer, and has multiple color modes. No soldering or wiring is required.',
      bestFor: 'DIY hobbyists who want to build a custom-shaped ambient light rather than buy a pre-made lamp.',
      pros: ['No soldering or wiring required', 'Two size options (400cm/800cm) for different room setups', 'USB-powered, works with power banks or adapters'],
      cons: ['You supply your own cardboard/foam board and scissors — not included', 'Final size and shape depend on your own cutting and assembly'],
      specifications: [
        { label: 'LED strip length', value: '400cm or 800cm (choose at checkout)' },
        { label: 'Power', value: 'USB' },
        { label: 'Included', value: 'LED strip, cotton filling, 2 rolls of adhesive tape' },
        { label: 'Not included', value: 'Cardboard/foam board, scissors' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/1765876957954-i28t9ho4fn.jpg?v=1765876982&width=1920'],
      officialUrl: 'https://stationerypal.com/products/cloud-lamp-diy-kit-create-your-own-dreamy-led-cloud-light',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/cloud-lamp-diy-kit-create-your-own-dreamy-led-cloud-light',
          price: 21,
        },
      ],
      publish: true,
    },
    {
      slug: 'bts-mystery-box',
      title: 'BTS Mystery Box',
      excerpt: 'You might find the following Japanese brands included in your Back To School set: Pentel, Kuretake, Pilot, Uni, Artline, Zebra, Kokuyo, MUJI Stationery items…',
      description: 'You might find the following Japanese brands included in this set:\nPentel, Kuretake, Pilot, Uni, Artline, Zebra, Kokuyo, MUJI\nStationery items included but not only: Washi Tape, Brush Pen, Gel Pen, Sticky Note, Sticker, Glue Tape, Eraser\nProbability:\n15-16 items: 60%\n17-20 items: 35%\nLimited/special edition/co-branded: 5%',
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Gemini_Generated_Image_2cies12cies12cie.png?v=1784884854&width=1920'],
      officialUrl: 'https://stationerypal.com/products/spring-sale-mystery-box',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/spring-sale-mystery-box',
          price: 18.55,
        },
      ],
      publish: true,
    },
    {
      slug: 'uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-mickey-mouse',
      title: 'Uni-ball Signo RT x Disney Gel Pen - 0.5 mm - Mickey Mouse',
      excerpt: 'A Disney-licensed 0.5mm gel pen with a Mickey Mouse design wrapped around the barrel — retractable, refillable, with a textured rubber grip.',
      description: 'A 0.5mm gel pen from Uni-ball\'s Signo RT line, in a Disney-licensed design with Mickey Mouse wrapped around the barrel. Uses Uni-ball\'s water-resistant black gel ink with a rounded 0.5mm tip and a textured rubber grip. Retractable click mechanism; refillable with standard Uni-ball gel refills.',
      bestFor: 'Disney fans who want a genuinely usable pen, not just a display collectible.',
      pros: ['Functional 0.5mm gel pen, not just a novelty item', 'Refillable with standard Uni-ball gel refills', 'Water-resistant black ink'],
      cons: ['Single ink color (black) — no color options in this design'],
      specifications: [
        { label: 'Tip size', value: '0.5mm' },
        { label: 'Ink Color', value: 'Black' },
        { label: 'Length', value: '140mm' },
        { label: 'Mechanism', value: 'Retractable click pen' },
        { label: 'Grip', value: 'Textured rubber' },
        { label: 'Refillable', value: 'Yes, standard Uni-ball gel refills' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Uni-ballSignoRTxDisneyGelPen-0.5mm-MickeyMouse_3.png?v=1752915738&width=1920'],
      officialUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-mickey-mouse',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-mickey-mouse',
          price: 4.22,
        },
      ],
      publish: true,
    },
    {
      slug: 'uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-belle',
      title: 'Uni-ball Signo RT x Disney Gel Pen - 0.5 mm - Princess Series - Belle',
      excerpt: 'A Disney Princess-licensed 0.5mm gel pen from the Princess Series, featuring Belle wrapped around the barrel — retractable, refillable, with a textured rubber grip.',
      description: 'A 0.5mm gel pen from Uni-ball\'s Signo RT line, in a Disney Princess-licensed design featuring Belle wrapped around the barrel. Uses Uni-ball\'s water-resistant black gel ink with a rounded 0.5mm tip and a textured rubber grip. Retractable click mechanism; refillable with standard Uni-ball gel refills.',
      bestFor: 'Disney Princess fans who want a genuinely usable pen, not just a display collectible.',
      pros: ['Functional 0.5mm gel pen, not just a novelty item', 'Refillable with standard Uni-ball gel refills', 'Water-resistant black ink'],
      cons: ['Single ink color (black) — no color options in this design'],
      specifications: [
        { label: 'Tip size', value: '0.5mm' },
        { label: 'Ink Color', value: 'Black' },
        { label: 'Length', value: '140mm' },
        { label: 'Mechanism', value: 'Retractable click pen' },
        { label: 'Grip', value: 'Textured rubber' },
        { label: 'Refillable', value: 'Yes, standard Uni-ball gel refills' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Uni-ballSignoRTxDisneyGelPen-0.5mm-PrincessSeries-Belle_3.png?v=1752915862&width=1920'],
      officialUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-belle',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-belle',
          price: 4.22,
        },
      ],
      publish: true,
    },
    {
      slug: 'uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-rapunzel',
      title: 'Uni-ball Signo RT x Disney Gel Pen - 0.5 mm - Princess Series - Rapunzel',
      excerpt: 'A Disney Princess-licensed 0.5mm gel pen from the Princess Series, featuring Rapunzel wrapped around the barrel — retractable, refillable, with a textured rubber grip.',
      description: 'A 0.5mm gel pen from Uni-ball\'s Signo RT line, in a Disney Princess-licensed design featuring Rapunzel wrapped around the barrel. Uses Uni-ball\'s water-resistant black gel ink with a rounded 0.5mm tip and a textured rubber grip. Retractable click mechanism; refillable with standard Uni-ball gel refills.',
      bestFor: 'Disney Princess fans who want a genuinely usable pen, not just a display collectible.',
      pros: ['Functional 0.5mm gel pen, not just a novelty item', 'Refillable with standard Uni-ball gel refills', 'Water-resistant black ink'],
      cons: ['Single ink color (black) — no color options in this design'],
      specifications: [
        { label: 'Tip size', value: '0.5mm' },
        { label: 'Ink Color', value: 'Black' },
        { label: 'Length', value: '140mm' },
        { label: 'Mechanism', value: 'Retractable click pen' },
        { label: 'Grip', value: 'Textured rubber' },
        { label: 'Refillable', value: 'Yes, standard Uni-ball gel refills' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Uni-ballSignoRTxDisneyGelPen-0.5mm-PrincessSeries-Rapunzel_3.png?v=1752915974&width=1920'],
      officialUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-rapunzel',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-rapunzel',
          price: 4.22,
        },
      ],
      publish: true,
    },
    {
      slug: 'uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-snow-white',
      title: 'Uni-ball Signo RT x Disney Gel Pen - 0.5 mm - Princess Series - Snow White',
      excerpt: 'A Disney Princess-licensed 0.5mm gel pen from the Princess Series, featuring Snow White wrapped around the barrel — retractable, refillable, with a textured rubber grip.',
      description: 'A 0.5mm gel pen from Uni-ball\'s Signo RT line, in a Disney Princess-licensed design featuring Snow White wrapped around the barrel. Uses Uni-ball\'s water-resistant black gel ink with a rounded 0.5mm tip and a textured rubber grip. Retractable click mechanism; refillable with standard Uni-ball gel refills.',
      bestFor: 'Disney Princess fans who want a genuinely usable pen, not just a display collectible.',
      pros: ['Functional 0.5mm gel pen, not just a novelty item', 'Refillable with standard Uni-ball gel refills', 'Water-resistant black ink'],
      cons: ['Single ink color (black) — no color options in this design'],
      specifications: [
        { label: 'Tip size', value: '0.5mm' },
        { label: 'Ink Color', value: 'Black' },
        { label: 'Length', value: '140mm' },
        { label: 'Mechanism', value: 'Retractable click pen' },
        { label: 'Grip', value: 'Textured rubber' },
        { label: 'Refillable', value: 'Yes, standard Uni-ball gel refills' },
      ],
      categorySlugs: ['gifts'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/Uni-ballSignoRTxDisneyGelPen-0.5mm-PrincessSeries-SnowWhite_3.png?v=1752916413&width=1920'],
      officialUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-snow-white',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/uni-ball-signo-rt-x-disney-gel-pen-0-5-mm-princess-series-snow-white',
          price: 4.22,
        },
      ],
      publish: true,
    },
    {
      slug: 'kawaii-stationery-lucky-scoop',
      title: 'Kawaii Stationery Lucky Scoop',
      excerpt: 'A mystery assortment of Sanrio-branded stationery — around 30-40 items per scoop, drawn from a pool that includes Cinnamoroll, Hello Kitty, My Melody, and Pompompurin.',
      description: 'A mystery assortment of Sanrio-branded stationery — stickers, erasers, mechanical pencils, mini notebooks, gel pens, and similar items, drawn from a pool of characters including Cinnamoroll, Hello Kitty, My Melody, and Pompompurin. Each scoop yields roughly 30-40 items.\nContents can\'t be customized and some items may repeat between scoops. The retailer records and streams each scoop live on its YouTube channel.',
      bestFor: 'Sanrio stationery fans who want a large mixed lot rather than picking individual items.',
      pros: ['High item count per purchase (about 30-40 pieces) for a fixed price', 'Scoop process is filmed and streamed, so buyers can watch it happen'],
      cons: ['Contents can\'t be customized or chosen', 'Some duplicate items are expected'],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/1_f35e3c85-c880-4476-9018-a4c788e1ecf3.png?v=1713774429&width=1920'],
      officialUrl: 'https://stationerypal.com/products/kawaii-stationery-lucky-scoop',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/kawaii-stationery-lucky-scoop',
          price: 29.08,
        },
      ],
      publish: true,
    },
    {
      slug: 'miniso-sanrio-blind-box-sweet-heart-in-pajamas',
      title: 'Miniso Sanrio Blind Box - Sweet Heart In Pajamas',
      excerpt: 'A Sanrio x Miniso blind box featuring My Melody or Kuromi in a pajama-themed collectible — 6 regular designs plus 1 hidden edition, each about 3 inches tall.',
      description: 'Each box contains one of two possible characters — My Melody or Kuromi — in a pajama-themed collectible figure, about 3 inches tall. The series has 6 regular designs plus 1 hidden edition.\nAs with any blind box, the specific design inside is unknown until opened, and the retailer does not accept refunds or returns once the product is sold.',
      bestFor: 'Sanrio collectors comfortable with the surprise-box format who want a compact My Melody or Kuromi figure.',
      pros: ['Officially licensed Sanrio x Miniso collectible', 'Compact size suits a desk or shelf'],
      cons: ['Which design you get is random, with no way to pick a specific figure', 'No refunds once purchased, per the retailer\'s policy'],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/O1CN012Fp35H26963zKU95S__3459177618.png?v=1698226403&width=1920'],
      officialUrl: 'https://stationerypal.com/products/miniso-sanrio-blind-box-sweet-heart-in-pajamas',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/miniso-sanrio-blind-box-sweet-heart-in-pajamas',
          price: 14.29,
        },
      ],
      publish: true,
    },
    {
      slug: 'miniso-sanrio-my-melody-blind-box-secret-forest-tea-party-figure',
      title: 'Miniso Sanrio My Melody Blind Box - Secret Forest Tea Party Figure',
      excerpt: 'A My Melody blind box in a forest tea-party theme — 6 regular designs plus 1 hidden edition, each figure about 3 inches tall.',
      description: 'Each box contains one of six My Melody "Secret Forest Tea Party" designs, plus a chance at 1 hidden edition. Figures stand about 3 inches tall.\nAs with any blind box, the specific design is unknown until opened, and the retailer does not accept refunds or returns once the product is sold.',
      bestFor: 'Sanrio and My Melody collectors who want a themed figure and are fine with a random pull.',
      pros: ['Officially licensed Sanrio x Miniso collectible', 'Compact size suits a desk or shelf'],
      cons: ['Which design you get is random, with no way to pick a specific figure', 'No refunds once purchased, per the retailer\'s policy'],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/O1CN01p7qt182695y83Do2r__3459177618_1.png?v=1698226498&width=1920'],
      officialUrl: 'https://stationerypal.com/products/miniso-sanrio-my-melody-blind-box-secret-forest-tea-party-figure',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/miniso-sanrio-my-melody-blind-box-secret-forest-tea-party-figure',
          price: 14.29,
        },
      ],
      publish: true,
    },
    {
      slug: 'pop-mart-blind-box-disney-princess-ralph-breaks-the-internet-series',
      title: 'Pop Mart Blind Box - Disney Princess Ralph Breaks The Internet Series',
      excerpt: 'A Pop Mart blind box based on Disney\'s "Ralph Breaks the Internet" — princesses styled in pajamas, 12 regular designs plus 1 hidden edition.',
      description: 'Each box contains one PVC/ABS figure, about 6-6.5cm tall, from the "Ralph Breaks the Internet" Disney Princess line — including Belle, Jasmine, Mulan, and other princesses styled in pajamas. The series has 12 regular designs plus 1 hidden edition.\nSold as a single blind box. The specific design is unknown until opened, and the retailer does not accept refunds or returns once the product is sold.',
      bestFor: 'Disney Princess or Pop Mart collectors building out a themed set.',
      pros: ['Officially licensed Pop Mart x Disney collectible', 'Large design pool (12 + 1 hidden) for collectors who like variety'],
      cons: ['Larger design pool means more boxes needed to complete a set', 'No refunds once purchased, per the retailer\'s policy'],
      specifications: [
        { label: 'Height', value: 'About 6-6.5cm' },
        { label: 'Material', value: 'PVC/ABS' },
      ],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/O1CN019PZEQp28zsmwWxYtL__2885348004.png?v=1698226711&width=1920'],
      officialUrl: 'https://stationerypal.com/products/pop-mart-blind-box-disney-princess-ralph-breaks-the-internet-series',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/pop-mart-blind-box-disney-princess-ralph-breaks-the-internet-series',
          price: 21.62,
        },
      ],
      publish: true,
    },
    {
      slug: 'pop-mart-blind-box-sanrio-magic-fairy-wand',
      title: 'Pop Mart Blind Box - Sanrio Magic Fairy Wand Ⅱ',
      bestPickLabel: 'best-upgrade',
      excerpt: 'A Pop Mart blind box featuring 8 Sanrio characters perched on a wand — no hidden edition, so all 8 designs have equal odds.',
      description: 'Each box contains one PVC/ABS figure, about 6-6.5cm tall, perched on a wand — one of 8 Sanrio characters: Cinnamoroll, Kuromi, My Melody, Pochacco, Pompompurin, Little Twin Stars, and Hello Kitty. The series has 8 designs with no hidden edition.\nSold as a single blind box. The specific design is unknown until opened, and the retailer does not accept refunds or returns once the product is sold.',
      bestFor: 'Sanrio collectors who want a display-ready figure without chasing a rare secret variant.',
      pros: ['No hidden or secret chase figure, so all 8 designs have equal odds', 'Wand base doubles as a display stand'],
      cons: ['Which of the 8 characters you get is random'],
      specifications: [
        { label: 'Height', value: 'About 6-6.5cm' },
        { label: 'Material', value: 'PVC/ABS' },
      ],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/O1CN015UGBSF28zsyZWX0wR__2885348004.png?v=1698226836&width=1920'],
      officialUrl: 'https://stationerypal.com/products/pop-mart-blind-box-sanrio-magic-fairy-wand-ii',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/pop-mart-blind-box-sanrio-magic-fairy-wand-ii',
          price: 21.62,
        },
      ],
      publish: true,
    },
    {
      slug: 'sanrio-characters-squishy-mascot-2-blind-box',
      title: 'Sanrio Characters Squishy Mascot 2 Blind Box',
      excerpt: 'A squishy figure blind box featuring 6 Sanrio characters — Kuromi, My Melody, Cinnamoroll, Pompompurin, Pochacco, and Hangyodon — each with its own shape.',
      description: 'Each box contains one squishy figure from a set of 6 Sanrio characters — Kuromi, My Melody, Cinnamoroll, Pompompurin, Pochacco, and Hangyodon — each with its own shape and face. The figure measures 90mm x 70mm x 55mm and can be used as a keychain or bag clip.\nWhich character you receive is not visible before opening.',
      bestFor: 'Sanrio fans who want a tactile squishy toy rather than a static display figure.',
      pros: ['Squeezable squishy material, not just a static figure', 'Compact size works as a keychain or bag charm'],
      cons: ['Which of the 6 characters you get is random'],
      specifications: [
        { label: 'Size', value: '90mm x 70mm x 55mm' },
      ],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/SanrioCharactersSquishyMascot2BlindBox.png?v=1701846906&width=1920'],
      officialUrl: 'https://stationerypal.com/products/sanrio-characters-squishy-mascot-2-blind-box',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/sanrio-characters-squishy-mascot-2-blind-box',
          price: 12.9,
        },
      ],
      publish: true,
    },
    {
      slug: 'sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-white-grip',
      title: 'Sanrio Unicorn Series Gel Pen Blind Box - 0.5 mm - Black Ink - White Grip',
      excerpt: 'A 0.5mm black-ink gel pen blind box in a unicorn theme, with one of 6 Sanrio characters and a matching bookmark included.',
      description: 'Each box contains one 0.5mm black-ink gel pen with a unicorn-themed design featuring one of six Sanrio characters — Cinnamoroll, Hello Kitty, Pochacco, Kuromi, Pompompurin, or My Melody. This variant has a white grip and includes a matching bookmark.\nWhich character design you receive is not visible before opening.',
      bestFor: 'Sanrio fans who want a usable pen alongside the character-collecting angle.',
      pros: ['Functional pen, not just a display collectible', 'Includes a bookmark at no extra cost'],
      cons: ['Which of the 6 character designs you get is random'],
      specifications: [
        { label: 'Ink Color', value: 'Black' },
        { label: 'Nib Size', value: '0.5mm' },
      ],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/SanrioUnicornSeriesGelPenBlindBox-0.5mm-BlackInk-WhiteGrip.png?v=1739156045&width=1920'],
      officialUrl: 'https://stationerypal.com/products/sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-white-grip',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-white-grip',
          price: 1.24,
        },
      ],
      publish: true,
    },
    {
      slug: 'sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-gradient-body',
      title: 'Sanrio Unicorn Series Gel Pen Blind Box - 0.5 mm - Black Ink - Gradient Body',
      excerpt: 'A 0.5mm black-ink gel pen blind box in a unicorn theme with a gradient-colored body, one of 6 Sanrio characters, and a matching bookmark included.',
      description: 'Each box contains one 0.5mm black-ink gel pen with a unicorn-themed design featuring one of six Sanrio characters — Cinnamoroll, Hello Kitty, Pochacco, Kuromi, Pompompurin, or My Melody. This variant has a gradient-colored body and includes a matching bookmark.\nWhich character design you receive is not visible before opening.',
      bestFor: 'Sanrio fans who want a usable pen alongside the character-collecting angle.',
      pros: ['Functional pen, not just a display collectible', 'Includes a bookmark at no extra cost'],
      cons: ['Which of the 6 character designs you get is random'],
      specifications: [
        { label: 'Package Size', value: '165mm x 13mm x 13mm' },
        { label: 'Pen Size', value: '143mm long' },
        { label: 'Ink Color', value: 'Black' },
        { label: 'Nib Size', value: '0.5mm' },
      ],
      categorySlugs: ['mystery-sets'],
      galleryImageUrls: ['https://stationerypal.com/cdn/shop/files/SanrioUnicornSeriesGelPenBlindBox-0.5mm-BlackInk-GradientBody.png?v=1739156007&width=1920'],
      officialUrl: 'https://stationerypal.com/products/sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-gradient-body',
      retailerLinks: [
        {
          retailerSlug: 'stationerypal',
          affiliateUrl: 'https://stationerypal.com/products/sanrio-unicorn-series-gel-pen-blind-box-0-5-mm-black-ink-gradient-body',
          price: 1.24,
        },
      ],
      publish: true,
    },
    {
      slug: 'mens-leather-backpack-156-laptop-compartment',
      title: "Men's Leather Backpack with 15.6 Inches Laptop Compartment",
      excerpt:
        'A full-grain vegetable-tanned leather backpack with a padded 15.6-inch laptop compartment, roughly 20L of capacity, and a hidden rear pocket for valuables.',
      description:
        'This backpack is built from full-grain, vegetable-tanned leather with a polyester lining, sized at 16.5 x 12.6 x 5.5 inches (42 x 32 x 14cm) with roughly 20L of capacity and a weight of 2.8 lbs (1.3kg).\nThe main compartment includes a padded 15.6-inch laptop sleeve, two small slot pockets, and a small zipper pocket. Exterior storage consists of a front panel zipper pocket and a hidden zipper pocket on the back panel, useful for a passport, phone, or wallet. Straps are adjustable.\nVegetable-tanned leather develops a visible patina with use and is a softer, more breathable material than synthetic-coated leather — expect the color and texture to shift over months of regular carry.',
      metaTitle: 'Men’s 15.6-Inch Leather Laptop Backpack',
      metaDescription:
        'A full-grain vegetable-tanned leather backpack with a padded 15.6-inch laptop compartment, ~20L capacity, and a hidden rear pocket for valuables.',
      categorySlugs: ['leather-goods'],
      brandSlug: 'luke-case',
      galleryImageUrls: ['https://www.lukecase.com/cdn/shop/products/leather-backpack-88120_1_800x.webp?v=1652868875'],
      officialUrl: 'https://www.lukecase.com/products/leather-backpack-88120',
      retailerLinks: [
        {
          retailerSlug: 'lukecase',
          affiliateUrl: 'https://www.lukecase.com/products/leather-backpack-88120',
          price: 179,
        },
      ],
      publish: true,
    },
    {
      slug: 'everydaycraftsman-leather-backpack',
      title: 'EverydayCraftsman Leather Backpack',
      excerpt:
        'A top-grain cowhide backpack sized for a 15-inch laptop, with five exterior pockets and a leather top handle for daily carry.',
      description:
        'Made from top-grain cowhide leather with a polyester lining, this backpack measures 15.7 x 11.0 x 4.7 inches (40 x 28 x 12cm) and weighs 2.65 lbs (1.2kg).\nThe main compartment holds a 15-inch laptop plus two small slip pockets. Exterior storage adds up to five pockets — two zippered pockets on the front, one on the back, and one on each side — along with a leather top handle and an adjustable shoulder strap.\nTop-grain leather resists scuffing better than full-grain leather but shows less of a natural aging patina over time.',
      metaDescription:
        'A top-grain cowhide leather backpack with a 15-inch laptop compartment, five exterior pockets, and an adjustable shoulder strap.',
      categorySlugs: ['leather-goods'],
      brandSlug: 'luke-case',
      galleryImageUrls: ['https://www.lukecase.com/cdn/shop/files/leather-backpack-0825_1_800x.webp?v=1713510375'],
      officialUrl: 'https://www.lukecase.com/products/leather-backpack-0825',
      retailerLinks: [
        {
          retailerSlug: 'lukecase',
          affiliateUrl: 'https://www.lukecase.com/products/leather-backpack-0825',
          price: 149,
        },
      ],
      publish: true,
    },
    {
      slug: 'vintage-leather-airtag-bifold-wallet-rfid-blocking',
      title: 'Vintage Leather AirTag Bifold Wallet with RFID Blocking',
      excerpt:
        'A slim bifold wallet in Crazy Horse leather with RFID-blocking card slots and a dedicated pocket sized for an Apple AirTag (sold separately).',
      description:
        'This bifold wallet is made from Crazy Horse leather (a waxed, full-grain cowhide) and measures 5.5 x 4.1 x 0.4 inches (14 x 10.5 x 1cm), weighing 0.44 lbs (0.2kg).\nInside are three RFID-blocking card slots, a dedicated AirTag pocket, a bill compartment, a zippered coin pocket, a pen holder, and a passport pocket. Hardware is brass. An Apple AirTag is not included.\nCrazy Horse leather has a waxed, distressed finish that lightens slightly where it is handled or creased — that is typical of the material rather than a manufacturing flaw.',
      metaTitle: 'Leather AirTag Wallet, RFID Blocking',
      metaDescription:
        'A Crazy Horse leather bifold wallet with RFID-blocking card slots and a built-in pocket for an Apple AirTag (sold separately).',
      categorySlugs: ['leather-goods'],
      brandSlug: 'luke-case',
      galleryImageUrls: ['https://www.lukecase.com/cdn/shop/files/leather-wallet-m1358_1_1000x.webp?v=1775635958'],
      officialUrl: 'https://www.lukecase.com/products/leather-airtag-wallet-m1358',
      retailerLinks: [
        {
          retailerSlug: 'lukecase',
          affiliateUrl: 'https://www.lukecase.com/products/leather-airtag-wallet-m1358',
          price: 29,
        },
      ],
      publish: true,
    },
    {
      slug: 'leather-watch-box-12-watches-free-monogram',
      title: 'Leather Watch Box For 12 Watches - Free Monogram',
      bestPickLabel: 'best-overall',
      excerpt:
        'A 12-watch storage case in Crazy Horse leather, with individually cushioned slots and a soft fabric interior lining.',
      description:
        'This watch case is built from Crazy Horse leather (a waxed, full-grain cowhide) with a soft fabric interior lining, and measures 14.2 x 7.5 x 3.1 inches (36 x 19 x 8cm), weighing 3.31 lbs (1.5kg).\nIt holds up to 12 watches, each in its own slot cushioned by a removable microfiber pillow, accommodating metal, leather, rubber, or fabric straps. Closure is a zipper. A complimentary monogram can be requested by emailing the seller with the desired text after ordering.\nAs with other Crazy Horse leather goods, expect the surface to develop a visible patina and soften slightly with handling over time.',
      metaTitle: 'Leather Watch Box for 12 Watches',
      metaDescription:
        'A 12-watch storage case in waxed Crazy Horse leather, with individually cushioned slots and a soft fabric interior lining.',
      categorySlugs: ['leather-goods'],
      brandSlug: 'luke-case',
      galleryImageUrls: ['https://www.lukecase.com/cdn/shop/files/leather-watch-box-cf1158_7_1100x.webp?v=1750418024'],
      officialUrl: 'https://www.lukecase.com/products/watch-box-cf1158',
      retailerLinks: [
        {
          retailerSlug: 'lukecase',
          affiliateUrl: 'https://www.lukecase.com/products/watch-box-cf1158',
          price: 209,
        },
      ],
      publish: true,
    },
    {
      "slug": "blossom-eau-de-parfum",
      "title": "Vaucluse Blossom Eau de Parfum",
      "excerpt": "A 50ml eau de parfum built around peony, rose, and musk — a genuine fine fragrance, not a home-fragrance product.",
      "description": "Unlike the rest of the Vaucluse home-fragrance range, Blossom is an actual wearable Eau de Parfum (EDP), not a candle or diffuser oil — meant to be sprayed on skin (wrists, neck, pulse points), not diffused into a room. The 50ml bottle uses Vaucluse's own \"E-PURE JUNGLE ESSENCE\" extraction process, opening with mandarin, green, and pink pepper, moving through peony, rose, and musks at the heart, and settling into patchouli, powdery, woody, and ambery notes at the base.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "valentines-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/blossom-eau-de-parfum",
      "pros": [
        "A genuine wearable EDP, not a home-fragrance product — distinct from the rest of the Vaucluse catalog",
        "Full 50ml bottle at a fine-fragrance price point",
        "Floral-forward composition (peony, rose) with a warm, ambery finish"
      ],
      "cons": [
        "No sample/travel size offered to try before committing to the full bottle",
        "Floral-heavy profile won't suit everyone looking for a lighter or more citrus-forward scent"
      ],
      "specifications": [
        {
          "label": "Type",
          "value": "Eau de Parfum (EDP), not a home-fragrance candle/oil"
        },
        {
          "label": "Size",
          "value": "50ml"
        },
        {
          "label": "Top notes",
          "value": "Mandarin, green, pink pepper"
        },
        {
          "label": "Heart notes",
          "value": "Peony, rose, musks"
        },
        {
          "label": "Base notes",
          "value": "Patchouli, powdery, woody, ambery"
        },
        {
          "label": "Application",
          "value": "Spray on wrists, neck, and pulse points"
        }
      ],
      "faqs": [
        {
          "question": "Is this a candle or a perfume?",
          "answer": "It's a real Eau de Parfum meant to be worn on skin — a genuine perfume, unlike most of Vaucluse's candle/diffuser/essential-oil catalog."
        },
        {
          "question": "How should I apply it?",
          "answer": "Spray on wrists, neck, and other pulse points, per Vaucluse's usage guidance."
        },
        {
          "question": "Is there a smaller size available?",
          "answer": "Vaucluse lists this only at 50ml — no travel or sample size is offered for this product."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/blossom-eau-de-parfum",
          "price": 780,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Blossom Eau de Parfum",
      "metaDescription": "A 50ml eau de parfum built around peony, rose, and musk — a genuine fine fragrance, not a home-fragrance product.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/blossom-eau-de-parfum-2651022.jpg"
      ],
      "publish": true
    },
    {
      "slug": "origin-eau-de-parfum",
      "title": "Vaucluse Origin Eau de Parfum",
      "excerpt": "A 50ml eau de parfum built around blackcurrant, citrus, and a woody sandalwood-vetiver base — a genuine fine fragrance, not a home-fragrance product.",
      "description": "Like Blossom, Origin is a real wearable Eau de Parfum (EDP) rather than a home-fragrance candle or oil — meant to be sprayed on skin, not diffused. The 50ml bottle opens with blackcurrant and citrus, moves through peony, elemi, and magnolia at the heart, and settles into patchouli, sandalwood, and vetiver at the base. Vaucluse positions it as a woodier, more masculine-leaning counterpart to Blossom.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "valentines-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/origin-eau-de-parfum",
      "pros": [
        "A genuine wearable EDP, not a home-fragrance product — distinct from the rest of the Vaucluse catalog",
        "Woody, sandalwood-vetiver base sets it apart from Vaucluse's floral home-fragrance scents",
        "Full 50ml bottle at a fine-fragrance price point"
      ],
      "cons": [
        "No sample/travel size offered to try before committing to the full bottle",
        "Woody/citrus profile is a narrower fit than a more universally-appealing floral scent"
      ],
      "specifications": [
        {
          "label": "Type",
          "value": "Eau de Parfum (EDP), not a home-fragrance candle/oil"
        },
        {
          "label": "Size",
          "value": "50ml"
        },
        {
          "label": "Top notes",
          "value": "Blackcurrant, citrus cocktail"
        },
        {
          "label": "Heart notes",
          "value": "Peony, elemi, magnolia"
        },
        {
          "label": "Base notes",
          "value": "Patchouli, sandalwood, vetiver"
        },
        {
          "label": "Application",
          "value": "Spray on wrists, neck, and pulse points"
        }
      ],
      "faqs": [
        {
          "question": "Is this a candle or a perfume?",
          "answer": "It's a real Eau de Parfum meant to be worn on skin — a genuine perfume, unlike most of Vaucluse's candle/diffuser/essential-oil catalog."
        },
        {
          "question": "How does it compare to Blossom?",
          "answer": "Origin leans woodier and citrus-forward (blackcurrant, sandalwood, vetiver), while Blossom is more floral (peony, rose)."
        },
        {
          "question": "Is there a smaller size available?",
          "answer": "Vaucluse lists this only at 50ml — no travel or sample size is offered for this product."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/origin-eau-de-parfum",
          "price": 680,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Origin Eau de Parfum",
      "metaDescription": "A 50ml eau de parfum built around blackcurrant, citrus, and a woody sandalwood-vetiver base — a genuine fine fragrance, not a home-fragrance product.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/origin-eau-de-parfum-9713392.jpg"
      ],
      "publish": true
    },
    {
      "slug": "black-rose-scented-candle",
      "title": "Vaucluse Black Rose Scented Candle",
      "excerpt": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — black rose notes from top to base.",
      "description": "The Vaucluse Black Rose Scented Candle is a soy wax blend (80% soy, 7% paraffin, 5% microcrystalline wax, 8% fragrance) poured into a reusable ribbed glass tumbler with a braided cotton wick. It's rated for 40+ hours of burn time, measures 9.5cm in diameter by 8.7cm tall, and ships in a white gift box. The scent moves from rose, hyacinth, lemon at the top, through rose, carnation, geranium, violet at the heart, down to musk, tonka bean, amber at the base.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/black-rose-scented-candle",
      "pros": [
        "40+ hour burn time from a 280g candle",
        "Reusable ribbed glass tumbler once the candle is finished",
        "Braided cotton wick for a clean, low-soot burn",
        "Ships in a white gift box, ready to give as-is"
      ],
      "cons": [
        "No regular (pre-discount) price shown for comparison",
        "Soy-paraffin blend, not a 100% soy wax candle",
        "Single size only — no travel/sample size offered"
      ],
      "specifications": [
        {
          "label": "Size",
          "value": "9.5cm diameter × 8.7cm height"
        },
        {
          "label": "Weight",
          "value": "280g"
        },
        {
          "label": "Burn time",
          "value": "40+ hours"
        },
        {
          "label": "Top notes",
          "value": "rose, hyacinth, lemon"
        },
        {
          "label": "Heart notes",
          "value": "rose, carnation, geranium, violet"
        },
        {
          "label": "Base notes",
          "value": "musk, tonka bean, amber"
        },
        {
          "label": "Wax",
          "value": "Soy wax blend (80% soy, 7% paraffin, 5% microcrystalline)"
        },
        {
          "label": "Wick",
          "value": "Braided cotton"
        }
      ],
      "faqs": [
        {
          "question": "What is the candle jar made of?",
          "answer": "A reusable ribbed glass tumbler, designed to be kept and reused once the candle is finished."
        },
        {
          "question": "How long does it burn?",
          "answer": "Vaucluse rates this candle for 40+ hours of burn time."
        },
        {
          "question": "Does it come gift-ready?",
          "answer": "Yes — it ships in a white gift box."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/black-rose-scented-candle",
          "price": 218,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Black Rose Scented Candle",
      "metaDescription": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — black rose notes from top to base.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/black-rose-scented-soy-wax-candle-ribbed-glass-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lychee-scented-candle",
      "title": "Vaucluse Lychee Scented Candle",
      "excerpt": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — lychee notes from top to base.",
      "description": "The Vaucluse Lychee Scented Candle is a soy wax blend (80% soy, 7% paraffin, 5% microcrystalline wax, 8% fragrance) poured into a reusable ribbed glass tumbler with a braided cotton wick. It's rated for 40+ hours of burn time, measures 9.5cm in diameter by 8.7cm tall, and ships in a white gift box. The scent moves from orange, bergamot, apple at the top, through lychee, red berries, peach at the heart, down to chocolate at the base.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lychee-scented-candle",
      "pros": [
        "40+ hour burn time from a 280g candle",
        "Reusable ribbed glass tumbler once the candle is finished",
        "Braided cotton wick for a clean, low-soot burn",
        "Ships in a white gift box, ready to give as-is"
      ],
      "cons": [
        "No regular (pre-discount) price shown for comparison",
        "Soy-paraffin blend, not a 100% soy wax candle",
        "Single size only — no travel/sample size offered"
      ],
      "specifications": [
        {
          "label": "Size",
          "value": "9.5cm diameter × 8.7cm height"
        },
        {
          "label": "Weight",
          "value": "280g"
        },
        {
          "label": "Burn time",
          "value": "40+ hours"
        },
        {
          "label": "Top notes",
          "value": "orange, bergamot, apple"
        },
        {
          "label": "Heart notes",
          "value": "lychee, red berries, peach"
        },
        {
          "label": "Base notes",
          "value": "chocolate"
        },
        {
          "label": "Wax",
          "value": "Soy wax blend (80% soy, 7% paraffin, 5% microcrystalline)"
        },
        {
          "label": "Wick",
          "value": "Braided cotton"
        }
      ],
      "faqs": [
        {
          "question": "What is the candle jar made of?",
          "answer": "A reusable ribbed glass tumbler, designed to be kept and reused once the candle is finished."
        },
        {
          "question": "How long does it burn?",
          "answer": "Vaucluse rates this candle for 40+ hours of burn time."
        },
        {
          "question": "Does it come gift-ready?",
          "answer": "Yes — it ships in a white gift box."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lychee-scented-candle",
          "price": 218,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lychee Scented Candle",
      "metaDescription": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — lychee notes from top to base.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/lychee-scented-soy-wax-candle-ribbed-glass-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "pear-freesia-scented-candle",
      "title": "Vaucluse Pear & Freesia Scented Candle",
      "excerpt": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — pear & freesia notes from top to base.",
      "description": "The Vaucluse Pear & Freesia Scented Candle is a soy wax blend (80% soy, 7% paraffin, 5% microcrystalline wax, 8% fragrance) poured into a reusable ribbed glass tumbler with a braided cotton wick. It's rated for 40+ hours of burn time, measures 9.5cm in diameter by 8.7cm tall, and ships in a white gift box. The scent moves from melon, pear at the top, through freesia, rose at the heart, down to musk, patchouli, amber, rhubarb at the base.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/pear-freesia-scented-candle",
      "pros": [
        "40+ hour burn time from a 280g candle",
        "Reusable ribbed glass tumbler once the candle is finished",
        "Braided cotton wick for a clean, low-soot burn",
        "Ships in a white gift box, ready to give as-is"
      ],
      "cons": [
        "No regular (pre-discount) price shown for comparison",
        "Soy-paraffin blend, not a 100% soy wax candle",
        "Single size only — no travel/sample size offered"
      ],
      "specifications": [
        {
          "label": "Size",
          "value": "9.5cm diameter × 8.7cm height"
        },
        {
          "label": "Weight",
          "value": "280g"
        },
        {
          "label": "Burn time",
          "value": "40+ hours"
        },
        {
          "label": "Top notes",
          "value": "melon, pear"
        },
        {
          "label": "Heart notes",
          "value": "freesia, rose"
        },
        {
          "label": "Base notes",
          "value": "musk, patchouli, amber, rhubarb"
        },
        {
          "label": "Wax",
          "value": "Soy wax blend (80% soy, 7% paraffin, 5% microcrystalline)"
        },
        {
          "label": "Wick",
          "value": "Braided cotton"
        }
      ],
      "faqs": [
        {
          "question": "What is the candle jar made of?",
          "answer": "A reusable ribbed glass tumbler, designed to be kept and reused once the candle is finished."
        },
        {
          "question": "How long does it burn?",
          "answer": "Vaucluse rates this candle for 40+ hours of burn time."
        },
        {
          "question": "Does it come gift-ready?",
          "answer": "Yes — it ships in a white gift box."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "best-everyday",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/pear-freesia-scented-candle",
          "price": 218,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Pear & Freesia Scented Candle",
      "metaDescription": "A 280g soy-blend candle in a reusable ribbed glass tumbler with a 40+ hour burn time — pear & freesia notes from top to base.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/pear-freesia-scented-soy-wax-candle-ribbed-glass-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "black-rose-reed-diffuser",
      "title": "Vaucluse Black Rose Reed Diffuser",
      "excerpt": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on black rose notes.",
      "description": "The Vaucluse Black Rose Reed Diffuser uses premium rattan reeds in a reusable glass bottle to disperse scent continuously for 3-6 months, with no flame or electricity required. The 100ml alcohol-free formula opens with leaf, aldehydic, moves through rose, plum at the heart, and settles into lily of the valley, rosewood at the base. Vaucluse markets it as non-toxic and safe for homes with pets or children.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/black-rose-reed-diffuser",
      "pros": [
        "3-6 months of continuous fragrance from one 100ml bottle",
        "No flame or electricity — safe to leave running unattended",
        "Non-toxic, alcohol-free formula stated safe around pets and children",
        "Reusable glass bottle once the oil is used up"
      ],
      "cons": [
        "Scent throw is naturally gentler than an electric diffuser or candle",
        "Reeds need periodic flipping to maintain throw, not fully passive",
        "No regular (pre-discount) price shown for comparison"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "100ml"
        },
        {
          "label": "Duration",
          "value": "3-6 months"
        },
        {
          "label": "Bottle",
          "value": "7cm diameter × 7.8cm height, reusable glass"
        },
        {
          "label": "Reed length",
          "value": "24cm rattan reeds"
        },
        {
          "label": "Top notes",
          "value": "leaf, aldehydic"
        },
        {
          "label": "Heart notes",
          "value": "rose, plum"
        },
        {
          "label": "Base notes",
          "value": "lily of the valley, rosewood"
        }
      ],
      "faqs": [
        {
          "question": "How long does one bottle last?",
          "answer": "Vaucluse rates it for 3-6 months of continuous fragrance."
        },
        {
          "question": "Is it safe around pets and children?",
          "answer": "Vaucluse describes the formula as non-toxic and alcohol-free, and states it's safe for homes with pets or children."
        },
        {
          "question": "Do I need to do anything to maintain the scent?",
          "answer": "Flipping the reeds periodically refreshes the scent throw, as with any reed diffuser."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/black-rose-reed-diffuser",
          "price": 275,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Black Rose Reed Diffuser",
      "metaDescription": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on black rose notes.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-black-rose-luxury-reed-diffuser-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lychee-scented-reed-diffuser",
      "title": "Vaucluse Lychee Reed Diffuser",
      "excerpt": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on lychee notes.",
      "description": "The Vaucluse Lychee Reed Diffuser uses premium rattan reeds in a reusable glass bottle to disperse scent continuously for 3-6 months, with no flame or electricity required. The 100ml alcohol-free formula opens with lychee, cassis, mango, moves through raspberry, rose, muguet at the heart, and settles into sugar at the base. Vaucluse markets it as non-toxic and safe for homes with pets or children.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lychee-scented-reed-diffuser",
      "pros": [
        "3-6 months of continuous fragrance from one 100ml bottle",
        "No flame or electricity — safe to leave running unattended",
        "Non-toxic, alcohol-free formula stated safe around pets and children",
        "Reusable glass bottle once the oil is used up"
      ],
      "cons": [
        "Scent throw is naturally gentler than an electric diffuser or candle",
        "Reeds need periodic flipping to maintain throw, not fully passive",
        "No regular (pre-discount) price shown for comparison"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "100ml"
        },
        {
          "label": "Duration",
          "value": "3-6 months"
        },
        {
          "label": "Bottle",
          "value": "7cm diameter × 7.8cm height, reusable glass"
        },
        {
          "label": "Reed length",
          "value": "24cm rattan reeds"
        },
        {
          "label": "Top notes",
          "value": "lychee, cassis, mango"
        },
        {
          "label": "Heart notes",
          "value": "raspberry, rose, muguet"
        },
        {
          "label": "Base notes",
          "value": "sugar"
        }
      ],
      "faqs": [
        {
          "question": "How long does one bottle last?",
          "answer": "Vaucluse rates it for 3-6 months of continuous fragrance."
        },
        {
          "question": "Is it safe around pets and children?",
          "answer": "Vaucluse describes the formula as non-toxic and alcohol-free, and states it's safe for homes with pets or children."
        },
        {
          "question": "Do I need to do anything to maintain the scent?",
          "answer": "Flipping the reeds periodically refreshes the scent throw, as with any reed diffuser."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lychee-scented-reed-diffuser",
          "price": 275,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lychee Reed Diffuser",
      "metaDescription": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on lychee notes.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lychee-luxury-reed-diffuser-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "pear-freesia-reed-diffuser",
      "title": "Vaucluse Pear & Freesia Reed Diffuser",
      "excerpt": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on pear & freesia notes.",
      "description": "The Vaucluse Pear & Freesia Reed Diffuser uses premium rattan reeds in a reusable glass bottle to disperse scent continuously for 3-6 months, with no flame or electricity required. The 100ml alcohol-free formula opens with melon, pear, moves through freesia, rose at the heart, and settles into musk, patchouli, amber, rhubarb at the base. Vaucluse markets it as non-toxic and safe for homes with pets or children.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/pear-freesia-reed-diffuser",
      "pros": [
        "3-6 months of continuous fragrance from one 100ml bottle",
        "No flame or electricity — safe to leave running unattended",
        "Non-toxic, alcohol-free formula stated safe around pets and children",
        "Reusable glass bottle once the oil is used up"
      ],
      "cons": [
        "Scent throw is naturally gentler than an electric diffuser or candle",
        "Reeds need periodic flipping to maintain throw, not fully passive",
        "No regular (pre-discount) price shown for comparison"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "100ml"
        },
        {
          "label": "Duration",
          "value": "3-6 months"
        },
        {
          "label": "Bottle",
          "value": "7cm diameter × 7.8cm height, reusable glass"
        },
        {
          "label": "Reed length",
          "value": "24cm rattan reeds"
        },
        {
          "label": "Top notes",
          "value": "melon, pear"
        },
        {
          "label": "Heart notes",
          "value": "freesia, rose"
        },
        {
          "label": "Base notes",
          "value": "musk, patchouli, amber, rhubarb"
        }
      ],
      "faqs": [
        {
          "question": "How long does one bottle last?",
          "answer": "Vaucluse rates it for 3-6 months of continuous fragrance."
        },
        {
          "question": "Is it safe around pets and children?",
          "answer": "Vaucluse describes the formula as non-toxic and alcohol-free, and states it's safe for homes with pets or children."
        },
        {
          "question": "Do I need to do anything to maintain the scent?",
          "answer": "Flipping the reeds periodically refreshes the scent throw, as with any reed diffuser."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/pear-freesia-reed-diffuser",
          "price": 275,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Pear & Freesia Reed Diffuser",
      "metaDescription": "A 100ml flameless reed diffuser with premium rattan reeds — lasts 3-6 months on pear & freesia notes.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-pear-freesia-luxury-reed-diffuser-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "agarwood-essential-oil-10ml",
      "title": "Vaucluse Agarwood Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — agarwood notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Agarwood Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with citrus, clear, develops through powdery, spicy accord, patchouli, and settles into cypress, ambergris, musk. Also known as Oud Oil, extracted from Aquilaria tree heartwood via steam distillation. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/agarwood-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "citrus, clear"
        },
        {
          "label": "Heart notes",
          "value": "powdery, spicy accord, patchouli"
        },
        {
          "label": "Base notes",
          "value": "cypress, ambergris, musk"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/agarwood-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Agarwood Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — agarwood notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-agarwood-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "grapefruit-cedar-essential-oil-10ml",
      "title": "Vaucluse Grapefruit & Cedar Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — grapefruit & cedar notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Grapefruit & Cedar Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with plums, grapefruit, lemons, develops through peach blossoms, carnations, cinnamon, and settles into sandalwood, vetiver, cedar. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/grapefruit-cedar-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "plums, grapefruit, lemons"
        },
        {
          "label": "Heart notes",
          "value": "peach blossoms, carnations, cinnamon"
        },
        {
          "label": "Base notes",
          "value": "sandalwood, vetiver, cedar"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/grapefruit-cedar-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Grapefruit & Cedar Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — grapefruit & cedar notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-grapefruit-cedar-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "white-tea-essential-oil-10ml",
      "title": "Vaucluse White Tea Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — white tea notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's White Tea Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with citrus, sea breeze accord, green leaves, develops through white tea, jasmine, magnolia, peony, and settles into amber, musk, flowers. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/white-tea-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "citrus, sea breeze accord, green leaves"
        },
        {
          "label": "Heart notes",
          "value": "white tea, jasmine, magnolia, peony"
        },
        {
          "label": "Base notes",
          "value": "amber, musk, flowers"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/white-tea-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse White Tea Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — white tea notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-white-tea-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "tuberose-essential-oil-10ml",
      "title": "Vaucluse Tuberose Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — tuberose notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Tuberose Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with green leaves, orange flowers, jasmine, develops through tuberose, gardenia, ylang ylang, and settles into musk, cinnamon. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/tuberose-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "green leaves, orange flowers, jasmine"
        },
        {
          "label": "Heart notes",
          "value": "tuberose, gardenia, ylang ylang"
        },
        {
          "label": "Base notes",
          "value": "musk, cinnamon"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/tuberose-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Tuberose Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — tuberose notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-tuberose-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "english-pear-and-freesia-essential-oil-10ml",
      "title": "Vaucluse English Pear & Freesia Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — english pear & freesia notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's English Pear & Freesia Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with apple, English pear, citrus, develops through rose, freesia, and settles into musk, amber. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/english-pear-and-freesia-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "apple, English pear, citrus"
        },
        {
          "label": "Heart notes",
          "value": "rose, freesia"
        },
        {
          "label": "Base notes",
          "value": "musk, amber"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/english-pear-and-freesia-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse English Pear & Freesia Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — english pear & freesia notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-english-pear-and-freesia-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "spring-hyacinth-essential-oil-10ml",
      "title": "Vaucluse Spring Hyacinth Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — spring hyacinth notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Spring Hyacinth Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with lemon, green leaves, develops through hyacinth, jasmine, and settles into ocean, musk. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/spring-hyacinth-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "lemon, green leaves"
        },
        {
          "label": "Heart notes",
          "value": "hyacinth, jasmine"
        },
        {
          "label": "Base notes",
          "value": "ocean, musk"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/spring-hyacinth-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Spring Hyacinth Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — spring hyacinth notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-spring-hyacinth-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "amber-eucalyptus-essential-oil-10ml",
      "title": "Vaucluse Amber Eucalyptus Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — amber eucalyptus notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Amber Eucalyptus Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with citrus, cloves, ambergris, aldehyde, develops through lavender, eucalyptus, violet, and settles into patchouli, vanilla, amber. A dual-action blend: invigorating citrus/eucalyptus for focus, lavender/amber for relaxation. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/amber-eucalyptus-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "citrus, cloves, ambergris, aldehyde"
        },
        {
          "label": "Heart notes",
          "value": "lavender, eucalyptus, violet"
        },
        {
          "label": "Base notes",
          "value": "patchouli, vanilla, amber"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/amber-eucalyptus-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Amber Eucalyptus Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — amber eucalyptus notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-amber-eucalyptus-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "wood-sage-sea-salt-essential-oil-10ml",
      "title": "Vaucluse Wood Sage & Sea Salt Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — wood sage & sea salt notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Wood Sage & Sea Salt Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with okra seed, develops through sea salt, and settles into woody sage. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/wood-sage-sea-salt-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "okra seed"
        },
        {
          "label": "Heart notes",
          "value": "sea salt"
        },
        {
          "label": "Base notes",
          "value": "woody sage"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/wood-sage-sea-salt-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Wood Sage & Sea Salt Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — wood sage & sea salt notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-wood-sage-sea-salt-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "gardenia-essential-oil-10ml",
      "title": "Vaucluse Gardenia Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — gardenia notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Gardenia Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with vanilla, sweet orange, develops through gardenia, apples, coconut, and settles into amber, vanilla. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/gardenia-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "vanilla, sweet orange"
        },
        {
          "label": "Heart notes",
          "value": "gardenia, apples, coconut"
        },
        {
          "label": "Base notes",
          "value": "amber, vanilla"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/gardenia-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Gardenia Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — gardenia notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-gardenia-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lavender-essential-oil-10ml",
      "title": "Vaucluse Lavender Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — lavender notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Lavender Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with floral, herbal freshness, develops through lavender, and settles into earthy undertones. 100% pure and undiluted single-note lavender oil, with no blended fragrance notes. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lavender-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "floral, herbal freshness"
        },
        {
          "label": "Heart notes",
          "value": "lavender"
        },
        {
          "label": "Base notes",
          "value": "earthy undertones"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lavender-essential-oil-10ml",
          "price": 149,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lavender Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — lavender notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lavender-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "peppermint-essential-oil-10ml",
      "title": "Vaucluse Peppermint Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — peppermint notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Peppermint Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with crisp, herbaceous mint, develops through peppermint, and settles into earthy undertones. 100% pure and undiluted single-note peppermint oil. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/peppermint-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "crisp, herbaceous mint"
        },
        {
          "label": "Heart notes",
          "value": "peppermint"
        },
        {
          "label": "Base notes",
          "value": "earthy undertones"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/peppermint-essential-oil-10ml",
          "price": 139,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Peppermint Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — peppermint notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-peppermint-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "bergamot-essential-oil-10ml",
      "title": "Vaucluse Bergamot Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — bergamot notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Bergamot Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with bright, tangy citrus, develops through herbal orchard-leaf nuance, and settles into clean citrus trail. 100% pure and undiluted single-note bergamot oil — the most expensive oil in the range. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/bergamot-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "bright, tangy citrus"
        },
        {
          "label": "Heart notes",
          "value": "herbal orchard-leaf nuance"
        },
        {
          "label": "Base notes",
          "value": "clean citrus trail"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/bergamot-essential-oil-10ml",
          "price": 170,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Bergamot Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — bergamot notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-bergamot-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lily-lime-musk-essential-oil-10ml",
      "title": "Vaucluse Lily & Lime Musk Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — lily & lime musk notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Lily & Lime Musk Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with lime, lemon, develops through geranium, lily of the valley, gardenia, and settles into musk. Inspired by a well-known hotel-lobby signature scent. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lily-lime-musk-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "lime, lemon"
        },
        {
          "label": "Heart notes",
          "value": "geranium, lily of the valley, gardenia"
        },
        {
          "label": "Base notes",
          "value": "musk"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lily-lime-musk-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lily & Lime Musk Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — lily & lime musk notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lily-lime-musk-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "honey-jasmine-cypress-essential-oil-10ml",
      "title": "Vaucluse Honey Jasmine & Cypress Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — honey jasmine & cypress notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Honey Jasmine & Cypress Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with lemon, sweet orange, develops through apple, jasmine, and settles into musk, cypress, amber. Inspired by a well-known hotel-lobby signature scent. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/honey-jasmine-cypress-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "lemon, sweet orange"
        },
        {
          "label": "Heart notes",
          "value": "apple, jasmine"
        },
        {
          "label": "Base notes",
          "value": "musk, cypress, amber"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/honey-jasmine-cypress-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Honey Jasmine & Cypress Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — honey jasmine & cypress notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-honey-jasmine-cypress-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "vanilla-lavender-musk-essential-oil-10ml",
      "title": "Vaucluse Vanilla Lavender & Musk Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — vanilla lavender & musk notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Vanilla Lavender & Musk Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with rose, jasmine, lily of the valley, develops through lavender, mint, vanilla, and settles into musk, ambergris, amber. A high-concentration blend — Vaucluse recommends only 2-3 drops per session. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/vanilla-lavender-musk-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "rose, jasmine, lily of the valley"
        },
        {
          "label": "Heart notes",
          "value": "lavender, mint, vanilla"
        },
        {
          "label": "Base notes",
          "value": "musk, ambergris, amber"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/vanilla-lavender-musk-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Vanilla Lavender & Musk Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — vanilla lavender & musk notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-vanilla-lavender-musk-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "peach-grapefruit-tea-essential-oil-10ml",
      "title": "Vaucluse Peach & Grapefruit Tea Essential Oil - 10ml",
      "excerpt": "A 10ml essential oil for diffusers, oil burners, or sachets — peach & grapefruit tea notes, up to 25 hours of scent per use.",
      "description": "Vaucluse's Peach & Grapefruit Tea Essential Oil comes in a 10ml glass bottle and is rated for up to 25 hours of continuous fragrance in an oil-based diffuser. The scent opens with grapefruit, sweet orange, develops through lemon, and settles into peach, musk. Inspired by a well-known hotel-lobby signature scent. Vaucluse states it's for aromatic use only, not for ingestion or direct skin application.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/peach-grapefruit-tea-essential-oil-10ml",
      "pros": [
        "Up to 25 hours of scent per fill in an oil-based diffuser",
        "Compact 10ml glass bottle works in diffusers, oil burners, or sachets",
        "Vaucluse runs a standing buy-5-get-the-6th-free offer across the essential oil range"
      ],
      "cons": [
        "10ml is a small volume compared to some other essential oil brands",
        "Oil-based only — not compatible with water-based ultrasonic diffusers",
        "For aromatic use only; not for ingestion or direct skin application"
      ],
      "specifications": [
        {
          "label": "Volume",
          "value": "10ml"
        },
        {
          "label": "Bottle",
          "value": "Glass, approx. 8.3cm (H) × 2.5cm (D)"
        },
        {
          "label": "Duration",
          "value": "Up to 25 hours per use (oil-based diffuser)"
        },
        {
          "label": "Top notes",
          "value": "grapefruit, sweet orange"
        },
        {
          "label": "Heart notes",
          "value": "lemon"
        },
        {
          "label": "Base notes",
          "value": "peach, musk"
        },
        {
          "label": "Usage",
          "value": "4-10 drops in diffusers, oil burners, or sachets"
        }
      ],
      "faqs": [
        {
          "question": "Can I use this in a water-based ultrasonic diffuser?",
          "answer": "No — this is an oil-based formula for oil burners, oil-based nebulizing diffusers, or sachets, not water-based ultrasonic diffusers."
        },
        {
          "question": "Is there a multi-buy discount?",
          "answer": "Vaucluse runs a standing promotion: buy 5 essential oils and get a 6th free, applied automatically at checkout."
        },
        {
          "question": "Can I apply it to my skin?",
          "answer": "No — Vaucluse states this oil is for aromatic use only, not for ingestion or direct skin application."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/peach-grapefruit-tea-essential-oil-10ml",
          "price": 118,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Peach & Grapefruit Tea Essential Oil - 10ml",
      "metaDescription": "A 10ml essential oil for diffusers, oil burners, or sachets — peach & grapefruit tea notes, up to 25 hours of scent per use.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-peach-grapefruit-tea-essential-oil-10ml.jpg"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-black-rose-gold",
      "title": "Vaucluse Essential Oil Diffuser - Black Rose Gold",
      "excerpt": "A waterless nebulizing essential oil diffuser (black rose gold) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Black Rose Gold electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-black-rose-gold",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Black Rose Gold"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "best-premium",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-black-rose-gold",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Black Rose Gold",
      "metaDescription": "A waterless nebulizing essential oil diffuser (black rose gold) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-black-rose-gold.jpg"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-black-silver",
      "title": "Vaucluse Essential Oil Diffuser - Black Silver",
      "excerpt": "A waterless nebulizing essential oil diffuser (black silver) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Black Silver electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-black-silver",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Black Silver"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-black-silver",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Black Silver",
      "metaDescription": "A waterless nebulizing essential oil diffuser (black silver) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-black-silver.jpg"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-gun-metal",
      "title": "Vaucluse Essential Oil Diffuser - Gun Metal",
      "excerpt": "A waterless nebulizing essential oil diffuser (gun metal) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Gun Metal electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-gun-metal",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Gun Metal"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-gun-metal",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Gun Metal",
      "metaDescription": "A waterless nebulizing essential oil diffuser (gun metal) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-gun-metal.jpg"
      ],
      "publish": true
    },
    {
      "slug": "rose-gold-essential-oil-diffuser-rose-gold",
      "title": "Vaucluse Essential Oil Diffuser - Rose Gold",
      "excerpt": "A waterless nebulizing essential oil diffuser (rose gold) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Rose Gold electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/rose-gold-essential-oil-diffuser-rose-gold",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Rose Gold"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/rose-gold-essential-oil-diffuser-rose-gold",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Rose Gold",
      "metaDescription": "A waterless nebulizing essential oil diffuser (rose gold) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/products/vaucluse-rose-gold-essential-oil-diffuser.jpg?v=1782282739&width=2000"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-silver",
      "title": "Vaucluse Essential Oil Diffuser - Silver",
      "excerpt": "A waterless nebulizing essential oil diffuser (silver) with a 20ml oil capacity and 100m³ coverage.",
      "description": "This Silver electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 20ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 20ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-silver",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Silver"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "20ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "With the larger 20ml capacity, Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-silver",
          "price": 498,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Silver",
      "metaDescription": "A waterless nebulizing essential oil diffuser (silver) with a 20ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-silver.jpg"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-purple-dusk",
      "title": "Vaucluse Essential Oil Diffuser - Purple Dusk",
      "excerpt": "A waterless nebulizing essential oil diffuser (purple dusk) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Purple Dusk electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-purple-dusk",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Purple Dusk"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-purple-dusk",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Purple Dusk",
      "metaDescription": "A waterless nebulizing essential oil diffuser (purple dusk) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-purple-dusk.jpg"
      ],
      "publish": true
    },
    {
      "slug": "essential-oil-diffuser-teal-silver",
      "title": "Vaucluse Essential Oil Diffuser - Teal Silver",
      "excerpt": "A waterless nebulizing essential oil diffuser (teal silver) with a 10ml oil capacity and 100m³ coverage.",
      "description": "This Teal Silver electric diffuser uses waterless nebulizing technology to disperse undiluted essential oils rather than diluting them in water. It covers up to 100m³, runs at ≤40dB, and holds 10ml of oil. The rechargeable battery runs 20-56 hours between charges, with 1/2/4-hour timer settings and a two-button control. It ships with the diffuser unit, an empty 10ml bottle, a USB charger, and a user manual.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-teal-silver",
      "pros": [
        "Nebulizing technology disperses undiluted oil — no water needed",
        "Rechargeable battery lasts 20-56 hours between charges",
        "Quiet operation at ≤40dB and covers up to 100m³",
        "Timer settings (1/2/4 hours) prevent it running all day unattended"
      ],
      "cons": [
        "Only works with oil-based essential oils, not water-soluble fragrance blends",
        "Aluminum alloy housing shows fingerprints on darker finishes",
        "Refill bottle sold separately once the included one runs low"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Teal Silver"
        },
        {
          "label": "Dimensions",
          "value": "7.1cm diameter × 13.7cm height"
        },
        {
          "label": "Oil capacity",
          "value": "10ml"
        },
        {
          "label": "Coverage",
          "value": "100m³"
        },
        {
          "label": "Noise level",
          "value": "≤40dB"
        },
        {
          "label": "Battery life",
          "value": "20-56 hours per charge"
        },
        {
          "label": "Material",
          "value": "Eco-friendly aluminum alloy"
        },
        {
          "label": "Included",
          "value": "Diffuser, empty oil bottle, USB charger, user manual"
        }
      ],
      "faqs": [
        {
          "question": "Does it need water to work?",
          "answer": "No — it uses waterless nebulizing technology that disperses undiluted essential oil directly."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Vaucluse rates the battery at 20-56 hours per charge depending on the timer setting used."
        },
        {
          "question": "How loud is it?",
          "answer": "Vaucluse rates it at 40dB or below, described as whisper-quiet."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/essential-oil-diffuser-teal-silver",
          "price": 488,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Essential Oil Diffuser - Teal Silver",
      "metaDescription": "A waterless nebulizing essential oil diffuser (teal silver) with a 10ml oil capacity and 100m³ coverage.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-essential-oil-diffuser-teal-silver.jpg"
      ],
      "publish": true
    },
    {
      "slug": "jasmine-tealight-candles",
      "title": "Vaucluse Jasmine Scented Tealight Candles",
      "excerpt": "A 16-pack of jasmine soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Sweet, romantic jasmine with warm musk notes — described by Vaucluse as delicate florals with a hint of warm musk. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/jasmine-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/jasmine-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Jasmine Scented Tealight Candles",
      "metaDescription": "A 16-pack of jasmine soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/jasmine-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "rose-tealight-candles",
      "title": "Vaucluse Rose Scented Tealight Candles",
      "excerpt": "A 16-pack of rose soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. The scent of a blooming rose garden — floral sweetness balanced with fresh green notes. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/rose-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/rose-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Rose Scented Tealight Candles",
      "metaDescription": "A 16-pack of rose soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/rose-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "cinnamon-tealight-candles",
      "title": "Vaucluse Cinnamon Scented Tealight Candles",
      "excerpt": "A 16-pack of cinnamon soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Warm cinnamon blending sweet, woody notes with a touch of festive spice — evokes holiday baking and fireplaces. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/cinnamon-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/cinnamon-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Cinnamon Scented Tealight Candles",
      "metaDescription": "A 16-pack of cinnamon soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/cinnamon-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lavender-tealight-candle",
      "title": "Vaucluse Lavender Scented Tealight Candles",
      "excerpt": "A 16-pack of lavender soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. A sun-drenched Provençal lavender field — floral sweetness with earthy herbal notes. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lavender-tealight-candle",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lavender-tealight-candle",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lavender Scented Tealight Candles",
      "metaDescription": "A 16-pack of lavender soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/lavender-scented-tealight-candles-989586.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lemon-scented-tealight-candles",
      "title": "Vaucluse Lemon Scented Tealight Candles",
      "excerpt": "A 16-pack of lemon soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Authentic lemon top notes balanced by a clean, slightly green freshness — sun-ripened citrus. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lemon-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lemon-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lemon Scented Tealight Candles",
      "metaDescription": "A 16-pack of lemon soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/lemon-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "vanilla-scented-tealight-candles",
      "title": "Vaucluse Vanilla Scented Tealight Candles",
      "excerpt": "A 16-pack of vanilla soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Rich vanilla bean with subtle caramel and delicate florals — a warm, comforting scent. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/vanilla-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/vanilla-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Vanilla Scented Tealight Candles",
      "metaDescription": "A 16-pack of vanilla soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vanilla-scented-tealight-candles-vaucluse.webp"
      ],
      "publish": true
    },
    {
      "slug": "musk-scented-tealight-candles",
      "title": "Vaucluse Musk Scented Tealight Candles",
      "excerpt": "A 16-pack of musk soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Earthy depth and sensual sophistication — aged woods, golden amber, and musk. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/musk-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/musk-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Musk Scented Tealight Candles",
      "metaDescription": "A 16-pack of musk soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/musk-scented-tealight-candles-vaucluse.webp"
      ],
      "publish": true
    },
    {
      "slug": "ocean-scented-tealight-candles",
      "title": "Vaucluse Ocean Scented Tealight Candles",
      "excerpt": "A 16-pack of ocean soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Bright bergamot and citrus mellowing into a clean marine accord with driftwood and sea salt. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/ocean-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/ocean-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Ocean Scented Tealight Candles",
      "metaDescription": "A 16-pack of ocean soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/ocean-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "sea-breeze-scented-tealight-candles",
      "title": "Vaucluse Sea Breeze Scented Tealight Candles",
      "excerpt": "A 16-pack of sea breeze soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Bright citrus mellowing into a clean aquatic floral heart, finishing with warm sand and driftwood. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/sea-breeze-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/sea-breeze-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Sea Breeze Scented Tealight Candles",
      "metaDescription": "A 16-pack of sea breeze soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/zephyr-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "velvet-scented-tealight-candles",
      "title": "Vaucluse Velvet Scented Tealight Candles",
      "excerpt": "A 16-pack of velvet soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Cardamom and clove top notes over a Madagascar vanilla heart and jasmine base — spiced vanilla and florals. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/velvet-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/velvet-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Velvet Scented Tealight Candles",
      "metaDescription": "A 16-pack of velvet soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/velvet-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "blackberry-scented-tealight-candles",
      "title": "Vaucluse Blackberry Scented Tealight Candles",
      "excerpt": "A 16-pack of blackberry soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. Bright, tangy berry notes transitioning to ripe fruit sweetness with wildflower honey undertones. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/blackberry-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/blackberry-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Blackberry Scented Tealight Candles",
      "metaDescription": "A 16-pack of blackberry soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/blackberry-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lily-scented-tealight-candles",
      "title": "Vaucluse Lily Scented Tealight Candles",
      "excerpt": "A 16-pack of lily soy wax tealights, each rated for 4 hours of burn time.",
      "description": "This box holds 16 individual soy wax tealight candles, each weighing 14g and burning for about 4 hours. The pure essence of fresh lilies in bloom — sweet floral notes with crisp green freshness. Each tealight measures 4cm in diameter by 1.7cm tall, sized to fit standard tealight holders.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lily-scented-tealight-candles",
      "pros": [
        "16 tealights per box — enough for weeks of use",
        "Natural soy wax, 4-hour burn time per candle",
        "Sized to fit any standard tealight holder"
      ],
      "cons": [
        "Loose tealights only — no holder included in this listing",
        "Individual candles are small; not meant for long single burns"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "16 tealights per box"
        },
        {
          "label": "Burn time",
          "value": "4 hours per candle"
        },
        {
          "label": "Weight",
          "value": "14g per tealight"
        },
        {
          "label": "Dimensions",
          "value": "4cm diameter × 1.7cm height"
        },
        {
          "label": "Wax",
          "value": "Natural soy wax"
        }
      ],
      "faqs": [
        {
          "question": "How many tealights are in a box?",
          "answer": "16 tealight candles per box."
        },
        {
          "question": "Do these fit standard tealight holders?",
          "answer": "Yes — each candle is 4cm in diameter and 1.7cm tall, a standard tealight size."
        },
        {
          "question": "Is there a multi-buy shipping offer?",
          "answer": "Vaucluse notes that adding 5 boxes of tealight candles to your cart qualifies for free delivery."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lily-scented-tealight-candles",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lily Scented Tealight Candles",
      "metaDescription": "A 16-pack of lily soy wax tealights, each rated for 4 hours of burn time.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/lily-scented-tealight-candles-vaucluse.jpg"
      ],
      "publish": true
    },
    {
      "slug": "jasmine-tealight-and-candle-holder-set",
      "title": "Vaucluse Jasmine Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 jasmine-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Jasmine soy wax tealights (4cm diameter × 1.7cm height, 14g each). Sweet, romantic jasmine with warm musk notes. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/jasmine-tealight-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/jasmine-tealight-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Jasmine Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 jasmine-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-jasmine-tealight-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "rose-tealight-and-candle-holder-set",
      "title": "Vaucluse Rose Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 rose-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Rose soy wax tealights (4cm diameter × 1.7cm height, 14g each). The scent of a blooming rose garden. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/rose-tealight-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/rose-tealight-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Rose Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 rose-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-rose-tealight-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "cinnamon-tealight-and-candle-holder-set",
      "title": "Vaucluse Cinnamon Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 cinnamon-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Cinnamon soy wax tealights (4cm diameter × 1.7cm height, 14g each). Warm cinnamon with sweet, woody, festive-spice notes. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/cinnamon-tealight-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/cinnamon-tealight-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Cinnamon Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 cinnamon-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-cinnamon-tealight-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lavender-tealight-and-candle-holder-set",
      "title": "Vaucluse Lavender Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 lavender-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Lavender soy wax tealights (4cm diameter × 1.7cm height, 14g each). A sun-drenched Provençal lavender field. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lavender-tealight-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lavender-tealight-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lavender Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 lavender-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lavender-tealight-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lemon-tealights-and-candle-holder-set",
      "title": "Vaucluse Lemon Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 lemon-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Lemon soy wax tealights (4cm diameter × 1.7cm height, 14g each). Authentic lemon top notes with clean, green freshness. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lemon-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lemon-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lemon Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 lemon-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lemon-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "vanilla-tealights-and-candle-holder-set",
      "title": "Vaucluse Vanilla Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 vanilla-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Vanilla soy wax tealights (4cm diameter × 1.7cm height, 14g each). Rich vanilla bean with subtle caramel and delicate florals. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/vanilla-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/vanilla-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Vanilla Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 vanilla-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-vanilla-tealights-candle-holder-gift-set.jpg?v=1782431783&width=2000"
      ],
      "publish": true
    },
    {
      "slug": "musk-tealights-and-candle-holder-set",
      "title": "Vaucluse Musk Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 musk-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Musk soy wax tealights (4cm diameter × 1.7cm height, 14g each). Earthy depth — aged woods, golden amber, and musk. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/musk-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/musk-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Musk Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 musk-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-musk-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "ocean-tealights-and-candle-holder-set",
      "title": "Vaucluse Ocean Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 ocean-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Ocean soy wax tealights (4cm diameter × 1.7cm height, 14g each). Bright bergamot and citrus over a clean marine accord. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/ocean-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/ocean-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Ocean Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 ocean-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-ocean-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "breeze-tealights-and-candle-holder-set",
      "title": "Vaucluse Sea Breeze Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 sea breeze-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Sea Breeze soy wax tealights (4cm diameter × 1.7cm height, 14g each). Bright citrus mellowing into a clean aquatic floral heart. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/breeze-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/breeze-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Sea Breeze Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 sea breeze-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-breeze-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "velvet-tealights-and-candle-holder-set",
      "title": "Vaucluse Velvet Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 velvet-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Velvet soy wax tealights (4cm diameter × 1.7cm height, 14g each). Cardamom and clove over a Madagascar vanilla heart. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/velvet-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/velvet-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Velvet Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 velvet-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-velvet-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "blackberry-tealights-and-candle-holder-set",
      "title": "Vaucluse Blackberry Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 blackberry-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Blackberry soy wax tealights (4cm diameter × 1.7cm height, 14g each). Bright, tangy berry notes with wildflower honey undertones. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/blackberry-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/blackberry-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Blackberry Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 blackberry-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-blackberry-tealights-and-candle-holder-se.jpg?v=1782449621&width=2000"
      ],
      "publish": true
    },
    {
      "slug": "lily-tealights-and-candle-holder-set",
      "title": "Vaucluse Lily Tealights & Candle Holder Set",
      "excerpt": "1 clear glass tealight holder plus 8 lily-scented soy wax tealights.",
      "description": "This set pairs a reusable clear glass tealight holder (3.7cm diameter × 1.5cm height) with 8 individually wrapped Lily soy wax tealights (4cm diameter × 1.7cm height, 14g each). The pure essence of fresh lilies in bloom. It's positioned by Vaucluse as a ready-to-gift bundle rather than a bulk refill pack.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lily-tealights-and-candle-holder-set",
      "pros": [
        "Comes with a reusable glass holder, not just loose candles",
        "8 tealights included, enough to try the scent before buying a full 16-pack",
        "Ready to gift as a complete set"
      ],
      "cons": [
        "Only 8 candles included vs. 16 in the standalone tealight box at the same price",
        "One holder only — not a multi-holder centerpiece set"
      ],
      "specifications": [
        {
          "label": "Included",
          "value": "1 glass tealight holder + 8 tealight candles"
        },
        {
          "label": "Holder",
          "value": "Glass, 3.7cm diameter × 1.5cm height"
        },
        {
          "label": "Candles",
          "value": "Soy wax, 4cm diameter × 1.7cm height, 14g each"
        }
      ],
      "faqs": [
        {
          "question": "How many candles come with the holder?",
          "answer": "8 tealight candles, plus the 1 glass holder."
        },
        {
          "question": "Is the holder reusable?",
          "answer": "Yes — it's a standard glass tealight holder sized for any 4cm tealight, not just the included ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lily-tealights-and-candle-holder-set",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Lily Tealights & Candle Holder Set",
      "metaDescription": "1 clear glass tealight holder plus 8 lily-scented soy wax tealights.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-lily-tealights-and-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "tealight-candle-holder",
      "title": "Vaucluse Glass Tealight Candle Holder (Pair)",
      "excerpt": "Two lead-free glass tealight holders, sized for any standard 4cm tealight candle.",
      "description": "This set includes 2 clear, lead-free glass tealight candle holders, each 3.7cm in diameter and 1.5cm tall — sized for any standard tealight, not just Vaucluse's own. Vaucluse positions them for tabletops, bathrooms, or outdoor use, and as a gift for housewarmings, birthdays, or anniversaries.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/tealight-candle-holder",
      "pros": [
        "Lead-free, non-toxic glass construction",
        "2 holders included, sized for any standard tealight",
        "Versatile for tabletop, bathroom, or outdoor use"
      ],
      "cons": [
        "No candles included — holders only",
        "Simple clear-glass design, no colored or decorative finish options"
      ],
      "specifications": [
        {
          "label": "Quantity",
          "value": "2 holders"
        },
        {
          "label": "Dimensions",
          "value": "3.7cm diameter × 1.5cm height each"
        },
        {
          "label": "Material",
          "value": "Lead-free glass"
        },
        {
          "label": "Weight",
          "value": "100g total"
        }
      ],
      "faqs": [
        {
          "question": "How many holders come in a box?",
          "answer": "2 glass tealight holders per box."
        },
        {
          "question": "Will these fit any tealight candle, not just Vaucluse's?",
          "answer": "Yes — they're sized for standard 4cm tealights generally, not just Vaucluse-branded ones."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/tealight-candle-holder",
          "price": 68,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Glass Tealight Candle Holder (Pair)",
      "metaDescription": "Two lead-free glass tealight holders, sized for any standard 4cm tealight candle.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-luxury-glass-tealight-candle-holder-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-wick-trimmer-snuffer-and-dipper-set-black",
      "title": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Black",
      "excerpt": "A black matte metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "description": "This candle care set includes a wick trimmer (19cm), snuffer (18cm), dipper (20cm), and a matching tray (23cm), all finished in matte metal. The trimmer is designed to keep wicks cut to an even 5mm for a cleaner burn, the snuffer puts out flames without the smoke of blowing them out, and the dipper re-coats a wick in wax after extinguishing to prevent smoldering.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-black",
      "pros": [
        "All three core candle-care tools in one matching set",
        "Trimmer keeps wicks at an even 5mm for a cleaner, more even burn",
        "Comes with its own tray for storage/display"
      ],
      "cons": [
        "A premium price for what is fundamentally a trim/snuff/dip toolkit",
        "Metal finish requires occasional wiping to stay tarnish-free"
      ],
      "specifications": [
        {
          "label": "Color / finish",
          "value": "Black matte metal"
        },
        {
          "label": "Wick trimmer",
          "value": "19cm"
        },
        {
          "label": "Snuffer",
          "value": "18cm"
        },
        {
          "label": "Dipper",
          "value": "20cm"
        },
        {
          "label": "Tray",
          "value": "23cm"
        }
      ],
      "faqs": [
        {
          "question": "What does the dipper tool do?",
          "answer": "It's used to dip and re-coat an extinguished wick in wax, which prevents the smoldering and smoke that comes from blowing a candle out directly."
        },
        {
          "question": "Does it include a tray?",
          "answer": "Yes — a matching tray is included for storing or displaying the tools."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-black",
          "price": 148,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Black",
      "metaDescription": "A black matte metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/black-candle-wick-trimmer-snuffer-dipper-tray-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-wick-trimmer-snuffer-and-dipper-set-silver",
      "title": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Silver",
      "excerpt": "A silver stainless steel candle care kit — trimmer, snuffer, dipper, and tray.",
      "description": "This candle care set includes a wick trimmer (19cm), snuffer (18cm), dipper (20cm), and a matching tray (23cm), all finished in stainless steel. The trimmer is designed to keep wicks cut to an even 5mm for a cleaner burn, the snuffer puts out flames without the smoke of blowing them out, and the dipper re-coats a wick in wax after extinguishing to prevent smoldering.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-silver",
      "pros": [
        "All three core candle-care tools in one matching set",
        "Trimmer keeps wicks at an even 5mm for a cleaner, more even burn",
        "Comes with its own tray for storage/display"
      ],
      "cons": [
        "A premium price for what is fundamentally a trim/snuff/dip toolkit",
        "Metal finish requires occasional wiping to stay tarnish-free"
      ],
      "specifications": [
        {
          "label": "Color / finish",
          "value": "Silver stainless steel"
        },
        {
          "label": "Wick trimmer",
          "value": "19cm"
        },
        {
          "label": "Snuffer",
          "value": "18cm"
        },
        {
          "label": "Dipper",
          "value": "20cm"
        },
        {
          "label": "Tray",
          "value": "23cm"
        }
      ],
      "faqs": [
        {
          "question": "What does the dipper tool do?",
          "answer": "It's used to dip and re-coat an extinguished wick in wax, which prevents the smoldering and smoke that comes from blowing a candle out directly."
        },
        {
          "question": "Does it include a tray?",
          "answer": "Yes — a matching tray is included for storing or displaying the tools."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-silver",
          "price": 148,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Silver",
      "metaDescription": "A silver stainless steel candle care kit — trimmer, snuffer, dipper, and tray.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/silver-candle-wick-trimmer-snuffer-dipper-tray-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-wick-trimmer-snuffer-and-dipper-set-gold",
      "title": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Gold",
      "excerpt": "A gold gold-plated metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "description": "This candle care set includes a wick trimmer (19cm), snuffer (18cm), dipper (20cm), and a matching tray (23cm), all finished in gold-plated metal. The trimmer is designed to keep wicks cut to an even 5mm for a cleaner burn, the snuffer puts out flames without the smoke of blowing them out, and the dipper re-coats a wick in wax after extinguishing to prevent smoldering.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-gold",
      "pros": [
        "All three core candle-care tools in one matching set",
        "Trimmer keeps wicks at an even 5mm for a cleaner, more even burn",
        "Comes with its own tray for storage/display"
      ],
      "cons": [
        "A premium price for what is fundamentally a trim/snuff/dip toolkit",
        "Metal finish requires occasional wiping to stay tarnish-free"
      ],
      "specifications": [
        {
          "label": "Color / finish",
          "value": "Gold gold-plated metal"
        },
        {
          "label": "Wick trimmer",
          "value": "19cm"
        },
        {
          "label": "Snuffer",
          "value": "18cm"
        },
        {
          "label": "Dipper",
          "value": "20cm"
        },
        {
          "label": "Tray",
          "value": "23cm"
        }
      ],
      "faqs": [
        {
          "question": "What does the dipper tool do?",
          "answer": "It's used to dip and re-coat an extinguished wick in wax, which prevents the smoldering and smoke that comes from blowing a candle out directly."
        },
        {
          "question": "Does it include a tray?",
          "answer": "Yes — a matching tray is included for storing or displaying the tools."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-gold",
          "price": 158,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Gold",
      "metaDescription": "A gold gold-plated metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/gold-candle-wick-trimmer-snuffer-dipper-tray-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-wick-trimmer-snuffer-and-dipper-set-rose-gold",
      "title": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Rose Gold",
      "excerpt": "A rose gold rose gold-plated metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "description": "This candle care set includes a wick trimmer (19cm), snuffer (18cm), dipper (20cm), and a matching tray (23cm), all finished in rose gold-plated metal. The trimmer is designed to keep wicks cut to an even 5mm for a cleaner burn, the snuffer puts out flames without the smoke of blowing them out, and the dipper re-coats a wick in wax after extinguishing to prevent smoldering.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-rose-gold",
      "pros": [
        "All three core candle-care tools in one matching set",
        "Trimmer keeps wicks at an even 5mm for a cleaner, more even burn",
        "Comes with its own tray for storage/display"
      ],
      "cons": [
        "A premium price for what is fundamentally a trim/snuff/dip toolkit",
        "Metal finish requires occasional wiping to stay tarnish-free"
      ],
      "specifications": [
        {
          "label": "Color / finish",
          "value": "Rose Gold rose gold-plated metal"
        },
        {
          "label": "Wick trimmer",
          "value": "19cm"
        },
        {
          "label": "Snuffer",
          "value": "18cm"
        },
        {
          "label": "Dipper",
          "value": "20cm"
        },
        {
          "label": "Tray",
          "value": "23cm"
        }
      ],
      "faqs": [
        {
          "question": "What does the dipper tool do?",
          "answer": "It's used to dip and re-coat an extinguished wick in wax, which prevents the smoldering and smoke that comes from blowing a candle out directly."
        },
        {
          "question": "Does it include a tray?",
          "answer": "Yes — a matching tray is included for storing or displaying the tools."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-wick-trimmer-snuffer-and-dipper-set-rose-gold",
          "price": 158,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Wick Trimmer, Snuffer & Dipper Set - Rose Gold",
      "metaDescription": "A rose gold rose gold-plated metal candle care kit — trimmer, snuffer, dipper, and tray.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/rose-gold-candle-wick-trimmer-snuffer-dipper-tray-set.jpg"
      ],
      "publish": true
    },
    {
      "slug": "electric-lighter-black",
      "title": "Vaucluse Electric Lighter - Black",
      "excerpt": "A USB-rechargeable, flameless arc lighter (black) rated for 300+ ignitions per charge.",
      "description": "This Black electric lighter uses flameless arc/plasma ignition instead of butane, is windproof, and is rated for 300+ ignitions on a single USB charge (about 1 hour to recharge). A dual-switch safety lock helps prevent accidental activation. At 50g and 20.1cm long, Vaucluse markets it for candles, grills, and fireplaces alike.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/electric-lighter-black",
      "pros": [
        "No butane refills — recharges over USB",
        "300+ ignitions per charge",
        "Windproof arc ignition works where open-flame lighters struggle",
        "Dual-switch safety lock to prevent accidental activation"
      ],
      "cons": [
        "Needs recharging eventually, unlike a disposable butane lighter",
        "Arc ignition has an audible click some may find less charming than a flame"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Black"
        },
        {
          "label": "Ignitions per charge",
          "value": "300+"
        },
        {
          "label": "Charging",
          "value": "USB, ~1 hour"
        },
        {
          "label": "Dimensions",
          "value": "20.1cm × 1.7cm × 1.1cm"
        },
        {
          "label": "Weight",
          "value": "50g"
        },
        {
          "label": "Material",
          "value": "Aluminum"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to charge?",
          "answer": "About 1 hour via USB, for 300+ ignitions per charge."
        },
        {
          "question": "Is it safe around kids?",
          "answer": "It has a dual-switch safety lock designed to prevent accidental activation."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/electric-lighter-black",
          "price": 95,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Electric Lighter - Black",
      "metaDescription": "A USB-rechargeable, flameless arc lighter (black) rated for 300+ ignitions per charge.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/electric-lighter-black-5477793.jpg"
      ],
      "publish": true
    },
    {
      "slug": "electric-lighter-light-teal",
      "title": "Vaucluse Electric Lighter - Light Teal",
      "excerpt": "A USB-rechargeable, flameless arc lighter (light teal) rated for 300+ ignitions per charge.",
      "description": "This Light Teal electric lighter uses flameless arc/plasma ignition instead of butane, is windproof, and is rated for 300+ ignitions on a single USB charge (about 1 hour to recharge). A dual-switch safety lock helps prevent accidental activation. At 50g and 20.1cm long, Vaucluse markets it for candles, grills, and fireplaces alike.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/electric-lighter-light-teal",
      "pros": [
        "No butane refills — recharges over USB",
        "300+ ignitions per charge",
        "Windproof arc ignition works where open-flame lighters struggle",
        "Dual-switch safety lock to prevent accidental activation"
      ],
      "cons": [
        "Needs recharging eventually, unlike a disposable butane lighter",
        "Arc ignition has an audible click some may find less charming than a flame"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Light Teal"
        },
        {
          "label": "Ignitions per charge",
          "value": "300+"
        },
        {
          "label": "Charging",
          "value": "USB, ~1 hour"
        },
        {
          "label": "Dimensions",
          "value": "20.1cm × 1.7cm × 1.1cm"
        },
        {
          "label": "Weight",
          "value": "50g"
        },
        {
          "label": "Material",
          "value": "Aluminum"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to charge?",
          "answer": "About 1 hour via USB, for 300+ ignitions per charge."
        },
        {
          "question": "Is it safe around kids?",
          "answer": "It has a dual-switch safety lock designed to prevent accidental activation."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/electric-lighter-light-teal",
          "price": 95,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Electric Lighter - Light Teal",
      "metaDescription": "A USB-rechargeable, flameless arc lighter (light teal) rated for 300+ ignitions per charge.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/electric-lighter-light-teal-2289535.jpg"
      ],
      "publish": true
    },
    {
      "slug": "electric-lighter-ivory",
      "title": "Vaucluse Electric Lighter - Ivory",
      "excerpt": "A USB-rechargeable, flameless arc lighter (ivory) rated for 300+ ignitions per charge.",
      "description": "This Ivory electric lighter uses flameless arc/plasma ignition instead of butane, is windproof, and is rated for 300+ ignitions on a single USB charge (about 1 hour to recharge). A dual-switch safety lock helps prevent accidental activation. At 50g and 20.1cm long, Vaucluse markets it for candles, grills, and fireplaces alike.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/electric-lighter-ivory",
      "pros": [
        "No butane refills — recharges over USB",
        "300+ ignitions per charge",
        "Windproof arc ignition works where open-flame lighters struggle",
        "Dual-switch safety lock to prevent accidental activation"
      ],
      "cons": [
        "Needs recharging eventually, unlike a disposable butane lighter",
        "Arc ignition has an audible click some may find less charming than a flame"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Ivory"
        },
        {
          "label": "Ignitions per charge",
          "value": "300+"
        },
        {
          "label": "Charging",
          "value": "USB, ~1 hour"
        },
        {
          "label": "Dimensions",
          "value": "20.1cm × 1.7cm × 1.1cm"
        },
        {
          "label": "Weight",
          "value": "50g"
        },
        {
          "label": "Material",
          "value": "Aluminum"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to charge?",
          "answer": "About 1 hour via USB, for 300+ ignitions per charge."
        },
        {
          "question": "Is it safe around kids?",
          "answer": "It has a dual-switch safety lock designed to prevent accidental activation."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/electric-lighter-ivory",
          "price": 95,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Electric Lighter - Ivory",
      "metaDescription": "A USB-rechargeable, flameless arc lighter (ivory) rated for 300+ ignitions per charge.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/electric-lighter-ivory-8884941.jpg"
      ],
      "publish": true
    },
    {
      "slug": "electric-lighter-pale-peach",
      "title": "Vaucluse Electric Lighter - Pale Peach",
      "excerpt": "A USB-rechargeable, flameless arc lighter (pale peach) rated for 300+ ignitions per charge.",
      "description": "This Pale Peach electric lighter uses flameless arc/plasma ignition instead of butane, is windproof, and is rated for 300+ ignitions on a single USB charge (about 1 hour to recharge). A dual-switch safety lock helps prevent accidental activation. At 50g and 20.1cm long, Vaucluse markets it for candles, grills, and fireplaces alike.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/electric-lighter-pale-peach",
      "pros": [
        "No butane refills — recharges over USB",
        "300+ ignitions per charge",
        "Windproof arc ignition works where open-flame lighters struggle",
        "Dual-switch safety lock to prevent accidental activation"
      ],
      "cons": [
        "Needs recharging eventually, unlike a disposable butane lighter",
        "Arc ignition has an audible click some may find less charming than a flame"
      ],
      "specifications": [
        {
          "label": "Color",
          "value": "Pale Peach"
        },
        {
          "label": "Ignitions per charge",
          "value": "300+"
        },
        {
          "label": "Charging",
          "value": "USB, ~1 hour"
        },
        {
          "label": "Dimensions",
          "value": "20.1cm × 1.7cm × 1.1cm"
        },
        {
          "label": "Weight",
          "value": "50g"
        },
        {
          "label": "Material",
          "value": "Aluminum"
        }
      ],
      "faqs": [
        {
          "question": "How long does it take to charge?",
          "answer": "About 1 hour via USB, for 300+ ignitions per charge."
        },
        {
          "question": "Is it safe around kids?",
          "answer": "It has a dual-switch safety lock designed to prevent accidental activation."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/electric-lighter-pale-peach",
          "price": 95,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Electric Lighter - Pale Peach",
      "metaDescription": "A USB-rechargeable, flameless arc lighter (pale peach) rated for 300+ ignitions per charge.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/electric-lighter-pale-peach-2430452.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-warmer-lamp-smoky-grey",
      "title": "Vaucluse Candle Warmer Lamp - Smoky Grey",
      "excerpt": "A flame-free candle warmer (smoky grey) with a dimmable 50W bulb and adjustable height.",
      "description": "This Smoky Grey candle warmer lamp uses a 50W G10 halogen bulb to melt candle wax from above instead of burning a wick, giving a flame-free, smokeless way to release a candle's scent. Brightness dims across 25-100%, height adjusts from 23-32cm to fit different jar sizes, and an auto shutoff timer (2/4/8 hours) is built in. The frame is wrought iron with smoky grey glass.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-smoky-grey",
      "pros": [
        "Flame-free and smoke-free way to enjoy scented candles",
        "Height-adjustable (23-32cm) to fit most jar candle sizes",
        "Auto shutoff timer (2/4/8 hours) for unattended use",
        "Dimmable brightness doubles as ambient lighting"
      ],
      "cons": [
        "Only works with jar candles that fit its height range — not tealights or pillar candles",
        "Halogen bulb will need replacing eventually"
      ],
      "specifications": [
        {
          "label": "Color / material",
          "value": "Smoky Grey, wrought iron with smoky grey glass"
        },
        {
          "label": "Bulb",
          "value": "G10 halogen, 50W"
        },
        {
          "label": "Brightness",
          "value": "Dimmable 25-100%"
        },
        {
          "label": "Timer",
          "value": "2H / 4H / 8H auto shutoff"
        },
        {
          "label": "Height range",
          "value": "23-32cm, adjustable"
        }
      ],
      "faqs": [
        {
          "question": "Does it work with any candle?",
          "answer": "It's designed for jar candles that fit within its 23-32cm adjustable height range — not tealights or pillar candles."
        },
        {
          "question": "Does it produce smoke like a wick does?",
          "answer": "No — it melts wax with a warming bulb rather than burning a wick, so Vaucluse describes it as smokeless and soot-free."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-smoky-grey",
          "price": 298,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Warmer Lamp - Smoky Grey",
      "metaDescription": "A flame-free candle warmer (smoky grey) with a dimmable 50W bulb and adjustable height.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-smoky-grey-crystal-candle-warmer-lamp.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-warmer-lamp-beige",
      "title": "Vaucluse Candle Warmer Lamp - Beige",
      "excerpt": "A flame-free candle warmer (beige) with a dimmable 50W bulb and adjustable height.",
      "description": "This Beige candle warmer lamp uses a 50W G10 halogen bulb to melt candle wax from above instead of burning a wick, giving a flame-free, smokeless way to release a candle's scent. Brightness dims across 25-100%, height adjusts from 23-32cm to fit different jar sizes, and an auto shutoff timer (2/4/8 hours) is built in. The frame is wrought iron with beige frosted glass and wooden base.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-beige",
      "pros": [
        "Flame-free and smoke-free way to enjoy scented candles",
        "Height-adjustable (23-32cm) to fit most jar candle sizes",
        "Auto shutoff timer (2/4/8 hours) for unattended use",
        "Dimmable brightness doubles as ambient lighting"
      ],
      "cons": [
        "Only works with jar candles that fit its height range — not tealights or pillar candles",
        "Halogen bulb will need replacing eventually"
      ],
      "specifications": [
        {
          "label": "Color / material",
          "value": "Beige, wrought iron with beige frosted glass and wooden base"
        },
        {
          "label": "Bulb",
          "value": "G10 halogen, 50W"
        },
        {
          "label": "Brightness",
          "value": "Dimmable 25-100%"
        },
        {
          "label": "Timer",
          "value": "2H / 4H / 8H auto shutoff"
        },
        {
          "label": "Height range",
          "value": "23-32cm, adjustable"
        }
      ],
      "faqs": [
        {
          "question": "Does it work with any candle?",
          "answer": "It's designed for jar candles that fit within its 23-32cm adjustable height range — not tealights or pillar candles."
        },
        {
          "question": "Does it produce smoke like a wick does?",
          "answer": "No — it melts wax with a warming bulb rather than burning a wick, so Vaucluse describes it as smokeless and soot-free."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-beige",
          "price": 298,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Warmer Lamp - Beige",
      "metaDescription": "A flame-free candle warmer (beige) with a dimmable 50W bulb and adjustable height.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-crystal-candle-warmer-lamp-beige.jpg"
      ],
      "publish": true
    },
    {
      "slug": "candle-warmer-lamp-transparent",
      "title": "Vaucluse Candle Warmer Lamp - Transparent",
      "excerpt": "A flame-free candle warmer (transparent) with a dimmable 50W bulb and adjustable height.",
      "description": "This Transparent candle warmer lamp uses a 50W G10 halogen bulb to melt candle wax from above instead of burning a wick, giving a flame-free, smokeless way to release a candle's scent. Brightness dims across 25-100%, height adjusts from 23-32cm to fit different jar sizes, and an auto shutoff timer (2/4/8 hours) is built in. The frame is wrought iron with transparent glass, dark wood base, gold accent.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-transparent",
      "pros": [
        "Flame-free and smoke-free way to enjoy scented candles",
        "Height-adjustable (23-32cm) to fit most jar candle sizes",
        "Auto shutoff timer (2/4/8 hours) for unattended use",
        "Dimmable brightness doubles as ambient lighting"
      ],
      "cons": [
        "Only works with jar candles that fit its height range — not tealights or pillar candles",
        "Halogen bulb will need replacing eventually"
      ],
      "specifications": [
        {
          "label": "Color / material",
          "value": "Transparent, wrought iron with transparent glass, dark wood base, gold accent"
        },
        {
          "label": "Bulb",
          "value": "G10 halogen, 50W"
        },
        {
          "label": "Brightness",
          "value": "Dimmable 25-100%"
        },
        {
          "label": "Timer",
          "value": "2H / 4H / 8H auto shutoff"
        },
        {
          "label": "Height range",
          "value": "23-32cm, adjustable"
        }
      ],
      "faqs": [
        {
          "question": "Does it work with any candle?",
          "answer": "It's designed for jar candles that fit within its 23-32cm adjustable height range — not tealights or pillar candles."
        },
        {
          "question": "Does it produce smoke like a wick does?",
          "answer": "No — it melts wax with a warming bulb rather than burning a wick, so Vaucluse describes it as smokeless and soot-free."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/candle-warmer-lamp-transparent",
          "price": 298,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Candle Warmer Lamp - Transparent",
      "metaDescription": "A flame-free candle warmer (transparent) with a dimmable 50W bulb and adjustable height.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-transparent-crystal-candle-warmer-lamp.jpg"
      ],
      "publish": true
    },
    {
      "slug": "glass-dome-with-base",
      "title": "Vaucluse Glass Dome with Black Wooden Base",
      "excerpt": "An 18.5cm clear glass display dome on a black wooden base — for candles, flowers, or keepsakes.",
      "description": "This display dome pairs a clear glass cover (18.5cm tall) with a 14.5cm black wooden base, designed to protect a candle, flowers, or keepsake from dust while keeping it visible. Vaucluse markets it as a centerpiece for special occasions, gifting, or everyday display.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "christmas"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/glass-dome-with-base",
      "pros": [
        "Protects displayed items from dust while keeping them visible",
        "Works with candles, flowers, or keepsakes — not single-purpose",
        "Black wooden base complements most decor styles"
      ],
      "cons": [
        "Glass dome adds fragility risk versus an open display",
        "Fixed 18.5cm height limits what can fit underneath"
      ],
      "specifications": [
        {
          "label": "Height",
          "value": "18.5cm"
        },
        {
          "label": "Base diameter",
          "value": "14.5cm"
        },
        {
          "label": "Material",
          "value": "Clear glass dome, black wooden base"
        }
      ],
      "faqs": [
        {
          "question": "What can I display under it?",
          "answer": "Vaucluse suggests candles, flowers, or keepsakes — anything that fits within the 18.5cm height and 14.5cm base."
        },
        {
          "question": "Does it come with a candle?",
          "answer": "No — this listing is for the dome and base only."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/glass-dome-with-base",
          "price": 149,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse Glass Dome with Black Wooden Base",
      "metaDescription": "An 18.5cm clear glass display dome on a black wooden base — for candles, flowers, or keepsakes.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/glass-dome-with-base-6018404.jpg"
      ],
      "publish": true
    },
    {
      "slug": "rose-velvet-hand-cream",
      "title": "Vaucluse Rose Velvet Hand Cream",
      "excerpt": "A 50ml shea-butter hand cream in Vaucluse's rose-fruity-musk scent, layerable with their Eau de Parfum.",
      "description": "This 50ml hand cream is formulated with shea butter and nourishing oils for a quick-absorbing, non-greasy finish. It shares its floral-fruity-musk scent family (peach, apple, plum top; rose and transparent florals at the heart; musky amberwood base) with Vaucluse's body wash, so the two can be layered for a stronger, longer-lasting scent. At the time of research this product showed as sold out on Vaucluse's site, so no current price is listed here — check the live product page for availability and price.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/rose-velvet-hand-cream",
      "pros": [
        "Shea butter formula absorbs quickly without a greasy residue",
        "Same scent family as the matching body wash, for layering",
        "Compact, travel-friendly tube"
      ],
      "cons": [
        "Showed as sold out with no listed price at the time of research — check current availability",
        "Scent-layering only works if you also own the matching body wash/EDP"
      ],
      "specifications": [
        {
          "label": "Size",
          "value": "50ml / 1.7 fl. oz."
        },
        {
          "label": "Top notes",
          "value": "Peach, apple, plum"
        },
        {
          "label": "Heart notes",
          "value": "Rose, transparent florals"
        },
        {
          "label": "Base notes",
          "value": "Musky amberwood"
        },
        {
          "label": "Key ingredient",
          "value": "Shea butter"
        }
      ],
      "faqs": [
        {
          "question": "Does this match another Vaucluse product's scent?",
          "answer": "Yes — it shares its floral-fruity-musk scent family with the Lumière de Rose Body Wash, so the two can be layered."
        },
        {
          "question": "Is it currently in stock?",
          "answer": "At the time of research this product showed as sold out on Vaucluse's site — check the live product page for current availability."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/rose-velvet-hand-cream"
        }
      ],
      "metaTitle": "Vaucluse Rose Velvet Hand Cream",
      "metaDescription": "A 50ml shea-butter hand cream in Vaucluse's rose-fruity-musk scent, layerable with their Eau de Parfum.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-rose-velvet-hand-cream-white-tube.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lumiere-de-rose-body-wash",
      "title": "Vaucluse Lumière de Rose Body Wash",
      "excerpt": "A 500ml floral-fruity body wash that layers with Vaucluse's matching hand cream and Eau de Parfum.",
      "description": "This 500ml body wash creates a silky lather in the same floral-fruity-musk scent family as Vaucluse's Rose Velvet Hand Cream (peach, apple, plum top; rose and transparent florals at the heart; musky amberwood base), designed to cleanse without stripping the skin's natural moisture. At the time of research this product showed as sold out on Vaucluse's site, so no current price is listed here — check the live product page for availability and price.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "occasionSlugs": [
        "mothers-day"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lumiere-de-rose-body-wash",
      "pros": [
        "Large 500ml size for a body wash",
        "Same scent family as the matching hand cream, for layering",
        "Formulated to cleanse without stripping natural moisture"
      ],
      "cons": [
        "Showed as sold out with no listed price at the time of research — check current availability",
        "Scent-layering only works if you also own the matching hand cream/EDP"
      ],
      "specifications": [
        {
          "label": "Size",
          "value": "500ml / 16.9 fl. oz."
        },
        {
          "label": "Top notes",
          "value": "Peach, apple, plum"
        },
        {
          "label": "Heart notes",
          "value": "Rose, transparent florals"
        },
        {
          "label": "Base notes",
          "value": "Musky amberwood"
        }
      ],
      "faqs": [
        {
          "question": "Does this match another Vaucluse product's scent?",
          "answer": "Yes — it shares its floral-fruity-musk scent family with the Rose Velvet Hand Cream, so the two can be layered."
        },
        {
          "question": "Is it currently in stock?",
          "answer": "At the time of research this product showed as sold out on Vaucluse's site — check the live product page for current availability."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lumiere-de-rose-body-wash"
        }
      ],
      "metaTitle": "Vaucluse Lumière de Rose Body Wash",
      "metaDescription": "A 500ml floral-fruity body wash that layers with Vaucluse's matching hand cream and Eau de Parfum.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/lumiere-de-rose-body-wash-8583255.jpg"
      ],
      "publish": true
    },
    {
      "slug": "thank-you-card",
      "title": "Vaucluse \"Thank You\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Thank You\" text, envelope and protective sleeve included.",
      "description": "This Thank You card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"Thank You\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/thank-you-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/thank-you-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Thank You\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Thank You\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-luxury-thank-you-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "i-love-you-card",
      "title": "Vaucluse \"I Love You\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"I Love You\" text, envelope and protective sleeve included.",
      "description": "This I Love You card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"With Love Always\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/i-love-you-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/i-love-you-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"I Love You\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"I Love You\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-luxury-i-love-you-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "congratulations-card",
      "title": "Vaucluse \"Congratulations\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Congratulations\" text, envelope and protective sleeve included.",
      "description": "This Congratulations card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"Congratulations\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/congratulations-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/congratulations-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Congratulations\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Congratulations\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-luxury-congratulations-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "im-sorry-card",
      "title": "Vaucluse \"I'm Sorry\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"I'm Sorry\" text, envelope and protective sleeve included.",
      "description": "This I'm Sorry card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"I'm Sorry\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/im-sorry-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/im-sorry-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"I'm Sorry\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"I'm Sorry\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-im-sorry-card-and-envelope.jpg"
      ],
      "publish": true
    },
    {
      "slug": "lets-celebrate-card",
      "title": "Vaucluse \"Let's Celebrate\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Let's Celebrate\" text, envelope and protective sleeve included.",
      "description": "This Let's Celebrate card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"Let's Celebrate\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/lets-celebrate-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/lets-celebrate-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Let's Celebrate\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Let's Celebrate\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-luxury-lets-celebrate-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "happy-house-warming-card",
      "title": "Vaucluse \"Happy House Warming\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Happy House Warming\" text, envelope and protective sleeve included.",
      "description": "This Happy House Warming card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"Happy House Warming\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/happy-house-warming-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/happy-house-warming-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Happy House Warming\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Happy House Warming\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-luxury-housewarming-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "happy-birthday-card",
      "title": "Vaucluse \"Happy Birthday\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Happy Birthday\" text, envelope and protective sleeve included.",
      "description": "This Happy Birthday card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"Happy Birthday To You\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/happy-birthday-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/happy-birthday-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Happy Birthday\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Happy Birthday\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-happy-birthday-to-you-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "appreciation-card",
      "title": "Vaucluse \"Appreciation\" Greeting Card",
      "excerpt": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Appreciation\" text, envelope and protective sleeve included.",
      "description": "This Appreciation card is made from 300g cream cardstock with a gold foil/embossed floral design reading \"I Appreciate You, Thank You For Everything\". It ships with a matching 120g paper envelope and a protective plastic sleeve, at 14.8cm × 10.5cm. Vaucluse also offers personalized message writing on request via the \"Special instructions for seller\" field at checkout.",
      "categorySlugs": [
        "home-fragrance"
      ],
      "brandSlug": "vaucluse-fragrance",
      "officialUrl": "https://vauclusefragrance.com/products/appreciation-card",
      "pros": [
        "Premium 300g cardstock with gold foil/embossed detailing",
        "Matching envelope and protective sleeve included",
        "Optional personalized message writing on request at checkout"
      ],
      "cons": [
        "Single card only — no multi-pack discount for this listing",
        "Fixed design; no color/style variants for this card"
      ],
      "specifications": [
        {
          "label": "Dimensions",
          "value": "14.8cm × 10.5cm"
        },
        {
          "label": "Card stock",
          "value": "300g cream paper"
        },
        {
          "label": "Envelope",
          "value": "120g paper"
        },
        {
          "label": "Includes",
          "value": "Card, envelope, protective plastic sleeve"
        }
      ],
      "faqs": [
        {
          "question": "Does it come with an envelope?",
          "answer": "Yes — a matching 120g paper envelope and a protective plastic sleeve are included."
        },
        {
          "question": "Can Vaucluse write a personal message inside?",
          "answer": "Yes — you can request personalized message writing via the \"Special instructions for seller\" field at checkout."
        },
        {
          "question": "What's the return policy?",
          "answer": "See Vaucluse's refund policy on their site; free shipping applies to orders over HK$400."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "vaucluse-fragrance",
          "affiliateUrl": "https://vauclusefragrance.com/products/appreciation-card",
          "price": 30,
          "currency": "HKD"
        }
      ],
      "metaTitle": "Vaucluse \"Appreciation\" Greeting Card",
      "metaDescription": "A 14.8×10.5cm cream cardstock greeting card with gold foil \"Appreciation\" text, envelope and protective sleeve included.",
      "galleryImageUrls": [
        "https://vauclusefragrance.com/cdn/shop/files/vaucluse-fragrance-appreciation-thank-you-card.jpg"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-32-inch-smart-portable-tv",
      "title": "ApoloSign 32\" Smart Portable TV",
      "excerpt": "A 32-inch battery-powered touchscreen TV on wheels that runs Android with Google Play — for streaming, gaming, video calls, or moving the screen room to room.",
      "description": "The ApoloSign 32\" Smart Portable TV is a touchscreen Android display built around a wheeled stand rather than a wall mount, so it can be rolled between rooms and powered by its own battery for up to 6 hours. It runs Android 16 with full Google Play Store access, supports 1080p or 4K panel options, and includes an 8MP camera and dual microphones for video calls, plus Google Assistant and Gemini AI voice control. The stand adjusts for height, tilt, swivel, and 90-degree rotation, and it can also sync with an ApoloSign Digital Calendar as a shared smart-home dashboard.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "black-friday",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/apolosign-32-inch-portable-smart-screen",
      "pros": [
        "Built-in battery (up to ~6 hours) and wheeled stand make it genuinely portable between rooms",
        "Runs Android 16 with full Google Play Store access — not a closed streaming-only OS",
        "16GB RAM and up to 256GB storage (4K variant) are well above typical smart-display specs",
        "8MP camera and dual mics built in for video calls without extra hardware"
      ],
      "cons": [
        "$719-799 price range is a significant investment compared to a standard TV of similar size",
        "300-nit brightness is on the dim side for a bright room, especially versus dedicated TVs",
        "Battery life (~6 hours) is rated at 50% brightness while streaming over Wi-Fi — real-world use may be shorter"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "32\""
        },
        {
          "label": "Resolution",
          "value": "1080p or 4K (variant choice)"
        },
        {
          "label": "Touch",
          "value": "10-point multi-touch"
        },
        {
          "label": "RAM / Storage",
          "value": "16GB / 128GB (1080p) or 256GB (4K)"
        },
        {
          "label": "OS",
          "value": "Android 16 with Google Play Store"
        },
        {
          "label": "Battery",
          "value": "15000mAh, up to ~6 hours at 50% brightness"
        },
        {
          "label": "Ports",
          "value": "2× USB-A, 1× USB-C, 1× HDMI"
        },
        {
          "label": "Camera / mic",
          "value": "8MP camera, dual noise-cancelling mics"
        },
        {
          "label": "Stand",
          "value": "5 wheels, height/tilt/swivel adjustable, 90° rotation"
        },
        {
          "label": "List price",
          "value": "$799 (sale $719)"
        }
      ],
      "faqs": [
        {
          "question": "How long does the battery last?",
          "answer": "ApoloSign rates it at up to about 6 hours at 50% brightness while streaming over Wi-Fi; actual runtime depends on brightness and usage."
        },
        {
          "question": "Can I install apps like Netflix or YouTube directly?",
          "answer": "Yes — it runs Android 16 with full Google Play Store access, so you install apps directly rather than being limited to a fixed app list."
        },
        {
          "question": "Does it work with the ApoloSign Digital Calendar?",
          "answer": "Yes — ApoloSign markets it as syncing with the Digital Calendar for a shared smart-home dashboard."
        },
        {
          "question": "What's the warranty and return policy?",
          "answer": "1-year warranty and a 30-day return trial, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/apolosign-32-inch-portable-smart-screen",
          "price": 719,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 32\" Smart Portable TV",
      "metaDescription": "A 32-inch battery-powered touchscreen TV on wheels that runs Android with Google Play — for streaming, gaming, video calls, or moving the screen room to room.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/Product_32inch_1.webp"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-24-inch-smart-portable-tv",
      "title": "ApoloSign 24\" Smart Portable TV",
      "excerpt": "A smaller, more affordable 24-inch version of ApoloSign's battery-powered portable touchscreen TV, running Android 16 with Google Play.",
      "description": "The ApoloSign 24\" Smart Portable TV is the smaller, less expensive sibling of the 32-inch model, with the same wheeled, height/tilt/swivel-adjustable stand and Android 16 operating system with full Google Play Store access. It runs on a 6800mAh battery rated for up to about 4 hours, includes an 8MP detachable camera and dual noise-cancelling microphones for video calls, and supports AirPlay and Miracast screen casting alongside Google Assistant and Gemini AI voice control.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "black-friday",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/apolosign-24-inch-portable-smart-screen",
      "pros": [
        "Lower price than the 32-inch model while keeping the same Android 16 / Google Play software",
        "Detachable 8MP camera plus dual mics for video calls",
        "AirPlay and Miracast support in addition to standard Wi-Fi/Bluetooth/HDMI casting",
        "Same fully adjustable wheeled stand as the larger model"
      ],
      "cons": [
        "Shorter rated battery life (~4 hours) than the 32-inch model's ~6 hours",
        "250-nit brightness is dimmer than the 32-inch model's 300 nits",
        "128GB storage only — no 4K/256GB variant offered at this size"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "24\""
        },
        {
          "label": "Resolution",
          "value": "1920×1080 (1080p/FHD)"
        },
        {
          "label": "RAM / Storage",
          "value": "16GB / 128GB"
        },
        {
          "label": "OS",
          "value": "Android 16, EDLA certified, Google Play Store"
        },
        {
          "label": "Battery",
          "value": "6800mAh, up to ~4 hours at 50% brightness"
        },
        {
          "label": "Ports",
          "value": "2× USB-A, 1× USB-C, 1× HDMI"
        },
        {
          "label": "Camera / mic",
          "value": "8MP detachable camera, dual noise-cancelling mics"
        },
        {
          "label": "Casting",
          "value": "AirPlay, Miracast, Wi-Fi/Bluetooth/HDMI"
        },
        {
          "label": "Stand",
          "value": "5 wheels, height/tilt/swivel adjustable, 90° rotation"
        },
        {
          "label": "List price",
          "value": "$699 (sale $619)"
        }
      ],
      "faqs": [
        {
          "question": "How does this differ from the 32-inch model?",
          "answer": "It's a smaller 24-inch, 1080p-only screen with a smaller ~4-hour battery and lower price than the 32-inch model, which offers an optional 4K panel and roughly 6 hours of battery life."
        },
        {
          "question": "Can I use it for video calls?",
          "answer": "Yes — it has a detachable 8MP camera and dual noise-cancelling microphones."
        },
        {
          "question": "Does it support screen mirroring from a phone?",
          "answer": "Yes — it supports Apple AirPlay and Miracast, in addition to standard Wi-Fi, Bluetooth, and HDMI casting."
        },
        {
          "question": "What's the warranty and return policy?",
          "answer": "1-year warranty and a 30-day return trial, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/apolosign-24-inch-portable-smart-screen",
          "price": 619,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 24\" Smart Portable TV",
      "metaDescription": "A smaller, more affordable 24-inch version of ApoloSign's battery-powered portable touchscreen TV, running Android 16 with Google Play.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/Product_24inch_1.webp"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-packgo-27-portable-tv",
      "title": "ApoloSign PackGo 27\" Portable TV",
      "excerpt": "A 27-inch portable touchscreen TV built into a rugged briefcase — for camping, drone monitoring, gaming on the go, or outdoor movie nights.",
      "description": "The ApoloSign PackGo 27\" is the most portable and most expensive model in ApoloSign's TV lineup, built into a briefcase-style rugged enclosure with a handle and latch system rather than a wheeled floor stand. It has a 1080p touchscreen, runs Android with Google Play Store access, and adds a built-in 40W speaker system, 45W USB-C fast charging that can power external devices like a Nintendo Switch, and split-screen support aimed at FPV drone monitoring. ApoloSign markets it for outdoor parties, camping, gaming, and travel rather than as a fixed home display.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "black-friday",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/apolosign-packgo-27-smart-screen-packed-in-your-briefcase",
      "pros": [
        "Briefcase design with handle and latch is genuinely built for travel/outdoor use, not just a wheeled indoor stand",
        "Built-in 40W speaker system is notably more powerful than the 32-inch and 24-inch models' small stereo speakers",
        "45W USB-C fast charging can power other devices, including a Nintendo Switch",
        "450-nit brightness is the highest in the TV lineup, helping in outdoor daylight use"
      ],
      "cons": [
        "Most expensive product in ApoloSign's entire lineup at $999-$1,099",
        "1080p only — no 4K option, despite the higher price than the 32-inch 4K variant",
        "Briefcase form factor is bulkier to carry than a simple portable frame or tablet"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "27\""
        },
        {
          "label": "Resolution",
          "value": "1920×1080 (1080p)"
        },
        {
          "label": "Brightness",
          "value": "450 nits"
        },
        {
          "label": "Processor",
          "value": "RK3588 (quad A55 + quad A76)"
        },
        {
          "label": "RAM / Storage",
          "value": "8GB / 128GB"
        },
        {
          "label": "Battery",
          "value": "6800mAh, up to ~6 hours playtime"
        },
        {
          "label": "Charging",
          "value": "45W USB-C fast charge (can power external devices)"
        },
        {
          "label": "Audio",
          "value": "Built-in 40W speaker system (2 tweeters + 2 woofers)"
        },
        {
          "label": "Ports",
          "value": "2× USB-C, 1× USB-A, 1× HDMI"
        },
        {
          "label": "Form factor",
          "value": "Rugged briefcase with handle and latch"
        },
        {
          "label": "List price",
          "value": "$1,099 (sale $999)"
        }
      ],
      "faqs": [
        {
          "question": "Can it charge other devices, like a Nintendo Switch?",
          "answer": "Yes — ApoloSign markets its 45W USB-C port as able to provide external power, including for a Nintendo Switch."
        },
        {
          "question": "Is this the same screen technology as the 32-inch model?",
          "answer": "Similar touchscreen LCD technology, but the PackGo tops out at 1080p (no 4K option) and has a higher 450-nit brightness rating."
        },
        {
          "question": "What's it designed for?",
          "answer": "ApoloSign markets it for outdoor parties, camping, gaming, FPV drone monitoring, and travel, built into a rugged briefcase form factor."
        },
        {
          "question": "What's the warranty and return policy?",
          "answer": "1-year warranty and a 30-day return trial, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/apolosign-packgo-27-smart-screen-packed-in-your-briefcase",
          "price": 999,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign PackGo 27\" Portable TV",
      "metaDescription": "A 27-inch portable touchscreen TV built into a rugged briefcase — for camping, drone monitoring, gaming on the go, or outdoor movie nights.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/PackGo_Grey_PI01.webp"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-15-6-digital-calendar",
      "title": "ApoloSign 15.6\" Digital Calendar",
      "excerpt": "A 15.6-inch touchscreen family organizer that syncs every family member's calendar, chores, and meal plans onto one shared screen — no monthly subscription required.",
      "description": "The ApoloSign 15.6\" Digital Calendar is a 1080p touchscreen hub built to replace the paper calendar on the fridge. It syncs with Google Calendar, Outlook, iCloud, and other calendar apps so every family member's schedule shows up in one place, and it doubles as a customizable Android dashboard with widgets, a chore-and-rewards tracker, meal planning, a family message board, and Google Photos integration. All of that runs on the included Android EDLA license with no ongoing subscription fee. It ships with a wall mount bracket and a desk stand, so it works on a counter or mounted to a wall.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/15-6-digital-calendar",
      "pros": [
        "Syncs multiple calendar accounts (Google, Outlook, iCloud) into one shared view",
        "No subscription required for calendar sync, Google Photos, or chore tracking",
        "Includes both a wall mount bracket and a desk stand in the box",
        "Google Assistant and Google Home integration for voice control"
      ],
      "cons": [
        "1080p resolution and 300-nit brightness are modest for a 15.6-inch panel in a bright room",
        "4GB RAM / 64GB storage is entry-level if used heavily as a general Android tablet",
        "Only one screen size step below the 21.5-inch model, so text/UI elements are smaller"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "15.6\""
        },
        {
          "label": "Resolution",
          "value": "1920×1080 (1080p)"
        },
        {
          "label": "Display type",
          "value": "LCD, 10-point touchscreen"
        },
        {
          "label": "Processor",
          "value": "RK3576 octa-core"
        },
        {
          "label": "RAM / Storage",
          "value": "4GB / 64GB"
        },
        {
          "label": "OS",
          "value": "Android (EDLA licensed)"
        },
        {
          "label": "Connectivity",
          "value": "Wi-Fi 6, Bluetooth 5.4, USB-C"
        },
        {
          "label": "Audio",
          "value": "Dual 3W speakers, quad microphones"
        },
        {
          "label": "In the box",
          "value": "Calendar, power adapter, wall mount bracket, desk stand, manual"
        },
        {
          "label": "List price",
          "value": "$349 (sale $279)"
        }
      ],
      "faqs": [
        {
          "question": "Do I need a subscription to use the calendar sync or photo features?",
          "answer": "No — ApoloSign advertises the calendar sync, Google Photos integration, and chore tracking as included with no monthly subscription."
        },
        {
          "question": "Can I mount it on the wall or does it only stand on a desk?",
          "answer": "Both — the box includes a wall mount bracket and a desk calendar stand."
        },
        {
          "question": "Which calendar apps does it sync with?",
          "answer": "Google Calendar, Outlook, iCloud, and other standard calendar apps, according to ApoloSign."
        },
        {
          "question": "What's the return and warranty policy?",
          "answer": "ApoloSign offers a 30-day return trial and a 1-year warranty on this model."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/15-6-digital-calendar",
          "price": 279,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 15.6\" Digital Calendar",
      "metaDescription": "A 15.6-inch touchscreen family organizer that syncs every family member's calendar, chores, and meal plans onto one shared screen — no monthly subscription required.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/48bd399b2eb1660f215094d056594426.webp"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-21-5-digital-calendar",
      "title": "ApoloSign 21.5\" Digital Calendar",
      "excerpt": "A larger 21.5-inch version of ApoloSign's family calendar hub, wall-mount only, with the same subscription-free calendar sync and chore tracking as the 15.6-inch model.",
      "description": "The ApoloSign 21.5\" Digital Calendar steps up to a bigger 1080p touchscreen for households that want the family schedule readable from across the kitchen. It carries the same dual-mode design as the rest of the lineup — a dedicated Family Calendar mode that auto-syncs Apple, Google, and Outlook calendars, plus a customizable Android dashboard mode with widgets, chore/reward tracking, meal planning, a family message board, and Google Photos integration, all without a subscription. Unlike the 15.6-inch model, this size ships wall-mount only, with no desk stand included.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/21-5-digital-calendar",
      "pros": [
        "Bigger 21.5-inch screen is easier to read from across a room than the 15.6-inch model",
        "Same subscription-free calendar sync, chore tracking, and Google Photos integration as the rest of the lineup",
        "Anti-glare matte glass finish helps in kitchens with overhead lighting",
        "Google Assistant and Google Home smart-home integration built in"
      ],
      "cons": [
        "Wall-mount only — no desk stand included, unlike the 15.6-inch model",
        "Still 1080p at this larger size, so pixel density is lower than the 15.6-inch version",
        "4GB RAM / 64GB storage is the same as the smaller, cheaper model"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "21.5\""
        },
        {
          "label": "Resolution",
          "value": "1920×1080 (1080p)"
        },
        {
          "label": "Display type",
          "value": "LCD, 10-point touchscreen"
        },
        {
          "label": "Processor",
          "value": "RK3576 octa-core"
        },
        {
          "label": "RAM / Storage",
          "value": "4GB / 64GB"
        },
        {
          "label": "OS",
          "value": "Android (EDLA licensed)"
        },
        {
          "label": "Connectivity",
          "value": "Wi-Fi 6, Bluetooth 5.4, USB-C"
        },
        {
          "label": "Mounting",
          "value": "Wall mount only (no desk stand)"
        },
        {
          "label": "In the box",
          "value": "Calendar, power adapter, wall mount bracket, manual"
        },
        {
          "label": "List price",
          "value": "$449 (sale $379)"
        }
      ],
      "faqs": [
        {
          "question": "Does this size come with a desk stand?",
          "answer": "No — the 21.5-inch model is wall-mount only. The 15.6-inch model is the one that includes a desk stand."
        },
        {
          "question": "Is there a subscription fee for the calendar or photo sync?",
          "answer": "No, ApoloSign advertises full calendar sync, chore tracking, and Google Photos access with no subscription."
        },
        {
          "question": "Can I control it with my voice?",
          "answer": "Yes — it supports Google Assistant and Google Home integration."
        },
        {
          "question": "What's the warranty and return policy?",
          "answer": "1-year warranty and a 30-day risk-free return trial, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/21-5-digital-calendar",
          "price": 379,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 21.5\" Digital Calendar",
      "metaDescription": "A larger 21.5-inch version of ApoloSign's family calendar hub, wall-mount only, with the same subscription-free calendar sync and chore tracking as the 15.6-inch model.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/DigitalCalendar_FA2169_Teak_P1_3539d786-7168-401f-b9ea-fdd5ab717404.png"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-27-digital-calendar",
      "title": "ApoloSign 27\" Digital Calendar",
      "excerpt": "ApoloSign's largest standard-resolution family calendar — a 27-inch touchscreen hub for calendar sync, chores, meal planning, and smart-home control.",
      "description": "The ApoloSign 27\" Digital Calendar is the largest 1080p model in the lineup, aimed at households that want the family schedule visible as a genuine wall display rather than a small screen. It keeps the same dual-mode format as the smaller sizes — a Family Calendar mode that syncs Apple, Google, Outlook, Yahoo, and Cozi calendars, and an Android dashboard mode with customizable widgets, chore/reward tracking, meal planning, a family message board, Google Photos integration, and Google Assistant voice control — all without a subscription.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/27-digital-calendar",
      "pros": [
        "27-inch screen makes it readable as a genuine wall display, not just a close-up touchscreen",
        "Syncs more calendar services than the smaller models (adds Yahoo and Cozi)",
        "No subscription for calendar sync, chore tracking, or Google Photos",
        "VESA 100×100mm mount pattern for standard wall-mount hardware"
      ],
      "cons": [
        "Still 1080p resolution at 27 inches, so text can look softer up close than the 27\" 4K model",
        "Same 4GB RAM / 64GB storage as the smaller, cheaper sizes",
        "Wall mount only, no desk stand at this size"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "27\""
        },
        {
          "label": "Resolution",
          "value": "1920×1080 (1080p)"
        },
        {
          "label": "Display type",
          "value": "LCD, 10-point touchscreen"
        },
        {
          "label": "Contrast ratio",
          "value": "1300:1"
        },
        {
          "label": "Processor",
          "value": "RK3576 octa-core"
        },
        {
          "label": "RAM / Storage",
          "value": "4GB / 64GB"
        },
        {
          "label": "Connectivity",
          "value": "Wi-Fi 6, Bluetooth 5.4, USB-C"
        },
        {
          "label": "Mount",
          "value": "VESA 100×100mm wall mount"
        },
        {
          "label": "In the box",
          "value": "Calendar, power adapter, wall mount bracket, manual"
        },
        {
          "label": "List price",
          "value": "$699 (sale $579)"
        }
      ],
      "faqs": [
        {
          "question": "What calendar services does this sync with?",
          "answer": "Apple, Google, Outlook, Yahoo, and Cozi calendars, according to ApoloSign."
        },
        {
          "question": "Is this the same resolution as the 27\" 4K model?",
          "answer": "No — this 27\" model is 1080p. ApoloSign sells a separate 27\" 4K model with a sharper 3840×2160 panel."
        },
        {
          "question": "Does it come with a stand for a desk or table?",
          "answer": "No, this size is wall-mount only using the included VESA bracket."
        },
        {
          "question": "What's the return and warranty policy?",
          "answer": "30-day risk-free return trial and a 1-year warranty, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/27-digital-calendar",
          "price": 579,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 27\" Digital Calendar",
      "metaDescription": "ApoloSign's largest standard-resolution family calendar — a 27-inch touchscreen hub for calendar sync, chores, meal planning, and smart-home control.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/DigitalCalendar_FA2769_Teak_P1.png"
      ],
      "publish": true
    },
    {
      "slug": "apolosign-27-4k-digital-calendar",
      "title": "ApoloSign 27\" 4K Digital Calendar",
      "excerpt": "The flagship of ApoloSign's calendar lineup — a 27-inch 4K touchscreen with the same subscription-free calendar sync, chores, and Google Assistant/Gemini AI voice control.",
      "description": "The ApoloSign 27\" 4K Digital Calendar is the top-of-line model in the calendar series, pairing the largest screen size with a 3840×2160 4K panel and an anti-glare matte finish. It runs the same dual-mode design as the rest of the lineup — a Family Calendar mode syncing Google, Apple/iCloud, Outlook, Yahoo, and Cozi calendars, and an Android dashboard mode with chore/reward tracking, meal planning, a family message board, Google Photos integration, and voice control through Google Assistant with Gemini AI — all with no subscription fee.",
      "categorySlugs": [
        "smart-displays"
      ],
      "occasionSlugs": [
        "christmas",
        "mothers-day",
        "back-to-school"
      ],
      "brandSlug": "apolosign",
      "officialUrl": "https://www.apolosign.com/products/apolosign-27-4k-digital-calendar",
      "pros": [
        "4K panel — the only one in the calendar lineup — for sharper text and photos than the 1080p 27\" model",
        "Same no-subscription calendar sync, chore tracking, and Google Photos as the rest of the range",
        "Google Assistant with Gemini AI adds more capable voice control than the other calendar models",
        "Syncs the widest range of calendar services in the lineup (adds Yahoo and Cozi)"
      ],
      "cons": [
        "Most expensive model in the calendar lineup",
        "Same 4GB RAM / 64GB storage as the cheaper 1080p models, despite the higher-resolution panel",
        "Wall mount only, no desk stand"
      ],
      "specifications": [
        {
          "label": "Screen size",
          "value": "27\""
        },
        {
          "label": "Resolution",
          "value": "3840×2160 (4K)"
        },
        {
          "label": "Display type",
          "value": "LCD, 10-point touchscreen, anti-glare matte"
        },
        {
          "label": "Processor",
          "value": "RK3576 octa-core"
        },
        {
          "label": "RAM / Storage",
          "value": "4GB / 64GB"
        },
        {
          "label": "Connectivity",
          "value": "Wi-Fi 6, Bluetooth 5.4, USB-C"
        },
        {
          "label": "Voice assistant",
          "value": "Google Assistant with Gemini AI"
        },
        {
          "label": "Mount",
          "value": "VESA 100×100mm wall mount"
        },
        {
          "label": "In the box",
          "value": "Calendar, power adapter, wall mount bracket, manual"
        },
        {
          "label": "List price",
          "value": "$799 (sale $679)"
        }
      ],
      "faqs": [
        {
          "question": "How is this different from the standard 27\" Digital Calendar?",
          "answer": "Same 27-inch size, but this model has a 3840×2160 4K panel with an anti-glare matte finish, versus 1080p on the standard 27\" model."
        },
        {
          "question": "Does it need a subscription for calendar sync or photos?",
          "answer": "No — ApoloSign includes calendar sync, chore tracking, and Google Photos integration with no subscription."
        },
        {
          "question": "Does it come with a desk stand?",
          "answer": "No, it's wall-mount only using the included VESA bracket."
        },
        {
          "question": "What's the warranty and return policy?",
          "answer": "1-year warranty with a 30-day risk-free return trial, per ApoloSign."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "best-upgrade",
      "retailerLinks": [
        {
          "retailerSlug": "apolosign",
          "affiliateUrl": "https://www.apolosign.com/products/apolosign-27-4k-digital-calendar",
          "price": 679,
          "currency": "USD"
        }
      ],
      "metaTitle": "ApoloSign 27\" 4K Digital Calendar",
      "metaDescription": "The flagship of ApoloSign's calendar lineup — a 27-inch 4K touchscreen with the same subscription-free calendar sync, chores, and Google Assistant/Gemini AI voice control.",
      "galleryImageUrls": [
        "https://media.gettrendyfinds.com/DigitalCalendar_FA2769_4K_Oak_P1.png"
      ],
      "publish": true
    },
    {
      "slug": "moondrop-blessing3",
      "title": "Moondrop Blessing 3",
      "excerpt": "A 2DD+4BA hybrid IEM with a horizontally-opposed dual dynamic driver design for full-bodied, low-distortion bass.",
      "description": "The Blessing 3 pairs a horizontally-opposed dual 10mm dynamic driver setup with 4 balanced armatures, using 3D-printed acoustic structures for frequency division aimed at higher dynamic range and lower nonlinear distortion than earlier Moondrop hybrids. The shell is 3D-printed medical resin with a CNC-machined stainless steel faceplate, and the cable uses a standard interchangeable 0.78mm 2-pin connector.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "moondrop",
      "officialUrl": "https://www.linsoul.com/products/moondrop-blessing3",
      "pros": [
        "2DD+4BA hybrid driver setup with a horizontally-opposed dual dynamic driver design for full-bodied, low-distortion bass",
        "3D-printed medical resin housing with a CNC-machined stainless steel faceplate",
        "Interchangeable 0.78mm 2-pin cable for cable rolling/upgrades",
        "120dB sensitivity and 14.8Ω impedance make it easy to drive from a phone or dongle"
      ],
      "cons": [
        "$359.99 puts it well above entry-level IEM pricing",
        "Ships as pre-order with a 1-2 week wait per Linsoul's listing",
        "Filter-free nozzle design means less tuning flexibility via filter swaps than some competitors"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "2 Dynamic Drivers (horizontally-opposed) + 4 Balanced Armatures"
        },
        {
          "label": "Impedance",
          "value": "14.8Ω ±15% (@1kHz)"
        },
        {
          "label": "Sensitivity",
          "value": "120dB/Vrms (@1kHz)"
        },
        {
          "label": "Frequency Response",
          "value": "10Hz–30kHz"
        },
        {
          "label": "THD",
          "value": "≤0.5% (@1kHz)"
        },
        {
          "label": "Connector",
          "value": "0.78mm 2-pin"
        },
        {
          "label": "Cable Jack",
          "value": "3.5mm single-ended"
        },
        {
          "label": "Nozzle Diameter",
          "value": "0.58cm"
        }
      ],
      "faqs": [
        {
          "question": "What driver configuration does the Blessing 3 use?",
          "answer": "A horizontally-opposed dual 10mm dynamic driver setup paired with 4 balanced armatures (2DD+4BA), using 3D-printed acoustic structures for frequency division."
        },
        {
          "question": "What's included in the box?",
          "answer": "The Blessing 3 pair, a user manual, an interchangeable 0.78mm 2-pin cable, and silicone eartips."
        },
        {
          "question": "What's the warranty?",
          "answer": "1-year warranty on the in-ear monitors and 3-month warranty on the cable, per Linsoul."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/moondrop-blessing3",
          "price": 359.99,
          "currency": "USD"
        }
      ],
      "metaTitle": "Moondrop Blessing 3",
      "metaDescription": "A 2DD+4BA hybrid IEM with a horizontally-opposed dual dynamic driver design for full-bodied, low-distortion bass.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/4_dc38e7b6-cbfb-45b2-a369-5117162a187c.jpg"
      ],
      "publish": true
    },
    {
      "slug": "7hz-timeless",
      "title": "7Hz Timeless",
      "excerpt": "A 14.2mm planar magnetic IEM with an ultra-thin diaphragm for fast, detailed transient response.",
      "description": "The Timeless uses a 14.2mm planar magnetic driver with a double-sided N52 magnet array and an ultra-thin diaphragm, housed in a CNC-machined aviation-grade aluminum shell with hard oxidation treatment. The detachable MMCX cable has a single-crystal copper inner core, and terminations are available in 3.5mm, 4.4mm, or 2.5mm.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "7hz",
      "officialUrl": "https://www.linsoul.com/products/7hz-timeless",
      "pros": [
        "14.2mm planar magnetic driver with an ultra-thin diaphragm for fast, detailed transient response",
        "CNC-machined aviation-grade aluminum shell",
        "Detachable MMCX cable with a single-crystal copper inner core",
        "Wide 5Hz-40kHz frequency response typical of planar drivers"
      ],
      "cons": [
        "Planar drivers are generally harder to drive than dynamic/BA designs, despite the 14.8Ω rated impedance",
        "MMCX connectors are less durable over repeated cable swaps than 2-pin designs"
      ],
      "specifications": [
        {
          "label": "Driver",
          "value": "14.2mm planar magnetic driver"
        },
        {
          "label": "Impedance",
          "value": "14.8Ω"
        },
        {
          "label": "Sensitivity",
          "value": "104dB/1kHz"
        },
        {
          "label": "Frequency Response",
          "value": "5Hz–40,000Hz"
        },
        {
          "label": "THD",
          "value": "<0.2% at 1kHz"
        },
        {
          "label": "Connector",
          "value": "MMCX (detachable)"
        },
        {
          "label": "Nozzle Diameter",
          "value": "5mm"
        },
        {
          "label": "Weight",
          "value": "5g per earbud"
        },
        {
          "label": "Cable Terminations",
          "value": "3.5mm, 4.4mm, or 2.5mm"
        }
      ],
      "faqs": [
        {
          "question": "What makes a planar driver different from a dynamic driver?",
          "answer": "Planar magnetic drivers use an ultra-thin diaphragm driven across its whole surface, which Linsoul markets as delivering faster transient response than a typical dynamic driver of similar size."
        },
        {
          "question": "What cable terminations are available?",
          "answer": "3.5mm, 4.4mm, or 2.5mm, selectable at checkout."
        },
        {
          "question": "Is the cable detachable?",
          "answer": "Yes — it uses a detachable MMCX connector with a single-crystal copper inner core cable."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/7hz-timeless",
          "price": 199.99,
          "currency": "USD"
        }
      ],
      "metaTitle": "7Hz Timeless",
      "metaDescription": "A 14.2mm planar magnetic IEM with an ultra-thin diaphragm for fast, detailed transient response.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/7HZTimeless-2_3d709844-2bea-4125-938e-61febf3e320f.jpg"
      ],
      "publish": true
    },
    {
      "slug": "thieaudio-monarch-mkii",
      "title": "ThieAudio Monarch MKII",
      "excerpt": "A 1DD+6BA+2EST tribrid flagship IEM with a modular Smart Switch cable covering 2.5mm, 3.5mm, and 4.4mm.",
      "description": "The Monarch MKII redesigns ThieAudio's flagship IEM with a 10mm composite diaphragm dynamic driver for tighter bass, four repositioned midrange balanced armatures (Sonion/Knowles) for a studio-neutral midrange, and repositioned electrostatic drivers for extended, lower-resonance treble. The bundled Smart Switch cable has modular 2.5mm/3.5mm/4.4mm plugs, removing the need for separate adapters.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "thieaudio",
      "officialUrl": "https://www.linsoul.com/products/thieaudio-monarch-mkii",
      "pros": [
        "1DD+6BA+2EST tribrid configuration with electrostatic drivers for extended treble",
        "Modular Smart Switch cable with interchangeable 2.5/3.5/4.4mm terminations — no separate adapters needed",
        "Studio-neutral midrange tuning aimed at critical listening/monitoring",
        "Comes with a carrying case, cleaning cloth, and a full set of termination adapters"
      ],
      "cons": [
        "$999 price point with 3-4 week pre-order processing",
        "Pre-orders are non-cancellable and non-refundable per Linsoul's policy",
        "36Ω impedance / 108dB sensitivity is more power-hungry than typical BA-only IEMs"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "1x 10mm Dynamic Driver, 6x Balanced Armatures (Sonion/Knowles), 2x Electrostatic Drivers"
        },
        {
          "label": "Impedance",
          "value": "36Ω"
        },
        {
          "label": "Sensitivity",
          "value": "108dB/mW"
        },
        {
          "label": "Connector",
          "value": "0.78mm 2-pin"
        },
        {
          "label": "Cable Length",
          "value": "1.2m"
        },
        {
          "label": "Cable Type",
          "value": "26AWG OCC silver-plated, fabric coating"
        },
        {
          "label": "Terminations",
          "value": "Smart Switch — 2.5mm, 3.5mm, 4.4mm interchangeable"
        },
        {
          "label": "Nozzle Size",
          "value": "5.4mm stem / 6mm lip"
        }
      ],
      "faqs": [
        {
          "question": "What is the Smart Switch cable?",
          "answer": "A modular cable system with interchangeable 2.5mm, 3.5mm, and 4.4mm plugs built in, so no separate adapters are needed to match different sources."
        },
        {
          "question": "What's included in the box?",
          "answer": "The Monarch MKII IEM, the Smart Switch cable, S/M/L ear tips, a carrying case, a cleaning cloth, 3 adapter plugs, and a user manual."
        },
        {
          "question": "How long is the pre-order wait?",
          "answer": "Linsoul lists a 3-4 week processing time for this model, and pre-orders are non-cancellable and non-refundable."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/thieaudio-monarch-mkii",
          "price": 999,
          "currency": "USD"
        }
      ],
      "metaTitle": "ThieAudio Monarch MKII",
      "metaDescription": "A 1DD+6BA+2EST tribrid flagship IEM with a modular Smart Switch cable covering 2.5mm, 3.5mm, and 4.4mm.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/Thieaudio-Monarch-MKII-13.png"
      ],
      "publish": true
    },
    {
      "slug": "thieaudio-monarch-mkiii",
      "title": "ThieAudio Monarch MKIII",
      "excerpt": "ThieAudio's latest flagship tribrid IEM with a dual 10mm IMPACT2 isobaric bass system and extended Sonion electrostatic treble.",
      "description": "The Monarch MKIII centers on ThieAudio's IMPACT2 subwoofer solution — two 10mm composite diaphragm dynamic drivers in an isobaric chamber for punchier bass without losing tonal balance — paired with Sonion's latest electrostatic drivers extended to 15-20kHz and a true 4-way passive crossover with nine components. The 1.2m cable is 22AWG 6N OCC silver-plated and graphene silver-plated, with modular 2.5mm/3.5mm/4.4mm terminations.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "thieaudio",
      "officialUrl": "https://www.linsoul.com/products/thieaudio-monarch-mkiii",
      "pros": [
        "IMPACT2 dual 10mm isobaric dynamic driver system for enhanced bass punch without bloat",
        "Sonion electrostatic drivers extended to 20kHz for airier treble",
        "True 4-way passive crossover with 9 components for tonal accuracy",
        "Modular cable terminations (2.5mm/3.5mm/4.4mm) included"
      ],
      "cons": [
        "A custom faceplate option raises the price to $1,149",
        "2-4 week (default) or 6-8 week (custom) pre-order lead time",
        "Custom orders are non-cancellable per Linsoul's policy"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "2DD + 6BA + 2EST (IMPACT2 dual 10mm composite dynamic, Knowles DWFK×2, Sonion 28UAP×1, Sonion EST)"
        },
        {
          "label": "Sensitivity",
          "value": "99dB @ 1kHz (±1dB)"
        },
        {
          "label": "Impedance",
          "value": "18Ω"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz–80kHz"
        },
        {
          "label": "Crossover",
          "value": "4-way passive, 4 sound bores"
        },
        {
          "label": "Connector",
          "value": "0.78mm 2-pin"
        },
        {
          "label": "Cable",
          "value": "1.2m, 22AWG 6N OCC silver-plated & graphene silver-plated"
        },
        {
          "label": "Terminations",
          "value": "Modular — 2.5mm, 3.5mm, 4.4mm"
        }
      ],
      "faqs": [
        {
          "question": "What is the IMPACT2 system?",
          "answer": "A dual 10mm composite-diaphragm dynamic driver arrangement in an isobaric chamber, designed to boost bass punch without compromising tonal balance."
        },
        {
          "question": "Can I get a custom faceplate?",
          "answer": "Yes — a custom design option is available for $1,149 instead of the $999 default, with a longer 6-8 week processing time."
        },
        {
          "question": "Is the cable the same as the MKII's Smart Switch cable?",
          "answer": "Both use modular 2.5mm/3.5mm/4.4mm terminations, though the MKIII's cable is a newer 22AWG 6N OCC silver-plated and graphene silver-plated design."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/thieaudio-monarch-mkiii",
          "price": 999,
          "currency": "USD"
        }
      ],
      "metaTitle": "ThieAudio Monarch MKIII",
      "metaDescription": "ThieAudio's latest flagship tribrid IEM with a dual 10mm IMPACT2 isobaric bass system and extended Sonion electrostatic treble.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/THIEAUDIOMonarchMKIII.jpg"
      ],
      "publish": true
    },
    {
      "slug": "kiwi-ears-quartet",
      "title": "Kiwi Ears Quartet",
      "excerpt": "A 2DD+2BA hybrid IEM with an isobaric dual dynamic driver design for extended sub-bass and four tuning-switch configurations.",
      "description": "The Quartet uses two independently-driven 10mm titanium diaphragm dynamic drivers in an isobaric configuration with passive phase-syncing to avoid soundwave cancellation, crossed over to custom balanced armatures at 350Hz for crisp mids and treble. The medical-grade resin shell pairs with a detachable oxygen-free silver-plated copper cable, and four tuning switch configurations let listeners adjust the sound signature.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "kiwi-ears",
      "officialUrl": "https://www.linsoul.com/products/kiwi-ears-quartet",
      "pros": [
        "Isobaric dual 10mm dynamic driver design for extended sub-bass without cancellation",
        "Four tuning-switch configurations for an adjustable sound signature",
        "Detachable silver-plated cable",
        "Budget-friendly for a 2DD+2BA hybrid design"
      ],
      "cons": [
        "Bass-forward isobaric tuning may not suit listeners wanting a flatter, neutral signature",
        "Price varies up to $309 depending on the configuration option chosen at checkout"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "2x 10mm Dynamic Drivers + 2x Custom Balanced Armatures"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz–20kHz"
        },
        {
          "label": "Impedance",
          "value": "32Ω"
        },
        {
          "label": "Sensitivity",
          "value": "110dB APL/mW"
        },
        {
          "label": "Connector",
          "value": "0.78mm 2-pin"
        },
        {
          "label": "Cable",
          "value": "Oxygen-free silver-plated copper, 1.2m ±5%"
        },
        {
          "label": "Housing Material",
          "value": "Medical-grade resin"
        }
      ],
      "faqs": [
        {
          "question": "What does isobaric mean in this context?",
          "answer": "Two dynamic drivers are independently driven and phase-synced so their soundwaves reinforce rather than cancel each other, which Linsoul markets as boosting sub-bass output."
        },
        {
          "question": "Can I adjust the sound signature?",
          "answer": "Yes — the Quartet includes four tuning switch configurations."
        },
        {
          "question": "How long does a pre-order take?",
          "answer": "Linsoul lists 15-20 working days for CIEM (custom) orders and 10-12 working days for UIEM (universal) orders."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/kiwi-ears-quartet",
          "price": 109,
          "currency": "USD"
        }
      ],
      "metaTitle": "Kiwi Ears Quartet",
      "metaDescription": "A 2DD+2BA hybrid IEM with an isobaric dual dynamic driver design for extended sub-bass and four tuning-switch configurations.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/IMG_3774.jpg"
      ],
      "publish": true
    },
    {
      "slug": "kz-zsx-iem",
      "title": "KZ ZSX Hybrid Drivers In-Ear Earphone",
      "excerpt": "A 5BA+1DD hybrid IEM with a detachable gold-plated cable at a genuinely budget price.",
      "description": "The ZSX combines a zinc alloy faceplate with a resin cavity, using a 5 balanced armature + 1 dynamic driver hybrid configuration (two BA drivers for mids/highs, one dedicated high-frequency BA, and one dynamic driver for lows). The detachable 2-pin cable is gold-plated with a pin-protection design intended to extend connector lifespan, and the shell shape is designed around ear-canal data for a closer fit.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "kz",
      "officialUrl": "https://www.linsoul.com/products/kz-zsx-iem",
      "pros": [
        "5BA+1DD hybrid configuration at a budget price point",
        "Detachable, upgradeable gold-plated 2-pin cable",
        "Pin-protection design to extend connector lifespan",
        "111dB sensitivity makes it easy to drive from any source"
      ],
      "cons": [
        "Zinc alloy and resin build doesn't match the premium materials of pricier IEMs in this batch",
        "Listed as in pre-order with delivery timing dependent on queue position"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "5BA+1DD hybrid"
        },
        {
          "label": "Impedance",
          "value": "24Ω"
        },
        {
          "label": "Sensitivity",
          "value": "111dB"
        },
        {
          "label": "Frequency Response",
          "value": "7Hz–40kHz"
        },
        {
          "label": "Connector",
          "value": "2-pin detachable, gold-plated"
        },
        {
          "label": "Cable Length",
          "value": "125cm"
        },
        {
          "label": "Plug Type",
          "value": "3.5mm"
        }
      ],
      "faqs": [
        {
          "question": "Is a microphone version available?",
          "answer": "Yes — KZ ZSX is offered with or without an in-line microphone."
        },
        {
          "question": "Is the cable detachable?",
          "answer": "Yes, using a gold-plated 2-pin connector with a pin-protection design intended to reduce wear over repeated swaps."
        },
        {
          "question": "What's the warranty?",
          "answer": "1-year warranty on the earphones and 3-month warranty on the cable, per Linsoul's standard policy."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/kz-zsx-iem",
          "price": 49.99,
          "currency": "USD"
        }
      ],
      "metaTitle": "KZ ZSX Hybrid Drivers In-Ear Earphone",
      "metaDescription": "A 5BA+1DD hybrid IEM with a detachable gold-plated cable at a genuinely budget price.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/01.jpg"
      ],
      "publish": true
    },
    {
      "slug": "dunu-sa6-mkii",
      "title": "DUNU SA6 MKII",
      "excerpt": "A 6-balanced-armature IEM with dual switchable tuning modes and hand-poured stabilized-wood faceplates.",
      "description": "The SA6 MKII uses six balanced armature drivers (2 Sonion woofers, 2 Knowles midrange, 2 Knowles tweeters) and includes a switch for two tuning modes — a balanced signature and a more atmospheric, immersive profile. The shells are hand-poured UV acrylic resin with stabilized wood faceplates and gold-infused resin detailing, paired with DUNU's Q-Lock Plus interchangeable termination system and a Hulk Pro Mini cable using Furukawa single-crystal copper.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "dunu",
      "officialUrl": "https://www.linsoul.com/products/dunu-sa6-mkii",
      "pros": [
        "6 balanced armature drivers (Sonion woofers + Knowles mid/tweeters) with dual switchable tuning modes",
        "Hand-poured UV acrylic resin shells with stabilized wood faceplates",
        "Q-Lock Plus interchangeable termination system — both 3.5mm SE and 4.4mm balanced plugs included",
        "Hulk Pro Mini cable uses high-purity Furukawa single-crystal copper"
      ],
      "cons": [
        "$579 is a mid-to-upper price tier for an all-BA design",
        "6-driver BA arrangement adds weight (12g) versus simpler configurations"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "6 Balanced Armatures (2 Sonion woofers, 2 Knowles midrange, 2 Knowles tweeters)"
        },
        {
          "label": "Frequency Response",
          "value": "5Hz–40kHz"
        },
        {
          "label": "Impedance",
          "value": "24Ω @1kHz"
        },
        {
          "label": "Sensitivity",
          "value": "114±1dB @1kHz"
        },
        {
          "label": "THD",
          "value": "<0.5% @1kHz"
        },
        {
          "label": "Connector",
          "value": "0.78mm 2-pin"
        },
        {
          "label": "Cable Length",
          "value": "1.2±0.1m"
        },
        {
          "label": "Weight",
          "value": "12g"
        }
      ],
      "faqs": [
        {
          "question": "What does the tuning-mode switch do?",
          "answer": "It switches between a balanced signature and a more atmospheric, immersive tonal profile, per DUNU's listing."
        },
        {
          "question": "What terminations are included?",
          "answer": "Both a 3.5mm single-ended and a 4.4mm balanced termination, via DUNU's Q-Lock Plus interchangeable plug system."
        },
        {
          "question": "What's included in the box?",
          "answer": "The SA6 MKII earpieces, a user manual, the Hulk Pro Mini cable with dual terminations, multiple ear tip options, and a carrying case."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "best-value",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/dunu-sa6-mkii",
          "price": 579,
          "currency": "USD"
        }
      ],
      "metaTitle": "DUNU SA6 MKII",
      "metaDescription": "A 6-balanced-armature IEM with dual switchable tuning modes and hand-poured stabilized-wood faceplates.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/9_7c46482b-0393-4081-9f39-e7a6737136fd.jpg"
      ],
      "publish": true
    },
    {
      "slug": "cca-c10",
      "title": "CCA C10",
      "excerpt": "A 4BA+1DD hybrid IEM with a detachable silver-plated cable at a genuinely entry-level price.",
      "description": "The C10 pairs a 10mm dynamic driver with 4 balanced armatures (30095+50060) for a hybrid sound at a budget price, using a detachable 5N silver-plated cable with gold-plated 0.75mm 2-pin connectors and passive noise-isolating shells. It's available in three shell colors, in mic and non-mic variants.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "cca",
      "officialUrl": "https://www.linsoul.com/products/cca-c10",
      "pros": [
        "4BA+1DD hybrid design at a genuinely budget price",
        "Detachable 5N silver-plated cable with gold-plated 0.75mm 2-pin connectors",
        "Available in 3 colors and mic/non-mic variants",
        "108dB sensitivity, easy to drive"
      ],
      "cons": [
        "Entry-level build and accessories (no carrying case) compared to pricier options in this batch",
        "32Ω impedance is a touch higher than some ultra-budget IEMs, though still easily driven"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "1x 10mm Dynamic Driver + 4x Balanced Armature (30095+50060)"
        },
        {
          "label": "Impedance",
          "value": "32Ω"
        },
        {
          "label": "Sensitivity",
          "value": "108dB/mW"
        },
        {
          "label": "Frequency Range",
          "value": "7Hz–40kHz"
        },
        {
          "label": "Connector",
          "value": "0.75mm 2-pin, gold-plated"
        },
        {
          "label": "Plug",
          "value": "3.5mm, gold-plated"
        },
        {
          "label": "Cable Length",
          "value": "1.2m (±3cm)"
        },
        {
          "label": "Cable Type",
          "value": "4-core oxygen-free copper, silver-plated"
        }
      ],
      "faqs": [
        {
          "question": "What colors are available?",
          "answer": "Black, Cyan, and Purple, in both mic and non-mic variants."
        },
        {
          "question": "What's in the box?",
          "answer": "The C10 earphone, a user manual, and S/M/L silicone ear tips."
        },
        {
          "question": "Is the cable detachable?",
          "answer": "Yes, using a 0.75mm 2-pin gold-plated connector."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/cca-c10",
          "price": 38,
          "currency": "USD"
        }
      ],
      "metaTitle": "CCA C10",
      "metaDescription": "A 4BA+1DD hybrid IEM with a detachable silver-plated cable at a genuinely entry-level price.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/A_1__0003_A_7.jpg"
      ],
      "publish": true
    },
    {
      "slug": "um-mest-mkii",
      "title": "Unique Melody MEST MKII",
      "excerpt": "A quadbrid flagship IEM with a dual-sided bone conduction driver alongside dynamic, balanced armature, and electrostatic drivers.",
      "description": "The MEST MKII uses an 8-driver-per-side quadbrid configuration: one dynamic driver for bass, four balanced armatures for mids/treble, two electrostatic drivers for ultra-high frequencies, and a dual-sided piezoelectric bone conduction driver positioned between supporting plates for full-range refinement. The single-piece carbon fiber shell has gold foil accents on the ear cavities, and the included cable is 4-core 24AWG OCC copper with selectable 2.5mm/3.5mm/4.4mm terminations.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "unique-melody",
      "officialUrl": "https://www.linsoul.com/products/um-mest-mkii",
      "pros": [
        "Quadbrid 8-driver-per-side configuration: 1DD+4BA+2EST plus a dual-sided bone conduction driver",
        "Single-piece carbon fiber shell with gold foil accents",
        "5-way crossover for driver integration",
        "Includes AZLA SednaEarfit Xelastec eartips in the box"
      ],
      "cons": [
        "$1,499 is the most expensive product in this batch by a wide margin",
        "Bone conduction driver technology is a newer, less-established approach than pure BA/EST designs",
        "12.3Ω impedance is unusually low, meaning source noise floor matters more than usual"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "1 Dynamic + 4 Balanced Armature + 2 Electrostatic + Dual-Sided Bone Conduction Driver"
        },
        {
          "label": "Sensitivity",
          "value": "112dB @ 1kHz"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz–70kHz"
        },
        {
          "label": "Impedance",
          "value": "12.3Ω"
        },
        {
          "label": "Crossover",
          "value": "5-way"
        },
        {
          "label": "Shell Material",
          "value": "Single-piece carbon fiber with gold foil"
        },
        {
          "label": "Connector",
          "value": "2-pin, flat configuration"
        },
        {
          "label": "Cable",
          "value": "4-core 24AWG OCC copper, 2.5mm/3.5mm/4.4mm selectable"
        }
      ],
      "faqs": [
        {
          "question": "What is the bone conduction driver for?",
          "answer": "A dual-sided piezoelectric bone conduction driver sits between supporting plates alongside the dynamic, BA, and electrostatic drivers, aimed at full-range refinement across the whole frequency spectrum."
        },
        {
          "question": "What eartips are included?",
          "answer": "AZLA SednaEarfit Xelastec eartips in multiple sizes ship in the box."
        },
        {
          "question": "What's the warranty?",
          "answer": "1-year warranty on the in-ear monitors and 3-month warranty on the cable."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/um-mest-mkii",
          "price": 1499,
          "currency": "USD"
        }
      ],
      "metaTitle": "Unique Melody MEST MKII",
      "metaDescription": "A quadbrid flagship IEM with a dual-sided bone conduction driver alongside dynamic, balanced armature, and electrostatic drivers.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/UMMESTMKII1-1000.jpg"
      ],
      "publish": true
    },
    {
      "slug": "trn-ta2",
      "title": "TRN TA2",
      "excerpt": "A 1DD+2BA hybrid IEM with Knowles armatures and a magnesium alloy shell at a budget price.",
      "description": "The TA2 combines one 8mm dual-core dynamic driver with two Knowles 33518 balanced armatures for a hybrid sound in a magnesium alloy shell. Its low 16Ω impedance and high 118dB sensitivity are aimed at easy compatibility with phones and portable players, and it's available in four finishes with an optional in-line microphone.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "trn",
      "officialUrl": "https://www.linsoul.com/products/trn-ta2",
      "pros": [
        "1DD+2BA hybrid with Knowles 33518 armatures at a budget price",
        "Magnesium alloy shell construction",
        "16Ω impedance and 118dB sensitivity make it very easy to drive",
        "Available in 4 finishes plus a mic option"
      ],
      "cons": [
        "QDC-style 2-pin connector is less universally compatible with aftermarket cables than standard 0.78mm 2-pin",
        "Budget accessories (standard tips only, no case)"
      ],
      "specifications": [
        {
          "label": "Driver Configuration",
          "value": "1 Dynamic Driver + 2 Balanced Armatures (Knowles 33518)"
        },
        {
          "label": "Impedance",
          "value": "16Ω"
        },
        {
          "label": "Sensitivity",
          "value": "118dB/mW"
        },
        {
          "label": "Frequency Response",
          "value": "7Hz–40kHz"
        },
        {
          "label": "Connector",
          "value": "2-pin, QDC interface"
        },
        {
          "label": "Plug Type",
          "value": "3.5mm"
        }
      ],
      "faqs": [
        {
          "question": "What colors are available?",
          "answer": "Black, Silver, Pink, and Blue, per Linsoul's listing."
        },
        {
          "question": "Is a microphone version available?",
          "answer": "Yes, a microphone option is available at checkout."
        },
        {
          "question": "What connector does the cable use?",
          "answer": "A QDC-style 2-pin interface, which differs from the more common 0.78mm 2-pin used on several other IEMs in this batch."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/trn-ta2",
          "price": 49.8,
          "currency": "USD"
        }
      ],
      "metaTitle": "TRN TA2",
      "metaDescription": "A 1DD+2BA hybrid IEM with Knowles armatures and a magnesium alloy shell at a budget price.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/logo_8ff48bd7-0b83-40b9-8040-0e825f9b1370.jpg"
      ],
      "publish": true
    },
    {
      "slug": "smsl-su-9-pro",
      "title": "SMSL SU-9 Pro",
      "excerpt": "A desktop DAC built around the flagship ES9039MPRO chip, with Bluetooth 5.0 LDAC and both RCA and XLR outputs.",
      "description": "The SU-9 Pro is a desktop DAC using ES9039MPRO D/A chips across 8 channels with 11 OPA1612A op-amps, a 3rd-generation XMOS XU316 USB interface, and a self-developed CK-03 jitter processing circuit. It supports PCM up to 768kHz, DSD up to DSD512, and MQA decoding, plus built-in Bluetooth 5.0 with LDAC and aptX/HD for wireless sources, all housed in a CNC-milled aluminum shell with a tempered glass display.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "smsl",
      "officialUrl": "https://www.linsoul.com/products/smsl-su-9-pro",
      "pros": [
        "ES9039MPRO flagship DAC chip with a 3rd-gen XMOS XU316 USB interface",
        "Supports PCM up to 768kHz and DSD512, plus MQA decoding",
        "Built-in Bluetooth 5.0 with LDAC/aptX HD for wireless high-res streaming",
        "Both RCA and XLR balanced outputs (up to 134dB SNR on XLR)"
      ],
      "cons": [
        "A DAC only — pair with a separate headphone amp, since no headphone output is listed in its specifications",
        "7 working-day pre-order fulfillment window, non-cancellable and non-refundable"
      ],
      "specifications": [
        {
          "label": "DAC Chip",
          "value": "ES9039MPRO (8 channels, 11x OPA1612A op-amps)"
        },
        {
          "label": "USB Interface",
          "value": "3rd-gen XMOS XU316"
        },
        {
          "label": "Inputs",
          "value": "USB, Optical, Coaxial, Bluetooth"
        },
        {
          "label": "Outputs",
          "value": "RCA, XLR"
        },
        {
          "label": "Line Output (XLR)",
          "value": "5.2Vrms"
        },
        {
          "label": "Line Output (RCA)",
          "value": "2.5Vrms"
        },
        {
          "label": "THD+N",
          "value": "0.0005% (-125dB, unweighted)"
        },
        {
          "label": "SNR",
          "value": "134dB (XLR), 128dB (RCA)"
        },
        {
          "label": "USB Sampling",
          "value": "44.1-768kHz PCM; DSD 2.8224-22.5792MHz"
        },
        {
          "label": "Dimensions",
          "value": "187.5 × 154 × 40mm"
        },
        {
          "label": "Weight",
          "value": "0.79kg"
        }
      ],
      "faqs": [
        {
          "question": "Does the SU-9 Pro have a headphone amp built in?",
          "answer": "No — based on its listed specifications this is a DAC with RCA/XLR line outputs, not a DAC/amp combo, so it needs a separate headphone amplifier."
        },
        {
          "question": "Does it support wireless sources?",
          "answer": "Yes — it has built-in Bluetooth 5.0 with LDAC and aptX/aptX HD codec support."
        },
        {
          "question": "What formats does it decode?",
          "answer": "PCM up to 768kHz, DSD up to DSD512, and MQA, over USB."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/smsl-su-9-pro",
          "price": 499.99,
          "currency": "USD"
        }
      ],
      "metaTitle": "SMSL SU-9 Pro",
      "metaDescription": "A desktop DAC built around the flagship ES9039MPRO chip, with Bluetooth 5.0 LDAC and both RCA and XLR outputs.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/2_1_73e02af2-4cca-4afe-8c8e-4acc735cc108.jpg"
      ],
      "publish": true
    },
    {
      "slug": "topping-d70-pro",
      "title": "Topping D70 Pro Sabre",
      "excerpt": "A desktop DAC with the flagship ES9039SPRO chip, Bluetooth 5.1 LDAC, and a built-in preamp mode.",
      "description": "The D70 Pro Sabre uses Topping's flagship 32-bit ES9039SPRO DAC chip with a redesigned I/V conversion circuit, paired with Bluetooth 5.1 supporting LDAC, aptX Adaptive, aptX HD, aptX, AAC, and SBC. It offers selectable RCA (2V/2.5V) and XLR (4V/5V) output voltage modes, a full-color display with touch controls and remote, and a built-in preamp mode for connecting directly to power amps or active speakers.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "topping",
      "officialUrl": "https://www.linsoul.com/products/topping-d70-pro",
      "pros": [
        "ES9039SPRO flagship 32-bit DAC chip with Bluetooth 5.1 (LDAC/aptX Adaptive/aptX HD)",
        "Selectable output voltage modes (2V/2.5V RCA, 4V/5V XLR) to match downstream amp sensitivity",
        "Built-in preamp mode for direct connection to power amps or active speakers",
        "Very low THD+N (<0.00006% on XLR) and high SNR (133dB XLR)"
      ],
      "cons": [
        "$699 price point, plus a separate power-plug region option needed at checkout",
        "Listed as pre-order status with no fixed ship date confirmed at time of writing",
        "A DAC/preamp — no headphone output is listed in its specifications"
      ],
      "specifications": [
        {
          "label": "DAC Chip",
          "value": "ES9039SPRO (32-bit)"
        },
        {
          "label": "Connectivity",
          "value": "Bluetooth 5.1 (LDAC, aptX Adaptive, aptX HD, aptX, AAC, SBC)"
        },
        {
          "label": "Output Options",
          "value": "RCA single-ended, XLR balanced, selectable voltage modes"
        },
        {
          "label": "THD+N (XLR)",
          "value": "<0.00006%"
        },
        {
          "label": "THD+N (RCA)",
          "value": "<0.00008%"
        },
        {
          "label": "SNR (XLR)",
          "value": "133dB"
        },
        {
          "label": "SNR (RCA)",
          "value": "128dB"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz-20kHz (±0.05dB); 20Hz-40kHz (±0.2dB)"
        },
        {
          "label": "Compatibility",
          "value": "Windows 10/11, macOS, Linux, iOS/Android"
        }
      ],
      "faqs": [
        {
          "question": "Can it drive power amps or active speakers directly?",
          "answer": "Yes — it has a built-in preamp mode for direct connection to power amplifiers or active speakers."
        },
        {
          "question": "Does it have a headphone jack?",
          "answer": "No headphone output is listed in its specifications — it's a DAC/preamp, not a DAC/amp combo."
        },
        {
          "question": "What Bluetooth codecs does it support?",
          "answer": "LDAC, aptX Adaptive, aptX HD, aptX, AAC, and SBC over Bluetooth 5.1."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/topping-d70-pro",
          "price": 699,
          "currency": "USD"
        }
      ],
      "metaTitle": "Topping D70 Pro Sabre",
      "metaDescription": "A desktop DAC with the flagship ES9039SPRO chip, Bluetooth 5.1 LDAC, and a built-in preamp mode.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/D70pro-e04.jpg"
      ],
      "publish": true
    },
    {
      "slug": "gustard-x18",
      "title": "Gustard X18",
      "excerpt": "A desktop DAC with the flagship ES9038Pro chip, dual low-jitter clocks, and both wired and Bluetooth inputs.",
      "description": "The X18 is built around an ESS ES9038Pro DAC chip with an embedded Altera Max V CPLD for clock management, 8 independent I/V converters using OPA1612 op-amps, and dual Accusilicon A5318-B clocks for low jitter. Inputs include USB (XMOS XU216), optical, coaxial, AES, I2S via HDMI, and Bluetooth 5.0 with aptX HD/LDAC, with both single-ended RCA and balanced XLR outputs.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "gustard",
      "officialUrl": "https://www.linsoul.com/products/gustard-x18",
      "pros": [
        "ES9038Pro flagship DAC chip with 8 independent I/V converters (OPA1612 op-amps)",
        "Dual Accusilicon A5318-B clocks for low jitter",
        "Comprehensive I/O: USB, optical, coaxial, AES, I2S via HDMI, plus Bluetooth 5.0 (LDAC/aptX HD)",
        "Both RCA and XLR balanced outputs"
      ],
      "cons": [
        "$749 is the most expensive DAC in this batch",
        "7-10 working day pre-order processing, non-cancellable and non-refundable",
        "No headphone output listed — pair with a separate amp for headphones"
      ],
      "specifications": [
        {
          "label": "DAC Chip",
          "value": "ESS ES9038Pro"
        },
        {
          "label": "USB Interface",
          "value": "XMOS XU216"
        },
        {
          "label": "CPLD",
          "value": "Altera Max V"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz-20kHz ±0.08dB"
        },
        {
          "label": "Output Levels",
          "value": "RCA 2.5Vrms / XLR 5Vrms @ 0dBFS"
        },
        {
          "label": "PCM Support",
          "value": "Up to 32-bit/768kHz via USB/I2S"
        },
        {
          "label": "DSD Support",
          "value": "Up to DSD512 (native, USB/I2S)"
        },
        {
          "label": "Bluetooth Codecs",
          "value": "AAC, SBC, aptX, aptX LL, aptX HD, LDAC"
        },
        {
          "label": "Inputs",
          "value": "Bluetooth 5.0, USB-B, Optical, Coaxial, AES, I2S/HDMI"
        },
        {
          "label": "Outputs",
          "value": "RCA (single-ended), XLR (balanced)"
        }
      ],
      "faqs": [
        {
          "question": "What DAC chip does the X18 use?",
          "answer": "An ESS ES9038Pro chip, with 8 independent I/V converters using OPA1612 op-amps."
        },
        {
          "question": "Does it support wireless input?",
          "answer": "Yes — Bluetooth 5.0 with AAC, SBC, aptX, aptX LL, aptX HD, and LDAC codec support."
        },
        {
          "question": "How long is the pre-order wait?",
          "answer": "Linsoul lists a 7-10 working day processing time, and pre-orders are non-cancellable and non-refundable."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/gustard-x18",
          "price": 749,
          "currency": "USD"
        }
      ],
      "metaTitle": "Gustard X18",
      "metaDescription": "A desktop DAC with the flagship ES9038Pro chip, dual low-jitter clocks, and both wired and Bluetooth inputs.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/1_2_001c5b59-c2c2-4671-a54d-101620d7324f.jpg"
      ],
      "publish": true
    },
    {
      "slug": "shanling-m9-plus",
      "title": "Shanling M9 Plus",
      "excerpt": "A flagship Android digital audio player with a quad-DAC design (4x AK4499EX) and a 6-inch 2K display.",
      "description": "The M9 Plus is Shanling's flagship portable Android player, pairing a 6-inch 1080x2160 display and Snapdragon 665 octa-core CPU (Android 10, 8GB RAM, 256GB storage) with a quad-DAC design using 2x AK4191 and 4x AK4499EX chips in an 8-channel balanced circuit, amplified through a MUSES 8920 J-FET and BUF634 combination. It supports Bluetooth 5.0 (LDAC/LHDC 5.0/aptX HD), Wi-Fi 2.4G/5G, and runs on an 8350mAh battery with QC 3.0 fast charging.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "shanling",
      "officialUrl": "https://www.linsoul.com/products/shanling-m9-plus",
      "pros": [
        "Quad-DAC design using four AKM AK4499EX chips plus MUSES 8920/BUF634 amplification",
        "6-inch 2K display running Android 10 with 8GB RAM/256GB storage",
        "1125mW balanced output power at 32Ω — enough to drive demanding headphones directly",
        "8350mAh battery with up to 18 hours (SE) / 11 hours (balanced) playback"
      ],
      "cons": [
        "$2,959 is a major investment — the most expensive product in this batch",
        "379g weight and 147x82x22mm size are large for a portable player",
        "10-20 working day pre-order processing, non-cancellable per Linsoul"
      ],
      "specifications": [
        {
          "label": "DAC System",
          "value": "2x AK4191 & 4x AK4499EX"
        },
        {
          "label": "CPU / OS",
          "value": "Snapdragon 665 octa-core, Android 10"
        },
        {
          "label": "RAM / Storage",
          "value": "8GB RAM, 256GB internal (microSD up to 2TB)"
        },
        {
          "label": "Display",
          "value": "6-inch, 1080x2160"
        },
        {
          "label": "Output Power (SE)",
          "value": "4.08V @ 32Ω (520mW)"
        },
        {
          "label": "Output Power (Balanced)",
          "value": "6.0V @ 32Ω (1125mW)"
        },
        {
          "label": "Frequency Response",
          "value": "20Hz–40kHz"
        },
        {
          "label": "THD+N (Balanced)",
          "value": "0.0007%"
        },
        {
          "label": "SNR (Balanced)",
          "value": "126dB"
        },
        {
          "label": "Battery Life",
          "value": "18 hours (SE), 11 hours (balanced)"
        },
        {
          "label": "Dimensions / Weight",
          "value": "147 x 82 x 22mm, 379g"
        }
      ],
      "faqs": [
        {
          "question": "Can the M9 Plus power demanding headphones directly?",
          "answer": "Its balanced output is rated at 1125mW @ 32Ω (6.0V), which Shanling positions as enough for most demanding portable headphone loads without a separate amp."
        },
        {
          "question": "How long is the battery life?",
          "answer": "Up to 18 hours single-ended or 11 hours in balanced mode, per Shanling's rating."
        },
        {
          "question": "Does it run apps like a phone?",
          "answer": "Yes — it runs Android 10 with Wi-Fi 2.4G/5G and Bluetooth 5.0, so streaming apps can be installed directly."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/shanling-m9-plus",
          "price": 2959,
          "currency": "USD"
        }
      ],
      "metaTitle": "Shanling M9 Plus",
      "metaDescription": "A flagship Android digital audio player with a quad-DAC design (4x AK4499EX) and a 6-inch 2K display.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/ShanlingM9plus-MusicTeck_1.jpg"
      ],
      "publish": true
    },
    {
      "slug": "shanling-m3-ultra",
      "title": "Shanling M3 Ultra",
      "excerpt": "A mid-range Android digital audio player with dual ES9219C DAC chips and up to 20.5 hours of battery life.",
      "description": "The M3 Ultra pairs dual ESS ES9219C DAC chips with dual RT6863 amplifier chips, running on a Snapdragon 665 processor with Android 10 on a 4.2-inch 720p floating display. It supports selectable single or dual DAC operating modes, MQA 16x decoding, and streaming via Bluetooth 5.0, Wi-Fi, DLNA, AirPlay, and NAS access, rated for up to 20.5 hours of battery life.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "shanling",
      "officialUrl": "https://www.linsoul.com/products/shanling-m3-ultra",
      "pros": [
        "Dual ES9219C DAC chips with dual RT6863 amp chips at a mid-range price",
        "Up to 20.5 hours of battery life",
        "Android 10 with Wi-Fi/Bluetooth/DLNA/AirPlay/NAS streaming support",
        "Selectable single or dual DAC operating modes"
      ],
      "cons": [
        "140mW SE / 260mW balanced output is modest next to the flagship M9 Plus in this same batch",
        "3GB RAM / 32GB storage is limited for an Android-based streaming player",
        "DSD256 support only (no DSD512), and MQA limited to 16x decoding"
      ],
      "specifications": [
        {
          "label": "DAC Chips",
          "value": "2x ES9219C"
        },
        {
          "label": "Amp Chips",
          "value": "2x RT6863"
        },
        {
          "label": "CPU / OS",
          "value": "Snapdragon 665, Android 10"
        },
        {
          "label": "RAM / Storage",
          "value": "3GB RAM + 32GB ROM"
        },
        {
          "label": "Screen",
          "value": "4.2-inch 720p LCD, floating display"
        },
        {
          "label": "Sampling Rate",
          "value": "32-bit/384kHz"
        },
        {
          "label": "DSD Support",
          "value": "DSD256"
        },
        {
          "label": "Output Power",
          "value": "140mW @ 32Ω (SE); 260mW @ 32Ω (balanced)"
        },
        {
          "label": "Battery Life",
          "value": "Up to 20.5 hours"
        },
        {
          "label": "Connectivity",
          "value": "Bluetooth 5.0, Wi-Fi (MIMO), DLNA, AirPlay, NAS"
        }
      ],
      "faqs": [
        {
          "question": "What's the difference between single and dual DAC mode?",
          "answer": "The M3 Ultra can run its two ES9219C DAC chips together or use just one, a mode selectable in software."
        },
        {
          "question": "Does it support DSD512?",
          "answer": "No — it supports DSD256, one tier below the DSD512 supported by some of the desktop DACs in this batch."
        },
        {
          "question": "How long does the battery last?",
          "answer": "Up to 20.5 hours, per Shanling's rating."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/shanling-m3-ultra",
          "price": 469,
          "currency": "USD"
        }
      ],
      "metaTitle": "Shanling M3 Ultra",
      "metaDescription": "A mid-range Android digital audio player with dual ES9219C DAC chips and up to 20.5 hours of battery life.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/8_f2165817-f430-4b60-a965-8852ce735854.jpg"
      ],
      "publish": true
    },
    {
      "slug": "ddhifi-dj65a-al",
      "title": "DDHiFi DJ65A AL",
      "excerpt": "A 6.35mm-to-3.5mm audio adapter with a surgical-grade stainless steel housing and a 24K gold-plated plug.",
      "description": "The DJ65A AL is a passive 6.35mm male to 3.5mm female adapter for connecting desktop amps with 6.35mm outputs to 3.5mm-only cables or sources. It's built with an all-metal surgical-grade stainless steel housing, a 24K gold-galvanized 6.35mm plug, and high-purity OCC copper soldering wire.",
      "categorySlugs": [
        "audio"
      ],
      "brandSlug": "ddhifi",
      "officialUrl": "https://www.linsoul.com/products/ddhifi-dj65a-al",
      "pros": [
        "All-metal, surgical-grade stainless steel housing with a 24K gold-plated 6.35mm plug",
        "High-purity OCC copper soldering wire for minimal signal loss",
        "Simple, purpose-built solution for connecting 6.35mm desktop amps to 3.5mm-only sources or cables"
      ],
      "cons": [
        "Currently sold out at the time of writing — check the live product page for restock status",
        "A passive adapter only — adds a connection point rather than any active audio processing"
      ],
      "specifications": [
        {
          "label": "Plug Type",
          "value": "6.35mm male"
        },
        {
          "label": "Female Port",
          "value": "3.5mm"
        },
        {
          "label": "Dimensions",
          "value": "9.9 × 14.9 × 20.5mm (excluding inserted plug)"
        },
        {
          "label": "Weight",
          "value": "12g"
        }
      ],
      "faqs": [
        {
          "question": "What is this adapter for?",
          "answer": "It converts a 6.35mm (1/4-inch) male output, common on desktop amps, to a 3.5mm female jack for connecting standard 3.5mm cables or sources."
        },
        {
          "question": "Is it currently in stock?",
          "answer": "At the time of research this listed as sold out — check the live product page for current availability."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/ddhifi-dj65a-al",
          "price": 32.99,
          "currency": "USD"
        }
      ],
      "metaTitle": "DDHiFi DJ65A AL",
      "metaDescription": "A 6.35mm-to-3.5mm audio adapter with a surgical-grade stainless steel housing and a 24K gold-plated plug.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/files/DJ65A_AL_-07.jpg"
      ],
      "publish": true
    },
    {
      "slug": "e1da-9038d6k",
      "title": "E1DA 9038D6K",
      "excerpt": "A pocket-sized USB DAC/amp built around the ES9038Q2M chip, with every unit individually calibrated.",
      "description": "The 9038D6K is a USB-powered portable DAC/amp using an ES9038Q2M chip with OPA1622/OPA1602 op-amps, weighing 12g in a 48x22x9mm sandblasted black anodized aluminum case with laser-engraved specifications. It has hardware volume control in 0.5dB steps, supports PCM up to 32-bit/384kHz and DSD256, and every unit is individually calibrated with its results printed on the case.",
      "categorySlugs": [
        "audio"
      ],
      "occasionSlugs": [
        "black-friday",
        "christmas"
      ],
      "brandSlug": "e1da",
      "officialUrl": "https://www.linsoul.com/products/e1da-9038d6k",
      "pros": [
        "ES9038Q2M DAC chip with OPA1622/OPA1602 op-amps in a 12g, 48x22x9mm portable form factor",
        "USB-powered with no internal battery to degrade over time",
        "180mW @ 32Ω output power with hardware volume control in 0.5dB steps",
        "Every unit individually calibrated with results printed on the case"
      ],
      "cons": [
        "E1DA's own documentation notes potential audible noise near LTE/4G/5G radios due to a highly sensitive I/V stage",
        "Some 2020+ laptops may need a manufacturer firmware fix for USB3 compatibility",
        "3.5mm single-ended output only — no 4.4mm balanced option"
      ],
      "specifications": [
        {
          "label": "DAC Chip",
          "value": "ES9038Q2M"
        },
        {
          "label": "Dimensions / Weight",
          "value": "48 x 22 x 9mm, 12g"
        },
        {
          "label": "Connectors",
          "value": "USB-C input, 3.5mm unbalanced output"
        },
        {
          "label": "Output Power",
          "value": "180mW @ 32Ω; 120mW @ 16Ω (1kHz, THD=1%)"
        },
        {
          "label": "Frequency Response",
          "value": "5–80kHz +0.05/−1dB @ 32-bit/384kHz"
        },
        {
          "label": "SNR/DR",
          "value": "126dB(A) typical (2.75Vrms reference)"
        },
        {
          "label": "THD+N",
          "value": "<0.0001% typical @ 24-bit/44.1kHz (no load)"
        },
        {
          "label": "Audio Format Support",
          "value": "PCM 32-bit/384kHz; DSD256"
        }
      ],
      "faqs": [
        {
          "question": "Does it have a built-in battery?",
          "answer": "No — it's USB-powered directly from the connected source, with no internal battery."
        },
        {
          "question": "Does it support balanced output?",
          "answer": "No — it has a 3.5mm single-ended output only."
        },
        {
          "question": "Is there a known compatibility issue?",
          "answer": "E1DA notes some 2020-and-newer laptop models may need a firmware fix for USB3 compatibility, and the sensitive I/V stage can pick up audible noise near LTE/4G/5G radios."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/e1da-9038d6k",
          "price": 129,
          "currency": "USD"
        }
      ],
      "metaTitle": "E1DA 9038D6K",
      "metaDescription": "A pocket-sized USB DAC/amp built around the ES9038Q2M chip, with every unit individually calibrated.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/E1DA-9038D-2.jpg"
      ],
      "publish": true
    },
    {
      "slug": "azla-sednaearfit-max",
      "title": "AZLA SednaEarfit Max",
      "excerpt": "Replacement silicone eartips with a hexagonal filter pattern, sized using data from 788 ear-canal measurements.",
      "description": "SednaEarfit Max eartips use premium medical-grade silicone that's lighter than standard LSR alternatives, with an integrated hexagonal filter pattern designed to prevent debris buildup while improving high-frequency clarity. Sizing is based on ergonomic data from 788 ear-canal measurements, and separate IEM and TWS versions are sold for the correct nozzle fit.",
      "categorySlugs": [
        "audio"
      ],
      "brandSlug": "azla",
      "officialUrl": "https://www.linsoul.com/products/azla-sednaearfit-max",
      "pros": [
        "Hexagonal filter pattern designed to prevent debris buildup while improving high-frequency clarity",
        "Medical-grade silicone that's lighter than standard LSR eartips",
        "6 sizes (SS-L) informed by 788 ear-canal measurements for fit consistency",
        "Separate IEM and TWS versions for the correct nozzle fit"
      ],
      "cons": [
        "At $19-20 for 2 pairs, it's a recurring consumable cost rather than a one-time purchase",
        "Silicone-only — no foam option for listeners who prefer foam tips' isolation"
      ],
      "specifications": [
        {
          "label": "Material",
          "value": "Premium medical-grade silicone"
        },
        {
          "label": "Available Sizes",
          "value": "SS, S, MS, M, ML, L"
        },
        {
          "label": "Versions",
          "value": "IEM (standard) and TWS"
        },
        {
          "label": "Quantity",
          "value": "2 pairs per package"
        }
      ],
      "faqs": [
        {
          "question": "What's the difference between the IEM and TWS versions?",
          "answer": "They use the same filter and silicone design but a different nozzle size to fit standard IEMs versus true wireless earbuds."
        },
        {
          "question": "How many pairs come in a package?",
          "answer": "2 pairs per package, across sizes SS through L."
        },
        {
          "question": "What does the hexagonal filter do?",
          "answer": "It's designed to prevent debris from building up in the nozzle while AZLA states it also improves high-frequency clarity versus an unfiltered tip."
        }
      ],
      "isFeatured": false,
      "bestPickLabel": "none",
      "retailerLinks": [
        {
          "retailerSlug": "linsoul-audio",
          "affiliateUrl": "https://www.linsoul.com/products/azla-sednaearfit-max",
          "price": 20,
          "currency": "USD"
        }
      ],
      "metaTitle": "AZLA SednaEarfit Max",
      "metaDescription": "Replacement silicone eartips with a hexagonal filter pattern, sized using data from 788 ear-canal measurements.",
      "galleryImageUrls": [
        "https://www.linsoul.com/cdn/shop/products/1_4_c8a9d601-d172-4888-bec1-b1ce9a93fc97.jpg"
      ],
      "publish": true
    },
    {
      "slug": "moon-and-star-nursery-wall-stickers",
      "title": "Moon and Star Nursery Wall Stickers",
      "excerpt": "A large silver metallic moon with 21 stars in three sizes — a soft, evergreen nursery decal set.",
      "description": "A set of large silver metallic moon and stars vinyl wall stickers. Each pack contains 21 large silver stars in three different sizes plus a large silver moon shape, made to order in the UK from branded vinyl. Peel-and-stick application, removable without damaging walls.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/moon-and-star-decals-silver-stars-stickers-nursery-wall-decals-moon-decals-stars-decals-decals-for-children-kids-decals-wall-art",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" },
        { "label": "Contents", "value": "21 stars (3 sizes) + 1 large moon" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/moon-and-star-decals-silver-stars-stickers-nursery-wall-decals-moon-decals-stars-decals-decals-for-children-kids-decals-wall-art",
          "price": 14.12,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Moon and Star Nursery Wall Stickers",
      "metaDescription": "Silver metallic moon and 21-star vinyl decal set for nursery walls, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1809786203_8vq8.jpg?v=1591258985"],
      "publish": true
    },
    {
      "slug": "shark-wall-sticker-kids-room",
      "title": "Large Shark Kids Room Wall Sticker",
      "excerpt": "A large shark decal sized for a full accent wall in a child's bedroom.",
      "description": "A large shark wall sticker designed for children's bedrooms. Peel-and-stick vinyl decal that applies and removes without damaging walls, made to order in the UK.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/large-shark-childrens-room-wall-sticker-wall-decal-mural-wallpaper-decor-wall-art-kids-wall-sticker-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/large-shark-childrens-room-wall-sticker-wall-decal-mural-wallpaper-decor-wall-art-kids-wall-sticker-christmas-gift",
          "price": 18.54,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Large Shark Kids Room Wall Sticker",
      "metaDescription": "Large shark vinyl wall decal for a children's bedroom accent wall, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1226231747_2meq.jpg?v=1591259825"],
      "publish": true
    },
    {
      "slug": "boho-rainbow-wall-stickers",
      "title": "Large Boho Rainbow Wall Stickers (16-Pack)",
      "excerpt": "16 boho-chic rainbow decals, 10.8cm x 14cm each, for a nursery or kids' room.",
      "description": "16 boho chic rainbow wall stickers, each measuring 10.8cm x 14cm. Made from water-resistant transparent vinyl and printed with HD full-colour solvent ink; designed for white and light walls and removes without leaving residue.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/large-boho-rainbow-wall-stickers-16-98287",
      "specifications": [
        { "label": "Material", "value": "Water-resistant transparent vinyl, HD solvent ink" },
        { "label": "Contents", "value": "16 decals, 10.8cm x 14cm each" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/large-boho-rainbow-wall-stickers-16-98287",
          "price": 9.99,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Large Boho Rainbow Wall Stickers 16-Pack",
      "metaDescription": "16-pack of boho-chic rainbow vinyl wall decals for a nursery or kids' room, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.3588902104_ko52.jpg?v=1641935229"],
      "publish": true
    },
    {
      "slug": "scandinavian-animal-nursery-wall-stickers",
      "title": "Scandinavian Cute Animals Nursery Wall Stickers",
      "excerpt": "A 12-piece pack of hand-drawn Scandinavian animal designs for a nursery wall.",
      "description": "A hand-drawn wall sticker pack containing 12 Scandinavian animal designs, each approximately 16-20cm. Printed on premium matt digital vinyl that applies to smooth surfaces and removes without wall damage.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/scandinavian-cute-animals-nursery-wall-16026",
      "specifications": [
        { "label": "Material", "value": "Premium matt digital vinyl" },
        { "label": "Contents", "value": "12 animal designs, ~16-20cm each" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/scandinavian-cute-animals-nursery-wall-16026",
          "price": 12.36,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Scandinavian Cute Animals Nursery Wall Stickers",
      "metaDescription": "12-piece hand-drawn Scandinavian animal wall decal pack for a nursery, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.3142610350_d7fs.jpg?v=1623581338"],
      "publish": true
    },
    {
      "slug": "teepee-nursery-wall-stickers",
      "title": "108 Teepee Nursery Wall Stickers",
      "excerpt": "108 teepee-motif decals for a boho-styled nursery or kids' room.",
      "description": "A set of 108 teepee-design wall decals for children's spaces, offering a boho nursery look across multiple tent motifs. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/108-teepee-decals-nursery-teepee-art-nursery-art-teepee-wall-decals-tent-decals-wall-art-decor-decals-for-walls-kids-wall-art-decor",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" },
        { "label": "Contents", "value": "108 teepee decals" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/108-teepee-decals-nursery-teepee-art-nursery-art-teepee-wall-decals-tent-decals-wall-art-decor-decals-for-walls-kids-wall-art-decor",
          "price": 14.12,
          "currency": "GBP"
        }
      ],
      "metaTitle": "108 Teepee Nursery Wall Stickers",
      "metaDescription": "Set of 108 boho teepee-motif wall decals for a nursery or kids' room, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1487497999_7rv2.jpg?v=1604768573"],
      "publish": true
    },
    {
      "slug": "elephant-personalised-name-nursery-print",
      "title": "Cute Elephant Personalised Name Nursery Print",
      "excerpt": "A watercolour elephant nursery print personalised with a child's name — starting price, final cost depends on size chosen. A popular new-baby gift.",
      "description": "A customisable nursery print featuring a watercolour elephant design with a personalised child's name added at checkout. Printed on premium 300gsm matte paper, made to order in the UK, and supplied unframed in multiple size options. Priced from the smallest size — the final price depends on the size selected at checkout.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/cute-elephant-personalised-name-nursery-36397",
      "specifications": [
        { "label": "Material", "value": "300gsm matte paper print, unframed" },
        { "label": "Pricing", "value": "Starting price — varies by size, personalised with a name at checkout" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/cute-elephant-personalised-name-nursery-36397",
          "price": 4.41,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Elephant Personalised Name Nursery Print",
      "metaDescription": "Watercolour elephant nursery print personalised with a child's name, made to order in the UK. Starting price varies by size.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.3049799722_ohqw.jpg?v=1619719356"],
      "publish": true
    },
    {
      "slug": "banksy-tv-the-end-wall-sticker",
      "title": "Banksy \"The End\" TV Wall Sticker",
      "excerpt": "A Banksy-inspired \"The End\" TV graffiti decal for a modern bedroom or living space.",
      "description": "A vinyl wall sticker featuring the Banksy-inspired \"The End\" TV design, bringing graffiti-style street art to home decor. Made to order in the UK from branded vinyl, removable without wall damage.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/banksy-wall-decal-vinyl-wall-sticker-the-end-tv-girl-home-bedroom-modern-wall-art-decor-graffiti-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/banksy-wall-decal-vinyl-wall-sticker-the-end-tv-girl-home-bedroom-modern-wall-art-decor-graffiti-christmas-gift",
          "price": 15.89,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Banksy \"The End\" TV Wall Sticker",
      "metaDescription": "Banksy-inspired \"The End\" TV graffiti-style wall decal, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1179188283_j5pw.jpg?v=1591259305"],
      "publish": true
    },
    {
      "slug": "banksy-flying-balloon-girl-wall-sticker",
      "title": "Banksy Flying Balloon Girl Wall Sticker",
      "excerpt": "A Banksy-inspired girl-with-balloon graffiti decal for home decor.",
      "description": "A vinyl wall sticker featuring the Banksy-inspired \"Flying Balloon Girl\" design, a well-known street art image reproduced as a removable decal. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/banksy-vinyl-wall-decal-sticker-flying-balloon-girl-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/banksy-vinyl-wall-decal-sticker-flying-balloon-girl-christmas-gift",
          "price": 16.77,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Banksy Flying Balloon Girl Wall Sticker",
      "metaDescription": "Banksy-inspired \"Flying Balloon Girl\" graffiti-style wall decal, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1105428604_d5wb.jpg?v=1604768799"],
      "publish": true
    },
    {
      "slug": "banksy-boy-and-girl-wall-sticker",
      "title": "Banksy Boy and Girl Wall Art Sticker",
      "excerpt": "A Banksy-inspired boy-and-girl decal available in nine colours and multiple sizes.",
      "description": "A vinyl wall decal featuring a Banksy-inspired boy and girl design. Available in multiple sizes from small to large and nine colour options including black, blue, green, pink, white, yellow, red, gold, and beige.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/banksy-wall-stickers-vinyl-decal-mural-boy-and-girl-design-for-home-decor-uk-free-pp-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" },
        { "label": "Colour options", "value": "9 colours, multiple sizes" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/banksy-wall-stickers-vinyl-decal-mural-boy-and-girl-design-for-home-decor-uk-free-pp-christmas-gift",
          "price": 7.94,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Banksy Boy and Girl Wall Art Sticker",
      "metaDescription": "Banksy-inspired boy and girl wall decal in 9 colours and multiple sizes, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1055356436_734u.jpg?v=1604768878"],
      "publish": true
    },
    {
      "slug": "banksy-flying-cow-wall-sticker",
      "title": "Banksy Flying Cow Wall Sticker",
      "excerpt": "A Banksy-inspired flying cow with parachute decal, a distinctive street-art piece.",
      "description": "A vinyl wall sticker featuring the Banksy-inspired \"Flying Cow\" design — a cow suspended by a parachute, in the artist's street-art style. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/banksy-wall-art-decal-wall-sticker-flying-cow-parachute-street-art-home-decor-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/banksy-wall-art-decal-wall-sticker-flying-cow-parachute-street-art-home-decor-christmas-gift",
          "price": 8.82,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Banksy Flying Cow Wall Sticker",
      "metaDescription": "Banksy-inspired \"Flying Cow\" parachute street-art wall decal, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1184390941_7dxl.jpg?v=1604768798"],
      "publish": true
    },
    {
      "slug": "custom-name-wall-sticker-kids",
      "title": "Custom Name Wall Sticker for Kids",
      "excerpt": "A custom name decal in a hand-written font, sized 20cm-100cm — starting price, final cost depends on size chosen.",
      "description": "A custom name wall decal designed with a hand-written font, personalised with any name at checkout. Available in sizes from 20cm to 100cm in length; the price shown is the starting price for the smallest size, with larger sizes costing more.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/custom-wall-sticker-custom-wall-decal-custom-name-wall-sticker-personalized-wall-decal-personalized-sticker-kids-wall-art-wall-decor",
      "specifications": [
        { "label": "Size range", "value": "20cm - 100cm length" },
        { "label": "Pricing", "value": "Starting price — varies by size, personalised with a name at checkout" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/custom-wall-sticker-custom-wall-decal-custom-name-wall-sticker-personalized-wall-decal-personalized-sticker-kids-wall-art-wall-decor",
          "price": 7.06,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Custom Name Wall Sticker for Kids",
      "metaDescription": "Hand-written-font custom name wall decal, personalised for kids' rooms. Starting price varies by size.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1822696636_5zah.jpg?v=1591258460"],
      "publish": true
    },
    {
      "slug": "custom-name-calligraphy-wall-sticker",
      "title": "Custom Name Calligraphy Nursery Wall Sticker",
      "excerpt": "A custom name decal in calligraphy font, sized 20cm-80cm — starting price, final cost depends on size chosen.",
      "description": "A custom name wall decal designed with a calligraphy font, personalised with any name at checkout. Available in sizes from 20cm to 80cm in length; the price shown is the starting price for the smallest size.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/custom-name-decal-calligraphy-personalized-decal-personalized-sticker-custom-name-sticker-custom-wall-art-name-wall-decal-artwork770",
      "specifications": [
        { "label": "Size range", "value": "20cm - 80cm length" },
        { "label": "Pricing", "value": "Starting price — varies by size, personalised with a name at checkout" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/custom-name-decal-calligraphy-personalized-decal-personalized-sticker-custom-name-sticker-custom-wall-art-name-wall-decal-artwork770",
          "price": 7.06,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Custom Name Calligraphy Wall Sticker",
      "metaDescription": "Calligraphy-font custom name wall decal for a nursery, personalised at checkout. Starting price varies by size.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1505647087_4sqz.jpg?v=1591259002"],
      "publish": true
    },
    {
      "slug": "monogram-font-decal-sticker",
      "title": "Monogram Font Decal Sticker",
      "excerpt": "A personalised letter monogram decal in 36 colour options — starting price, final cost depends on size chosen.",
      "description": "A personalised letter monogram decal sticker that applies to walls, bottles, mugs, cars, books, laptops, tablets, and more. Available in 36 colour options and multiple sizes; the price shown is the starting price for the smallest size.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/monogram-font-decal-monogram-art-wall-decal-sticker-circle-monogram-monogram-vinyl-decal-vinyl-sticker-laptop-monogram-tablet-078",
      "specifications": [
        { "label": "Colour options", "value": "36 colours, multiple sizes" },
        { "label": "Pricing", "value": "Starting price — varies by size, personalised with a letter at checkout" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/monogram-font-decal-monogram-art-wall-decal-sticker-circle-monogram-monogram-vinyl-decal-vinyl-sticker-laptop-monogram-tablet-078",
          "price": 5.14,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Monogram Font Decal Sticker",
      "metaDescription": "Personalised letter monogram decal in 36 colours, for walls, laptops, bottles and more. Starting price varies by size.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1493190225_bsih.jpg?v=1591258621"],
      "publish": true
    },
    {
      "slug": "gold-monogram-initial-sticker",
      "title": "Gold Monogram Initial Sticker",
      "excerpt": "A single-initial gold metallic monogram decal — starting price, final cost depends on size chosen.",
      "description": "A single-initial gold metallic monogram custom sticker for customising a water bottle, laptop, Yeti, phone case, mug, cup, window, car, and more. The price shown is the starting price for the smallest size.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/gold-monogram-decal-monogram-decal-initial-decal-custom-decal-personalised-initials-gold-metallic-bottle-decal-tablet-decals-077",
      "specifications": [
        { "label": "Finish", "value": "Gold metallic vinyl" },
        { "label": "Pricing", "value": "Starting price — varies by size, personalised with an initial at checkout" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/gold-monogram-decal-monogram-decal-initial-decal-custom-decal-personalised-initials-gold-metallic-bottle-decal-tablet-decals-077",
          "price": 5.14,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Gold Monogram Initial Sticker",
      "metaDescription": "Single-initial gold metallic monogram decal for bottles, laptops, mugs and more. Starting price varies by size.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1494128653_kyqj.jpg?v=1591257073"],
      "publish": true
    },
    {
      "slug": "world-map-wall-sticker",
      "title": "World Map Wall Sticker",
      "excerpt": "A world map wall decal with 20 pin points to mark places visited, for a home, office, or study space.",
      "description": "A world map wall decal sticker including 20 pin points to stick anywhere on the map. Available in 36 colours, made to order in the UK from branded vinyl — suited to a home office, travel-themed room, or student study space.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas", "back-to-school"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/world-map-wall-art-decal-sticker-office-home-travel-wall-sticker-36-colours",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" },
        { "label": "Includes", "value": "20 pin points, 36 colour options" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/world-map-wall-art-decal-sticker-office-home-travel-wall-sticker-36-colours",
          "price": 9.71,
          "currency": "GBP"
        }
      ],
      "metaTitle": "World Map Wall Sticker",
      "metaDescription": "World map wall decal with 20 pin points, made to order in the UK by QuoteMyWall in 36 colours.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1184238585_7ljd.jpg?v=1591255091"],
      "publish": true
    },
    {
      "slug": "moon-and-back-nursery-quote-wall-sticker",
      "title": "\"I Love You to the Moon and Back\" Nursery Wall Quote",
      "excerpt": "A nursery wall quote featuring a large moon and stars — a family-themed decal that also suits Mother's Day gifting.",
      "description": "A wall sticker quote reading \"I love you to the moon and back,\" featuring stars and a large moon design. Made to order in the UK from branded vinyl for a nursery or child's bedroom wall.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/i-love-you-to-the-moon-and-back-wall-sticker-quote-nursery-wall-quote-wall-decal-quote-moon-wall-decal-decal-moon-moon-sticker-stars",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/i-love-you-to-the-moon-and-back-wall-sticker-quote-nursery-wall-quote-wall-decal-quote-moon-wall-decal-decal-moon-moon-sticker-stars",
          "price": 18.54,
          "currency": "GBP"
        }
      ],
      "metaTitle": "\"I Love You to the Moon and Back\" Wall Quote",
      "metaDescription": "Nursery wall quote decal with moon and stars design, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1442646288_p4jb.jpg?v=1591256241"],
      "publish": true
    },
    {
      "slug": "live-love-laugh-wall-sticker-quote",
      "title": "\"Live Love Laugh\" Wall Sticker Quote",
      "excerpt": "A calligraphy-style \"Live, Love, Laugh\" wall quote decal, available in 36 colours.",
      "description": "A wall sticker quote reading \"Live, Love, Laugh\" in a calligraphy-style design, available in 36 colour options. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/live-love-laugh-wall-sticker-quote-bedroom-wall-sticker-bedroom-wall-decal-wall-art-quote-love-quote-wall-art-quote-art-home-decor",
      "specifications": [
        { "label": "Colour options", "value": "36 colours" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/live-love-laugh-wall-sticker-quote-bedroom-wall-sticker-bedroom-wall-decal-wall-art-quote-love-quote-wall-art-quote-art-home-decor",
          "price": 14.12,
          "currency": "GBP"
        }
      ],
      "metaTitle": "\"Live Love Laugh\" Wall Sticker Quote",
      "metaDescription": "Calligraphy-style \"Live, Love, Laugh\" wall quote decal in 36 colours, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1338292613_o299.jpg?v=1591259876"],
      "publish": true
    },
    {
      "slug": "muhammad-ali-motivational-wall-sticker-quote",
      "title": "Muhammad Ali Motivational Wall Sticker Quote",
      "excerpt": "An inspirational Muhammad Ali quote decal — \"Don't Quit\" — for a home gym or office wall.",
      "description": "An inspirational wall sticker quote from Muhammad Ali: \"Don't Quit. Suffer now, and live the rest of your life as a champion.\" Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/muhammad-ali-motivational-wall-sticker-quote-wall-art-decal-dont-quit-champion-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/muhammad-ali-motivational-wall-sticker-quote-wall-art-decal-dont-quit-champion-christmas-gift",
          "price": 14.12,
          "currency": "GBP"
        }
      ],
      "metaTitle": "Muhammad Ali Motivational Wall Sticker Quote",
      "metaDescription": "\"Don't Quit\" Muhammad Ali motivational wall quote decal, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1140722707_3jbj.jpg?v=1591258883"],
      "publish": true
    },
    {
      "slug": "no-place-like-home-wall-sticker-quote",
      "title": "\"There's No Place Like Home\" Wall Sticker Quote",
      "excerpt": "A \"There's no place like home\" wall quote decal, featuring hearts within a plaque shape.",
      "description": "A wall sticker quote reading \"There's no place like home,\" featuring hearts within a plaque shape. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/theres-no-place-like-home-wall-art-sticker-quote-vinyl-wall-decal-design-for-home-decor-uk-mural-wallpaper-gift-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/theres-no-place-like-home-wall-art-sticker-quote-vinyl-wall-decal-design-for-home-decor-uk-mural-wallpaper-gift-christmas-gift",
          "price": 14.12,
          "currency": "GBP"
        }
      ],
      "metaTitle": "\"There's No Place Like Home\" Wall Quote",
      "metaDescription": "\"There's no place like home\" wall quote decal with heart plaque design, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1179175349_lnww.jpg?v=1591258000"],
      "publish": true
    },
    {
      "slug": "wine-oclock-wall-sticker-quote",
      "title": "\"It's Wine O'Clock\" Wall Sticker Quote",
      "excerpt": "A novelty \"It's Wine O'Clock\" wall quote shaped like a wine bottle, for a kitchen or home bar.",
      "description": "A novelty wall sticker quote reading \"It's Wine O'Clock,\" designed in a wine bottle shape made using words. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/wall-sticker-quote-its-wine-oclock-kitchen-home-wall-art-decal-wall-quote-mural-wallpaper-decor-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/wall-sticker-quote-its-wine-oclock-kitchen-home-wall-art-decal-wall-quote-mural-wallpaper-decor-christmas-gift",
          "price": 18.54,
          "currency": "GBP"
        }
      ],
      "metaTitle": "\"It's Wine O'Clock\" Wall Sticker Quote",
      "metaDescription": "Novelty \"It's Wine O'Clock\" wine-bottle-shaped wall quote decal for a kitchen, made by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1172612004_t07q.jpg?v=1591259934"],
      "publish": true
    },
    {
      "slug": "carpe-diem-wall-sticker-quote",
      "title": "\"Carpe Diem\" Wall Sticker Quote",
      "excerpt": "A flowing-script \"Carpe Diem\" (Seize the Day) wall quote decal.",
      "description": "A wall decal quote reading \"Carpe Diem,\" Latin for \"Seize the Day,\" designed in a flowing script. Made to order in the UK from branded vinyl.",
      "categorySlugs": ["wall-decor"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "quotemywall",
      "officialUrl": "https://www.quotemywall.co.uk/products/wall-decal-wall-sticker-quote-carpe-diem-wall-art-quote-home-decor-mural-wallpaper-christmas-gift",
      "specifications": [
        { "label": "Material", "value": "Branded vinyl, made to order in the UK" }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "quotemywall",
          "affiliateUrl": "https://www.quotemywall.co.uk/products/wall-decal-wall-sticker-quote-carpe-diem-wall-art-quote-home-decor-mural-wallpaper-christmas-gift",
          "price": 8.82,
          "currency": "GBP"
        }
      ],
      "metaTitle": "\"Carpe Diem\" Wall Sticker Quote",
      "metaDescription": "\"Carpe Diem\" (Seize the Day) flowing-script wall quote decal, made to order in the UK by QuoteMyWall.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0030/2311/0193/products/il_fullxfull.1192750711_5and.jpg?v=1604768922"],
      "publish": true
    },
    {
      "slug": "jenni-travel-bag-2",
      "title": "Jenni Travel Bag 2.0",
      "bestPickLabel": "best-travel",
      "excerpt": "A 21\" x 9\" x 12\" carry-on duffel built from water- and tear-resistant fabric, sized to meet standard airline carry-on limits and fit up to 14 days of clothing.",
      "description": "The Jenni Travel Bag 2.0 is a carry-on duffel designed to replace a checked bag: 21\" x 9\" x 12\", built from TPU-900D water- and tear-resistant Oxford fabric, and light enough at 2.5 lbs to carry by hand or over the shoulder. It fits easily in overhead compartments or under the seat, and JenniBag also sells a Roller Edition with a detachable, 360-degree roller handle for the same bag. Orders are covered by JenniBag's 60-day order protection against damage, defects, or incorrect items.",
      "categorySlugs": ["travel-bags"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "jennibag",
      "officialUrl": "https://jennibag.com/products/jennitravelbag-2",
      "pros": [
        "Airline carry-on approved dimensions (21\" x 9\" x 12\") — fits overhead or under the seat",
        "Lightweight at 2.5 lbs despite water- and tear-resistant TPU-900D Oxford fabric",
        "Backed by a 60-day order protection covering damage, defects, or incorrect items"
      ],
      "specifications": [
        { "label": "Dimensions", "value": "21\" x 9\" x 12\" (carry-on approved)" },
        { "label": "Weight", "value": "2.5 lbs" },
        { "label": "Material", "value": "TPU-900D water- and tear-resistant Oxford fabric" },
        { "label": "Capacity", "value": "Fits up to 14 days of clothing" }
      ],
      "faqs": [
        {
          "question": "Is the Jenni Travel Bag 2.0 airline carry-on approved?",
          "answer": "Yes — it measures 21\" x 9\" x 12\", within standard airline carry-on size limits."
        },
        {
          "question": "What is the Jenni Travel Bag 2.0 made from?",
          "answer": "TPU-900D water- and tear-resistant Oxford fabric."
        },
        {
          "question": "What happens if the bag arrives damaged or defective?",
          "answer": "JenniBag's 60-day order protection covers damage, defects, incorrect items, or delayed delivery, with replacement, return, or full refund options."
        }
      ],
      "retailerLinks": [
        {
          "retailerSlug": "jennibag",
          "affiliateUrl": "https://jennibag.com/products/jennitravelbag-2",
          "price": 98,
          "currency": "USD"
        }
      ],
      "metaTitle": "Jenni Travel Bag 2.0 — Carry-On Duffel",
      "metaDescription": "Airline carry-on approved 21\" x 9\" x 12\" duffel in water- and tear-resistant fabric, fits up to 14 days of clothing.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0593/6775/1722/files/5_db0a5f0c-cd5b-452f-9abc-5811a907fd3f.webp?v=1782621874"],
      "publish": true
    },
    {
      "slug": "voyager-titanium-field-watch-black",
      "title": "VOYAGER Titanium Field Watch — Black",
      "excerpt": "A 100m-water-resistant sandblasted titanium field watch with a Japanese automatic movement and sapphire crystal.",
      "description": "The VOYAGER field watch pairs a sandblasted titanium case (water-resistant to 100m) with a Japanese automatic mechanical movement, sapphire crystal, screw-down crown, and Swiss C3 Super-LumiNova on a durable nylon strap.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/voyager-titanium-field-watch-black",
      "specifications": [
        { "label": "Case Material", "value": "Sandblasted titanium" },
        { "label": "Movement", "value": "Japanese automatic mechanical" },
        { "label": "Water Resistance", "value": "100m" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/voyager-titanium-field-watch-black", "price": 139, "currency": "USD" }
      ],
      "metaTitle": "VOYAGER Titanium Field Watch — Black",
      "metaDescription": "Sandblasted titanium field watch, 100m water resistant, Japanese automatic movement and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/11T07.jpg?v=1721114918"],
      "publish": true
    },
    {
      "slug": "voyager-bronze-field-watch-black",
      "title": "VOYAGER Bronze Field Watch — Black",
      "excerpt": "The bronze edition of the VOYAGER field watch — a CuSn8 bronze case that develops its own patina over time.",
      "description": "The VOYAGER Bronze field watch uses a CuSn8 bronze case that naturally oxidizes and patinas with wear — it ships with a protective film, though some spotting can appear during shipping from air exposure.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/voyager-bronze-automatic-field-watch-black",
      "specifications": [
        { "label": "Case Material", "value": "CuSn8 bronze (patinas over time)" },
        { "label": "Water Resistance", "value": "100m" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/voyager-bronze-automatic-field-watch-black", "price": 169, "currency": "USD" }
      ],
      "metaTitle": "VOYAGER Bronze Field Watch — Black",
      "metaDescription": "Bronze-case field watch that develops its own patina, 100m water resistant, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/11B01.jpg?v=1708158665"],
      "publish": true
    },
    {
      "slug": "seaturtle-ocean-titanium-diver-watch-blue",
      "title": "SEATURTLE.OCEAN Titanium Diver Watch — Sea Blue",
      "excerpt": "A titanium dive watch with a turtle-shell textured dial, designed around marine-conservation awareness.",
      "description": "The SEATURTLE.OCEAN watch raises awareness of marine plastic waste's impact on sea turtles. It has a 40mm brushed titanium case with a turtle-shell textured dial, screw-down crown and case back, 100m water resistance, and a Seiko NH35 automatic movement.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/seaturtle-titanium-automatic-diver-watch-blue-bracelet",
      "specifications": [
        { "label": "Case", "value": "40mm brushed titanium" },
        { "label": "Movement", "value": "Seiko NH35 automatic" },
        { "label": "Water Resistance", "value": "100m" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/seaturtle-titanium-automatic-diver-watch-blue-bracelet", "price": 239, "currency": "USD" }
      ],
      "metaTitle": "SEATURTLE.OCEAN Titanium Diver Watch — Sea Blue",
      "metaDescription": "Titanium dive watch with turtle-shell textured dial and Seiko NH35 automatic movement, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/arhgrejrtkrt.jpg?v=1713258613"],
      "publish": true
    },
    {
      "slug": "seaturtle-ocean-bronze-diver-watch-black",
      "title": "SEATURTLE.OCEAN Bronze Diver Watch — Black",
      "excerpt": "The bronze edition of the SEATURTLE.OCEAN dive watch, with the same turtle-shell textured dial.",
      "description": "The bronze SEATURTLE.OCEAN watch shares the marine-conservation theme of the titanium version: a 40mm brushed CuSn8 bronze case with turtle-shell textured dial, 100m water resistance, and a Seiko NH35 automatic movement.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/seaturtle-oceanbronze-automatic-bronze-diver-watch-black-silicone",
      "specifications": [
        { "label": "Case", "value": "40mm brushed CuSn8 bronze" },
        { "label": "Movement", "value": "Seiko NH35 automatic" },
        { "label": "Water Resistance", "value": "100m" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/seaturtle-oceanbronze-automatic-bronze-diver-watch-black-silicone", "price": 209, "currency": "USD" }
      ],
      "metaTitle": "SEATURTLE.OCEAN Bronze Diver Watch — Black",
      "metaDescription": "Bronze dive watch with turtle-shell textured dial and Seiko NH35 automatic movement, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/7B04_bbcdcf4e-152e-46ca-a957-26dca8f2035b.jpg?v=1711357013"],
      "publish": true
    },
    {
      "slug": "admiral-gmt-titanium-diver-watch-black",
      "title": "ADMIRAL GMT Titanium Diver Watch — Black",
      "excerpt": "Boderry's debut GMT watch — a 200m titanium dive watch with sapphire crystal and Japanese GMT movement.",
      "description": "Boderry's first GMT timepiece: a 40mm brushed titanium case and bezel with ultra-bright luminescent paint, a screw-down crown and case back rated to 200m water resistance, a scratch-resistant sapphire crystal, and a precision Japanese GMT automatic movement.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/admiral-gmt-titanium-automatic-diver-watch-black",
      "specifications": [
        { "label": "Case", "value": "40mm brushed titanium" },
        { "label": "Movement", "value": "Japanese GMT automatic" },
        { "label": "Water Resistance", "value": "200m" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/admiral-gmt-titanium-automatic-diver-watch-black", "price": 309, "currency": "USD" }
      ],
      "metaTitle": "ADMIRAL GMT Titanium Diver Watch — Black",
      "metaDescription": "Boderry's first GMT watch — 200m titanium dive watch with sapphire crystal and Japanese GMT movement.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/BK.jpg?v=1709107774"],
      "publish": true
    },
    {
      "slug": "admiral-gmt-bronze-diver-watch-blue",
      "title": "ADMIRAL GMT Bronze Diver Watch — Blue",
      "excerpt": "A bronze edition of the ADMIRAL GMT dive watch with a Seiko NH34 mechanical GMT movement.",
      "description": "The bronze ADMIRAL GMT follows the titanium original with a CuSn8 tin bronze case, a Seiko NH34 mechanical GMT movement, a two-tone aluminum bezel, and Super-LumiNova hour markers.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/admiral-gmt-bronze-automatic-diver-watch-blue",
      "specifications": [
        { "label": "Case", "value": "CuSn8 bronze" },
        { "label": "Movement", "value": "Seiko NH34 mechanical GMT" },
        { "label": "Water Resistance", "value": "200m" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/admiral-gmt-bronze-automatic-diver-watch-blue", "price": 309, "currency": "USD" }
      ],
      "metaTitle": "ADMIRAL GMT Bronze Diver Watch — Blue",
      "metaDescription": "Bronze GMT dive watch with Seiko NH34 mechanical movement and two-tone bezel, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/A12B-02.jpg?v=1727684695"],
      "publish": true
    },
    {
      "slug": "landmaster-titanium-field-watch-black",
      "title": "LANDMASTER Titanium Field Watch — Black",
      "excerpt": "A fully titanium-crafted field watch — case, bracelet, clasp, and case back — with glass tube lume and a domed sapphire crystal.",
      "description": "The LANDMASTER field watch takes a design distinct from the VOYAGER line: a 38mm sandblasted titanium case that's entirely titanium-crafted including the bracelet, clasp, and case back, with glass tube lume and a high-quality domed sapphire crystal.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/landmaster-titanium-automatic-field-watch-black",
      "specifications": [
        { "label": "Case", "value": "38mm sandblasted titanium (case, bracelet, clasp, case back)" },
        { "label": "Water Resistance", "value": "100m" },
        { "label": "Crystal", "value": "Domed sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/landmaster-titanium-automatic-field-watch-black", "price": 199, "currency": "USD" }
      ],
      "metaTitle": "LANDMASTER Titanium Field Watch — Black",
      "metaDescription": "Fully titanium field watch with glass tube lume and domed sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/A14T-01.jpg?v=1721121832"],
      "publish": true
    },
    {
      "slug": "landmaster-titanium-field-watch-blue",
      "title": "LANDMASTER Titanium Field Watch — Blue",
      "excerpt": "The blue-dial version of the LANDMASTER titanium field watch.",
      "description": "The blue-dial LANDMASTER shares the same fully titanium-crafted 38mm case, glass tube lume, and domed sapphire crystal as the black version.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/landmaster-titanium-automatic-field-watch-blue",
      "specifications": [
        { "label": "Case", "value": "38mm sandblasted titanium (case, bracelet, clasp, case back)" },
        { "label": "Water Resistance", "value": "100m" },
        { "label": "Crystal", "value": "Domed sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/landmaster-titanium-automatic-field-watch-blue", "price": 199, "currency": "USD" }
      ],
      "metaTitle": "LANDMASTER Titanium Field Watch — Blue",
      "metaDescription": "Fully titanium field watch with glass tube lume and domed sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/A14T-04.jpg?v=1734518835"],
      "publish": true
    },
    {
      "slug": "elite-micro-rotor-watch-gold-black",
      "title": "ELITE Micro-Rotor Automatic Watch — Gold/Black",
      "excerpt": "A micro-rotor automatic watch with a 40+ hour power reserve in a 316L stainless steel case.",
      "description": "The ELITE watch is built around a micro-rotor automatic movement with a 40+ hour power reserve, housed in a 316L stainless steel case with a sapphire crystal and genuine leather strap.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/mens-automaticmicro-rotor-watch-the-elite-gold-green",
      "specifications": [
        { "label": "Case", "value": "316L stainless steel" },
        { "label": "Movement", "value": "Micro-rotor automatic, 40+ hour power reserve" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/mens-automaticmicro-rotor-watch-the-elite-gold-green", "price": 299, "currency": "USD" }
      ],
      "metaTitle": "ELITE Micro-Rotor Automatic Watch",
      "metaDescription": "Micro-rotor automatic watch with 40+ hour power reserve, 316L steel case and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/30.jpg?v=1676293075"],
      "publish": true
    },
    {
      "slug": "elite-ii-micro-rotor-watch-blue",
      "title": "ELITE II Engraved Micro-Rotor Watch — Blue",
      "excerpt": "The second-generation ELITE watch, with an engraved micro-rotor visible through a 42mm sapphire crystal.",
      "description": "ELITE II steps up to a 42mm 316L stainless steel case with sapphire crystal, powered by a Hangzhou Cal.5521 mechanical automatic movement with an engraved micro-rotor.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/eliteii-micro-rotor-blue-mechanical-watch",
      "specifications": [
        { "label": "Case", "value": "42mm 316L stainless steel" },
        { "label": "Movement", "value": "Hangzhou Cal.5521 mechanical automatic" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/eliteii-micro-rotor-blue-mechanical-watch", "price": 249, "currency": "USD" }
      ],
      "metaTitle": "ELITE II Engraved Micro-Rotor Watch — Blue",
      "metaDescription": "42mm micro-rotor mechanical watch with sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/0903.jpg?v=1708159559"],
      "publish": true
    },
    {
      "slug": "checkmate-complication-watch-obsidian",
      "title": "THE CHECKMATE Complication Watch — Obsidian & Bracelet",
      "excerpt": "A chess-inspired complication watch with date, day, and month display on an automatic Seagull ST2625 movement.",
      "description": "THE CHECKMATE is a mechanical automatic-winding watch built on the Seagull ST2625 caliber, with date, day, and month display. Its 6-digit \"flywheel system\" is visible on the movement, the design centerpiece of this chess-themed watch.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/menwatch-checkmate-complication-automatic-watch-obsidian-bracelet",
      "specifications": [
        { "label": "Movement", "value": "Seagull ST2625 automatic, date/day/month" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/menwatch-checkmate-complication-automatic-watch-obsidian-bracelet", "price": 198, "currency": "USD" }
      ],
      "metaTitle": "THE CHECKMATE Complication Watch — Obsidian",
      "metaDescription": "Chess-themed complication watch with date/day/month display, Seagull ST2625 movement, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/02_001955e0-5790-4d55-9b14-ed6e1bbcda7a.jpg?v=1678614790"],
      "publish": true
    },
    {
      "slug": "checkmate-complication-watch-sapphire",
      "title": "THE CHECKMATE Complication Watch — Sapphire & Bracelet",
      "excerpt": "The sapphire-blue colorway of THE CHECKMATE chess-inspired complication watch.",
      "description": "The sapphire colorway of THE CHECKMATE shares the same Seagull ST2625 automatic movement with date, day, and month display and the visible 6-digit \"flywheel system.\"",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/menwatch-checkmate-complication-automatic-watch-sapphire-bracelet",
      "specifications": [
        { "label": "Movement", "value": "Seagull ST2625 automatic, date/day/month" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/menwatch-checkmate-complication-automatic-watch-sapphire-bracelet", "price": 198, "currency": "USD" }
      ],
      "metaTitle": "THE CHECKMATE Complication Watch — Sapphire",
      "metaDescription": "Chess-themed complication watch with date/day/month display, Seagull ST2625 movement, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/03_b2425f02-7dd8-4b93-8e7a-86588aa65d67.jpg?v=1678679977"],
      "publish": true
    },
    {
      "slug": "urban-skeleton-titanium-watch-black",
      "title": "URBAN SKELETON Titanium Watch — Black Dial",
      "excerpt": "A hi-beat titanium skeleton watch with a 72-hour power reserve — 30% lighter and 40% harder than stainless steel.",
      "description": "URBAN SKELETON uses a titanium case — 30% lighter and 40% harder than stainless steel, corrosion- and heat-resistant — running a hi-beat (28,800 bph) automatic movement with a 72-hour power reserve.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/men-watch-urban-skeleton-titanium",
      "specifications": [
        { "label": "Case", "value": "Titanium" },
        { "label": "Movement", "value": "Hi-beat (28,800 bph) automatic, 72-hour power reserve" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/men-watch-urban-skeleton-titanium", "price": 149, "currency": "USD" }
      ],
      "metaTitle": "URBAN SKELETON Titanium Watch — Black Dial",
      "metaDescription": "Hi-beat titanium skeleton watch with 72-hour power reserve, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/A01T-05_a73627f1-8a9e-4eda-8b53-d3bba1ed8bd0.jpg?v=1680863589"],
      "publish": true
    },
    {
      "slug": "classic-32mm-quartz-watch-rose-gold-claret",
      "title": "CLASSIC 32MM Swiss Quartz Watch — Rose Gold & Claret",
      "excerpt": "A 32mm unisex quartz watch on a Swiss-made Ronda 785 movement — a simpler, budget-friendly line alongside Boderry's automatics.",
      "description": "The CLASSIC 32MM is a 32mm unisex watch with a Swiss-made Ronda 785 quartz movement, sapphire crystal, and stainless steel case, available with genuine leather or stainless steel straps.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/classic-women-watch-gold-mesh-32mm",
      "specifications": [
        { "label": "Case", "value": "32mm stainless steel" },
        { "label": "Movement", "value": "Swiss Ronda 785 quartz" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/classic-women-watch-gold-mesh-32mm", "price": 49, "currency": "USD" }
      ],
      "metaTitle": "CLASSIC 32MM Swiss Quartz Watch",
      "metaDescription": "32mm unisex quartz watch with Swiss Ronda movement and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/3.png?v=1676292250"],
      "publish": true
    },
    {
      "slug": "classic-36mm-quartz-watch-rose-gold-black",
      "title": "CLASSIC 36MM Swiss Quartz Watch — Rose Gold & Black",
      "excerpt": "The larger 36mm size of Boderry's CLASSIC quartz watch line.",
      "description": "The CLASSIC 36MM is a 36mm unisex watch with a Swiss-made Ronda 705 quartz movement, sapphire crystal, and stainless steel case construction.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/classic-women-watch-rose-gold-black-dial-36mm",
      "specifications": [
        { "label": "Case", "value": "36mm stainless steel" },
        { "label": "Movement", "value": "Swiss Ronda 705 quartz" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/classic-women-watch-rose-gold-black-dial-36mm", "price": 49, "currency": "USD" }
      ],
      "metaTitle": "CLASSIC 36MM Swiss Quartz Watch",
      "metaDescription": "36mm unisex quartz watch with Swiss Ronda movement and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/01_d201a081-d724-4133-a874-decfd36619d1.png?v=1676292341"],
      "publish": true
    },
    {
      "slug": "elegant-ii-quartz-watch-silver-white",
      "title": "ELEGANT II Swiss Quartz Watch — Silver & White Dial",
      "excerpt": "A 40mm dress watch on a Swiss Ronda 6004D quartz movement, with a clean silver-and-white face.",
      "description": "ELEGANT II is a dress watch built around a Swiss Ronda 6004D quartz movement in a 40mm stainless steel case with sapphire crystal and water resistance up to 3 ATM.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas", "valentines-day"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/elegant-diamonds-watches-black",
      "specifications": [
        { "label": "Case", "value": "40mm stainless steel" },
        { "label": "Movement", "value": "Swiss Ronda 6004D quartz" },
        { "label": "Water Resistance", "value": "3 ATM" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/elegant-diamonds-watches-black", "price": 59, "currency": "USD" }
      ],
      "metaTitle": "ELEGANT II Swiss Quartz Watch — Silver & White",
      "metaDescription": "40mm dress watch with Swiss quartz movement and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/04_e3d016f5-44b9-4304-8a27-98626d42ee76.png?v=1676293002"],
      "publish": true
    },
    {
      "slug": "elegant-quartz-watch-rose-gold-white",
      "title": "ELEGANT Swiss Quartz Watch — Rose Gold & White Dial",
      "excerpt": "A rose-gold dress watch on a Swiss quartz movement with a white dial and sapphire crystal.",
      "description": "The ELEGANT dress watch pairs a white dial with a rose-gold-tone stainless steel case, Swiss quartz movement, and sapphire crystal.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas", "valentines-day"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/elegant-mens-watch-rose-gold-white",
      "specifications": [
        { "label": "Case", "value": "Rose-gold-tone stainless steel" },
        { "label": "Movement", "value": "Swiss quartz" },
        { "label": "Crystal", "value": "Sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/elegant-mens-watch-rose-gold-white", "price": 59, "currency": "USD" }
      ],
      "metaTitle": "ELEGANT Swiss Quartz Watch — Rose Gold & White",
      "metaDescription": "Rose-gold dress watch with Swiss quartz movement and sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/020_b52ea72d-93de-47e8-8cb3-71c3b26cf891.png?v=1676291872"],
      "publish": true
    },
    {
      "slug": "asymmetry-mechanical-chronograph-black",
      "title": "ASYMMETRY Mechanical Chronograph — Black",
      "excerpt": "A mechanical chronograph with an asymmetrical dial design and a domed sapphire crystal.",
      "description": "The ASYMMETRY chronograph is built around an asymmetrical-dial design under a domed sapphire crystal, combining a sporty chronograph layout with a distinctive off-center look.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/asymmetry-mechanical-chronograph-black",
      "specifications": [
        { "label": "Movement", "value": "Mechanical chronograph" },
        { "label": "Crystal", "value": "Domed sapphire" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/asymmetry-mechanical-chronograph-black", "price": 299, "currency": "USD" }
      ],
      "metaTitle": "ASYMMETRY Mechanical Chronograph — Black",
      "metaDescription": "Mechanical chronograph with asymmetrical dial and domed sapphire crystal, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/0H8A5988.jpg?v=1678450666"],
      "publish": true
    },
    {
      "slug": "windmill-automatic-watch-red",
      "title": "WINDMILL Automatic Watch — Red Dial & Bracelet",
      "excerpt": "A skeleton automatic watch inspired by windmill design, with a wind-shaped seconds hand and 72-hour power reserve.",
      "description": "The WINDMILL line is inspired by windmill power and beauty, with a wind-shaped seconds-hand design adding dynamic movement to the dial. It runs a hi-beat automatic movement with a 72-hour power reserve.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/menwatch-automatic-windmill-red-stainless-steel",
      "specifications": [
        { "label": "Movement", "value": "Hi-beat (28,800 bph) automatic, 72-hour power reserve" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/menwatch-automatic-windmill-red-stainless-steel", "price": 225, "currency": "USD" }
      ],
      "metaTitle": "WINDMILL Automatic Watch — Red Dial",
      "metaDescription": "Skeleton automatic watch with wind-shaped seconds hand and 72-hour power reserve, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/products/02_adbc398c-2ee0-486a-8f2b-5065a0075046.jpg?v=1678522131"],
      "publish": true
    },
    {
      "slug": "storm-titanium-watch-black",
      "title": "STORM Square Automatic Titanium Watch — A10T-01",
      "excerpt": "A square-cased automatic titanium watch — a distinctive case shape apart from Boderry's round watch lines.",
      "description": "STORM breaks from Boderry's round-case watches with a square automatic titanium case, model A10T-01.",
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "boderry",
      "officialUrl": "https://www.boderry.com/products/storm-automatic-titanium-watch-black",
      "specifications": [
        { "label": "Case", "value": "Square titanium" }
      ],
      "retailerLinks": [
        { "retailerSlug": "boderry", "affiliateUrl": "https://www.boderry.com/products/storm-automatic-titanium-watch-black", "price": 349, "currency": "USD" }
      ],
      "metaTitle": "STORM Square Automatic Titanium Watch",
      "metaDescription": "Square-cased automatic titanium watch, model A10T-01, by Boderry.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0299/6954/7399/files/1002.jpg?v=1708159223"],
      "publish": true
    },
    {
      "slug": "sangamon-lincolns-river-brown-gold",
      "title": "Sangamon Lincoln's River — Brown Gold",
      "bestPickLabel": "editor-choice",
      "excerpt": "A limited-edition automatic watch (500 pieces) with a laser-engraved case back depicting Abraham Lincoln's 1831 journey down the Sangamon River.",
      "description": "The Lincoln's River watch commemorates an 1831 event in which a young Abraham Lincoln's boat became stuck on a mill dam along the Sangamon River — the case back is laser-engraved with the scene, and each of the 500 pieces includes a printed story card explaining the history.\nThe 42mm 316L stainless steel case pairs a brown genuine leather band with a Japanese Seiko NH35A automatic movement (41-hour power reserve) behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM, and ships in a cherry wood box with a high-gloss piano finish.",
      "bestFor": "Watch collectors interested in a limited-edition automatic with a genuine historical engraving, not just a themed dial.",
      "pros": ["Japanese Seiko NH35A automatic movement with 41-hour power reserve", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces with a numbered story card"],
      "cons": ["5 ATM water resistance is splash-resistant only, not suited for swimming"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/lincolns-river-brown-gold",
      "specifications": [
        { "label": "Case", "value": "42mm, 316L stainless steel, 12mm thick" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic, 41hr power reserve" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Brown genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/lincolns-river-brown-gold", "price": 319.06, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Lincoln's River — Brown Gold",
      "metaDescription": "Limited-edition automatic watch with Lincoln's River engraving, Seiko NH35A movement, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/A2020-01-11_0037.jpg?v=1579621470"],
      "publish": true
    },
    {
      "slug": "sangamon-lincolns-river-black",
      "title": "Sangamon Lincoln's River — Black",
      "excerpt": "The black-dial edition of the Lincoln's River watch — same laser-engraved case back and automatic movement, black leather band.",
      "description": "The Lincoln's River watch commemorates an 1831 event in which a young Abraham Lincoln's boat became stuck on a mill dam along the Sangamon River — the case back is laser-engraved with the scene, and each of the 500 pieces includes a printed story card.\nThe 42mm 316L stainless steel case has a black dial and black genuine leather band, powered by a Japanese Seiko NH35A automatic movement (41-hour power reserve, 21,600 bph) behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM.",
      "bestFor": "Watch collectors interested in a limited-edition automatic with a genuine historical engraving, not just a themed dial.",
      "pros": ["Japanese Seiko NH35A automatic movement with 41-hour power reserve", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces with a numbered story card"],
      "cons": ["5 ATM water resistance is splash-resistant only, not suited for swimming"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/black",
      "specifications": [
        { "label": "Case", "value": "42mm, 316L stainless steel" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic, 21,600 bph" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/black", "price": 337.88, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Lincoln's River — Black",
      "metaDescription": "Limited-edition automatic watch with Lincoln's River engraving, black dial, Seiko NH35A movement, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/A2020-01-11_0001.jpg?v=1582731116"],
      "publish": true
    },
    {
      "slug": "sangamon-lincolns-river-silver",
      "title": "Sangamon Lincoln's River — Silver",
      "excerpt": "The white-dial edition of the Lincoln's River watch with a stainless steel band and the same laser-engraved case back.",
      "description": "The Lincoln's River watch commemorates an 1831 event in which a young Abraham Lincoln's boat became stuck on a mill dam along the Sangamon River — the case back is laser-engraved with the scene, and each of the 500 pieces includes a printed story card.\nThe 42mm 316L stainless steel case has a white dial and a stainless steel band, powered by a Japanese Seiko NH35A automatic movement (41-hour power reserve) behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM.",
      "bestFor": "Buyers who prefer an all-steel band over leather on the Lincoln's River line.",
      "pros": ["Stainless steel band instead of leather", "Japanese Seiko NH35A automatic movement", "Limited to 500 pieces with a numbered story card"],
      "cons": ["5 ATM water resistance is splash-resistant only, not suited for swimming"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/lincolns-river-silver",
      "specifications": [
        { "label": "Case", "value": "42mm, 316L stainless steel" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Stainless steel, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/lincolns-river-silver", "price": 348.24, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Lincoln's River — Silver",
      "metaDescription": "Limited-edition automatic watch with Lincoln's River engraving, steel band, Seiko NH35A movement, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/A2020-01-11_0044.jpg?v=1579795577"],
      "publish": true
    },
    {
      "slug": "sangamon-lincolns-river-gold-silver",
      "title": "Sangamon Lincoln's River — Gold Silver",
      "excerpt": "The two-tone gold/silver edition of the Lincoln's River watch with the same laser-engraved case back and automatic movement.",
      "description": "The Lincoln's River watch commemorates an 1831 event in which a young Abraham Lincoln's boat became stuck on a mill dam along the Sangamon River — the case back is laser-engraved with the scene, and each of the 500 pieces includes a printed story card.\nThe 42mm 316L stainless steel case has a white dial and a gold-toned/polished stainless steel band, powered by a Japanese Seiko NH35A automatic movement (41-hour power reserve) behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM.",
      "bestFor": "Buyers who want a two-tone gold/steel look on the Lincoln's River line.",
      "pros": ["Two-tone gold/polished steel band", "Japanese Seiko NH35A automatic movement", "Limited to 500 pieces with a numbered story card"],
      "cons": ["5 ATM water resistance is splash-resistant only, not suited for swimming"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/river-gold-silver",
      "specifications": [
        { "label": "Case", "value": "42mm, 316L stainless steel" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Gold/polished stainless steel, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/river-gold-silver", "price": 337.88, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Lincoln's River — Gold Silver",
      "metaDescription": "Limited-edition automatic watch with Lincoln's River engraving, two-tone band, Seiko NH35A movement, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/A2020-01-11_0050.jpg?v=1582731266"],
      "publish": true
    },
    {
      "slug": "sangamon-omaha-beach-green",
      "title": "Sangamon Omaha Beach — Green",
      "excerpt": "A WWII D-Day commemorative watch (limited to 500) with 24 case-back stars representing roughly 2,400 American casualties at Omaha Beach.",
      "description": "The Omaha Beach watch honors the June 6, 1944 D-Day landing. The case back is engraved with a soldier charging onto the beach, surrounded by 24 stars representing roughly 2,400 American casualties at Omaha Beach.\nThe 43mm brushed 316L stainless steel case has an army green dial and brown genuine leather band, powered by a Seiko VD78 quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Limited to 500 pieces, each including a story card, collector's coin, dog tags, and a 2-year international warranty.",
      "bestFor": "History-minded buyers who want a WWII commemorative watch with more than a themed dial — a numbered edition with collectible extras.",
      "pros": ["Includes a collector's coin, dog tags, and a 2-year international warranty", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces"],
      "cons": ["Quartz movement rather than automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/omaha-beach-w",
      "specifications": [
        { "label": "Case", "value": "43mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Seiko VD78 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Brown genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/omaha-beach-w", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Omaha Beach — Green",
      "metaDescription": "WWII D-Day commemorative watch, 24-star case back engraving, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/GreenBrown3.jpg?v=1584127805"],
      "publish": true
    },
    {
      "slug": "sangamon-omaha-beach-white-black",
      "title": "Sangamon Omaha Beach — White/Black",
      "excerpt": "A WWII D-Day commemorative watch (limited to 500) with a white dial, red numerals, and 24 case-back stars representing roughly 2,400 American casualties.",
      "description": "The Omaha Beach watch honors the June 6, 1944 D-Day landing. The case back is engraved with a soldier charging onto the beach, surrounded by 24 stars representing roughly 2,400 American casualties at Omaha Beach.\nThe 43mm brushed 316L stainless steel case has a white dial with red numerals and a black genuine leather band, powered by a Seiko VD78 quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Limited to 500 pieces, each including a story card, collector's coin, dog tags, and a 2-year international warranty.",
      "bestFor": "History-minded buyers who want a WWII commemorative watch with more than a themed dial — a numbered edition with collectible extras.",
      "pros": ["Includes a collector's coin, dog tags, and a 2-year international warranty", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces"],
      "cons": ["Quartz movement rather than automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/omaha-beach-white-black",
      "specifications": [
        { "label": "Case", "value": "43mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Seiko VD78 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/omaha-beach-white-black", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Omaha Beach — White/Black",
      "metaDescription": "WWII D-Day commemorative watch, 24-star case back engraving, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/BackofOmahaBeach_3ae935b5-8adc-4d11-a20e-c3eb13581831.jpg?v=1616677821"],
      "publish": true
    },
    {
      "slug": "sangamon-omaha-beach-blue-black",
      "title": "Sangamon Omaha Beach — Blue/Black",
      "excerpt": "A WWII D-Day commemorative watch (limited to 500) with a blue dial and 24 case-back stars representing roughly 2,400 American casualties.",
      "description": "The Omaha Beach watch honors the June 6, 1944 D-Day landing. The case back is engraved with a soldier charging onto the beach, surrounded by 24 stars representing roughly 2,400 American casualties at Omaha Beach.\nThe 43mm brushed 316L stainless steel case has a blue dial and black genuine leather band, powered by a Seiko VD78 quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Limited to 500 pieces, each including a story card, collector's coin, dog tags, and a 2-year international warranty.",
      "bestFor": "History-minded buyers who want a WWII commemorative watch with more than a themed dial — a numbered edition with collectible extras.",
      "pros": ["Includes a collector's coin, dog tags, and a 2-year international warranty", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces"],
      "cons": ["Quartz movement rather than automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/omaha-beach-blue-black",
      "specifications": [
        { "label": "Case", "value": "43mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Seiko VD78 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/omaha-beach-blue-black", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Omaha Beach — Blue/Black",
      "metaDescription": "WWII D-Day commemorative watch, 24-star case back engraving, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/BackofOmahaBeach_11fb965b-055c-4a11-b394-42b0a975638c.jpg?v=1584127776"],
      "publish": true
    },
    {
      "slug": "sangamon-omaha-beach-black-black",
      "title": "Sangamon Omaha Beach — Black/Black",
      "excerpt": "A WWII D-Day commemorative watch (limited to 500) with an all-black case/dial and 24 case-back stars representing roughly 2,400 American casualties.",
      "description": "The Omaha Beach watch honors the June 6, 1944 D-Day landing. The case back is engraved with a soldier charging onto the beach, surrounded by 24 stars representing roughly 2,400 American casualties at Omaha Beach.\nThe 43mm brushed 316L stainless steel case has a black dial and black genuine leather band, powered by a Seiko VD78 quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Limited to 500 pieces, each including a collector's coin, dog tags, and a 2-year international warranty.",
      "bestFor": "History-minded buyers who want a WWII commemorative watch with more than a themed dial — a numbered edition with collectible extras.",
      "pros": ["Includes a collector's coin, dog tags, and a 2-year international warranty", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces"],
      "cons": ["Quartz movement rather than automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/omaha-beach-black-black",
      "specifications": [
        { "label": "Case", "value": "43mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Seiko VD78 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/omaha-beach-black-black", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Omaha Beach — Black/Black",
      "metaDescription": "WWII D-Day commemorative watch, 24-star case back engraving, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/BlackBlack3.jpg?v=1591721350"],
      "publish": true
    },
    {
      "slug": "sangamon-omaha-beach-black-sand",
      "title": "Sangamon Omaha Beach — Black/Sand",
      "excerpt": "A WWII D-Day commemorative watch (limited to 500) with a black dial, sand-colored band, and 24 case-back stars representing roughly 2,400 American casualties.",
      "description": "The Omaha Beach watch honors the June 6, 1944 D-Day landing. The case back is engraved with a soldier charging onto the beach, surrounded by 24 stars representing roughly 2,400 American casualties at Omaha Beach.\nThe 43mm brushed 316L stainless steel case has a black dial and a sand-colored genuine leather band, powered by a Seiko VD78 quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Limited to 500 pieces, each including a story card, collector's coin, dog tags, and a 2-year international warranty.",
      "bestFor": "History-minded buyers who want a WWII commemorative watch with more than a themed dial — a numbered edition with collectible extras.",
      "pros": ["Includes a collector's coin, dog tags, and a 2-year international warranty", "Sapphire crystal with anti-reflective coating", "Limited to 500 pieces"],
      "cons": ["Quartz movement rather than automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/omaha-beach-black-sand",
      "specifications": [
        { "label": "Case", "value": "43mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Seiko VD78 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Sand genuine leather, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/omaha-beach-black-sand", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Omaha Beach — Black/Sand",
      "metaDescription": "WWII D-Day commemorative watch, 24-star case back engraving, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/BlackSand3.jpg?v=1584127763"],
      "publish": true
    },
    {
      "slug": "sangamon-mother-road-black",
      "title": "Sangamon Mother Road — Black",
      "excerpt": "A Route 66 commemorative automatic watch with a laser-engraved road-sign case back and a rally racing-style leather band.",
      "description": "The Mother Road watch honors Route 66, the historic highway connecting Chicago to Los Angeles. The case back is laser-engraved with a Route 66 road sign and checkered flag.\nThe 44mm brushed 316L stainless steel case has a black dial and a black genuine leather rally racing band (3-hole, oversized buckle), powered by a Japanese Seiko NH35A automatic movement (41-hour power reserve, 21,600 bph) behind a domed sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Includes a Route 66 keychain, patch, and 2-year international warranty.",
      "bestFor": "Route 66 enthusiasts who want an automatic watch with a rally-style leather strap rather than a plain quartz commemorative.",
      "pros": ["Japanese Seiko NH35A automatic movement", "Rally racing-style leather band with oversized buckle", "Includes a Route 66 keychain and patch"],
      "cons": ["44mm case is large — may not suit smaller wrists"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/mother-road-black",
      "specifications": [
        { "label": "Case", "value": "44mm, brushed 316L stainless steel" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic, 41hr power reserve" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather rally racing, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/mother-road-black", "price": 366.12, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Mother Road — Black",
      "metaDescription": "Route 66 commemorative automatic watch with engraved road-sign case back, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/MotherRoadBlack.jpg?v=1594142824"],
      "publish": true
    },
    {
      "slug": "sangamon-mother-road-brown",
      "title": "Sangamon Mother Road — Brown",
      "excerpt": "A Route 66 commemorative automatic watch (limited to 310) in a bronze case with a laser-engraved road-sign case back.",
      "description": "The Mother Road watch honors Route 66, the historic highway connecting Chicago to Los Angeles. The case back is laser-engraved with a Route 66 road sign and checkered flag. This edition is limited to 310 pieces.\nThe 44mm brushed bronze 316L stainless steel case has a brown dial and a brown genuine leather rally racing band (3-hole, oversized buckle), powered by a Japanese Seiko NH35A automatic movement (41-hour power reserve) behind a domed sapphire crystal with anti-reflective coating. Water resistant to 5 ATM. Includes a Route 66 keychain, patch, and 2-year international warranty.",
      "bestFor": "Route 66 enthusiasts who want a bronze-case automatic rather than the standard steel case.",
      "pros": ["Bronze case is a distinct material from the rest of the Sangamon line", "Japanese Seiko NH35A automatic movement", "Limited to 310 pieces"],
      "cons": ["44mm case is large — may not suit smaller wrists"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/pre-sale-mother-road-brown",
      "specifications": [
        { "label": "Case", "value": "44mm, brushed bronze 316L stainless steel" },
        { "label": "Movement", "value": "Japanese Seiko NH35A automatic, 41hr power reserve" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Brown genuine leather rally racing, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/pre-sale-mother-road-brown", "price": 343.53, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Mother Road — Brown (Bronze)",
      "metaDescription": "Route 66 commemorative automatic watch in a bronze case, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/MotherRoadBrown.jpg?v=1594912917"],
      "publish": true
    },
    {
      "slug": "sangamon-barton-rose-gold",
      "title": "Sangamon Clara Barton — Rose Gold",
      "excerpt": "A tribute watch (limited to 400) honoring Civil War nurse and American Red Cross founder Clara Barton, in a compact 36mm case with a mesh band.",
      "description": "The Clara Barton watch honors Clara Barton, a Civil War nurse and founder of the American Red Cross. The case back is engraved with a collage including words like \"Brave,\" \"Courageous,\" and \"Hero.\" Limited to 400 pieces.\nThe 36mm 316L stainless steel case (7.5mm thick) has a white dial with a rose gold mother-of-pearl finish, applied crystal hour markers, and a red-tipped second hand. The mesh stainless steel band is 14mm wide. Powered by a Citizen 2035 Japanese quartz movement behind a sapphire crystal with anti-reflective coating. Water resistant to 3 ATM.",
      "bestFor": "Smaller-wristed buyers or those wanting a dressier commemorative watch rather than a rugged field-watch look.",
      "pros": ["Compact 36mm case with a mesh stainless steel band", "Applied crystal hour markers", "Limited to 400 pieces"],
      "cons": ["3 ATM water resistance is splash-resistant only"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas", "mothers-day"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/barton-rose-gold",
      "specifications": [
        { "label": "Case", "value": "36mm, 316L stainless steel, 7.5mm thick" },
        { "label": "Movement", "value": "Citizen 2035 Japanese quartz" },
        { "label": "Water Resistance", "value": "3 ATM" },
        { "label": "Band", "value": "Mesh stainless steel, 14mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/barton-rose-gold", "price": 130.82, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Clara Barton — Rose Gold",
      "metaDescription": "Clara Barton tribute watch, compact 36mm case, mesh band, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/BartonRoseGold2.jpg?v=1615397545"],
      "publish": true
    },
    {
      "slug": "sangamon-first-flight-wine-red",
      "title": "Sangamon First Flight — Wine Red",
      "excerpt": "A limited-edition watch (150 pieces) honoring the Wright Brothers' first powered flight, with an engraved Wright Flyer on the case back.",
      "description": "The First Flight watch honors the Wright Brothers' first powered flight on December 17, 1903. The case back is engraved with the Wright Flyer aircraft, and each of the 150 pieces includes a story card connecting the design to aviation history.\nThe 40mm polished 316L stainless steel case has a wine red dial with Swiss BGW9 Super-LumiNova lume, behind a sapphire crystal with anti-reflective coating. Comes with a genuine leather band (quick-release) plus a silicone band alternative. Powered by a Japanese Seiko VH64 quartz movement. Water resistant to 5 ATM.",
      "bestFor": "Aviation history fans who want a compact quartz watch with genuine lume and two band options included.",
      "pros": ["Includes both a leather and a silicone band", "Swiss BGW9 Super-LumiNova lume", "Limited to 150 pieces"],
      "cons": ["Quartz movement, not automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/pre-sales-first-flight-red",
      "specifications": [
        { "label": "Case", "value": "40mm, polished 316L stainless steel, 12mm thick" },
        { "label": "Movement", "value": "Japanese Seiko VH64 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Genuine leather (quick-release) + silicone alternative, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/pre-sales-first-flight-red", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon First Flight — Wine Red",
      "metaDescription": "Wright Brothers tribute watch with Wright Flyer engraving, dual bands, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/redfront.png?v=1668553835"],
      "publish": true
    },
    {
      "slug": "sangamon-route-66-centennial",
      "title": "Sangamon Route 66 Centennial",
      "excerpt": "A very limited edition (50 pieces) celebrating Route 66's 100th anniversary, with an extra free band included.",
      "description": "The Route 66 Centennial watch marks the 100th anniversary of Route 66, the highway connecting Chicago to Los Angeles. The case back is laser-engraved with a Route 66 road sign, and the watch ships with a Route 66 car decal.\nThe 42mm polished 316L stainless steel case has an alabaster white dial behind a flat sapphire crystal with anti-reflective coating. Comes with a black genuine leather band plus an extra band included. Powered by a Japanese Miyota 2115 quartz movement. Water resistant to 5 ATM, with a 1-year international warranty.",
      "bestFor": "Route 66 collectors who want one of the more limited Sangamon editions (50 pieces) with two bands included.",
      "pros": ["Extra band included at no additional cost", "Very limited run of 50 pieces", "1-year international warranty"],
      "cons": ["Quartz movement, not automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/route-66-centennial",
      "specifications": [
        { "label": "Case", "value": "42mm, polished 316L stainless steel, 12mm thick" },
        { "label": "Movement", "value": "Japanese Miyota 2115 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather + extra band, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/route-66-centennial", "price": 272.00, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Route 66 Centennial Watch",
      "metaDescription": "Route 66 100th anniversary watch, limited to 50 pieces, two bands included, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/66front.png?v=1668554544"],
      "publish": true
    },
    {
      "slug": "sangamon-independence-white-black",
      "title": "Sangamon Independence — White & Black",
      "excerpt": "A patriotic watch with an engraved Liberty Bell case back and \"All Men Are Created Equal\" inscription, plus genuine luminous hands.",
      "description": "The Independence watch honors the Declaration of Independence. The case back is engraved with a Liberty Bell and the inscription \"All Men Are Created Equal.\"\nThe 40mm polished 316L stainless steel case has a white/black dial with Swiss BGW9 Super-LumiNova lume (white in daylight, neon blue at night), behind a side-curved sapphire crystal with 5-layer anti-reflective coating. Comes with a black genuine leather band (quick-release) plus an extra band included. Powered by a Japanese Seiko VH31 quartz movement. Water resistant to 5 ATM.",
      "bestFor": "Buyers who want a patriotic-themed watch with genuine luminous hands rather than just a printed dial motif.",
      "pros": ["Swiss BGW9 Super-LumiNova lume for night visibility", "Extra band included", "Side-curved sapphire crystal with 5-layer anti-reflective coating"],
      "cons": ["Quartz movement, not automatic"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/new-pre-sales-independence-white",
      "specifications": [
        { "label": "Case", "value": "40mm, polished 316L stainless steel, 12mm thick" },
        { "label": "Movement", "value": "Japanese Seiko VH31 quartz" },
        { "label": "Water Resistance", "value": "5 ATM" },
        { "label": "Band", "value": "Black genuine leather (quick-release) + extra band, 22mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/new-pre-sales-independence-white", "price": 249.41, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Independence — White & Black",
      "metaDescription": "Liberty Bell tribute watch with Super-LumiNova lume, dual bands, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/products/independencewhitefront.png?v=1668723139"],
      "publish": true
    },
    {
      "slug": "sangamon-never-forgotten-right-hand",
      "title": "Sangamon Never Forgotten — Right Hand Design",
      "excerpt": "A POW/MIA tribute watch (limited to 50 per side) with the MIA/POW flag on the dial, available in a right-hand wearing design.",
      "description": "The Never Forgotten watch honors American POWs and MIAs. The dial features the MIA/POW flag, and the case back is engraved with three soldiers in a scene of mutual support. Locally assembled, limited to 50 pieces in this right-hand design.\nThe 39mm polished alloy case (8.1mm thick) has a black dial behind a mineral crystal, with black-and-white nylon straps (20mm, quick-release). Powered by a Citizen Super2035 Japanese quartz movement. Water resistant to 3 ATM (splash/rain resistant), with a 1-year international warranty.",
      "bestFor": "Buyers looking for an affordable POW/MIA tribute watch, available in right- or left-hand wearing designs.",
      "pros": ["Available in both right-hand and left-hand wearing designs", "Nylon quick-release straps", "Locally assembled in the US"],
      "cons": ["Alloy case and mineral crystal rather than stainless steel and sapphire, reflected in the lower price"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/available-never-forgotten-special-collection",
      "specifications": [
        { "label": "Case", "value": "39mm, polished alloy, 8.1mm thick" },
        { "label": "Movement", "value": "Citizen Super2035 Japanese quartz" },
        { "label": "Water Resistance", "value": "3 ATM (splash/rain resistant)" },
        { "label": "Band", "value": "Black/white nylon, 20mm, quick-release" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/available-never-forgotten-special-collection", "price": 93.18, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Never Forgotten — Right Hand Design",
      "metaDescription": "POW/MIA tribute watch, right-hand design, locally assembled, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/files/frontdialrighthand.jpg?v=1700357873"],
      "publish": true
    },
    {
      "slug": "sangamon-never-forgotten-left-hand",
      "title": "Sangamon Never Forgotten — Left Hand Design",
      "excerpt": "A POW/MIA tribute watch (limited to 50 per side) with the MIA/POW flag on the dial, available in a left-hand wearing design.",
      "description": "The Never Forgotten watch honors American POWs and MIAs. The dial features the MIA/POW flag, and the case back is engraved with three soldiers in a scene of mutual support. Locally assembled, limited to 50 pieces in this left-hand design.\nThe 39mm polished alloy case (8.1mm thick) has a black dial behind a mineral crystal, with black-and-white nylon straps (20mm, quick-release). Powered by a Citizen Super2035 Japanese quartz movement. Water resistant to 3 ATM (splash/rain resistant), with a 1-year international warranty.",
      "bestFor": "Buyers looking for an affordable POW/MIA tribute watch, available in right- or left-hand wearing designs.",
      "pros": ["Available in both right-hand and left-hand wearing designs", "Nylon quick-release straps", "Locally assembled in the US"],
      "cons": ["Alloy case and mineral crystal rather than stainless steel and sapphire, reflected in the lower price"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/available-never-forgotten-left-hand-design",
      "specifications": [
        { "label": "Case", "value": "39mm, polished alloy, 8.1mm thick" },
        { "label": "Movement", "value": "Citizen Super2035 Japanese quartz" },
        { "label": "Water Resistance", "value": "3 ATM (splash/rain resistant)" },
        { "label": "Band", "value": "Black/white nylon, 20mm, quick-release" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/available-never-forgotten-left-hand-design", "price": 112.00, "currency": "USD" }
      ],
      "metaTitle": "Sangamon Never Forgotten — Left Hand Design",
      "metaDescription": "POW/MIA tribute watch, left-hand design, locally assembled, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/files/frontdial1.jpg?v=1700360001"],
      "publish": true
    },
    {
      "slug": "sangamon-american-railroad-green",
      "title": "Sangamon American Railroad — Green",
      "excerpt": "A watch honoring midwestern railroad heritage, with a see-through exhibition case back over a 34-jewel micro-rotor automatic movement.",
      "description": "The American Railroad watch honors midwestern railroad heritage and Springfield, IL's watchmaking history. Sangamon states the watch is designed, hand-assembled, and tested by watchmakers in Springfield, IL.\nThe 39mm polished 316L stainless steel case (10.85mm thick) has a green dial behind a flat sapphire crystal with anti-reflective coating, and a see-through exhibition case back showing the movement. The genuine leather strap (19x16mm) carries the brand logo. Powered by a 34-jewel micro-rotor automatic movement. Water resistant to 3 ATM, with a 1-year international warranty.",
      "bestFor": "Buyers who want to see the movement — a see-through case back over a 34-jewel micro-rotor automatic.",
      "pros": ["34-jewel micro-rotor automatic movement", "See-through exhibition case back", "Hand-assembled and tested in Springfield, IL"],
      "cons": ["3 ATM water resistance is splash-resistant only, not suited for swimming"],
      "categorySlugs": ["watches"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "sangamon-watch-company",
      "officialUrl": "https://sangamonwatches.com/products/american-railroad-green-pre-0rder",
      "specifications": [
        { "label": "Case", "value": "39mm, polished 316L stainless steel, 10.85mm thick" },
        { "label": "Movement", "value": "34-jewel micro-rotor automatic" },
        { "label": "Water Resistance", "value": "3 ATM" },
        { "label": "Band", "value": "Genuine leather with logo, 19x16mm" }
      ],
      "retailerLinks": [
        { "retailerSlug": "sangamon-watches", "affiliateUrl": "https://sangamonwatches.com/products/american-railroad-green-pre-0rder", "price": 348.24, "currency": "USD" }
      ],
      "metaTitle": "Sangamon American Railroad — Green",
      "metaDescription": "Railroad heritage watch with see-through case back and micro-rotor automatic movement, by Sangamon.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0097/9835/2959/files/green_1.png?v=1740883971"],
      "publish": true
    },

    {
      "slug": "amvr-rgb-vr-stand-quest-3-3s-2",
      "title": "AMVR RGB VR Stand for Quest 3, 3S & 2",
      "bestPickLabel": "none",
      "excerpt": "A tilting VR headset stand with 5 RGB lighting modes and a built-in charging cable, compatible with Quest 2/3, Pico 4, and PSVR 2.",
      "description": "The AMVR RGB VR Stand doubles as a display stand and a charging station — it includes a built-in charging cable and offers 5 customizable RGB lighting modes. The tray tilts to hold the headset securely, and the base uses non-slip silicone with extra-thick support.\nAMVR states it works with Meta Quest 2/3, Pico 4, PSVR 2, and similar headsets. This is a third-party accessory, not authorized by Meta.",
      "bestFor": "Buyers who want a headset stand that also charges the device and adds ambient RGB lighting to a desk setup.",
      "pros": ["Built-in charging cable doubles as a display stand", "5 customizable RGB lighting modes", "Non-slip silicone base with tilting tray"],
      "cons": ["Third-party accessory, not Meta-authorized"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/atmosphere-light-charging-stand",
      "specifications": [
        { "label": "Compatibility", "value": "Quest 2, Quest 3, Pico 4, PSVR 2 (per manufacturer)" },
        { "label": "SKU", "value": "CCP1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/atmosphere-light-charging-stand", "price": 39.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR RGB VR Stand for Quest 3, 3S & 2",
      "metaDescription": "Tilting VR headset stand with 5 RGB lighting modes and built-in charging cable, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/13_a1ff421e-9ef4-4521-9f5a-62ce40eae2b4.png?v=1764227812"],
      "publish": true
    },
    {
      "slug": "amvr-vr-carrying-case-quest-3-2-pico-4",
      "title": "AMVR VR Carrying Case for Quest 3, 3S, 2 & PICO 4",
      "bestPickLabel": "none",
      "excerpt": "A PU leather carrying case with velvet interior lining, sized for a VR headset, controllers, and cables — includes a free lens protector.",
      "description": "This case is built from PU leather with reinforced edges and a velvet-lined interior meant to prevent scratches on the headset and controllers. AMVR states it fits Quest, Pico, and Apple Vision Pro headsets along with most third-party head straps (e.g., BoboVR S3 Pro, Elite Strap), plus a main compartment, mesh pockets for cables, and a drawstring pouch for controllers.\nA lens protector is included. The case weighs 539g and has a padded handle and adjustable shoulder strap.",
      "bestFor": "Buyers who want one case for a VR headset with an aftermarket head strap already attached, not just the stock unit.",
      "pros": ["Fits most third-party head straps, not just the stock strap", "Includes a free lens protector", "Padded handle plus adjustable shoulder strap"],
      "cons": ["No specific waterproof rating stated — described only as water-resistant"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/vr-carrying-case-for-quest-3-quest-2-pico-4",
      "specifications": [
        { "label": "Weight", "value": "539g" },
        { "label": "Material", "value": "PU leather exterior, velvet interior lining" },
        { "label": "SKU", "value": "TYCB3" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/vr-carrying-case-for-quest-3-quest-2-pico-4", "price": 39.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR VR Carrying Case for Quest 3, 3S, 2 & PICO 4",
      "metaDescription": "PU leather VR carrying case with velvet lining and free lens protector, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/TYCB3_oculus_case_compatible_meta_quest_1.png?v=1764227832"],
      "publish": true
    },
    {
      "slug": "amvr-link-cable-separate-charging-port",
      "title": "AMVR VR Link Cable with Separate Charging Port",
      "bestPickLabel": "none",
      "excerpt": "A USB-C VR link cable with a separate charging port and USB 3.2 Gen1 data speeds, so the headset can charge during PC VR play.",
      "description": "This link cable splits data and power into separate channels — a USB 3.2 Gen1 connection (up to 5Gbps) for PC VR data, and a dedicated charging port that works with an 18W+ adapter (not included) so the headset charges while in use. A built-in chip AMVR calls SmartProtect 3.0 regulates charging voltage/current to keep the battery in a 65-78% range during long sessions.\nThe cable uses an L-shaped USB-C connector, aluminum alloy housing, and a tin-plated copper core, rated by AMVR for 3,000+ bend cycles. Velcro ties are included for cable management.",
      "bestFor": "PC VR players who want to keep the headset charging during long play sessions instead of it draining over a standard link cable.",
      "pros": ["Separate charging port keeps the headset topped up during play", "USB 3.2 Gen1 data speeds (up to 5Gbps)", "L-shaped connector rated for 3,000+ bend cycles"],
      "cons": ["Charging adapter not included — requires a separate 18W+ USB-C charger"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/vr-charging-cable",
      "specifications": [
        { "label": "Data speed", "value": "Up to 5Gbps (USB 3.2 Gen1)" },
        { "label": "SKU", "value": "LC5" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/vr-charging-cable", "price": 25.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR VR Link Cable with Separate Charging Port",
      "metaDescription": "USB-C VR link cable with a separate charging port and USB 3.2 Gen1 speeds, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/LC5_1.jpg?v=1764227816"],
      "publish": true
    },
    {
      "slug": "amvr-pu-leather-face-cover-quest-2",
      "title": "AMVR Soft PU Leather Face Cover for Quest 2",
      "bestPickLabel": "none",
      "excerpt": "A PU leather and sponge foam face pad for Quest 2 with 8mm padding, a light-blocking nose pad, and an included lens protector.",
      "description": "This face cover replaces the stock Quest 2 facial interface with an 8mm-thick PU leather and sponge foam pad, designed to sit closer to the lenses for a wider field of view. AMVR built in airflow channels to reduce lens fogging, plus a light-blocking nose pad.\nA lens protector is included for extra device protection. This is a third-party accessory, not authorized by Meta.",
      "bestFor": "Quest 2 owners who want a sweat-resistant replacement face pad with a wider field of view than the stock foam interface.",
      "pros": ["8mm padding for a wider field of view", "Includes a light-blocking nose pad and lens protector", "Built-in airflow channels to reduce fogging"],
      "cons": ["Third-party accessory, not Meta-authorized"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-soft-pu-leather-face-cover-for-quest-2",
      "specifications": [
        { "label": "Material", "value": "PU leather, sponge foam" },
        { "label": "Padding thickness", "value": "8mm" },
        { "label": "SKU", "value": "Q2FC" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-soft-pu-leather-face-cover-for-quest-2", "price": 19.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Soft PU Leather Face Cover for Quest 2",
      "metaDescription": "PU leather and sponge foam replacement face pad for Quest 2 with 8mm padding, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/Q2FC.jpg?v=1764227812"],
      "publish": true
    },
    {
      "slug": "amvr-cd2-magnetic-charging-dock-quest-3-3s",
      "title": "AMVR CD2 3-in-1 Magnetic Charging Dock for Quest 3/3S",
      "bestPickLabel": "none",
      "excerpt": "A 3-in-1 magnetic charging dock for Quest 3/3S that charges the headset and controllers via a USB 3.0 magnetic connector, no cable plugging required.",
      "description": "The CD2 dock uses a USB 3.0 magnetic 3-in-1 connector to charge the Quest 3/3S headset and controllers without plugging or unplugging a cable each time. AMVR states a Quest 3 headset fully charges in about 2 hours, and a Quest 3S in about 1 hour 40 minutes.\nIt's designed to work with the halo strap, elite strap, original strap, and various facial interfaces. The base uses a reusable nano-gel material for stability.",
      "bestFor": "Quest 3/3S owners who want one-handed magnetic charging instead of repeatedly plugging in a cable, especially with a battery head strap.",
      "pros": ["One-handed magnetic charging, no cable plugging", "USB 3.0 connector for faster charging", "Compatible with halo, elite, and original straps"],
      "cons": ["Higher price than AMVR's other charging docks"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-fast-magnetic-charging-dock-for-quest-3-3s",
      "specifications": [
        { "label": "Connector", "value": "USB 3.0 magnetic 3-in-1" },
        { "label": "Quest 3 charge time", "value": "~2 hours (per manufacturer)" },
        { "label": "SKU", "value": "CD2-WHI-01" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-fast-magnetic-charging-dock-for-quest-3-3s", "price": 66.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR CD2 3-in-1 Magnetic Charging Dock for Quest 3/3S",
      "metaDescription": "3-in-1 magnetic charging dock for Quest 3/3S headset and controllers, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/Magnetic_Fast_Charging_Dock_for_Quest_3_3S.png?v=1759049671"],
      "publish": true
    },
    {
      "slug": "amvr-cd1-dual-slot-magnetic-charging-dock",
      "title": "AMVR CD1 Dual-Slot Magnetic Charging Dock",
      "bestPickLabel": "none",
      "excerpt": "A dual-slot magnetic charging dock that charges two battery packs at once with 24W Pogo Pin connectors and a digital power/status display.",
      "description": "The CD1 dock charges two battery packs simultaneously, automatically prioritizing whichever pack has the higher charge first. AMVR rates the 24W Pogo Pin magnetic connectors at 80% charge in about 75 minutes and 100% in about 99 minutes, and the dock shows real-time power output and battery percentage for both packs on a built-in digital display.\nThe base uses two nano-silica pads AMVR describes as washable and reusable for grip on a desk or table.",
      "bestFor": "Buyers who cycle through two AMVR battery packs and want to charge both at once with visible status readouts.",
      "pros": ["Charges two battery packs simultaneously with automatic priority", "Real-time digital power and battery percentage display", "Washable, reusable anti-slip base pads"],
      "cons": ["Only useful if you own two compatible AMVR battery packs"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/cd1-dual-slot-magnetic-charging-dock",
      "specifications": [
        { "label": "Charging", "value": "24W Pogo Pin magnetic, dual-slot" },
        { "label": "Charge time", "value": "80% in ~75 min, 100% in ~99 min (per manufacturer)" },
        { "label": "SKU", "value": "CD1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/cd1-dual-slot-magnetic-charging-dock", "price": 29.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR CD1 Dual-Slot Magnetic Charging Dock",
      "metaDescription": "Dual-slot magnetic charging dock with 24W Pogo Pin connectors and digital display, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/MagneticChargingDock_ChargeTwoPowerforQuestHeadBatteryStraps_1_41691429-4e6f-4e7e-a878-e701a171ba25.jpg?v=1769403548"],
      "publish": true
    },
    {
      "slug": "amvr-cd3-charging-dock-ray-ban-meta",
      "title": "AMVR CD3 Charging Dock for Ray-Ban Meta",
      "bestPickLabel": "none",
      "excerpt": "A 2-in-1 magnetic charging dock for Ray-Ban Meta glasses and their charging case, with an LED charge-status indicator.",
      "description": "The CD3 dock charges both Ray-Ban Meta glasses and their charging case magnetically, without a tangle of cables. An LED indicator on the base glows green when fully charged and red while charging, and AMVR lists overload, overcharge, over-current, and short-circuit protection built into the dock.\nThis is a third-party accessory, not authorized by Ray-Ban or Meta.",
      "bestFor": "Ray-Ban Meta owners who want a single dock for both the glasses and their charging case instead of separate cables.",
      "pros": ["Charges both the glasses and the charging case", "LED indicator shows real-time charge status", "Multiple built-in safety protections"],
      "cons": ["Only compatible with Ray-Ban Meta glasses/case — not other headsets"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/cd3-charging-dock-for-ray-ban-meta",
      "specifications": [
        { "label": "Compatibility", "value": "Ray-Ban Meta glasses and charging case" },
        { "label": "SKU", "value": "CD3" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/cd3-charging-dock-for-ray-ban-meta", "price": 45.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR CD3 Charging Dock for Ray-Ban Meta",
      "metaDescription": "2-in-1 magnetic charging dock for Ray-Ban Meta glasses and charging case, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/CD3Charging_Dock_for_Ray-Ban_Meta_Charging_Case_and_Ray-Ban_Meta_Glasses.jpg?v=1761228552"],
      "publish": true
    },
    {
      "slug": "amvr-bs1-battery-head-strap-quest-3",
      "title": "AMVR BS1 Battery Head Strap for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "A ventilated battery head strap for Quest 3 that includes one hot-swappable BP1 battery pack and a built-in LED charge indicator.",
      "description": "The BS1 strap pairs an air-cooling forehead pad (ice silk fabric) with a hot-swappable battery pack, so the headset can keep running power without stopping to recharge. AMVR rates the included BP1 pack at over 20W output and 8000mAh capacity, with a built-in LED indicator for remaining charge, and states it has passed a 1.5-meter drop test.\nThe strap has a multi-point adjustable design meant to fit both adults and children, with a leather cushion on the upper rear pad and a silicone lower section for ventilation.",
      "bestFor": "Quest 3 owners who want extended play time without stopping to recharge, and don't mind the added weight and cost of a battery strap.",
      "pros": ["Includes one 8000mAh hot-swappable battery pack", "Built-in LED charge indicator", "Passed a 1.5-meter drop test (per manufacturer)"],
      "cons": ["Highest-priced head strap in AMVR's lineup"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/bs1-battery-strap-for-quest-3-3s",
      "specifications": [
        { "label": "Included battery", "value": "BP1, 8000mAh" },
        { "label": "Output", "value": "20W+" },
        { "label": "SKU", "value": "BS1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/bs1-battery-strap-for-quest-3-3s", "price": 75.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR BS1 Battery Head Strap for Quest 3",
      "metaDescription": "Ventilated battery head strap for Quest 3 with an included 8000mAh hot-swap battery, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/bs1_1.png?v=1770360633"],
      "publish": true
    },
    {
      "slug": "amvr-bp1-battery-pack-for-bs1",
      "title": "AMVR BP1 8000mAh Battery Pack for BS1",
      "bestPickLabel": "none",
      "excerpt": "A hot-swappable 8000mAh magnetic battery pack for the BS1 strap, with 20W fast charging and USB-C compatibility for other devices.",
      "description": "The BP1 is a magnetic, hot-swappable battery pack built for the BS1 battery head strap, letting you switch packs with one hand without removing the headset. AMVR rates it at 8000mAh (28.8Wh) capacity with 20W fast charging, reaching about 80% in roughly 1 hour 15 minutes.\nAMVR lists over-charge, over-voltage, over-power, and over-temperature protection built into the pack. Beyond the BS1 strap, it's also usable as a general USB-C power bank for phones, tablets, or earbuds.",
      "bestFor": "BS1 strap owners who want a spare or replacement battery pack, or anyone wanting a compact USB-C power bank.",
      "pros": ["Hot-swappable, one-hand battery changes", "20W fast charging (~80% in 75 minutes)", "Doubles as a general USB-C power bank"],
      "cons": ["Designed around the BS1 strap — general power bank use is a secondary feature"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/battery-pack-for-bs1",
      "specifications": [
        { "label": "Capacity", "value": "8000mAh (28.8Wh)" },
        { "label": "Charging", "value": "20W fast charging" },
        { "label": "SKU", "value": "BP1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/battery-pack-for-bs1", "price": 29.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR BP1 8000mAh Battery Pack for BS1",
      "metaDescription": "Hot-swappable 8000mAh magnetic battery pack for AMVR's BS1 strap, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/BP1metaquest3batterypack_8.jpg?v=1773280875"],
      "publish": true
    },
    {
      "slug": "amvr-elite-head-strap-quest-3-3s",
      "title": "AMVR Elite Head Strap for Quest 3 & 3S",
      "bestPickLabel": "none",
      "excerpt": "A lightweight (200g) leather-padded head strap for Quest 3/3S with a rear adjustment knob and reinforced side straps.",
      "description": "This head strap uses a leather top strap and leather rear padding to spread weight across the face and back of the head, rather than resting it all on the front. AMVR states it weighs 200g and adjusts via a gear knob on the back, making it easy to use for glasses wearers.\nThe side straps are built from a high-strength polymer AMVR describes as tested for durability.",
      "bestFor": "Quest 3/3S owners who want a lighter, more balanced strap than the stock elastic strap without the added cost of a battery strap.",
      "pros": ["Lightweight at 200g", "Rear gear-knob adjustment, easy for glasses wearers", "Leather padding on top strap and rear pad"],
      "cons": ["No battery included — for extended power, see AMVR's BS1 strap"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/quest-3-head-strap",
      "specifications": [
        { "label": "Weight", "value": "200g" },
        { "label": "Adjustment", "value": "Rear gear knob" },
        { "label": "SKU", "value": "Q3HW6" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/quest-3-head-strap", "price": 26.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Elite Head Strap for Quest 3 & 3S",
      "metaDescription": "Lightweight 200g leather-padded head strap for Quest 3/3S with rear knob adjustment, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/Q3HW6_oculus_head_strap_1.png?v=1764227828"],
      "publish": true
    },
    {
      "slug": "amvr-halo-head-strap-pico-4-ultra",
      "title": "AMVR Halo Head Strap for PICO 4 Ultra & PICO 4",
      "bestPickLabel": "none",
      "excerpt": "A flip-open halo-style head strap for PICO 4 Ultra and PICO 4 with a PU leather pad and adjustable eye-to-lens positioning.",
      "description": "This halo strap uses a flip-open design to improve airflow and let you remove the headset quickly mid-session. AMVR built it with a soft PU leather pad to reduce facial pressure, and the halo shape is meant to work better with center-parted hairstyles than a top-strap design.\nThe strap also lets you adjust eye-to-lens distance for field of view. Note: the back-pad attachment differs between models — this SKU (4SHW1) is for PICO 4 Ultra; a separate SKU (N4HW1) covers the original PICO 4.",
      "bestFor": "PICO 4 Ultra or PICO 4 owners who want a halo-style strap instead of a top-strap design, particularly if a top strap doesn't suit their hairstyle.",
      "pros": ["Flip-open design for quick removal and airflow", "Halo shape avoids top-of-head hair styling issues", "Adjustable eye-to-lens positioning"],
      "cons": ["Back-pad attachment differs by PICO model — confirm the correct SKU before buying"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/halo-head-strap-for-pico-4-ultra",
      "specifications": [
        { "label": "Compatibility", "value": "PICO 4 Ultra (this SKU); separate SKU for PICO 4" },
        { "label": "SKU", "value": "4SHW1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/halo-head-strap-for-pico-4-ultra", "price": 23.49, "currency": "USD" }
      ],
      "metaTitle": "AMVR Halo Head Strap for PICO 4 Ultra & PICO 4",
      "metaDescription": "Flip-open halo-style head strap for PICO 4 Ultra and PICO 4, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/8_bc6819aa-42e1-48df-865e-ec4b30a0e5bf.png?v=1764227844"],
      "publish": true
    },
    {
      "slug": "amvr-q3fc1-facial-interface-quest-3",
      "title": "AMVR Q3FC1 Facial Interface for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "A Quest 3 facial interface with 3 depth settings and two included face pads — a PU leather pad and an ice silk cotton pad.",
      "description": "This facial interface offers three depth positions (High/Medium/Low) to adjust eye-to-lens distance, aimed at glasses wearers who need extra clearance. Ventilation grills on the top, bottom, and sides are meant to reduce lens fogging.\nTwo face pads are included: a PU leather pad (sweat-resistant, 0.63\" thick) and an ice silk cotton pad (moisture-wicking, also 0.63\" thick) for more breathable use during active play.",
      "bestFor": "Quest 3 owners who wear glasses and want adjustable eye relief, plus a choice between a leather and a breathable fabric face pad.",
      "pros": ["3 depth settings for glasses wearers", "Includes both a PU leather and an ice silk cotton pad", "Ventilation grills on 3 sides to reduce fogging"],
      "cons": ["Base model in AMVR's facial interface lineup — fewer features than the upgraded Q3FC3"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-quest-3-facial-interface",
      "specifications": [
        { "label": "Depth settings", "value": "3 (High/Medium/Low)" },
        { "label": "Included pads", "value": "PU leather, ice silk cotton" },
        { "label": "SKU", "value": "Q3FC1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-quest-3-facial-interface", "price": 19.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Q3FC1 Facial Interface for Quest 3",
      "metaDescription": "Quest 3 facial interface with 3 depth settings and two included face pads, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/Facial-Interface-for-quest3_1-1_6881d0e1-9d3d-47ef-b38e-110af2eb36d9.png?v=1764227828"],
      "publish": true
    },
    {
      "slug": "amvr-q3fc3-upgraded-facial-interface-quest-3",
      "title": "AMVR Q3FC3 Upgraded Facial Interface for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "An upgraded Quest 3 facial interface with a knob-adjustable depth dial, two cooling-gel face pads, and Y-shaped ventilation.",
      "description": "The Q3FC3 uses a knob system for depth adjustment (3 levels) instead of swappable spacers, and includes two face pads with built-in cooling gel: a PU leather pad and an ice silk cotton pad, both 0.63\" thick. Y-shaped vents on the top and bottom are meant to cut down on lens fogging.\nAMVR includes a light-blocking nose guard and backs the interface with a 12-month warranty.",
      "bestFor": "Quest 3 owners who want a more adjustable, better-ventilated facial interface than AMVR's base Q3FC1 model.",
      "pros": ["Knob-adjustable depth dial (3 levels)", "Two cooling-gel face pads included", "12-month manufacturer warranty"],
      "cons": ["Costs about $16 more than AMVR's base Q3FC1 facial interface"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-quest-3-facial-interface-q3fc3",
      "specifications": [
        { "label": "Depth adjustment", "value": "Knob dial, 3 levels" },
        { "label": "Warranty", "value": "12 months" },
        { "label": "SKU", "value": "Q3FC3" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-quest-3-facial-interface-q3fc3", "price": 35.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Q3FC3 Upgraded Facial Interface for Quest 3",
      "metaDescription": "Upgraded Quest 3 facial interface with knob-adjustable depth and cooling-gel pads, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/19_1.png?v=1764227836"],
      "publish": true
    },
    {
      "slug": "amvr-fc4m-magnetic-air-facial-interface-quest-3",
      "title": "AMVR FC4M Magnetic AIR Facial Interface for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "A magnetic, dial-adjustable Quest 3 facial interface built for halo-style straps, with cooling ice silk fabric and anti-light nose guard.",
      "description": "The FC4M attaches magnetically for one-second swaps, and uses a dial to adjust eye relief for glasses wearers. AMVR built it specifically to pair with halo-style head straps for even weight distribution, with ice silk fabric and ventilation channels to reduce lens fogging.\nA flexible silicone nose pad blocks external light. AMVR notes this interface is not compatible with Quest 3S.",
      "bestFor": "Quest 3 owners (with a halo-style strap) who want the fastest on/off facial interface swap in AMVR's lineup.",
      "pros": ["Magnetic 1-second attach/detach", "Dial-adjustable eye relief for glasses wearers", "Designed specifically for halo-strap weight distribution"],
      "cons": ["Not compatible with Quest 3S", "Highest-priced facial interface in AMVR's lineup"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/fc4m-magnetic-air-facial-interface-for-quest-3",
      "specifications": [
        { "label": "Attachment", "value": "Magnetic" },
        { "label": "Compatibility", "value": "Quest 3 only — not Quest 3S" },
        { "label": "SKU", "value": "FC4M" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/fc4m-magnetic-air-facial-interface-for-quest-3", "price": 45.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR FC4M Magnetic AIR Facial Interface for Quest 3",
      "metaDescription": "Magnetic dial-adjustable facial interface for Quest 3 with halo-strap compatibility, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/FC4MMagneticAIRFacialInterfaceforQuest3_1.jpg?v=1779186493"],
      "publish": true
    },
    {
      "slug": "amvr-pu-leather-face-cover-pico-4",
      "title": "AMVR PU Leather Face Cover for PICO 4 Series",
      "bestPickLabel": "none",
      "excerpt": "A 12mm-thick PU leather and sponge face cover for the PICO 4, PICO 4 Pro, PICO 4 Ultra, and PICO 4 Enterprise.",
      "description": "This face cover uses 12mm-thick leather and sponge padding, with an anti-leakage design meant to improve field of view and block outside light. Ventilation channels aim to reduce fogging during use.\nAMVR states it's compatible with PICO 4, PICO 4 Pro, PICO 4 Ultra, and PICO 4 Enterprise. This is a third-party accessory, not authorized by PICO.",
      "bestFor": "PICO 4-series owners who want a thicker, more light-blocking face cover than the stock foam interface.",
      "pros": ["12mm padding for improved light-blocking", "Covers PICO 4, Pro, Ultra, and Enterprise models", "Ventilation design to reduce fogging"],
      "cons": ["Third-party accessory, not PICO-authorized"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/pico4-face-cover",
      "specifications": [
        { "label": "Padding thickness", "value": "12mm" },
        { "label": "Compatibility", "value": "PICO 4, PICO 4 Pro, PICO 4 Ultra, PICO 4 Enterprise" },
        { "label": "SKU", "value": "N4FC1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/pico4-face-cover", "price": 39.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR PU Leather Face Cover for PICO 4 Series",
      "metaDescription": "12mm PU leather face cover for the PICO 4 series headsets, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/24.png?v=1764227820"],
      "publish": true
    },
    {
      "slug": "amvr-silicone-controller-grips-quest-3",
      "title": "AMVR Silicone Controller Grips for Quest 3 & 3S",
      "bestPickLabel": "none",
      "excerpt": "Anti-slip silicone controller grip covers for Quest 3/3S with a knuckle strap and a battery-access hatch for quick swaps.",
      "description": "These grips add a silicone texture over the Quest 3/3S controllers for anti-slip handling, plus a knuckle strap to keep the controller secured to your hand during active play. A battery-access hatch lets you swap batteries without removing the whole cover.\nAMVR notes the plastic battery pull tab should sit below the battery, and that this design isn't compatible with the Meta Charging Dock. The Velcro strap is adjustable for small and medium hand sizes.",
      "bestFor": "Quest 3/3S players in active games (boxing, fitness) who want a secure knuckle strap plus everyday scratch protection.",
      "pros": ["Knuckle strap keeps controllers secured during vigorous play", "Battery-access hatch — no need to remove the whole cover", "Adjustable Velcro fits small and medium hands"],
      "cons": ["Not compatible with the official Meta Charging Dock"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-controller-grips-for-quest-3",
      "specifications": [
        { "label": "Attachment", "value": "Knuckle strap, adjustable Velcro" },
        { "label": "SKU", "value": "Q3HS1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-controller-grips-for-quest-3", "price": 24.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Silicone Controller Grips for Quest 3 & 3S",
      "metaDescription": "Anti-slip silicone controller grip covers with knuckle strap for Quest 3/3S, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/AMVR-Silicone-Controller-Grips-Cover-for-Quest-3-AMVRSHOP.jpg?v=1764227824"],
      "publish": true
    },
    {
      "slug": "amvr-controller-grips-pico-4-ultra",
      "title": "AMVR Controller Grips Cover for PICO 4 Ultra",
      "bestPickLabel": "none",
      "excerpt": "A transparent silicone and leather-strap controller grip cover for PICO 4 Ultra, adjustable via Velcro.",
      "description": "This cover uses a transparent silicone shell with a leather strap to protect the PICO 4 Ultra controllers while letting your hands relax during play. AMVR designed it to avoid interfering with the controller's tracking signal, and the Velcro strap adjusts to different hand sizes.\nAMVR states the material has been through sweat, high-temperature, and durability testing. This is a third-party accessory, not authorized by PICO.",
      "bestFor": "PICO 4 Ultra owners who want scratch protection without hiding the controller's original look under an opaque cover.",
      "pros": ["Transparent design keeps the controller's original look visible", "Velcro adjustment fits different hand sizes", "Designed to avoid tracking signal interference"],
      "cons": ["Third-party accessory, not PICO-authorized"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/knuckle-strap-for-pico-4-ultra",
      "specifications": [
        { "label": "Material", "value": "Silicone, leather strap" },
        { "label": "Compatibility", "value": "PICO 4 Ultra" },
        { "label": "SKU", "value": "4SHS1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/knuckle-strap-for-pico-4-ultra", "price": 17.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Controller Grips Cover for PICO 4 Ultra",
      "metaDescription": "Transparent silicone controller grip cover for PICO 4 Ultra, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/20241017-142349_1.jpg?v=1764227844"],
      "publish": true
    },
    {
      "slug": "amvr-touch-controller-grip-hp-reverb-g2",
      "title": "AMVR Touch Controller Grip for HP Reverb G2 V1/V2",
      "bestPickLabel": "none",
      "excerpt": "A protective grip cover for HP Reverb G2 V1/V2 Touch controllers.",
      "description": "This grip cover is built specifically for the HP Reverb G2 V1 and V2 Touch controllers, one of the few AMVR accessories made for a non-Meta, non-PICO headset. AMVR does not publish extended feature copy for this listing beyond fitment.\nAs with AMVR's other grip covers, this is a third-party accessory, not authorized by HP.",
      "bestFor": "HP Reverb G2 owners looking for scratch protection on their Touch controllers — one of the few AMVR accessories made for this headset.",
      "pros": ["One of AMVR's few products for a non-Quest/PICO headset", "Purpose-fit for HP Reverb G2 V1 and V2 controllers"],
      "cons": ["Manufacturer did not publish detailed feature copy for this listing"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/amvr-touch-controller-grip-for-hp-reverb-g2-v1-v2",
      "specifications": [
        { "label": "Compatibility", "value": "HP Reverb G2 V1/V2 Touch controllers" },
        { "label": "SKU", "value": "G2HP1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/amvr-touch-controller-grip-for-hp-reverb-g2-v1-v2", "price": 19.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Touch Controller Grip for HP Reverb G2 V1/V2",
      "metaDescription": "Protective controller grip cover for HP Reverb G2 V1/V2 Touch controllers, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/G2HP1.jpg?v=1764227832"],
      "publish": true
    },
    {
      "slug": "amvr-ga1-force-feedback-golf-club-quest-3",
      "title": "AMVR GA1 Force Feedback Golf Club for Quest 3/3S",
      "bestPickLabel": "none",
      "excerpt": "A force-feedback golf club attachment for Quest 3/3S with adjustable weights, designed to simulate real swing weight and balance.",
      "description": "The GA1 attaches to a Quest 3/3S controller and is built to simulate the weight and balance of a real golf club during VR golf games. AMVR includes adjustable weights so you can fine-tune the swing feel, and the grip is designed to stay secure through a full swing.\nAMVR markets this as compatible with VR golf titles and designed for both men's and ladies' play styles.",
      "bestFor": "VR golf players who want a club-shaped, weighted attachment rather than swinging with a bare controller.",
      "pros": ["Adjustable weights to fine-tune swing feel", "Ergonomic grip designed to stay secure through a swing", "Designed for both men's and ladies' play styles"],
      "cons": ["Single-purpose accessory — only useful for golf titles"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/ga1-best-golf-club",
      "specifications": [
        { "label": "Compatibility", "value": "Quest 3, Quest 3S controllers" },
        { "label": "Feature", "value": "Adjustable weights" },
        { "label": "SKU", "value": "GA1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/ga1-best-golf-club", "price": 89.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR GA1 Force Feedback Golf Club for Quest 3/3S",
      "metaDescription": "Force-feedback VR golf club attachment with adjustable weights for Quest 3/3S, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/GA1_Force_Feedback_Men_Ladies_Golf_Clubs_1.png?v=1761298314"],
      "publish": true
    },
    {
      "slug": "amvr-table-tennis-adapter-quest-3",
      "title": "AMVR Table Tennis Adapter for Quest 3 & 3S",
      "bestPickLabel": "none",
      "excerpt": "A table-tennis paddle attachment for the Quest 3/3S right controller, with shakehand and penhold grip options.",
      "description": "This adapter turns the Quest 3/3S right controller into a table-tennis paddle shape, with a choice of shakehand or penhold grip styles. AMVR designed it with realistic weight for gameplay feel.\nAMVR states this adapter only works with the right controller and is meant for right-handed use.",
      "bestFor": "Right-handed VR table tennis players who want a paddle-shaped grip instead of a bare controller.",
      "pros": ["Choice of shakehand or penhold grip styles", "Weighted for a more realistic paddle feel"],
      "cons": ["Right controller only — not usable left-handed or on the left controller"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/table-tennis-adaptor-for-meta-quest-3",
      "specifications": [
        { "label": "Grip options", "value": "Shakehand, penhold" },
        { "label": "Compatibility", "value": "Right controller only" },
        { "label": "SKU", "value": "Q3TP1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/table-tennis-adaptor-for-meta-quest-3", "price": 25.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Table Tennis Adapter for Quest 3 & 3S",
      "metaDescription": "Table tennis paddle attachment for Quest 3/3S right controller, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/AMVR-Table-Tennis-Adapter-Meta-Quest-3-AMVRSHOP-58252452.jpg?v=1764227828"],
      "publish": true
    },
    {
      "slug": "amvr-pistol-grip-controller-accessory-quest-3",
      "title": "AMVR Pistol Grip Controller Accessory for Quest 3 & 3S",
      "bestPickLabel": "none",
      "excerpt": "A pistol-shaped grip attachment for Quest 3/3S controllers, built from ABS with a silk-screened texture for FPS games.",
      "description": "This attachment reshapes a Quest 3/3S controller into a pistol grip for first-person-shooter VR titles. AMVR built it from ABS plastic with a silk-screened texture (rather than a 3D-printed finish) and balanced the weight to keep aim steady.\nAMVR lists compatibility with FPS titles such as Population: ONE, Contractors, and Superhot VR.",
      "bestFor": "FPS VR players who want a pistol-shaped grip for aim and immersion in shooter titles.",
      "pros": ["ABS construction with a silk-screened texture, not 3D-printed", "Weight-balanced for steadier aim", "Named compatibility with specific FPS titles (Population: ONE, Contractors, Superhot VR)"],
      "cons": ["Single-purpose accessory — only useful for FPS-style games"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/gun-controller-accessories-for-quest-3",
      "specifications": [
        { "label": "Material", "value": "ABS plastic" },
        { "label": "Named game compatibility", "value": "Population: ONE, Contractors, Superhot VR" },
        { "label": "SKU", "value": "Q3QS1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/gun-controller-accessories-for-quest-3", "price": 34.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Pistol Grip Controller Accessory for Quest 3 & 3S",
      "metaDescription": "Pistol-shaped controller grip attachment for Quest 3/3S FPS games, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/quest3-pistol-1.jpg?v=1764227836"],
      "publish": true
    },
    {
      "slug": "amvr-ray-ban-meta-prescription-lens-inserts",
      "title": "AMVR Prescription Lens Inserts for Ray-Ban Meta Gen 1 & 2",
      "bestPickLabel": "none",
      "excerpt": "Prescription lens inserts for Ray-Ban Meta Gen 1 & 2 glasses, with 98% blue light blocking and a multi-layer protective coating.",
      "description": "These inserts are molded to fit Ray-Ban Meta Gen 1 and Gen 2 frames (Wayfarer-M, Wayfarer-L, Headliner, Skyler), using aspheric lens technology AMVR says reduces distortion compared to standard spherical lenses. AMVR rates blue light blocking at 98% with 95.6% light transmission.\nA multi-layer coating is water-, fog-, and stain-resistant, and a hardened polarized layer is meant to reduce glare. Installation requires no tools.",
      "bestFor": "Ray-Ban Meta Gen 1 or Gen 2 owners who wear prescription glasses and want to use the smart glasses without stacking them over their own eyewear.",
      "pros": ["Molded to fit specific Ray-Ban Meta Gen 1 & 2 frame models", "98% blue light blocking (per manufacturer)", "No-tool installation"],
      "cons": ["Fitment is model-specific — confirm your exact Ray-Ban Meta frame before ordering"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/ray-ban-meta-prescription-lens-inserts",
      "specifications": [
        { "label": "Blue light blocking", "value": "98% (per manufacturer)" },
        { "label": "Light transmission", "value": "95.6%" },
        { "label": "Compatibility", "value": "Ray-Ban Meta Wayfarer-M, Wayfarer-L, Headliner, Skyler (Gen 1 & 2)" },
        { "label": "SKU", "value": "NL1" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/ray-ban-meta-prescription-lens-inserts", "price": 49.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Prescription Lens Inserts for Ray-Ban Meta Gen 1 & 2",
      "metaDescription": "Prescription lens inserts for Ray-Ban Meta Gen 1 & 2 with 98% blue light blocking, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/NL1_1.jpg?v=1764227824"],
      "publish": true
    },
    {
      "slug": "amvr-vr-prescription-lenses-quest-3",
      "title": "AMVR VR Prescription Lenses for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "Magnetic prescription lens inserts for Quest 3 in high-refractive-index options, with blue light and anti-reflective coatings.",
      "description": "These magnetic inserts snap into injection-molded frames for Quest 3 and are offered in high-refractive-index options (this SKU: 1.56) for a thinner, lighter lens than standard index lenses. AMVR includes blue light and anti-reflective coatings aimed at reducing eye fatigue during extended sessions.\nA hard case, cleaning cloth, and lens cover are included.",
      "bestFor": "Quest 3 owners who wear prescription glasses and want to skip wearing glasses under the headset.",
      "pros": ["Magnetic install into injection-molded frames", "Blue light and anti-reflective coatings included", "Ships with a hard case, cleaning cloth, and lens cover"],
      "cons": ["Prescription lenses are customized to order — confirm your prescription before ordering"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/vr-prescription-lenses-for-meta-quest-3",
      "specifications": [
        { "label": "Lens index", "value": "1.56 (this SKU; other indexes available)" },
        { "label": "Attachment", "value": "Magnetic" },
        { "label": "SKU", "value": "Q3GP2-1.56" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/vr-prescription-lenses-for-meta-quest-3", "price": 59.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR VR Prescription Lenses for Quest 3",
      "metaDescription": "Magnetic prescription lens inserts for Quest 3 with blue light and anti-reflective coatings, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/22_1_1f8b87ef-a379-4015-8f57-bd9e5e3a828d.png?v=1764227836"],
      "publish": true
    },
    {
      "slug": "amvr-mg1-replacement-lenses-ray-ban-meta-wayfarer",
      "title": "AMVR MG1 Replacement Lenses for Ray-Ban Meta Wayfarer",
      "bestPickLabel": "none",
      "excerpt": "Replacement transition photochromic lenses for Ray-Ban Meta Wayfarer RW4006/RW4012 frames, with 100% UV protection.",
      "description": "This is a 2-pack of transition photochromic replacement lenses sized for the Ray-Ban Meta Wayfarer RW4006 (Gen 1) and RW4012 (Gen 2), 50mm frame. AMVR rates them for 100% UV400 protection and installation without tools.\nAMVR backs the lenses with a 12-month warranty from purchase.",
      "bestFor": "Ray-Ban Meta Wayfarer owners who want photochromic (light-adaptive) replacement lenses rather than fixed prescription inserts.",
      "pros": ["Transition photochromic — adjusts tint to light conditions", "100% UV400 protection", "12-month manufacturer warranty"],
      "cons": ["Fits only the 50mm RW4006/RW4012 Wayfarer frame — not other Ray-Ban Meta styles"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/mg1-replacement-lenses-compatible-with-ray-ban-meta-wayfarer",
      "specifications": [
        { "label": "Lens type", "value": "Transition photochromic" },
        { "label": "UV protection", "value": "100% UV400" },
        { "label": "Compatibility", "value": "Ray-Ban Meta Wayfarer RW4006 (Gen1) / RW4012 (Gen2), 50mm" },
        { "label": "SKU", "value": "MG1-C-4006" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/mg1-replacement-lenses-compatible-with-ray-ban-meta-wayfarer", "price": 15.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR MG1 Replacement Lenses for Ray-Ban Meta Wayfarer",
      "metaDescription": "Transition photochromic replacement lenses for Ray-Ban Meta Wayfarer RW4006/RW4012, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/MG1_1.jpg?v=1772700454"],
      "publish": true
    },
    {
      "slug": "amvr-noise-isolating-earphones-quest-3",
      "title": "AMVR Noise-Isolating In-Ear Headphones for Quest 3",
      "bestPickLabel": "none",
      "excerpt": "Wired in-ear headphones for Quest 3 with 10mm drivers, 3 sizes of replacement ear tips, and dual silicone strap holders.",
      "description": "These earbuds use 10mm neodymium drivers and are built with a custom cable length (9.3\" left / 18.3\" right channel) to route around the Quest 3 head strap. AMVR includes 3 sizes (S/M/L) of silicone ear tips for fit, plus 2 silicone strap holders to keep the cable in place hands-free.\nThe housing is aluminum alloy and TPE, and the set ships with a storage case.",
      "bestFor": "Quest 3 owners who want a low-cost, hands-free wired earbud option built to route around the headset's own strap.",
      "pros": ["3 ear-tip sizes included for fit", "Cable length and strap holders designed specifically to route around the Quest 3 strap", "Includes a storage case"],
      "cons": ["Wired only — no wireless/Bluetooth option"],
      "categorySlugs": ["vr-accessories"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "amvr",
      "officialUrl": "https://www.amvrshop.com/products/noise-isolating-in-ear-headphones-for-meta-quest-3",
      "specifications": [
        { "label": "Driver size", "value": "10mm neodymium" },
        { "label": "Cable length", "value": "9.3\" left / 18.3\" right channel" },
        { "label": "Included ear tips", "value": "S/M/L silicone" },
        { "label": "SKU", "value": "Q3EM2" }
      ],
      "retailerLinks": [
        { "retailerSlug": "amvr-shop", "affiliateUrl": "https://www.amvrshop.com/products/noise-isolating-in-ear-headphones-for-meta-quest-3", "price": 11.99, "currency": "USD" }
      ],
      "metaTitle": "AMVR Noise-Isolating In-Ear Headphones for Quest 3",
      "metaDescription": "Wired in-ear headphones for Quest 3 with 10mm drivers and 3 ear-tip sizes, by AMVR.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0356/2786/0104/files/23_e3102f34-30c3-4d2a-8c9d-b6a67e940d48.png?v=1764227844"],
      "publish": true
    },
    {
      "slug": "mwb-chenille-weighted-blanket-adults",
      "title": "Magic Weighted Blanket Chenille — Adults",
      "bestPickLabel": "none",
      "excerpt": "A chenille weighted blanket for adults with an attached duvet cover, offered in 3 sizes (12/16/20 lb) and 4 colors.",
      "description": "This chenille weighted blanket uses a pocketed inner liner to distribute weight evenly across the body, and comes with an attached duvet cover so there's no separate liner to remove before washing — the whole blanket is machine washable and dryable. The manufacturer sizes it by body weight: 70-110 lb → 42x60in (12 lb), 110-150 lb → 42x72in (16 lb), 150+ lb → 48x78in (20 lb).\nMagic Weighted Blanket states it has made weighted blankets in the USA for over 25 years. Available in Navy Blue, Champagne, Dark Gray, and Dark Chocolate chenille. Note: not every size/color combination is in stock at all times — check the size and color you want on the official page before ordering.",
      "bestFor": "Adults wanting a machine-washable weighted blanket without a separate liner to wash and reassemble each time.",
      "pros": ["Attached duvet cover — no separate liner to remove for washing", "Machine washable and dryable", "3 size tiers keyed to body weight, 4 color options"],
      "cons": ["Some size/color combinations may be sold out at a given time"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/chenille-magic-weighted-blanket-for-adults",
      "specifications": [
        { "label": "Sizing guide", "value": "70-110 lb user → 42x60in/12lb; 110-150 lb → 42x72in/16lb; 150+ lb → 48x78in/20lb" },
        { "label": "Colors", "value": "Navy Blue, Champagne, Dark Gray, Dark Chocolate Chenille" },
        { "label": "Care", "value": "Machine washable and dryable (attached duvet cover)" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/chenille-magic-weighted-blanket-for-adults", "price": 199, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket Chenille — Adults",
      "metaDescription": "Chenille weighted blanket for adults with attached duvet cover, 3 sizes, 4 colors, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/products/navy-blue-chenille-Magic-Weighted-Blanket-36_1_d4ec90b3-6c7b-49e3-861c-ae4d40f987b4.jpg?v=1674871109"],
      "publish": true
    },
    {
      "slug": "mwb-minky-weighted-blanket-adults",
      "title": "Magic Weighted Blanket Minky — Adults",
      "bestPickLabel": "none",
      "excerpt": "A minky-fabric weighted blanket for adults in Dark Grey Minky Dot, with an attached duvet cover across 3 size/weight tiers.",
      "description": "This weighted blanket uses minky fabric, made from shorter fibers than chenille, with a pocketed inner liner to distribute weight evenly. Like the rest of the line, it ships with an attached duvet cover so there's no separate liner to remove for washing, and is machine washable and dryable.\nSized by body weight: 70-110 lb → 42x60in (12 lb), 110-150 lb → 42x72in (16 lb), 150+ lb → 48x78in (20 lb). Magic Weighted Blanket states it has made weighted blankets in the USA for over 24 years. Available in one color, Dark Grey Minky Dot. Note: not every size is in stock at all times.",
      "bestFor": "Adults who prefer a softer minky texture over chenille or cotton for their weighted blanket.",
      "pros": ["Attached duvet cover — no separate liner to remove for washing", "Machine washable and dryable", "Minky fabric uses shorter fibers than chenille for a softer feel"],
      "cons": ["Only one color option (Dark Grey Minky Dot)", "Some sizes may be sold out at a given time"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/minky-magic-weighted-blanket-for-adults",
      "specifications": [
        { "label": "Sizing guide", "value": "70-110 lb user → 42x60in/12lb; 110-150 lb → 42x72in/16lb; 150+ lb → 48x78in/20lb" },
        { "label": "Color", "value": "Dark Grey Minky Dot" },
        { "label": "Care", "value": "Machine washable and dryable (attached duvet cover)" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/minky-magic-weighted-blanket-for-adults", "price": 199, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket Minky — Adults",
      "metaDescription": "Minky-fabric weighted blanket for adults with attached duvet cover, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/products/darkCharcoal-Minky-Dot-Magic-Weighted-Blanket-38_1df91787-ce7b-42ca-90b6-99cfa14750d6.png?v=1645736743"],
      "publish": true
    },
    {
      "slug": "mwb-flannel-weighted-blanket-adults",
      "title": "Magic Weighted Blanket Cozy Cotton Flannel — Adults",
      "bestPickLabel": "none",
      "excerpt": "A cotton flannel weighted blanket for adults in Blue & Gray Plaid, warmer than plain cotton while staying breathable.",
      "description": "This weighted blanket uses cotton flannel — warmer than plain cotton while remaining soft and breathable — with a pocketed inner liner and an attached duvet cover. Magic Weighted Blanket states it's made in the USA by sewing contractors paid a living wage, and backs it with a lifetime warranty.\nSized by user height rather than weight for this line: 36-48in → 36x65in (8 lb), 48-54in → 42x60in (12 lb), 54-67in → 42x72in (16 lb), 67in+ → 48x78in (20 lb). Available in one color, Blue & Gray Plaid Flannel. Note: not every size is in stock at all times.",
      "bestFor": "Adults who want a warmer flannel weighted blanket for cooler climates or seasons.",
      "pros": ["Warmer than plain cotton while staying breathable", "Attached duvet cover, machine washable and dryable", "Lifetime warranty (per manufacturer)"],
      "cons": ["Only one color option (Blue & Gray Plaid)", "Some sizes may be sold out at a given time"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/flannel-magic-weighted-blanket-for-adults",
      "specifications": [
        { "label": "Sizing guide", "value": "36-48in height → 36x65in/8lb; 48-54in → 42x60in/12lb; 54-67in → 42x72in/16lb; 67in+ → 48x78in/20lb" },
        { "label": "Color", "value": "Blue & Gray Plaid Flannel" },
        { "label": "Warranty", "value": "Lifetime (per manufacturer)" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/flannel-magic-weighted-blanket-for-adults", "price": 189, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket Cozy Cotton Flannel — Adults",
      "metaDescription": "Cotton flannel weighted blanket for adults with lifetime warranty, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/files/blue-gray-plaid-flannel-Magic-Weighted-Blanket-34_e14eb784-7e86-4c26-b306-03d670a32707.jpg?v=1683933315"],
      "publish": true
    },
    {
      "slug": "mwb-weighted-blanket-kids-8lb",
      "title": "Magic Weighted Blanket for Kids (36x54in, 8 lb)",
      "bestPickLabel": "none",
      "excerpt": "An 8 lb, 36x54in weighted blanket for kids, offered in chenille, cotton, and minky fabric options.",
      "description": "This kids-sized weighted blanket (36x54in, 8 lb) is offered in a choice of fabrics — chenille, cool cotton, or minky smooth — each with a pocketed inner liner to distribute weight evenly, the same design principle used across Magic Weighted Blanket's adult lines.\nAvailable colors in this size include Dark Grey Chenille, Light Blue Cotton, Light Blue Minky Smooth, and Navy Blue Chenille. Magic Weighted Blanket states its blankets are made in the USA.",
      "bestFor": "Parents sizing a weighted blanket specifically for a child rather than scaling down an adult-sized one.",
      "pros": ["Kid-specific 36x54in/8lb sizing rather than a scaled-down adult blanket", "Choice of chenille, cotton, or minky fabric", "4 color options in this size"],
      "cons": ["Fabric/color availability can vary — confirm the exact option is in stock before ordering"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-for-kids",
      "specifications": [
        { "label": "Size", "value": "36 x 54in, 8 lb" },
        { "label": "Fabric options", "value": "Chenille, Cool Cotton, Minky Smooth" },
        { "label": "Colors", "value": "Dark Grey Chenille, Light Blue Cotton, Light Blue Minky Smooth, Navy Blue Chenille" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-for-kids", "price": 179, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket for Kids (36x54in, 8 lb)",
      "metaDescription": "8 lb kids weighted blanket, choice of chenille, cotton, or minky fabric, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/files/gray-chenille-Magic-Weighted-Blanket-36_1_540x_11ee5081-49c5-48e9-8204-7369c99e6867.jpg?v=1702494667"],
      "publish": true
    },
    {
      "slug": "mwb-weighted-blanket-lite-14lb",
      "title": "Magic Weighted Blanket LITE (48x78in, 14 lb)",
      "bestPickLabel": "none",
      "excerpt": "A lighter-weight version of Magic Weighted Blanket's largest adult size — same 48x78in footprint at 14 lb instead of 20 lb.",
      "description": "The LITE blanket is the same 48x78in footprint as the brand's largest adult weighted blanket, but weighs 14 lb instead of 20 lb — for people who want deep-pressure-therapy benefits without the heaviest available weight.\nAvailable in Grey Cotton, White & Gray Plaid Flannel, and Blue & Gray Plaid Cotton Flannel fabric options.",
      "bestFor": "Adults who want the coverage area of the largest Magic Weighted Blanket size without its full 20 lb weight.",
      "pros": ["Same 48x78in coverage as the largest adult blanket, at a lighter 14 lb", "3 fabric/color options", "Positioned specifically for buyers who find standard weighted blankets too heavy"],
      "cons": ["Fixed at 14 lb — no other weight option within the LITE line"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-lite",
      "specifications": [
        { "label": "Size", "value": "48 x 78in, 14 lb" },
        { "label": "Fabric options", "value": "Grey Cotton, White & Gray Plaid Flannel, Blue & Gray Plaid Cotton Flannel" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-lite", "price": 229, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket LITE (48x78in, 14 lb)",
      "metaDescription": "Lighter 14 lb version of the 48x78in weighted blanket, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/products/light-grey-cotton-Magic-Weighted-Blanket-12_a2d954e1-fab6-4657-b742-223d17dfba89.jpg?v=1652300779"],
      "publish": true
    },
    {
      "slug": "mwb-weighted-blanket-kids-12lb",
      "title": "Magic Weighted Blanket for Kids (42x60in, 12 lb)",
      "bestPickLabel": "none",
      "excerpt": "A 12 lb, 42x60in weighted blanket sized for larger kids, offered in chenille, cotton, and minky fabric options.",
      "description": "This is the next size up from Magic Weighted Blanket's 8 lb kids blanket — 42x60in at 12 lb — for larger children who've outgrown the smaller size. It's offered in the same range of fabric choices: chenille, cool cotton, and minky (including minky dot).\nAvailable colors in this size include Dark Grey Chenille, Light Blue Chenille, Dark Grey Minky Dot, Navy Blue Cotton, Grey Cotton, and Navy Blue Chenille. Note: this listing's page title states 42x60in/12lb; the store's internal URL slug references different dimensions, so the on-page title is used here as the source of truth.",
      "bestFor": "Parents of larger kids or pre-teens who've outgrown the 8 lb kids size but don't need a full adult blanket yet.",
      "pros": ["Sized between the 8lb kids blanket and adult sizes", "Choice of chenille, cotton, or minky (including minky dot) fabric", "6 color options in this size"],
      "cons": ["Vendor's page has a title/URL naming inconsistency for this size — confirm dimensions on the live page before ordering", "Fabric/color availability can vary — confirm the exact option is in stock before ordering"],
      "categorySlugs": ["weighted-blankets"],
      "occasionSlugs": ["christmas"],
      "brandSlug": "magic-weighted-blanket",
      "officialUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-for-kids-36-x-54-12-lb",
      "specifications": [
        { "label": "Size", "value": "42 x 60in, 12 lb (per on-page title)" },
        { "label": "Fabric options", "value": "Chenille, Cool Cotton, Minky, Minky Dot" },
        { "label": "Colors", "value": "Dark Grey Chenille, Light Blue Chenille, Dark Grey Minky Dot, Navy Blue Cotton, Grey Cotton, Navy Blue Chenille" }
      ],
      "retailerLinks": [
        { "retailerSlug": "magic-weighted-blanket", "affiliateUrl": "https://magicweightedblanket.com/products/magic-weighted-blanket-for-kids-36-x-54-12-lb", "price": 189, "currency": "USD" }
      ],
      "metaTitle": "Magic Weighted Blanket for Kids (42x60in, 12 lb)",
      "metaDescription": "12 lb kids weighted blanket, choice of chenille, cotton, or minky fabric, by Magic Weighted Blanket.",
      "galleryImageUrls": ["https://cdn.shopify.com/s/files/1/0888/4582/files/gray-chenille-Magic-Weighted-Blanket-36_1_540x_11ee5081-49c5-48e9-8204-7369c99e6867.jpg?v=1702494667"],
      "publish": true
    },
    {
      "slug": "tevise-automatic-tourbillon-business-watch",
      "title": "TEVISE Automatic Tourbillon Business Watch",
      "brandSlug": "tevise",
      "categorySlugs": ["watches"],
      "excerpt": "An automatic mechanical dress watch with an open-heart dial, moon-phase, day and 24-hour sub-dials, on a stainless steel bracelet.",
      "description": "The TEVISE Automatic Tourbillon is a self-winding mechanical watch built around an open-heart dial that exposes part of the movement the brand markets as a tourbillon. It adds moon-phase, day-of-week and 24-hour sub-dials, sits in an alloy case under mineral glass, and runs on a stainless steel bracelet with a folding clasp. Water resistance is rated at 30 metres, which covers everyday splashes rather than swimming.",
      "bestFor": "Someone who wants an inexpensive automatic dress watch with visible movement detailing rather than a plain quartz everyday watch.",
      "pros": ["Self-winding automatic movement, no battery needed", "Open-heart dial with moon-phase, day and 24-hour sub-dials", "Stainless steel bracelet with folding clasp"],
      "cons": ["Alloy case rather than stainless steel", "30 m water resistance handles splashes only, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Automatic mechanical" },
        { "label": "Case material", "value": "Alloy" },
        { "label": "Glass", "value": "Mineral" },
        { "label": "Strap", "value": "Stainless steel" },
        { "label": "Water resistance", "value": "30 m" },
        { "label": "Displays", "value": "Moon phase, day, 24-hour" }
      ],
      "officialUrl": "https://burayidi.com/products/tevise-automatic-tourbillon-business-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1621665052586.jpg?v=1746815526",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1621665052586_74581732-1090-4c7b-a672-39325d897834.jpg?v=1746815534",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1621665052591.jpg?v=1746815534"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/tevise-automatic-tourbillon-business-watch", "price": 98.89, "currency": "USD" }
      ],
      "metaTitle": "TEVISE Automatic Tourbillon Business Watch",
      "metaDescription": "TEVISE automatic mechanical watch with open-heart dial, moon-phase, day and 24-hour sub-dials, alloy case, steel bracelet, 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "tevise-mens-automatic-mechanical-watch",
      "title": "TEVISE Men's Automatic Mechanical Watch",
      "brandSlug": "tevise",
      "categorySlugs": ["watches"],
      "excerpt": "A self-winding automatic watch with a see-through skeleton dial, date window, and stainless steel case and bracelet.",
      "description": "The TEVISE T9005A is an automatic mechanical watch with a hollow, skeleton-style dial that shows the movement working underneath. It has a date function, a stainless steel case and bracelet, and mineral tempered glass, and is rated to 30 metres for daily wear. Because it is self-winding, it keeps running from wrist motion without a battery.",
      "bestFor": "A first automatic watch for someone who likes seeing the mechanical movement through the dial.",
      "pros": ["Self-winding automatic movement", "Skeleton dial shows the movement", "Stainless steel case and bracelet", "Date window"],
      "cons": ["30 m water resistance handles splashes only, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Automatic mechanical" },
        { "label": "Case material", "value": "Stainless steel" },
        { "label": "Glass", "value": "Mineral tempered" },
        { "label": "Strap", "value": "Stainless steel" },
        { "label": "Water resistance", "value": "30 m" },
        { "label": "Display", "value": "Date, skeleton dial" }
      ],
      "officialUrl": "https://burayidi.com/products/tevise-mens-fashion-automatic-mechanical-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/178277990698.jpg?v=1746837120",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/754678877794.jpg?v=1746837121",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1546818538258.jpg?v=1746837122"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/tevise-mens-fashion-automatic-mechanical-watch", "price": 70.82, "currency": "USD" }
      ],
      "metaTitle": "TEVISE Men's Automatic Mechanical Watch",
      "metaDescription": "TEVISE T9005A automatic mechanical watch with skeleton dial, date, stainless steel case and bracelet, mineral glass, 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "winner-mens-skeleton-manual-mechanical-watch",
      "title": "Winner Men's Skeleton Manual Mechanical Watch",
      "brandSlug": "winner",
      "categorySlugs": ["watches"],
      "excerpt": "A hand-wound skeleton watch with an engraved openwork dial and see-through caseback, in several colour finishes.",
      "description": "The Winner skeleton watch uses a hand-wound (manual) mechanical movement, with an engraved openwork dial and a see-through caseback that both show the gears. It is protected by mineral tempered glass and closes with a folding clasp, and comes in a range of gold and silver finishes. Being manual, it needs winding by hand rather than winding from wrist motion.",
      "bestFor": "Someone who wants an eye-catching skeleton mechanical watch at the lowest possible price and does not mind daily winding.",
      "pros": ["Engraved skeleton dial and see-through caseback", "Hand-wound mechanical movement, no battery", "Several colour finishes"],
      "cons": ["Manual movement needs winding by hand regularly", "Vendor does not state a water-resistance rating, so keep it away from water"],
      "specifications": [
        { "label": "Movement", "value": "Manual mechanical (hand-wound)" },
        { "label": "Case back", "value": "See-through" },
        { "label": "Glass", "value": "Mineral tempered" },
        { "label": "Clasp", "value": "Folding buckle" },
        { "label": "Dial", "value": "Skeleton / openwork" }
      ],
      "officialUrl": "https://burayidi.com/products/the-winner-mens-fashion-business-casual-space-engraved-gold-watchband-manual-mechanical-watches",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/4176405868_1819201077.jpg?v=1746836954",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/4171859363_1819201077.jpg?v=1746836956",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/4176408090_1819201077.jpg?v=1746836958"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/the-winner-mens-fashion-business-casual-space-engraved-gold-watchband-manual-mechanical-watches", "price": 49.49, "currency": "USD" }
      ],
      "metaTitle": "Winner Men's Skeleton Manual Mechanical Watch",
      "metaDescription": "Winner hand-wound skeleton watch with engraved openwork dial, see-through caseback, mineral glass and folding clasp, in gold and silver finishes.",
      "publish": true
    },
    {
      "slug": "naviforce-9144-multifunctional-watch",
      "title": "NAVIFORCE 9144 Men's Multifunctional Watch",
      "brandSlug": "naviforce",
      "categorySlugs": ["watches"],
      "excerpt": "An analog multifunction watch with calendar, dual time, world time and 24-hour displays, on a leather strap.",
      "description": "The NAVIFORCE 9144 is an analog multifunction watch that adds calendar, day, dual-time, world-time and 24-hour read-outs around the main dial. It pairs an alloy case with a leather strap and pin buckle, and combines pointer and numeric displays for quick reading. It comes in several dial and strap colours.",
      "bestFor": "A traveller who wants a second time zone and world-time reference on an analog watch.",
      "pros": ["Dual time and world time displays", "Calendar and 24-hour read-outs", "Leather strap, several colours"],
      "cons": ["Alloy case rather than stainless steel", "Vendor does not state a water-resistance rating"],
      "specifications": [
        { "label": "Case material", "value": "Alloy" },
        { "label": "Strap", "value": "Leather" },
        { "label": "Buckle", "value": "Pin buckle" },
        { "label": "Displays", "value": "Calendar, dual time, world time, 24-hour" }
      ],
      "officialUrl": "https://burayidi.com/products/naviforce-9144-mens-multifunctional-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1612509650834.jpg?v=1746796937",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1612509666251.jpg?v=1746796944",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1612509658832.jpg?v=1746796946"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/naviforce-9144-mens-multifunctional-watch", "price": 132.38, "currency": "USD" }
      ],
      "metaTitle": "NAVIFORCE 9144 Men's Multifunctional Watch",
      "metaDescription": "NAVIFORCE 9144 analog multifunction watch with calendar, dual time, world time and 24-hour displays, alloy case and leather strap.",
      "publish": true
    },
    {
      "slug": "naviforce-dual-time-sport-watch",
      "title": "NAVIFORCE Men's Dual Time Sport Watch",
      "brandSlug": "naviforce",
      "categorySlugs": ["watches"],
      "excerpt": "An analog-digital sport watch with a stainless steel mesh band, alarm, dual time and 30 m water resistance.",
      "description": "This NAVIFORCE sport watch runs a quartz movement with both analog hands and a digital display, so it can show two time zones at once. It has an alarm, day and date functions, a stainless steel mesh band, and a 30-metre (3 BAR) water resistance rating for splashes and hand-washing. The steel case and mesh strap give it a heavier, more rugged feel than a leather-strap watch.",
      "bestFor": "Someone who wants an analog-digital watch with a metal mesh band for everyday and light active use.",
      "pros": ["Analog plus digital dual-time display", "Stainless steel mesh band", "Alarm, day and date functions", "30 m water resistance"],
      "cons": ["30 m rating is for splashes, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Quartz" },
        { "label": "Display", "value": "Analog + digital" },
        { "label": "Band", "value": "Stainless steel mesh" },
        { "label": "Water resistance", "value": "30 m (3 BAR)" },
        { "label": "Functions", "value": "Alarm, day, date, dual time" }
      ],
      "officialUrl": "https://burayidi.com/products/naviforce-mens-dual-time-sport-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/7637330914721.jpg?v=1746937493",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1187802583277.jpg?v=1746937496",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/2806011742092.jpg?v=1746937496"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/naviforce-mens-dual-time-sport-watch", "price": 124.16, "currency": "USD" }
      ],
      "metaTitle": "NAVIFORCE Men's Dual Time Sport Watch",
      "metaDescription": "NAVIFORCE analog-digital sport watch with stainless steel mesh band, alarm, dual time, day and date, and 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "naviforce-nf9134-dual-display-watch",
      "title": "NAVIFORCE NF9134 Dual Display Men's Watch",
      "brandSlug": "naviforce",
      "categorySlugs": ["watches"],
      "excerpt": "A dual-display watch combining analog hands and a digital read-out, with week and calendar functions, on a leather strap.",
      "description": "The NAVIFORCE NF9134 combines a pointer (analog) display with a digital one, and adds week and calendar functions. It uses an alloy case, a leather strap and a stainless steel pin buckle, with a round dial and electronic movement. It is aimed at casual everyday wear and comes in several colourways.",
      "bestFor": "Someone after a casual analog-digital watch on a leather strap rather than a metal bracelet.",
      "pros": ["Analog plus digital dual display", "Week and calendar functions", "Leather strap with steel buckle"],
      "cons": ["Alloy case rather than stainless steel", "Vendor does not state a water-resistance rating"],
      "specifications": [
        { "label": "Display", "value": "Analog + digital" },
        { "label": "Case material", "value": "Alloy" },
        { "label": "Strap", "value": "Leather" },
        { "label": "Buckle", "value": "Stainless steel pin" },
        { "label": "Functions", "value": "Week, calendar" }
      ],
      "officialUrl": "https://burayidi.com/products/naviforce-nf9134-dual-movement-mens-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/488579959002.jpg?v=1746911958",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/411820084699.jpg?v=1746911963",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/263163375648.jpg?v=1746911963"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/naviforce-nf9134-dual-movement-mens-watch", "price": 131.25, "currency": "USD" }
      ],
      "metaTitle": "NAVIFORCE NF9134 Dual Display Men's Watch",
      "metaDescription": "NAVIFORCE NF9134 analog-digital watch with week and calendar functions, alloy case and leather strap with a steel pin buckle.",
      "publish": true
    },
    {
      "slug": "naviforce-9024-kairos-sport-watch",
      "title": "NAVIFORCE 9024 Kairos Men's Sport Watch",
      "brandSlug": "naviforce",
      "categorySlugs": ["watches"],
      "excerpt": "A sport watch with luminous hands, week and calendar functions, dual analog-digital movement and 30 m water resistance.",
      "description": "The NAVIFORCE 9024 (sold as Kairos) is a sport watch that pairs a quartz analog movement with an electronic digital one. It has luminous hands, week, calendar and 24-hour functions, an alloy case and strap, and a stainless steel pin buckle. Water resistance is rated at 30 metres for daily wear and light water exposure.",
      "bestFor": "Someone who wants a chunky analog-digital sport watch with luminous hands for low light.",
      "pros": ["Analog plus digital movement", "Luminous hands for low light", "Week, calendar and 24-hour functions", "30 m water resistance"],
      "cons": ["Alloy case and strap rather than stainless steel", "30 m rating is for splashes, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Quartz + electronic" },
        { "label": "Display", "value": "Analog + digital" },
        { "label": "Case material", "value": "Alloy" },
        { "label": "Water resistance", "value": "30 m" },
        { "label": "Functions", "value": "Luminous hands, week, calendar, 24-hour" }
      ],
      "officialUrl": "https://burayidi.com/products/kairos-naviforce-mens-dual-movement-sport-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/7220685831848.jpg?v=1746797415",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1609997959627.jpg?v=1746797416",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/5535964219891.jpg?v=1746797417"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/kairos-naviforce-mens-dual-movement-sport-watch", "price": 149.37, "currency": "USD" }
      ],
      "metaTitle": "NAVIFORCE 9024 Kairos Men's Sport Watch",
      "metaDescription": "NAVIFORCE 9024 Kairos analog-digital sport watch with luminous hands, week, calendar and 24-hour functions, and 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "naviforce-9056-sports-business-watch",
      "title": "NAVIFORCE 9056 Sports and Business Watch",
      "brandSlug": "naviforce",
      "categorySlugs": ["watches"],
      "excerpt": "A slim analog watch on a leather strap, running a Citizen Miyota 2315 quartz movement, rated for everyday splashes.",
      "description": "The NAVIFORCE 9056 is a simpler analog watch aimed at both casual and business wear. It runs a Japanese Citizen Miyota 2315 quartz movement, sits in an alloy case, and comes on a leather strap. Its 30-metre life-waterproof rating covers splashes and drizzle but not swimming or bathing.",
      "bestFor": "Someone who wants a clean analog watch with a known Miyota quartz movement at a low price.",
      "pros": ["Citizen Miyota 2315 quartz movement", "Clean analog dial for business or casual wear", "Leather strap"],
      "cons": ["Alloy case rather than stainless steel", "Life-waterproof only, not for swimming or bathing"],
      "specifications": [
        { "label": "Movement", "value": "Citizen Miyota 2315 quartz" },
        { "label": "Case material", "value": "Alloy" },
        { "label": "Strap", "value": "Leather" },
        { "label": "Water resistance", "value": "30 m (life waterproof)" }
      ],
      "officialUrl": "https://burayidi.com/products/naviforce-9056-high-end-sports-leisure-business-lxy-waterproof-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/3660873368_1229489913.jpg?v=1746937361",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/3657878920_1229489913.jpg?v=1746937362",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/3646343476_473359571.jpg?v=1746937365"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/naviforce-9056-high-end-sports-leisure-business-lxy-waterproof-watch", "price": 68.28, "currency": "USD" }
      ],
      "metaTitle": "NAVIFORCE 9056 Sports and Business Watch",
      "metaDescription": "NAVIFORCE 9056 analog watch with a Citizen Miyota 2315 quartz movement, alloy case and leather strap, rated for everyday splashes.",
      "publish": true
    },
    {
      "slug": "boamigo-led-digital-military-sports-watch",
      "title": "BOAMIGO Men's LED Digital Military Sports Watch",
      "brandSlug": "boamigo",
      "categorySlugs": ["watches"],
      "excerpt": "A rugged analog-digital sport watch with an LED read-out, three time zones, shock resistance and a rubber strap.",
      "description": "The BOAMIGO LED sports watch combines analog hands with an LED digital read-out and can track three time zones at once. It is shock resistant, rated to 3 BAR (about 30 metres), and adds a calendar, backlight and chronograph. The alloy case sits on a 23 mm rubber strap with a buckle clasp.",
      "bestFor": "Someone who wants a low-cost rugged sport watch with an LED display for outdoor use.",
      "pros": ["Analog plus LED digital display", "Tracks three time zones", "Shock resistant with backlight and chronograph", "Rubber strap for active wear"],
      "cons": ["3 BAR rating is for splashes, not swimming", "Alloy case"],
      "specifications": [
        { "label": "Display", "value": "Analog + LED digital" },
        { "label": "Case material", "value": "Alloy" },
        { "label": "Band", "value": "Rubber (23 mm)" },
        { "label": "Water resistance", "value": "3 BAR" },
        { "label": "Functions", "value": "3 time zones, calendar, chronograph, backlight" }
      ],
      "officialUrl": "https://burayidi.com/products/boamigo%E2%84%A2-mens-led-digital-quartz-military-sports-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/594dec3b-f4a3-4f3f-9918-21bab917b1b1.jpg?v=1746927812",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/260297640704.jpg?v=1746927813",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/460970381860.jpg?v=1746927815"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/boamigo%E2%84%A2-mens-led-digital-quartz-military-sports-watch", "price": 35.22, "currency": "USD" }
      ],
      "metaTitle": "BOAMIGO Men's LED Digital Military Sports Watch",
      "metaDescription": "BOAMIGO analog-LED sport watch tracking three time zones, shock resistant with backlight and chronograph, on a rubber strap, 3 BAR rated.",
      "publish": true
    },
    {
      "slug": "boamigo-square-digital-analog-sport-watch",
      "title": "BOAMIGO Men's Square Digital and Analog Sport Watch",
      "brandSlug": "boamigo",
      "categorySlugs": ["watches"],
      "excerpt": "A square-dial sport watch with combined digital and analog displays, a 42 mm stainless steel case and 30 m water resistance.",
      "description": "This BOAMIGO watch uses a square 42 mm dial that carries both digital and analog displays. It is built from stainless steel with a gold-tone finish and a matching strap and buckle, protected by mineral strengthened glass, and is rated to 30 metres for daily wear. The electronic movement drives the digital functions alongside the analog hands.",
      "bestFor": "Someone who wants a bold square-cased analog-digital watch on a metal bracelet.",
      "pros": ["Square dial with digital and analog displays", "Stainless steel case and strap", "Mineral strengthened glass", "42 mm case"],
      "cons": ["30 m rating is for splashes, not swimming"],
      "specifications": [
        { "label": "Display", "value": "Digital + analog" },
        { "label": "Case material", "value": "Stainless steel" },
        { "label": "Dial", "value": "42 mm square" },
        { "label": "Glass", "value": "Mineral" },
        { "label": "Water resistance", "value": "30 m" }
      ],
      "officialUrl": "https://burayidi.com/products/boamigo-mens-luxury-sport-watch-square-digital-analog-display",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1623477966678.jpg?v=1746911238",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1623477966674.jpg?v=1746911240",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1623477966669.jpg?v=1746911243"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/boamigo-mens-luxury-sport-watch-square-digital-analog-display", "price": 78.91, "currency": "USD" }
      ],
      "metaTitle": "BOAMIGO Square Digital and Analog Sport Watch",
      "metaDescription": "BOAMIGO square-dial sport watch with digital and analog displays, a 42 mm stainless steel case, mineral glass and 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "benyar-by5102m-quartz-watch",
      "title": "Benyar BY-5102M Men's Quartz Watch",
      "brandSlug": "benyar",
      "categorySlugs": ["watches"],
      "excerpt": "A business-casual quartz watch with a 43 mm dial, Japanese quartz movement, mineral glass and a leather strap.",
      "description": "The Benyar BY-5102M is a quartz watch aimed at business-casual wear, driven by a Japanese quartz movement. It has a 43 mm dial that is 15.4 mm thick, scratch-resistant mineral glass, and a leather strap with a pin buckle, and is rated to 3 ATM for everyday splashes. The larger case gives it a more substantial presence on the wrist.",
      "bestFor": "Someone who wants a large-dial business quartz watch on a leather strap.",
      "pros": ["Japanese quartz movement", "Scratch-resistant mineral glass", "Large 43 mm dial", "Leather strap"],
      "cons": ["3 ATM rating is for splashes, not swimming", "Thick 15.4 mm case may not suit smaller wrists"],
      "specifications": [
        { "label": "Movement", "value": "Japan quartz" },
        { "label": "Dial diameter", "value": "43 mm" },
        { "label": "Case thickness", "value": "15.4 mm" },
        { "label": "Glass", "value": "Scratch-resistant mineral" },
        { "label": "Strap", "value": "Leather" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://burayidi.com/products/benyar-by-5102m-mens-luxury-brand-quartz-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/8693558e-92ba-434e-bf47-9ec426652a2a.jpg?v=1746936692",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/4570d916-04c7-4a89-ba88-ccbd07b96997.jpg?v=1746936693",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/f2c1497e-9b0b-4f76-99ab-edd7ba73f736.jpg?v=1746936695"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/benyar-by-5102m-mens-luxury-brand-quartz-watch", "price": 115.92, "currency": "USD" }
      ],
      "metaTitle": "Benyar BY-5102M Men's Quartz Watch",
      "metaDescription": "Benyar BY-5102M quartz watch with a 43 mm dial, Japanese quartz movement, scratch-resistant mineral glass and leather strap, 3 ATM rated.",
      "publish": true
    },
    {
      "slug": "olevs-luminous-quartz-watch",
      "title": "OLEVS Men's Luminous Quartz Watch",
      "brandSlug": "olevs",
      "categorySlugs": ["watches"],
      "excerpt": "A quartz dress watch with luminous hands, a sub-dial calendar layout, stainless steel case and leather strap.",
      "description": "The OLEVS men's watch runs a quartz movement in a round dial with luminous hands and a calendar shown through small sub-dials. It uses a stainless steel case and a leather strap and comes in several colour combinations. The luminous hands make it readable in low light.",
      "bestFor": "Someone who wants a quartz dress watch with luminous hands and sub-dial styling.",
      "pros": ["Quartz movement with luminous hands", "Calendar via sub-dials", "Stainless steel case", "Several colour options"],
      "cons": ["Vendor does not clearly state a water-resistance rating"],
      "specifications": [
        { "label": "Movement", "value": "Quartz" },
        { "label": "Case material", "value": "Stainless steel" },
        { "label": "Strap", "value": "Leather" },
        { "label": "Display", "value": "Luminous hands, calendar sub-dials" }
      ],
      "officialUrl": "https://burayidi.com/products/olevs-mens-luxury-luminous-quartz-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/3578ea28-acd9-4b5a-bf01-30575c2dc45c.jpg?v=1746797301",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/9c765e2c-a673-4a0d-9f93-88e53c9f0799.jpg?v=1746797302",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/ed29b8e4-7f7a-41b0-a9f5-b5386de2d973.jpg?v=1746797305"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/olevs-mens-luxury-luminous-quartz-watch", "price": 167.77, "currency": "USD" }
      ],
      "metaTitle": "OLEVS Men's Luminous Quartz Watch",
      "metaDescription": "OLEVS quartz dress watch with luminous hands, calendar sub-dials, a stainless steel case and leather strap, in several colour options.",
      "publish": true
    },
    {
      "slug": "nibosi-slim-quartz-business-watch",
      "title": "NIBOSI Slim Quartz Business Watch",
      "brandSlug": "nibosi",
      "categorySlugs": ["watches"],
      "excerpt": "A slim 6.5 mm quartz business watch with a stainless steel mesh strap, calendar and 30 m water resistance.",
      "description": "The NIBOSI NI2321 is a slim quartz dress watch with a 6.5 mm-thick profile designed to slip under a cuff. It has an alloy case with an IP vacuum-plated finish, a stainless steel mesh strap, mineral tempered glass and a calendar window, and is rated to 30 metres for daily wear.",
      "bestFor": "Someone who wants a thin, understated business watch on a mesh strap.",
      "pros": ["Slim 6.5 mm profile", "Stainless steel mesh strap", "Calendar window", "30 m water resistance"],
      "cons": ["Alloy case rather than stainless steel", "30 m rating is for splashes, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Quartz" },
        { "label": "Case thickness", "value": "6.5 mm" },
        { "label": "Case material", "value": "Alloy (IP plated)" },
        { "label": "Strap", "value": "Stainless steel mesh" },
        { "label": "Glass", "value": "Mineral tempered" },
        { "label": "Water resistance", "value": "30 m" }
      ],
      "officialUrl": "https://burayidi.com/products/nibosi-quartz-business-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/851836219632.jpg?v=1746917050",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/2260349871165.jpg?v=1746917058",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/2450506217705.jpg?v=1746917058"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/nibosi-quartz-business-watch", "price": 53.14, "currency": "USD" }
      ],
      "metaTitle": "NIBOSI Slim Quartz Business Watch",
      "metaDescription": "NIBOSI NI2321 slim 6.5 mm quartz business watch with a stainless steel mesh strap, calendar window and 30 m water resistance.",
      "publish": true
    },
    {
      "slug": "curren-9007-rose-gold-ladies-watch",
      "title": "CURREN 9007 Rose Gold Ladies Quartz Watch",
      "brandSlug": "curren",
      "categorySlugs": ["watches"],
      "excerpt": "A women's quartz watch with a 30 mm dial, rose-gold-tone case, stainless steel bracelet and 3 ATM water resistance.",
      "description": "The CURREN 9007 is a women's quartz watch with a 30 mm dial and a slim 8 mm case in a rose-gold-tone alloy, on a stainless steel bracelet. It uses a scratch-resistant Hardlex crystal and is rated to 3 BAR (3 ATM) for everyday splashes. The proportions are aimed at a lighter, dressier fit.",
      "bestFor": "A woman who wants a dressy rose-gold-tone quartz watch on a metal bracelet.",
      "pros": ["Quartz movement", "Rose-gold-tone case and steel bracelet", "Slim 8 mm case, 30 mm dial", "Scratch-resistant Hardlex crystal"],
      "cons": ["Alloy case rather than solid stainless steel", "3 ATM rating is for splashes, not swimming"],
      "specifications": [
        { "label": "Movement", "value": "Quartz" },
        { "label": "Dial diameter", "value": "30 mm" },
        { "label": "Case thickness", "value": "8 mm" },
        { "label": "Case material", "value": "Rose-gold-tone alloy" },
        { "label": "Bracelet", "value": "Stainless steel" },
        { "label": "Glass", "value": "Hardlex" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://burayidi.com/products/curren-9007-rose-gold-quartz-ladies-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1934983545456.jpg?v=1746813080",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1934983545456_cbf8b4c0-0114-4e2a-9128-4ec4492eb0be.jpg?v=1746813093",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/3559769888623.jpg?v=1746813093"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/curren-9007-rose-gold-quartz-ladies-watch", "price": 52.42, "currency": "USD" }
      ],
      "metaTitle": "CURREN 9007 Rose Gold Ladies Quartz Watch",
      "metaDescription": "CURREN 9007 women's quartz watch with a 30 mm dial, rose-gold-tone case, stainless steel bracelet and Hardlex crystal, 3 ATM rated.",
      "publish": true
    },
    {
      "slug": "skmei-kids-waterproof-digital-watch",
      "title": "SKMEI Kids Waterproof Digital Watch",
      "brandSlug": "skmei",
      "categorySlugs": ["watches"],
      "excerpt": "A children's digital watch rated to 50 m for swimming, with stopwatch, alarm, date and a colourful backlight.",
      "description": "The SKMEI children's watch is a digital model rated to 50 metres, so it handles swimming and water play rather than just splashes. It has a PC case and a silicone strap, and adds a stopwatch, timed alarm, date and week displays, and a colourful luminous backlight. It is built for everyday wear by active kids.",
      "bestFor": "Active kids who need a genuinely swim-capable, low-cost digital watch.",
      "pros": ["50 m water resistance, suitable for swimming", "Stopwatch, alarm, date and week functions", "Colourful luminous backlight", "Soft silicone strap"],
      "cons": ["Plastic (PC) case and digital-only display"],
      "specifications": [
        { "label": "Movement", "value": "Digital (electronic)" },
        { "label": "Case material", "value": "PC" },
        { "label": "Strap", "value": "Silicone" },
        { "label": "Water resistance", "value": "50 m" },
        { "label": "Functions", "value": "Stopwatch, alarm, date, week, backlight" }
      ],
      "officialUrl": "https://burayidi.com/products/skmei-waterproof-childrens-digital-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/1977340760213.jpg?v=1746938904",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/2609315311464.jpg?v=1746938910",
        "https://cdn.shopify.com/s/files/1/0656/8181/7856/files/251311859048.jpg?v=1746938911"
      ],
      "retailerLinks": [
        { "retailerSlug": "burayidi", "affiliateUrl": "https://burayidi.com/products/skmei-waterproof-childrens-digital-watch", "price": 23.52, "currency": "USD" }
      ],
      "metaTitle": "SKMEI Kids Waterproof Digital Watch",
      "metaDescription": "SKMEI kids digital watch rated to 50 m for swimming, with stopwatch, alarm, date and week displays and a colourful backlight.",
      "publish": true
    },
    {
      "slug": "engwe-p275-se",
      "title": "ENGWE P275 SE",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A lightweight step-through city e-bike with a 250W motor and a claimed 100 km range, at Engwe's entry price point.",
      "description": "The ENGWE P275 SE is an entry-level city e-bike built around a 250W motor and a 36V 13Ah battery, with a step-through frame that is easy to get on and off. Engwe rates it for up to 100 km of pedal-assisted range and a 120 kg maximum load. Like all EU models it is limited to 25 km/h pedal assist.",
      "bestFor": "A first commuter e-bike for riders who want an easy step-through frame at the lowest Engwe price.",
      "pros": ["Lightweight step-through frame, easy to mount", "Up to 100 km claimed range", "Lowest price in the Engwe line"],
      "cons": ["Smaller 36V 13Ah battery than the fat-tire models", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "36V 13Ah" },
        { "label": "Range (claimed)", "value": "Up to 100 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "120 kg" },
        { "label": "Frame", "value": "Step-through city" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-p275-se",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/P275SE03_220573d7-23f8-489d-ad7d-898d68acb251.jpg?v=1767078543",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/P275_SE_dbc2d3b3-6f88-4986-a7d5-95f32aa11374.jpg?v=1773208554",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/P275_SE_11.jpg?v=1773208554"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-p275-se", "price": 899, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE P275 SE Electric Bike",
      "metaDescription": "ENGWE P275 SE step-through city e-bike: 250W motor, 36V 13Ah battery, up to 100 km range, 120 kg load, 25 km/h EU pedal assist.",
      "publish": true
    },
    {
      "slug": "engwe-p20",
      "title": "ENGWE P20",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A compact commuter e-bike with a 250W motor and a 36V 9.6Ah battery, aimed at short urban trips.",
      "description": "The ENGWE P20 is a compact urban e-bike with a 250W motor and a 36V 9.6Ah battery. Engwe rates it for up to 100 km of pedal-assisted range, and it is capped at 25 km/h pedal assist under EU rules. It sits at the lighter, city-focused end of the Engwe line.",
      "bestFor": "City riders who want a compact, low-cost e-bike for short commutes.",
      "pros": ["Compact urban design", "250W motor with up to 100 km claimed range", "Affordable entry price"],
      "cons": ["Small 36V 9.6Ah battery limits real-world range", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "36V 9.6Ah" },
        { "label": "Range (claimed)", "value": "Up to 100 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Frame", "value": "Compact commuter" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-p20",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/P20.png?v=1767078782",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/0_8718032a-e593-4c18-94c7-de870e70b57a.jpg?v=1767078782",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/1_a16cf5a0-ac76-4808-ad40-af7014fa66df.jpg?v=1764660090"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-p20", "price": 999, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE P20 Electric Bike",
      "metaDescription": "ENGWE P20 compact commuter e-bike: 250W motor, 36V 9.6Ah battery, up to 100 km claimed range, 25 km/h EU pedal assist.",
      "publish": true
    },
    {
      "slug": "engwe-ep-2-boost",
      "title": "ENGWE EP-2 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A folding fat-tire e-bike with a 624Wh battery and a claimed 120 km range, built for mixed-terrain riding.",
      "description": "The ENGWE EP-2 Boost is a folding fat-tire e-bike with a 250W motor and a 624Wh battery, rated for up to 120 km of pedal-assisted range and a 150 kg maximum load. The fat tires and folding frame make it suited to rougher surfaces and easier storage. It is limited to 25 km/h pedal assist under EU rules.",
      "bestFor": "Riders who want a folding fat-tire e-bike for mixed terrain and easy storage.",
      "pros": ["Folding fat-tire design for mixed terrain", "624Wh battery, up to 120 km claimed range", "150 kg maximum load"],
      "cons": ["Fat-tire folding frames are heavy to carry", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "624 Wh" },
        { "label": "Range (claimed)", "value": "Up to 120 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Frame", "value": "Folding fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-ep-2-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_BOOST_2_9f545fbe-47b9-4c7f-94bd-a0eaa27df4ae.jpg?v=1775100611",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_BOOST_10_9ba5d965-5669-4624-a5e5-fc9b440a0f85.jpg?v=1775100618",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_BOOST_11_b54a5ffd-2757-4cb2-9920-68ce8cf23ea4.jpg?v=1775100618"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-ep-2-boost", "price": 1049, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE EP-2 Boost Folding Fat-Tire E-Bike",
      "metaDescription": "ENGWE EP-2 Boost folding fat-tire e-bike: 250W motor, 624Wh battery, up to 120 km range, 150 kg load, 25 km/h EU pedal assist.",
      "publish": true
    },
    {
      "slug": "engwe-ep-2-pro",
      "title": "ENGWE EP-2 Pro",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A folding fat-tire e-bike with 20x4.0 all-terrain tires, a 624Wh battery, Shimano 7-speed gears and a claimed 120 km range.",
      "description": "The ENGWE EP-2 Pro is a folding fat-tire e-bike with a 250W motor, a 624Wh (48V 13Ah) battery and 20x4.0 all-terrain tires. It uses a Shimano 7-speed drivetrain and is rated for up to 120 km of pedal-assisted range, capped at 25 km/h under EU rules. Some colour/spec options are priced up to EUR 1099.",
      "bestFor": "Riders who want a proven folding fat-tire e-bike with Shimano gears for all-terrain use.",
      "pros": ["20x4.0 all-terrain fat tires", "624Wh battery, up to 120 km claimed range", "Shimano 7-speed drivetrain"],
      "cons": ["Heavy folding fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "624 Wh (48V 13Ah)" },
        { "label": "Range (claimed)", "value": "Up to 120 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Gears", "value": "Shimano 7-speed" },
        { "label": "Tires", "value": "20 x 4.0 all-terrain" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-ep-2-pro",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_PRO_Gray-1.jpg?v=1741175766",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_PRO_MOB_3.jpg?v=1741175766",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_PRO_Gray-2.jpg?v=1741223199"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-ep-2-pro", "price": 1049, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE EP-2 Pro Folding Fat-Tire E-Bike",
      "metaDescription": "ENGWE EP-2 Pro folding fat-tire e-bike: 250W, 624Wh battery, 20x4.0 tires, Shimano 7-speed, up to 120 km, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-o20-boost",
      "title": "ENGWE O20 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A folding commuter e-bike with front suspension, a 720Wh LG battery, Shimano 8-speed gears and a claimed 140 km range.",
      "description": "The ENGWE O20 Boost is a full-size folding commuter e-bike with a 250W hub motor (75Nm), front suspension and a 720Wh LG battery. Engwe rates it for up to 140 km of pedal-assisted range, with independent cycling tests cited at 141 km (PAS 1) down to 80 km (PAS 5). It uses a Shimano 8-speed drivetrain, weighs 26.5 kg, supports a 150 kg load, and charges in about 3.5 hours; top speed is capped at 25 km/h under EU rules.",
      "bestFor": "Commuters who want a folding e-bike with a large-brand battery and long claimed range.",
      "pros": ["720Wh LG battery with up to 140 km claimed range", "Shimano 8-speed and front suspension", "Around 3.5-hour fast charging"],
      "cons": ["Heavy at 26.5 kg for a folding bike", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W hub (75 Nm)" },
        { "label": "Battery", "value": "720 Wh (LG cells)" },
        { "label": "Range (claimed)", "value": "Up to 140 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Gears", "value": "Shimano 8-speed" },
        { "label": "Weight", "value": "26.5 kg" },
        { "label": "Max load", "value": "150 kg" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-o20-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/ENGWEO20_5.png?v=1779786505",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/ENGWEO20.png?v=1779844855",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/ENGWEO20_2.png?v=1779786505"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-o20-boost", "price": 1099, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE O20 Boost Folding E-Bike",
      "metaDescription": "ENGWE O20 Boost folding e-bike: 250W 75Nm, 720Wh LG battery, up to 140 km range, Shimano 8-speed, 26.5 kg, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-zip",
      "title": "ENGWE Zip",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A lightweight folding e-bike with a 250W motor, 36V 10Ah battery and a claimed 120 km range for city commuting.",
      "description": "The ENGWE Zip is a lightweight folding commuter e-bike with a 250W motor and a 36V 10Ah battery. Engwe rates it for up to 120 km of pedal-assisted range and a 120 kg maximum load, capped at 25 km/h under EU rules. It is aimed at riders who want something easy to fold and store.",
      "bestFor": "Commuters who want a light, foldable e-bike that is easy to store at home or work.",
      "pros": ["Lightweight folding design", "Up to 120 km claimed range", "Easy to store and carry"],
      "cons": ["Smaller 36V 10Ah battery than fat-tire models", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "36V 10Ah" },
        { "label": "Range (claimed)", "value": "Up to 120 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "120 kg" },
        { "label": "Frame", "value": "Lightweight folding" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-zip",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/14_efd61b52-0d3b-4bf0-a0a2-1284bb23f80f.jpg?v=1776997542",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/17_fc1942bd-64f3-4bca-950e-19d5ec28d986.jpg?v=1776675630",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/12_6a28f319-4e89-4e46-994b-e596ac92ed72.jpg?v=1776997542"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-zip", "price": 1099, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE Zip Folding Electric Bike",
      "metaDescription": "ENGWE Zip lightweight folding e-bike: 250W motor, 36V 10Ah battery, up to 120 km range, 120 kg load, 25 km/h EU pedal assist.",
      "publish": true
    },
    {
      "slug": "engwe-m20",
      "title": "ENGWE M20",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A fat-tire step-through e-bike with a dual-battery option up to 48V 26Ah and a claimed 150 km range. From EUR 1099.",
      "description": "The ENGWE M20 is a fat-tire step-through e-bike with a 250W motor and 20x4.0 tires. In its dual-battery configuration it carries up to 48V 26Ah for a claimed range of up to 150 km, capped at 25 km/h under EU rules. Pricing runs from EUR 1099 for the single-battery version up to EUR 1299 for the larger battery.",
      "bestFor": "Riders who want a fat-tire step-through with an optional second battery for long rides.",
      "pros": ["20x4.0 fat tires with step-through frame", "Dual-battery option up to 48V 26Ah", "Up to 150 km claimed range"],
      "cons": ["Heavy fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V up to 26Ah (dual-battery option)" },
        { "label": "Range (claimed)", "value": "Up to 150 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Tires", "value": "20 x 4.0 fat" },
        { "label": "Frame", "value": "Step-through" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-m20",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/M20.png?v=1736216251",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/M20_35d8a8c4-9cf3-4691-a61d-060fbac60c92.jpg?v=1736216251",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/20_2c2115a8-a5b0-40d9-a94f-00482df99c86.png?v=1736216251"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-m20", "price": 1099, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE M20 Fat-Tire Electric Bike",
      "metaDescription": "ENGWE M20 fat-tire step-through e-bike: 250W, dual-battery up to 48V 26Ah, up to 150 km range, 20x4.0 tires, from EUR 1099.",
      "publish": true
    },
    {
      "slug": "engwe-m1",
      "title": "ENGWE M1",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A fat-tire e-bike with a 48V 15.6Ah battery and a claimed 170 km range, the longest in Engwe's core line. From EUR 1099.",
      "description": "The ENGWE M1 is a fat-tire e-bike with a 250W motor, a 48V 15.6Ah battery and 20x4.0 tires. Engwe rates it for up to 170 km of pedal-assisted range, the highest claim in its core line, capped at 25 km/h under EU rules. Pricing runs from EUR 1099 up to EUR 1299 depending on configuration.",
      "bestFor": "Riders who prioritise the longest claimed range in a fat-tire e-bike.",
      "pros": ["Up to 170 km claimed range", "20x4.0 fat tires", "48V 15.6Ah battery"],
      "cons": ["Heavy fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 15.6Ah" },
        { "label": "Range (claimed)", "value": "Up to 170 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Tires", "value": "20 x 4.0 fat" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-m1",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/5_2ba60f4c-28c6-42af-90a9-6ac5aab8db48.jpg?v=1760497114",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/3_e4e5efda-46c2-4b69-b682-19bf99c9f18d.jpg?v=1760497114",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/1_1260ce92-10e4-48dd-a9d8-60519354cb7a.jpg?v=1760497582"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-m1", "price": 1099, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE M1 Fat-Tire Electric Bike",
      "metaDescription": "ENGWE M1 fat-tire e-bike: 250W motor, 48V 15.6Ah battery, up to 170 km claimed range, 20x4.0 tires, from EUR 1099.",
      "publish": true
    },
    {
      "slug": "engwe-l20-boost",
      "title": "ENGWE L20 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A fat-tire step-through e-bike with a 48V 13Ah battery and a claimed 126 km range.",
      "description": "The ENGWE L20 Boost is a fat-tire step-through e-bike with a 250W motor and a 48V 13Ah battery, rated for up to 126 km of pedal-assisted range and a 120 kg maximum load. The step-through frame and fat tires make it comfortable for everyday riding. Top speed is capped at 25 km/h under EU rules.",
      "bestFor": "Riders who want an easy-to-mount fat-tire e-bike for comfortable everyday use.",
      "pros": ["Step-through fat-tire frame", "48V 13Ah battery, up to 126 km claimed range", "Comfortable everyday geometry"],
      "cons": ["Heavier than a city commuter", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 13Ah" },
        { "label": "Range (claimed)", "value": "Up to 126 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "120 kg" },
        { "label": "Frame", "value": "Step-through fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-l20-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20_Boost_5c3547c0-d49c-4f61-8065-84241cc7bcf5.png?v=1748931221",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20_Boost.jpg?v=1748931221",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/8c15d41b9b829464843b5aa4449a28f3.jpg?v=1748931221"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-l20-boost", "price": 1149, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE L20 Boost Fat-Tire E-Bike",
      "metaDescription": "ENGWE L20 Boost step-through fat-tire e-bike: 250W, 48V 13Ah battery, up to 126 km range, 120 kg load, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-ep-2-3-0-boost",
      "title": "ENGWE EP-2 3.0 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "The latest EP-2 folding fat-tire e-bike with a 48V 13.5Ah battery and a claimed 120 km range.",
      "description": "The ENGWE EP-2 3.0 Boost is the newest generation of Engwe's EP-2 folding fat-tire line, with a 250W motor and a 48V 13.5Ah battery. It is rated for up to 120 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules. The folding fat-tire format suits mixed terrain and compact storage.",
      "bestFor": "Riders who want the newest EP-2 folding fat-tire model with an updated battery.",
      "pros": ["Latest EP-2 generation", "48V 13.5Ah battery, up to 120 km claimed range", "150 kg maximum load"],
      "cons": ["Heavy folding fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 13.5Ah" },
        { "label": "Range (claimed)", "value": "Up to 120 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Frame", "value": "Folding fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-ep-2-3-0-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_3.0_boost_01.jpg?v=1767078486",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2-3.0-boost-07.jpg?v=1767078486",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EP-2_3.0_boost_04.jpg?v=1767078486"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-ep-2-3-0-boost", "price": 1299, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE EP-2 3.0 Boost Folding E-Bike",
      "metaDescription": "ENGWE EP-2 3.0 Boost folding fat-tire e-bike: 250W, 48V 13.5Ah battery, up to 120 km range, 150 kg load, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-n1-air",
      "title": "ENGWE N1 Air",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A step-through urban e-bike with a 250W motor, 36V 10Ah battery and a claimed 100 km range. From EUR 1249.",
      "description": "The ENGWE N1 Air is a step-through urban e-bike with a 250W motor and a 36V 10Ah battery, rated for up to 100 km of pedal-assisted range and a 120 kg maximum load. It is capped at 25 km/h under EU rules. Pricing runs from EUR 1249 up to EUR 1299 depending on configuration.",
      "bestFor": "Urban riders who want a clean-looking step-through e-bike for daily commuting.",
      "pros": ["Step-through urban design", "Up to 100 km claimed range", "120 kg maximum load"],
      "cons": ["Smaller 36V 10Ah battery", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "36V 10Ah" },
        { "label": "Range (claimed)", "value": "Up to 100 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "120 kg" },
        { "label": "Frame", "value": "Step-through urban" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-n1-air",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/1_29bbf176-25fe-40de-b4b1-9cf1eb87ae04.jpg?v=1767494053",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/03187cfe8fbdb84aa703090166f2833d.jpg?v=1767494053",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/2_1a191a38-34f8-4be8-8e82-76cc37e62fff.jpg?v=1767493777"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-n1-air", "price": 1249, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE N1 Air Urban Electric Bike",
      "metaDescription": "ENGWE N1 Air step-through urban e-bike: 250W motor, 36V 10Ah battery, up to 100 km range, 120 kg load, from EUR 1249.",
      "publish": true
    },
    {
      "slug": "engwe-engine-x",
      "title": "ENGWE Engine X",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A fat-tire e-bike with 20x4.0 tires, a 48V 13Ah battery and a claimed 120 km range.",
      "description": "The ENGWE Engine X is a fat-tire e-bike with a 250W motor, a 48V 13Ah battery and 20x4.0 tires. Engwe rates it for up to 120 km of pedal-assisted range, capped at 25 km/h under EU rules. It sits in the value end of Engwe's fat-tire range.",
      "bestFor": "Riders who want an affordable fat-tire e-bike for casual off-road and city use.",
      "pros": ["20x4.0 fat tires", "48V 13Ah battery, up to 120 km claimed range", "Good value in the fat-tire range"],
      "cons": ["Heavier fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 13Ah" },
        { "label": "Range (claimed)", "value": "Up to 120 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Tires", "value": "20 x 4.0 fat" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-engine-x",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_X_825e7e5e-d3c7-496e-966c-574fc7224eea.jpg?v=1754270394",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_X_8.jpg?v=1754270394",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_X_2_ca0f95d2-ca51-4d0a-9578-5187838f1350.jpg?v=1754270394"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-engine-x", "price": 1299, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE Engine X Fat-Tire E-Bike",
      "metaDescription": "ENGWE Engine X fat-tire e-bike: 250W motor, 48V 13Ah battery, up to 120 km claimed range, 20x4.0 tires, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-l20-3-0-boost",
      "title": "ENGWE L20 3.0 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "The latest L20 step-through fat-tire e-bike with a 48V 13.5Ah battery and a claimed 135 km range.",
      "description": "The ENGWE L20 3.0 Boost is the newest generation of the L20 step-through fat-tire line, with a 250W motor and a 48V 13.5Ah battery. It is rated for up to 135 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules.",
      "bestFor": "Riders who want the latest L20 step-through fat-tire with a longer range.",
      "pros": ["Latest L20 generation", "48V 13.5Ah battery, up to 135 km claimed range", "150 kg maximum load"],
      "cons": ["Heavy step-through fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 13.5Ah" },
        { "label": "Range (claimed)", "value": "Up to 135 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Frame", "value": "Step-through fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-l20-3-0-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L203.0Boost_5.jpg?v=1767078636",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20-3.0-BOOST.jpg?v=1767078636",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20-3.0-BOOST_-_1.jpg?v=1767078636"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-l20-3-0-boost", "price": 1399, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE L20 3.0 Boost Fat-Tire E-Bike",
      "metaDescription": "ENGWE L20 3.0 Boost step-through fat-tire e-bike: 250W, 48V 13.5Ah battery, up to 135 km range, 150 kg load, 25 km/h EU.",
      "publish": true
    },
    {
      "slug": "engwe-engine-pro-2-0",
      "title": "ENGWE Engine Pro 2.0",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A folding fat-tire e-bike with a 768Wh battery, Shimano 8-speed gears, 20x4.0 puncture-resistant tires and a claimed 110 km range.",
      "description": "The ENGWE Engine Pro 2.0 is a folding fat-tire e-bike with a 250W motor (75Nm) and an upgraded 768Wh (48V 16Ah) battery. It runs a Shimano 8-speed drivetrain on 20x4.0 puncture-resistant tires and is rated for up to 110 km of pedal-assisted range, capped at 25 km/h under EU rules.",
      "bestFor": "Riders who want a well-equipped folding fat-tire e-bike with a large battery and Shimano gears.",
      "pros": ["Upgraded 768Wh battery", "Shimano 8-speed and 20x4.0 puncture-resistant tires", "Folding fat-tire design"],
      "cons": ["Heavy folding fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W (75 Nm)" },
        { "label": "Battery", "value": "768 Wh (48V 16Ah)" },
        { "label": "Range (claimed)", "value": "Up to 110 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Gears", "value": "Shimano 8-speed" },
        { "label": "Tires", "value": "20 x 4.0 puncture-resistant" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-engine-pro-2-0",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_Pro_2_3.jpg?v=1767078817",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_pro_2.0.jpg?v=1767078817",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/9_ea5393f3-881a-48e1-bb44-5ebad8ddd763.jpg?v=1767078817"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-engine-pro-2-0", "price": 1399, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE Engine Pro 2.0 Folding Fat-Tire E-Bike",
      "metaDescription": "ENGWE Engine Pro 2.0 folding fat-tire e-bike: 250W 75Nm, 768Wh battery, Shimano 8-speed, 20x4.0 tires, up to 110 km, 25 km/h EU.",
      "publish": true
    },
    {
      "slug": "engwe-e26",
      "title": "ENGWE E26",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A 26-inch e-mountain-bike style model with a 48V 16Ah battery and a claimed 140 km range.",
      "description": "The ENGWE E26 is a 26-inch e-bike with mountain-bike styling, a 250W motor and a 48V 16Ah battery. Engwe rates it for up to 140 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules. The larger 26-inch wheels suit longer road and light-trail riding.",
      "bestFor": "Riders who prefer larger 26-inch wheels and mountain-bike styling over fat tires.",
      "pros": ["26-inch wheels for longer rides", "48V 16Ah battery, up to 140 km claimed range", "150 kg maximum load"],
      "cons": ["Not a true off-road mountain bike", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 16Ah" },
        { "label": "Range (claimed)", "value": "Up to 140 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Wheels", "value": "26-inch" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-e26",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/E26.png?v=1736215504",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/E26.jpg?v=1736215504",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/1_fd8672b1-48d5-4926-883e-62e1f60d82c6.jpg?v=1736215504"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-e26", "price": 1499, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE E26 Electric Bike",
      "metaDescription": "ENGWE E26 26-inch e-bike: 250W motor, 48V 16Ah battery, up to 140 km claimed range, 150 kg load, 25 km/h EU pedal assist.",
      "publish": true
    },
    {
      "slug": "engwe-n1-pro",
      "title": "ENGWE N1 Pro",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "The higher-spec N1 urban e-bike with a 250W motor, 36V 10Ah battery and a claimed 100 km range.",
      "description": "The ENGWE N1 Pro is the higher-specification model in the N1 urban line, with a 250W motor and a 36V 10Ah battery. Engwe rates it for up to 100 km of pedal-assisted range and a 120 kg maximum load, capped at 25 km/h under EU rules.",
      "bestFor": "Urban riders who want the upgraded N1 for daily city commuting.",
      "pros": ["Higher-spec N1 urban model", "Up to 100 km claimed range", "120 kg maximum load"],
      "cons": ["Smaller 36V 10Ah battery", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "36V 10Ah" },
        { "label": "Range (claimed)", "value": "Up to 100 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "120 kg" },
        { "label": "Frame", "value": "Step-through urban" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-n1-pro",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/e367b45c5bcb8429ed6320726277f82d.png?v=1767176132",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/45de46e14459f56b8c661e7a53944134.png?v=1767176132",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/b58ce7b99582c961375527c3c6b27ebb.png?v=1767176132"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-n1-pro", "price": 1599, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE N1 Pro Urban Electric Bike",
      "metaDescription": "ENGWE N1 Pro step-through urban e-bike: 250W motor, 36V 10Ah battery, up to 100 km range, 120 kg load, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-engine-pro-3-0-boost",
      "title": "ENGWE Engine Pro 3.0 Boost",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A full-suspension folding fat-tire e-bike with a 48V 15Ah battery and a claimed 130 km range.",
      "description": "The ENGWE Engine Pro 3.0 Boost is a full-suspension folding fat-tire e-bike with a 250W motor and a 48V 15Ah battery. It is rated for up to 130 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules. The full suspension targets comfort on rough surfaces.",
      "bestFor": "Riders who want a full-suspension folding fat-tire e-bike for rougher terrain.",
      "pros": ["Full suspension for rough terrain", "48V 15Ah battery, up to 130 km claimed range", "150 kg maximum load"],
      "cons": ["Heavy full-suspension fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 15Ah" },
        { "label": "Range (claimed)", "value": "Up to 130 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Frame", "value": "Full-suspension folding fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-engine-pro-3-0-boost",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EnginePro3.0Boost_4.jpg?v=1758879814",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/Engine_Pro_3.0_Boost_07.jpg?v=1764756059",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/EnginePro3.0Boost_1.jpg?v=1764756059"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-engine-pro-3-0-boost", "price": 1699, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE Engine Pro 3.0 Boost Full-Suspension E-Bike",
      "metaDescription": "ENGWE Engine Pro 3.0 Boost full-suspension folding fat-tire e-bike: 250W, 48V 15Ah, up to 130 km, 150 kg load, 25 km/h EU.",
      "publish": true
    },
    {
      "slug": "engwe-l20-3-0-pro",
      "title": "ENGWE L20 3.0 Pro",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "The top L20 step-through fat-tire e-bike with a 48V 15Ah battery and a claimed 160 km range.",
      "description": "The ENGWE L20 3.0 Pro is the top model in the L20 step-through fat-tire line, with a 250W motor and a 48V 15Ah battery. Engwe rates it for up to 160 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules.",
      "bestFor": "Riders who want the longest-range L20 step-through fat-tire model.",
      "pros": ["Up to 160 km claimed range", "48V 15Ah battery", "Step-through fat-tire comfort"],
      "cons": ["Heavy step-through fat-tire frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V 15Ah" },
        { "label": "Range (claimed)", "value": "Up to 160 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Max load", "value": "150 kg" },
        { "label": "Frame", "value": "Step-through fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-l20-3-0-pro",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L203.0PRO_5.jpg?v=1767078691",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20_3.0_PRO_14.jpg?v=1767078691",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/L20_3.0_PRO_15.jpg?v=1767078691"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-l20-3-0-pro", "price": 1699, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE L20 3.0 Pro Fat-Tire E-Bike",
      "metaDescription": "ENGWE L20 3.0 Pro step-through fat-tire e-bike: 250W, 48V 15Ah battery, up to 160 km range, 150 kg load, 25 km/h EU assist.",
      "publish": true
    },
    {
      "slug": "engwe-e26-3-0-pro",
      "title": "ENGWE E26 3.0 Pro",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A full-suspension 26-inch e-SUV with a 250W mid-drive motor (100Nm), 48V 15Ah battery and a claimed 135 km range.",
      "description": "The ENGWE E26 3.0 Pro is a full-suspension 26-inch e-SUV built around a 250W mid-drive motor (500W peak) delivering 100Nm of torque, paired with a 48V 15Ah (720Wh) battery. It uses an 80mm front fork and air rear suspension, a Shimano 8-speed drivetrain, and is rated for up to 135 km of pedal-assisted range and a 150 kg maximum load, capped at 25 km/h under EU rules.",
      "bestFor": "Riders who want a torquey mid-drive full-suspension e-bike for hills and mixed terrain.",
      "pros": ["250W mid-drive motor with 100Nm torque", "Full suspension (80mm fork + air rear)", "48V 15Ah battery, up to 135 km claimed range"],
      "cons": ["Heavy at around 32-34 kg", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W mid-drive (500W peak), 100 Nm" },
        { "label": "Battery", "value": "48V 15Ah (720 Wh)" },
        { "label": "Range (claimed)", "value": "Up to 135 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Gears", "value": "Shimano 8-speed" },
        { "label": "Suspension", "value": "80mm front fork + air rear" },
        { "label": "Max load", "value": "150 kg" }
      ],
      "officialUrl": "https://engwe.com/products/e26-3-0-pro",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/E26_3.0_Pro_2.png?v=1783509003",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/E26_3.0_Pro_10.jpg?v=1783409263",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/E26_3.0_Pro_8.jpg?v=1783409279"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/e26-3-0-pro", "price": 1899, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE E26 3.0 Pro Full-Suspension E-Bike",
      "metaDescription": "ENGWE E26 3.0 Pro full-suspension e-SUV: 250W mid-drive 100Nm, 48V 15Ah 720Wh, Shimano 8-speed, up to 135 km, 25 km/h EU.",
      "publish": true
    },
    {
      "slug": "engwe-x26-x24-x20",
      "title": "ENGWE X26 / X24 / X20",
      "brandSlug": "engwe",
      "categorySlugs": ["electric-bikes"],
      "excerpt": "A triple-suspension folding fat-tire e-bike sold in X20, X24 and X26 sizes with dual batteries and a claimed 150 km range. From EUR 1499.",
      "description": "The ENGWE X-series is a triple-suspension folding fat-tire e-bike offered in three sizes (X20, X24, X26) as variants of one listing. It runs a 250W motor with dual batteries (48V, 22.2Ah on the X20 up to 29.2Ah on the X24/X26), a Shimano 8-speed drivetrain and 160mm disc brakes, for a claimed range of up to 150 km, capped at 25 km/h under EU rules. Pricing runs from EUR 1499 for the X20 up to EUR 1999 for the X26.",
      "bestFor": "Riders who want a heavy-duty triple-suspension fat-tire e-bike with a choice of wheel sizes and dual batteries.",
      "pros": ["Triple suspension with dual batteries", "Up to 150 km claimed range", "Choice of X20, X24 and X26 sizes"],
      "cons": ["Heavy triple-suspension frame", "Limited to 25 km/h pedal assist (EU regulation)"],
      "specifications": [
        { "label": "Motor", "value": "250W" },
        { "label": "Battery", "value": "48V dual, 22.2-29.2Ah (varies by size)" },
        { "label": "Range (claimed)", "value": "Up to 150 km" },
        { "label": "Top speed", "value": "25 km/h (EU)" },
        { "label": "Gears", "value": "Shimano 8-speed" },
        { "label": "Brakes", "value": "160mm disc" },
        { "label": "Frame", "value": "Triple-suspension folding fat-tire" }
      ],
      "officialUrl": "https://engwe.com/products/engwe-x26-x24-x20",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/x26_f3963c89-ad83-4ebe-aaa8-4d028903be3e.jpg?v=1732167264",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/X20_cb18048f-d999-4dc9-9a8a-d4e6eeec1149.jpg?v=1732160476",
        "https://cdn.shopify.com/s/files/1/0683/8560/3641/files/X24_33212b9e-6894-4a49-bf2f-d4f7e85dc991.jpg?v=1732161025"
      ],
      "retailerLinks": [
        { "retailerSlug": "engwe", "affiliateUrl": "https://engwe.com/products/engwe-x26-x24-x20", "price": 1499, "currency": "EUR" }
      ],
      "metaTitle": "ENGWE X26 / X24 / X20 Fat-Tire E-Bike",
      "metaDescription": "ENGWE X26/X24/X20 triple-suspension folding fat-tire e-bike: 250W, dual battery, Shimano 8-speed, up to 150 km, from EUR 1499.",
      "publish": true
    },
    {
      "slug": "viwoods-aipaper",
      "title": "Viwoods AiPaper",
      "brandSlug": "viwoods",
      "categorySlugs": ["e-ink-tablets"],
      "excerpt": "A 10.65-inch E Ink note-taking tablet with a 300 PPI Carta 1300 display, Android 13, and a bundled stylus.",
      "description": "The Viwoods AiPaper is a 10.65-inch E Ink note-taking tablet built in a 4.5mm-thin body. Its E Ink Carta 1300 Mobius display runs at 1920x2560 (300 PPI) and pairs with Android 13, an octa-core 2.0GHz chip, 4GB RAM and 128GB storage for handwriting, PDF markup and reading. It ships with the W2 Stylus Pro, a folio and spare tips, and adds AI text conversion for turning handwriting into typed text.",
      "bestFor": "Students and professionals who want a large, distraction-free paper tablet for note-taking and PDF markup.",
      "pros": ["10.65-inch 300 PPI E Ink Carta 1300 display", "Android 13 with third-party apps and AI text conversion", "Ships with the W2 Stylus Pro, folio and spare tips", "128GB storage"],
      "cons": ["Premium price for an e-ink device", "E Ink refresh is not suited to video or fast animation"],
      "specifications": [
        { "label": "Display", "value": "10.65\" E Ink Carta 1300 Mobius" },
        { "label": "Resolution", "value": "1920 x 2560 (300 PPI)" },
        { "label": "OS", "value": "Android 13" },
        { "label": "Processor", "value": "Octa-core 2.0GHz" },
        { "label": "Memory", "value": "4GB RAM / 128GB storage" },
        { "label": "Connectivity", "value": "Wi-Fi + Bluetooth 5.0" },
        { "label": "Thickness", "value": "4.5 mm" }
      ],
      "officialUrl": "https://viwoods.com/products/viwoods-aipaper",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_hero.webp?v=1782810034",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_paper_tablet_e-ink_tablet_2.webp?v=1782955589",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_paper_tablet_e-ink_tablet_5.webp?v=1782955594"
      ],
      "retailerLinks": [
        { "retailerSlug": "viwoods", "affiliateUrl": "https://viwoods.com/products/viwoods-aipaper", "price": 549, "currency": "USD" }
      ],
      "metaTitle": "Viwoods AiPaper E-Ink Tablet",
      "metaDescription": "Viwoods AiPaper 10.65-inch E Ink note-taking tablet: Carta 1300, 1920x2560 300 PPI, Android 13, 128GB, bundled W2 stylus.",
      "publish": true
    },
    {
      "slug": "viwoods-aipaper-mini",
      "title": "Viwoods AiPaper Mini",
      "brandSlug": "viwoods",
      "categorySlugs": ["e-ink-tablets"],
      "excerpt": "An 8.2-inch paper-like E Ink tablet with an adjustable front light, Android, and a bundled stylus.",
      "description": "The Viwoods AiPaper Mini is an 8.2-inch paper-like E Ink tablet for portable reading and handwriting. It uses an E Ink Carta 1000 glare-free display at 1920x1440 (292 PPI) with a 0-20 adjustable front light, runs an Android-based system for third-party apps, and pairs an octa-core 2.0GHz chip with 4GB RAM and 128GB storage. It ships with the W2 Stylus Pro, a folio and spare tips.",
      "bestFor": "Readers who want a compact e-ink tablet for reading and handwriting on the go.",
      "pros": ["Portable 8.2-inch glare-free E Ink Carta 1000 display", "0-20 adjustable front light for any lighting", "Android apps with 128GB storage", "Ships with the W2 Stylus Pro, folio and spare tips"],
      "cons": ["Lower resolution and PPI than the 10.65-inch AiPaper", "E Ink refresh is not suited to video or fast animation"],
      "specifications": [
        { "label": "Display", "value": "8.2\" E Ink Carta 1000" },
        { "label": "Resolution", "value": "1920 x 1440 (292 PPI)" },
        { "label": "Front light", "value": "0-20 adjustable" },
        { "label": "OS", "value": "Android-based" },
        { "label": "Processor", "value": "Octa-core 2.0GHz" },
        { "label": "Memory", "value": "4GB RAM / 128GB storage" }
      ],
      "officialUrl": "https://viwoods.com/products/aipaper-mini",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_mini_hero.webp?v=1782810067",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_mini_hero_image_2.webp?v=1782955678",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_mini_hero_image_4.webp?v=1782955678"
      ],
      "retailerLinks": [
        { "retailerSlug": "viwoods", "affiliateUrl": "https://viwoods.com/products/aipaper-mini", "price": 429, "currency": "USD" }
      ],
      "metaTitle": "Viwoods AiPaper Mini E-Ink Tablet",
      "metaDescription": "Viwoods AiPaper Mini 8.2-inch E Ink tablet: Carta 1000, 1920x1440 292 PPI, adjustable front light, Android, 128GB, bundled stylus.",
      "publish": true
    },
    {
      "slug": "viwoods-aipaper-reader",
      "title": "Viwoods AiPaper Reader",
      "brandSlug": "viwoods",
      "categorySlugs": ["e-ink-tablets"],
      "excerpt": "A 6.13-inch Android E Ink e-reader with a 300 PPI Carta 1300 display, front light and a dedicated AI key. Offered in black-and-white or colour.",
      "description": "The Viwoods AiPaper Reader is a 6.13-inch Android E Ink e-reader with a Carta 1300 monochrome display at 824x1648 (300 PPI) and an adjustable front light. It runs Android 16 with a 6nm octa-core processor, 4GB RAM, 128GB storage, Wi-Fi 2.4G/5G and Bluetooth 5.0, plus a dedicated AI key for smart reading assistance. It is offered in a black-and-white display option and a colour display option; the listed price is for the black-and-white option.",
      "bestFor": "Book lovers who want a compact, distraction-free Android e-reader with AI reading assistance.",
      "pros": ["Sharp 6.13-inch 300 PPI E Ink Carta 1300 display", "Android 16 with a dedicated AI key for reading assistance", "Adjustable front light and 128GB storage", "Offered in black-and-white or colour display"],
      "cons": ["6.13-inch screen is reading-focused and small for extended handwriting", "E Ink refresh is not suited to video or fast animation"],
      "specifications": [
        { "label": "Display", "value": "6.13\" E Ink Carta 1300 (monochrome)" },
        { "label": "Resolution", "value": "824 x 1648 (300 PPI)" },
        { "label": "OS", "value": "Android 16" },
        { "label": "Processor", "value": "6nm octa-core" },
        { "label": "Memory", "value": "4GB RAM / 128GB storage" },
        { "label": "Connectivity", "value": "Wi-Fi 2.4G/5G + Bluetooth 5.0" },
        { "label": "Display options", "value": "Black & white or colour" }
      ],
      "officialUrl": "https://viwoods.com/products/viwoods-aipaper-reader",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_reader_hero.webp?v=1782810107",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_reader_hero_aimage_2.webp?v=1782956452",
        "https://cdn.shopify.com/s/files/1/0729/7368/0674/files/viwoods_aipaper_reader_hero_aimage_3.webp?v=1782956453"
      ],
      "retailerLinks": [
        { "retailerSlug": "viwoods", "affiliateUrl": "https://viwoods.com/products/viwoods-aipaper-reader", "price": 279, "currency": "USD" }
      ],
      "metaTitle": "Viwoods AiPaper Reader E-Ink E-Reader",
      "metaDescription": "Viwoods AiPaper Reader 6.13-inch Android E Ink e-reader: Carta 1300 300 PPI, Android 16, AI key, 128GB, black-and-white or colour.",
      "publish": true
    },
    {
      "slug": "donovan-axcent-silver-leather",
      "title": "Donovan The Axcent - Silver/Black Leather",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A slim minimalist quartz watch with a silver 41mm steel case and a black genuine leather strap.",
      "description": "The Axcent is Donovan's minimalist watch, here with a silver 316L stainless steel case and a black genuine leather strap. It runs a Japanese Hattori VJ32 quartz movement in a slim 41mm case just 7mm thick, under Hardlex mineral glass. The 20mm strap is interchangeable, and water resistance is rated at 3ATM for everyday splashes.",
      "bestFor": "Someone who wants a slim, minimalist everyday watch that dresses up or down.",
      "pros": ["Slim 41mm case, only 7mm thick", "316L stainless steel with Hardlex mineral glass", "Japanese Hattori VJ32 quartz movement", "Interchangeable 20mm black leather strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Quartz fashion watch, not a mechanical timepiece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Hattori VJ32 quartz" },
        { "label": "Case material", "value": "316L stainless steel" },
        { "label": "Case diameter", "value": "41 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Hardlex mineral glass" },
        { "label": "Strap", "value": "Black genuine leather (20 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-axcent-silver",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentSilverWatch-BlackLeatherStrapR5.png?v=1640984781",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/DonovanAxcentMensWatch-SilverLeatherStrapBlack.jpg?v=1640984781",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentSilverBlackLeatherStrapOnTableDonovanWatches.jpg?v=1640984781"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-axcent-silver", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Axcent - Silver/Black Leather Watch",
      "metaDescription": "Donovan The Axcent minimalist watch: silver 41mm 316L steel case, black leather strap, Hattori VJ32 quartz, mineral glass, 3ATM.",
      "publish": true
    },
    {
      "slug": "donovan-axcent-gunmetal-steel",
      "title": "Donovan The Axcent - Gun Metal Steel",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A slim minimalist quartz watch with a gun-metal 41mm steel case and a stainless steel mesh strap.",
      "description": "This version of Donovan's minimalist Axcent pairs a gun-metal 316L stainless steel case with a matching stainless steel mesh strap. It runs a Japanese Hattori VJ32 quartz movement in a slim 41mm case just 7mm thick, under Hardlex mineral glass. The 20mm strap is interchangeable, and water resistance is rated at 3ATM for everyday splashes.",
      "bestFor": "Someone who wants a darker, all-metal minimalist watch on a mesh bracelet.",
      "pros": ["Gun-metal case with matching steel mesh strap", "Slim 41mm case, only 7mm thick", "Japanese Hattori VJ32 quartz movement", "Interchangeable 20mm strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Quartz fashion watch, not a mechanical timepiece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Hattori VJ32 quartz" },
        { "label": "Case material", "value": "316L stainless steel (gun metal)" },
        { "label": "Case diameter", "value": "41 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Hardlex mineral glass" },
        { "label": "Strap", "value": "Stainless steel mesh (20 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-donovan-minimalist-mens",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentGunMetalWatch-GunMetalStainlessSteelStrapR5.png?v=1640984720",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentGunMetalStainlessSteelMeshStrapOnTableDonovanWatches.jpg?v=1640984720",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentGunMetalStainlessSteelMeshDonovanWatchesMens.jpg?v=1640984720"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-donovan-minimalist-mens", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Axcent - Gun Metal Steel Watch",
      "metaDescription": "Donovan The Axcent minimalist watch: gun-metal 41mm steel case, stainless steel mesh strap, Hattori VJ32 quartz, mineral glass, 3ATM.",
      "publish": true
    },
    {
      "slug": "donovan-axcent-black-steel",
      "title": "Donovan The Axcent - Black Steel",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A slim minimalist quartz watch with a black 41mm steel case and a stainless steel mesh strap.",
      "description": "This all-black version of Donovan's minimalist Axcent uses a black 316L stainless steel case with a matching stainless steel mesh strap. It runs a Japanese Hattori VJ32 quartz movement in a slim 41mm case just 7mm thick, under Hardlex mineral glass. The 20mm strap is interchangeable, and water resistance is rated at 3ATM for everyday splashes.",
      "bestFor": "Someone who wants an all-black minimalist watch on a matching mesh bracelet.",
      "pros": ["All-black case with matching steel mesh strap", "Slim 41mm case, only 7mm thick", "Japanese Hattori VJ32 quartz movement", "Interchangeable 20mm strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Quartz fashion watch, not a mechanical timepiece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Hattori VJ32 quartz" },
        { "label": "Case material", "value": "316L stainless steel (black)" },
        { "label": "Case diameter", "value": "41 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Hardlex mineral glass" },
        { "label": "Strap", "value": "Stainless steel mesh (20 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-minimalist-black",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentBlackWatch-BlackStainlessSteelStrapR5_0fc4d055-20d0-49d7-9ed0-52857543e7f1.png?v=1640984700",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentBlackStainlessSteelMeshStraponTableDonovanWatches_48d1f03b-6642-48dc-bfc5-0fb4ecbb7a05.jpg?v=1640984700",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/AxcentBlackWatchBlackStainlessSteelVestClose.jpg?v=1640984700"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-minimalist-black", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Axcent - Black Steel Watch",
      "metaDescription": "Donovan The Axcent minimalist watch: black 41mm steel case, stainless steel mesh strap, Hattori VJ32 quartz, mineral glass, 3ATM.",
      "publish": true
    },
    {
      "slug": "donovan-chrono-x-white-rose-gold",
      "title": "Donovan The Chrono X - White/Rose Gold Steel",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A 43mm Japanese-quartz chronograph with a white dial, rose-gold-plated case and a steel mesh strap.",
      "description": "The Chrono X is Donovan's chronograph, here with a white dial in a 43mm 304 stainless steel case plated with 18K rose gold, on a matching rose-gold steel mesh strap. It runs a 6-hand Japanese Miyota JS25 quartz movement with a 24-hour subdial and a stopwatch (seconds and minutes), under mineral glass. The 22mm strap is interchangeable, and water resistance is rated at 5ATM.",
      "bestFor": "Someone who wants an affordable Japanese-quartz chronograph that dresses up for business or evening wear.",
      "pros": ["6-hand Miyota JS25 chronograph with 24-hour and stopwatch subdials", "Rose-gold-plated 43mm stainless steel case", "Rose-gold steel mesh strap", "5ATM water resistance, interchangeable 22mm strap"],
      "cons": ["5ATM suits splashes and brief immersion, not diving", "Quartz chronograph, not a mechanical movement"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota JS25 quartz chronograph" },
        { "label": "Subdials", "value": "24-hour, stopwatch (sec), stopwatch (min)" },
        { "label": "Case material", "value": "304 stainless steel, 18K rose gold plated" },
        { "label": "Case diameter", "value": "43 mm" },
        { "label": "Case thickness", "value": "9.5 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "Rose gold stainless steel mesh (22 mm, interchangeable)" },
        { "label": "Water resistance", "value": "5 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-chrono-s-white-rose-gold-1",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoWhiteWatch-RoseGoldStainlessSteelStrapR5.png?v=1640937092",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXWhiteRoseGoldStainlessSteelMeshStraponTableDonovanWatches.jpg?v=1640937092",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXWhiteWatchRoseGoldStainlessSteelBomberLapelMid.jpg?v=1640937091"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-chrono-s-white-rose-gold-1", "price": 135, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Chrono X - White/Rose Gold Watch",
      "metaDescription": "Donovan The Chrono X chronograph: white dial, rose-gold-plated 43mm steel case, steel mesh strap, Miyota JS25 quartz, 5ATM.",
      "publish": true
    },
    {
      "slug": "donovan-chrono-x-black-rose-gold",
      "title": "Donovan The Chrono X - Black/Rose Gold/Black",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A 43mm Japanese-quartz chronograph with a black dial, rose-gold accents and a black Brazilian leather strap.",
      "description": "This Chrono X pairs a black dial with rose-gold accents in a 43mm 304 stainless steel case, on a black Brazilian genuine leather strap. It runs a 6-hand Japanese Miyota JS25 quartz movement with a 24-hour subdial and a stopwatch (seconds and minutes), under mineral glass. The 22mm strap is interchangeable, and water resistance is rated at 5ATM.",
      "bestFor": "Someone who wants a darker chronograph on a leather strap for business or evening wear.",
      "pros": ["6-hand Miyota JS25 chronograph with 24-hour and stopwatch subdials", "Black dial with rose-gold accents", "Black Brazilian genuine leather strap", "5ATM water resistance, interchangeable 22mm strap"],
      "cons": ["5ATM suits splashes and brief immersion, not diving", "Quartz chronograph, not a mechanical movement"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota JS25 quartz chronograph" },
        { "label": "Subdials", "value": "24-hour, stopwatch (sec), stopwatch (min)" },
        { "label": "Case material", "value": "304 stainless steel" },
        { "label": "Case diameter", "value": "43 mm" },
        { "label": "Case thickness", "value": "9.5 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "Black Brazilian genuine leather (22 mm, interchangeable)" },
        { "label": "Water resistance", "value": "5 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-chrono-s-black-gold",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoBlackWatch-BlackLeatherStrapR5.png?v=1640937021",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXBlackRoseGoldBlackLeatherStrapontableDonovanWatches.jpg?v=1640937021",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXBlackWatchBlackLeatherVestMid.jpg?v=1640937021"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-chrono-s-black-gold", "price": 135, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Chrono X - Black/Rose Gold Watch",
      "metaDescription": "Donovan The Chrono X chronograph: black dial, rose-gold accents, 43mm steel case, black leather strap, Miyota JS25 quartz, 5ATM.",
      "publish": true
    },
    {
      "slug": "donovan-chrono-x-pacific-navy",
      "title": "Donovan The Chrono X Pacific - Navy Leather",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A 43mm Japanese-quartz chronograph with a blue Pacific dial, brushed silver case and a navy Brazilian leather strap.",
      "description": "The Chrono X Pacific pairs a blue dial with a brushed silver 43mm 304 stainless steel case, on a navy Brazilian genuine leather strap. It runs a 6-hand Japanese Miyota JS25 quartz movement with a 24-hour subdial and a stopwatch (seconds and minutes), under mineral glass. The 22mm strap is interchangeable, and water resistance is rated at 5ATM.",
      "bestFor": "Someone who wants a blue-dial chronograph on a leather strap for a smart-casual look.",
      "pros": ["6-hand Miyota JS25 chronograph with 24-hour and stopwatch subdials", "Blue Pacific dial with brushed silver case", "Navy Brazilian genuine leather strap", "5ATM water resistance, interchangeable 22mm strap"],
      "cons": ["5ATM suits splashes and brief immersion, not diving", "Quartz chronograph, not a mechanical movement"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota JS25 quartz chronograph" },
        { "label": "Subdials", "value": "24-hour, stopwatch (sec), stopwatch (min)" },
        { "label": "Case material", "value": "304 stainless steel (brushed silver)" },
        { "label": "Case diameter", "value": "43 mm" },
        { "label": "Case thickness", "value": "9.5 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "Navy Brazilian genuine leather (22 mm, interchangeable)" },
        { "label": "Water resistance", "value": "5 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-chrono-s-blue-silver",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoBlueWatch-NavyLeatherStrapR5.png?v=1640937251",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXBlueSilverNavyLeatherStrapOnTableDonovanWatches.jpg?v=1640937251",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/ChronoXPacificWatchNavyLeatherLinenClose.jpg?v=1640937251"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-chrono-s-blue-silver", "price": 135, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Chrono X Pacific - Navy Leather Watch",
      "metaDescription": "Donovan The Chrono X Pacific chronograph: blue dial, brushed silver 43mm case, navy leather strap, Miyota JS25 quartz, 5ATM.",
      "publish": true
    },
    {
      "slug": "donovan-marble-rose-blue",
      "title": "Donovan The Marble Rose - Rose Gold/Blue",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A women's dress watch with a real marble dial, 38mm rose-gold-toned case and a light blue leather strap.",
      "description": "The Marble Rose is Donovan's women's watch with a dial made of real marble, so each piece is one of a kind. This version has a 38mm 316L stainless steel case plated with 18K rose gold and a light blue genuine leather strap. It runs a Japanese Miyota 2025 quartz movement under mineral glass, with an interchangeable 18mm strap and 3ATM water resistance.",
      "bestFor": "Someone who wants a women's dress watch with a genuine, one-of-a-kind marble dial.",
      "pros": ["Real marble dial, unique to each watch", "38mm rose-gold-toned 316L steel case", "Japanese Miyota 2025 quartz movement", "Interchangeable 18mm light blue leather strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Marble dials vary slightly from piece to piece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota 2025 quartz" },
        { "label": "Dial", "value": "Real marble" },
        { "label": "Case material", "value": "316L stainless steel, 18K rose gold plated" },
        { "label": "Case diameter", "value": "38 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "Light blue genuine leather (18 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-marble-rose-rose-gold-blue",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/WomensMarbleWatch-LightBlueLeatherStrapR5.png?v=1640937319",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseLightBlueLeatherStrapRoseGoldStainlessSteelonstairscloseupDonovanWatches.png?v=1640937319",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseLightBlueLeatherStrapCloseUpStainlessSteelRoseGoldDonovanWatches.png?v=1640937319"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-marble-rose-rose-gold-blue", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Marble Rose - Rose Gold/Blue Watch",
      "metaDescription": "Donovan The Marble Rose women's watch: real marble dial, 38mm rose-gold-toned case, light blue leather strap, Miyota 2025 quartz, 3ATM.",
      "publish": true
    },
    {
      "slug": "donovan-marble-rose-white",
      "title": "Donovan The Marble Rose - Rose Gold/White",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A women's dress watch with a real marble dial, 38mm rose-gold-toned case and a white leather strap.",
      "description": "The Marble Rose is Donovan's women's watch with a dial made of real marble, so each piece is one of a kind. This version has a 38mm 316L stainless steel case plated with 18K rose gold and a white genuine leather strap. It runs a Japanese Miyota 2025 quartz movement under mineral glass, with an interchangeable 18mm strap and 3ATM water resistance.",
      "bestFor": "Someone who wants a light, elegant women's marble-dial watch on a white strap.",
      "pros": ["Real marble dial, unique to each watch", "38mm rose-gold-toned 316L steel case", "Japanese Miyota 2025 quartz movement", "Interchangeable 18mm white leather strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Marble dials vary slightly from piece to piece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota 2025 quartz" },
        { "label": "Dial", "value": "Real marble" },
        { "label": "Case material", "value": "316L stainless steel, 18K rose gold plated" },
        { "label": "Case diameter", "value": "38 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "White genuine leather (18 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/the-bethesda-white-leather-strap",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/WomensMarbleWatch-WhiteLeatherStrapR5.png?v=1640937384",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseGoldWatchWhiteLeatherGraySweaterChestMid.jpg?v=1640937384",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseWhiteLeatherStrapOnTableDonovanWatches.jpg?v=1640937384"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/the-bethesda-white-leather-strap", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Marble Rose - Rose Gold/White Watch",
      "metaDescription": "Donovan The Marble Rose women's watch: real marble dial, 38mm rose-gold-toned case, white leather strap, Miyota 2025 quartz, 3ATM.",
      "publish": true
    },
    {
      "slug": "donovan-marble-rose-gray",
      "title": "Donovan The Marble Rose - Rose Gold/Gray",
      "brandSlug": "donovan-watches",
      "categorySlugs": ["watches"],
      "excerpt": "A women's dress watch with a real marble dial, 38mm rose-gold-toned case and a gray leather strap.",
      "description": "The Marble Rose is Donovan's women's watch with a dial made of real marble, so each piece is one of a kind. This version has a 38mm 316L stainless steel case plated with 18K rose gold and a gray genuine leather strap. It runs a Japanese Miyota 2025 quartz movement under mineral glass, with an interchangeable 18mm strap and 3ATM water resistance.",
      "bestFor": "Someone who wants a neutral, everyday women's marble-dial watch on a gray strap.",
      "pros": ["Real marble dial, unique to each watch", "38mm rose-gold-toned 316L steel case", "Japanese Miyota 2025 quartz movement", "Interchangeable 18mm gray leather strap"],
      "cons": ["3ATM water resistance handles splashes only, not swimming", "Marble dials vary slightly from piece to piece"],
      "specifications": [
        { "label": "Movement", "value": "Japanese Miyota 2025 quartz" },
        { "label": "Dial", "value": "Real marble" },
        { "label": "Case material", "value": "316L stainless steel, 18K rose gold plated" },
        { "label": "Case diameter", "value": "38 mm" },
        { "label": "Case thickness", "value": "7 mm" },
        { "label": "Glass", "value": "Mineral glass" },
        { "label": "Strap", "value": "Gray genuine leather (18 mm, interchangeable)" },
        { "label": "Water resistance", "value": "3 ATM" }
      ],
      "officialUrl": "https://donovanwatches.com/products/marble-watch",
      "galleryImageUrls": [
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/WomensMarbleWatch-GrayLeatherStrapR5.png?v=1640937337",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseGrayLeatherStrapRoseGoldBangleOliveShirtLightJeansStainlessSteelDonovanWatches.jpg?v=1640937337",
        "https://cdn.shopify.com/s/files/1/0403/7627/1000/products/MarbleRoseGoldWatchGrayLeatherBlackShirtChestMid.jpg?v=1640937337"
      ],
      "retailerLinks": [
        { "retailerSlug": "donovan-watches", "affiliateUrl": "https://donovanwatches.com/products/marble-watch", "price": 125, "currency": "USD" }
      ],
      "metaTitle": "Donovan The Marble Rose - Rose Gold/Gray Watch",
      "metaDescription": "Donovan The Marble Rose women's watch: real marble dial, 38mm rose-gold-toned case, gray leather strap, Miyota 2025 quartz, 3ATM.",
      "publish": true
    },
  ],
  coupons: [
    {
      "code": "PHAM10497646",
      "discountType": "percentage",
      "discountValue": 5,
      "scope": "brand",
      "linkedBrandSlug": "jennibag",
      "linkedProductSlug": "jenni-travel-bag-2",
      "termsNote": "Applies sitewide — 5% off your entire JenniBag order, not limited to this bag.",
      "isActive": true
    },
    {
      "code": "TEAMAFFDANANG",
      "discountType": "fixed-amount",
      "discountValue": 10,
      "scope": "brand",
      "linkedBrandSlug": "boderry",
      "linkedProductSlug": "voyager-titanium-field-watch-black",
      "isActive": true
    },
  ],
  blogPosts: [
    {
      "slug": "back-to-school-tech-essentials-dorm-room-displays",
      "title": "Back to School Tech Essentials: Portable TVs & Smart Displays for Dorm Rooms",
      "excerpt": "Four ApoloSign smart displays worth packing for a dorm room — three portable Android TVs and a desk-ready digital calendar, picked for space, price, and setup.",
      "intro": "Moving into a dorm room means fitting entertainment, video calls, and a class schedule into a space that's usually smaller than a bedroom at home. ApoloSign's portable Android TVs and digital calendars are built to actually move with a student — no wall drilling required for the TVs, and one calendar size ships with its own desk stand. Here are four ApoloSign displays worth considering for the room: three portable TVs at different sizes and price points, plus the one digital calendar that comes with a desk stand instead of wall-mount-only hardware.",
      "verdict": "For a single dorm room screen, the 24-inch is the easiest sell on price; the 32-inch is the better all-rounder if there's room for it. The PackGo is worth the jump specifically for students going home on weekends or breaks. Whichever TV gets picked, the 15.6-inch calendar is the one calendar size actually designed to sit on a desk instead of a wall.",
      "occasionSlug": "back-to-school",
      "categorySlug": "smart-displays",
      "productSlugs": [
        "apolosign-24-inch-smart-portable-tv",
        "apolosign-32-inch-smart-portable-tv",
        "apolosign-packgo-27-portable-tv",
        "apolosign-15-6-digital-calendar"
      ],
      "picks": [
        {
          "productSlug": "apolosign-24-inch-smart-portable-tv",
          "pickLabel": "Best Budget Pick",
          "blurb": "At $619, the 24-inch is ApoloSign's least expensive portable TV, and it doesn't cut Android 16 with Google Play access to get there — the tradeoffs are a shorter ~4-hour battery (versus the 32-inch's ~6 hours) and 1080p-only resolution, with no 4K option at this size. It still ships with the same fully adjustable wheeled stand and an 8MP detachable camera for video calls."
        },
        {
          "productSlug": "apolosign-32-inch-smart-portable-tv",
          "pickLabel": "Best Overall Screen Size",
          "blurb": "The 32-inch splits the difference between a laptop screen and a real TV, with a 1080p or 4K panel choice, 16GB of RAM, and up to 256GB of storage on the 4K variant. Its 15000mAh battery is rated for up to about 6 hours at 50% brightness, and the wheeled stand adjusts for height, tilt, swivel, and 90-degree rotation — useful for angling the screen from a bed or a desk chair."
        },
        {
          "productSlug": "apolosign-packgo-27-portable-tv",
          "pickLabel": "Best for Trips Home",
          "blurb": "The PackGo swaps the wheeled stand for a rugged briefcase with a handle and latch, which matters if the TV needs to travel between the dorm and home on breaks. It's the most expensive option in the lineup at $999, but it also has the brightest panel (450 nits), the most powerful built-in speakers (a 40W system), and 45W USB-C charging strong enough to power other devices."
        },
        {
          "productSlug": "apolosign-15-6-digital-calendar",
          "pickLabel": "Best Desk Organizer",
          "blurb": "Of ApoloSign's four calendar sizes, only the 15.6-inch ships with both a wall mount bracket and a desk stand — the 21.5-inch and 27-inch models are wall-mount only. That makes it the one built to sit on a dorm desk rather than requiring a drilled wall mount, syncing Google, Outlook, and iCloud calendars into one shared view with no subscription."
        }
      ],
      "faqs": [
        {
          "question": "Do these TVs need a cable or streaming subscription to work?",
          "answer": "No — they run Android 16 (or Android with Google Play, on the PackGo) with full Google Play Store access, so they work with whatever streaming apps or subscriptions a student already has, the same as a phone or tablet."
        },
        {
          "question": "Can the portable TVs be mounted on a dorm wall?",
          "answer": "Not as tested here — all three ship with a wheeled floor stand (24-inch and 32-inch) or a briefcase enclosure (PackGo), not wall-mount hardware, based on their listed specifications."
        },
        {
          "question": "Does the digital calendar require a subscription for calendar sync?",
          "answer": "No — ApoloSign's calendars sync Google, Outlook, and iCloud calendars (plus Yahoo and Cozi on the larger sizes) without a subscription fee, per the product's listed features."
        }
      ],
      "metaTitle": "Back to School Tech Essentials: Portable TVs & Displays",
      "metaDescription": "Four ApoloSign smart displays for dorm rooms — three portable Android TVs and the one digital calendar with a desk stand.",
      "coverImageUrl": "https://media.gettrendyfinds.com/Product_32inch_1.webp",
      "publishedAt": "2026-07-31T00:00:00.000Z",
      "publish": true
    },
    {
      "slug": "best-portable-tv-college-dorms-2026",
      "title": "Best Portable TV for College Dorms 2026: Size, Setup, and What to Look For",
      "excerpt": "A side-by-side comparison of ApoloSign's three portable Android TVs — 24-inch, 32-inch, and the briefcase-style PackGo 27-inch — on battery, brightness, and price.",
      "intro": "ApoloSign makes three portable touchscreen Android TVs, and picking between them mostly comes down to three things: how big a screen the room can fit, how long the battery needs to last between charges, and whether the TV needs to travel. This guide compares the specs ApoloSign lists for each model side by side, rather than picking a single \"best\" — the right size depends on the dorm.",
      "methodology": "Every figure below (screen size, resolution, battery capacity and rated hours, brightness, price) is taken directly from each product's own listed specifications — nothing here is estimated.",
      "verdict": "Screen size and price scale together here in an unusual way: the PackGo is the smallest of the three screens (27 inches) but the most expensive, because the price is paying for the briefcase build and stronger audio/charging, not a bigger panel. For a stationary dorm setup, the 32-inch offers the most screen and the longest battery life for the money; the 24-inch is the pick if budget matters more than screen size or battery runtime; the PackGo only makes sense if the TV genuinely needs to survive being packed and moved.",
      "occasionSlug": "back-to-school",
      "categorySlug": "smart-displays",
      "productSlugs": [
        "apolosign-24-inch-smart-portable-tv",
        "apolosign-32-inch-smart-portable-tv",
        "apolosign-packgo-27-portable-tv"
      ],
      "picks": [
        {
          "productSlug": "apolosign-24-inch-smart-portable-tv",
          "pickLabel": "Smallest & Least Expensive",
          "blurb": "24 inches, 1080p only, $619. Runs on a 6800mAh battery rated for about 4 hours at 50% brightness — the shortest of the three — and tops out at 250 nits of brightness, the dimmest of the lineup. It's the only one of the three with AirPlay and Miracast casting support in addition to standard Wi-Fi/Bluetooth/HDMI."
        },
        {
          "productSlug": "apolosign-32-inch-smart-portable-tv",
          "pickLabel": "Largest Wheeled Option",
          "blurb": "32 inches, with a choice of 1080p or 4K panel, $719. Its 15000mAh battery is rated for the longest runtime of the three (~6 hours at 50% brightness), and it's the only size offered with a 4K panel and up to 256GB of storage. Brightness is rated at 300 nits."
        },
        {
          "productSlug": "apolosign-packgo-27-portable-tv",
          "pickLabel": "Built to Travel",
          "blurb": "27 inches, 1080p only, $999 — the most expensive of the three, and the only one built into a rugged briefcase with a handle and latch instead of a wheeled stand. It's also the brightest at 450 nits and the only one with a built-in 40W speaker system and 45W USB-C fast charging capable of powering other devices."
        }
      ],
      "faqs": [
        {
          "question": "Which one has the best battery life?",
          "answer": "The 32-inch is rated for the longest runtime at up to ~6 hours at 50% brightness, matching the PackGo's ~6-hour rating; the 24-inch is rated lowest at ~4 hours, per each product's listed battery specifications."
        },
        {
          "question": "Is the 4K option worth it on the 32-inch?",
          "answer": "The 4K variant of the 32-inch adds a higher-resolution panel and steps up to 256GB storage (versus 128GB on the 1080p variant) for the same 16GB of RAM — whether it's worth the difference depends on whether the room will be used for close-up detail work like gaming or reading, versus general streaming where 1080p is usually sufficient."
        },
        {
          "question": "Can I use these outdoors?",
          "answer": "The PackGo is the only one of the three explicitly built and marketed for outdoor/travel use, with the brightest panel (450 nits) and a rugged briefcase enclosure; the 24-inch and 32-inch are designed around an indoor wheeled stand."
        }
      ],
      "metaTitle": "Best Portable TV for College Dorms 2026",
      "metaDescription": "Comparing ApoloSign's 24-inch, 32-inch, and PackGo 27-inch portable Android TVs on battery, brightness, and price for dorm rooms.",
      "coverImageUrl": "https://media.gettrendyfinds.com/PackGo_Grey_PI01.webp",
      "publishedAt": "2026-07-31T00:00:00.000Z",
      "publish": true
    },
    {
      "slug": "digital-calendar-for-students-stay-on-top-of-deadlines",
      "title": "Digital Calendar for Students: Stay on Top of Deadlines Without the Clutter",
      "excerpt": "A look at ApoloSign's four digital calendar sizes — what actually changes between the 15.6-inch, 21.5-inch, 27-inch, and 27-inch 4K models.",
      "intro": "A shared digital calendar can replace a whiteboard or a stack of sticky notes for tracking assignment deadlines, exam dates, and a class schedule — without needing anyone to remember to update a paper planner. ApoloSign makes four sizes of the same idea, and the differences between them are more about screen size, mounting, and which calendar services they sync than about the core feature set, which is the same across all four: no-subscription sync with major calendar apps, a chore/reward tracker, meal planning, and Google Photos integration.",
      "verdict": "For a dorm desk specifically, the 15.6-inch is the only size actually built for it — everything larger is wall-mount only. For a shared room or common space where the calendar needs to be readable from across the room, the 27-inch (or the 4K version, for sharper text and photos) makes more sense than stepping up from the 21.5-inch.",
      "occasionSlug": "back-to-school",
      "categorySlug": "smart-displays",
      "productSlugs": [
        "apolosign-15-6-digital-calendar",
        "apolosign-21-5-digital-calendar",
        "apolosign-27-digital-calendar",
        "apolosign-27-4k-digital-calendar"
      ],
      "picks": [
        {
          "productSlug": "apolosign-15-6-digital-calendar",
          "pickLabel": "Best for a Desk",
          "blurb": "The only size in the lineup that ships with a desk stand in addition to a wall mount bracket, making it the one built to actually sit on a desk rather than requiring a wall mount. It syncs Google, Outlook, and iCloud calendars, at $279 — the least expensive of the four."
        },
        {
          "productSlug": "apolosign-21-5-digital-calendar",
          "pickLabel": "Best Mid-Size",
          "blurb": "A step up to a 21.5-inch panel for readability from across a room, at $379. It carries the same calendar sync and chore-tracking features as the 15.6-inch model, but ships wall-mount only, with no desk stand included."
        },
        {
          "productSlug": "apolosign-27-digital-calendar",
          "pickLabel": "Best for a Shared Space",
          "blurb": "The largest 1080p size at $579, with a VESA 100×100mm wall-mount pattern for standard mounting hardware. It syncs a wider set of calendar services than the two smaller sizes — Yahoo and Cozi, in addition to Google, Apple, and Outlook."
        },
        {
          "productSlug": "apolosign-27-4k-digital-calendar",
          "pickLabel": "Best Display Quality",
          "blurb": "The only 4K panel in the calendar lineup, at $679, with the same wide calendar-sync support as the 27-inch 1080p model plus Google Assistant with Gemini AI for voice control. RAM and storage (4GB/64GB) are unchanged from the cheaper models despite the sharper panel."
        }
      ],
      "faqs": [
        {
          "question": "Do I need to pay a subscription to sync my calendar?",
          "answer": "No — ApoloSign markets all four calendar sizes as subscription-free for calendar sync, chore tracking, meal planning, and Google Photos integration, per each product's listed description."
        },
        {
          "question": "Which calendar apps do these sync with?",
          "answer": "The 15.6-inch and 21.5-inch sync Google, Outlook, and iCloud calendars; the 27-inch and 27-inch 4K add Yahoo and Cozi to that list, per their listed descriptions."
        },
        {
          "question": "What's actually different about the 4K model versus the regular 27-inch?",
          "answer": "The panel resolution (3840×2160 versus 1920×1080) and the addition of Google Assistant with Gemini AI voice control — RAM, storage, and the rest of the feature set are the same between the two, based on their listed specifications."
        },
        {
          "question": "Can any of these sit on a desk instead of being mounted to a wall?",
          "answer": "Only the 15.6-inch ships with a desk stand included; the 21.5-inch, 27-inch, and 27-inch 4K are wall-mount only, per their listed contents."
        }
      ],
      "metaTitle": "Digital Calendar for Students: Compare 4 Sizes",
      "metaDescription": "Comparing ApoloSign's 15.6-, 21.5-, 27-inch, and 27-inch 4K digital calendars for students — mounting, sync, and price.",
      "coverImageUrl": "https://media.gettrendyfinds.com/DigitalCalendar_FA2769_4K_Oak_P1.png",
      "publishedAt": "2026-07-31T00:00:00.000Z",
      "publish": true
    },
  ],
}
