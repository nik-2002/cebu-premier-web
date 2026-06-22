import Image from "next/image";
import type { Metadata } from "next";
import { Download, Eye } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { magazineIssues } from "@/data/magazines";

export const metadata: Metadata = {
  title: "Magazines",
  description: "Magazine concept page for Real Supreme property guides and previews."
};

export default function MagazinePage() {
  return (
    <main className="page-shell py-14">
      <SectionHeading
        eyebrow="Magazines"
        title="A magazine-style shelf for future property guides."
        body="For v1 this is a visual concept page. Later it can host PDF issues, Canva exports, developer brochures, and downloadable buyer guides."
        as="h1"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {magazineIssues.map((issue) => (
          <article key={issue.title} className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[3/4]">
              <Image
                src={issue.image}
                alt={issue.title}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/90 via-ocean/30 to-transparent" />
              <div className="absolute bottom-0 p-5 text-white">
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-gold">{issue.issue}</p>
                <h2 className="mt-2 text-3xl font-extrabold leading-tight">{issue.title}</h2>
              </div>
            </div>
            <div className="p-5">
              <p className="leading-7 text-slate-600">{issue.theme}</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-pine px-4 py-3 font-bold text-white">
                  <Eye size={17} /> Preview
                </button>
                <button className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 font-bold text-ocean">
                  <Download size={17} /> PDF soon
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
