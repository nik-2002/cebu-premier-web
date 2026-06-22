import Image from "next/image";
import { Mail, MessageCircle, Phone } from "lucide-react";
import type { Agent } from "@/data/agents";

export function AgentCard({ agent }: { agent: Agent }) {
  return (
    <article className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[8px]">
          <Image src={agent.image} alt={agent.name} fill sizes="80px" className="object-cover" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-pine">{agent.role}</p>
          <h3 className="mt-1 text-xl font-bold text-ocean">{agent.name}</h3>
          <p className="mt-1 text-sm text-slate-600">{agent.location}</p>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
        <span className="rounded-[8px] bg-mist px-3 py-2">
          <strong className="text-ocean">{agent.listings}</strong> listings
        </span>
        <span className="rounded-[8px] bg-slate-50 px-3 py-2">
          Reply: <strong className="text-ocean">{agent.replyTime}</strong>
        </span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {agent.specialties.map((specialty) => (
          <span key={specialty} className="rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600">
            {specialty}
          </span>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2">
        <a
          href={`tel:${agent.phone}`}
          className="focus-ring inline-flex justify-center rounded-full border border-slate-200 p-3 text-pine hover:bg-mist"
          aria-label={`Call ${agent.name}`}
        >
          <Phone size={18} />
        </a>
        <a
          href={`mailto:${agent.email}`}
          className="focus-ring inline-flex justify-center rounded-full border border-slate-200 p-3 text-pine hover:bg-mist"
          aria-label={`Email ${agent.name}`}
        >
          <Mail size={18} />
        </a>
        <a
          href="/contact"
          className="focus-ring inline-flex justify-center rounded-full bg-pine p-3 text-white hover:bg-ocean"
          aria-label={`Message ${agent.name}`}
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </article>
  );
}
