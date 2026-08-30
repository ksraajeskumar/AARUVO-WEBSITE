"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DetailModal, { type Detail } from "./DetailModal";
import Expand from "./Expand";
import { CARD_DETAILS } from "@/lib/cardDetails";
import AgenticChat from "./mocks/AgenticChat";
import DustRing from "./mocks/DustRing";
import LocalMap from "./mocks/LocalMap";
import SafePayment from "./mocks/SafePayment";

gsap.registerPlugin(ScrollTrigger);

/** Titles carry their own line breaks so they wrap like the reference at
 *  every card width instead of reflowing with the viewport. */
function Card({
  title,
  ground,
  onExpand,
  children,
}: {
  title: string[];
  ground: string;
  onExpand: () => void;
  children: React.ReactNode;
}) {
  return (
    <article className="plat-reveal relative isolate flex h-[var(--card3-h)] flex-col overflow-hidden rounded-[20px] border border-line/80">
      <div className="absolute inset-0 z-0" style={{ background: ground }} />

      <div className="relative z-20 flex items-start justify-between gap-4 p-[var(--card-pad)]">
        <h3 className="text-[length:var(--card-title)] font-medium leading-[1.18] tracking-[-0.02em] text-navy">
          {title.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
        <Expand tone="tint" onClick={onExpand} label={title.join(" ")} />
      </div>

      <div className="relative z-10 min-h-0 flex-1">{children}</div>
    </article>
  );
}

export default function Platform() {
  const root = useRef<HTMLElement | null>(null);
  const [detail, setDetail] = useState<Detail | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".plat-reveal", {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: root.current, start: "top 80%" },
      });

      // The conversation assembles itself once the card is on screen.
      gsap.from(".chat-step", {
        y: 16,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.22,
        delay: 0.35,
        scrollTrigger: { trigger: root.current, start: "top 75%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="mt-4">
      <div className="w-full px-[var(--hero-indent)]">
        {/* Three columns only from xl: at lg the cards are too narrow for the
            conversation to sit inside the art area. */}
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-3">
          <Card
            title={["Just say what", "you need"]}
            ground="radial-gradient(58% 46% at 50% 56%,#fff5fa 0%,#fdfbfd 62%,#ffffff 100%)"
            onExpand={() => setDetail(CARD_DETAILS.agentic)}
          >
            <div className="absolute inset-0 z-0 flex items-center justify-center">
              <div className="aspect-square h-auto w-[120%] max-w-none">
                <DustRing />
              </div>
            </div>
            <div className="relative z-10 flex h-full items-center px-[var(--card-pad)] pb-[var(--card-pad)]">
              <AgenticChat />
            </div>
          </Card>

          <Card
            title={["Pay safely,", "online only"]}
            ground="radial-gradient(62% 44% at 50% 52%,#fdf2fb 0%,#fbf7fe 55%,#ffffff 100%)"
            onExpand={() => setDetail(CARD_DETAILS.issuing)}
          >
            <SafePayment />
          </Card>

          <Card
            title={[
              "We stay with you",
              "after delivery,",
              "until the job is done",
            ]}
            ground="linear-gradient(180deg,#fbfbff 0%,#f7f7fd 100%)"
            onExpand={() => setDetail(CARD_DETAILS.stablecoin)}
          >
            <div className="absolute inset-0 -bottom-[6%]">
              <LocalMap />
            </div>
          </Card>
        </div>
      </div>

      <DetailModal detail={detail} onClose={() => setDetail(null)} />
    </section>
  );
}
