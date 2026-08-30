"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailModal, { type Detail } from "./DetailModal";
import Expand from "./Expand";
import { CARD_DETAILS } from "@/lib/cardDetails";
import BillingPanels from "./mocks/BillingPanels";
import BrowserCheckout from "./mocks/BrowserCheckout";
import PhoneCheckout from "./mocks/PhoneCheckout";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scales the fixed-size mockups down as the cards narrow. Each step is sized
 * for the narrowest card in its range, so the 640px browser mock always lands
 * inside the card instead of clipping at its right edge.
 */
const MOCK_SCALE =
  "origin-top-left scale-[0.43] sm:scale-[0.72] lg:scale-[0.48] xl:scale-[0.60] 2xl:scale-[0.72] min-[1792px]:scale-[0.84] min-[2048px]:scale-[0.96]";

function Card({
  title,
  titleWidth,
  span,
  onExpand,
  children,
}: {
  title: string;
  titleWidth: string;
  span?: boolean;
  onExpand: () => void;
  children: React.ReactNode;
}) {
  return (
    <article
      className={`sol-reveal relative isolate h-[var(--card-h)] overflow-hidden rounded-[20px] border border-line/80 bg-white ${
        span ? "lg:col-span-2" : ""
      }`}
    >
      <div className="relative z-20 flex items-start justify-between gap-4 p-[var(--card-pad)]">
        <h3
          className={`${titleWidth} text-[length:var(--card-title)] font-medium leading-[1.18] tracking-[-0.02em] text-navy`}
        >
          {title}
        </h3>
        <Expand onClick={onExpand} label={title} />
      </div>
      {children}
    </article>
  );
}

export default function Solutions() {
  const root = useRef<HTMLElement | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".sol-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <h2 className="sol-reveal max-w-[20em] text-[length:var(--sec-h2)] font-semibold leading-[1.22] tracking-[-0.035em]">
          <span className="text-navy">
            One place for everything you need.
          </span>{" "}
          <span className="text-slate-body">
            Grocery, food, clothes, electronics, wholesale and the small shops on your
            street. Ask once, and we handle the rest.
          </span>
        </h2>

        <div className="mt-[var(--sec-gap)] grid grid-cols-1 gap-4 lg:grid-cols-3">
          <Card
            span
            titleWidth="max-w-[48%]"
            title="Buy from any shop near you, big or small"
            onExpand={() => setDetail(CARD_DETAILS.accept)}
          >
            {/* artwork */}
            <div className="pointer-events-none absolute inset-0 z-0">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(30% 27% at 97% 28%,#FF8A1E 0%,#FFB067 44%,rgba(255,255,255,0) 78%)",
                }}
              />
              <div
                className="absolute -bottom-[6%] -left-[4%] h-[72%] w-[60%]"
                style={{
                  background:
                    "radial-gradient(115% 95% at 18% 104%,#6B46E5 0%,#9B54EC 22%,#E85CB4 46%,#FF9E62 68%,rgba(255,255,255,0) 86%)",
                }}
              />
            </div>

            <div className="absolute inset-0 z-10">
              <div className="absolute left-[6%] top-[23%]">
                <div className={MOCK_SCALE}>
                  <PhoneCheckout />
                </div>
              </div>
              <div className="absolute left-[36%] top-[23%]">
                <div className={MOCK_SCALE}>
                  <BrowserCheckout />
                </div>
              </div>
            </div>
          </Card>

          <Card
            titleWidth="max-w-[92%]"
            title="Get your regular items on time"
            onExpand={() => setDetail(CARD_DETAILS.billing)}
          >
            <div className="pointer-events-none absolute inset-0 z-0">
              <div
                className="absolute inset-x-0 bottom-0 h-[80%]"
                style={{
                  background:
                    "radial-gradient(120% 100% at 90% -6%,#FFA24B 0%,#FF9A6B 24%,rgba(255,255,255,0) 58%),radial-gradient(130% 110% at 10% 108%,#6D4AE0 0%,#9B5BEE 25%,#E86BC0 50%,#FFB07A 72%,rgba(255,255,255,0) 90%)",
                }}
              />
            </div>

            <div className="absolute inset-x-0 top-[24%] z-10 px-[12%]">
              <BillingPanels />
            </div>
          </Card>
        </div>
      </div>

      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </section>
  );
}
