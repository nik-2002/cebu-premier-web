import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { companyProfile } from "@/data/site";

export function ContactPanel() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(companyProfile.mapQuery)}&output=embed`;

  return (
    <section className="page-shell grid gap-8 rounded-[8px] bg-ocean p-5 text-white shadow-soft md:p-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Get in touch</p>
        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
          Ask about a listing, selling a property, or document support.
        </h2>
        <p className="mt-4 leading-7 text-white/78">
          Use this area for your real office details once the brand kit is ready. The current
          prototype keeps contact paths simple and visible.
        </p>
        <div className="mt-6 grid gap-4 text-white/88">
          <a href={`tel:${companyProfile.phone}`} className="inline-flex items-center gap-3 hover:text-white">
            <Phone size={20} className="text-gold" /> {companyProfile.phone}
          </a>
          <a href={`mailto:${companyProfile.email}`} className="inline-flex items-center gap-3 hover:text-white">
            <Mail size={20} className="text-gold" /> {companyProfile.email}
          </a>
          <span className="inline-flex items-center gap-3">
            <MapPin size={20} className="text-gold" /> {companyProfile.address}
          </span>
        </div>
        <a
          href={`mailto:${companyProfile.email}?subject=Real%20Supreme%20property%20inquiry`}
          className="focus-ring mt-7 inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-extrabold text-ocean transition hover:-translate-y-0.5 hover:bg-white"
        >
          <MessageSquare size={18} /> Send us a message
        </a>
      </div>
      <div className="overflow-hidden rounded-[8px] bg-white">
        <iframe
          title="Real Supreme Real Estate map"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="map-frame"
        />
      </div>
    </section>
  );
}
