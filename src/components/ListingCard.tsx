import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, MapPin, Maximize2, MoveRight } from "lucide-react";
import type { Listing } from "@/data/listings";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <Link href={`/properties/${listing.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition duration-500 hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-ocean px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
            {listing.status}
          </span>
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-pine">{listing.type}</p>
            <h3 className="mt-1 text-xl font-bold leading-tight text-ocean">
              <Link href={`/properties/${listing.slug}`}>{listing.title}</Link>
            </h3>
          </div>
          <p className="shrink-0 text-right text-lg font-extrabold text-clay">{listing.priceLabel}</p>
        </div>
        <p className="mt-3 flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="shrink-0 text-gold" />
          {listing.location}
        </p>
        <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-600">{listing.summary}</p>
        <div className="mt-4 grid grid-cols-3 gap-2 text-sm text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-[8px] bg-mist px-2 py-2">
            <Maximize2 size={15} /> {listing.lotArea ? `${listing.lotArea} sqm` : `${listing.floorArea} sqm`}
          </span>
          <span className="inline-flex items-center gap-1 rounded-[8px] bg-slate-50 px-2 py-2">
            <BedDouble size={15} /> {listing.bedrooms ?? "-"}
          </span>
          <span className="inline-flex items-center gap-1 rounded-[8px] bg-slate-50 px-2 py-2">
            <Bath size={15} /> {listing.bathrooms ?? "-"}
          </span>
        </div>
        <Link
          href={`/properties/${listing.slug}`}
          className="mt-5 inline-flex items-center gap-2 font-bold text-pine hover:text-ocean"
        >
          View details <MoveRight size={17} />
        </Link>
      </div>
    </article>
  );
}
