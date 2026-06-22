export type ListingStatus = "For Sale" | "For Rent" | "Project";
export type PropertyType =
  | "Residential Lot"
  | "Agricultural Lot"
  | "Commercial Lot"
  | "House and Lot"
  | "Condominium";

export type Listing = {
  slug: string;
  title: string;
  status: ListingStatus;
  type: PropertyType;
  location: string;
  city: string;
  province: string;
  price: number;
  priceLabel: string;
  lotArea?: number;
  floorArea?: number;
  bedrooms?: number;
  bathrooms?: number;
  agentId: string;
  image: string;
  gallery: string[];
  featured?: boolean;
  tags: string[];
  summary: string;
  description: string;
  highlights: string[];
};

export const listings: Listing[] = [
  {
    slug: "busay-view-residential-lot",
    title: "Busay View Residential Lot",
    status: "For Sale",
    type: "Residential Lot",
    location: "Busay, Cebu City, Cebu",
    city: "Cebu City",
    province: "Cebu",
    price: 7800000,
    priceLabel: "PHP 7.8M",
    lotArea: 420,
    agentId: "nina-reyes",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1400&q=80"
    ],
    featured: true,
    tags: ["Clean title", "Mountain view", "Private road"],
    summary: "Elevated residential lot with open views and access to Cebu City lifestyle corridors.",
    description:
      "A quiet residential lot suited for a custom family home, weekend residence, or long-term hold. The prototype listing shows the kind of title, access, and utility notes Real Supreme can surface before a buyer schedules a site visit.",
    highlights: ["420 sqm lot area", "Road access noted", "Good fit for end-use buyers"]
  },
  {
    slug: "minglanilla-subdivision-lot",
    title: "Minglanilla Subdivision Lot",
    status: "For Sale",
    type: "Residential Lot",
    location: "Tungha-an, Minglanilla, Cebu",
    city: "Minglanilla",
    province: "Cebu",
    price: 3250000,
    priceLabel: "PHP 3.25M",
    lotArea: 180,
    agentId: "marco-santos",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80"
    ],
    featured: true,
    tags: ["Subdivision", "South Cebu", "Family location"],
    summary: "Compact residential lot in a growing south Cebu community.",
    description:
      "A practical lot option for buyers who want subdivision controls, access to main roads, and a manageable lot size. This sample helps demonstrate how lots can be presented without needing a full backend yet.",
    highlights: ["180 sqm lot area", "Subdivision setting", "Near south Cebu growth areas"]
  },
  {
    slug: "carcar-agricultural-hold",
    title: "Carcar Agricultural Hold",
    status: "For Sale",
    type: "Agricultural Lot",
    location: "Carcar City, Cebu",
    city: "Carcar City",
    province: "Cebu",
    price: 12200000,
    priceLabel: "PHP 12.2M",
    lotArea: 5200,
    agentId: "jon-mercado",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
    ],
    featured: true,
    tags: ["Farm lot", "Long-term hold", "Road frontage"],
    summary: "Agricultural lot positioned for buyers looking beyond urban residential inventory.",
    description:
      "A larger landholding example for investors, family compounds, or agricultural use. The listing format leaves room for title notes, access notes, and tax declaration reminders.",
    highlights: ["5,200 sqm lot area", "Large landholding", "Best for due diligence-led buyers"]
  },
  {
    slug: "mandaue-commercial-corner",
    title: "Mandaue Commercial Corner Lot",
    status: "For Sale",
    type: "Commercial Lot",
    location: "Mandaue City, Cebu",
    city: "Mandaue City",
    province: "Cebu",
    price: 18500000,
    priceLabel: "PHP 18.5M",
    lotArea: 310,
    agentId: "jon-mercado",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80"
    ],
    tags: ["Commercial", "Corner lot", "High visibility"],
    summary: "Small commercial lot for buyers who need visibility and access.",
    description:
      "A sample commercial property card that shows how the site can support business buyers, not only residential buyers. Future versions can add traffic, frontage, and zoning fields.",
    highlights: ["310 sqm lot area", "Corner profile", "Good for business use"]
  },
  {
    slug: "talisay-family-house",
    title: "Talisay Family House and Lot",
    status: "For Sale",
    type: "House and Lot",
    location: "Talisay City, Cebu",
    city: "Talisay City",
    province: "Cebu",
    price: 6400000,
    priceLabel: "PHP 6.4M",
    lotArea: 130,
    floorArea: 96,
    bedrooms: 3,
    bathrooms: 2,
    agentId: "nina-reyes",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80"
    ],
    tags: ["Ready for viewing", "Family home", "South Cebu"],
    summary: "Move-in oriented house and lot option for families looking south of Cebu City.",
    description:
      "A practical house-and-lot sample to show how Real Supreme can list non-land assets while keeping lot size, floor area, and viewing readiness clear.",
    highlights: ["3 bedrooms", "2 bathrooms", "96 sqm estimated floor area"]
  },
  {
    slug: "lapu-lapu-rental-townhouse",
    title: "Lapu-Lapu Rental Townhouse",
    status: "For Rent",
    type: "House and Lot",
    location: "Basak, Lapu-Lapu City, Cebu",
    city: "Lapu-Lapu City",
    province: "Cebu",
    price: 28000,
    priceLabel: "PHP 28K / month",
    lotArea: 95,
    floorArea: 82,
    bedrooms: 3,
    bathrooms: 2,
    agentId: "bea-lim",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80"
    ],
    tags: ["For rent", "Near airport", "Townhouse"],
    summary: "Rental-ready townhouse positioned for airport and Mactan access.",
    description:
      "A rental listing example for future expansion. The first version keeps inquiry flows simple with phone, email, and message CTAs.",
    highlights: ["3 bedrooms", "Near Mactan access", "Monthly lease sample"]
  },
  {
    slug: "cebu-midrise-condo",
    title: "Cebu Midrise Condo Unit",
    status: "For Sale",
    type: "Condominium",
    location: "Lahug, Cebu City, Cebu",
    city: "Cebu City",
    province: "Cebu",
    price: 5100000,
    priceLabel: "PHP 5.1M",
    floorArea: 32,
    bedrooms: 1,
    bathrooms: 1,
    agentId: "bea-lim",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1400&q=80"
    ],
    tags: ["Condo", "Investment", "City access"],
    summary: "Compact condo sample for buyers comparing lot, house, and vertical options.",
    description:
      "A condominium listing included so the prototype can show room for expansion into non-land inventory without changing the data model.",
    highlights: ["32 sqm floor area", "1 bedroom", "Good for rental comparison"]
  },
  {
    slug: "naga-growth-corridor-lot",
    title: "Naga Growth Corridor Lot",
    status: "For Sale",
    type: "Residential Lot",
    location: "Naga City, Cebu",
    city: "Naga City",
    province: "Cebu",
    price: 2950000,
    priceLabel: "PHP 2.95M",
    lotArea: 220,
    agentId: "marco-santos",
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1400&q=80",
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1400&q=80"
    ],
    tags: ["Affordable lot", "South Cebu", "Growth area"],
    summary: "Entry-level lot example for south Cebu buyers prioritizing long-term growth.",
    description:
      "A lower-ticket lot sample intended to make the prototype useful for real buyer conversations and not just premium inventory.",
    highlights: ["220 sqm lot area", "Affordable south Cebu sample", "Residential use"]
  }
];

export function getListingBySlug(slug: string) {
  return listings.find((listing) => listing.slug === slug);
}
