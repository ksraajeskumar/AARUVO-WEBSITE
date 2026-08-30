"use client";

import { useEffect, useRef, useState } from "react";

export const SECTIONS = [
  { id: "global-payments", label: "Shopping made simple" },
  { id: "platform-baas", label: "For shop owners" },
  { id: "revenue-automation", label: "Your regular items" },
  { id: "authorisation", label: "When something goes wrong" },
  { id: "working-with-stripe", label: "People behind AARUVO" },
  { id: "use-cases", label: "Use cases" },
  { id: "resources", label: "Resources" },
];

/**
 * The section rail. It pins under the site header, fills a progress bar as the
 * page moves, and scrolls itself sideways so the active label stays on screen.
 */
export default function EnterpriseNav() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [progress, setProgress] = useState(0);
  const rail = useRef<HTMLDivElement>(null);
  const items = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);

      const line = window.innerHeight * 0.34;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.getBoundingClientRect().top <= line) current = s.id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Keep the active label inside the rail as the page advances.
  useEffect(() => {
    const el = items.current[active];
    const box = rail.current;
    if (!el || !box) return;
    const left = el.offsetLeft - box.clientWidth * 0.16;
    box.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [active]);

  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="sticky top-[var(--header-h)] z-40 border-b border-line bg-white/95 backdrop-blur">
      <span
        className="absolute inset-x-0 top-0 h-[3px] origin-left bg-brand transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden
      />

      <div className="flex items-center gap-4 px-[var(--hero-indent)]">
        <div
          ref={rail}
          className="flex flex-1 gap-[clamp(16px,2vw,42px)] overflow-x-auto py-[clamp(12px,1.1vw,24px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              ref={(el) => {
                items.current[s.id] = el;
              }}
              href={`#${s.id}`}
              onClick={(e) => jump(e, s.id)}
              aria-current={active === s.id ? "true" : undefined}
              className={`shrink-0 whitespace-nowrap text-[length:var(--cust-body)] font-medium transition-colors duration-200 ${
                active === s.id ? "text-brand" : "text-navy hover:text-brand"
              }`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="group flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-[clamp(12px,1.1vw,22px)] py-[clamp(8px,0.65vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
        >
          Talk to us
          <svg
            viewBox="0 0 16 16"
            className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[2px]"
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
      </div>
    </div>
  );
}
