"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoBadge from "./PhotoBadge";

type Item = {
  id: string;
  img: string;
  lead: string;
  body: string;
  cta: string;
};

/** Artwork lives in /public as generated SVG scenes. */
const ITEMS: Item[] = [
  {
    id: "pint",
    img: "/aaruvo-voice.png",
    lead: "How to shop with your voice in one minute.",
    body: "A short guide for anyone who finds typing hard. Press the mic, say what you need, and check the list before you pay.",
    cta: "Watch",
  },
  {
    id: "checkout",
    img: "/aaruvo-payment.png",
    lead: "Pay online, safely, every time.",
    body: "AARUVO does not take cash on delivery. You pay online first, so there is no confusion at the door.",
    cta: "Watch",
  },
  {
    id: "crypto",
    img: "/aaruvo-delivery.png",
    lead: "What happens if a shop runs out of an item.",
    body: "We look for the same item in another shop nearby, show you the price, and only continue when you say yes.",
    cta: "Read",
  },
  {
    id: "sessions",
    img: "/aaruvo-monthly.svg",
    lead: "Shopping for the month, in one go.",
    body: "Set your regular items once. We remind you before they run out, and you approve with a single tap.",
    cta: "Read",
  },
  {
    id: "roadmap",
    img: "/aaruvo-shopowner.png",
    lead: "For shop owners: list your items by talking.",
    body: "Say the item name, price and stock. We prepare the listing and read it back before anything is published.",
    cta: "Read",
  },
];

export default function Happening() {
  const [open, setOpen] = useState(0);
  const item = ITEMS[open];

  const step = (dir: 1 | -1) =>
    setOpen((n) => Math.min(ITEMS.length - 1, Math.max(0, n + dir)));

  const arrow =
    "flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#ffd4d4] text-brand transition-colors duration-150 enabled:hover:bg-[#fff6f6] disabled:text-[#c3c9e6]";

  return (
    <section className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="flex items-end justify-between gap-6 pb-[clamp(14px,1.3vw,26px)]">
          <p className="text-[length:var(--cust-lead)] font-medium leading-[1.42] tracking-[-0.015em]">
            <span className="block text-navy">What&apos;s happening</span>
            <span className="block text-slate-body">
              News and tips from AARUVO.
            </span>
          </p>

          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              aria-label="Previous"
              onClick={() => step(-1)}
              disabled={open === 0}
              className={arrow}
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
              onClick={() => step(1)}
              disabled={open === ITEMS.length - 1}
              className={arrow}
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
        </div>

        {/* Clicking a strip grows it and collapses the rest — the panels share
            one row, so the widths animate against each other. */}
        <div className="flex h-[clamp(220px,26vw,520px)] gap-2">
          {ITEMS.map((it, i) => {
            const on = i === open;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => setOpen(i)}
                aria-expanded={on}
                aria-label={it.lead}
                className={`relative h-full overflow-hidden rounded-[4px] transition-[flex-grow] duration-[600ms] ease-out ${
                  on ? "flex-grow-[9] cursor-default" : "flex-grow cursor-pointer"
                }`}
                style={{ flexBasis: 0, minWidth: 0 }}
              >
                <Image
                  src={it.img}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover"
                />
                {on && <PhotoBadge className="text-[length:var(--cust-body)]" />}
                {!on && (
                  <span className="absolute inset-0 bg-navy/0 transition-colors duration-200 hover:bg-navy/15" />
                )}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-start justify-between gap-4 pt-[clamp(12px,1.1vw,22px)]">
          <p
            key={item.id}
            className="max-w-[62ch] text-[length:var(--cust-body)] leading-[1.5] [animation:quote-in_400ms_ease-out]"
          >
            <span className="font-semibold text-navy">{item.lead}</span>{" "}
            <span className="text-slate-body">{item.body}</span>
          </p>

          <a
            href="#"
            className="group flex shrink-0 items-center gap-1.5 rounded-[4px] border border-[#ffd4d4] px-[clamp(10px,0.85vw,17px)] py-[clamp(7px,0.55vw,11px)] text-[length:var(--cust-small)] font-medium leading-none text-brand transition-colors duration-200 hover:bg-[#fff6f6]"
          >
            {item.cta}
            <span className="transition-transform duration-200 group-hover:translate-x-[2px]">
              <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                <path
                  d="M5.5 2.5 11 8l-5.5 5.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
