"use client";

import { useEffect, useState } from "react";
import ArrowLink from "./ArrowLink";

const DWELL = 9000;

type Voice = {
  id: string;
  brand: string;
  quote: string;
  name: string;
  role: string;
};

/**
 * Sample voices used to show the layout. Replace with real, consented
 * customer quotes before this goes live.
 */
const VOICES: Voice[] = [
  {
    id: "home",
    brand: "A home in Chennai",
    quote:
      "I just say what I need and the list is ready. My mother can use it too, because it reads everything out loud.",
    name: "Sample quote,",
    role: "replace with a real customer",
  },
  {
    id: "shop",
    brand: "A shop owner",
    quote:
      "Sample quote. Describe how a small shop added its items and started getting orders from the street.",
    name: "Sample name 1",
    role: "replace with a real shop owner",
  },
  {
    id: "first",
    brand: "A first-time user",
    quote:
      "Sample quote. Describe how someone who had never shopped online finished an order on the first try.",
    name: "Sample name 2",
    role: "replace with a real customer",
  },
  {
    id: "bulk",
    brand: "A wholesale buyer",
    quote:
      "Sample quote. Describe how a bulk order was placed and delivered without a single phone call.",
    name: "Sample name 3",
    role: "replace with a real buyer",
  },
];

function Logo({ id, on }: { id: string; on: boolean }) {
  const tone = on ? "text-navy" : "text-[#a7b0be]";
  const label: Record<string, string> = {
    home: "A home in Chennai",
    shop: "A shop owner",
    first: "A first-time user",
    bulk: "A wholesale buyer",
  };

  return (
    <span className={`text-[1.02em] font-medium tracking-[-0.01em] ${tone}`}>
      {label[id] ?? label.home}
    </span>
  );
}

export default function Testimonials() {
  const [i, setI] = useState(0);
  const v = VOICES[i];

  // The bar reads as a timer, so the panel advances when it fills.
  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % VOICES.length), DWELL);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <section className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="px-[var(--gutter)] pb-[clamp(26px,2.4vw,48px)] text-center">
          <p className="text-[length:var(--cust-title)] font-semibold tracking-[-0.02em] text-navy">
            {v.brand}
          </p>

          <blockquote
            key={v.id}
            className="mx-auto mt-[clamp(16px,1.5vw,30px)] max-w-[46ch] text-[length:var(--quote-size)] font-medium leading-[1.4] tracking-[-0.02em] text-slate-body [animation:quote-in_500ms_ease-out]"
          >
            &ldquo;{v.quote}&rdquo;
          </blockquote>

          <p className="mt-[clamp(16px,1.5vw,30px)] text-[length:var(--cust-body)] leading-[1.5]">
            <span className="font-semibold text-navy">{v.name}</span>{" "}
            <span className="text-slate-body">{v.role}</span>
          </p>

          <div className="mt-[clamp(12px,1.1vw,22px)]">
            <ArrowLink>Read the story</ArrowLink>
          </div>
        </div>

        <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
          {VOICES.map((t, n) => {
            const on = n === i;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setI(n)}
                aria-pressed={on}
                className="relative flex items-center justify-center py-[clamp(16px,1.5vw,30px)] text-[length:var(--cust-body)] outline-none transition-opacity duration-200 hover:opacity-80"
              >
                {on && (
                  <span
                    key={`${t.id}-bar`}
                    className="absolute inset-x-0 -top-px h-[2px] origin-left bg-brand"
                    style={{
                      animation: `tab-fill ${DWELL}ms linear forwards`,
                    }}
                  />
                )}
                <Logo id={t.id} on={on} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
