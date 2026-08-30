"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailModal, { type Detail } from "./DetailModal";
import Expand from "./Expand";
import { CARD_DETAILS } from "@/lib/cardDetails";
import ConnectedAccounts from "./mocks/ConnectedAccounts";
import ReceiptCard from "./mocks/ReceiptCard";

gsap.registerPlugin(ScrollTrigger);

export default function Embed() {
  const root = useRef<HTMLElement | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".embed-card", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="mt-4">
      <div className="w-full px-[var(--hero-indent)]">
        {/*
          The scene is laid out in container-query units against the card, so
          every element keeps its position and size relative to the artwork at
          any viewport instead of stepping at breakpoints.
        */}
        <article className="embed-card @container relative isolate aspect-[1557/556] overflow-hidden rounded-[20px] border border-line/80 bg-white">
          <div className="embed-stripes embed-stripes-purple absolute inset-0 z-0" />
          <div className="embed-stripes embed-stripes-pink absolute inset-0 z-0" />

          <div className="relative z-30 flex items-start justify-between gap-4 p-[var(--card-pad)]">
            <h3 className="text-[2.05cqw] font-medium leading-[1.2] tracking-[-0.02em] text-navy">
              <span className="block">Shops run their day</span>
              <span className="block">on AARUVO</span>
            </h3>
            <Expand tone="solid" onClick={() => setDetail(CARD_DETAILS.embed)} label="Embed payments" />
          </div>

          {/* dashboard */}
          <div className="browser-lift absolute left-[34.2%] top-[0.6%] z-10 h-[112%] w-[58.1%] transition-transform duration-500 ease-out">
            <ConnectedAccounts />
          </div>

          {/* the elbow tying the receipt back to the account it belongs to */}
          <svg
            viewBox="0 0 140 46"
            className="absolute left-[24.6%] top-[15.5%] z-20 h-[8%] w-[12%]"
            aria-hidden
            preserveAspectRatio="none"
          >
            <path
              className="connector-dash"
              d="M3 44V6h134"
              fill="none"
              stroke="#e8536f"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>

          {/* receipt */}
          <div className="absolute left-[22%] top-[20.8%] z-20 w-[23.8%]">
            <ReceiptCard />
          </div>
        </article>
      </div>

      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </section>
  );
}
