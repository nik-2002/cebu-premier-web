import {
  BadgeCheck,
  Banknote,
  Building2,
  FileCheck2,
  Handshake,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Users
} from "lucide-react";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Properties", href: "/properties" },
  { label: "Projects", href: "/projects" },
  { label: "Agents", href: "/agents" },
  { label: "Blogs / News", href: "/blogs" },
  { label: "Magazines", href: "/magazine" }
];

export const companyProfile = {
  legalName: "Real Supreme Real Estate",
  location: "Cebu, Philippines",
  phone: "+63 917 000 0000",
  landline: "(032) 000-0000",
  email: "hello@realsupreme.example",
  address: "Cebu City, Cebu, Philippines",
  facebook: "https://www.facebook.com/",
  officeHours: "Monday to Saturday, 9:00 AM to 6:00 PM",
  mapQuery: "Cebu City, Cebu, Philippines"
};

export const heroStats = [
  { value: "40+", label: "sample listings" },
  { value: "4", label: "service lanes" },
  { value: "Cebu", label: "local focus" }
];

export const audienceCards = [
  {
    eyebrow: "For buyers",
    title: "Find land and homes with fewer blind spots.",
    body: "Compare location, title notes, access, utilities, and payment terms before committing to a viewing.",
    icon: Home,
    points: ["Curated lots and homes", "Agent-guided site visits", "Clear next steps"]
  },
  {
    eyebrow: "For sellers",
    title: "Prepare your property for serious buyers.",
    body: "Get practical support for pricing, listing presentation, buyer screening, and transaction documentation.",
    icon: Handshake,
    points: ["Listing preparation", "Buyer coordination", "Document checklist"]
  },
  {
    eyebrow: "For families and investors",
    title: "Choose property with purpose and context.",
    body: "Shortlist options based on lifestyle, access, development potential, and long-term ownership needs.",
    icon: Users,
    points: ["Location fit", "Budget alignment", "Ownership support"]
  }
];

export const services = [
  {
    title: "Property Selling Assistance",
    body: "Listing preparation, buyer inquiry coordination, site viewing support, and offer handling for owners who want a guided process.",
    icon: BadgeCheck
  },
  {
    title: "Buyer Representation",
    body: "Shortlist properties, arrange viewings, clarify terms, and coordinate the documents buyers need before closing.",
    icon: ShieldCheck
  },
  {
    title: "Documentation Support",
    body: "Practical guidance for title, tax declaration, IDs, deed preparation, and transfer-related requirements.",
    icon: FileCheck2
  },
  {
    title: "Developer Project Matching",
    body: "Compare subdivisions, preselling options, and project inventory based on payment terms and location needs.",
    icon: Building2
  }
];

export const values = [
  {
    title: "Transparent Guidance",
    body: "We make terms, risks, and next steps visible before clients move forward.",
    icon: Landmark
  },
  {
    title: "Local Market Judgment",
    body: "We prioritize practical Cebu and Philippine property context over generic selling points.",
    icon: MapPin
  },
  {
    title: "Process Discipline",
    body: "We keep documents, viewings, and negotiations organized from inquiry to closing.",
    icon: Banknote
  }
];

export const popularLinks = [
  "Lots for sale in Cebu",
  "Residential lots in Talisay",
  "House and lot in Minglanilla",
  "Farm lots near Cebu",
  "Subdivision projects",
  "Commercial lots for sale",
  "Properties for rent",
  "Buyer documentation help",
  "Seller assistance",
  "Title transfer support"
];
