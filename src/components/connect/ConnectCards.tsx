"use client";

import { useRef, useState } from "react";
import Frame from "./Frame";

type Card = {
  id: string;
  title: string;
  body: string;
  cta: string;
  brands: React.ReactNode[];
};

const Grocery = (
  <span className="flex items-center gap-1.5">
    <svg viewBox="0 0 40 44" className="h-[1.3em] w-[1.2em]" aria-hidden>
      <path d="M31 8 25 6l-4-4-3 1-2 3-9 2-5 32 22 4 16-3z" fill="#5a5f6b" />
      <path
        d="M23 18c-1.6-.9-3-1.1-4-.6-1.4.7-1.2 2.2.4 2.9 2.2 1 3.4 2.3 3.2 4.2-.3 2.6-3 3.7-5.8 2.7l.6-2.6c1.5.8 3 .9 3.2-.3.1-.9-.8-1.4-2.2-2.1-2-1-3-2.4-2.6-4.4.5-2.6 3.2-3.9 6.4-2.7z"
        fill="#fff"
      />
    </svg>
    <span className="font-bold tracking-[-0.02em]">Grocery</span>
  </span>
);

const CARDS: Card[] = [
  {
    id: "platforms",
    title: "Facilitate and monetise platform payments",
    body: "Make your software integral to your users' businesses by embedding our best-in-class payments technology to create your own payments service.",
    cta: "Connect for platforms",
    brands: [
      Grocery,
      <span key="mb" className="font-medium tracking-[-0.03em]">
        a home in Chennai
      </span>,
      <span key="hc" className="flex items-center gap-1.5 font-semibold">
        <svg viewBox="0 0 12 16" className="h-[1.1em] w-[0.8em]" aria-hidden>
          <rect width="4" height="16" rx="1" fill="currentColor" />
        </svg>
        City Hardware
      </span>,
    ],
  },
  {
    id: "marketplaces",
    title: "Power payments for your marketplace",
    body: "Onboard, verify, and pay out your users at scale – whether you run an on-demand, retail, or crowdfunding marketplace.",
    cta: "Connect for marketplaces",
    brands: [
      <span key="ss" className="text-[0.86em] font-black tracking-[0.02em]">
        Priya Tailors
      </span>,
      <span key="lyft" className="text-[1.15em] font-black tracking-[-0.04em]">
        lyft
      </span>,
      <span key="ks" className="text-[0.86em] font-black tracking-[0.03em]">
        City Wholesale
      </span>,
    ],
  },
  {
    id: "enterprise",
    title: "Streamline money movement for your enterprise",
    body: "Route funds, make payments, and add services to introduce new revenue, overhaul franchise operations, or scale commerce globally.",
    cta: "Future-proof your enterprise",
    brands: [
      <span
        key="ford"
        className="rounded-full border-2 border-current px-2.5 py-1 text-[0.8em] font-bold italic"
      >
        Hardware
      </span>,
      <span key="bmw" className="font-bold tracking-[0.06em]">
        Dairy
      </span>,
      <span key="sf" className="font-semibold tracking-[-0.01em]">
        Wholesale
      </span>,
    ],
  },
];

export default function ConnectCards() {
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
    const step = el.firstElementChild?.clientWidth ?? el.clientWidth / 2;
    el.scrollBy({ left: dir * (step + 24), behavior: "smooth" });
  };

  const arrow =
    "flex h-9 w-9 items-center justify-center rounded-full transition-colors duration-150 disabled:text-[#c3cbd6]";

  return (
    <Frame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(20px,2vw,44px)]">
        <div className="flex justify-end gap-2 pb-[clamp(14px,1.4vw,30px)]">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => nudge(-1)}
            disabled={atStart}
            className={`${arrow} border border-[#dfe6ee] text-slate-body enabled:hover:bg-[#f6f9fc]`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M13 8H3m0 0 4.5-4.5M3 8l4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => nudge(1)}
            disabled={atEnd}
            className={`${arrow} bg-[#ffe4e4] text-[#fc393a] enabled:hover:bg-[#ffd0d0]`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
              <path
                d="M3 8h10m0 0-4.5-4.5M13 8l-4.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* The rail overhangs on purpose so the next card peeks in, the way the
            reference teases the third panel. */}
        <div
          ref={rail}
          onScroll={sync}
          className="-mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((c) => (
            <article
              key={c.id}
              className="flex w-[clamp(260px,47%,720px)] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] border-t-[5px] border-[#fc393a] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.08),0_14px_40px_rgba(20,20,43,0.10)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_22px_56px_rgba(20,20,43,0.14)]"
            >
              <div className="flex flex-1 flex-col p-[clamp(20px,2.2vw,46px)]">
                <h3 className="max-w-[22ch] text-[length:var(--connect-card-h)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
                  {c.title}
                </h3>
                <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[44ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                  {c.body}
                </p>
                <a
                  href="#"
                  className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-2 self-start text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
                >
                  {c.cta}
                  <svg
                    viewBox="0 0 20 12"
                    className="h-2.5 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
                    aria-hidden
                  >
                    <path
                      d="M1 6h17m0 0-5-4.5M18 6l-5 4.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <div className="mt-auto flex items-center justify-between gap-4 border-t border-line pt-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] text-[#3c4a5c]">
                  {c.brands.map((b, i) => (
                    <span key={i} className="flex items-center">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Frame>
  );
}
