import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { brand } from "@/data/brand";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${brand.name} | Cebu Property Brokerage Prototype`,
    template: `%s | ${brand.shortName}`
  },
  description:
    "A static prototype for a Cebu real estate brokerage website with listings, agents, services, projects, and contact flows.",
  metadataBase: new URL("https://realsupreme.example"),
  openGraph: {
    title: brand.name,
    description:
      "Browse sample properties, agent profiles, project previews, and real estate services for Cebu Premier Real Estate.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-PH">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
