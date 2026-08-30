import PFrame from "./PFrame";

function Tick() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-[0.2em] h-[1.05em] w-[1.05em] shrink-0"
      aria-hidden
    >
      <circle cx="10" cy="10" r="10" fill="#ffe4e4" />
      <path
        d="M5.6 10.4 8.6 13.4 14.4 6.8"
        fill="none"
        stroke="#fc393a"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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

const STAGES = [
  {
    title: "Drive innovation",
    body: "Get expert help building on AARUVO's the money side to transform your business.",
    points: [
      "Monetise payments",
      "Add financial services",
      "Optimise your customer experience",
    ],
  },
  {
    title: "Launch quickly",
    body: "Reduce time to deployment with platforms that have already done the integration work for you.",
    points: [
      "Accept online and in-person payments",
      "Set up recurring invoices or subscriptions",
      "Simplify tax collection and calculation",
    ],
  },
  {
    title: "Expand globally",
    body: "Accelerate your international expansion with global partners or regional experts.",
    points: ["Enter new markets", "Add local payment methods"],
  },
  {
    title: "Streamline operations",
    body: "Integrate AARUVO into your business processes and IT infrastructure.",
    points: ["Unify reporting", "Automate processes", "Simplify workflows"],
  },
];

const SPECIALISATIONS = [
  {
    title: "Products",
    body: "Partners with deep implementation experience across AARUVO products.",
  },
  {
    title: "Industries",
    body: "Partners with proven experience implementing AARUVO solutions for specific industries.",
  },
  {
    title: "Agentic commerce",
    body: "Partners validated to design, implement and advise on agentic commerce solutions that leverage AARUVO's payments infrastructure.",
  },
];

export function PartnerWhy() {
  return (
    <PFrame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(24px,2.6vw,56px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-brand">
          Why partners
        </p>
        <h2 className="mt-[clamp(14px,1.4vw,30px)] max-w-[20ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Accelerate your businesses at every stage
        </h2>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[54ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Lean on our partners to do the heavy lifting (or coding). AARUVO
          partners help organisations of all sizes and can provide whatever
          assistance you might need to use AARUVO throughout your business.
        </p>
      </div>

      <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(32px,3.4vw,72px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(20px,2.4vw,52px)] md:grid-cols-2">
        {STAGES.map((s) => (
          <div key={s.title} className="text-[length:var(--cust-body)]">
            <h3 className="text-[length:var(--connect-card-h)] font-bold tracking-[-0.025em] text-navy">
              {s.title}
            </h3>
            <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[40ch] leading-[1.6] text-slate-body">
              {s.body}
            </p>
            <ul className="mt-[clamp(14px,1.4vw,30px)] space-y-[0.65em]">
              {s.points.map((p) => (
                <li key={p} className="flex gap-2.5 leading-[1.5]">
                  <Tick />
                  <span className="text-slate-body">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PFrame>
  );
}

export function PartnerSpecialisations() {
  return (
    <PFrame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(24px,2.6vw,56px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-brand">
          Partner specialisations
        </p>
        <h2 className="mt-[clamp(14px,1.4vw,30px)] max-w-[24ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Access partners with proven expertise and proficiency
        </h2>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[58ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Find partners who have earned AARUVO specialisations to demonstrate
          their proficiency. Specialisations are the highest designation that
          partners can earn. Partners with a specialisation have completed
          rigorous assessments and demonstrated proven customer success across
          specific products, industries and solutions.
        </p>
      </div>

      <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(32px,3.4vw,72px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(20px,2.4vw,52px)] md:grid-cols-2">
        {SPECIALISATIONS.map((s) => (
          <div key={s.title} className="text-[length:var(--cust-body)]">
            <h3 className="text-[length:var(--connect-card-h)] font-bold tracking-[-0.025em] text-navy">
              {s.title}
            </h3>
            <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[38ch] leading-[1.6] text-slate-body">
              {s.body}
            </p>
            <a
              href="#"
              className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-1.5 font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              View partners
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
