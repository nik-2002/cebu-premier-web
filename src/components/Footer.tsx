import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyProfile, navItems, popularLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-ocean text-white">
      <div className="page-shell grid gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr_1fr]">
        <div>
          <Image
            src="/assets/brand/cebu-premier-logo.svg"
            alt="Cebu Premier Real Estate"
            width={210}
            height={56}
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-md leading-7 text-white/78">
            A static prototype for a Cebu-based brokerage experience focused on property listings,
            buyer support, seller assistance, and documentation guidance.
          </p>
          <div className="mt-5 grid gap-3 text-sm text-white/85">
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} /> {companyProfile.address}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone size={16} /> {companyProfile.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail size={16} /> {companyProfile.email}
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Navigate</h3>
          <div className="mt-5 grid gap-3">
            {[{ label: "Home", href: "/" }, ...navItems, { label: "Contact", href: "/contact" }].map(
              (item) => (
                <Link key={item.href} href={item.href} className="text-white/78 hover:text-white">
                  {item.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-gold">
            Popular Searches
          </h3>
          <div className="mt-5 flex flex-wrap gap-2">
            {popularLinks.map((link) => (
              <Link
                key={link}
                href="/properties"
                className="rounded-full border border-white/15 px-3 py-2 text-sm text-white/78 hover:border-gold hover:text-white"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="page-shell flex flex-col justify-between gap-3 text-sm text-white/65 md:flex-row">
          <p>© 2026 Cebu Premier Real Estate. Prototype only.</p>
          <p>No backend, payments, or live auth in this v1 build.</p>
        </div>
      </div>
    </footer>
  );
}
