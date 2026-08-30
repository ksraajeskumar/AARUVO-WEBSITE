"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import StageScene from "./mocks/StageScene";

gsap.registerPlugin(ScrollTrigger);

export default function Sessions() {
  const root = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(".sessions-banner", {
        y: 34,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 82%" },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <a
          href="#"
          className="sessions-banner @container group relative isolate block aspect-[1540/500] overflow-hidden rounded-[8px]"
        >
          <div className="absolute inset-0 z-0">
            <StageScene />
          </div>

          <div className="relative z-10 flex h-full flex-col items-start justify-center gap-[3.2cqw] pl-[2.2cqw]">
            <h2 className="text-[3.55cqw] font-semibold leading-[1.16] tracking-[-0.03em] text-white">
              <span className="block">Made for every home,</span>
              <span className="block">every shop, every street</span>
            </h2>

            <span className="inline-flex items-center gap-[0.7cqw] rounded-[3px] bg-white px-[1.6cqw] py-[1.1cqw] text-[1.3cqw] font-semibold leading-none text-brand shadow-[0_2px_8px_rgba(0,0,0,0.18)] transition-colors duration-200 group-hover:bg-[#f4f4ff]">
              Watch now
              <svg
                viewBox="0 0 16 16"
                className="h-[1cqw] w-[1cqw] transition-transform duration-200 group-hover:translate-x-[0.25cqw]"
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
            </span>
          </div>

          <span className="absolute bottom-[4.2%] right-[2.4%] z-10 flex items-center gap-[1cqw]">
            {/* the mark goes white so it holds up on the dark stage */}
            <Image
              src="/aaruvo-logo.png"
              alt="AARUVO"
              width={1918}
              height={479}
              className="h-[2.2cqw] w-auto brightness-0 invert"
            />
            <span className="text-[1.6cqw] leading-none text-white/85">
              for everyone
            </span>
          </span>
        </a>
      </div>
    </section>
  );
}
