"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Frame from "./Frame";

const DWELL = 6500;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Node = "buyer" | "seller" | "platform" | "bank";

type Flow = {
  tab: string;
  title: string;
  body: string;
  cta: string;
  nodes: Node[];
  code: [string, string][];
};

const FLOWS: Flow[] = [
  {
    tab: "Sellers collect payments",
    title: "Sellers collect payments",
    body: "Buyers transact with sellers, often unaware of the platform's existence. The platform may take fees from the transaction. Example: A buyer makes a purchase from a store that is built on Grocery's platform.",
    cta: "Direct charges",
    nodes: ["buyer", "seller", "platform"],
    code: [
      ["1", '<span class="c-k">await</span> aaruvo.orders.<span class="c-f">create</span>({'],
      ["2", '  payment_method_types: [<span class="c-s">&#39;card&#39;</span>],'],
      ["3", '  amount: <span class="c-n">1000</span>,'],
      ["4", '  currency: <span class="c-s">&#39;usd&#39;</span>,'],
      ["5", '  application_fee_amount: <span class="c-n">200</span>'],
      ["6", "}, {"],
      ["7", '  shop_id: <span class="c-s">&#39;{{SHOP_ID}}&#39;</span>'],
      ["8", "});"],
    ],
  },
  {
    tab: "Platform collects payments",
    title: "Platform collects payments",
    body: "Buyers transact with the platform, which transfers funds to the seller after collecting its platform fees. Example: A buyer books a ride using the Lyft app. Part of each charge is transferred to the Lyft driver.",
    cta: "Destination charges",
    nodes: ["buyer", "platform", "seller"],
    code: [
      ["1", '<span class="c-k">await</span> aaruvo.orders.<span class="c-f">create</span>({'],
      ["2", '  payment_method_types: [<span class="c-s">&#39;card&#39;</span>],'],
      ["3", '  amount: <span class="c-n">1000</span>,'],
      ["4", '  currency: <span class="c-s">&#39;usd&#39;</span>,'],
      ["5", '  application_fee_amount: <span class="c-n">200</span>,'],
      ["6", "  transfer_data: {"],
      ["7", '    destination: <span class="c-s">&#39;{{SHOP_ID}}&#39;</span>'],
      ["8", "  },"],
      ["9", "});"],
    ],
  },
  {
    tab: "Split payouts between sellers",
    title: "Split payouts between sellers",
    body: "One charge is divided across several sellers. Example: A marketplace basket contains items from three different shops, and each shop is paid its share of the order.",
    cta: "Separate charges and transfers",
    nodes: ["buyer", "platform", "seller"],
    code: [
      ["1", '<span class="c-k">await</span> aaruvo.transfers.<span class="c-f">create</span>({'],
      ["2", '  amount: <span class="c-n">700</span>,'],
      ["3", '  currency: <span class="c-s">&#39;usd&#39;</span>,'],
      ["4", '  destination: <span class="c-s">&#39;{{SELLER_ONE}}&#39;</span>,'],
      ["5", '  source_transaction: <span class="c-s">&#39;{{CHARGE_ID}}&#39;</span>'],
      ["6", "});"],
    ],
  },
  {
    tab: "Top-ups",
    title: "Top-ups",
    body: "The platform moves money from its own bank account into its AARUVO balance, so it can pay out sellers before the related charges have settled.",
    cta: "Top-ups",
    nodes: ["bank", "platform", "seller"],
    code: [
      ["1", '<span class="c-k">await</span> aaruvo.topups.<span class="c-f">create</span>({'],
      ["2", '  amount: <span class="c-n">200000</span>,'],
      ["3", '  currency: <span class="c-s">&#39;usd&#39;</span>,'],
      ["4", '  description: <span class="c-s">&#39;Weekly top-up&#39;</span>'],
      ["5", "});"],
    ],
  },
  {
    tab: "Payouts",
    title: "Payouts",
    body: "Funds settle from the AARUVO balance into a seller's bank account on the schedule you choose – daily, weekly, monthly, or on demand.",
    cta: "Payouts",
    nodes: ["platform", "seller", "bank"],
    code: [
      ["1", '<span class="c-k">await</span> aaruvo.payouts.<span class="c-f">create</span>({'],
      ["2", '  amount: <span class="c-n">1000</span>,'],
      ["3", '  currency: <span class="c-s">&#39;usd&#39;</span>'],
      ["4", "}, {"],
      ["5", '  shopId: <span class="c-s">&#39;{{SHOP_ID}}&#39;</span>'],
      ["6", "});"],
    ],
  },
];

function NodeIcon({ kind }: { kind: Node }) {
  const box =
    "flex h-[clamp(44px,3.6vw,72px)] w-[clamp(44px,3.6vw,72px)] items-center justify-center rounded-full bg-white shadow-[0_1px_3px_rgba(20,20,43,0.10),0_8px_20px_rgba(20,20,43,0.10)]";

  return (
    <span className={box}>
      {kind === "buyer" && (
        <svg viewBox="0 0 32 32" className="h-[55%] w-[55%]" aria-hidden>
          <circle cx="16" cy="12" r="6" fill="#1a6bff" />
          <path d="M4 30c0-7 5.4-11 12-11s12 4 12 11z" fill="#1a6bff" />
        </svg>
      )}
      {kind === "seller" && (
        <svg viewBox="0 0 32 32" className="h-[55%] w-[55%]" aria-hidden>
          <path
            d="M11 6 6 9l2 6 3-1v12h14V14l3 1 2-6-5-3-3 2h-8z"
            fill="#25c1e0"
          />
        </svg>
      )}
      {kind === "platform" && (
        <svg viewBox="0 0 32 32" className="h-[58%] w-[58%]" aria-hidden>
          <path d="M16 4 30 11l-14 7-14-7z" fill="#25c1e0" />
          <path d="M16 15 30 22l-14 7-14-7z" fill="#7fe0f0" />
        </svg>
      )}
      {kind === "bank" && (
        <svg viewBox="0 0 32 32" className="h-[56%] w-[56%]" aria-hidden>
          <path d="M16 4 30 11H2z" fill="#1a6bff" />
          <g fill="#1a6bff">
            <rect x="6" y="14" width="4" height="10" />
            <rect x="14" y="14" width="4" height="10" />
            <rect x="22" y="14" width="4" height="10" />
            <rect x="3" y="26" width="26" height="3" rx="1.5" />
          </g>
        </svg>
      )}
    </span>
  );
}

function Arrows() {
  return (
    <span className="flex flex-1 items-center justify-center gap-[3px]">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          viewBox="0 0 10 12"
          className="funds-arrow h-[clamp(8px,0.7vw,14px)] w-[clamp(6px,0.55vw,11px)] text-[#25c1e0]"
          style={{ animationDelay: `${i * 0.12}s` }}
          aria-hidden
        >
          <path d="M1 1l7 5-7 5z" fill="currentColor" />
        </svg>
      ))}
    </span>
  );
}

export default function ConnectFunds() {
  const [i, setI] = useState(0);
  const f = FLOWS[i];

  // The tabs walk themselves so the whole set is seen without interaction.
  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % FLOWS.length), DWELL);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <Frame className="bg-[#f6f9fc]">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(24px,2.4vw,52px)] pt-[clamp(44px,4.6vw,100px)]">
        <h3 className="text-[length:var(--connect-sub)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
          Control how funds flow
        </h3>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[58ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Connect supports almost any type of money movement you can dream up. Pay
          out users quickly and reduce operational overhead with Connect&rsquo;s
          global routing and payout engine. You can split funds between multiple
          users, instantly route payments across borders, and specify your
          earnings on each transaction.
        </p>
      </div>

      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)]">
        <div className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {FLOWS.map((t, n) => (
            <button
              key={t.tab}
              type="button"
              onClick={() => setI(n)}
              aria-pressed={n === i}
              className={`shrink-0 rounded-full px-[clamp(14px,1.2vw,24px)] py-[clamp(9px,0.75vw,15px)] text-[length:var(--cust-body)] font-medium leading-none transition-colors duration-300 ${
                n === i
                  ? "bg-[#fc393a] text-white"
                  : "text-navy hover:bg-white"
              }`}
            >
              {t.tab}
            </button>
          ))}
        </div>

        <div className="mt-[clamp(16px,1.6vw,34px)] grid gap-x-[clamp(20px,2vw,44px)] gap-y-6 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1.38fr)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${f.tab}-copy`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="border-l-2 border-[#fc393a] pl-4"
            >
              <p className="text-[length:var(--cust-body)] font-semibold text-navy">
                {f.title}
              </p>
              <p className="mt-[0.7em] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                {f.body}
              </p>
              <a
                href="#"
                className="group mt-[1.1em] inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
              >
                {f.cta}
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
            </motion.div>
          </AnimatePresence>

          <div className="grid overflow-hidden rounded-[8px] md:grid-cols-2">
            <div
              className="flex items-center px-[clamp(16px,1.6vw,34px)] py-[clamp(28px,3vw,64px)]"
              style={{
                backgroundImage:
                  "radial-gradient(#dbe3ec 1px, transparent 1px)",
                backgroundSize: "10px 10px",
                backgroundColor: "#f9fbfd",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${f.tab}-flow`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: EASE }}
                  className="flex w-full items-center"
                >
                  {f.nodes.map((n, k) => (
                    <span key={k} className="flex flex-1 items-center last:flex-none">
                      <NodeIcon kind={n} />
                      {k < f.nodes.length - 1 && <Arrows />}
                    </span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-[#0e2a45] p-[clamp(14px,1.3vw,28px)] font-mono text-[length:var(--connect-code)] leading-[1.85]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${f.tab}-code`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: EASE }}
                >
                  {f.code.map(([n, code], k) => (
                    <div key={k} className="flex gap-[1.6em] whitespace-pre">
                      <span className="w-[1.2em] shrink-0 text-right text-[#5f7f9e]">
                        {n}
                      </span>
                      <span
                        className="text-[#cfe3f5]"
                        dangerouslySetInnerHTML={{ __html: code }}
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}
