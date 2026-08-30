"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DWELL = 5200;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Shared map plate, used by the two delivery screens ─────────────────── */

function StreetMap({ children }: { children?: React.ReactNode }) {
  return (
    <div className="absolute inset-0 bg-[#eef1f5]">
      <svg viewBox="0 0 320 560" className="h-full w-full" aria-hidden>
        <rect width="320" height="560" fill="#eef1f5" />
        <g fill="#ffffff">
          <rect x="-10" y="34" width="340" height="16" />
          <rect x="-10" y="150" width="340" height="18" />
          <rect x="-10" y="268" width="340" height="16" />
          <rect x="-10" y="392" width="340" height="18" />
          <rect x="-10" y="498" width="340" height="16" />
          <rect x="16" y="-10" width="16" height="580" />
          <rect x="104" y="-10" width="18" height="580" />
          <rect x="196" y="-10" width="16" height="580" />
          <rect x="272" y="-10" width="18" height="580" />
        </g>
        <g fill="#e3e8ee">
          <rect x="36" y="54" width="64" height="92" rx="2" />
          <rect x="126" y="54" width="66" height="92" rx="2" />
          <rect x="216" y="54" width="52" height="92" rx="2" />
          <rect x="36" y="172" width="64" height="92" rx="2" />
          <rect x="126" y="172" width="66" height="92" rx="2" />
          <rect x="216" y="172" width="52" height="92" rx="2" />
          <rect x="36" y="288" width="64" height="100" rx="2" />
          <rect x="126" y="288" width="66" height="100" rx="2" />
          <rect x="216" y="288" width="52" height="100" rx="2" />
        </g>
      </svg>
      {children}
    </div>
  );
}

/* ── Screen 1 — Grocery dashboard ───────────────────────────────────────── */

function GroceryScreen() {
  return (
    <div className="flex h-full flex-col gap-[3cqw] bg-white p-[4cqw]">
      <div className="flex items-center justify-between">
        <svg viewBox="0 0 40 44" className="h-[9cqw] w-[8cqw]" aria-hidden>
          <path d="M31 8 25 6l-4-4-3 1-2 3-9 2-5 32 22 4 16-3z" fill="#95bf47" />
          <path d="M31 8 25 42l16-3-6-30z" fill="#5e8e3e" />
          <path
            d="M23 18c-1.6-.9-3-1.1-4-.6-1.4.7-1.2 2.2.4 2.9 2.2 1 3.4 2.3 3.2 4.2-.3 2.6-3 3.7-5.8 2.7l.6-2.6c1.5.8 3 .9 3.2-.3.1-.9-.8-1.4-2.2-2.1-2-1-3-2.4-2.6-4.4.5-2.6 3.2-3.9 6.4-2.7z"
            fill="#fff"
          />
        </svg>
        <span className="flex h-[9cqw] w-[9cqw] items-center justify-center overflow-hidden rounded-full bg-[#e2b79a]">
          <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden>
            <circle cx="20" cy="15" r="8" fill="#3b2418" />
            <circle cx="20" cy="17" r="6.4" fill="#d9a074" />
            <path d="M6 40c2-9 8-13 14-13s12 4 14 13z" fill="#8b4a3a" />
          </svg>
        </span>
      </div>

      <div className="rounded-[2.4cqw] border border-[#e7ebf0] p-[3.4cqw]">
        <p className="text-[2.7cqw] font-semibold uppercase tracking-[0.1em] text-muted">
          Total sales
        </p>
        <div className="mt-[1.6cqw] flex items-end justify-between">
          <p className="text-[8cqw] font-semibold leading-none tracking-[-0.03em] text-navy">
            ₹350
          </p>
          <svg viewBox="0 0 90 26" className="h-[6cqw] w-[26cqw]" aria-hidden>
            <path
              d="M2 20c8-2 12 2 18-4s10 6 16 1 10-12 16-14 12 5 20 3"
              fill="none"
              stroke="#3fb6c6"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-[2.6cqw] flex items-center justify-between text-[2.9cqw] text-muted">
          <span>41 total orders</span>
          <span className="text-slate-body">View full report</span>
        </div>
      </div>

      <div className="flex-1 rounded-[2.4cqw] border border-[#e7ebf0] p-[3.4cqw]">
        <p className="text-[2.7cqw] font-semibold uppercase tracking-[0.1em] text-muted">
          Transactions
        </p>
        <div className="mt-[3cqw] flex items-center gap-[2.4cqw]">
          <span className="flex h-[5.6cqw] w-[5.6cqw] items-center justify-center rounded-full bg-[#f2620f]">
            <svg viewBox="0 0 14 16" className="h-[3cqw] w-[2.6cqw]" aria-hidden>
              <path
                d="M4 7V4.6a3 3 0 0 1 6 0V7"
                fill="none"
                stroke="#fff"
                strokeWidth="1.6"
              />
              <rect x="2.4" y="7" width="9.2" height="6.6" rx="1.4" fill="#fff" />
            </svg>
          </span>
          <span className="text-[3.1cqw] text-slate-body">#1007</span>
          <span className="ml-auto text-[3.1cqw] text-navy">₹350.00</span>
        </div>
      </div>

      <div className="rounded-[2.4cqw] border border-[#e7ebf0] p-[3.4cqw]">
        <div className="flex items-start justify-between text-[2.7cqw] font-semibold uppercase tracking-[0.1em] text-muted">
          <span>Rate</span>
          <span>Bank account</span>
        </div>
        <div className="mt-[1.4cqw] flex items-center justify-between text-[3cqw] text-slate-body">
          <span>2.4% + ₹0.30</span>
          <span className="tracking-[0.12em]">•••• •••• •••• 1234</span>
        </div>

        <p className="mt-[3.4cqw] text-[2.7cqw] font-semibold uppercase tracking-[0.1em] text-muted">
          Accepted payments
        </p>
        <div className="mt-[1.8cqw] flex items-center justify-between">
          <span className="flex gap-[1.4cqw]">
            <span className="h-[3.4cqw] w-[5.2cqw] rounded-[0.8cqw] bg-[#f06292]" />
            <span className="h-[3.4cqw] w-[5.2cqw] rounded-[0.8cqw] bg-[#f5b301]" />
          </span>
          <span className="text-[3cqw] text-slate-body">View payouts</span>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2 — Delivery delivery ───────────────────────────────────────── */

function DeliveryScreen() {
  return (
    <div className="relative h-full bg-white">
      <div className="absolute inset-x-0 top-0 z-10 flex h-[13cqw] items-center justify-center bg-white">
        <span className="flex items-center gap-[2cqw]">
          <svg viewBox="0 0 40 24" className="h-[5cqw] w-[8cqw]" aria-hidden>
            <path
              d="M2 6h20a10 10 0 0 1 0 12H2l6-6z"
              fill="#ef3024"
            />
          </svg>
          <span className="text-[4.4cqw] font-bold tracking-[0.06em] text-[#ef3024]">
            DELIVERY
          </span>
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 top-[13cqw]">
        <StreetMap />
      </div>

      <div className="absolute inset-x-[3cqw] bottom-[3cqw] rounded-[2.6cqw] bg-white p-[4cqw] shadow-[0_-1px_4cqw_rgba(20,20,43,0.12)]">
        <span className="mx-auto mb-[3cqw] block h-[0.9cqw] w-[12cqw] rounded-full bg-[#dfe3e8]" />
        <p className="text-[3.6cqw] font-semibold tracking-[-0.01em] text-navy">
          Food is being prepared
        </p>
        <p className="mt-[1.4cqw] text-[3cqw] text-slate-body">
          Curry Up Now &nbsp;·&nbsp; 5min away
        </p>

        <div className="mt-[3.4cqw] flex items-center gap-[1.6cqw] text-[#8a919c]">
          <span className="h-[0.5cqw] flex-1 rounded-full bg-[#060c17]" />
          <svg viewBox="0 0 20 20" className="h-[4cqw] w-[4cqw]" aria-hidden>
            <path
              d="M6 2v7M4 2v7M8 2v7M6 9v9M14 2c-2 2-2 6 0 7v9"
              fill="none"
              stroke="#060c17"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-[0.5cqw] flex-1 rounded-full bg-[#dfe3e8]" />
          <svg viewBox="0 0 22 20" className="h-[4cqw] w-[4.4cqw]" aria-hidden>
            <path
              d="M3 13V9l2-4h12l2 4v4M3 13h16M5 13v2M17 13v2"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="h-[0.5cqw] flex-1 rounded-full bg-[#dfe3e8]" />
          <svg viewBox="0 0 20 20" className="h-[4cqw] w-[4cqw]" aria-hidden>
            <path
              d="M3 9.5 10 4l7 5.5V17H3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p className="mt-[3.4cqw] text-[3cqw] text-slate-body">
          Delivery by 6:45 PM &nbsp;·&nbsp; UPI
        </p>
      </div>
    </div>
  );
}

/* ── Screen 3 — Lyft ride ───────────────────────────────────────────────── */

function LyftScreen() {
  return (
    <div className="relative h-full bg-white">
      <StreetMap>
        <svg
          viewBox="0 0 320 560"
          className="absolute inset-0 h-full w-full"
          aria-hidden
        >
          <path
            d="M112 316h150"
            fill="none"
            stroke="#a21caf"
            strokeWidth="7"
            strokeLinecap="square"
          />
          <path
            d="M112 210v106"
            fill="none"
            stroke="#e0189a"
            strokeWidth="7"
            strokeLinecap="square"
          />
          <circle cx="112" cy="176" r="13" fill="#ff00bf" />
          <circle cx="112" cy="176" r="4.6" fill="#fff" />
          <g transform="translate(112 210)">
            <rect x="-6" y="-13" width="44" height="24" rx="9" fill="#ff00bf" />
            <rect x="4" y="-9" width="24" height="10" rx="4" fill="#d1017f" />
            <circle cx="2" cy="11" r="4.6" fill="#3a0a2c" />
            <circle cx="30" cy="11" r="4.6" fill="#3a0a2c" />
          </g>
        </svg>
      </StreetMap>

      <div className="absolute left-1/2 top-[4cqw] flex -translate-x-1/2 items-center gap-[2.4cqw] rounded-[1.6cqw] bg-white px-[3.4cqw] py-[2cqw] text-[3cqw] shadow-[0_1px_3cqw_rgba(20,20,43,0.14)]">
        <span className="text-slate-body">AARUVO</span>
        <svg viewBox="0 0 16 10" className="h-[2cqw] w-[3.4cqw]" aria-hidden>
          <path
            d="M1 5h13m0 0-4-4m4 4-4 4"
            fill="none"
            stroke="#8a919c"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-navy">1430 2nd Ave</span>
      </div>

      <div className="absolute inset-x-[3cqw] bottom-[3cqw] rounded-[2.6cqw] bg-white p-[3.4cqw] shadow-[0_-1px_4cqw_rgba(20,20,43,0.12)]">
        <div className="flex items-center gap-[3cqw] rounded-[2cqw] border border-[#a855f7] p-[2.6cqw]">
          <svg viewBox="0 0 60 26" className="h-[6cqw] w-[13cqw]" aria-hidden>
            <path d="M6 18c2-8 8-12 24-12s22 4 24 12z" fill="#d8d8e4" />
            <rect x="4" y="16" width="52" height="6" rx="3" fill="#f0f0f6" />
            <circle cx="16" cy="22" r="4" fill="#2b2b3a" />
            <circle cx="44" cy="22" r="4" fill="#2b2b3a" />
          </svg>
          <div className="min-w-0 flex-1">
            <p className="text-[3.4cqw] font-semibold text-navy">Lyft</p>
            <p className="mt-[0.8cqw] flex items-center gap-[1cqw] text-[2.7cqw] text-muted">
              <svg viewBox="0 0 14 14" className="h-[2.6cqw] w-[2.6cqw]" aria-hidden>
                <circle cx="7" cy="4.6" r="2.6" fill="currentColor" />
                <path d="M1.6 13c0-3 2.4-4.6 5.4-4.6s5.4 1.6 5.4 4.6z" fill="currentColor" />
              </svg>
              4
            </p>
          </div>
          <div className="text-right">
            <p className="text-[3.4cqw] font-semibold text-navy">₹8.32</p>
            <p className="mt-[0.8cqw] text-[2.7cqw] text-muted">13:37</p>
          </div>
        </div>

        <p className="mt-[3cqw] flex items-center gap-[1.8cqw] text-[3cqw] text-slate-body">
          <svg viewBox="0 0 16 16" className="h-[3.4cqw] w-[3.4cqw]" aria-hidden>
            <circle cx="8" cy="8" r="6.6" fill="none" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="8" cy="6.4" r="2.2" fill="currentColor" />
            <path d="M3.6 13c.8-2.4 2.4-3.4 4.4-3.4s3.6 1 4.4 3.4" fill="currentColor" />
          </svg>
          Personal
        </p>

        <button
          type="button"
          className="mt-[3cqw] w-full rounded-[1.6cqw] bg-gradient-to-r from-[#7c3aed] to-[#a21caf] py-[3.4cqw] text-[3.6cqw] font-semibold leading-none text-white"
        >
          Select Lyft
        </button>
      </div>
    </div>
  );
}

/* ── Stage ──────────────────────────────────────────────────────────────── */

const SCREENS = [
  { id: "Grocery", node: <GroceryScreen />, pill: "Customer", elbow: false },
  { id: "doordash", node: <DeliveryScreen />, pill: "Customer", elbow: true },
  { id: "lyft", node: <LyftScreen />, pill: "Rider", elbow: true, fee: true },
];

export default function PhoneStage() {
  const [i, setI] = useState(0);
  const s = SCREENS[i];

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % SCREENS.length), DWELL);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <div className="relative mx-auto w-full max-w-[620px]">
      {/* concentric rings behind the device */}
      <svg
        viewBox="0 0 620 760"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden
      >
        {[130, 200, 268, 336].map((r) => (
          <circle
            key={r}
            cx="330"
            cy="392"
            r={r}
            fill="none"
            stroke="#e3e8ee"
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* platform fee node, only while the ride screen is showing */}
      <div className="relative flex h-[13%] items-end justify-center">
        <AnimatePresence>
          {s.fee && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="flex flex-col items-center"
            >
              <span className="rounded-full bg-[#2c2447] px-4 py-1.5 text-[13px] font-semibold leading-none text-white">
                Lyft
              </span>
              <span className="h-3 w-px bg-[#2c2447]" />
              <span className="rounded-full bg-white px-3 py-1 text-[12px] font-medium leading-none text-navy shadow-[0_1px_4px_rgba(20,20,43,0.14)]">
                ₹1.00
              </span>
              <span className="h-6 w-px bg-[#2c2447]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="relative flex justify-center">
        {/* customer / rider tag with its connector */}
        <div className="pointer-events-none absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.id}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="absolute left-0 top-[46%] flex items-center"
            >
              <span className="rounded-full bg-[#00d4ff] px-3.5 py-1.5 text-[13px] font-semibold leading-none text-white shadow-[0_0_0_4px_rgba(0,212,255,0.16)]">
                {s.pill}
              </span>
              <svg
                viewBox="0 0 120 150"
                className="h-[150px] w-[126px]"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path
                  d={s.elbow ? "M5 5v120h115" : "M5 5h115"}
                  fill="none"
                  stroke="#00c8f0"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="5" cy="5" r="3.4" fill="#fff" stroke="#00c8f0" strokeWidth="1.6" />
              </svg>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* device */}
        <div className="@container relative w-[52%] min-w-[210px]">
          <div className="relative aspect-[320/620] overflow-hidden rounded-[7cqw] border-[1.4cqw] border-white bg-white shadow-[0_2px_10px_rgba(20,20,43,0.08),0_24px_60px_rgba(20,20,43,0.16)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 0.985 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0 overflow-hidden rounded-[5.6cqw]"
              >
                {s.node}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
