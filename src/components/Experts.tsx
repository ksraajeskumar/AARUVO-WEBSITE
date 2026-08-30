import ArrowLink from "./ArrowLink";

const COLS = [
  {
    icon: "services",
    lead: "Talk to a person.",
    body: "Something went wrong with an order? Call or message us and a real person will sort it out.",
    cta: "Get help",
  },
  {
    icon: "partners",
    lead: "Help in your language.",
    body: "Speak in Tamil, English or a mix of both. We can also read the whole screen out loud for you.",
    cta: "See languages",
  },
  {
    icon: "plans",
    lead: "We fix it, not just refund it.",
    body: "If a shop runs out of an item, we look for it in another shop nearby and ask you before changing anything.",
    cta: "How it works",
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
        {kind === "services" && (
          <g {...s}>
            <rect x="3" y="3" width="6" height="6" rx="1.4" />
            <rect x="3" y="11" width="6" height="6" rx="1.4" />
            <path d="M14 3v6M11 6h6M11 14h6" />
          </g>
        )}
        {kind === "partners" && (
          <g {...s}>
            <circle cx="7.4" cy="7" r="2.6" />
            <path d="M2.8 16c0-2.7 2.1-4.4 4.6-4.4s4.6 1.7 4.6 4.4" />
            <path d="M13.4 5.2a2.5 2.5 0 0 1 0 4.6M14.6 16c0-2.2-.9-3.6-2.2-4.4" />
          </g>
        )}
        {kind === "plans" && (
          <g {...s}>
            <rect x="2.6" y="3.4" width="14.8" height="11" rx="2" />
            <path d="M6.6 17.2 9.4 14.4" />
            <path d="M8.2 7.4a1.9 1.9 0 1 1 2.6 1.8v1.2" />
            <path d="M10 12.2h.01" />
          </g>
        )}
      </svg>
    </span>
  );
}

export default function Experts() {
  return (
    <section className="mt-[var(--sec-mt)]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="border-t border-line pt-[clamp(22px,2vw,40px)]">
          <h3 className="text-[length:var(--cust-lead)] font-medium leading-[1.3] tracking-[-0.015em] text-navy">
            Real people are here when you need help
          </h3>

          <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-9 pb-[clamp(26px,2.4vw,48px)] pt-[clamp(20px,1.9vw,38px)] lg:grid-cols-3">
            {COLS.map((c) => (
              <div key={c.cta} className="text-[length:var(--cust-body)]">
                <Glyph kind={c.icon} />
                <p className="mt-[clamp(12px,1.1vw,22px)] leading-[1.55]">
                  <span className="font-semibold text-navy">{c.lead}</span>{" "}
                  <span className="text-slate-body">{c.body}</span>
                </p>
                <div className="mt-[clamp(10px,0.9vw,18px)]">
                  <ArrowLink>{c.cta}</ArrowLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
