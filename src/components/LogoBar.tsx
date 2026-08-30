"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

/** The kinds of things people buy on AARUVO. */
const LOGOS: { name: string; node: React.ReactNode }[] = [
  "Grocery",
  "Fruits & vegetables",
  "Food & cooking",
  "Electronics",
  "Clothes",
  "Wholesale",
  "Shops near you",
  "Home & kitchen",
  "Beauty & care",
  "Books & stationery",
].map((name) => ({
  name,
  node: (
    <span className="whitespace-nowrap text-[length:var(--logo-brand)] font-medium tracking-[-0.02em]">
      {name}
    </span>
  ),
}));

export default function LogoBar() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.to(track, { xPercent: -50, duration: 70, ease: "none", repeat: -1 });
    }, track);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative z-10">
      <div className="px-[var(--hero-indent)]">
        <div className="border-t border-line/70">
          {/* The strip is masked rather than clipped, so a logo dissolves at
              the gutter instead of being cut through the middle. */}
          <div
            className="overflow-hidden py-[var(--logobar-py)]"
            style={{
              WebkitMaskImage:
                "linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)",
              maskImage:
                "linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)",
            }}
          >
            <div
              ref={trackRef}
              className="flex w-max items-center gap-[var(--logobar-gap)]"
            >
              {[...LOGOS, ...LOGOS].map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="flex h-[52px] shrink-0 items-center text-navy"
                  aria-hidden={i >= LOGOS.length}
                >
                  {logo.node}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
