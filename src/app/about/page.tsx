import Image from "next/image";
import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { brand } from "@/data/brand";
import { values } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "About Real Supreme Real Estate and the prototype company story."
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-shell grid gap-10 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-pine">About us</p>
          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-ocean md:text-6xl">
            A brokerage website built around trust before scale.
          </h1>
          <p className="mt-6 leading-8 text-slate-600">
            {brand.name} is presented here as a local real estate brokerage that helps buyers,
            sellers, families, and investors navigate property choices with clearer information and
            guided next steps.
          </p>
        </div>
        <div className="relative min-h-[420px] overflow-hidden rounded-[8px] shadow-soft">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80"
            alt="Real estate team planning"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="page-shell grid gap-6 md:grid-cols-3">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article key={value.title} className="rounded-[8px] bg-white p-6 shadow-sm">
                <Icon size={26} className="text-pine" />
                <h2 className="mt-4 text-2xl font-bold text-ocean">{value.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{value.body}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="page-shell py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Prototype story"
            title="This site is designed for a small company that wants credibility now and platform features later."
            body="The architecture avoids early backend cost while keeping real estate-specific pages, content types, and navigation ready for growth."
          />
          <div className="grid gap-3">
            {[
              "Start with owned and brokered listings.",
              "Make services like documentation and seller assistance visible.",
              "Use repo files while content is still small.",
              "Add auth, database, admin workflows, and Google login only when the process needs them."
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white px-4 py-4 font-semibold text-slate-700">
                <CheckCircle2 size={20} className="text-pine" /> {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
