import ScaleWave from "./mocks/ScaleWave";
import SystemsDiagram from "./mocks/SystemsDiagram";

const STATS = [
  { n: "2G", label: "works even on slow internet", c: "#fc393a" },
  { n: "3", label: "taps to reorder your usuals", c: "#ff8a6b" },
  { n: "0", label: "forms to fill before you buy", c: "#ffb08a" },
];

export default function Infrastructure() {
  return (
    <section className="mt-[var(--sec-mt)] bg-[#0d1234]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="border-x border-[#252c63]">
          <div className="border-b border-[#252c63] px-[var(--gutter)] py-[clamp(22px,2vw,40px)]">
            <p className="max-w-[52ch] text-[length:var(--cust-lead)] font-medium leading-[1.42] tracking-[-0.015em]">
              <span className="text-white">
                Works on any phone, in any network.
              </span>{" "}
              <span className="text-[#8f9bd8]">
                Slow internet, old phone, small screen — AARUVO still works.
              </span>
            </p>

            <div className="mt-[clamp(14px,1.3vw,26px)] flex flex-wrap gap-2.5">
              <a
                href="#"
                className="group inline-flex items-center gap-1.5 rounded-[4px] bg-brand px-[clamp(12px,1vw,20px)] py-[clamp(8px,0.62vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
              >
                See how it works
                <span className="transition-transform duration-200 group-hover:translate-x-[2px]">
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
                </span>
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-[4px] border border-[#3a4290] bg-[#161d47] px-[clamp(12px,1vw,20px)] py-[clamp(8px,0.62vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#1e2659]"
              >
                Watch a 2-minute video
              </a>
            </div>
          </div>

          <div className="border-b border-[#252c63] px-[var(--gutter)] py-[clamp(22px,2vw,40px)]">
            <p className="max-w-[54ch] text-[length:var(--cust-lead)] font-medium leading-[1.42] tracking-[-0.015em]">
              <span className="text-white">Everything joins up.</span>{" "}
              <span className="text-[#7fe3c8]">
                Your order, the shop, the delivery and your money all move together, so
                nothing gets lost between them.
              </span>
            </p>

            <div className="mt-[clamp(16px,1.6vw,32px)]">
              <SystemsDiagram />
            </div>
          </div>

          <div className="px-[var(--gutter)] pt-[clamp(22px,2vw,40px)]">
            <p className="max-w-[46ch] text-[length:var(--cust-lead)] font-medium leading-[1.42] tracking-[-0.015em]">
              <span className="text-white">Busy day? No problem.</span>{" "}
              <span className="text-[#8f9bd8]">
                Festival rush, month-end, Sunday evening — orders keep going through
                at the same speed.
              </span>
            </p>
          </div>

          <div className="relative mt-[clamp(10px,1vw,20px)] aspect-[1000/290] w-full overflow-hidden">
            <ScaleWave />
          </div>

          <div className="grid grid-cols-1 gap-y-8 px-[var(--gutter)] pb-[clamp(26px,2.4vw,48px)] sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.n}>
                <p
                  className="text-[length:var(--stat-num)] font-medium leading-none tracking-[-0.03em]"
                  style={{ color: s.c }}
                >
                  {s.n}
                </p>
                <p className="mt-[0.75em] text-[length:var(--cust-small)] text-[#9aa4dd]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
