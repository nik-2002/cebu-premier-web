import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyFilters } from "@/components/PropertyFilters";
import { SectionHeading } from "@/components/SectionHeading";
import { listings } from "@/data/listings";

export const metadata: Metadata = {
  title: "Properties",
  description: "Browse sample Real Supreme property listings with local static filters."
};

export default function PropertiesPage() {
  return (
    <main className="page-shell py-14">
      <SectionHeading
        eyebrow="Properties"
        title="Browse lots, homes, rentals, and sample project inventory."
        body="Search and filter over local repo data. This keeps the prototype fast and easy to edit before a database or admin portal exists."
        as="h1"
      />
      <div className="mt-10">
        <Suspense
          fallback={
            <div className="rounded-[8px] border border-slate-200 bg-white p-8 text-slate-600">
              Loading property filters...
            </div>
          }
        >
          <PropertyFilters listings={listings} />
        </Suspense>
      </div>
    </main>
  );
}
