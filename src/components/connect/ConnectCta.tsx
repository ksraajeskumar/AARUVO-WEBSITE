import Link from "next/link";

import Frame from "./Frame";

const ASIDES = [
  {
    icon: "doc",
    title: "New to AARUVO?",
    body: "See how ordering works, from the first word you say to the delivery at your door.",
    cta: "See how it works",
    href: "/what-we-do",
  },
  {
    icon: "tag",
    title: "What does it cost?",
    body: "You see the price of every item and every charge before you pay.",
    cta: "How pricing works",
    href: "/what-we-do",
  },
];

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

function Glyph({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 40 40" className="h-[2.2em] w-[2.2em]" aria-hidden>
      {kind === "doc" ? (
        <>
          <rect x="8" y="4" width="24" height="32" rx="3" fill="#ff8f8f" />
          <rect x="8" y="14" width="24" height="22" fill="#fc393a" />
          <g fill="#fff">
            <rect x="13" y="19" width="14" height="2.6" rx="1.3" />
            <rect x="13" y="25" width="9" height="2.6" rx="1.3" />
          </g>
        </>
      ) : (
        <>
          <path d="M18 4h14a4 4 0 0 1 4 4v14L20 38 4 22z" fill="#ff8f8f" />
          <path d="M18 4h14a4 4 0 0 1 4 4v14L26 32 12 18z" fill="#fc393a" />
          <circle cx="28" cy="12" r="2.6" fill="#fff" />
        </>
      )}
    </svg>
  );
}

export default function ConnectCta() {
  return (
    <Frame className="bg-white">
      <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)] lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <h3 className="max-w-[16ch] text-[length:var(--connect-sub)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
            Ready to try it? It takes one message
          </h3>
          <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[38ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            Open AARUVO, say what you need, and see how far you get. If you get stuck, we are one message away.
          </p>
          <div className="mt-[clamp(16px,1.6vw,34px)] flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-[#fc393a] px-[clamp(16px,1.35vw,27px)] py-[clamp(10px,0.85vw,17px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#e02a2b]"
            >
              Start now
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
            >
              Talk to us
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </Link>
          </div>
        </div>

        {ASIDES.map((a) => (
          <div key={a.title} className="text-[length:var(--cust-body)]">
            <Glyph kind={a.icon} />
            <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[24ch] border-l-2 border-[#fc393a] pl-3 font-semibold leading-[1.4] text-navy">
              {a.title}
            </p>
            <p className="mt-[0.7em] max-w-[30ch] pl-3 leading-[1.6] text-slate-body">
              {a.body}
            </p>
            <Link
              href={a.href}
              className="group mt-[0.9em] inline-flex items-center gap-1.5 pl-3 font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
            >
              {a.cta}
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </Link>
          </div>
        ))}
      </div>

    </Frame>
  );
}
