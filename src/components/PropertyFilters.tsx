"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { ListingCard } from "@/components/ListingCard";
import type { Listing, ListingStatus, PropertyType } from "@/data/listings";

type PropertyFiltersProps = {
  listings: Listing[];
  initialQuery?: string;
};

const statuses: Array<ListingStatus | "All"> = ["All", "For Sale", "For Rent", "Project"];
const types: Array<PropertyType | "All"> = [
  "All",
  "Residential Lot",
  "Agricultural Lot",
  "Commercial Lot",
  "House and Lot",
  "Condominium"
];

export function PropertyFilters({ listings, initialQuery = "" }: PropertyFiltersProps) {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(initialQuery || searchParams.get("q") || "");
  const [status, setStatus] = useState<ListingStatus | "All">("All");
  const [type, setType] = useState<PropertyType | "All">("All");
  const [maxPrice, setMaxPrice] = useState("20000000");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const priceLimit = Number(maxPrice) || Number.MAX_SAFE_INTEGER;

    return listings.filter((listing) => {
      const text = [
        listing.title,
        listing.location,
        listing.city,
        listing.province,
        listing.type,
        listing.status,
        listing.summary,
        listing.tags.join(" ")
      ]
        .join(" ")
        .toLowerCase();

      return (
        (!normalized || text.includes(normalized)) &&
        (status === "All" || listing.status === status) &&
        (type === "All" || listing.type === type) &&
        listing.price <= priceLimit
      );
    });
  }, [listings, maxPrice, query, status, type]);

  function resetFilters() {
    setQuery("");
    setStatus("All");
    setType("All");
    setMaxPrice("20000000");
  }

  return (
    <div>
      <div className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm">
        <div className="grid gap-3 lg:grid-cols-[1.4fr_0.8fr_0.9fr_0.8fr_auto]">
          <label className="flex min-h-12 items-center gap-2 rounded-[8px] border border-slate-200 px-3">
            <Search size={18} className="text-pine" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search city, barangay, lot, condo..."
              className="focus-ring w-full border-0 bg-transparent outline-none"
            />
          </label>
          <label className="flex min-h-12 items-center rounded-[8px] border border-slate-200 px-3">
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as ListingStatus | "All")}
              className="focus-ring w-full bg-transparent outline-none"
            >
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="flex min-h-12 items-center rounded-[8px] border border-slate-200 px-3">
            <select
              value={type}
              onChange={(event) => setType(event.target.value as PropertyType | "All")}
              className="focus-ring w-full bg-transparent outline-none"
            >
              {types.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="flex min-h-12 items-center gap-2 rounded-[8px] border border-slate-200 px-3">
            <span className="text-sm font-bold text-slate-500">Max</span>
            <input
              type="number"
              min="0"
              step="100000"
              value={maxPrice}
              onChange={(event) => setMaxPrice(event.target.value)}
              className="focus-ring w-full border-0 bg-transparent outline-none"
            />
          </label>
          <button
            type="button"
            onClick={resetFilters}
            className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-slate-200 px-5 font-bold text-slate-600 hover:bg-slate-50"
          >
            <X size={17} /> Clear
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 font-bold text-ocean">
          <SlidersHorizontal size={18} className="text-pine" />
          {filtered.length} result{filtered.length === 1 ? "" : "s"}
        </p>
        <p className="text-sm text-slate-500">Prototype search runs locally from repo data.</p>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((listing) => (
            <ListingCard key={listing.slug} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-[8px] border border-dashed border-slate-300 bg-white p-10 text-center">
          <h3 className="text-2xl font-bold text-ocean">No matching properties yet.</h3>
          <p className="mt-3 text-slate-600">Clear filters or lower the price constraint.</p>
        </div>
      )}
    </div>
  );
}
