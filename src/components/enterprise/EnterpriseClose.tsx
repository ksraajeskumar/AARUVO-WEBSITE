"use client";

import { motion } from "framer-motion";
import RiskMock from "../shared/RiskMock";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Recommended resources ──────────────────────────────────────────────── */

const RESOURCES = [
  {
    badge: "Online event",
    icon: "play",
    title: "How two shop owners build exceptional customer experiences in a fast-paced market",
    body: "Hear how enterprise executives are overcoming institutional risk aversion, brittle systems, and a bias toward the status quo to foster an innovative culture.",
    cta: "Watch the talk",
  },
  {
    badge: "Report",
    icon: "report",
    title: "Four ways modern payment systems drive growth",
    body: "Learn how brands like Hardware, nearby shops, and Meena Cloth Shop are transforming their payments strategy to stay competitive.",
    cta: "Read the report",
  },
  {
    badge: "Guide",
    icon: "guide",
    title: "Guide to payments provider RFPs",
    body: "Evaluate payment providers, including overlooked capabilities and important questions to ask, and get a downloadable RFP template.",
    cta: "Download the guide",
  },
  {
    badge: "Report",
    icon: "report",
    title: "How agents, digital wallets and trust are rewriting checkout",
    body: "See what shopper survey data and analysis of AARUVO transactions across 20,000 businesses revealed about checkout performance.",
    cta: "Read the report",
  },
  {
    badge: "Report",
    icon: "report",
    title: "AARUVO named a Leader in Payments",
    body: "According to the a shopper survey evaluation, “shops of all sizes can benefit from AARUVO’s wide range of products and services.”",
    cta: "Read the report",
  },
  {
    badge: "Report",
    icon: "report",
    title: "AARUVO named a Leader in Billing",
    body: "According to The a shopper survey, “Along with AARUVO’ synergies, AARUVO’s architecture and reliability are its key strengths.”",
    cta: "Read the report",
  },
];

function BadgeIcon({ kind }: { kind: string }) {
  if (kind === "play") {
    return (
      <svg viewBox="0 0 16 16" className="h-[1em] w-[1em]" aria-hidden>
        <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
        <path d="M6.6 5.4 11 8l-4.4 2.6z" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "guide") {
    return (
      <svg viewBox="0 0 16 16" className="h-[1em] w-[1em]" aria-hidden>
        <path d="M4 2h5l3 3v9H4z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M9 2v3h3" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 16 16" className="h-[1em] w-[1em]" aria-hidden>
      <rect x="2.5" y="2.5" width="11" height="11" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 6h6M5 8.6h6M5 11.2h3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

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

export function EnterpriseResources() {
  return (
    <section
      id="resources"
      className="scroll-mt-[calc(var(--header-h)_+_64px)] bg-[#f6f9fc]"
    >
      <div className="px-[var(--hero-indent)] py-[clamp(40px,4.4vw,96px)]">
        <h2 className="text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Recommended resources
        </h2>
        <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Market insights, trends, and reports to keep you on the cutting edge of
          financial technology.
        </p>

        <div className="mt-[clamp(28px,3vw,64px)] grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(32px,3.4vw,72px)] md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((r, i) => (
            <motion.article
              key={r.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: EASE, delay: (i % 3) * 0.08 }}
              className="text-[length:var(--cust-body)]"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#e7ebf1] px-[0.8em] py-[0.4em] text-[0.85em] font-medium leading-none text-navy">
                <BadgeIcon kind={r.icon} />
                {r.badge}
              </span>
              <h3 className="mt-[clamp(12px,1.2vw,26px)] max-w-[28ch] text-[length:var(--cust-lead)] font-semibold leading-[1.32] tracking-[-0.015em] text-navy">
                {r.title}
              </h3>
              <p className="mt-[0.7em] max-w-[34ch] leading-[1.6] text-slate-body">
                {r.body}
              </p>
              <a
                href="#"
                className="group mt-[0.9em] inline-flex items-center gap-1.5 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                {r.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Account management + custom pricing ────────────────────────────────── */

const PRICING = [
  "Interchange plus pricing",
  "Volume discounts",
  "Country-specific rates",
  "Multi-product discounts",
  "Deployment services",
  "Technical account management",
];

export function EnterpriseClose() {
  return (
    <>
      <section className="bg-white">
        <div className="px-[var(--hero-indent)] py-[clamp(30px,3vw,64px)]">
          <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] rounded-[10px] bg-[#f6f9fc] p-[clamp(20px,2.4vw,52px)] lg:grid-cols-2">
            <div>
              <h3 className="max-w-[20ch] text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                Streamlined account management for your enterprise
              </h3>
              <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[44ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                Simplify operations and centralise reporting across business lines
                and geographies with AARUVO.
              </p>
              <a
                href="#"
                className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-2 rounded-full bg-brand px-[clamp(16px,1.35vw,27px)] py-[clamp(10px,0.85vw,17px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                Get started
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
            </div>

            <RiskMock />
          </div>
        </div>
      </section>

      <section className="bg-[#f6f9fc]">
        <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(24px,2.6vw,56px)] px-[var(--hero-indent)] py-[clamp(40px,4.4vw,96px)] lg:grid-cols-2">
          <div>
            <h2 className="max-w-[20ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
              Get customised recommendations and pricing
            </h2>
            <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[42ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
              Speak to an expert for tailored solutions and custom pricing for
              your business.
            </p>
            <a
              href="#"
              className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-2 rounded-full bg-brand px-[clamp(16px,1.35vw,27px)] py-[clamp(10px,0.85vw,17px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              Talk to us
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
          </div>

          <ul className="grid gap-x-[clamp(16px,1.6vw,34px)] gap-y-[0.9em] text-[length:var(--cust-body)] sm:grid-cols-2">
            {PRICING.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.45, ease: EASE, delay: i * 0.07 }}
                className="flex gap-2.5 leading-[1.5]"
              >
                <svg
                  viewBox="0 0 20 20"
                  className="mt-[0.2em] h-[1.05em] w-[1.05em] shrink-0"
                  aria-hidden
                >
                  <circle cx="10" cy="10" r="10" fill="#ffe4e4" />
                  <path
                    d="M5.6 10.4 8.6 13.4 14.4 6.8"
                    fill="none"
                    stroke="#fc393a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-slate-body">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
