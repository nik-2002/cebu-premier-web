export type Project = {
  slug: string;
  name: string;
  developer: string;
  location: string;
  status: "Preselling" | "RFO" | "Open lots";
  units: number;
  priceRange: string;
  image: string;
  summary: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "supreme-south-estates",
    name: "Cebu Premier South Estates",
    developer: "Partner Developer",
    location: "Minglanilla, Cebu",
    status: "Open lots",
    units: 38,
    priceRange: "PHP 2.4M - PHP 5.2M",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1400&q=80",
    summary: "Subdivision lots for families looking south of Cebu City.",
    highlights: ["Residential lots", "Flexible cuts", "Road and utility planning"]
  },
  {
    slug: "cebu-heights-village",
    name: "Cebu Heights Village",
    developer: "Local Development Group",
    location: "Cebu City, Cebu",
    status: "Preselling",
    units: 24,
    priceRange: "PHP 4.8M - PHP 9.5M",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=80",
    summary: "A hillside community concept for end-use buyers and investors.",
    highlights: ["View lots", "Preselling terms", "City-side access"]
  },
  {
    slug: "mactan-coastal-residences",
    name: "Mactan Coastal Residences",
    developer: "Island Partner Homes",
    location: "Lapu-Lapu City, Cebu",
    status: "RFO",
    units: 12,
    priceRange: "PHP 5.9M - PHP 11.8M",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1400&q=80",
    summary: "Ready-for-occupancy homes near airport and coastal access.",
    highlights: ["RFO homes", "Rental potential", "Near Mactan corridors"]
  }
];
