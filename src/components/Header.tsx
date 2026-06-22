"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, UserRound, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ComingSoonModal } from "@/components/ComingSoonModal";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/20 bg-white/92 shadow-sm backdrop-blur">
        <div className="page-shell flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Real Supreme home">
            <Image
              src="/assets/brand/real-supreme-logo.svg"
              alt="Real Supreme Real Estate"
              width={180}
              height={48}
              priority
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navItems.map((item) => {
              const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    active ? "bg-mist text-pine" : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="focus-ring hidden items-center gap-2 rounded-full bg-ocean px-5 py-3 text-sm font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-pine md:inline-flex"
              onClick={() => setLoginOpen(true)}
            >
              <UserRound size={17} />
              Login / Register
            </button>
            <button
              type="button"
              className="focus-ring inline-flex rounded-full border border-slate-200 p-3 text-ocean lg:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <div className="border-t border-slate-100 bg-white lg:hidden">
            <div className="page-shell grid gap-2 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-[8px] px-3 py-3 font-bold text-slate-700 hover:bg-mist hover:text-pine"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <button
                type="button"
                className="focus-ring mt-2 rounded-full bg-ocean px-5 py-3 font-bold text-white"
                onClick={() => {
                  setMenuOpen(false);
                  setLoginOpen(true);
                }}
              >
                Login / Register
              </button>
            </div>
          </div>
        ) : null}
      </header>
      <ComingSoonModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
