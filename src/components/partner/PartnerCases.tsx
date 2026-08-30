"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import PhotoBadge from "../PhotoBadge";
import { AnimatePresence, motion } from "framer-motion";
import PFrame from "./PFrame";

const DWELL = 9000;
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type Study = {
  id: string;
  tab: React.ReactNode;
  title: string;
  intro: string;
  challenge: string;
  solution: string;
  impact: string;
  img: string;
  wordmark: React.ReactNode;
  quote: string;
  name: string;
  role: string;
};

/**
 * Only the Kumar Stores and Meena Cloth Shop studies come from the reference. The
 * Arun Mobiles and City Wholesale slides are placeholder copy — swap in the real study
 * before this goes anywhere public.
 */
const STUDIES: Study[] = [
  {
    id: "basket",
    tab: (
      <span className="text-[0.95em] tracking-[0.14em]">
        A grocery shop
      </span>
    ),
    title: "A grocery shop takes orders from three more streets",
    intro:
      "A family-run grocery on a busy corner. Two people behind the counter, about four hundred items on the shelves, and customers who have been coming for years.",
    challenge:
      "Everyone within sight of the shop already knew it. Nobody one street further did. Writing out a stock list to put online would have taken weeks nobody had.",
    solution:
      "The owner walked the aisles and said the item names into the phone. The shop was listed the same afternoon. Orders arrive as a list, payment is settled before packing, and a rider picks it up.",
    impact:
      "Orders now come from streets the shop had never delivered to. Nothing about how the shop is run had to change, and no payment has to be chased.",
    img: "/aaruvo-basket.png",
    wordmark: (
      <span className="text-[1.5em] tracking-[0.2em] text-white">
        A grocery shop
      </span>
    ),
    quote:
      "We kept running the shop the way we always have. AARUVO just brought us the people who were already looking for what we sell.",
    name: "A grocery shop",
    role: "example story",
  },
  {
    id: "clothes",
    tab: <span>A clothes shop</span>,
    title: "A tailor starts selling to the towns nearby",
    intro:
      "A small tailoring shop that stitches to order and keeps ready-made stock on a rail at the front. One shop, one town, and a name people pass on by word of mouth.",
    challenge:
      "Buyers from other towns wanted bulk orders but everything went through phone calls. Sizes and counts got mixed up, and half the day went in confirming what was already agreed.",
    solution:
      "Buyers now send one voice message with the sizes and counts they want. AARUVO writes it out as a list both sides can see, and the price is agreed before a single piece is packed.",
    impact:
      "Bulk orders arrive from towns the shop had never delivered to, and the mix-ups over sizes have stopped because the list is written down before anyone packs.",
    img: "/aaruvo-fashion.png",
    wordmark: (
      <span className="text-[1.5em] font-semibold text-white">A clothes shop</span>
    ),
    quote:
      "In the first year we sold to towns we had never delivered to. The orders came in by voice, and the money came straight to the bank.",
    name: "A clothes shop",
    role: "example story",
  },
  {
    id: "mobile",
    tab: <span>A mobile shop</span>,
    title: "A mobile shop stops losing its day to the same question",
    intro:
      "A counter shop selling phones, chargers, cables and covers, next to a bus stop where people stop in on their way home.",
    challenge:
      "Most of the day went in answering the same question: does this charger fit my phone? People came in, asked, and left without buying.",
    solution:
      "The shop listed its stock by talking. Now a customer asks in the app which cable fits their phone, gets the answer, and comes in only when they know what to buy.",
    impact:
      "Fewer wasted trips for the customer and fewer wasted conversations at the counter. People arrive already knowing the item and the price.",
    img: "/aaruvo-electronics.png",
    wordmark: (
      <span className="text-[1.5em] font-semibold text-white">A mobile shop</span>
    ),
    quote:
      "People ask which charger fits their phone before they come. We answer once in the app and they arrive knowing what to buy.",
    name: "A mobile shop",
    role: "example story",
  },
  {
    id: "bulk",
    tab: (
      <span className="text-[0.95em]">
        A wholesale seller
      </span>
    ),
    title: "A wholesaler takes the month's order in one message",
    intro:
      "A wholesale seller supplying rice, oil and dry goods in sacks and cases to small shops and to families who buy for the month.",
    challenge:
      "Every order started as a phone call and ended as a scribbled list. Prices were argued twice, once on the call and again at delivery.",
    solution:
      "Buyers send one voice message for the whole month. AARUVO turns it into a list with the price against each item, and both sides agree before anything is packed.",
    impact:
      "No phone calls, no written lists and no argument at the door, because the price everyone agreed to is on the order.",
    img: "/aaruvo-wholesale.png",
    wordmark: (
      <span className="text-[1.5em] text-white">
        A wholesale seller
      </span>
    ),
    quote:
      "Our buyers send one voice message for the month. No phone calls, no written lists, and the price is agreed before we pack.",
    name: "A wholesale seller",
    role: "example story",
  },
];

function Block({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l-2 border-brand pl-4">
      <p className="text-[0.92em] font-semibold text-navy">{label}</p>
      <p className="mt-[0.5em] leading-[1.6] text-slate-body">{text}</p>
    </div>
  );
}

export default function PartnerCases() {
  const [i, setI] = useState(0);
  const s = STUDIES[i];

  // The strip walks itself so all four studies are seen without interaction.
  useEffect(() => {
    const t = setTimeout(() => setI((n) => (n + 1) % STUDIES.length), DWELL);
    return () => clearTimeout(t);
  }, [i]);

  return (
    <PFrame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-brand">
          Case studies
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="mt-[clamp(14px,1.4vw,30px)] grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(14px,1.4vw,30px)] lg:grid-cols-2">
              <h2 className="max-w-[22ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
                {s.title}
              </h2>
              <p className="max-w-[52ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                {s.intro}
              </p>
            </div>

            <div className="mt-[clamp(26px,2.8vw,60px)] grid items-start gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(24px,2.6vw,56px)] lg:grid-cols-2">
              <div className="space-y-[clamp(18px,1.8vw,38px)] text-[length:var(--cust-body)]">
                <Block label="Challenge" text={s.challenge} />
                <Block label="Solution" text={s.solution} />
                <Block label="Impact" text={s.impact} />
              </div>

              <div className="relative aspect-[720/520] w-full overflow-hidden rounded-[8px] shadow-[0_2px_8px_rgba(20,20,43,0.10),0_22px_54px_rgba(20,20,43,0.16)]">
                <Image
                  src={s.img}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <PhotoBadge tone="dark" className="text-[length:var(--cust-body)]" />
                <div className="relative flex h-full flex-col p-[clamp(18px,1.9vw,40px)] text-[length:var(--cust-body)] text-white">
                  <div className="flex flex-1 items-start justify-center pt-[6%]">
                    {s.wordmark}
                  </div>
                  <blockquote className="max-w-[34ch] font-medium leading-[1.5]">
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                  <p className="mt-[1em] text-[0.9em]">
                    <span className="font-semibold">{s.name}</span>, {s.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* tab strip */}
        <div className="mt-[clamp(30px,3vw,64px)] grid grid-cols-2 md:grid-cols-4">
          {STUDIES.map((t, n) => {
            const on = n === i;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setI(n)}
                aria-pressed={on}
                className={`relative flex items-center justify-center border-t py-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] transition-colors duration-300 ${
                  on ? "border-transparent text-navy" : "border-line text-[#b3bccb]"
                }`}
              >
                {on && (
                  <span
                    key={`${t.id}-bar`}
                    className="absolute inset-x-0 top-0 h-[2px] origin-left bg-brand"
                    style={{ animation: `tab-fill ${DWELL}ms linear forwards` }}
                  />
                )}
                {t.tab}
              </button>
            );
          })}
        </div>
      </div>
    </PFrame>
  );
}
