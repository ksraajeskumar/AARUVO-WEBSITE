import Frame from "./Frame";

const FEATURES = [
  "Manage and activate accounts",
  "Issue refunds",
  "Generate tax forms",
  "Track and reconcile payments",
  "Build custom reports",
  "Send funds",
  "Understand payments costs",
  "Set pricing with no-code tools",
];

const NAV = ["Home", "Payments", "Balances", "Customers", "Connect", "More +"];

const TOP = [
  ["AARUVO Store Salon", "₹1,902.00"],
  ["Margie's Chicago", "₹1,801"],
  ["Jenny's Haircuts", "₹1,644"],
  ["Muse Salon", "₹1,318"],
];

function Tick() {
  return (
    <svg viewBox="0 0 20 20" className="mt-[0.2em] h-[1.05em] w-[1.05em] shrink-0" aria-hidden>
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

/** The platform's own Connect dashboard, as the reference screenshots it. */
function BrushDashboard() {
  return (
    <div className="@container overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.07),0_20px_50px_rgba(20,20,43,0.10)]">
      <div className="flex items-center gap-[1.6cqw] border-b border-line px-[1.6cqw] py-[1.1cqw]">
        <span className="flex items-center gap-[0.6cqw] text-[1.05cqw] font-semibold text-navy">
          <span className="flex h-[1.9cqw] w-[1.9cqw] items-center justify-center rounded-full bg-[#1c3b5a] text-[0.9cqw] text-white">
            B
          </span>
          AARUVO Store
        </span>
        <span className="mx-auto w-[26%] rounded-[4px] border border-line px-[1cqw] py-[0.5cqw] text-[0.85cqw] text-muted">
          Search
        </span>
        <span className="flex items-center gap-[1.4cqw] text-[0.9cqw] text-slate-body">
          Settings <span>Sandboxes</span>
        </span>
      </div>

      <div className="flex">
        <aside className="w-[15%] shrink-0 space-y-[0.9cqw] px-[1.4cqw] py-[1.4cqw] text-[0.9cqw]">
          {NAV.map((n) => (
            <p
              key={n}
              className={
                n === "Connect"
                  ? "border-l-2 border-brand pl-[0.6cqw] font-medium text-brand"
                  : "pl-[0.6cqw] text-slate-body"
              }
            >
              {n}
            </p>
          ))}
        </aside>

        <main className="min-w-0 flex-1 px-[1.6cqw] py-[1.4cqw]">
          <div className="flex items-center justify-between">
            <p className="text-[1.55cqw] font-semibold tracking-[-0.02em] text-navy">
              Connect
            </p>
            <span className="rounded-[4px] bg-brand px-[1cqw] py-[0.5cqw] text-[0.85cqw] font-medium leading-none text-white">
              Create account ⌄
            </span>
          </div>

          <div className="mt-[1.1cqw] flex gap-[1.6cqw] border-b border-line text-[0.9cqw]">
            {["Overview", "Connected accounts", "Accounts to review"].map((t) => (
              <span
                key={t}
                className={
                  t === "Overview"
                    ? "border-b-2 border-brand pb-[0.6cqw] font-medium text-brand"
                    : "pb-[0.6cqw] text-slate-body"
                }
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-[1.4cqw] grid grid-cols-[1.6fr_1fr] gap-[1.6cqw]">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-[1cqw] font-semibold text-navy">Gross volume</p>
                <span className="rounded-[4px] border border-line px-[0.8cqw] py-[0.4cqw] text-[0.8cqw] text-slate-body">
                  Last 6 months ⌄
                </span>
              </div>
              <p className="mt-[0.5cqw] text-[1.1cqw] text-navy">
                ₹12,382.22{" "}
                <span className="text-[0.85cqw] text-muted">
                  ₹10,205.13 previous period
                </span>
              </p>

              <div className="mt-[1cqw]">
                <p className="text-[0.75cqw] text-muted">12k</p>
                <svg viewBox="0 0 360 90" className="mt-[0.3cqw] h-[9cqw] w-full" aria-hidden>
                  <path
                    d="M4 80 60 62 116 34 172 52 228 26 284 22 340 12"
                    fill="none"
                    stroke="#7a5cf5"
                    strokeWidth="2"
                  />
                  <path
                    d="M4 84 60 72 116 48 172 66 228 30 284 30 340 30"
                    fill="none"
                    stroke="#25a3e0"
                    strokeWidth="2"
                  />
                </svg>
                <div className="flex justify-between text-[0.75cqw] text-muted">
                  <span>Today</span>
                  <span>12 March</span>
                </div>
                <p className="mt-[0.6cqw] text-[0.75cqw] text-muted">
                  Updated today 07:50
                </p>
              </div>

              <div className="mt-[1.4cqw] flex items-center justify-between text-[0.9cqw]">
                <p className="font-semibold text-navy">Top grossing accounts</p>
                <span className="text-[0.8cqw] text-muted">All time data</span>
              </div>
              {TOP.map(([n, v]) => (
                <div
                  key={n}
                  className="flex items-center justify-between border-b border-line py-[0.75cqw] text-[0.9cqw]"
                >
                  <span className="text-slate-body">{n}</span>
                  <span className="text-navy">{v}</span>
                </div>
              ))}
            </div>

            <div className="space-y-[1.4cqw]">
              <div>
                <p className="text-[1cqw] font-semibold text-navy">Tasks</p>
                <div className="mt-[0.7cqw] rounded-[6px] border border-line p-[1cqw]">
                  <span className="flex gap-[0.5cqw] text-[0.75cqw]">
                    <span className="rounded-[3px] bg-[#f1f4f8] px-[0.6cqw] py-[0.3cqw] text-slate-body">
                      Due 1 June
                    </span>
                    <span className="rounded-[3px] bg-[#f1f4f8] px-[0.6cqw] py-[0.3cqw] text-slate-body">
                      Complete
                    </span>
                  </span>
                  <p className="mt-[0.7cqw] text-[0.9cqw] font-medium text-navy">
                    Handle verification responses
                  </p>
                  <p className="mt-[0.25cqw] text-[0.8cqw] text-slate-body">
                    US verification requirements
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[1cqw] font-semibold text-navy">Resources</p>
                <div className="mt-[0.7cqw] rounded-[6px] border border-line p-[1cqw]">
                  <p className="text-[0.9cqw] font-medium text-navy">
                    Risk review process
                  </p>
                  <p className="mt-[0.35cqw] text-[0.8cqw] leading-[1.45] text-slate-body">
                    See how combining automation with manual review can help manage
                    risk.
                  </p>
                  <p className="mt-[0.6cqw] text-[0.8cqw] font-medium text-brand">
                    Learn more →
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default function ConnectScale() {
  return (
    <Frame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pt-[clamp(44px,4.6vw,100px)]">
        <h3 className="text-[length:var(--connect-sub)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
          Manage your platform at scale
        </h3>
        <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[62ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Managing embedded payments typically requires a team of engineers and
          analysts, but AARUVO helps you easily track and reconcile payments. In
          the US, Connect provides gross earnings tracking and automated 1099 form
          generation and delivery.
        </p>

        <ul className="mt-[clamp(20px,2vw,44px)] grid gap-x-[clamp(20px,2vw,44px)] gap-y-[0.8em] text-[length:var(--cust-body)] sm:grid-cols-2">
          {FEATURES.map((f) => (
            <li key={f} className="flex gap-2.5 leading-[1.5]">
              <Tick />
              <span className="text-slate-body">{f}</span>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="group mt-[clamp(16px,1.6vw,34px)] inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
        >
          See all features
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
      </div>

      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(24px,2.6vw,56px)]">
        <BrushDashboard />
      </div>
    </Frame>
  );
}
