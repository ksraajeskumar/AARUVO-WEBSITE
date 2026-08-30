import Frame from "./Frame";

/* ── Customer wall ──────────────────────────────────────────────────────── */

const MARKS: { id: string; node: React.ReactNode }[] = [
  {
    id: "grocery",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Grocery
      </span>
    ),
  },
  {
    id: "vegetables",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Vegetables
      </span>
    ),
  },
  {
    id: "bakery",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Bakery
      </span>
    ),
  },
  {
    id: "clothes",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Clothes
      </span>
    ),
  },
  {
    id: "mobile-shop",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Mobile shop
      </span>
    ),
  },
  {
    id: "pharmacy",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Pharmacy
      </span>
    ),
  },
  {
    id: "stationery",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Stationery
      </span>
    ),
  },
  {
    id: "wholesale",
    node: (
      <span className="font-semibold tracking-[-0.02em] text-[#3c4a5c]">
        Wholesale
      </span>
    ),
  },
];

/* ── Value columns ──────────────────────────────────────────────────────── */

type Part = string | { link: string };

const COLS: { icon: string; title: string; body: Part[] }[] = [
  {
    icon: "launch",
    title: "Launch in weeks",
    body: [
      "Use AARUVO-hosted or ",
      { link: "embedded" },
      " functionality to go live faster, and avoid the up-front costs and development time usually required for payment facilitation.",
    ],
  },
  {
    icon: "scale",
    title: "Manage payments at scale",
    body: [
      "Use tooling and services from AARUVO, so you don't have to dedicate extra resources to ",
      { link: "fraud prevention" },
      ", margin reporting, tax forms, ",
      { link: "risk management" },
      ", global payment methods, or sign-up compliance.",
    ],
  },
  {
    icon: "global",
    title: "Grow globally",
    body: [
      "Help your users reach more ",
      { link: "customers worldwide" },
      " with local payment methods and the ability to easily register, calculate, collect, and file VAT, sales tax, and GST.",
    ],
  },
  {
    icon: "revenue",
    title: "Build new lines of revenue",
    body: [
      "White label and monetise AARUVO's capabilities by enabling online and ",
      { link: "in-person payments" },
      ", ",
      { link: "Instant Payouts" },
      ", ",
      { link: "Adaptive Pricing" },
      ", ",
      { link: "financing" },
      ", ",
      { link: "financial accounts" },
      " and more on your platform. Maximise revenue with ",
      { link: "growth tools" },
      " in the AARUVO Dashboard.",
    ],
  },
];

function ColIcon({ kind }: { kind: string }) {
  const box = "h-[2.3em] w-[2.3em]";

  if (kind === "launch") {
    return (
      <svg viewBox="0 0 40 40" className={box} aria-hidden>
        <path d="M4 8v24l14-12z" fill="#25c1e0" />
        <path d="M20 8v24l14-12z" fill="#0a6fe8" />
      </svg>
    );
  }
  if (kind === "scale") {
    return (
      <svg viewBox="0 0 40 40" className={box} aria-hidden>
        <rect x="4" y="6" width="32" height="28" rx="4" fill="#25c1e0" />
        <rect x="4" y="14" width="32" height="20" rx="0" fill="#0a6fe8" />
        <g fill="#fff">
          <rect x="10" y="24" width="4" height="6" rx="1" />
          <rect x="18" y="20" width="4" height="10" rx="1" />
          <rect x="26" y="17" width="4" height="13" rx="1" />
          <circle cx="9" cy="10" r="1.6" />
          <circle cx="14" cy="10" r="1.6" />
        </g>
      </svg>
    );
  }
  if (kind === "global") {
    return (
      <svg viewBox="0 0 40 40" className={box} aria-hidden>
        <circle cx="18" cy="18" r="14" fill="#25c1e0" />
        <path d="M18 4c5 5 5 23 0 28M4 18h28" fill="none" stroke="#fff" strokeWidth="1.6" />
        <rect x="16" y="20" width="22" height="15" rx="3" fill="#0a6fe8" />
        <rect x="16" y="24" width="22" height="3.4" fill="#0a3f8f" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className={box} aria-hidden>
      <circle cx="17" cy="17" r="14" fill="#25c1e0" />
      <path d="M17 3c5 5 5 23 0 28M3 17h28" fill="none" stroke="#fff" strokeWidth="1.6" />
      <path d="M22 22h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-5l-4 4v-4h-5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2z" fill="#0a6fe8" />
    </svg>
  );
}

export default function ConnectLogos() {
  return (
    <>
      <Frame className="bg-white">
        <div className="grid grid-cols-2 gap-y-[clamp(28px,3vw,64px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(34px,3.6vw,76px)] text-[length:var(--cust-lead)] md:grid-cols-4">
          {MARKS.map((m) => (
            <div key={m.id} className="flex items-center justify-center px-2">
              {m.node}
            </div>
          ))}
        </div>
      </Frame>

      <Frame className="bg-[#f6f9fc]">
        <div className="grid gap-x-[clamp(20px,2vw,40px)] gap-y-[clamp(32px,3vw,60px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(40px,4.4vw,96px)] md:grid-cols-2 lg:grid-cols-4">
          {COLS.map((c) => (
            <div key={c.title} className="text-[length:var(--cust-body)]">
              <ColIcon kind={c.icon} />
              <p className="mt-[clamp(16px,1.6vw,34px)] border-l-2 border-[#fc393a] pl-3 font-semibold leading-[1.4] text-navy">
                {c.title}
              </p>
              <p className="mt-[clamp(10px,1vw,20px)] leading-[1.62] text-slate-body">
                {c.body.map((part, i) =>
                  typeof part === "string" ? (
                    <span key={i}>{part}</span>
                  ) : (
                    <a
                      key={i}
                      href="#"
                      className="text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
                    >
                      {part.link}
                    </a>
                  )
                )}
              </p>
            </div>
          ))}
        </div>
      </Frame>
    </>
  );
}
