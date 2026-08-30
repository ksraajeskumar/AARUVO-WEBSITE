"use client";

import { useRef, useState } from "react";

const Provision = (
  <span className="relative inline-flex flex-col items-center">
    <span className="text-[1.05em] font-bold tracking-[-0.03em]">Provision</span>
    <svg viewBox="0 0 100 16" className="-mt-1 h-2.5 w-[86%]" preserveAspectRatio="none" aria-hidden>
      <path d="M2 4c22 12 62 14 92 1M84 1c8 2 12 5 10 9" fill="none" stroke="#f90" strokeWidth="4" strokeLinecap="round" />
    </svg>
  </span>
);

const Slack = (
  <span className="flex items-center gap-1.5">
    <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" aria-hidden>
      <rect x="3" y="10" width="8" height="3" rx="1.5" fill="#36c5f0" />
      <rect x="10" y="3" width="3" height="8" rx="1.5" fill="#2eb67d" />
      <rect x="13" y="11" width="8" height="3" rx="1.5" fill="#ecb22e" />
      <rect x="11" y="13" width="3" height="8" rx="1.5" fill="#e01e5a" />
    </svg>
    <span className="text-[1.05em] font-bold tracking-[-0.02em]">slack</span>
  </span>
);

const Grocery = (
  <span className="flex items-center gap-1.5">
    <svg viewBox="0 0 40 44" className="h-[1.2em] w-[1.1em]" aria-hidden>
      <path d="M31 8 25 6l-4-4-3 1-2 3-9 2-5 32 22 4 16-3z" fill="currentColor" />
      <path
        d="M23 18c-1.6-.9-3-1.1-4-.6-1.4.7-1.2 2.2.4 2.9 2.2 1 3.4 2.3 3.2 4.2-.3 2.6-3 3.7-5.8 2.7l.6-2.6c1.5.8 3 .9 3.2-.3.1-.9-.8-1.4-2.2-2.1-2-1-3-2.4-2.6-4.4.5-2.6 3.2-3.9 6.4-2.7z"
        fill="#fff"
      />
    </svg>
    <span className="text-[1.05em] font-bold tracking-[-0.02em]">Grocery</span>
  </span>
);

const Wholesale = (
  <span className="relative flex items-center justify-center">
    <svg viewBox="0 0 74 44" className="h-[1.7em] w-[2.9em]" aria-hidden>
      <path
        d="M22 12a11 11 0 0 1 18-3 13 13 0 0 1 22 6 11 11 0 0 1-2 21H20A13 13 0 0 1 8 22a11 11 0 0 1 14-10z"
        fill="currentColor"
      />
    </svg>
    <span className="absolute text-[0.38em] font-semibold text-white">Wholesale</span>
  </span>
);

const CARDS = [
  {
    id: "global-businesses",
    title: "Global businesses",
    body: "Enter new markets, optimise payments infrastructure, and easily add new business models and revenue streams.",
    logos: [
      Provision,
      <span key="woo" className="text-[1.15em] font-extrabold italic tracking-[-0.02em]">
        WOO
      </span>,
      <span
        key="turo"
        className="rounded-[3px] bg-[#0b0b0b] px-2 py-1 text-[0.72em] font-bold tracking-[0.06em] text-white"
      >
        TURO
      </span>,
    ],
  },
  {
    id: "saas",
    title: "SaaS",
    body: "Improve your customer experience, grow recurring revenue, and reduce costs with a single platform for payments, subscriptions, invoicing, accounting, and tax.",
    logos: [
      <span key="atl" className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-[1.05em] w-[1.05em]" aria-hidden>
          <path d="M7.5 11 2 21h11z" fill="currentColor" />
          <path d="M12 3 22 21h-8L9 12z" fill="currentColor" opacity=".7" />
        </svg>
        <span className="text-[0.86em] font-bold tracking-[0.06em]">Provision store</span>
      </span>,
      Slack,
      <span key="lm" className="font-serif text-[1.05em] italic">
        Meena Bakery
      </span>,
    ],
  },
  {
    id: "platforms-uc",
    title: "Platforms",
    body: "Facilitate multi-party payments and payouts, support customers with any business model, and offer tailored financial services to accelerate growth and revenue.",
    logos: [
      Grocery,
      Wholesale,
      <span key="ana" className="flex items-center gap-1">
        <span className="text-[1em] font-bold tracking-[0.04em]">ANA</span>
        <svg viewBox="0 0 30 14" className="h-[0.7em] w-[1.4em]" aria-hidden>
          <path d="M2 12 28 2l-6 10z" fill="currentColor" />
        </svg>
      </span>,
    ],
  },
  {
    id: "marketplaces-uc",
    title: "Marketplaces",
    body: "Join the marketplaces that onboard sellers in minutes, split funds across parties, and pay out globally on one platform.",
    logos: [
      <span key="ic" className="flex items-center gap-1.5">
        <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" aria-hidden>
          <path d="M12.4 8.4c2.4 2 4 5.6 3.6 11-5-1.2-7.6-4.2-8.4-7.4z" fill="#f36d21" />
          <path d="M12.8 7.6c1.4-2.4 3.6-3.4 6-3-.4 2.6-2 4.2-4.4 4.6z" fill="#43b02a" />
          <path d="M11.6 7.4C10.6 5.4 8.8 4.4 6.6 4.6c.2 2.4 1.6 3.9 3.6 4.3z" fill="#43b02a" />
        </svg>
        <span className="text-[1em] font-bold tracking-[-0.02em]">Vegetables</span>
      </span>,
      <span key="lyft" className="text-[1.2em] font-black tracking-[-0.04em]">
        lyft
      </span>,
      <span key="ks" className="text-[0.8em] font-black tracking-[0.03em]">
        City Wholesale
      </span>,
    ],
  },
];

export default function EnterpriseExplore() {
  const rail = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = () => {
    const el = rail.current;
    if (!el) return;
    setAtStart(el.scrollLeft < 8);
    setAtEnd(el.scrollLeft > el.scrollWidth - el.clientWidth - 8);
  };

  const nudge = (dir: 1 | -1) => {
    const el = rail.current;
    if (!el) return;
    const step = el.firstElementChild?.clientWidth ?? el.clientWidth / 3;
    el.scrollBy({ left: dir * (step + 20), behavior: "smooth" });
  };

  const arrow =
    "flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150 disabled:text-[#c3cbd6]";

  return (
    <section className="bg-white">
      <div className="px-[var(--hero-indent)] py-[clamp(40px,4.4vw,96px)]">
        <div className="flex items-end justify-between gap-8">
          <h2 className="max-w-[20ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
            Explore AARUVO for enterprise businesses like yours
          </h2>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => nudge(-1)}
              disabled={atStart}
              className={`${arrow} border border-line text-slate-body enabled:hover:bg-[#f6f9fc]`}
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                <path d="M13 8H3m0 0 4.5-4.5M3 8l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next"
              onClick={() => nudge(1)}
              disabled={atEnd}
              className={`${arrow} bg-[#ffe9e9] text-brand enabled:hover:bg-[#ffdcdc]`}
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                <path d="M3 8h10m0 0-4.5-4.5M13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* The rail overhangs so the next card peeks in, as on the reference. */}
        <div
          ref={rail}
          onScroll={sync}
          className="-mx-2 mt-[clamp(20px,2vw,44px)] flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((c) => (
            <article
              key={c.id}
              className="flex w-[clamp(250px,30%,520px)] shrink-0 snap-start flex-col rounded-[8px] border-t-[5px] border-brand bg-white p-[clamp(18px,1.9vw,40px)] shadow-[0_1px_3px_rgba(20,20,43,0.06),0_14px_38px_rgba(20,20,43,0.09)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_24px_58px_rgba(20,20,43,0.14)]"
            >
              <h3 className="text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                {c.title}
              </h3>
              <p className="mt-[clamp(12px,1.2vw,26px)] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                {c.body}
              </p>
              <a
                href="#"
                className="group mt-[clamp(12px,1.2vw,26px)] inline-flex items-center gap-1.5 self-start text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                Learn more
                <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden>
                  <path d="M5.5 2.5 11 8l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>

              <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] text-[#3c4a5c]">
                {c.logos.map((l, i) => (
                  <span key={i} className="flex items-center">
                    {l}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
