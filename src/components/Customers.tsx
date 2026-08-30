"use client";

import { useState } from "react";
import Image from "next/image";
import PhotoBadge from "./PhotoBadge";

type Story = {
  id: string;
  brand: string;
  title: string;
  img: string;
  stats: [string, string][];
  products: string;
};

const STORIES: Story[] = [
  {
    id: "weekly",
    brand: "The weekly shop",
    title: "A family finishes the weekly shopping in one voice message.",
    img: "/aaruvo-kirana.png",
    stats: [
      ["1", "voice message"],
      ["8 min", "to a full basket"],
    ],
    products: "Voice shopping, nearby shops, home delivery",
  },
  {
    id: "corner",
    brand: "A corner shop",
    title: "A corner shop starts taking orders from the whole street.",
    img: "/aaruvo-wholesale.png",
    stats: [
      ["0", "computer skills needed"],
      ["Same day", "orders from the street"],
    ],
    products: "Shop listing, voice product adding, direct payouts",
  },
  {
    id: "amma",
    brand: "Shopping by voice",
    title: "A grandmother orders her month’s groceries just by speaking.",
    img: "/aaruvo-elder.png",
    stats: [
      ["No typing", "at all"],
      ["Read aloud", "on every screen"],
    ],
    products: "Voice ordering, read-aloud, monthly reminders",
  },
  {
    id: "tailor",
    brand: "Buying in bulk",
    title: "A small tailor sells clothes in bulk to nearby towns.",
    img: "/aaruvo-fashion.png",
    stats: [
      ["Bulk", "orders made simple"],
      ["1 day", "to list a full shop"],
    ],
    products: "Wholesale mode, bulk pricing, delivery",
  },
];

function Chevron() {
  return (
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
  );
}

function BrandMark({ id }: { id: string }) {
  const look: Record<string, { bg: string; fg: string; ch: string }> = {
    weekly: { bg: "#fc393a", fg: "#fff", ch: "\u2630" },
    corner: { bg: "#4c9a4a", fg: "#fff", ch: "\u2302" },
    amma: { bg: "#060c17", fg: "#fff", ch: "\u25CF" },
    tailor: { bg: "#f5b301", fg: "#12100c", ch: "\u2702" },
  };
  const l = look[id] ?? look.weekly;

  return (
    <span
      className="flex h-[1.55em] w-[1.55em] shrink-0 items-center justify-center rounded-[4px] text-[0.8em] leading-none"
      style={{ background: l.bg, color: l.fg }}
      aria-hidden
    >
      {l.ch}
    </span>
  );
}

export default function Customers() {
  const [openId, setOpenId] = useState(STORIES[0].id);

  return (
    <section className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="border-t border-line">
          <p className="py-[clamp(20px,1.7vw,32px)] text-[length:var(--cust-lead)] font-medium leading-[1.42] tracking-[-0.015em]">
            <span className="text-navy">Used by families and shops alike.</span>{" "}
            <span className="text-slate-body">
              Whether you are buying for your home or selling from your shop, AARUVO fits the way you already work.
            </span>
          </p>
        </div>

        <div className="grid gap-x-10 gap-y-6 border-t border-line pb-[clamp(16px,1.5vw,30px)] pt-[clamp(24px,2.2vw,44px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h3 className="max-w-[34ch] text-[length:var(--cust-lead)] font-medium leading-[1.3] tracking-[-0.015em] text-navy">
              Own a shop? Sell to more people nearby without extra work
            </h3>
            <a
              href="#"
              className="group mt-[clamp(14px,1.3vw,26px)] inline-flex items-center gap-1.5 rounded-[4px] bg-brand px-[clamp(12px,1vw,20px)] py-[clamp(8px,0.62vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              AARUVO for shops
              <span className="transition-transform duration-200 group-hover:translate-x-[2px]">
                <Chevron />
              </span>
            </a>
          </div>

          <p className="max-w-[58ch] text-[length:var(--cust-body)] leading-[1.55] text-slate-body">
            Add your products by simply talking. Get orders from people near you.
            Get paid straight to your bank. No computer skills needed.
          </p>
        </div>

        {/* One story open at a time; the panel grows with a grid-row so the
            image never needs a hard-coded height. */}
        <div className="mt-[clamp(4px,0.5vw,10px)]">
          {STORIES.map((s, i) => {
            const on = openId === s.id;
            return (
              <div
                key={s.id}
                className={i > 0 ? "border-t border-dashed border-line" : ""}
              >
                <div className="flex items-center gap-3 py-[clamp(10px,0.95vw,19px)]">
                  <button
                    type="button"
                    onClick={() => setOpenId(s.id)}
                    aria-expanded={on}
                    className="flex min-w-0 flex-1 items-center gap-[0.72em] text-left text-[length:var(--cust-title)]"
                  >
                    <BrandMark id={s.id} />
                    <span className="font-medium tracking-[-0.01em] text-navy">
                      {s.title}
                    </span>
                  </button>

                  {on ? (
                    <a
                      href="#"
                      className="group flex shrink-0 items-center gap-1.5 rounded-[4px] border border-[#ffd4d4] px-[clamp(10px,0.85vw,17px)] py-[clamp(7px,0.55vw,11px)] text-[length:var(--cust-small)] font-medium leading-none text-brand transition-colors duration-200 hover:bg-[#fff6f6]"
                    >
                      Read the story
                      <span className="transition-transform duration-200 group-hover:translate-x-[2px]">
                        <Chevron />
                      </span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setOpenId(s.id)}
                      aria-label={`Open ${s.brand} story`}
                      className="flex h-[1.9em] w-[1.9em] shrink-0 items-center justify-center rounded-[4px] bg-[#ffe9e9] text-[length:var(--cust-small)] text-brand transition-colors duration-200 hover:bg-[#ffdcdc]"
                    >
                      <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                        <path
                          d="M8 3v10M3 8h10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  )}
                </div>

                <div
                  className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                    on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`transition-opacity duration-500 ${
                        on ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      {/* A fixed band keeps all four stories the same height
                          however the source photo is proportioned. */}
                      <div className="relative aspect-[2.6/1] w-full overflow-hidden rounded-[4px]">
                        <Image
                          src={s.img}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 80vw"
                          className="object-cover"
                        />
                        <PhotoBadge className="text-[length:var(--cust-body)]" />
                      </div>

                      <div className="grid gap-x-8 gap-y-3 py-[clamp(12px,1.1vw,22px)] text-[length:var(--cust-small)] leading-[1.5] text-slate-body sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr]">
                        {s.stats.map(([n, label]) => (
                          <p key={label}>
                            <span className="font-semibold text-navy">{n}</span>{" "}
                            {label}
                          </p>
                        ))}
                        <p>
                          <span className="font-semibold text-navy">
                            Products used
                          </span>{" "}
                          <span className="text-brand">{s.products}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
