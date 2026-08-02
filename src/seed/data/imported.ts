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
      excerpt: '🚀 Say hello to the KOKUYO Mag CRITZ NEO Pencil Case in Light Blue 💙—the ultimate 2-in-1 KOKUYO expandable pen case that’s as stylish as it is functional! ✨…',
      description: '🚀 Say hello to the KOKUYO Mag CRITZ NEO Pencil Case in Light Blue 💙—the ultimate 2-in-1 KOKUYO expandable pen case that’s as stylish as it is functional! ✨ This sleek organizer transforms from a magnetic pencil stand case to a roomy holder for all your stationery must-haves! 🎨✏️ Need more space? No worries! Its expandable design gives you extra room while staying compact and portable! 👜 Plus, it’s crafted from high-quality textile for long-lasting durability. 💪 But wait, there’s more! This case also doubles as a phone stand, making it the perfect Neo Critz stationery organizer for busy bees who need everything in one place! 🐝 Whether for school, work, or home, this is one of the most stylish desk accessories by KOKUYO that keeps your desk clutter-free and your essentials within reach! 🖊️📱\nSpecifications\nDimensions: 90mm x 75mm x 175mm.\nWeight: 127g.\nColor: Blue',
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
      excerpt: '🍕 Get ready for a slice of fun with our Pizza Novelty Pencil Case! This pizza pencil case is perfect for adding a delicious twist to your stationery…',
      description: '🍕 Get ready for a slice of fun with our Pizza Novelty Pencil Case! This pizza pencil case is perfect for adding a delicious twist to your stationery collection. Shaped like a whole pan of pizza, complete with realistic pepperoni, cheese, and a crispy crust, this pizza-themed stationery is as quirky as it gets! 😄🖊️\nMade from soft, high-quality canvas, this funny pizza pencil pouch is durable and has a delightful texture. It’s the ideal pizza design pencil case for storing pens, pencils, and other small items. 🎨 Whether you’re at school or just want a fun way to organize your desk, this quirky pizza pen case will bring a smile to your face. It even has gartered slots to keep your things secure and orderly. Perfect for boys, girls, and lovers of cute stationery! 🌟📚\nSpecificationsMaterial: CanvasSize: 22cm DiameterWeight: 32g',
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
      excerpt: '🌯 Introducing the Burrito Roll Novelty Pencil Case! This funny burrito pencil case is the quirkiest way to store your stationery. It looks just like a burrito…',
      description: '🌯 Introducing the Burrito Roll Novelty Pencil Case! This funny burrito pencil case is the quirkiest way to store your stationery. It looks just like a burrito or tortilla roll pen holder, adding a hilarious twist to your school supplies! 😂🖊️\nMade from soft canvas, this burrito wrap pencil pouch is durable and feels great to touch. It\'s perfect for keeping your pens, pencils, and other small items safe and organized. Plus, it\'s equipped with gartered slots to keep everything in place. 🎨📚\nThis novelty stationery burrito is great for boys and girls and can even double as a makeup case or charging cable organizer. Talk about versatile! 🌟 Whether you call it a quirky burrito pen case or a taco-shaped pencil holder, it\'s the cutest addition to your cute stationery collection. 🍀💖\nSpecificationsMaterial: CanvasSize: 22cm DiameterWeight: 32g',
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
      excerpt: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a…',
      description: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a sleek design to enhance your everyday writing experience.\nFeatures: \nIntegrated Convenience: Features an elastic band for attaching directly to your notebook.\nUnmatched Portability: Seamlessly combines with your notebook for unparalleled convenience.\nSelective Carry: Carry only the essential stationery items you need.\nSize: 170 mm x 35 mm / 6.7 inch x 1.3 inch',
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
      excerpt: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a…',
      description: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a sleek design to enhance your everyday writing experience.\nFeatures: \nIntegrated Convenience: Features an elastic band for attaching directly to your notebook.\nUnmatched Portability: Seamlessly combines with your notebook for unparalleled convenience.\nSelective Carry: Carry only the essential stationery items you need.\nSize: 170 mm x 35 mm / 6.7 inch x 1.3 inch',
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
      excerpt: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a…',
      description: 'New arrivals! Elastic Band Pen Pouch - The Ultimate in Portability. Crafted with functionality and style in mind, this pen pouch combines convenience with a sleek design to enhance your everyday writing experience.\nFeatures: \nIntegrated Convenience: Features an elastic band for attaching directly to your notebook.\nUnmatched Portability: Seamlessly combines with your notebook for unparalleled convenience.\nSelective Carry: Carry only the essential stationery items you need.\nSize: 170 mm x 35 mm / 6.7 inch x 1.3 inch',
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
      excerpt: 'Introducing our Zipper Pen Pouch – the perfect blend of creativity and functionality for your everyday needs. Features: Surprising Design: Fully unzipped, it…',
      description: 'Introducing our Zipper Pen Pouch – the perfect blend of creativity and functionality for your everyday needs.\nFeatures: \nSurprising Design: Fully unzipped, it transforms into a flat cloth piece; zipped up, it becomes a pen pouch.\nMonster Chic: Shaped like a quirky monster with watchful eyes.\nEndless Fun: Super fun to play with and a great time killer.\nSize: 205 mm x 85 mm / 8 inch x 3.3 inch',
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
      excerpt: 'Looking for a stylish and practical way to store your pens and pencils? The Kokuyo Panda Pencil Case is the perfect solution! With its adorable cartoon panda…',
      description: 'Looking for a stylish and practical way to store your pens and pencils? The Kokuyo Panda Pencil Case is the perfect solution! With its adorable cartoon panda design, this multi-functional and large capacity pencil case is great for kids and students alike. The spacious interior can hold a variety of writing utensils, as well as other small items like erasers, rulers, and sticky notes. Made from high-quality canvas material, this panda pencil pouch is durable and long-lasting, ensuring that your pens and pencils stay safe and secure. Whether you\'re headed to school, work, or just need a cute storage solution for your writing materials, the Canvas Panda Pencil Case is the perfect choice!\nFeatures: \nthe L-Shaped design - effortlessly stash and retrieve your essentials anytime!\nWith its clever outer pocket design, organizing small items and notes is a breeze.\nThe convenient side handle makes it easy to grab and go, perfect for on-the-move convenience.\nSize: 200 mm x 100 mm x 45 mm / 7.8 inch x 3.9 inch x 1.7 inch',
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
      excerpt: 'Discover the perfect blend of style and organization with the Classic Dual-Zippered Pencil Case. Featuring two spacious compartments with smooth zippers, it\'s…',
      description: 'Discover the perfect blend of style and organization with the Classic Dual-Zippered Pencil Case. Featuring two spacious compartments with smooth zippers, it\'s designed to keep stationery neatly sorted and easily accessible. Plus, with an additional zipper pocket on the front, you have extra space to store smaller items like erasers and paper clips. Crafted for durability and timeless elegance, this pencil case is an essential addition to every individual\'s everyday carry. Whether you\'re a student, artist, or professional, enjoy the convenience and sophistication of this versatile accessory. Elevate your organization game with the Classic Dual-Zippered Pencil Case today.\nSize: 210 mm x 90 mm x 55 mm / 8.2 inch x 3.5 inch x 2.1 inch',
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
      excerpt: 'Discover the perfect blend of style and organization with the Classic Dual-Zippered Pencil Case. Featuring two spacious compartments with smooth zippers, it\'s…',
      description: 'Discover the perfect blend of style and organization with the Classic Dual-Zippered Pencil Case. Featuring two spacious compartments with smooth zippers, it\'s designed to keep stationery neatly sorted and easily accessible. Plus, with an additional zipper pocket on the front, you have extra space to store smaller items like erasers and paper clips. Crafted for durability and timeless elegance, this pencil case is an essential addition to every individual\'s everyday carry. Whether you\'re a student, artist, or professional, enjoy the convenience and sophistication of this versatile accessory. Elevate your organization game with the Classic Dual-Zippered Pencil Case today.\nSize: 210 mm x 90 mm x 55 mm / 8.2 inch x 3.5 inch x 2.1 inch',
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
      excerpt: 'The Classic Large Pencil Case can store and organize up to 30-50 pens or pencils, along with other gadgets. Its unique shape allows it to hold a calculator or…',
      description: 'The Classic Large Pencil Case can store and organize up to 30-50 pens or pencils, along with other gadgets. Its unique shape allows it to hold a calculator or ruler. The main compartment provides a clear view of your supplies, and there\'s a separate compartment for small notes and cards. It\'s not just a pencil case; you can use it for travel or as a cosmetic bag. The high-quality zipper ensures easy opening and closing, and there\'s an interlayer for secure storage and protection. It\'s the perfect gift for graduation, birthdays, back-to-school, or Christmas.Size: 90 mm x 220 mm x 130 mm / 3.5 inch x 8.6 inch x 5.1 inch',
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
      excerpt: 'The Classic Large Pencil Case can store and organize up to 30-50 pens or pencils, along with other gadgets. Its unique shape allows it to hold a calculator or…',
      description: 'The Classic Large Pencil Case can store and organize up to 30-50 pens or pencils, along with other gadgets. Its unique shape allows it to hold a calculator or ruler. The main compartment provides a clear view of your supplies, and there\'s a separate compartment for small notes and cards. It\'s not just a pencil case; you can use it for travel or as a cosmetic bag. The high-quality zipper ensures easy opening and closing, and there\'s an interlayer for secure storage and protection. It\'s the perfect gift for graduation, birthdays, back-to-school, or Christmas.Size: 90 mm x 220 mm x 130 mm / 3.5 inch x 8.6 inch x 5.1 inch',
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
      title: '⚡ MINISO x Harry Potter Magic Mirror Blind Box | Cute Wizard & Pet Figures! 🦉✨',
      excerpt: 'Are you ready for some real magic? ⚡ Welcome to the Harry Potter Magic House! This is not just a normal toy. This blind box has a super cool secret: it uses a…',
      description: 'Are you ready for some real magic? ⚡ Welcome to the Harry Potter Magic House!\nThis is not just a normal toy. This blind box has a super cool secret: it uses a magic mirror! 🪞✨\nHere is how the magic works:\n👀 Look from the front: You will see your favorite wizard! 🧙♂️\n🔄 Turn it to the side: Whoa! The mirror magically shows their cute animal pet! 🦉🐾\nThe toy is actually a half-figure, but the mirror makes it look whole. It is so much fun to play with and looks amazing on your desk!\n🪄 Who will you get? There are 6 fun designs to collect, plus 1 SUPER RARE secret design! You might find:\n⚡ Harry Potter & Hedwig (The Snowy Owl) Hedwig was Harry\'s very first birthday gift in the magical world! She is a beautiful white owl who delivers his letters and is his most loyal friend. 🦉✉️\nRegular Design: Harry is wearing his cool wizard hat and school uniform, and Hedwig is looking naturally adorable! 🧙♂️\nSUPER RARE Secret Design: Harry takes off his hat, and guess what? Hedwig is wearing a tiny, super cute school scarf! 🧣✨ This one is very hard to find!\n📚 Hermione Granger & Crookshanks (The Fluffy Cat) Crookshanks is Hermione\'s super smart, fluffy orange cat. He might look a little grumpy, but he is very brave and always protects his friends! 🐈📙\n🐀 Ron Weasley & Scabbers (The Rat) Scabbers is Ron\'s funny and lazy pet rat. Ron\'s older brother gave the rat to him. Scabbers loves to sleep all day in Ron\'s pocket! 💤🐭\n🍏 Draco Malfoy & The White Ferret This is a super funny story! A magic teacher once turned Draco into a bouncy white ferret because Draco was being mean. It is one of the funniest moments at Hogwarts! 😂🐾\n🐕 Rubeus Hagrid & Fang (The Big Dog) Fang is Hagrid\'s giant pet dog. He looks really big and scary, but do not worry! He is actually a big softie who gets scared easily and loves lots of hugs! 🐶🌲\n🦅 Albus Dumbledore & Fawkes (The Phoenix) Fawkes is a magical red bird called a phoenix. When he gets old, he bursts into flames and is born again from the ashes! His magical tears can heal any wound. 🔥✨\n(Note: The fun of a blind box is that you never know who is inside until you open it! 🎁)\n🛒 Choose Your Magic:\n🎁 Single Blind Box: Get 1 box for a fun surprise!\n📦 Full Set of 6: Want them all? Get a box of 6 and build your own magic world!\nPerfect for your room, your bookshelf, or as a sweet gift for your best friend. Grab yours today and let the magic begin! 🏰💖\n🎲 How the Blind Box Magic Works!\nIf you are buying the Full Set of 6, here are the magical rules you need to know:\n🚫 No Doubles: A Full Set comes with 6 boxes. You will get 6 completely different figures. You will never get the same one twice!\n🍀 Super Rare Secret: The chance to find the Secret Harry design is 1 out of 72 boxes. You need lots of luck!\n🪄 The Magic Swap: Usually, a Full Set will give you all 6 regular characters. BUT, if you are lucky enough to find the Secret Design inside your box, it will magically take the place of one regular figure (so you will get 5 regular figures + 1 secret figure).',
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
      excerpt: 'Meet your new favorite IRL NPCs! 🎮✨ Straight out of the Mecha Chameleon universe, this adorable, 3D-printed white "Little Guy" is ready to spawn into your…',
      description: 'Meet your new favorite IRL NPCs! 🎮✨\nStraight out of the Mecha Chameleon universe, this adorable, 3D-printed white "Little Guy" is ready to spawn into your real life! This is the ultimate 8-piece starter pack for creative souls, gamers, and pranksters alike. Coming in as a completely blank canvas, these little dudes are just waiting for you to give them a custom skin.\nWhether you\'re looking for a relaxing DIY painting project, a quirky desk accessory, or the ultimate prop for your next viral TikTok, this squad of 8 has you covered.\n🎮 8 Unlockable Poses (The Full Squad!):\nThe "Default Spawn" (Standing): Ready for action (or just hanging out by your monitor).\nThe "AFK" (Lying on Side): Taking a much-needed nap on your keyboard.\nThe "Game Over" (Holding Head): Perfect for when you remember that email you forgot to send.\nThe "Splat" (Spread Eagle): Maximum relaxation... or took fall damage.\nThe "Victory Royale" (Hands Raised): Cheering you on while you work!\nThe "Stealth Mode" (Curled Up): Hiding from responsibilities.\nThe "Looting" (Bending Over): Investigating your snack drawer.\nThe "Lobby Wait" (Sitting Cute): Patiently waiting for your next adventure.\n📏 Specs & Stats:\nSize: The standing figure measures approximately 3.1 inches tall (the perfect fun-sized companion to fit in your pocket or palm!).\nMaterial: High-quality, lightweight 3D-printed resin/filament with a smooth, matte white finish that holds paint beautifully.\n🎨 How to Play (Endless Co-op Modes):\nCustomize Your Skin: Grab your acrylic markers, paints, or gel pens! These figures are the perfect DIY art project to design your own custom characters.\nIRL Side Quests & Scavenger Hunts: Paint them in funky colors and hide them around your house, at the office, or even across your city! Create a real-life geocaching game for your friends or strangers to find.\nTikTok & Reels Main Character: Take them on adventures! Their expressive, goofy poses make them the ultimate stars for stop-motion videos, vlog cameos, and trend-hopping shorts.\nAdd to Cart to spawn your squad today and let the games begin! 🛒👾',
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
      title: 'Arknights: Endfield "Gugugaga" Gugu Series 🐧 | Kawaii Plushies & Charms - Starting from $1.50! ✨',
      excerpt: 'Gugugaga Gugu: The Ultimate Loot for Every Administrator! 🐧🎒 Collect the cutest mascot from Arknights: Endfield at an unbelievable price! Whether you\'re…',
      description: 'Gugugaga Gugu: The Ultimate Loot for Every Administrator! 🐧🎒\nCollect the cutest mascot from Arknights: Endfield at an unbelievable price! Whether you\'re decorating your gaming den or your school bag, we have the perfect Gugu for you:\n☁️ Super Soft Gugu Plushies (Cozy Vibes Only!)\nGugu Plush (25cm / 9.8") — Your perfect desktop hugger! 🏠 —— $11.00\nGugu Plush (35cm / 13.8") — Jumbo size for maximum squishiness! ☁️ —— $14.30\n🎨 Collector\'s Duo\nGugu Figure Set (Pack of 2) — Twice the Gugu, twice the fun! 🏆 —— $11.00\n🔑 Tiny Treasures (Only $1.50!)\nPlush Gugu Keychain — Take your squishy friend on the go! 🧸 —— $1.50\nAcrylic Charm (Design A/B/C/D) — Aesthetic vibes for your pencil case! ✨ —— $1.50 each\n📝 Why You Need the Gugu Collection? 💖\nDirect from Talos-II, the viral "Gugugaga" mascot is taking over! 🌪️ These are the ultimate "little treats" for yourself or your fellow Doctors and Administrators.\nUltra-Affordable: Starting at just $1.50, it’s the perfect addition to hit that "Free Shipping" goal! 🛒\nPremium Quality: Don\'t let the price fool you—our plushies are ultra-soft and our acrylics are crystal clear! 💎\nEndfield Aesthetics: Perfectly captures the tech-wear and kawaii fusion of Arknights: Endfield. 🛰️❄️',
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
      title: '[2026 New Full Set] Zebra Mildliner Mix Dual-Color Highlighters - Set of 10 New Aesthetic Gradient Shades',
      excerpt: 'Elevate Your Notes with the 2026 Zebra Mildliner Mix! ☁️✨ Ready to level up your journaling game? The fan-favorite Zebra Mildliner Mix is BACK for 2026 with an…',
      description: 'Elevate Your Notes with the 2026 Zebra Mildliner Mix! ☁️✨\nReady to level up your journaling game? The fan-favorite Zebra Mildliner Mix is BACK for 2026 with an expanded palette of 10 stunning two-tone combinations (Q1-Q10)! 🖊️💎\nForget switching pens to get that perfect ombre look. Each highlighter features a revolutionary split-ink chisel tip 🖌️ that blends two complementary shades into a seamless, dreamy gradient with just one stroke. It’s not just a marker; it’s a tiny piece of Japanese engineering magic for your pencil case! 🇯🇵✨\nWhy You’ll Obsess Over It: 💖\n🌈 Magical Gradients: The unique chisel tip delivers a beautiful two-tone effect, perfect for creating artistic headers, borders, and decorative swatches.\n👁️ Gentle on the Eyes: Featuring the iconic Mildliner water-based pigment ink. It’s soft, muted, and won\'t bleed through your favorite 160gsm paper! 📑✅\n✨ 2026 New Palette (Q1-Q10): From the refreshing Summer Green & Mild Blue 🌊 to the dreamy Lavender & Fuchsia 🌸, we’ve got all 10 new colorways in stock!\n🧼 Self-Cleaning Tip: Don’t worry about the colors getting muddy. The tip is designed to refresh itself, keeping your highlights crisp and vibrant every single time. ✨\n🖊️ Versatile Chisel Nib: Use the broad side for bold highlighting or the edge for delicate underlining. (Note: This is a single-ended professional tool! 🎯)\nPerfect For Your 2026 Planner! 📅\nWhether you’re decorating your Hobonichi, color-coding your Studygram notes, or just adding a pop of color to your Bullet Journal, the Mildliner Mix is your new best friend. 🎒☁️\n🌈 Color Guide (Find Your Vibe):\n🎨 The Official 2026 Zebra Mildliner Mix Color Guide\nMild Summer Green & Mild Blue 🌊\nMild Coral Pink &  Mild Lemon Yellow 🍊\nMild Lavender & Mild Fuchsia 🌸 \nMild Magenta & Mild Arpicot 🌌\nMild Cyan & Mild Sherbet Yellow 🍋\nMild Lavender & Mild Summer Green 🌿 \nMild Fuchsia & Mild Pink 🍬 \nMild Violet & Mild Blue❄️  \nMild Coral Pink & Mild Lemon Yellow 🍐\nMild Cyan & Mild Blue 💎\n(Collect all 10 for the ultimate aesthetic desk setup! 🎀)',
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
      excerpt: 'Flip tiles, match characters, and battle your friends. This cute tile game comes in two fun designs.Choose the style you like and start the game. Sanrio…',
      description: 'Flip tiles, match characters, and battle your friends.\nThis cute tile game comes in two fun designs.Choose the style you like and start the game.\nSanrio Edition – play with adorable Sanrio characters.\nLabubu Italian Brainrot Edition – playful Labubu characters with funny internet meme energy.\nEach set includes 48 tiles and is designed for two players.\nPlace the tiles face down, take turns flipping them, and see what you get.\nIf the tile matches your side, keep playing.If it belongs to your opponent, give it to them.\nSimple rules. Cute characters. Endless surprises.\nKey Features\nTwo Designs to Choose FromPick your favorite style: Sanrio or Labubu Italian Brainrot.\nFun 2-Player Battle GameChallenge a friend and see who collects the most tiles.\nEasy to LearnSimple rules make it perfect for kids, teens, and adults.\nLuck-Based GameplayNo speed needed. Every flip is a surprise.\nGreat Gift IdeaPerfect for collectors, game nights, and desk fun.',
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
      excerpt: 'Rainbow Color Matching & Counting Toy – Wooden Montessori Sorting Game for Kids Learning Colors and Numbers | Brain Exercise Activity for Seniors Learning can…',
      description: 'Rainbow Color Matching & Counting Toy – Wooden Montessori Sorting Game for Kids Learning Colors and Numbers | Brain Exercise Activity for Seniors\nLearning can be simple and fun.\nThis rainbow wooden toy helps kids learn colors, numbers, and patterns.Children can stack the beads, match colors, and practice counting while playing.\nThe bright rainbow colors make learning exciting and easy to understand.\nKids can explore:\ncolor matching\ncounting\nsorting\nsimple math\nThis toy is also great for seniors.Matching colors and moving the beads helps keep the brain active and focused.\nIt can be used for:\npreschool learning\nMontessori activities\nclassroom math practice\nbrain exercise for seniors\nPlaying with colors and patterns is a fun way to train the mind at any age.\nKey Features\nFun Way to Learn ColorsKids match the beads by color and build rainbow patterns.\nPractice Counting and Early MathChildren learn numbers and simple math through play.\nMontessori Style LearningHands-on activities help kids understand concepts faster.\nGreat Brain Exercise for SeniorsColor matching and sorting help keep the brain active.\nBright Rainbow DesignColorful beads make learning fun and easy to follow.\nWho This Toy Is For\nPerfect for:\nPreschool children learning numbers\nMontessori classrooms\nParents teaching math at home\nSeniors looking for brain games\nMemory care activities\nGreat for family learning time.\nKids can learn colors and numbers.Grandparents can also enjoy matching colors and keeping their minds active.\nA simple toy that brings learning and brain exercise to every generation.',
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
      excerpt: 'Create your own glowing cloud and turn any room into a cozy, aesthetic space ☁️✨This beginner-friendly DIY kit lets you design a cloud lamp exactly the way you…',
      description: 'Create your own glowing cloud and turn any room into a cozy, aesthetic space ☁️✨This beginner-friendly DIY kit lets you design a cloud lamp exactly the way you want - soft, dreamy, and totally unique.\nPerfect for bedrooms, desks, dorm rooms, and creative setups.\n☁️ What Is This?\nThis Cloud Lamp DIY Kit lets you build your own cloud-shaped LED light from scratch.You choose the shape. You choose the size. You choose the vibe.\nNo wiring. No tools. Just creativity.\n✨ What Can You Make With It?\n400cm KitPerfect for desk, bedside, or wall cloudsCozy accent light for study spacesCovers roughly an A3–A2 sized cloud shape\n800cm KitIdeal for ceiling clouds or room cornersCreates a dramatic, full-room aestheticCovers approximately 1–1.5m wide designsTip: If you want a bold, Instagram-style room setup, we recommend the 800cm kit.、\n📦 What’s Included\nUSB control cable with integrated LED light strip (400cm or 800cm)Premium cotton fillingNano adhesive tape × 2 rolls\n🧠 What You Need to Prepare\nCardboard or foam board (for shaping)ScissorsOptional: glue gun for more complex designs\n🛠️ How to Make Your Cloud Lamp\n1. Cut your cloud shape from cardboard2. Attach the LED strip along the shape3. Cover it with cotton using nano tape4. Plug in, turn on, and enjoy ✨\nBeginner-friendly and safe — no soldering or electrical work required.\n🌈 Lighting & Power\nMultiple light color modesEasy USB inline controlUSB powered (works with power banks, adapters, or computers)Low heat LED, suitable for bedroom use\nSwitch the lighting anytime to match your mood.\n🎨 Perfect For\nbedroom & dorm room decorStudy desk aestheticsCreative DIY loversContent creators & room makeover videosA unique gift for students and creatives\n⚠️ Notes\nThis is a DIY decorative light, not a toyFor indoor decorative use onlyFinal size depends on your design and layout',
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
      excerpt: '🖊️🐭 Make everyday writing feel magical with the Uni-ball Signo RT Mickey Mouse gel pen! 🎩✨ This Disney limited edition Uni-ball 0.5mm pen features…',
      description: '🖊️🐭 Make everyday writing feel magical with the Uni-ball Signo RT Mickey Mouse gel pen! 🎩✨ This Disney limited edition Uni-ball 0.5mm pen features everyone’s favorite mouse wrapped around the barrel in a charming, collectible design that’s full of fun and nostalgia! 🎉📚\nCrafted with Uni-ball’s water-resistant black gel ink, a rounded 0.5mm tip for smooth gliding, and a comfy rubber grip, this pen isn’t just adorable—it performs like a pro. 💪 Whether you\'re jotting down notes, journaling, or adding a pop of Disney to your desk, this pen brings a smile to every page. 😄📝\nRefillable and built with a durable steel point, the Mickey Mouse Uni-ball Signo RT is a must-have for Disney fans, students, and cute stationery lovers alike. Add a little Mickey magic to your pen case today! 🎈📖🎁\nSpecifications\nTip size: 0.5 mm\nInk Color: Black\nLength: 140 mm / 5.5 inch\nInk Type: Gel ink\nMechanism: Retractable click pen\nGrip: Textured rubber grip \nRefillable: Yes, compatible with standard Uni-ball gel refills',
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
      excerpt: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series…',
      description: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series features your favorite fairytale icons like—Rapunzel, Belle, or Snow White—in dreamy, detailed designs that wrap around the barrel like enchanted scrolls. 👸🌹🍎🌟\nThis 0.5mm Uni-ball gel pen Princess series glides like a wish come true, with water-resistant, vibrant black gel ink, a rounded tip for silky-smooth strokes, and a comfy textured rubber grip for long writing spells. 🖊️✨ Whether you\'re journaling, note-taking, or adding a regal touch to your planner, this pen is cute, collectible, and totally functional!\nRefillable and designed to dazzle, each Disney Princess collectible writing pen is a must for princess fans, stationery lovers, and daydream believers alike! 💖🏰📝\nSpecifications Tip size: 0.5 mm Ink Color: Black Length: 140 mm / 5.5 inch Ink Type: Gel ink Mechanism: Retractable click pen Grip: Textured rubber grip Refillable: Yes, compatible with standard Uni-ball gel refills',
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
      excerpt: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series…',
      description: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series features your favorite fairytale icons like—Rapunzel, Belle, or Snow White—in dreamy, detailed designs that wrap around the barrel like enchanted scrolls. 👸🌹🍎🌟\nThis 0.5mm Uni-ball gel pen Princess series glides like a wish come true, with water-resistant, vibrant black gel ink, a rounded tip for silky-smooth strokes, and a comfy textured rubber grip for long writing spells. 🖊️✨ Whether you\'re journaling, note-taking, or adding a regal touch to your planner, this pen is cute, collectible, and totally functional!\nRefillable and designed to dazzle, each Disney Princess collectible writing pen is a must for princess fans, stationery lovers, and daydream believers alike! 💖🏰📝\nSpecifications\nTip size: 0.5 mm\nInk Color: Black\nLength: 140 mm / 5.5 inch\nInk Type: Gel ink\nMechanism: Retractable click pen\nGrip: Textured rubber grip \nRefillable: Yes, compatible with standard Uni-ball gel refills',
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
      excerpt: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series…',
      description: '👑✨Bring a touch of royal magic to your writing with the Uni-ball Signo RT Disney Princess gel pen! 💫 This limited edition Disney Princess stationery series features your favorite fairytale icons like—Rapunzel, Belle, or Snow White—in dreamy, detailed designs that wrap around the barrel like enchanted scrolls. 👸🌹🍎🌟\nThis 0.5mm Uni-ball gel pen Princess series glides like a wish come true, with water-resistant, vibrant black gel ink, a rounded tip for silky-smooth strokes, and a comfy textured rubber grip for long writing spells. 🖊️✨ Whether you\'re journaling, note-taking, or adding a regal touch to your planner, this pen is cute, collectible, and totally functional!\nRefillable and designed to dazzle, each Disney Princess collectible writing pen is a must for princess fans, stationery lovers, and daydream believers alike! 💖🏰📝\nSpecifications Tip size: 0.5 mm Ink Color: Black Length: 140 mm / 5.5 inch Ink Type: Gel ink Mechanism: Retractable click pen Grip: Textured rubber grip Refillable: Yes, compatible with standard Uni-ball gel refills',
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
      excerpt: 'Hey, wanna know where to find the Sanrio stationary version of TikTok\'s lucky scoop? You\'ve come to the right place!💖Introducing our awesome Lucky Scoop! It\'s…',
      description: 'Hey, wanna know where to find the Sanrio stationary version of TikTok\'s lucky scoop? You\'ve come to the right place!💖Introducing our awesome Lucky Scoop! It\'s like a magical surprise waiting for you online! It costs $25.99 and comes with around 30-40 cool things, which is a great deal for anyone who loves stationery.🪄Inside, you\'ll find stuff from Sanrio, like Cinnamoroll, Hello Kitty, My Melody, and Pompompurin. There are stickers, erasers, mechanical pencils, mini notebooks, gel pens, and more – all in one scoop!🎁Every single scoop process will be broadcasted and recorded live on our YouTube channel. Today\'s your chance to witness your favorite stationery being scooped up and taken home!📢Please Note:-The scoop can not be customized.-Some items will be repeated.-One scoop about has 30-40 items.',
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
      excerpt: 'Bring home your favorite Sanrio duo of My Melody & Kuromi with the adorable Sanrio My Melody & Kuromi Sweetheart Pajamas Blind Box Series by Sanrio x Miniso.…',
      description: 'Bring home your favorite Sanrio duo of My Melody & Kuromi with the adorable Sanrio My Melody & Kuromi Sweetheart Pajamas Blind Box Series by Sanrio x Miniso. Each box contains either My Melody or Kuromi in a fun pajamas themed collectible. Come bring home this fun series today!\nEach figure stands at approximately 3 inches tall and comes mystery packed so you never know what figure you will get until you open the box!\nThere are 6 different designs to collect + 1 hidden edition.\nBlind Box Rule:\nBlind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that show a collection; some figures are rarer to find than others, these are referred to as "secret", "hidden" or "chase" figures.\n* No refund or return policy once this product is sold.',
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
      excerpt: 'Delight in the cuteness of Sanrio\'s My Melody with the Secret Forest Tea Party Blind Box! Collect all 6 designs and 1 secret to have your very own tea party in…',
      description: 'Delight in the cuteness of Sanrio\'s My Melody with the Secret Forest Tea Party Blind Box! Collect all 6 designs and 1 secret to have your very own tea party in the forest! Taste the sweetness of the Sanrio world!\nEach figure stands at approximately 3 inches tall and comes mystery packed so you never know what figure you will get until you open the box!\nThere are 6 different designs to collect + 1 hidden edition\nBlind Box Rule:\nBlind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that show a collection; some figures are rarer to find than others, these are referred to as "secret", "hidden" or "chase" figures.\n* No refund or return policy once this product is sold.',
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
      excerpt: 'Meet "Ralph Breaks the Internet" Series! 🎉 Vanellope and the Disney Princesses are feeling comfy with their adorable pajamas! Have your own princess pajama…',
      description: 'Meet "Ralph Breaks the Internet" Series! 🎉  Vanellope and the Disney Princesses are feeling comfy with their adorable pajamas!  Have your own princess pajama party with our new collection of Belle, Jasmine, Mulan, and the rest of this royal group! 👑😎  Which princess outfit would you wear for your pajama party?☺️\nThere are 12 different designs to collect + 1 hidden edition.\nSpecification: Size: Height about 6-6.5cm Quantity: A single blind box Material: PVC/ABS\nBlind Box Rule: Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that show a collection; some figures are rarer to find than others, these are referred to as "secret", "hidden" or "chase" figures.\n* No refund or return policy once this product is sold.',
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
      excerpt: 'Introducing the enchanting world of the Sanrio Magic Fairy Wand Blind Box! Get ready to be spellbound by the magic of these adorable Sanrio characters. With 8…',
      description: 'Introducing the enchanting world of the Sanrio Magic Fairy Wand Blind Box!\nGet ready to be spellbound by the magic of these adorable Sanrio characters. With 8 charming characters to collect, including Cinnamoroll, Kuromi, My Melody, Pochacco, Pompompurin, Little Twin Stars, and Hello Kitty, each wand holds a unique surprise.\nOpen the box and discover your very own Sanrio friend, beautifully crafted and perched atop a sparkling wand that adds a touch of whimsy to any space. These wands are not only delightful to collect but also make for the perfect magical accessory to adorn your shelves, desks, or any corner in need of a sprinkle of cuteness.\nThere are 8 different designs to collect , no hidden edition.\nSpecification: Size: Height about 6-6.5cm Quantity: A single blind box Material: PVC/ABS\nBlind Box Rule: Blind Box refers to the type of packaging that keeps the collectible toy as a mystery until it is opened. Blind boxes typically come in series that show a collection; some figures are rarer to find than others, these are referred to as "secret", "hidden" or "chase" figures.\n* No refund or return policy once this product is sold.',
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
      excerpt: 'Meet the Sanrio Characters Squishy Mascot 2 Blind Box! It\'s a squishy doll featuring cute Sanrio characters like Kuromi, My Melody, Cinnamoroll, Pompompurin,…',
      description: 'Meet the Sanrio Characters Squishy Mascot 2 Blind Box! It\'s a squishy doll featuring cute Sanrio characters like Kuromi, My Melody, Cinnamoroll, Pompompurin, Pochacco, and Hangyodon.Each character has its own special shape and face. People love these not just for squeezing but also for collecting because they\'re so much fun!These squishy toys are small and perfect for carrying around. You can use them as a keychain or clip them to your bag!If you\'re into Sanrio characters and squishy toys, this is something you\'ll love. Can you guess which one you\'ll get?Size: 90 mm x 70 mm x 55 mm / 3.5 inch x 2.7 inch x 2.1 inch',
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
      excerpt: 'Get ready for a magical surprise with the Sanrio Unicorn Gel Pen Blind Box! 🎉 Each box hides one adorable Sanrio character, like Cinnamoroll, Hello Kitty,…',
      description: 'Get ready for a magical surprise with the Sanrio Unicorn Gel Pen Blind Box! 🎉 Each box hides one adorable Sanrio character, like Cinnamoroll, Hello Kitty, Pochacco, Kuromi, Pompompurin, and My Melody, in a whimsical unicorn theme! 🌈 With smooth 0.5mm black ink, these pens make writing and drawing super fun and easy. ✍️\nThe white grip ensures comfortable use, and each pen even comes with a cute bookmark—perfect for school, journaling, or just adding a bit of Sanrio sparkle to your day. 🎀\nCollect them all for the ultimate Sanrio Gel Pen Collection! Who will you unbox? 🐾✨\nSpecifications Ink Color: Black Nib Size: 0.5mm',
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
      excerpt: 'Get ready for a magical surprise with the Sanrio Unicorn Gel Pen Blind Box! 🎉 Each box hides one adorable Sanrio character, like Cinnamoroll, Hello Kitty,…',
      description: 'Get ready for a magical surprise with the Sanrio Unicorn Gel Pen Blind Box! 🎉 Each box hides one adorable Sanrio character, like Cinnamoroll, Hello Kitty, Pochacco, Kuromi, Pompompurin, and My Melody, in a whimsical unicorn theme! 🌈 With smooth 0.5mm black ink, these pens make writing and drawing super fun and easy. ✍️\nThis gradient bodied pen is comfortable to use and each pen even comes with a cute bookmark—perfect for school, journaling, or just adding a bit of Sanrio sparkle to your day. 🎀\nCollect them all for the ultimate Sanrio Gel Pen Collection! Who will you unbox? 🐾✨\nSpecifications\nPackage Size: 165*13*13mm\nPen Size: 143mm Long\nInk Color: Black \nNib Size: 0.5mm',
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
      "bestPickLabel": "none",
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
      "bestPickLabel": "none",
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
      "bestPickLabel": "none",
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
      "bestPickLabel": "none",
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
