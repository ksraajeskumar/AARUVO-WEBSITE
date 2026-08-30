import ArrowLink from "./ArrowLink";
import ShopPanel from "./mocks/ShopPanel";

const COLS = [
  {
    icon: "speed",
    lead: "Start selling this week.",
    body: "No forms to fill in, no software to learn. Talk to the app and your shop is ready.",
  },
  {
    icon: "growth",
    lead: "Sell more without spending more.",
    body: "We tell you what people nearby are looking for, so you stock what actually sells.",
  },
  {
    icon: "risk",
    lead: "Money reaches your bank.",
    body: "Every order is paid online before it comes to you. No cash handling, no chasing payments.",
  },
];

function Glyph({ kind }: { kind: string }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <span className="flex h-[1.9em] w-[1.9em] items-center justify-center rounded-[6px] bg-[#ffe9e9] text-brand">
      <svg viewBox="0 0 20 20" className="h-[0.95em] w-[0.95em]" aria-hidden>
        {kind === "speed" && (
          <g {...s}>
            <path d="M3 10 7.4 5.6 7.4 14.4z" />
            <path d="M9.6 10 14 5.6 14 14.4z" />
            <path d="M16.8 5.6v8.8" />
          </g>
        )}
        {kind === "growth" && (
          <g {...s}>
            <path d="M3 14.4 7.6 9.6l3 2.6L17 5.4" />
            <path d="M12.6 5.4H17v4.4" />
          </g>
        )}
        {kind === "risk" && (
          <g {...s}>
            <path d="M10 2.8 16 5v4.6c0 4-2.6 6.4-6 7.6-3.4-1.2-6-3.6-6-7.6V5z" />
            <path d="M10 7v4" />
          </g>
        )}
      </svg>
    </span>
  );
}

export default function Connect() {
  return (
    <section className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <ShopPanel />

        <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-9 pt-[clamp(24px,2.3vw,46px)] lg:grid-cols-3">
          {COLS.map((c) => (
            <div key={c.lead} className="text-[length:var(--cust-body)]">
              <Glyph kind={c.icon} />
              <p className="mt-[clamp(12px,1.1vw,22px)] leading-[1.55]">
                <span className="font-semibold text-navy">{c.lead}</span>{" "}
                <span className="text-slate-body">{c.body}</span>
              </p>
              <div className="mt-[clamp(10px,0.9vw,18px)]">
                <ArrowLink>Learn more</ArrowLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
