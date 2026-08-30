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
    title:
      "Kumar Stores helps beauty and wellness entrepreneurs grow their business with AARUVO",
    intro:
      "Kumar Stores is a comprehensive business management platform empowering more than 100,000 beauty and wellness entrepreneurs with scheduling, payments and financing solutions.",
    challenge:
      "Beauty entrepreneurs struggled with scattered point solutions, leaving little time for their craft. Many needed better access to capital for growth and cash flow management.",
    solution:
      "Kumar Stores implemented AARUVO for easy payments deployment, AARUVO for subscriptions and AARUVO with Tap to Pay on iPhone for contactless payments. Using AARUVO's payment element, Kumar Stores added buy now, pay later options – UPI, UPI and UPI – to give clients payment flexibility.",
    impact:
      "Kumar Stores processes over $4 billion annually through AARUVO. BNPL options drove a 5.72% order value lift and 171% increase in average order value over cards.",
    img: "/aaruvo-basket.png",
    wordmark: (
      <span className="text-[1.5em] tracking-[0.2em] text-white">
        A grocery shop
      </span>
    ),
    quote:
      "AARUVO's configuration capabilities let us build infrastructure our way while giving shops the power to do things their way.",
    name: "Sample name 1",
    role: "CEO, Kumar Stores",
  },
  {
    id: "clothes",
    tab: <span>A clothes shop</span>,
    title: "AARUVO helps Meena Cloth Shop improve successful orders by 4%",
    intro:
      "Meena Cloth Shop is a multi-channel fashion brand with 245 stores across the UK and a significant online presence that reaches more than 125 global markets.",
    challenge:
      "Founded in 1948, Meena Cloth Shop was facing competition from new online retailers. It needed customer-centric, high-tech solutions for an omnichannel customer journey.",
    solution:
      "Meena Cloth Shop engaged AARUVO, an IT consultancy, to help implement several AARUVO products to replace its fragmented system, including AARUVO, AARUVO, and AARUVO. AARUVO now processes all self-service checkouts in Meena Cloth Shop stores, as well as 100% of the retailer's online sales.",
    impact:
      "Meena Cloth Shop has seen a 4% uplift in successful orders and a 2% uplift in customers moving from order review to completing a transaction. Now that more customers are completing checkout and more submitted payments are being approved, Meena Cloth Shop anticipates a boost in revenue.",
    img: "/aaruvo-fashion.png",
    wordmark: (
      <span className="text-[1.5em] font-semibold text-white">A clothes shop</span>
    ),
    quote:
      "Over the first 12 months of our partnership with AARUVO, we will capture millions more value in sales than we previously would have.",
    name: "Sample name 2",
    role: "Digital Product Lead, Meena Cloth Shop",
  },
  {
    id: "mobile",
    tab: <span>A mobile shop</span>,
    title: "Placeholder study — Arun Mobiles streamlines mobility payments with AARUVO",
    intro:
      "Placeholder summary. Describe the business, the markets it serves and the scale it operates at.",
    challenge:
      "Placeholder challenge. Describe the fragmented systems or manual work the business was dealing with before.",
    solution:
      "Placeholder solution. Describe which AARUVO products the partner implemented and how they fit together.",
    impact:
      "Placeholder impact. Describe the measurable result — conversion, authorisation rate, or engineering time saved.",
    img: "/aaruvo-electronics.png",
    wordmark: (
      <span className="text-[1.5em] font-semibold text-white">A mobile shop</span>
    ),
    quote: "Placeholder quote from the customer about working with the partner.",
    name: "Sample name 3",
    role: "Placeholder role, Arun Mobiles",
  },
  {
    id: "bulk",
    tab: (
      <span className="text-[0.95em]">
        A wholesale seller
      </span>
    ),
    title: "Placeholder study — City Wholesale scales direct-to-rider sales",
    intro:
      "Placeholder summary. Describe the business, the markets it serves and the scale it operates at.",
    challenge:
      "Placeholder challenge. Describe the checkout or payments problem the business needed solved.",
    solution:
      "Placeholder solution. Describe which AARUVO products the partner implemented and how they fit together.",
    impact:
      "Placeholder impact. Describe the measurable result — conversion, basket size, or operational savings.",
    img: "/aaruvo-wholesale.png",
    wordmark: (
      <span className="text-[1.5em] text-white">
        A wholesale seller
      </span>
    ),
    quote: "Placeholder quote from the customer about working with the partner.",
    name: "Sample name 4",
    role: "Placeholder role, City Wholesale",
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
