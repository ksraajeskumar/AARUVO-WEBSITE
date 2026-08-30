"use client";

import { useEffect, useRef, useState } from "react";
import { THEMES } from "@/lib/backboneThemes";
import BackboneCanvas from "./mocks/BackboneCanvas";

/** Each stat drives its own figure in the canvas below. */
const STATS = [
  { value: "10+", lines: ["kinds of shopping,", "all in one app"] },
  { value: "3", lines: ["languages to speak in —", "Tamil, English, Tanglish"] },
  { value: "0", lines: ["hidden charges —", "you see every rupee"] },
  { value: "24x7", lines: ["help, by voice", "or by typing"] },
];

function ThemeIcon({ kind }: { kind: string }) {
  const stroke = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
  };

  if (kind === "night") {
    return (
      <svg viewBox="0 0 20 20" className="h-[15px] w-[15px]" aria-hidden>
        <path d="M15.5 12.6A6 6 0 0 1 7.4 4.5a6 6 0 1 0 8.1 8.1z" {...stroke} />
      </svg>
    );
  }

  // The daylight marks share a disc and differ in how much of it is lit.
  const rays: Record<string, string> = {
    predawn: "M10 3.4v1.4M4.6 5.1l1 1M15.4 5.1l-1 1",
    sunrise: "M10 3v1.6M4.2 5l1.1 1.1M15.8 5l-1.1 1.1M3 10.4h1.6M15.4 10.4H17",
    day: "M10 2.6v1.8M4 5l1.3 1.3M16 5l-1.3 1.3M2.6 10.6h1.8M15.6 10.6h1.8M4 16.2l1.3-1.3M16 16.2l-1.3-1.3M10 16.6v1.8",
    dusk: "M10 3.4v1.4M4.6 5.1l1 1M15.4 5.1l-1 1M3.2 10.6h1.4M15.4 10.6h1.4",
    sunset: "M10 3.6v1.2M5 5.6l.9.9M15 5.6l-.9.9M3.4 10.8h1.2M15.4 10.8h1.2",
  };

  return (
    <svg viewBox="0 0 20 20" className="h-[15px] w-[15px]" aria-hidden>
      <circle cx="10" cy="10.4" r="3.1" {...stroke} />
      <path d={rays[kind] ?? rays.day} {...stroke} />
      {kind !== "day" && <path d="M2.6 14.4h14.8" {...stroke} />}
    </svg>
  );
}

export default function Backbone() {
  const [shape, setShape] = useState(0);
  const [themeId, setThemeId] = useState("daytime");
  const [open, setOpen] = useState(false);
  const menu = useRef<HTMLDivElement>(null);

  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[2];

  useEffect(() => {
    if (!open) return;
    const away = (e: MouseEvent) => {
      if (!menu.current?.contains(e.target as Node)) setOpen(false);
    };
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", away);
    document.addEventListener("keydown", esc);
    return () => {
      document.removeEventListener("mousedown", away);
      document.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    <section
      className="relative mt-[var(--sec-mt)]"
      style={
        {
          "--bb-rule": theme.dark
            ? "rgba(255,255,255,0.16)"
            : "rgba(10,37,64,0.09)",
          "--bb-head": theme.dark ? "#ffffff" : "#060c17",
          "--bb-muted": theme.dark ? "rgba(255,255,255,0.60)" : "#8a919c",
          "--bb-accent": theme.dark ? "#ffc9c9" : "#fc393a",
        } as React.CSSProperties
      }
    >
      {/* Every wash is mounted; only the active one is opaque, so the change
          of light reads as a dissolve instead of a repaint. */}
      {THEMES.map((t) => (
        <div
          key={t.id}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-[900ms] ease-out"
          style={{ background: t.bg, opacity: t.id === theme.id ? 1 : 0 }}
        />
      ))}

      <div className="relative z-10 px-[var(--hero-indent)]">
        <div className="border-x border-[color:var(--bb-rule)]">
          <h2 className="px-[var(--gutter)] py-[clamp(30px,3.1vw,60px)] text-center text-[length:var(--sec-h2)] font-semibold leading-[1.14] tracking-[-0.03em] text-[color:var(--bb-head)] transition-colors duration-700">
            <span className="block">Simple enough</span>
            <span className="block">for everyone</span>
          </h2>

          <div className="grid grid-cols-2 border-y border-[color:var(--bb-rule)] sm:grid-cols-4">
            {STATS.map((s, i) => {
              const on = shape === i;
              return (
                <button
                  key={s.value}
                  type="button"
                  onClick={() => setShape(i)}
                  aria-pressed={on}
                  className="group relative px-3 py-[clamp(18px,1.75vw,34px)] text-center outline-none"
                >
                  <span
                    className="pointer-events-none absolute inset-x-0 -top-px h-px transition-opacity duration-500"
                    style={{
                      opacity: on ? 1 : 0,
                      background:
                        "linear-gradient(90deg,transparent,var(--bb-accent),transparent)",
                    }}
                  />
                  <span
                    className="pointer-events-none absolute inset-x-0 -bottom-px h-px transition-opacity duration-500"
                    style={{
                      opacity: on ? 1 : 0,
                      background:
                        "linear-gradient(90deg,transparent,var(--bb-accent),transparent)",
                    }}
                  />

                  <span
                    className="block text-[length:var(--stat-num)] font-medium leading-none tracking-[-0.03em] transition-colors duration-500"
                    style={{ color: on ? "var(--bb-head)" : "var(--bb-muted)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="mt-[0.9em] block text-[length:var(--stat-label)] leading-[1.5] transition-colors duration-500"
                    style={{ color: on ? "var(--bb-head)" : "var(--bb-muted)" }}
                  >
                    {s.lines[0]}
                    <br />
                    {s.lines[1]}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative">
            <div
              ref={menu}
              className="absolute right-[clamp(12px,1.6vw,30px)] top-[clamp(12px,1.6vw,30px)] z-40 flex flex-col items-end gap-2"
            >
              <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                aria-label="Change lighting"
                aria-expanded={open}
                className="flex h-8 w-8 items-center justify-center rounded-[7px] bg-white text-[#fc393a] shadow-[0_1px_3px_rgba(20,20,43,0.12),0_6px_16px_rgba(20,20,43,0.10)] transition-colors duration-150 hover:bg-[#fff6f6]"
              >
                <ThemeIcon kind={theme.icon} />
              </button>

              {open && (
                <div className="max-h-[60vh] w-[136px] overflow-y-auto rounded-[9px] bg-white p-1 shadow-[0_2px_6px_rgba(20,20,43,0.10),0_16px_40px_rgba(20,20,43,0.16)]">
                  {THEMES.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => {
                        setThemeId(t.id);
                        setOpen(false);
                      }}
                      className={`flex w-full items-center gap-2 rounded-[6px] px-2 py-2 text-[13px] leading-none transition-colors duration-150 ${
                        t.id === theme.id
                          ? "bg-[#ffe9e9] font-semibold text-[#fc393a]"
                          : "text-navy hover:bg-[#f5f7fb]"
                      }`}
                    >
                      <ThemeIcon kind={t.icon} />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="aspect-[1000/430] w-full">
              <BackboneCanvas shape={shape} ramp={theme.ramp} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
