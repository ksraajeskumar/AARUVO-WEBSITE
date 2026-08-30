"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TICKER = [
  ["New", "Read-aloud now works on every screen"],
  ["News", "AARUVO is now live in more neighbourhoods"],
  ["Story", "A grandmother did her month's shopping by voice"],
  ["Guide", "How we handle an item that is out of stock"],
];

function Arrow() {
  return (
    <svg viewBox="0 0 20 12" className="h-2.5 w-4 shrink-0" aria-hidden>
      <path
        d="M1 6h17m0 0-5-4.5M18 6l-5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Fanned dashboard cards ─────────────────────────────────────────────── */

function Bars() {
  const h = [46, 52, 44, 58, 62, 56, 70, 66, 78, 84];
  return (
    <div className="flex h-[3.4em] items-end gap-[0.28em]">
      {h.map((v, i) => (
        <span
          key={i}
          className="flex-1 rounded-[1px]"
          style={{
            height: `${v}%`,
            background: "linear-gradient(180deg,#22d3ee 0%,#4f46e5 100%)",
          }}
        />
      ))}
    </div>
  );
}

function MetricCard() {
  return (
    <div className="w-full rounded-[8px] bg-white p-[1.2em] text-[length:var(--cust-small)] shadow-[0_2px_8px_rgba(20,20,43,0.10)]">
      <div className="grid grid-cols-2 gap-[1.2em]">
        <div>
          <p className="flex items-center gap-[0.5em] text-[0.86em] text-slate-body">
            MRR growth
            <span className="rounded-[3px] bg-[#d7f5e3] px-[0.4em] py-[0.15em] text-[0.8em] font-medium text-[#0b6b3a]">
              +22%
            </span>
          </p>
          <div className="mt-[0.8em]">
            <Bars />
          </div>
          <div className="mt-[0.5em] flex justify-between text-[0.75em] text-muted">
            <span>Jan 1</span>
            <span>Today</span>
          </div>
        </div>
        <div>
          <p className="text-[0.86em] text-slate-body">Data as of May 3</p>
          <p className="mt-[0.4em] text-[0.86em] text-slate-body">
            Active subscribers
          </p>
          <div className="mt-[0.6em]">
            <Bars />
          </div>
        </div>
      </div>

      <div className="mt-[1.2em] grid grid-cols-2 gap-[1.2em] border-t border-line pt-[1em]">
        <div>
          <p className="text-[0.86em] text-slate-body">
            Net volume{" "}
            <span className="rounded-[3px] bg-[#d7f5e3] px-[0.4em] py-[0.15em] text-[0.8em] font-medium text-[#0b6b3a]">
              +8%
            </span>
          </p>
          <p className="mt-[0.3em] text-[1.15em] font-semibold text-navy">
            $429,777
          </p>
          <svg viewBox="0 0 200 40" className="mt-[0.6em] h-[2.4em] w-full" aria-hidden>
            <path
              d="M2 34 24 28 46 32 68 20 90 26 112 14 134 20 156 10 178 14 198 6"
              fill="none"
              stroke="#6b5cf0"
              strokeWidth="1.6"
            />
          </svg>
        </div>
        <div>
          <p className="text-[0.86em] text-slate-body">New subscribers</p>
          <p className="mt-[0.3em] text-[1.15em] font-semibold text-navy">909</p>
          <svg viewBox="0 0 200 40" className="mt-[0.6em] h-[2.4em] w-full" aria-hidden>
            <path
              d="M2 30 30 24 58 30 86 18 114 22 142 12 170 18 198 8"
              fill="none"
              stroke="#6b5cf0"
              strokeWidth="1.6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PayoutsCard() {
  return (
    <div className="w-full rounded-[8px] bg-white p-[1.1em] text-[length:var(--cust-small)] shadow-[0_2px_8px_rgba(20,20,43,0.10)]">
      {[
        ["Erica Adler", "$65.34"],
        ["Jazmine Lewis", "$89.94"],
        ["Stephany Santos", "$102.12"],
      ].map(([n, v]) => (
        <div
          key={n}
          className="flex justify-between border-b border-line py-[0.55em] text-[0.85em]"
        >
          <span className="text-slate-body">{n}</span>
          <span className="text-navy">{v}</span>
        </div>
      ))}
      <p className="mt-[0.7em] text-[0.72em] uppercase tracking-[0.08em] text-muted">
        View all transactions
      </p>
      <div className="mt-[1em] flex items-center justify-between">
        <span>
          <span className="block text-[0.9em] font-semibold text-navy">
            Next deposit
          </span>
          <span className="block text-[0.72em] uppercase tracking-[0.08em] text-muted">
            Sending today
          </span>
        </span>
        <span className="text-[0.9em] font-semibold text-navy">$277.81 ›</span>
      </div>
      <div className="mt-[0.9em] flex items-center gap-[0.6em]">
        <span className="flex h-[1.5em] w-[1.5em] items-center justify-center rounded-full bg-[#1a6bff]">
          <svg viewBox="0 0 12 16" className="h-[0.8em] w-[0.6em]" aria-hidden>
            <path d="M7 1 2 9h3l-1 6 6-8H7z" fill="#fff" />
          </svg>
        </span>
        <span className="flex-1 text-[0.82em] text-slate-body">
          Want your money now?
        </span>
        <span className="rounded-[3px] bg-[#1a6bff] px-[0.7em] py-[0.4em] text-[0.66em] font-bold uppercase tracking-[0.05em] text-white">
          Instant deposit
        </span>
      </div>
    </div>
  );
}

export default function EnterpriseHero() {
  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative overflow-hidden bg-[#160f33] pt-[var(--header-h)]">
      {/* silk backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg,#221546 0%,#2a1a55 28%,#3b2178 52%,#5b2ea8 72%,#7b3fd0 100%)",
          }}
        />
        <div
          className="ent-wave absolute -inset-x-[20%] top-[6%] h-[92%]"
          style={{
            background:
              "radial-gradient(48% 40% at 62% 26%, #ffb020 0%, rgba(255,140,20,0.85) 26%, rgba(226,72,120,0.55) 48%, rgba(120,60,220,0.35) 66%, rgba(20,12,50,0) 82%)",
            filter: "blur(6px)",
          }}
        />
        <div
          className="ent-wave-2 absolute -inset-x-[20%] top-[10%] h-[92%]"
          style={{
            background:
              "radial-gradient(46% 34% at 86% 44%, rgba(70,140,255,0.75) 0%, rgba(90,90,240,0.45) 40%, rgba(20,12,50,0) 74%)",
            filter: "blur(10px)",
          }}
        />
        {/* fine silk lines */}
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(168deg,rgba(255,255,255,0.55) 0 1px,rgba(255,255,255,0) 1px 6px)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[26%]"
          style={{
            background: "linear-gradient(180deg,rgba(22,15,51,0) 0%,#160f33 100%)",
          }}
        />
      </div>

      {/* news ticker */}
      <div className="relative border-y border-white/10 py-[clamp(10px,0.9vw,20px)]">
        <div className="overflow-hidden">
          <div className="ent-ticker flex w-max items-start gap-[clamp(28px,3vw,64px)]">
            {[...TICKER, ...TICKER, ...TICKER].map(([cat, text], i) => (
              <a
                key={i}
                href="#"
                className="group flex max-w-[280px] shrink-0 items-start gap-[clamp(10px,1vw,20px)] text-[length:var(--cust-small)] leading-[1.4]"
              >
                <span className="w-[86px] shrink-0 text-white/45">{cat}</span>
                <span className="font-semibold text-white transition-colors duration-200 group-hover:text-white/80">
                  {text}
                </span>
                <span className="mt-[0.35em] text-white/60 transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Arrow />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative px-[var(--hero-indent)]">
        <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(36px,4vw,80px)] py-[clamp(48px,5.4vw,120px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h1 className="max-w-[13ch] text-[length:var(--ent-h1)] font-bold leading-[1.06] tracking-[-0.035em] text-white">
              We build for the people{" "}
              <span className="bg-gradient-to-r from-[#fc393a] via-[#ff7a55] to-[#ffb08a] bg-clip-text text-transparent">
                left out
              </span>
            </h1>

            <p className="mt-[clamp(20px,2vw,44px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-white/80">
              Most apps assume you can read English, type fast and know what
              the product is called. AARUVO does not. Speak in your own words and
              we do the rest.
            </p>

            <a
              href="#"
              className="group mt-[clamp(20px,2vw,44px)] inline-flex items-center gap-2 rounded-full bg-white px-[clamp(16px,1.35vw,27px)] py-[clamp(11px,0.95vw,19px)] text-[length:var(--cust-body)] font-semibold leading-none text-navy transition-colors duration-200 hover:bg-white/90"
            >
              Talk to us
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
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

          {/* fanned cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.15 }}
            className="relative mx-auto aspect-[520/470] w-full max-w-[560px]"
          >
            <div className="ent-card-3 absolute right-0 top-[26%] w-[52%] rotate-[9deg] rounded-[8px] bg-white p-[1em] shadow-[0_18px_44px_rgba(10,6,30,0.34)]">
              <PayoutsCard />
            </div>
            <div className="ent-card-2 absolute right-[12%] top-[16%] w-[62%] rotate-[4deg] rounded-[8px] bg-white p-[0.9em] shadow-[0_20px_50px_rgba(10,6,30,0.36)]">
              <PayoutsCard />
            </div>

            <div className="ent-card-1 absolute left-0 top-0 w-[74%] overflow-hidden rounded-[10px] bg-white shadow-[0_26px_64px_rgba(10,6,30,0.42)]">
              <div className="p-[1.1em]">
                <MetricCard />
              </div>
              <div className="px-[1.4em] pb-[1.4em]">
                <p className="text-[length:var(--connect-card-h)] font-semibold tracking-[-0.02em] text-navy">
                  Your regular items
                </p>
                <a
                  href="#card-finance-automation"
                  onClick={(e) => jump(e, "card-finance-automation")}
                  className="group mt-[0.9em] flex items-center gap-2 border-t border-line pt-[0.9em] text-[length:var(--cust-body)] font-medium text-brand"
                >
                  Explore
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] transition-transform duration-300 group-hover:translate-y-[3px]">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                      <path
                        d="M8 3v10m0 0 4-4m-4 4-4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
