/* ============================================================
   ReDoor door stock data
   ------------------------------------------------------------
   This file is rewritten automatically when Dad emails a new
   door (or emails "SOLD"). You can also edit it by hand.

   To change the shop contact details, edit the `config` block.
   Each door in `doors` shows up as a listing on the site.
   ============================================================ */

window.REDOOR_DATA = {
  config: {
    shopName: "ReDoor",
    tagline: "Restored garage doors, given a second life.",
    // Short line under the hero headline. Sits over a photo, so keep it
    // to a sentence or two. The longer `blurb` below is used elsewhere.
    heroLede:
      "You wouldn't think twice about a good second-hand car. A restored door is no different, and a fraction of the price of new.",
    blurb:
      "Salvaged from old houses, then cleaned, serviced and repainted to order. Every door is checked over and ready to fit. You wouldn't think twice about a good second-hand car; a properly restored garage door is no different. Have a look, then get in touch.",
    // Fill these in with Dad's real details:
    contactEmail: "adammhannigan@gmail.com",
    contactPhone: "+44 7853 264404",
    area: "Collection / local delivery",
    lastUpdated: "2026-09-04"
    // The hero is now an illustrated 5-stage restoration sequence drawn in
    // index.html. There is no hero image or video to configure here.
  },

  // Reputation / Google reviews trust section.
  reputation: {
    owner: "Matthew Hannigan",
    formerBusiness: "Matthew Hannigan Garage Doors",
    rating: 5.0,
    reviewCount: 45,
    reviewsUrl: "https://www.google.com/search?q=Matthew+Hannigan+Garage+Doors",
    intro:
      "ReDoor is run by Matthew Hannigan. His garage-door business earned a straight 5.0 across 45 Google reviews. The same honest advice and tidy work now goes into every door here.",
    standouts: ["Fair, honest pricing", "Fast & emergency call-outs", "Expert advice", "Quality workmanship", "Bespoke colours & sizes"],
    quotes: [
      {
        name: "Steve Mcloughlin",
        text: "Miles cheaper than any of my other quotes but the service was the best by far, and had the most knowledge and the biggest range. Great door, great price and great service."
      },
      {
        name: "Amanda Foy",
        text: "Charged less than quoted, as he told me it wasn't as big a job as he thought and showed me the problem. Really honest and trustworthy guy."
      },
      {
        name: "Russell Whitwell",
        text: "I thought the other reviews all seemed too good to be true, but he really is this good! Fixed a tricky door problem quickly and at a good price."
      },
      {
        name: "David Rooke",
        text: "Rang Matthew this afternoon for help with the door sticking, he was here within the hour, repaired it and gave advice to avoid a repeat. Great service, great price."
      }
    ],
    // eBay seller feedback (hannigan71): parts, spares and hardware.
    ebay: {
      handle: "hannigan71",
      url: "https://www.ebay.co.uk/usr/hannigan71",
      positive: "100%",
      feedbackScore: 813,
      itemsSold: 946,
      memberSince: 2006,
      intro:
        "Matthew also sells garage-door parts, motors and hardware on eBay as hannigan71, with 100% positive feedback over nearly 20 years and the same careful packing and honest descriptions.",
      quotes: [
        { name: "t***t", text: "Can't fault this item, as described. Communication with the seller and packaging first class, plus postage arrived a day before promised. Thank you." },
        { name: "o***p", text: "Exactly as described, generously wrapped and sealed in a good sized box. Price and postage were very fair. Very happy with every aspect of this transaction." },
        { name: "a***h", text: "Item exactly as described and seller was very helpful with resolving an address issue. Thank you very much." },
        { name: "7***w", text: "Great value and very well packaged, and arrived very quickly." }
      ]
    }
  },

  // "Paint any door" service: edit prices or colours here.
  paintService: {
    heading: "Paint any door to order",
    blurb:
      "Bringing your own door, or want one of ours in a different finish? We'll spray it in a factory-grade RAL colour before you collect.",
    price: "£200 + VAT",
    colours: [
      { ral: "RAL 7016", name: "Anthracite Grey", hex: "#373F43" },
      { ral: "RAL 9016", name: "Traffic White", hex: "#F1F0EA" },
      { ral: "RAL 9005", name: "Jet Black", hex: "#0E0E10" }
    ],
    note: "Other RAL colours available on request."
  },

  // Environmental impact section.
  environment: {
    heading: "Good for the house, better for the planet",
    stat: "62%",
    statLabel: "of all UK waste comes from construction and demolition, the country's single biggest waste stream.",
    body:
      "Britain throws away around 123 million tonnes of construction and demolition material every year. A garage door that's been stripped, repaired and properly serviced is a door kept out of that pile. You wouldn't scrap a good second-hand car, and a restored door is no different: the same job done, a fraction of the footprint, and none of the factory.",
    points: [
      "Every door reused is one less made from raw steel, aluminium or timber.",
      "Fully serviced and ready to fit, not landfill.",
      "One-off doors with character you can't buy new."
    ],
    source: "UK government waste statistics (DEFRA)",
    sourceUrl: "https://www.gov.uk/government/statistics/uk-waste-data/uk-statistics-on-waste"
  },

  // Grading: the colour-coded badge in the corner of each listing.
  // Dad sets each door's `grade` to one of: "A+", "A", "B", "C", "D".
  grading: {
    heading: "How we grade every door",
    blurb:
      "Every door is graded once it's been stripped, repaired, serviced and (if needed) repainted. The grade is an honest summary of condition and finish, so you know exactly what you're getting before you buy.",
    scale: [
      { grade: "A+", label: "As-new", desc: "Repainted and serviced. Looks and works like a brand-new door, with no marks worth mentioning." },
      { grade: "A", label: "Excellent", desc: "Fully serviced, very clean finish. Only the faintest signs of previous life if you look closely." },
      { grade: "B", label: "Very good", desc: "Solid, serviced and reliable. Minor cosmetic marks that don't affect how it works." },
      { grade: "C", label: "Good", desc: "Honest working door with some visible wear. Ideal if looks matter less than value." },
      { grade: "D", label: "Functional", desc: "Does the job and is safe to fit, but shows its age. Priced to match, and great for workshops and outbuildings." }
    ]
  },

  // Delivery: powers the pricing map. Origin is Chester.
  // Edit the price for each band, and move counties between bands, as you like.
  delivery: {
    heading: "Delivery across the UK",
    origin: "Chester",
    blurb:
      "We deliver nationwide from Chester. Prices are a guide based on distance, so get in touch for an exact quote. Collection is always free.",
    freeLabel: "FREE around Chester & Cheshire",
    note: "For small or low-value items that aren't needed urgently, we can often offer a reduced rate. Just ask.",
    bands: [
      { price: "FREE", colour: "#2E7D46", areas: "Chester, Cheshire, Ellesmere Port, Wrexham" },
      { price: "£100", colour: "#EAE3B8", areas: "Merseyside, Flintshire, Wirral, Warrington" },
      { price: "£130", colour: "#D8CFC4", areas: "Greater Manchester, Staffordshire, Shropshire, North Wales" },
      { price: "£170", colour: "#CDE29A", areas: "Lancashire, West Midlands, Derbyshire, Mid Wales" },
      { price: "£205", colour: "#A7D8E4", areas: "Yorkshire, Cumbria, Lincolnshire, Bristol area" },
      { price: "£240", colour: "#B8B6E6", areas: "South West, South East, East Anglia, Southern Scotland" },
      { price: "On request", colour: "#D8A98E", areas: "Highlands, far South West, Cornwall, Northern Ireland" }
    ]
  },

  doors: [
    {
      id: "d-20260904-hormann-m-ribbed-oak",
      stockCode: "0826005",
      title: "Hörmann M-ribbed sectional, Golden Oak",
      type: "Sectional",
      category: "Sectional",
      dim: { w: 4725, h: 2125 },
      price: 1095,
      priceNote: "Motor, fobs & frame kit included",
      grade: "A+",
      condition: "New old stock, never fitted. Panels are unmarked and the whole door has been serviced and repacked",
      age: "2021 (new old stock)",
      size: "4725 × 2125 mm (186\" × 84\")",
      sizeAdjustable: false,
      sizeNote: "",
      colourOptions: ["Golden Oak"],
      description:
        "A Hörmann M-ribbed sectional in Golden Oak with a smooth Planar finish, the warm timber look that suits a brick or rendered house without any of the sanding and re-oiling a real wooden door needs. Made in 2021 but never fitted, so the panels are as clean as the day they left the factory. It comes with a brand-new Schartec 600 motor, two new fobs and a matching frame kit, so there is nothing else to source for the fit.",
      photos: ["images/d-20260904-hormann-m-ribbed-oak-1.jpg"],
      status: "sold",
      soldUrl: "https://www.ebay.co.uk/itm/298302665593",
      dateAdded: "2026-09-04"
    },
    {
      id: "d-20260904-hormann-l-ribbed",
      stockCode: "0826004",
      title: "Hörmann L-ribbed sectional, White",
      type: "Sectional (low headroom)",
      category: "Sectional",
      dim: { w: 2250, h: 2125 },
      price: 995,
      priceNote: "Matching frame kit included. Motor & fobs can be arranged",
      grade: "A+",
      condition: "New old stock, never fitted. Panels are unmarked and the whole door has been serviced and repacked",
      age: "2021 (new old stock)",
      size: "2250 × 2125 mm (89\" × 84\")",
      sizeAdjustable: false,
      sizeNote: "",
      colourOptions: ["RAL 9016 Traffic White"],
      description:
        "A Hörmann L-ribbed sectional in white RAL 9016 with a smooth finish, the clean wide-rib look that sits well on a modern house. Made in 2021 but never fitted, so the panels are unmarked. Fully insulated, built for low headroom garages, and it comes with a matching frame kit. No motor or fobs with this one, but we can arrange them if you want it automated.",
      photos: ["images/d-20260904-hormann-l-ribbed-1.jpg"],
      status: "available",
      dateAdded: "2026-09-04"
    },
    {
      id: "d-20260904-hormann-georgian",
      stockCode: "0826002",
      title: "Hörmann Georgian insulated sectional, Black",
      type: "Sectional",
      category: "Sectional",
      dim: { w: 2060, h: 2125 },
      price: 895,
      priceNote: "Motor, fobs & frame kit included",
      grade: "A+",
      condition: "New old stock, never fitted. Panels are unmarked and the whole door has been serviced and repacked",
      age: "2021 (new old stock)",
      size: "2060 \u00d7 2125 mm (81\" \u00d7 84\")",
      sizeAdjustable: false,
      sizeNote: "",
      colourOptions: ["RAL 9005 Black"],
      description:
        "A H\u00f6rmann Georgian sectional in black RAL 9005 with a wood-grain finish, the raised panel look that suits an older house without the upkeep of a timber door. Made in 2021 but never fitted, so the panels are unmarked. Fully insulated, and it comes with a brand-new Schartec 600 motor, two new fobs and a matching frame kit, so there is nothing else to source for the fit.",
      photos: ["images/d-20260904-hormann-georgian-1.jpg"],
      status: "available",
      dateAdded: "2026-09-04"
    },
    {
      id: "d-20260904-hormann-m-ribbed",
      stockCode: "0826001",
      title: "Hörmann M-ribbed sectional, Anthracite",
      type: "Sectional",
      category: "Sectional",
      dim: { w: 2134, h: 2125 },
      price: 1095,
      priceNote: "Motor, fobs & frame kit included",
      grade: "A+",
      condition: "New old stock, never fitted. Panels are unmarked and the whole door has been serviced and repacked",
      age: "2021 (new old stock)",
      size: "2134 \u00d7 2125 mm (84\" \u00d7 84\")",
      sizeAdjustable: false,
      sizeNote: "",
      colourOptions: ["RAL 7016 Anthracite Grey"],
      description:
        "A H\u00f6rmann M-ribbed sectional in Anthracite RAL 7016 with a smooth Planar finish. Made in 2021 but never fitted, so the panels are as clean as the day they left the factory. It comes with a brand-new Schartec 600 motor, two new fobs and a matching frame kit, so that is everything you need for the fit, nothing to source separately.",
      photos: ["images/d-20260904-hormann-m-ribbed-1.jpg"],
      status: "available",
      dateAdded: "2026-09-04"
    },
    {
      id: "d-20260820-hormann-sectional",
      title: "Hörmann T-ribbed sectional, low headroom",
      type: "Sectional (low headroom)",
      category: "Sectional",
      dim: { w: 2134, h: 2125 },
      price: 1350,
      priceNote: "",
      grade: "A",
      condition: "New old stock, never fitted. Dirty springs but no wear on the panels, and it looks new",
      age: "New old stock",
      size: "2134 × 2125 mm (84\" × 84\")",
      sizeAdjustable: false,
      sizeNote: "",
      colourOptions: ["RAL 7030 Stone Grey"],
      description:
        "A Hörmann T-ribbed sectional door in RAL 7030, built for low headroom garages. New old stock that's never been fitted. The panels look as good as new, and every part has been fully reserviced and repacked.",
      photos: ["images/d-20260820-hormann-sectional-1.jpg"],
      status: "available",
      dateAdded: "2026-08-20"
    }
  ]
};
