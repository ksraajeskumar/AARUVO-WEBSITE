import PFrame from "./PFrame";

type Chip = { bg: string; node: React.ReactNode; at: string; s: string };

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
      <path
        d="M5.5 2.5 11 8l-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const OPTIONS: {
  id: string;
  title: string;
  body: string;
  cta: string;
  chips: Chip[];
}[] = [
  {
    id: "services",
    title: "Services",
    body: "Service providers that can help you design, implement, deploy, or manage your AARUVO solution.",
    cta: "Explore services partners",
    chips: [
      {
        bg: "#a100ff",
        at: "left-[8%] top-[6%]",
        s: "w-[30%]",
        node: (
          <span className="flex items-center gap-[0.05em] text-[0.19em] font-semibold text-white">
            Provision
          </span>
        ),
      },
      {
        bg: "#ffffff",
        at: "left-[27%] top-[44%]",
        s: "w-[27%]",
        node: (
          <span className="text-[0.17em] font-medium tracking-[0.08em] text-[#2d2d2d]">
            ✦ Fish & meat
          </span>
        ),
      },
      {
        bg: "#1f6bff",
        at: "left-[52%] top-[14%]",
        s: "w-[29%]",
        node: <span className="text-[0.2em] font-semibold text-white">Bakery</span>,
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS platform",
    body: "Partners who embed AARUVO solutions within their platforms to offer payments and financial services to businesses.",
    cta: "Explore SaaS platform partners",
    chips: [
      {
        bg: "#0b0b0b",
        at: "left-[10%] top-[40%]",
        s: "w-[28%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[46%] w-[46%]" aria-hidden>
            <path d="M8 34 26 6h7v28z" fill="none" stroke="#fff" strokeWidth="2.4" />
            <path d="M33 6 8 34" stroke="#fff" strokeWidth="2.4" />
          </svg>
        ),
      },
      {
        bg: "#0b0b0b",
        at: "left-[40%] top-[4%]",
        s: "w-[27%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[46%] w-[46%]" aria-hidden>
            <path d="M12 8h18v7H19v6h9v7H19v10h-7z" fill="#2fd07a" />
          </svg>
        ),
      },
      {
        bg: "#ff7a59",
        at: "left-[66%] top-[36%]",
        s: "w-[28%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[48%] w-[48%]" aria-hidden>
            <g fill="none" stroke="#fff" strokeWidth="3">
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="30" r="5" />
              <circle cx="29" cy="21" r="7" />
              <path d="M16 14l7 4M16 28l7-4M29 8V4" />
            </g>
          </svg>
        ),
      },
    ],
  },
  {
    id: "apps",
    title: "Apps",
    body: "Partners who build deep integrations to create better experiences for mutual customers.",
    cta: "Explore the App Marketplace",
    chips: [
      {
        bg: "#13b5ea",
        at: "left-[8%] top-[8%]",
        s: "w-[29%]",
        node: <span className="text-[0.21em] font-semibold text-white">Provision</span>,
      },
      {
        bg: "#1a5cf0",
        at: "left-[27%] top-[46%]",
        s: "w-[27%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[46%] w-[46%]" aria-hidden>
            <path d="M20 9 32 31H8z" fill="#fff" />
          </svg>
        ),
      },
      {
        bg: "#ffffff",
        at: "left-[54%] top-[16%]",
        s: "w-[28%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[44%] w-[44%]" aria-hidden>
            <path d="M20 8 32 20 20 32 8 20z" fill="#fc393a" />
          </svg>
        ),
      },
    ],
  },
  {
    id: "technology",
    title: "Technology",
    body: "Software, or cloud providers with prebuilt solutions that integrate with AARUVO.",
    cta: "Explore technology partners",
    chips: [
      {
        bg: "#232f3e",
        at: "left-[40%] top-[4%]",
        s: "w-[28%]",
        node: (
          <span className="relative flex flex-col items-center leading-none">
            <span className="text-[0.2em] font-bold text-white">Wholesale</span>
            <svg viewBox="0 0 100 16" className="mt-[0.04em] h-[0.1em] w-[0.5em]" preserveAspectRatio="none" aria-hidden>
              <path d="M2 4c22 12 62 14 92 1" fill="none" stroke="#ff9900" strokeWidth="5" strokeLinecap="round" />
            </svg>
          </span>
        ),
      },
      {
        bg: "#ffffff",
        at: "left-[16%] top-[42%]",
        s: "w-[27%]",
        node: (
          <svg viewBox="0 0 40 40" className="h-[46%] w-[46%]" aria-hidden>
            <path d="M20 7 33 33h-8l-5-11-5 11H7z" fill="#e8442e" />
          </svg>
        ),
      },
      {
        bg: "#00a1e0",
        at: "left-[64%] top-[38%]",
        s: "w-[28%]",
        node: (
          <span className="relative flex items-center justify-center">
            <svg viewBox="0 0 74 44" className="h-[0.44em] w-[0.72em]" aria-hidden>
              <path
                d="M22 12a11 11 0 0 1 18-3 13 13 0 0 1 22 6 11 11 0 0 1-2 21H20A13 13 0 0 1 8 22a11 11 0 0 1 14-10z"
                fill="#fff"
              />
            </svg>
            <span className="absolute text-[0.12em] font-semibold text-[#00a1e0]">
              Wholesale
            </span>
          </span>
        ),
      },
    ],
  },
];

export default function PartnerOptions() {
  return (
    <PFrame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(20px,2.2vw,46px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-brand">
          Partner options
        </p>
        <h2 className="mt-[clamp(14px,1.4vw,30px)] max-w-[22ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Find a partner with the solution or services you need
        </h2>
      </div>

      <div className="grid gap-[clamp(16px,1.6vw,34px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] md:grid-cols-2">
        {OPTIONS.map((o) => (
          <article
            key={o.id}
            className="overflow-hidden rounded-[8px] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.06),0_14px_38px_rgba(20,20,43,0.09)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_24px_58px_rgba(20,20,43,0.14)]"
          >
            {/* logo shelf: the chips sit half-off the bottom edge, as on the
                reference, so the card below appears to overlap them */}
            <div className="orbit-frame relative aspect-[2.6/1] w-full overflow-hidden bg-[#eef2f7]">
              {o.chips.map((c, i) => (
                <span
                  key={i}
                  className={`absolute ${c.at} ${c.s} flex aspect-square items-center justify-center rounded-full text-[10cqw] shadow-[0_4px_14px_rgba(20,20,43,0.12)]`}
                  style={{ background: c.bg }}
                >
                  {c.node}
                </span>
              ))}
            </div>

            <div className="p-[clamp(18px,1.9vw,40px)] text-[length:var(--cust-body)]">
              <h3 className="text-[length:var(--connect-card-h)] font-bold tracking-[-0.025em] text-navy">
                {o.title}
              </h3>
              <p className="mt-[clamp(10px,1vw,22px)] max-w-[42ch] leading-[1.6] text-slate-body">
                {o.body}
              </p>
              <a
                href="#"
                className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-1.5 rounded-full bg-brand px-[clamp(12px,1.05vw,21px)] py-[clamp(8px,0.68vw,14px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                {o.cta}
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </PFrame>
  );
}
