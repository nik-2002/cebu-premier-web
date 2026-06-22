import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Bath, BedDouble, CheckCircle2, Mail, MapPin, Maximize2, Phone } from "lucide-react";
import { AgentCard } from "@/components/AgentCard";
import { ListingCard } from "@/components/ListingCard";
import { agents } from "@/data/agents";
import { getListingBySlug, listings } from "@/data/listings";

export const dynamicParams = false;

type ListingDetailProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return listings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({ params }: ListingDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    return {
      title: "Property not found"
    };
  }

  return {
    title: listing.title,
    description: listing.summary
  };
}

export default async function ListingDetailPage({ params }: ListingDetailProps) {
  const { slug } = await params;
  const listing = getListingBySlug(slug);

  if (!listing) {
    notFound();
  }

  const agent = agents.find((item) => item.id === listing.agentId) ?? agents[0];
  const related = listings
    .filter((item) => item.slug !== listing.slug && (item.city === listing.city || item.type === listing.type))
    .slice(0, 3);

  return (
    <main>
      <section className="bg-mist py-8">
        <div className="page-shell">
          <Link href="/properties" className="inline-flex items-center gap-2 font-bold text-pine hover:text-ocean">
            <ArrowLeft size={18} /> Back to properties
          </Link>
        </div>
      </section>

      <section className="page-shell grid gap-8 py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px]">
              <Image
                src={listing.gallery[0] ?? listing.image}
                alt={listing.title}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-3">
              {(listing.gallery.length > 1 ? listing.gallery.slice(1, 3) : [listing.image]).map((image) => (
                <div key={image} className="relative min-h-48 overflow-hidden rounded-[8px]">
                  <Image src={image} alt={listing.title} fill sizes="(min-width: 1024px) 35vw, 100vw" className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-pine">
              {listing.status} / {listing.type}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ocean md:text-6xl">
              {listing.title}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-lg text-slate-600">
              <MapPin size={20} className="text-gold" /> {listing.location}
            </p>
            <p className="mt-5 text-3xl font-extrabold text-clay">{listing.priceLabel}</p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            <div className="rounded-[8px] bg-mist p-4">
              <Maximize2 size={20} className="text-pine" />
              <p className="mt-2 text-sm text-slate-500">Lot area</p>
              <p className="font-extrabold text-ocean">{listing.lotArea ? `${listing.lotArea} sqm` : "N/A"}</p>
            </div>
            <div className="rounded-[8px] bg-slate-50 p-4">
              <Maximize2 size={20} className="text-pine" />
              <p className="mt-2 text-sm text-slate-500">Floor area</p>
              <p className="font-extrabold text-ocean">{listing.floorArea ? `${listing.floorArea} sqm` : "N/A"}</p>
            </div>
            <div className="rounded-[8px] bg-slate-50 p-4">
              <BedDouble size={20} className="text-pine" />
              <p className="mt-2 text-sm text-slate-500">Bedrooms</p>
              <p className="font-extrabold text-ocean">{listing.bedrooms ?? "N/A"}</p>
            </div>
            <div className="rounded-[8px] bg-slate-50 p-4">
              <Bath size={20} className="text-pine" />
              <p className="mt-2 text-sm text-slate-500">Bathrooms</p>
              <p className="font-extrabold text-ocean">{listing.bathrooms ?? "N/A"}</p>
            </div>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <h2 className="text-2xl font-bold text-ocean">Property overview</h2>
              <p className="mt-4 leading-8 text-slate-600">{listing.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ocean">Highlights</h2>
              <div className="mt-4 grid gap-3">
                {listing.highlights.map((highlight) => (
                  <span key={highlight} className="inline-flex items-center gap-2 text-slate-700">
                    <CheckCircle2 size={18} className="text-pine" /> {highlight}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start">
          <AgentCard agent={agent} />
          <div className="mt-4 rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold text-ocean">Ask about this property</h2>
            <p className="mt-3 leading-7 text-slate-600">
              Use phone or email for the prototype. A live inquiry backend can be added later.
            </p>
            <div className="mt-5 grid gap-3">
              <a
                href={`tel:${agent.phone}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pine px-5 py-3 font-bold text-white hover:bg-ocean"
              >
                <Phone size={18} /> Call agent
              </a>
              <a
                href={`mailto:${agent.email}?subject=${encodeURIComponent(listing.title)}`}
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-ocean hover:bg-mist"
              >
                <Mail size={18} /> Email agent
              </a>
            </div>
          </div>
        </aside>
      </section>

      {related.length > 0 ? (
        <section className="bg-mist py-16">
          <div className="page-shell">
            <h2 className="text-3xl font-bold text-ocean">Related properties</h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <ListingCard key={item.slug} listing={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
