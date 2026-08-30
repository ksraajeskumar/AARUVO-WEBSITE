"use client";

import { useRef, useState } from "react";
import Frame from "./Frame";

/* ── Card artwork ───────────────────────────────────────────────────────── */

function ReaderArt() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[54%]">
        <div className="rounded-[1.4em] bg-[#e8eaec] p-[0.5em] shadow-[0_14px_34px_rgba(20,20,43,0.14)]">
          <div className="rounded-[1.1em] bg-white px-[1em] py-[1.6em] text-center">
            <span className="mx-auto flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full bg-[#0aa85a]">
              <svg viewBox="0 0 20 20" className="h-[1.2em] w-[1.2em]" aria-hidden>
                <path
                  d="M4.6 10.4 8.4 14.2 15.4 6"
                  fill="none"
                  stroke="#fff"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-[0.9em] text-[1.05em] font-semibold text-navy">Approved</p>
            <p className="mt-[0.2em] text-[0.85em] text-muted">£173.88</p>
          </div>
        </div>
        <div className="mx-auto -mt-[0.6em] w-[78%] rounded-b-[0.8em] bg-white p-[0.9em] shadow-[0_10px_24px_rgba(20,20,43,0.10)]">
          <span className="flex items-center gap-[0.4em]">
            <span className="relative flex h-[2em] w-[3.1em]">
              <span className="absolute left-0 h-[2em] w-[2em] rounded-full bg-[#eb001b]" />
              <span className="absolute right-0 h-[2em] w-[2em] rounded-full bg-[#f79e1b] opacity-90" />
            </span>
            <span className="text-[0.6em] leading-tight text-muted [writing-mode:vertical-rl]">
              commercial
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

function TaxArt() {
  return (
    <div className="relative flex h-full items-center px-[1em]">
      <div className="w-full rounded-[0.6em] bg-white p-[1.1em] shadow-[0_1px_3px_rgba(20,20,43,0.08),0_10px_26px_rgba(20,20,43,0.10)]">
        <p className="flex items-center gap-[0.5em] text-[0.9em] font-semibold text-navy">
          <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-full bg-[#7c3aed] text-[0.7em] text-white">
            S
          </span>
          AARUVO Store
        </p>
        <p className="mt-[1em] text-[0.8em] text-slate-body">Pay AARUVO Store</p>
        <p className="text-[1.7em] font-semibold leading-tight tracking-[-0.03em] text-navy">
          ₹22.05
        </p>
        <div className="mt-[0.9em] space-y-[0.55em] text-[0.78em]">
          <div className="flex justify-between border-b border-line pb-[0.5em] text-slate-body">
            <span>Digital subscription</span>
            <span className="text-navy">₹20.00</span>
          </div>
          <div className="flex justify-between border-b border-line pb-[0.5em] text-[#7c3aed]">
            <span>Sales tax 10.25%</span>
            <span>₹2.05</span>
          </div>
          <div className="flex justify-between pt-[0.2em] text-slate-body">
            <span>Total due today</span>
            <span className="text-navy">₹22.05</span>
          </div>
        </div>
      </div>

      <div className="absolute right-[-4%] top-[10%] w-[52%] rounded-[0.5em] bg-white p-[0.8em] text-[0.72em] shadow-[0_1px_3px_rgba(20,20,43,0.10),0_12px_28px_rgba(20,20,43,0.14)]">
        <div className="flex justify-between text-slate-body">
          <span>Zip code</span>
          <span className="text-navy">99999</span>
        </div>
        <div className="mt-[0.45em] flex justify-between text-slate-body">
          <span>Seattle tax rate</span>
          <span className="text-navy">10.25%</span>
        </div>
      </div>
    </div>
  );
}

function BillingArt() {
  const plan = (
    name: string,
    sub: string,
    price: string,
    popular: boolean,
    includes: string
  ) => (
    <div
      className={`flex-1 rounded-[0.6em] p-[0.9em] ${
        popular ? "bg-[#fff6f6]" : "bg-white"
      }`}
    >
      <p className="flex items-center justify-between text-[1.05em] font-semibold text-navy">
        {name}
        {popular && (
          <span className="rounded-[3px] bg-[#ffe4e4] px-[0.45em] py-[0.2em] text-[0.5em] font-medium text-[#e02a2b]">
            Popular
          </span>
        )}
      </p>
      <p className="mt-[0.15em] text-[0.72em] text-slate-body">{sub}</p>
      <p className="mt-[0.7em] text-[1.35em] font-semibold leading-none text-navy">
        {price}
        <span className="ml-[0.3em] align-middle text-[0.42em] font-normal leading-[1.1] text-slate-body">
          per
          <br />
          month
        </span>
      </p>
      <div className="mt-[0.8em] rounded-[4px] bg-[#fc393a] py-[0.55em] text-center text-[0.68em] font-medium text-white">
        Subscribe
      </div>
      <p className="mt-[0.8em] text-[0.68em] text-slate-body">This includes:</p>
      <p className="mt-[0.35em] flex gap-[0.35em] text-[0.68em] text-slate-body">
        <svg viewBox="0 0 16 16" className="mt-[0.15em] h-[0.9em] w-[0.9em] shrink-0" aria-hidden>
          <circle cx="8" cy="8" r="8" fill="#e7ecf2" />
          <path d="M4.6 8.4 6.9 10.7 11.4 5.6" fill="none" stroke="#697386" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {includes}
      </p>
    </div>
  );

  return (
    <div className="flex h-full items-center px-[1em]">
      <div className="w-full rounded-[0.6em] bg-white p-[1em] shadow-[0_1px_3px_rgba(20,20,43,0.08),0_10px_26px_rgba(20,20,43,0.10)]">
        <p className="flex items-center gap-[0.5em] text-[0.9em] font-semibold text-navy">
          <span className="flex h-[1.6em] w-[1.6em] items-center justify-center rounded-full bg-[#12121a] text-[0.7em] text-white">
            A
          </span>
          Abstraction Magazine
        </p>
        <div className="mt-[0.9em] flex gap-[0.7em]">
          {plan("Basic", "Digital access", "₹9", false, "Unlimited access to")}
          {plan("Premium", "Print access", "₹19", true, "Monthly print issues")}
        </div>
      </div>
    </div>
  );
}

/* ── Cards ──────────────────────────────────────────────────────────────── */

const CARDS = [
  {
    id: "terminal",
    badge: "Terminal",
    badgeBg: "#e8f6ff",
    art: <ReaderArt />,
    artBg: "#f6f9fc",
    title: "Point-of-sale payments",
    body: "Unify in-person and online payments.",
    cta: null,
  },
  {
    id: "tax",
    badge: "Tax",
    badgeBg: "#f5efff",
    art: <TaxArt />,
    artBg: "linear-gradient(180deg,#ffe9ef 0%,#f4f0ff 60%,#f7f5ff 100%)",
    title: "Tax automation on global payments",
    body: "Help users stay compliant by calculating tax on transactions, and automating tax registrations and filings.",
    cta: "Explore Tax",
  },
  {
    id: "billing",
    badge: "Billing",
    badgeBg: "#eafaf0",
    art: <BillingArt />,
    artBg: "#f6f9fc",
    title: "Subscriptions and invoicing",
    body: "Enable your users to create flexible subscriptions and billing plans.",
    cta: null,
  },
];

export default function ConnectSolutions() {
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
    <Frame className="bg-[#f6f9fc]">
      <div className="px-[clamp(16px,1.7vw,34px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-[#fc393a]">
          Unified payments stack
        </p>
        <h3 className="mt-[clamp(14px,1.4vw,30px)] max-w-[24ch] text-[length:var(--connect-sub)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
          Add new lines of business with AARUVO&rsquo;s integrated financial
          solutions
        </h3>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[58ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Take orders, get paid, keep track of stock and see what people nearby
          are looking for &ndash; without buying any software or hiring anyone to
          run it.
        </p>
      </div>

      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(16px,1.6vw,34px)]">
        <div className="flex justify-end gap-2 pb-[clamp(12px,1.2vw,26px)]">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => nudge(-1)}
            disabled={atStart}
            className={`${arrow} border border-[#dfe6ee] text-slate-body enabled:hover:bg-white`}
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
            className={`${arrow} bg-[#ffe4e4] text-[#fc393a] enabled:hover:bg-[#ffd0d0]`}
          >
            <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
              <path d="M3 8h10m0 0-4.5-4.5M13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          ref={rail}
          onScroll={sync}
          className="-mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {CARDS.map((c) => (
            <article
              key={c.id}
              className="group flex w-[clamp(250px,31.5%,520px)] shrink-0 snap-start flex-col overflow-hidden rounded-[10px] bg-white text-[length:var(--cust-body)] shadow-[0_1px_3px_rgba(20,20,43,0.06),0_14px_38px_rgba(20,20,43,0.08)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_22px_54px_rgba(20,20,43,0.13)]"
            >
              <div
                className="h-[clamp(180px,17vw,330px)] shrink-0"
                style={{ background: c.artBg }}
              >
                {c.art}
              </div>
              <div className="flex flex-1 flex-col p-[clamp(16px,1.6vw,34px)]">
                <span
                  className="inline-flex items-center gap-2 self-start rounded-[5px] px-[0.7em] py-[0.45em] text-[0.86em] font-medium text-navy"
                  style={{ background: c.badgeBg }}
                >
                  <span className="h-[1em] w-[1em] rounded-[3px] bg-gradient-to-br from-[#25c1e0] to-[#0a6fe8]" />
                  {c.badge}
                </span>
                <h4 className="mt-[clamp(12px,1.2vw,26px)] max-w-[18ch] text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                  {c.title}
                </h4>
                <p className="mt-[clamp(10px,1vw,20px)] leading-[1.6] text-slate-body">
                  {c.body}
                </p>
                {c.cta && (
                  <a
                    href="#"
                    className="mt-[clamp(10px,1vw,20px)] inline-flex items-center gap-1.5 self-start font-medium text-[#fc393a] opacity-0 transition-all duration-300 hover:text-[#e02a2b] group-hover:opacity-100"
                  >
                    {c.cta}
                    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                      <path d="M5.5 2.5 11 8l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Frame>
  );
}
