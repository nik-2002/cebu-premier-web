import type { Metadata } from "next";
import { Clock, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { ContactPanel } from "@/components/ContactPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { companyProfile } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cebu Premier Real Estate for property, selling, and documentation inquiries."
};

export default function ContactPage() {
  return (
    <main className="py-14">
      <div className="page-shell">
        <SectionHeading
          eyebrow="Contact"
          title="Start with a simple message or call."
          body="The prototype uses direct contact links. A future version can add inquiry forms, CRM routing, and agent assignment."
          as="h1"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <a href={`tel:${companyProfile.phone}`} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-soft">
            <Phone size={24} className="text-pine" />
            <h2 className="mt-4 font-bold text-ocean">Phone</h2>
            <p className="mt-1 text-slate-600">{companyProfile.phone}</p>
          </a>
          <a href={`mailto:${companyProfile.email}`} className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm hover:shadow-soft">
            <Mail size={24} className="text-pine" />
            <h2 className="mt-4 font-bold text-ocean">Email</h2>
            <p className="mt-1 break-words text-slate-600">{companyProfile.email}</p>
          </a>
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <MapPin size={24} className="text-pine" />
            <h2 className="mt-4 font-bold text-ocean">Office</h2>
            <p className="mt-1 text-slate-600">{companyProfile.address}</p>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
            <Clock size={24} className="text-pine" />
            <h2 className="mt-4 font-bold text-ocean">Hours</h2>
            <p className="mt-1 text-slate-600">{companyProfile.officeHours}</p>
          </div>
        </div>
        <a
          href={companyProfile.facebook}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-bold text-ocean hover:bg-mist"
        >
          <Facebook size={18} /> Follow us on Facebook
        </a>
      </div>
      <div className="mt-14">
        <ContactPanel />
      </div>
    </main>
  );
}
