"use client";

import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type Feature = {
  title: string;
  body: string;
  pills: string[];
  art: React.ReactNode;
};

export type RailItem =
  | { kind: "guide"; tint: string; label: string; text: string }
  | { kind: "story"; logo: React.ReactNode; label: string; text: string }
  | { kind: "stat"; value: string; suffix?: string; color: string; text: string };

function Learn() {
  return (
    <a
      href="#"
      className="group mt-[0.8em] inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
    >
      Learn more
      <svg
        viewBox="0 0 16 16"
        className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]"
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
  );
}

function GuideTile({ tint }: { tint: string }) {
  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden rounded-[6px]"
      style={{ background: tint }}
    >
      <svg viewBox="0 0 320 180" className="h-full w-full" aria-hidden>
        <g fill="none" stroke="rgba(255,255,255,0.34)" strokeWidth="1.2">
          <path d="M0 46h320M0 96h320M0 132h180M0 150h180" />
          <path d="M84 0v180M180 0v180" />
          <path d="M180 96a52 52 0 0 1 52-52" />
          <circle cx="232" cy="52" r="10" />
          <circle cx="232" cy="52" r="18" />
          <circle cx="232" cy="52" r="26" />
        </g>
      </svg>
    </div>
  );
}

function Rail({ items }: { items: RailItem[] }) {
  return (
    <div className="space-y-[clamp(18px,1.5vw,32px)]">
      {items.map((it, i) => (
        <div key={i} className="text-[length:var(--cust-body)]">
          {it.kind === "guide" && (
            <>
              <GuideTile tint={it.tint} />
              <p className="mt-[0.9em] text-[0.9em] text-muted">{it.label}</p>
              <p className="mt-[0.35em] font-medium leading-[1.45] text-navy">
                {it.text}
              </p>
              <Learn />
            </>
          )}

          {it.kind === "story" && (
            <>
              <div className="flex aspect-[16/9] w-full items-center justify-center rounded-[6px] bg-[#f1f4f8] text-[#3c4a5c]">
                {it.logo}
              </div>
              <p className="mt-[0.9em] text-[0.9em] text-muted">{it.label}</p>
              <p className="mt-[0.35em] leading-[1.5] text-navy">{it.text}</p>
              <Learn />
            </>
          )}

          {it.kind === "stat" && (
            <>
              <div className="flex aspect-[16/9] w-full items-center justify-center rounded-[6px] bg-[#f1f4f8]">
                <span
                  className="text-[length:var(--ent-stat)] font-semibold leading-none tracking-[-0.04em]"
                  style={{ color: it.color }}
                >
                  {it.value}
                  {it.suffix && (
                    <span className="align-super text-[0.36em] font-normal">
                      {it.suffix}
                    </span>
                  )}
                </span>
              </div>
              <p className="mt-[0.9em] leading-[1.5] text-navy">{it.text}</p>
              <Learn />
            </>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * A detail section: the feature cards scroll on the left while the resource
 * rail on the right stays pinned for the whole section.
 */
export default function EnterpriseSection({
  id,
  title,
  sub,
  features,
  rail,
}: {
  id: string;
  title: string;
  sub: string;
  features: Feature[];
  rail: RailItem[];
}) {
  // Short sections need taller cards, otherwise the rail is the taller column
  // and the sticky box has nowhere to travel.
  const art =
    features.length < 3
      ? "min-h-[clamp(360px,33vw,680px)]"
      : "min-h-[clamp(300px,27vw,560px)]";

  return (
    <section id={id} className="scroll-mt-[calc(var(--header-h)_+_64px)] bg-white">
      <div className="px-[var(--hero-indent)]">
        <div className="pb-[clamp(20px,2vw,44px)] pt-[clamp(40px,4.4vw,96px)]">
          <h2 className="text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
            {title}
          </h2>
          <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[58ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            {sub}
          </p>
        </div>

        <div className="grid items-start gap-x-[clamp(20px,2vw,44px)] gap-y-[clamp(20px,2vw,44px)] pb-[clamp(40px,4.4vw,96px)] lg:grid-cols-[minmax(0,1.72fr)_minmax(0,0.66fr)]">
          <div className="space-y-[clamp(16px,1.6vw,34px)]">
            {features.map((f) => (
              <motion.article
                key={f.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="grid overflow-hidden rounded-[10px] bg-[#f6f9fc] md:grid-cols-2"
              >
                <div className="flex flex-col justify-center p-[clamp(20px,2.2vw,46px)]">
                  <h3 className="max-w-[18ch] text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                    {f.title}
                  </h3>
                  <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[40ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                    {f.body}
                  </p>
                  <div className="mt-[clamp(14px,1.4vw,30px)] flex flex-wrap gap-2">
                    {f.pills.map((p) => (
                      <a
                        key={p}
                        href="#"
                        className="rounded-[5px] bg-[#ffe9e9] px-[0.85em] py-[0.55em] text-[length:var(--cust-body)] font-medium leading-none text-brand transition-colors duration-200 hover:bg-[#ffdcdc]"
                      >
                        {p}
                      </a>
                    ))}
                  </div>
                </div>

                <div
                  className={`relative overflow-hidden text-[length:var(--cust-body)] ${art}`}
                >
                  {f.art}
                </div>
              </motion.article>
            ))}
          </div>

          {/* The column stretches to the row height and the inner box pins
              inside it — a sticky grid item has no travel of its own. */}
          <div className="h-full">
            <div className="lg:sticky lg:top-[calc(var(--header-h)_+_92px)]">
              <Rail items={rail} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
