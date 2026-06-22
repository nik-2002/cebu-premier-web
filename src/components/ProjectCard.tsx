import Image from "next/image";
import { Building2, MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/10]">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
        <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-extrabold uppercase tracking-[0.12em] text-ocean">
          {project.status}
        </span>
      </div>
      <div className="p-5">
        <p className="inline-flex items-center gap-2 text-sm font-bold text-pine">
          <Building2 size={16} /> {project.developer}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-ocean">{project.name}</h3>
        <p className="mt-2 inline-flex items-center gap-2 text-sm text-slate-600">
          <MapPin size={16} className="text-gold" /> {project.location}
        </p>
        <p className="mt-4 leading-7 text-slate-600">{project.summary}</p>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <span className="rounded-[8px] bg-mist px-3 py-2 font-bold text-pine">
            {project.units} units
          </span>
          <span className="rounded-[8px] bg-slate-50 px-3 py-2 font-bold text-ocean">
            {project.priceRange}
          </span>
        </div>
      </div>
    </article>
  );
}
