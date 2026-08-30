"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Line breaks are fixed so they match the reference exactly at every width. */
const LINES: { text: string; tone: "dark" | "light" }[] = [
  { text: "Tell us what you need. We get it done.", tone: "dark" },
  { text: "Say it in your own words, by voice or by typing.", tone: "light" },
  { text: "We find it in shops near you and bring it home —", tone: "light" },
  { text: "then stay with you until the job is finished.", tone: "light" },
];

/**
 * Per-line entrance delay, computed once at module scope so the stagger runs
 * continuously across the four lines without mutating anything during render.
 */
const LINE_DELAYS = (() => {
  let words = 0;
  return LINES.map((line) => {
    const delay = 0.16 + words * 0.02;
    words += line.text.split(" ").length;
    return delay;
  });
})();

/** Live-ticking count of needs finished on AARUVO. */
function GdpTicker() {
  const [value, setValue] = useState(4128637);
  const raf = useRef(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    let last = performance.now();
    const tick = (now: number) => {
      raf.current = requestAnimationFrame(tick);
      if (now - last < 90) return;
      last = now;
      setValue((v) => v + (Math.random() < 0.35 ? 1 : 0));
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <span className="text-muted tabular-nums">
      {Math.floor(value).toLocaleString("en-IN")}
    </span>
  );
}

function Line({
  text,
  className,
  delay,
}: {
  text: string;
  className?: string;
  delay: number;
}) {
  return (
    <span className={cn("block", className)}>
      {text.split(" ").map((word, i) => (
        <Fragment key={`${word}-${i}`}>
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: delay + i * 0.02 }}
          >
            {word}
          </motion.span>{" "}
        </Fragment>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative z-10">
      <div className="w-full pb-[var(--hero-pb)] pl-[var(--hero-indent)] pr-[var(--gutter)] pt-[var(--hero-pt)]">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.1 }}
          className="text-[length:var(--body-size)] font-medium tracking-[-0.01em] text-navy"
        >
          Everyday needs finished with AARUVO: <GdpTicker />
        </motion.p>

        <h1 className="mt-[var(--hero-h1-mt)] text-[length:var(--h1-size)] font-semibold leading-[1.22] tracking-[-0.035em]">
          {LINES.map((line, i) => (
            <Line
              key={line.text}
              text={line.text}
              className={line.tone === "dark" ? "text-navy" : "text-slate-body"}
              delay={LINE_DELAYS[i]}
            />
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.62 }}
          className="mt-[var(--hero-cta-mt)]"
        >
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-md bg-brand px-[var(--btn-px)] py-[var(--btn-py)] text-[length:var(--body-size)] font-semibold leading-none text-white shadow-[0_4px_10px_rgba(50,50,93,0.12),0_2px_5px_rgba(0,0,0,0.07)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-hover hover:shadow-[0_7px_16px_rgba(50,50,93,0.16),0_3px_7px_rgba(0,0,0,0.09)]"
          >
            Start now
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-[3px]"
              aria-hidden
            >
              <path
                d="M5.5 2.5 11 8l-5.5 5.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
