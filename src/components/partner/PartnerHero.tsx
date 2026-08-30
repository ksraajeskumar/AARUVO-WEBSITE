import PartnerOrbits from "./PartnerOrbits";
import PartnerRibbon from "./PartnerRibbon";

const SUBNAV = [
  { label: "How selling works", active: true },
  { label: "Join AARUVO", active: false },
  { label: "Shop login", active: false },
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

export default function PartnerHero() {
  return (
    <section className="relative overflow-hidden bg-[#f6f9fc] pt-[var(--header-h)]">
      <PartnerRibbon />

      <div className="relative z-10 px-[var(--hero-indent)]">
        <div className="flex flex-wrap items-center gap-x-[clamp(18px,2.2vw,44px)] gap-y-3 py-[clamp(14px,1.3vw,26px)] text-[length:var(--cust-body)] font-medium">
          <a href="#" className="text-brand transition-colors duration-200 hover:text-brand-hover">
            For shop owners
          </a>
          <nav className="ml-auto flex flex-wrap items-center gap-x-[clamp(16px,1.9vw,38px)] gap-y-2">
            {SUBNAV.map((s) => (
              <a
                key={s.label}
                href="#"
                className={
                  s.active
                    ? "text-navy"
                    : "text-brand transition-colors duration-200 hover:text-brand-hover"
                }
              >
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="relative z-10 px-[var(--hero-indent)]">
        <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(32px,4vw,80px)] pb-[clamp(70px,11vw,230px)] pt-[clamp(12px,1.4vw,30px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
          <div>
            <h1 className="max-w-[13ch] text-[length:var(--ent-h1)] font-bold leading-[1.1] tracking-[-0.035em] text-navy">
              Sell more, from the shop you already have
            </h1>

            <p className="mt-[clamp(20px,2vw,44px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
              You do not need a computer or a website. Tell AARUVO your items
              by talking, and people living near you can order from your shop.
              The money comes straight to your bank.
            </p>

            <div className="mt-[clamp(20px,2vw,44px)] flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href="#"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-[clamp(16px,1.35vw,27px)] py-[clamp(11px,0.95vw,19px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                See how it works
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
              >
                Talk to us
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
            </div>
          </div>

          {/* The cluster runs past the right gutter, as on the reference. */}
          <div className="relative -mr-[6%] w-[104%] max-w-none justify-self-end">
            <PartnerOrbits />
          </div>
        </div>
      </div>
    </section>
  );
}
