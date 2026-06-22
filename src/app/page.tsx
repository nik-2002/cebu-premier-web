import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Megaphone, MoveRight } from "lucide-react";
import { AgentCard } from "@/components/AgentCard";
import { ContactPanel } from "@/components/ContactPanel";
import { HeroSearch } from "@/components/HeroSearch";
import { ListingCard } from "@/components/ListingCard";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { agents } from "@/data/agents";
import { brand } from "@/data/brand";
import { listings } from "@/data/listings";
import { projects } from "@/data/projects";
import { audienceCards, heroStats, services, values } from "@/data/site";

export default function HomePage() {
  const featuredListings = listings.filter((listing) => listing.featured).slice(0, 3);

  return (
    <main>
      <section className="hero-bg min-h-[680px]">
        <div className="page-shell flex min-h-[680px] items-center py-20">
          <div className="max-w-4xl text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/15 px-4 py-2 text-sm font-bold uppercase tracking-[0.16em] backdrop-blur">
              Cebu-based brokerage prototype
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.02] md:text-7xl">
              Find your place with {brand.shortName}.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/86 md:text-xl">
              Browse lots, homes, development projects, and practical property services through a
              polished static website that can grow into a full platform later.
            </p>
            <HeroSearch />
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-[8px] border border-white/18 bg-white/14 p-4 backdrop-blur">
                  <p className="text-3xl font-extrabold text-gold">{stat.value}</p>
                  <p className="mt-1 text-sm font-semibold text-white/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell -mt-12">
        <div className="grid overflow-hidden rounded-[8px] bg-white shadow-soft lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative min-h-56">
            <Image
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=1400&q=80"
              alt="Real estate consultation table"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="p-6 md:p-8">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-clay">
              <Megaphone size={17} /> Feature banner
            </p>
            <h2 className="mt-3 text-3xl font-bold text-ocean">
              Start with a showable site, then add the platform only when the business needs it.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              This v1 prototype keeps the website fast and static while leaving space for future
              listing imports, Google login, agent dashboards, and inquiry tracking.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {audienceCards.map((card) => {
            const Icon = card.icon;
            return (
              <article key={card.title} className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-mist text-pine">
                  <Icon size={24} />
                </div>
                <p className="mt-6 text-sm font-bold uppercase tracking-[0.14em] text-pine">
                  {card.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight text-ocean">{card.title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{card.body}</p>
                <div className="mt-5 grid gap-2">
                  {card.points.map((point) => (
                    <span key={point} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700">
                      <CheckCircle2 size={17} className="text-pine" /> {point}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-mist py-20">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured properties"
              title="Lots first, with room for homes and rentals."
              body="The first content model prioritizes land listings, then expands naturally to house-and-lot, condominium, and rental inventory."
            />
            <Link
              href="/properties"
              className="inline-flex items-center gap-2 rounded-full bg-pine px-6 py-3 font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-ocean"
            >
              Browse all properties <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Development projects can sit beside owned and brokered listings."
          body="Preselling, RFO, and open-lot projects get their own page and data shape without needing a developer portal yet."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="bg-ocean py-20 text-white">
        <div className="page-shell">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Services</p>
              <h2 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
                More than listings: the process support buyers and sellers ask for.
              </h2>
              <p className="mt-5 leading-7 text-white/78">
                This section gives the company space to explain brokerage work, not just display
                properties.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <article key={service.title} className="rounded-[8px] border border-white/12 bg-white/8 p-5">
                    <Icon size={24} className="text-gold" />
                    <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                    <p className="mt-3 leading-7 text-white/75">{service.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Agents"
            title="Human guidance stays visible."
            body="The v1 agent page is static, but it already shows specialties, reply expectations, and contact actions."
          />
          <Link href="/agents" className="inline-flex items-center gap-2 font-bold text-pine hover:text-ocean">
            Meet the team <MoveRight size={18} />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>

      <section className="bg-[#f7f2e8] py-20">
        <div className="page-shell">
          <SectionHeading
            eyebrow="What guides the company"
            title="A practical brokerage experience built on trust, judgment, and process."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article key={value.title} className="rounded-[8px] border border-gold/25 bg-white p-6 text-center shadow-sm">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-[8px] bg-ocean text-gold">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ocean">{value.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{value.body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <div className="py-20">
        <ContactPanel />
      </div>
    </main>
  );
}
