"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Authorisation optimisation ─────────────────────────────────────────── */

type Part = string | { link: string };

const AUTH_ITEMS: {
  icon: string;
  title: string;
  body: Part[];
  cta: string;
}[] = [
  {
    icon: "card",
    title: "If an item is out of stock",
    body: [
      "If a shop runs out, we look for the same item in ",
      { link: "another shop nearby" },
      " and show you the price before anything changes.",
    ],
    cta: "Learn more",
  },
  {
    icon: "route",
    title: "Smart routing and revenue recovery",
    body: [
      "Mitigate revenue loss and increase auth rates by 50-70 bps on average with ",
      { link: "Adaptive Acceptance" },
      ", which automatically identifies and executes optimal ",
      { link: "retry messaging" },
      " and smart routing combinations for card payments.",
    ],
    cta: "See how",
  },
  {
    icon: "network",
    title: "Issuer and network partnerships",
    body: [
      "Businesses see an up to 8% reduction in fraud and 1–2% authorisation rate uplift on eligible volume via our ",
      { link: "Enhanced Issuer Network" },
      ".",
    ],
    cta: "Learn more",
  },
  {
    icon: "auth",
    title: "Optimised authentication",
    body: [
      "Speed up checkout with customisable solutions to help you meet ",
      { link: "SCA requirements" },
      " and ",
      { link: "delegated authentication" },
      " that dynamically adapts 2FA methods to suit customers' preferences.",
    ],
    cta: "See how",
  },
];

function AuthIcon({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 40 40" className="h-[2.2em] w-[2.2em]" aria-hidden>
      {kind === "card" && (
        <>
          <rect x="3" y="9" width="28" height="19" rx="3" fill="#25c1e0" />
          <rect x="3" y="14" width="28" height="4" fill="#1a6bff" />
          <circle cx="30" cy="27" r="7.5" fill="#1a3a8f" />
          <path d="M26.8 27.2 29 29.4 33.2 24.8" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
      {kind === "route" && (
        <g fill="#1a6bff">
          <path d="M4 20h22v3H4zM4 15h18v3H4zM4 25h18v3H4z" fill="#25c1e0" />
          <path d="M28 12l8 9-8 9z" />
          <path d="M20 6h3v6h-3zM20 28h3v6h-3z" fill="#25c1e0" />
        </g>
      )}
      {kind === "network" && (
        <g>
          <circle cx="20" cy="20" r="6" fill="#1a6bff" />
          <g fill="#25c1e0">
            <circle cx="20" cy="6" r="4" />
            <circle cx="20" cy="34" r="4" />
            <circle cx="7" cy="13" r="4" />
            <circle cx="33" cy="13" r="4" />
            <circle cx="7" cy="27" r="4" />
            <circle cx="33" cy="27" r="4" />
          </g>
        </g>
      )}
      {kind === "auth" && (
        <>
          <circle cx="17" cy="20" r="13" fill="#25c1e0" />
          <circle cx="17" cy="16" r="4.6" fill="#fff" />
          <path d="M8.4 30c1.6-4.6 4.8-6.6 8.6-6.6s7 2 8.6 6.6z" fill="#fff" />
          <circle cx="31" cy="11" r="6.4" fill="#1a3a8f" />
          <path d="M28.4 11.2 30.4 13.2 33.8 9.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export function EnterpriseAuth() {
  return (
    <section
      id="authorisation"
      className="scroll-mt-[calc(var(--header-h)_+_64px)] bg-white"
    >
      <div className="px-[var(--hero-indent)] py-[clamp(40px,4.4vw,96px)]">
        <h2 className="max-w-[22ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Boost revenue with advanced authorisation optimisation
        </h2>
        <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[62ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Sometimes a shop runs out, a price changes, or a delivery is late.
          Here is exactly what we do when that happens, and what you get to
          decide.
        </p>

        <div className="mt-[clamp(28px,3vw,64px)] grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] md:grid-cols-2">
          {AUTH_ITEMS.map((it) => (
            <div key={it.title} className="text-[length:var(--cust-body)]">
              <AuthIcon kind={it.icon} />
              <p className="mt-[clamp(12px,1.2vw,26px)] font-semibold text-navy">
                {it.title}
              </p>
              <p className="mt-[0.6em] max-w-[46ch] leading-[1.6] text-slate-body">
                {it.body.map((p, i) =>
                  typeof p === "string" ? (
                    <span key={i}>{p}</span>
                  ) : (
                    <a
                      key={i}
                      href="#"
                      className="text-brand transition-colors duration-200 hover:text-brand-hover"
                    >
                      {p.link}
                    </a>
                  )
                )}
              </p>
              <a
                href="#"
                className="group mt-[0.9em] inline-flex items-center gap-1.5 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                {it.cta}
                <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden>
                  <path d="M5.5 2.5 11 8l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Working with AARUVO ────────────────────────────────────────────────── */

const PARTNERS = [
  {
    title: "Professional services",
    body: "Integrate AARUVO faster and with fewer people, with the help of our in-house payments and financial services experts. Our team supports compliance of regulatory requirements and data security standards.",
  },
  {
    title: "Services partners",
    body: "Engage a certified AARUVO partner to help with strategy, implementation, deployment, global expansion, or managed services for your AARUVO solution.",
  },
];

export function EnterpriseWorking() {
  return (
    <section
      id="working-with-stripe"
      className="scroll-mt-[calc(var(--header-h)_+_64px)] bg-white"
    >
      <div className="px-[var(--hero-indent)] py-[clamp(40px,4.4vw,96px)]">
        <h2 className="text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Working with AARUVO
        </h2>

        <div className="mt-[clamp(24px,2.6vw,56px)] grid gap-[clamp(16px,1.6vw,34px)] lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <article className="relative overflow-hidden rounded-[8px] border-t-[4px] border-brand bg-white shadow-[0_1px_3px_rgba(20,20,43,0.06),0_16px_42px_rgba(20,20,43,0.09)]">
            <div className="relative z-10 max-w-[52%] p-[clamp(20px,2.2vw,46px)]">
              <h3 className="text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                Technical account management
              </h3>
              <p className="mt-[clamp(12px,1.2vw,26px)] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                Reach your goals faster with proactive engagement from
                AARUVO&rsquo;s technical experts.
              </p>
              <a
                href="#"
                className="group mt-[clamp(12px,1.2vw,26px)] inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                Learn more
                <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]" aria-hidden>
                  <path d="M5.5 2.5 11 8l-5.5 5.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>

            {/* dotted globe */}
            <svg
              viewBox="0 0 420 320"
              className="pointer-events-none absolute inset-y-0 right-0 h-full w-[62%]"
              aria-hidden
            >
              <defs>
                <linearGradient id="tam-arc" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
                <pattern id="tam-dots" width="9" height="9" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1.5" fill="#ffd0d0" />
                </pattern>
              </defs>
              <circle cx="250" cy="150" r="132" fill="url(#tam-dots)" opacity=".9" />
              <path
                className="ent-arc"
                d="M20 300C90 250 120 170 250 60"
                fill="none"
                stroke="url(#tam-arc)"
                strokeWidth="1.6"
                strokeDasharray="360"
              />
              <path
                className="ent-arc"
                d="M40 310C140 280 200 220 300 120"
                fill="none"
                stroke="#e879f9"
                strokeWidth="1.2"
                opacity=".7"
                strokeDasharray="360"
                style={{ animationDelay: "0.5s" }}
              />
            </svg>
          </article>

          <article className="flex flex-col justify-center rounded-[8px] bg-[#fc393a] p-[clamp(20px,2.2vw,46px)] text-white">
            <span className="flex items-center gap-2 text-[1.2em] font-bold tracking-[0.02em]">
              <svg viewBox="0 0 40 40" className="h-[1.4em] w-[1.4em]" aria-hidden>
                <circle cx="20" cy="20" r="18" fill="#fff" />
                <path d="M8 26 18 10l6 10 3-4 5 10z" fill="#fc393a" />
              </svg>
              <span className="leading-none">
                A shop
                <span className="block text-[0.42em] tracking-[0.34em]">owner</span>
              </span>
            </span>

            <blockquote className="mt-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] font-medium leading-[1.55]">
              &ldquo;Enterprise Support has absolutely helped us optimise
              processing and reduce declines. Working closely with a technical
              account manager gives us the opportunity to ask more questions and
              get detailed answers, faster.&rdquo;
            </blockquote>
            <p className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--cust-small)]">
              <span className="font-semibold">Sample name,</span> Head of Payments
            </p>
          </article>
        </div>

        <h3 className="mt-[clamp(30px,3vw,64px)] text-[length:var(--connect-sub)] font-bold tracking-[-0.025em] text-navy">
          Integrate faster
        </h3>
        <div className="mt-[clamp(16px,1.6vw,34px)] grid gap-[clamp(16px,1.6vw,34px)] md:grid-cols-2">
          {PARTNERS.map((p) => (
            <article
              key={p.title}
              className="flex flex-col rounded-[8px] border-t-[4px] border-brand bg-white p-[clamp(20px,2.2vw,46px)] shadow-[0_1px_3px_rgba(20,20,43,0.06),0_16px_42px_rgba(20,20,43,0.09)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_24px_58px_rgba(20,20,43,0.13)]"
            >
              <h4 className="text-[length:var(--cust-lead)] font-semibold tracking-[-0.015em] text-navy">
                {p.title}
              </h4>
              <p className="mt-[clamp(10px,1vw,22px)] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                {p.body}
              </p>
              <a
                href="#"
                className="group mt-auto pt-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                Learn more
                <span className="ml-1.5 inline-block transition-transform duration-200 group-hover:translate-x-[3px]">
                  ›
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Use cases: dark stat carousel ──────────────────────────────────────── */

const STATS = [
  { value: "99.999", suffix: "%", text: ["historical uptime for ", "AARUVO services"] },
  {
    value: "200+",
    text: ["category leaders processing over $1B in ", "annual order value on AARUVO"],
  },
  { value: "500M+", text: ["API requests per day processed by ", "AARUVO"] },
];

const DWELL = 6000;

export function EnterpriseUseCases() {
  const [i, setI] = useState(0);
  const s = STATS[i];

  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % STATS.length), DWELL);
    return () => clearTimeout(t);
  }, [i]);

  const step = (d: 1 | -1) =>
    setI((n) => (n + d + STATS.length) % STATS.length);

  const arrow =
    "flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors duration-200 hover:bg-white/10";

  return (
    <section
      id="use-cases"
      className="relative scroll-mt-[calc(var(--header-h)_+_64px)] overflow-hidden bg-[#1b1636]"
    >
      {/* dune backdrop */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1b1636_0%,#241c48_55%,#2c2154_100%)]" />
        <div
          className="ent-dune absolute inset-x-[-10%] bottom-[-6%] h-[62%]"
          style={{
            background:
              "radial-gradient(60% 100% at 22% 100%, #f0a552 0%, rgba(232,140,90,0.85) 26%, rgba(150,90,190,0.5) 52%, rgba(27,22,54,0) 78%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="ent-dune-2 absolute inset-x-[-10%] bottom-[-10%] h-[58%]"
          style={{
            background:
              "radial-gradient(58% 100% at 78% 100%, #c86bff 0%, #a855f7 26%, rgba(120,60,220,0.5) 54%, rgba(27,22,54,0) 80%)",
            filter: "blur(2px)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[62%] opacity-[0.20]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(172deg,rgba(255,255,255,0.6) 0 1px,rgba(255,255,255,0) 1px 5px)",
          }}
        />
      </div>

      <div className="relative px-[var(--hero-indent)] pb-[clamp(60px,7vw,150px)] pt-[clamp(24px,2.4vw,52px)]">
        <div className="flex items-center justify-between">
          <p className="text-[length:var(--cust-body)] text-white/50">
            <span className="font-semibold text-white">
              {String(i + 1).padStart(2, "0")}
            </span>
            /0{STATS.length}
          </p>
          <div className="flex gap-2">
            <button type="button" aria-label="Previous" onClick={() => step(-1)} className={arrow}>
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                <path d="M13 8H3m0 0 4.5-4.5M3 8l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" aria-label="Next" onClick={() => step(1)} className={arrow}>
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                <path d="M3 8h10m0 0-4.5-4.5M13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex min-h-[clamp(280px,30vw,520px)] items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={s.value}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: EASE }}
              className="text-center"
            >
              <p className="text-[length:var(--ent-big)] font-bold leading-none tracking-[-0.04em]">
                <span className="bg-gradient-to-r from-[#ffe9a8] via-[#f6c98a] to-[#f0a98a] bg-clip-text text-transparent">
                  {s.value}
                </span>
                {s.suffix && (
                  <span className="align-super text-[0.28em] font-normal text-[#f0a98a]">
                    {s.suffix}
                  </span>
                )}
              </p>
              <p className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--cust-lead)] leading-[1.5] text-white/85">
                {s.text[0]}
                <span className="font-semibold text-white">{s.text[1]}</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mx-auto flex w-[140px] gap-2">
          {STATS.map((t, n) => (
            <button
              key={t.value}
              type="button"
              onClick={() => setI(n)}
              aria-label={`Show stat ${n + 1}`}
              className={`h-[2px] flex-1 rounded-full transition-colors duration-300 ${
                n === i ? "bg-white" : "bg-white/25"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
