"use client";

import { FormEvent, useState } from "react";
import { MapPin, Search, SlidersHorizontal } from "lucide-react";

export function HeroSearch() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();
    if (query.trim()) {
      params.set("q", query.trim());
    }
    window.location.href = `/properties${params.toString() ? `?${params.toString()}` : ""}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 flex w-full max-w-4xl flex-col overflow-hidden rounded-[8px] bg-white shadow-soft md:flex-row"
    >
      <label className="flex min-h-16 flex-1 items-center gap-3 px-5">
        <MapPin className="shrink-0 text-pine" size={22} />
        <input
          className="focus-ring w-full border-0 bg-transparent text-base text-ink outline-none placeholder:text-slate-400 md:text-lg"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Enter a city, barangay, project, or property type"
        />
      </label>
      <div className="flex border-t border-slate-100 md:border-l md:border-t-0">
        <button
          type="button"
          className="focus-ring inline-flex min-w-28 items-center justify-center gap-2 px-4 text-sm font-bold text-slate-600 hover:bg-slate-50"
          aria-label="Advanced filters coming soon"
        >
          <SlidersHorizontal size={18} />
          Filters
        </button>
        <button
          type="submit"
          className="focus-ring inline-flex min-w-20 items-center justify-center bg-pine px-6 text-white transition hover:bg-ocean"
          aria-label="Search properties"
        >
          <Search size={25} />
        </button>
      </div>
    </form>
  );
}
