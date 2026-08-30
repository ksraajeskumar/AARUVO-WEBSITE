"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export type Detail = {
  eyebrow: string;
  title: string;
  body: string;
  points: string[];
  stats: [string, string][];
};

/**
 * The detail view behind every card's expand control. One dialog serves all
 * cards; each section passes the record for the card that was opened.
 */
export default function DetailModal({
  detail,
  onClose,
}: {
  detail: Detail | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!detail) return;
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", esc);
      document.body.style.overflow = prev;
    };
  }, [detail, onClose]);

  return (
    <AnimatePresence>
      {detail && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-[clamp(16px,3vw,60px)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-navy/45 backdrop-blur-[3px]"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={detail.title}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-h-[86vh] w-full max-w-[720px] overflow-y-auto rounded-[14px] bg-white p-[clamp(20px,2.2vw,44px)] shadow-[0_24px_70px_rgba(10,37,64,0.28)]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-[clamp(14px,1.2vw,24px)] top-[clamp(14px,1.2vw,24px)] flex h-9 w-9 items-center justify-center rounded-[8px] text-slate-body transition-colors duration-150 hover:bg-[#f6f9fc] hover:text-navy"
            >
              <svg viewBox="0 0 20 20" className="h-4 w-4" aria-hidden>
                <path
                  d="M5 5l10 10M15 5L5 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p className="text-[length:var(--cust-small)] font-semibold uppercase tracking-[0.12em] text-brand">
              {detail.eyebrow}
            </p>
            <h3 className="mt-[0.6em] max-w-[22ch] text-[length:var(--cust-lead)] font-medium leading-[1.25] tracking-[-0.02em] text-navy">
              {detail.title}
            </h3>
            <p className="mt-[0.9em] max-w-[62ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
              {detail.body}
            </p>

            <ul className="mt-[clamp(16px,1.5vw,30px)] space-y-[0.7em] text-[length:var(--cust-body)]">
              {detail.points.map((p) => (
                <li key={p} className="flex gap-2.5 leading-[1.55]">
                  <svg
                    viewBox="0 0 20 20"
                    className="mt-[0.28em] h-[0.85em] w-[0.85em] shrink-0 text-brand"
                    aria-hidden
                  >
                    <path
                      d="M4 10.6 8 14.6 16 5.6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-slate-body">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-[clamp(18px,1.7vw,34px)] grid gap-4 border-t border-line pt-[clamp(14px,1.3vw,26px)] sm:grid-cols-3">
              {detail.stats.map(([n, label]) => (
                <div key={label}>
                  <p className="text-[length:var(--cust-lead)] font-medium leading-none tracking-[-0.02em] text-navy">
                    {n}
                  </p>
                  <p className="mt-[0.6em] text-[length:var(--cust-small)] leading-[1.45] text-slate-body">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
