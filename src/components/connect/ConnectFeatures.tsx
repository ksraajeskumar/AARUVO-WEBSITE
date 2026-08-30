"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Frame from "./Frame";

const TABS = ["AARUVO-hosted", "Embedded", "API"] as const;
type Tab = (typeof TABS)[number];

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Reusable mock pieces ───────────────────────────────────────────────── */

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.72em] text-slate-body">{label}</p>
      <div className="mt-[0.4em] rounded-[4px] border border-line px-[0.9em] py-[0.6em] text-[0.82em] text-navy">
        {value}
      </div>
    </div>
  );
}

function BrushPanel() {
  return (
    <div className="flex w-[38%] shrink-0 flex-col justify-between bg-[#1c3b5a] p-[1.4em] text-white">
      <div>
        <span className="flex h-[2.4em] w-[2.4em] items-center justify-center rounded-full bg-white text-[1em] font-semibold text-[#1c3b5a]">
          B
        </span>
        <p className="mt-[1.2em] text-[0.95em] font-semibold leading-[1.35]">
          AARUVO Store partners with AARUVO for secure payments.
        </p>
      </div>
      <p className="flex items-center gap-1.5 text-[0.68em] text-white/70">
        Powered by{" "}
        <Image
          src="/aaruvo-logo.png"
          alt="AARUVO"
          width={1918}
          height={479}
          className="inline-block h-[1.2em] w-auto brightness-0 invert"
        />
      </p>
    </div>
  );
}

function VerifyForm() {
  return (
    <div className="flex-1 bg-white p-[1.4em]">
      <div className="h-[0.35em] w-[6em] overflow-hidden rounded-full bg-[#e3e8ee]">
        <div className="h-full w-[35%] rounded-full bg-navy" />
      </div>
      <p className="mt-[1.1em] text-[1.05em] font-semibold tracking-[-0.01em] text-navy">
        Verify your business details
      </p>
      <div className="mt-[1.2em] space-y-[1em]">
        <Field label="Legal business name" value="AARUVO Store" />
        <Field label="Employer Identification Number (EIN)" value="23-345897" />
        <Field label="Doing business as" value="AARUVO Store" />
      </div>
    </div>
  );
}

function CodeBlock({ lines }: { lines: [string, string][] }) {
  return (
    <div className="w-[52%] shrink-0 bg-[#0e2a45] p-[1.1em] font-mono text-[0.68em] leading-[1.75]">
      {lines.map(([n, code], i) => (
        <div key={i} className="flex gap-[1.4em]">
          <span className="w-[1.4em] shrink-0 text-right text-[#5f7f9e]">{n}</span>
          <span
            className="whitespace-pre text-[#cfe3f5]"
            dangerouslySetInnerHTML={{ __html: code }}
          />
        </div>
      ))}
    </div>
  );
}

const PAYOUT_CODE: [string, string][] = [
  ["1", '<span class="text-[#79b8ff]">const</span> balance = <span class="text-[#79b8ff]">await</span> aaruvo.balance.get({'],
  ["2", '  shopId: <span class="text-[#ffab70]">&#39;{{SHOP_ID}}&#39;</span>'],
  ["3", "});"],
  ["4", ""],
  ["5", '<span class="text-[#79b8ff]">if</span> (balance.instant_available.amount &gt; <span class="text-[#b392f0]">0</span>) {'],
  ["6", '  <span class="text-[#79b8ff]">await</span> aaruvo.payouts.create({'],
  ["7", '    amount: <span class="text-[#b392f0]">1000</span>,'],
  ["8", '    currency: <span class="text-[#ffab70]">&#39;inr&#39;</span>,'],
  ["9", '    method: <span class="text-[#ffab70]">&#39;instant&#39;</span>,'],
  ["10", "  });"],
  ["11", "}"],
];

function EarningsPanel() {
  return (
    <div className="flex-1 bg-white">
      <div className="bg-[#e8f8f5] px-[1.2em] py-[1.1em] text-center">
        <p className="text-[0.95em] text-navy">Hi Jane,</p>
        <p className="mt-[0.3em] text-[0.9em] text-[#0f9d8a]">
          You have ₹1,321.41 scheduled to arrive
        </p>
      </div>
      <div className="px-[1.2em]">
        <div className="flex items-start justify-between border-b border-line py-[1em]">
          <div>
            <p className="text-[0.92em] font-semibold text-navy">Net earnings</p>
            <p className="mt-[0.3em] text-[0.72em] uppercase tracking-[0.08em] text-muted">
              Today, 18 Aug
            </p>
          </div>
          <p className="text-[0.92em] font-semibold text-navy">₹852.30</p>
        </div>
        <div className="flex items-start justify-between border-b border-line py-[1em]">
          <div>
            <p className="text-[0.92em] font-semibold text-navy">Next deposit</p>
            <p className="mt-[0.3em] text-[0.72em] uppercase tracking-[0.08em] text-muted">
              Sending today
            </p>
          </div>
          <p className="text-[0.92em] font-semibold text-navy">₹274.60</p>
        </div>
        <div className="flex items-center gap-[0.7em] py-[1em]">
          <span className="flex h-[1.7em] w-[1.7em] items-center justify-center rounded-full bg-[#12c2b0]">
            <svg viewBox="0 0 12 16" className="h-[0.9em] w-[0.7em]" aria-hidden>
              <path d="M7 1 2 9h3l-1 6 6-8H7z" fill="#fff" />
            </svg>
          </span>
          <span className="flex-1 text-[0.85em] text-slate-body">
            Want your money now?
          </span>
          <span className="rounded-[3px] bg-[#12c2b0] px-[0.8em] py-[0.45em] text-[0.66em] font-bold uppercase tracking-[0.06em] text-white">
            Instant deposit
          </span>
        </div>
        <div className="flex items-start justify-between border-t border-line py-[1em] text-muted">
          <div>
            <p className="text-[0.88em]">Deposit #0132</p>
            <p className="mt-[0.3em] text-[0.72em] uppercase tracking-[0.08em]">
              En route
            </p>
          </div>
          <p className="text-[0.88em]">₹1,046.81</p>
        </div>
      </div>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="flex-1 overflow-hidden rounded-[6px] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.09),0_10px_28px_rgba(20,20,43,0.08)]">
      <div className="flex items-center gap-[0.6em] bg-[#f4f6f8] px-[0.9em] py-[0.6em]">
        <span className="flex gap-[0.25em]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[0.4em] w-[0.4em] rounded-full bg-[#d3d8de]" />
          ))}
        </span>
        <span className="flex-1 rounded-full bg-white py-[0.28em] text-center text-[0.66em] text-muted">
          shop.aaruvo.com
        </span>
      </div>
      <div className="p-[1.3em]">
        <div className="flex items-center justify-between">
          <p className="flex items-center gap-[0.5em] text-[1em] font-semibold text-navy">
            <svg viewBox="0 0 16 16" className="h-[0.8em] w-[0.8em]" aria-hidden>
              <path d="M3 6l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Personal details
          </p>
          <span className="text-[0.85em] text-brand">Edit</span>
        </div>
        <div className="mt-[1em] space-y-[0.35em] text-[0.85em] leading-[1.5] text-slate-body">
          <p className="font-semibold text-navy">Your name</p>
          <p>you@example.com</p>
          <p>+91 90000 00000</p>
          <p>12, Bharathi Street</p>
          <p>Chennai 600 001</p>
        </div>
        <p className="mt-[1.3em] text-[0.9em] font-semibold text-navy">
          Other information provided
        </p>
        <p className="mt-[0.35em] text-[0.85em] text-slate-body">Last 4 SSN, Phone</p>
        <div className="mt-[1.2em] border-t border-line" />
      </div>
    </div>
  );
}

function EmbeddedFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-1 overflow-hidden rounded-[6px] border border-line bg-white">
      <div className="flex items-center gap-[0.6em] border-b border-line px-[1em] py-[0.7em]">
        <span className="h-[0.8em] w-[0.8em] rounded-[2px] bg-[#c7d2fe]" />
        <span className="text-[0.78em] font-semibold text-navy">Your product</span>
        <span className="ml-auto h-[0.55em] w-[3.4em] rounded-full bg-[#e3e8ee]" />
      </div>
      <div className="p-[1em]">{children}</div>
    </div>
  );
}

/* ── Cards ──────────────────────────────────────────────────────────────── */

type Card = {
  id: string;
  title: string;
  body: string;
  checks?: string[];
  initial: Tab;
  panel: (t: Tab) => React.ReactNode;
};

const CARDS: Card[] = [
  {
    id: "sign-up",
    title: "Sign-up",
    body: "Minimise the compliance and operational complexity associated with building your own identity verification and sign-up flows.",
    checks: [
      "Increase sign-up conversion with Connect Sign-up",
      "Support 46+ countries in 14 languages",
      "Automatically keep up with global payment requirements",
      "Users who already have a AARUVO account can get started in just one click with networked sign-up",
    ],
    initial: "AARUVO-hosted",
    panel: (t) =>
      t === "API" ? (
        <CodeBlock
          lines={[
            ["1", '<span class="text-[#79b8ff]">const</span> account = <span class="text-[#79b8ff]">await</span> aaruvo.shops.create({'],
            ["2", '  type: <span class="text-[#ffab70]">&#39;express&#39;</span>,'],
            ["3", '  country: <span class="text-[#ffab70]">&#39;IN&#39;</span>,'],
            ["4", '  email: <span class="text-[#ffab70]">&#39;owner@hairflair.com&#39;</span>,'],
            ["5", "});"],
          ]}
        />
      ) : t === "Embedded" ? (
        <EmbeddedFrame>
          <VerifyForm />
        </EmbeddedFrame>
      ) : (
        <div className="flex flex-1 overflow-hidden rounded-[6px] shadow-[0_1px_3px_rgba(20,20,43,0.09),0_10px_28px_rgba(20,20,43,0.08)]">
          <BrushPanel />
          <VerifyForm />
        </div>
      ),
  },
  {
    id: "dashboards",
    title: "Payments and payouts dashboards",
    body: "Add dashboard functionality to your website in minutes. Share important details such as payout timing and payment status – all while supporting complex workflows such as refunds and disputes.",
    initial: "API",
    panel: (t) =>
      t === "Embedded" ? (
        <EmbeddedFrame>
          <EarningsPanel />
        </EmbeddedFrame>
      ) : t === "AARUVO-hosted" ? (
        <div className="flex flex-1 overflow-hidden rounded-[6px] shadow-[0_1px_3px_rgba(20,20,43,0.09),0_10px_28px_rgba(20,20,43,0.08)]">
          <EarningsPanel />
        </div>
      ) : (
        <div className="flex flex-1 overflow-hidden rounded-[6px] shadow-[0_1px_3px_rgba(20,20,43,0.09),0_10px_28px_rgba(20,20,43,0.08)]">
          <CodeBlock lines={PAYOUT_CODE} />
          <EarningsPanel />
        </div>
      ),
  },
  {
    id: "settings",
    title: "Account management and settings",
    body: "Let your users adjust important settings such as their bank account, address, and other essentials for enabling successful payouts. Send your users key notices related to their account compliance.",
    initial: "AARUVO-hosted",
    panel: (t) =>
      t === "API" ? (
        <CodeBlock
          lines={[
            ["1", '<span class="text-[#79b8ff]">await</span> aaruvo.shops.update(accountId, {'],
            ["2", "  individual: {"],
            ["3", '    address: { city: <span class="text-[#ffab70]">&#39;New Delhi&#39;</span> },'],
            ["4", "  },"],
            ["5", "});"],
          ]}
        />
      ) : t === "Embedded" ? (
        <EmbeddedFrame>
          <SettingsPanel />
        </EmbeddedFrame>
      ) : (
        <SettingsPanel />
      ),
  },
];

function FeatureCard({ card }: { card: Card }) {
  const [tab, setTab] = useState<Tab>(card.initial);

  return (
    <article className="grid overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.06),0_18px_46px_rgba(20,20,43,0.08)] lg:grid-cols-2">
      <div className="flex flex-col justify-center p-[clamp(20px,2.4vw,52px)]">
        <h3 className="max-w-[22ch] text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
          {card.title}
        </h3>
        <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[46ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
          {card.body}
        </p>
        <a
          href="#"
          className="group mt-[clamp(12px,1.2vw,26px)] inline-flex items-center gap-1.5 self-start text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
        >
          Learn more
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]"
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

        {card.checks && (
          <ul className="mt-[clamp(16px,1.6vw,34px)] space-y-[0.75em] text-[length:var(--cust-body)]">
            {card.checks.map((c) => (
              <li key={c} className="flex gap-2.5 leading-[1.55]">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-[0.2em] h-[1.15em] w-[1.15em] shrink-0"
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
                <span className="text-slate-body">{c}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col bg-[#f6f9fc] p-[clamp(16px,1.6vw,34px)]">
        <div className="mx-auto flex rounded-[8px] bg-white p-1.5 shadow-[0_1px_3px_rgba(20,20,43,0.08),0_6px_18px_rgba(20,20,43,0.07)]">
          {TABS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              aria-pressed={t === tab}
              className={`relative px-[clamp(10px,1vw,20px)] py-[clamp(7px,0.6vw,12px)] text-[length:var(--cust-body)] transition-colors duration-200 ${
                t === tab
                  ? "font-semibold text-navy"
                  : "text-slate-body hover:text-navy"
              }`}
            >
              {t}
              {t === tab && (
                <motion.span
                  layoutId={`tab-${card.id}`}
                  className="absolute inset-x-[clamp(10px,1vw,20px)] -bottom-0.5 h-[2px] rounded-full bg-navy"
                  transition={{ duration: 0.3, ease: EASE }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="mt-[clamp(14px,1.4vw,30px)] flex flex-1 text-[length:var(--cust-body)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="flex flex-1"
            >
              {card.panel(tab)}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </article>
  );
}

export default function ConnectFeatures() {
  return (
    <Frame className="bg-[#f6f9fc]">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(30px,3vw,64px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-[#fc393a]">
          How it works
        </p>
        <h2 className="mt-[clamp(16px,1.6vw,34px)] max-w-[24ch] text-[length:var(--connect-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Build your payment business with speed and flexibility
        </h2>
        <p className="mt-[clamp(16px,1.6vw,34px)] max-w-[56ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Offer your users a great experience from day one with fast sign-up,
          accurate dashboards, and useful workflows – such as refunds, payment
          notifications, and dispute management.
        </p>

        <h3 className="mt-[clamp(34px,3.6vw,78px)] max-w-[30ch] text-[length:var(--connect-sub)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
          Embed streamlined sign-up and workflows for your users
        </h3>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[56ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          AARUVO has the broadest set of interfaces and components that you can
          embed directly into your product. Whether you use Connect&rsquo;s
          prebuilt, optimised UIs or build your own custom flows, it&rsquo;s easy
          to get your users up and running quickly.
        </p>
      </div>

      <div className="space-y-[clamp(20px,2vw,44px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)]">
        {CARDS.map((c) => (
          <FeatureCard key={c.id} card={c} />
        ))}
      </div>
    </Frame>
  );
}
