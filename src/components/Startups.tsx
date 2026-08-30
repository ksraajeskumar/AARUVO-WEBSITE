"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import PhotoBadge from "./PhotoBadge";
import ArrowLink from "./ArrowLink";

/* ── Card artwork ───────────────────────────────────────────────────────── */

function Shot({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      fill
      sizes="(max-width: 1024px) 60vw, 28vw"
      className="object-cover"
    />
  );
}

type Card = {
  id: string;
  wordmark: React.ReactNode;
  art: React.ReactNode;
  caption: string;
  cta: string;
};

const CARDS: Card[] = [
  {
    id: "veg",
    art: <Shot src="/aaruvo-vegetables.png" />,
    wordmark: <span>Vegetable stall</span>,
    caption: "A vegetable stall now takes morning orders before opening.",
    cta: "Read the story",
  },
  {
    id: "bakery",
    art: <Shot src="/aaruvo-kirana.png" />,
    wordmark: <span>Bakery</span>,
    caption: "A bakery sells out its evening stock every day.",
    cta: "Read the story",
  },
  {
    id: "mobile",
    art: <Shot src="/aaruvo-electronics.png" />,
    wordmark: <span>Mobile shop</span>,
    caption: "A mobile shop answers charger questions without a call.",
    cta: "Read the story",
  },
  {
    id: "cloth",
    art: <Shot src="/aaruvo-fashion.png" />,
    wordmark: <span>Cloth shop</span>,
    caption: "A cloth shop takes bulk orders from three nearby towns.",
    cta: "Read the story",
  },
];

/* ── Promo tiles ────────────────────────────────────────────────────────── */

const PROMOS = [
  {
    lead: "Free to join.",
    body: "List your shop, add your items and start taking orders. We help you set it up over a phone call.",
    cta: "Join now",
    art: (
      <div
        className="absolute inset-y-0 right-0 w-[46%]"
        style={{
          background:
            "linear-gradient(126deg,#ff3fd0 0%,#c026d3 34%,#7c22ce 68%,#4c1d95 100%)",
          clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
    ),
  },
  {
    lead: "Set up in one day.",
    body: "Give us your shop name, bank details and a few photos. We do the rest and you go live.",
    cta: "Start today",
    art: (
      <div className="absolute inset-y-0 right-0 w-[46%] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(160deg,#ffd23f 0%,#ffb01f 100%)",
            clipPath: "polygon(24% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(150deg,#ff8a1e 0%,#f2620f 100%)",
            clipPath: "polygon(58% 0, 100% 62%, 100% 100%, 22% 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(150deg,#ffd23f 0%,#ffa61e 100%)",
            clipPath: "polygon(78% 34%, 100% 100%, 46% 100%)",
          }}
        />
      </div>
    ),
  },
];

export default function Startups() {
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
    el.scrollBy({ left: dir * (step + 16), behavior: "smooth" });
  };

  const arrow =
    "flex h-8 w-8 items-center justify-center rounded-[4px] border border-[#ffd4d4] text-brand transition-colors duration-150 enabled:hover:bg-[#fff6f6] disabled:text-[#c3c9e6]";

  return (
    <section className="mt-[clamp(20px,2vw,40px)]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="grid gap-x-10 gap-y-6 border-t border-line pb-[clamp(14px,1.3vw,26px)] pt-[clamp(24px,2.2vw,44px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h3 className="max-w-[30ch] text-[length:var(--cust-lead)] font-medium leading-[1.3] tracking-[-0.015em] text-navy">
              Small shops get the same tools as the big stores
            </h3>
            <a
              href="#"
              className="group mt-[clamp(14px,1.3vw,26px)] inline-flex items-center gap-1.5 rounded-[4px] bg-brand px-[clamp(12px,1vw,20px)] py-[clamp(8px,0.62vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              AARUVO for small shops
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

          <p className="max-w-[52ch] text-[length:var(--cust-body)] leading-[1.55] text-slate-body">
            No monthly fee to start. Add your items by talking. We show your shop to
            people living close to you, and the money reaches your bank.
          </p>
        </div>

        <div className="flex justify-end gap-2 pb-[clamp(10px,0.9vw,18px)]">
          <button
            type="button"
            aria-label="Previous stories"
            onClick={() => nudge(-1)}
            disabled={atStart}
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
            aria-label="More stories"
            onClick={() => nudge(1)}
            disabled={atEnd}
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

        {/* The rail is wider than the viewport on purpose, so the next card is
            always half-visible and the arrows have somewhere to go. */}
        <div
          ref={rail}
          onScroll={sync}
          className="-mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((c) => (
            <div
              key={c.id}
              className="w-[clamp(210px,27.5%,440px)] shrink-0 snap-start"
            >
              <div className="relative aspect-[214/280] w-full overflow-hidden rounded-[6px]">
                {c.art}
                <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <PhotoBadge className="bottom-auto left-[5%] top-[5%] text-[length:var(--cust-small)]" />
                <span className="absolute bottom-[5%] left-[5%] text-[length:var(--cust-title)] font-semibold leading-none text-white">
                  {c.wordmark}
                </span>
              </div>
              <p className="mt-[clamp(10px,0.9vw,18px)] text-[length:var(--cust-body)] leading-[1.45] text-navy">
                {c.caption}
              </p>
              <div className="mt-[clamp(8px,0.7vw,14px)]">
                <ArrowLink arrow="long">{c.cta}</ArrowLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[clamp(24px,2.3vw,46px)] grid gap-4 lg:grid-cols-2">
          {PROMOS.map((p) => (
            <div
              key={p.lead}
              className="relative isolate overflow-hidden rounded-[6px] bg-[#f6f9fc]"
            >
              {p.art}
              <div className="relative z-10 w-[56%] p-[clamp(14px,1.35vw,27px)] text-[length:var(--cust-body)]">
                <p className="leading-[1.5]">
                  <span className="font-semibold text-navy">{p.lead}</span>{" "}
                  <span className="text-slate-body">{p.body}</span>
                </p>
                <div className="mt-[clamp(10px,0.9vw,18px)]">
                  <ArrowLink>{p.cta}</ArrowLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
