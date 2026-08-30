"use client";

const LOGOS = [
  {
    id: "grocery",
    node: <span className="font-medium tracking-[-0.02em]">Grocery</span>,
  },
  {
    id: "vegetables",
    node: <span className="font-medium tracking-[-0.02em]">Vegetables</span>,
  },
  {
    id: "bakery",
    node: <span className="font-medium tracking-[-0.02em]">Bakery</span>,
  },
  {
    id: "clothes",
    node: <span className="font-medium tracking-[-0.02em]">Clothes</span>,
  },
  {
    id: "mobile-shop",
    node: <span className="font-medium tracking-[-0.02em]">Mobile shop</span>,
  },
  {
    id: "pharmacy",
    node: <span className="font-medium tracking-[-0.02em]">Pharmacy</span>,
  },
];

/* ── Card artwork ───────────────────────────────────────────────────────── */

function GlobalArt() {
  return (
    <div className="flex h-full items-end justify-center gap-[0.7em] px-[1.2em] pt-[1.4em]">
      <div className="w-[42%] translate-y-[8%] rounded-t-[6px] bg-white p-[0.9em] shadow-[0_2px_10px_rgba(20,20,43,0.10)]">
        <span className="ml-auto block h-[0.6em] w-[0.6em] rounded-full bg-[#e8442e]" />
        <div className="mt-[1.6em] flex gap-[0.25em]">
          {["#1a1f71", "#eb001b", "#f79e1b", "#016fd0"].map((c) => (
            <span key={c} className="h-[0.9em] w-[1.4em] rounded-[2px]" style={{ background: c }} />
          ))}
        </div>
        <div className="mt-[0.7em] h-[1.6em] rounded-[3px] border border-line" />
        <div className="mt-[0.6em] h-[1.6em] rounded-[3px] bg-[#d9f5ee]" />
      </div>

      <div className="w-[52%] translate-y-[4%] rounded-t-[6px] bg-white p-[0.9em] shadow-[0_2px_10px_rgba(20,20,43,0.10)]">
        <p className="flex items-center justify-between text-[0.8em] font-semibold text-navy">
          Payment method
          <span className="h-[0.9em] w-[1.3em] rounded-[2px] bg-[#c8102e]" />
        </p>
        {[
          ["Bacs direct debit", true],
          ["Bank transfer", false],
          ["Card", false],
        ].map(([label, open], i) => (
          <div key={i} className="mt-[0.6em] border-b border-line pb-[0.5em]">
            <p className="flex items-center gap-[0.45em] text-[0.74em] text-navy">
              <span className="h-[0.8em] w-[0.8em] rounded-[2px] bg-[#8a919c]" />
              {label as string}
            </p>
            {open && (
              <div className="mt-[0.5em] space-y-[0.4em] text-[0.66em] text-slate-body">
                <p>Sort code</p>
                <div className="rounded-[3px] border border-line px-[0.5em] py-[0.35em] text-navy">
                  20-00-52
                </div>
                <p>Account number</p>
                <div className="rounded-[3px] border border-line px-[0.5em] py-[0.35em] text-navy">
                  75849855
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function PlatformArt() {
  return (
    <div className="flex h-full items-start justify-center px-[1.4em] pt-[1.4em]">
      <div className="w-[86%] rounded-[6px] bg-white p-[1em] text-[length:var(--cust-small)] shadow-[0_2px_10px_rgba(20,20,43,0.10)]">
        {[
          ["Erica Adler", "$65.34"],
          ["Jazmine Lewis", "$89.94"],
          ["Stephany Santos", "$102.12"],
        ].map(([n, v]) => (
          <div key={n} className="flex justify-between border-b border-line py-[0.5em] text-[0.85em]">
            <span className="text-slate-body">{n}</span>
            <span className="text-navy">{v}</span>
          </div>
        ))}
        <p className="mt-[0.7em] text-[0.7em] uppercase tracking-[0.08em] text-muted">
          View all transactions
        </p>
        <div className="mt-[1em] flex items-center justify-between">
          <span>
            <span className="block text-[0.9em] font-semibold text-navy">Next deposit</span>
            <span className="block text-[0.7em] uppercase tracking-[0.08em] text-muted">
              Sending today
            </span>
          </span>
          <span className="text-[0.9em] font-semibold text-navy">$277.81 ›</span>
        </div>
        <div className="mt-[0.9em] flex items-center gap-[0.6em]">
          <span className="flex h-[1.4em] w-[1.4em] items-center justify-center rounded-full bg-[#1a6bff]">
            <svg viewBox="0 0 12 16" className="h-[0.75em] w-[0.55em]" aria-hidden>
              <path d="M7 1 2 9h3l-1 6 6-8H7z" fill="#fff" />
            </svg>
          </span>
          <span className="flex-1 text-[0.8em] text-slate-body">Want your money now?</span>
          <span className="rounded-[3px] bg-[#1a6bff] px-[0.6em] py-[0.35em] text-[0.62em] font-bold uppercase tracking-[0.05em] text-white">
            Instant deposit
          </span>
        </div>
        <div className="mt-[0.9em] flex items-center justify-between border-t border-line pt-[0.7em] text-[0.8em]">
          <span>
            <span className="block text-navy">Deposit #0132</span>
            <span className="block text-[0.82em] uppercase tracking-[0.08em] text-muted">
              En route
            </span>
          </span>
          <span className="text-navy">$1042.32</span>
        </div>
        <p className="mt-[0.8em] text-[0.7em] uppercase tracking-[0.08em] text-muted">
          View all deposits
        </p>
      </div>
    </div>
  );
}

function FinanceArt() {
  const bars = [46, 52, 44, 58, 62, 56, 70, 66, 78, 84];
  return (
    <div className="flex h-full items-start justify-center px-[1.4em] pt-[1.4em]">
      <div className="w-[92%] rounded-[6px] bg-white p-[1em] text-[length:var(--cust-small)] shadow-[0_2px_10px_rgba(20,20,43,0.10)]">
        <div className="grid grid-cols-[1.5fr_1fr] gap-[1em]">
          <div>
            <p className="flex items-center gap-[0.4em] text-[0.82em] text-slate-body">
              MRR growth
              <span className="rounded-[3px] bg-[#d7f5e3] px-[0.35em] py-[0.12em] text-[0.78em] font-medium text-[#0b6b3a]">
                +22%
              </span>
            </p>
            <div className="mt-[0.7em] flex h-[3em] items-end gap-[0.25em]">
              {bars.map((v, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-[1px]"
                  style={{
                    height: `${v}%`,
                    background: "linear-gradient(180deg,#22d3ee 0%,#4f46e5 100%)",
                  }}
                />
              ))}
            </div>
            <div className="mt-[0.4em] flex justify-between text-[0.72em] text-muted">
              <span>Jan 1</span>
              <span>Today</span>
            </div>
          </div>
          <div>
            <p className="text-[0.82em] text-slate-body">Data as of May 3</p>
            <p className="mt-[0.3em] text-[0.82em] text-slate-body">Active subscribers</p>
            <div className="mt-[0.7em] flex h-[3em] items-end gap-[0.25em]">
              {bars.slice(0, 4).map((v, i) => (
                <span
                  key={i}
                  className="flex-1 rounded-[1px]"
                  style={{
                    height: `${v}%`,
                    background: "linear-gradient(180deg,#22d3ee 0%,#4f46e5 100%)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[1em] grid grid-cols-[1.5fr_1fr] gap-[1em] border-t border-line pt-[0.9em]">
          <div>
            <p className="text-[0.82em] text-slate-body">
              Net volume{" "}
              <span className="rounded-[3px] bg-[#d7f5e3] px-[0.35em] py-[0.12em] text-[0.78em] font-medium text-[#0b6b3a]">
                +8%
              </span>
            </p>
            <p className="mt-[0.25em] text-[1.1em] font-semibold text-navy">$429,777</p>
            <svg viewBox="0 0 200 40" className="mt-[0.5em] h-[2.2em] w-full" aria-hidden>
              <path
                d="M2 34 24 28 46 32 68 20 90 26 112 14 134 20 156 10 178 14 198 6"
                fill="none"
                stroke="#6b5cf0"
                strokeWidth="1.6"
              />
            </svg>
            <div className="flex justify-between text-[0.72em] text-muted">
              <span>Jan 1</span>
              <span>Today</span>
            </div>
          </div>
          <div>
            <p className="text-[0.82em] text-slate-body">New subscribers</p>
            <p className="mt-[0.25em] text-[1.1em] font-semibold text-navy">909</p>
            <svg viewBox="0 0 200 40" className="mt-[0.5em] h-[2.2em] w-full" aria-hidden>
              <path
                d="M2 30 40 24 78 30 116 18 154 22 198 8"
                fill="none"
                stroke="#6b5cf0"
                strokeWidth="1.6"
              />
            </svg>
            <p className="text-[0.72em] text-muted">Jan 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const CARDS = [
  {
    id: "card-global-payments",
    target: "global-payments",
    art: <GlobalArt />,
    title: "Global payments",
    body: "Grocery, vegetables, clothes, electronics and wholesale — from the shop on your street to the big store in town, all in one place.",
  },
  {
    id: "card-platform-payments",
    target: "platform-baas",
    art: <PlatformArt />,
    title: "Platform payments",
    body: "Every type of enterprise, from The weekly shop to Clothes, can use AARUVO to route funds, make payouts, and offer financial services.",
  },
  {
    id: "card-finance-automation",
    target: "revenue-automation",
    art: <FinanceArt />,
    title: "Finance automation",
    body: "Companies like NVIDIA use AARUVO to recover more revenue, minimise development time, and improve efficiency across their existing ERP systems.",
  },
];

export default function EnterpriseCards() {
  const jump = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="bg-white">
      <div className="px-[var(--hero-indent)]">
        <div className="grid gap-[clamp(16px,1.6vw,34px)] py-[clamp(40px,4.4vw,96px)] lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.id}
              id={c.id}
              className="ent-card scroll-mt-[calc(var(--header-h)_+_24px)] flex flex-col overflow-hidden rounded-[10px] bg-white shadow-[0_1px_3px_rgba(20,20,43,0.06),0_14px_38px_rgba(20,20,43,0.09)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.10),0_24px_58px_rgba(20,20,43,0.14)]"
            >
              <div className="h-[clamp(200px,18vw,340px)] shrink-0 overflow-hidden bg-[#f1f4f8]">
                {c.art}
              </div>
              <div className="flex flex-1 flex-col p-[clamp(18px,1.8vw,38px)]">
                <h3 className="text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                  {c.title}
                </h3>
                <p className="mt-[clamp(12px,1.2vw,26px)] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                  {c.body}
                </p>
                <a
                  href={`#${c.target}`}
                  onClick={(e) => jump(e, c.target)}
                  className="group mt-auto flex items-center gap-2 border-t border-line pt-[clamp(14px,1.4vw,30px)] text-[length:var(--cust-body)] font-medium text-brand"
                >
                  Explore
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ffe9e9] transition-transform duration-300 group-hover:translate-y-[3px]">
                    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
                      <path
                        d="M8 3v10m0 0 4-4m-4 4-4-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-3 items-center gap-y-[clamp(24px,2.4vw,50px)] pb-[clamp(40px,4.4vw,96px)] text-[#5b6472] md:grid-cols-6">
          {LOGOS.map((l) => (
            <div key={l.id} className="flex items-center justify-center text-[length:var(--logo-brand)]">
              {l.node}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
