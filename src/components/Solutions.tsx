"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailModal, { type Detail } from "./DetailModal";
import Expand from "./Expand";
import { CARD_DETAILS } from "@/lib/cardDetails";

gsap.registerPlugin(ScrollTrigger);

/**
 * The artwork band under each card title. The renders carry their own scene
 * and lighting, so they sit straight on the white card: `max-h-full` plus a
 * width cap lets each one shrink with the card instead of clipping at its
 * edge, and `items-end` keeps them planted on the card floor.
 */
const ART_BAND =
  "absolute inset-x-0 bottom-0 top-[16%] z-10 flex items-center justify-center px-[2%] lg:items-end lg:px-[4%]";

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

            <div className={`${ART_BAND} gap-[1%] lg:gap-[2%]`}>
              <Image
                src="/pay.png"
                alt="A shopper paying an AARUVO Store bill of ₹532 by UPI from their phone"
                width={1005}
                height={1565}
                sizes="(max-width: 1023px) 40vw, 25vw"
                className="max-h-full w-auto max-w-[45%] lg:max-w-[42%]"
              />
              <Image
                src="/pay1-cutout.png"
                alt="The AARUVO Store checkout on the web, offering UPI, Google Pay, PhonePe, card and net banking"
                width={1122}
                height={1402}
                sizes="(max-width: 1023px) 50vw, 32vw"
                className="max-h-full w-auto max-w-[54%] lg:max-w-[52%]"
              />
            </div>
          </Card>

          <Card
            titleWidth="max-w-[92%]"
            title="Get your regular items on time"
            onExpand={() => setDetail(CARD_DETAILS.billing)}
          >
            <div className={`${ART_BAND} pb-[3%]`}>
              <Image
                src="/pay3.png"
                alt="A monthly list reminding a customer that rice and oil are due in four days, above a chart of 18 orders in the last 30 days"
                width={1122}
                height={1402}
                sizes="(max-width: 1023px) 70vw, 26vw"
                className="max-h-full w-auto max-w-full rounded-[14px]"
              />
            </div>
          </Card>
        </div>
      </div>

      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </section>
  );
}
