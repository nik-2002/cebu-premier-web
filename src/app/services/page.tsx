import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Cebu Premier buyer, seller, documentation, and project matching services."
};

export default function ServicesPage() {
  return (
    <main className="py-14">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Services"
          title="Property support from first inquiry to transaction readiness."
          body="The prototype gives services a dedicated page so the company is not framed as only a listing board."
          as="h1"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article key={service.title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-mist text-pine">
                  <Icon size={24} />
                </div>
                <h2 className="mt-5 text-2xl font-bold text-ocean">{service.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{service.body}</p>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <ContactPanel />
      </div>
    </main>
  );
}
