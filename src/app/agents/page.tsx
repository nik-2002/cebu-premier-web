import type { Metadata } from "next";
import { AgentCard } from "@/components/AgentCard";
import { SectionHeading } from "@/components/SectionHeading";
import { agents } from "@/data/agents";

export const metadata: Metadata = {
  title: "Agents",
  description: "Meet sample Real Supreme agents and property specialists."
};

export default function AgentsPage() {
  return (
    <main>
      <section className="bg-ocean py-16 text-white">
        <div className="page-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold">Agents</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-6xl">
              Find a property specialist for your next step.
            </h1>
          </div>
          <p className="max-w-2xl leading-8 text-white/78">
            This v1 page keeps the agent directory static, but already supports specialties, contact
            actions, listing counts, and response expectations.
          </p>
        </div>
      </section>
      <section className="page-shell py-14">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {agents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </section>
      <section className="page-shell">
        <div className="rounded-[8px] bg-mist p-6 md:p-8">
          <SectionHeading
            title="Agent pages can become profile hubs later."
            body="Future versions can add individual agent URLs, active listings by agent, Google login, inquiry tracking, and a private dashboard."
          />
        </div>
      </section>
    </main>
  );
}
