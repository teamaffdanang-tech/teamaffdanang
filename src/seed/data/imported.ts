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
  ],
  blogPosts: [],
}
