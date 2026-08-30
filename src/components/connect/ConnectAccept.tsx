"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Frame from "./Frame";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* ── Right-hand panels ──────────────────────────────────────────────────── */

const METHODS = [
  { group: "UPI and wallets", note: "The fastest way to pay. Money leaves your account only after you approve it." },
  { name: "UPI", where: "Works with any UPI app", state: "on", bg: "#0f9d8a", mark: "\u20B9" },
  { name: "Google Pay", where: "Popular across India", state: "on", bg: "#f5f6f8", mark: "G" },
  { name: "PhonePe", where: "Popular across India", state: "off", bg: "#efe9fb", mark: "P" },
  { name: "Paytm", where: "Popular across India", state: "off", bg: "#e6f3ff", mark: "T" },
  { group: "Cards and banking", note: "Use a debit card, credit card or your bank account. Nothing is stored on your phone." },
  { name: "Debit and credit cards", where: "All major banks", state: "on", bg: "#060c17", mark: "\u25A4" },
  { name: "Net banking", where: "All major banks", state: "off", bg: "#fff0ef", mark: "\u2302" },
] as const;

function MethodsPanel() {
  return (
    <div className="w-full rounded-[8px] bg-white p-[1.5em] shadow-[0_1px_3px_rgba(20,20,43,0.08),0_16px_44px_rgba(20,20,43,0.10)]">
      <div className="flex items-center justify-between">
        <p className="text-[1.15em] font-semibold tracking-[-0.01em] text-navy">
          Payment methods
        </p>
        <span className="rounded-[4px] border border-line px-[0.8em] py-[0.45em] text-[0.72em] text-slate-body">
          Create an experiment
        </span>
      </div>

      <div className="mt-[1.2em] space-y-[0.2em]">
        {METHODS.map((m, i) =>
          "group" in m ? (
            <div key={m.group} className={i > 0 ? "pt-[1.1em]" : ""}>
              <p className="text-[0.88em] font-semibold text-navy">{m.group}</p>
              <p className="mt-[0.3em] max-w-[46ch] text-[0.78em] leading-[1.45] text-slate-body">
                {m.note}
              </p>
            </div>
          ) : (
            <div
              key={m.name}
              className="flex items-center gap-[0.9em] border-b border-line py-[0.85em] last:border-0"
            >
              <svg viewBox="0 0 12 12" className="h-[0.7em] w-[0.7em] text-muted" aria-hidden>
                <path d="M4 2l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span
                className="flex h-[2em] w-[2em] items-center justify-center rounded-[5px] text-[0.8em] font-bold text-navy"
                style={{ background: m.bg }}
              >
                {m.mark}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[0.88em] font-semibold text-navy">
                  {m.name}
                </span>
                <span className="block text-[0.78em] text-slate-body">{m.where}</span>
              </span>
              {m.state === "on" ? (
                <span className="flex items-center gap-1.5 text-[0.8em] text-slate-body">
                  <svg viewBox="0 0 16 16" className="h-[1em] w-[1em] text-[#0aa85a]" aria-hidden>
                    <path d="M3 8.6 6.4 12 13 4.6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  On
                </span>
              ) : (
                <span className="rounded-[4px] border border-line px-[0.8em] py-[0.4em] text-[0.74em] text-slate-body">
                  Turn on
                </span>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TerminalPanel() {
  return (
    <div className="flex w-full items-start gap-[1.4em]">
      {/* card reader */}
      <div className="w-[42%] shrink-0">
        <div className="overflow-hidden rounded-[1.6em] bg-[#1c1c1c] p-[0.6em] shadow-[0_18px_44px_rgba(20,20,43,0.22)]">
          <div className="rounded-[1.2em] bg-white p-[1em]">
            <p className="text-[0.7em] text-muted">✕</p>
            <p className="mt-[0.8em] text-center text-[0.78em] text-slate-body">Total</p>
            <p className="text-center text-[1.9em] font-semibold leading-tight tracking-[-0.03em] text-navy">
              £6.88
            </p>
            <p className="mt-[0.3em] text-center text-[0.66em] text-muted">
              Tap, insert, or swipe to pay
            </p>
            <div className="mt-[1.1em] space-y-[0.55em] text-[0.7em]">
              {[
                ["Mocha latte", "£6.32"],
                ["Loyalty (10% off)", "-£0.63"],
                ["Tax", "£1.19"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-line pb-[0.5em] text-slate-body">
                  <span>{k}</span>
                  <span className="text-navy">{v}</span>
                </div>
              ))}
              <div className="flex justify-between pt-[0.2em] font-semibold text-navy">
                <span>Total</span>
                <span>£6.88</span>
              </div>
            </div>
            <div className="mt-[1.1em] rounded-[0.5em] bg-[#f6a04d] py-[0.7em] text-center text-[0.72em] font-medium text-white">
              Continue to tip
            </div>
          </div>
        </div>
      </div>

      {/* online checkout */}
      <div className="min-w-0 flex-1 rounded-[8px] bg-white p-[1.2em] shadow-[0_1px_3px_rgba(20,20,43,0.08),0_16px_44px_rgba(20,20,43,0.10)]">
        <div className="flex items-center gap-[0.9em]">
          <span className="h-[3.4em] w-[3.4em] shrink-0 rounded-[5px] bg-[#efe6da]" />
          <span>
            <span className="block text-[0.82em] font-semibold leading-[1.3] text-navy">
              1x Signature Blend 283g bag
            </span>
            <span className="block text-[0.74em] text-muted">
              <s>£24.00</s> £12.00
            </span>
          </span>
        </div>

        <p className="mt-[1.2em] text-[0.8em] font-semibold text-navy">
          Shipping Address
        </p>
        <div className="mt-[0.5em] rounded-[4px] border border-line px-[0.8em] py-[0.6em] text-[0.76em] text-muted">
          Enter address
        </div>
        <div className="mt-[0.8em] rounded-[4px] bg-black py-[0.7em] text-center text-[0.8em] font-semibold text-white">
           Pay
        </div>
        <p className="mt-[0.7em] text-center text-[0.7em] text-muted">
          Or pay another way
        </p>
        <div className="mt-[0.7em] grid grid-cols-4 gap-[0.5em] text-[0.66em]">
          {["Card", "Bank account", "UPI", "•••"].map((t, i) => (
            <span
              key={t}
              className={`rounded-[4px] border px-[0.5em] py-[0.6em] text-center ${
                i === 0 ? "border-brand text-navy" : "border-line text-slate-body"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="mt-[0.9em] text-[0.76em] font-semibold text-navy">
          Card information
        </p>
        <div className="mt-[0.4em] rounded-[4px] border border-line px-[0.8em] py-[0.6em] text-[0.74em] text-muted">
          1234 1234 1234 1234
        </div>
        <div className="mt-[0.5em] grid grid-cols-2 gap-[0.5em] text-[0.74em] text-muted">
          <span className="rounded-[4px] border border-line px-[0.8em] py-[0.6em]">
            Expiry date
          </span>
          <span className="rounded-[4px] border border-line px-[0.8em] py-[0.6em]">
            Security code
          </span>
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────────────────── */

const ITEMS = [
  {
    id: "ways",
    icon: "card",
    title: "Ways to accept payments",
    body: "Accept payments through online and mobile, subscriptions and billing, point-of-sale payments, invoicing, and more.",
    panel: <TerminalPanel />,
  },
  {
    id: "controls",
    icon: "controls",
    title: "Payment method controls",
    body: "Set smart defaults globally at a platform level, and still allow individual users to toggle on/off the payment methods that make sense for their business.",
    panel: <MethodsPanel />,
  },
];

function ItemIcon({ kind }: { kind: string }) {
  if (kind === "card") {
    return (
      <svg viewBox="0 0 40 40" className="h-[2.2em] w-[2.2em]" aria-hidden>
        <rect x="3" y="8" width="30" height="20" rx="3" fill="#25c1e0" />
        <rect x="3" y="13" width="30" height="4" fill="#0a6fe8" />
        <circle cx="30" cy="28" r="8" fill="#0a3f8f" />
        <path d="M26.5 28.2 29 30.7 33.5 25.6" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="h-[2.2em] w-[2.2em]" aria-hidden>
      <rect x="3" y="6" width="30" height="26" rx="4" fill="#25c1e0" />
      <rect x="3" y="13" width="30" height="19" fill="#0a6fe8" />
      <g fill="#fff">
        <rect x="8" y="18" width="16" height="3" rx="1.5" />
        <rect x="8" y="24" width="10" height="3" rx="1.5" />
        <circle cx="27" cy="19.5" r="2.4" />
        <circle cx="21" cy="25.5" r="2.4" />
        <circle cx="8" cy="9.5" r="1.4" />
        <circle cx="13" cy="9.5" r="1.4" />
      </g>
    </svg>
  );
}

export default function ConnectAccept() {
  const [active, setActive] = useState(1);

  return (
    <Frame className="bg-[#f6f9fc]">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(24px,2.4vw,52px)] pt-[clamp(44px,4.6vw,100px)]">
        <h3 className="max-w-[26ch] text-[length:var(--connect-sub)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
          Accept payments and manage tax
        </h3>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[58ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          With Connect, your customers can accept 135+ currencies and dynamically
          surface 40+ payment methods to maximise conversion all over the world.
          Enable easier expansion with support for VAT, sales tax, and GST in{" "}
          <a
            href="#"
            className="font-semibold text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
          >
            100+ countries
          </a>
          . Offer payments online, by invoice, or at the point of sale.
        </p>
      </div>

      <div className="grid items-start gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(24px,2.4vw,50px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] lg:grid-cols-2">
        <div className="space-y-[clamp(24px,2.4vw,52px)]">
          {ITEMS.map((it, i) => {
            const on = i === active;
            return (
              <button
                key={it.id}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-pressed={on}
                className="block w-full text-left"
              >
                <ItemIcon kind={it.icon} />
                <p
                  className={`mt-[clamp(12px,1.2vw,26px)] border-l-2 pl-3 text-[length:var(--cust-body)] font-semibold leading-[1.4] transition-colors duration-300 ${
                    on ? "border-[#fc393a] text-navy" : "border-transparent text-navy"
                  }`}
                >
                  {it.title}
                </p>
                <p className="mt-[0.5em] max-w-[46ch] pl-3 text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                  {it.body}
                </p>
              </button>
            );
          })}
        </div>

        <div className="flex min-h-[clamp(300px,26vw,560px)] items-center text-[length:var(--cust-body)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={ITEMS[active].id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="w-full"
            >
              {ITEMS[active].panel}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Frame>
  );
}
