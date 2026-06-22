"use client";

import { X } from "lucide-react";

type ComingSoonModalProps = {
  open: boolean;
  onClose: () => void;
};

export function ComingSoonModal({ open, onClose }: ComingSoonModalProps) {
  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-ocean/60 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
    >
      <div className="w-full max-w-md rounded-[8px] bg-white p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-pine">
              Login / Register
            </p>
            <h2 id="login-modal-title" className="mt-2 text-2xl font-bold text-ocean">
              Client and agent accounts are coming soon.
            </h2>
          </div>
          <button
            type="button"
            className="focus-ring rounded-full border border-slate-200 p-2 text-slate-600 hover:bg-slate-50"
            onClick={onClose}
            aria-label="Close login dialog"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-4 leading-7 text-slate-600">
          This prototype keeps inquiries lightweight through phone, email, and message CTAs. A future
          version can connect Google login, agent dashboards, saved listings, and an admin listing
          workflow.
        </p>
        <button
          type="button"
          className="focus-ring mt-6 w-full rounded-full bg-pine px-5 py-3 font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-ocean"
          onClick={onClose}
        >
          Continue browsing
        </button>
      </div>
    </div>
  );
}
