import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Sample development project previews for Real Supreme Real Estate."
};

export default function ProjectsPage() {
  return (
    <main className="page-shell py-14">
      <SectionHeading
        eyebrow="Projects"
        title="Development projects with enough context for a first conversation."
        body="Use this page for preselling communities, RFO inventory, and open-lot projects from partner developers."
        as="h1"
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <section className="mt-14 rounded-[8px] bg-mist p-6 md:p-8">
        <h2 className="text-3xl font-bold text-ocean">Project comparison fields for a future phase</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {["Payment terms", "Turnover timing", "Available cuts and units", "Developer documents", "Location access", "Agent assigned"].map(
            (item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-[8px] bg-white px-4 py-3 font-semibold text-slate-700">
                <CheckCircle2 size={18} className="text-pine" /> {item}
              </span>
            )
          )}
        </div>
      </section>
    </main>
  );
}
