import PFrame from "./PFrame";

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

const ASIDES = [
  {
    icon: "stories",
    title: "Read customer stories",
    body: "See how AARUVO helps businesses of all sizes.",
    cta: "See all stories",
  },
  {
    icon: "become",
    title: "Become a partner",
    body: "Interested in becoming a partner?",
    cta: "Learn more",
  },
];

function Glyph({ kind }: { kind: string }) {
  return (
    <svg viewBox="0 0 40 40" className="h-[2.1em] w-[2.1em]" aria-hidden>
      {kind === "stories" ? (
        <>
          <rect x="7" y="4" width="22" height="30" rx="3" fill="#25c1e0" />
          <rect x="7" y="13" width="22" height="21" fill="#0a6fe8" />
          <g fill="#fff">
            <rect x="12" y="18" width="12" height="2.6" rx="1.3" />
            <rect x="12" y="24" width="8" height="2.6" rx="1.3" />
          </g>
        </>
      ) : (
        <>
          <circle cx="17" cy="17" r="12" fill="#25c1e0" />
          <circle cx="17" cy="13.5" r="4.2" fill="#fff" />
          <path d="M9 27c1.5-4.2 4.4-6 8-6s6.5 1.8 8 6z" fill="#fff" />
          <circle cx="30" cy="11" r="6.2" fill="#3b2ae0" />
          <path d="M27.4 11.2 29.4 13.2 32.8 9.2" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </>
      )}
    </svg>
  );
}

export default function PartnerConnect() {
  return (
    <PFrame className="bg-white">
      <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)] lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="max-w-[18ch] text-[length:var(--connect-sub)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
            Ready to get connected?
          </h2>
          <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[38ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
            Explore the partner directory or contact us to learn more about
            working with partners.
          </p>
          <div className="mt-[clamp(16px,1.6vw,34px)] flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-[clamp(14px,1.2vw,24px)] py-[clamp(9px,0.75vw,15px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              Find a partner
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-[length:var(--cust-small)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              Talk to us
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
          </div>
        </div>

        {ASIDES.map((a) => (
          <div key={a.title} className="text-[length:var(--cust-body)]">
            <Glyph kind={a.icon} />
            <p className="mt-[clamp(12px,1.2vw,26px)] border-l-2 border-brand pl-3 font-semibold text-navy">
              {a.title}
            </p>
            <p className="mt-[0.6em] max-w-[28ch] pl-3 leading-[1.6] text-slate-body">
              {a.body}
            </p>
            <a
              href="#"
              className="group mt-[0.9em] inline-flex items-center gap-1.5 pl-3 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              {a.cta}
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
          </div>
        ))}
      </div>
    </PFrame>
  );
}
