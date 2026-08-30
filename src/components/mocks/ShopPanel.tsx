const NAV = ["Home", "Payments", "Reporting", "Settings"];

const ROWS = [
  { amt: "₹532", status: "Paid", method: "UPI", desc: "Rice, oil and 4 more" },
  { amt: "₹186", status: "Packing", method: "Google Pay", desc: "Milk, bread, eggs" },
  { amt: "₹2,340", status: "Paid", method: "Net banking", desc: "Monthly provisions" },
];

/** The four embedded components the reference calls out, with their code. */
const NOTES = [
  {
    title: "Payouts",
    body: "Show total balance and allow a connected account to initiate payouts.",
    call: "payouts",
    at: "left-[1.5%] top-[36%] w-[34%]",
  },
  {
    title: "Payments",
    body: "Show a list of payments with export, refund, and dispute capabilities.",
    call: "payments",
    at: "left-[4%] top-[63%] w-[34%]",
  },
  {
    title: "Notification banner",
    body: "Show a banner listing required actions for risk and sign-up.",
    call: "notification-banner",
    at: "right-[5%] top-[9%] w-[33%]",
  },
  {
    title: "Capital financing promotion",
    body: "Show a connected account's financing offer and allow them to apply.",
    call: "capital-financing-promotion",
    at: "right-[1.5%] top-[52%] w-[35%]",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-[0.35cqw] bg-[#fce4ee] px-[1cqw] py-[0.5cqw] text-[0.9cqw] font-medium leading-none text-[#a8195e]">
      {children}
    </span>
  );
}

export default function ShopPanel() {
  return (
    <div className="@container relative w-full overflow-hidden rounded-[6px]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(96deg,#f472b6 0%,#c026d3 12%,#7c1d6f 30%,#5b1247 42%,#7a2a2a 58%,#ea8c1e 76%,#ffc933 100%)",
        }}
      />

      {/* dashboard */}
      <div className="relative mx-[8.5%] my-[3.4cqw] overflow-hidden rounded-[0.6cqw] bg-white shadow-[0_2cqw_5cqw_rgba(40,10,40,0.28)]">
        <div className="relative flex items-center bg-[#f4f6f8] px-[1cqw] py-[0.6cqw]">
          <div className="flex gap-[0.3cqw]">
            {[0, 1, 2].map((i) => (
              <span key={i} className="h-[0.5cqw] w-[0.5cqw] rounded-full bg-[#d3d8de]" />
            ))}
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 rounded-full bg-white px-[2cqw] py-[0.28cqw] text-[0.72cqw] leading-none text-slate-body">
            dashboard.aaruvo-store.com
          </div>
        </div>

        <div className="flex">
          <aside className="w-[15%] shrink-0 bg-[#5f0f3d] px-[1cqw] py-[1.1cqw]">
            <div className="flex items-center gap-[0.5cqw]">
              <svg viewBox="0 0 24 24" className="h-[1.3cqw] w-[1.3cqw]" aria-hidden>
                <g fill="none" stroke="#f9a8d4" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M12 20c-4 0-7-2.6-7-5.6 2.6 0 7 1.6 7 5.6z" />
                  <path d="M12 20c4 0 7-2.6 7-5.6-2.6 0-7 1.6-7 5.6z" />
                  <path d="M12 19c-2.4-2-3.6-4.2-3.6-6.4S9.6 8 12 6c2.4 2 3.6 4.4 3.6 6.6S14.4 17 12 19z" />
                </g>
              </svg>
              <span className="text-[0.92cqw] font-medium text-white">AARUVO Store</span>
            </div>
            <nav className="mt-[1.4cqw] space-y-[0.62cqw] text-[0.78cqw]">
              {NAV.map((n) => (
                <p
                  key={n}
                  className={n === "Payments" ? "text-[#f9a8d4]" : "text-[#e3bcd2]"}
                >
                  {n}
                </p>
              ))}
            </nav>
          </aside>

          <main className="min-w-0 flex-1 px-[1.5cqw] pb-[1.6cqw] pt-[1.1cqw]">
            <p className="text-[1.02cqw] font-semibold tracking-[-0.01em] text-navy">
              Hello, AARUVO Store
            </p>

            <div className="mt-[0.9cqw] flex items-center justify-between gap-[1cqw] rounded-[0.35cqw] border border-[#f6dbe6] bg-[#fdf3f7] px-[0.9cqw] py-[0.7cqw]">
              <div>
                <p className="text-[0.75cqw] font-medium text-[#a8195e]">
                  ⚑ Action required
                </p>
                <p className="mt-[0.25cqw] text-[0.7cqw] leading-[1.4] text-slate-body">
                  To make sure your business is supportable, we need to collect
                  additional information.
                </p>
              </div>
              <Pill>Add information</Pill>
            </div>

            <div className="mt-[0.9cqw] grid grid-cols-[1fr_1.55fr] gap-[0.9cqw]">
              <div className="rounded-[0.35cqw] border border-line px-[0.9cqw] py-[0.7cqw]">
                <p className="text-[0.68cqw] text-muted">Total balance</p>
                <p className="mt-[0.2cqw] text-[1.15cqw] font-semibold tracking-[-0.02em] text-navy">
                  ₹77,953.20
                </p>
                <p className="mt-[0.3cqw] text-[0.68cqw] text-slate-body">
                  Available to pay out{" "}
                  <span className="text-navy">₹32,471.00</span>
                </p>
                <div className="mt-[0.7cqw]">
                  <Pill>Pay out</Pill>
                </div>
              </div>

              <div className="rounded-[0.35cqw] border border-line px-[0.9cqw] py-[0.7cqw]">
                <p className="text-[0.68cqw] text-muted">Expires on 12 Jan</p>
                <p className="mt-[0.25cqw] text-[0.8cqw] font-medium leading-[1.35] text-navy">
                  You&apos;re pre-qualified for up to ₹3,515,000 in financing
                </p>
                <p className="mt-[0.3cqw] text-[0.68cqw] leading-[1.4] text-slate-body">
                  If approved, you&apos;ll receive funds in as little as one to two
                  business days.
                </p>
                <div className="mt-[0.7cqw]">
                  <Pill>Start application</Pill>
                </div>
              </div>
            </div>

            <p className="mt-[1cqw] text-[0.9cqw] font-semibold text-navy">
              Payments
            </p>
            <table className="mt-[0.6cqw] w-full table-fixed border-collapse text-left">
              <thead>
                <tr className="text-[0.62cqw] text-muted">
                  <th className="w-[20%] pb-[0.45cqw] font-normal">Amount</th>
                  <th className="w-[22%] pb-[0.45cqw] font-normal">Status</th>
                  <th className="w-[30%] pb-[0.45cqw] font-normal">
                    Paid by
                  </th>
                  <th className="w-[28%] pb-[0.45cqw] font-normal">Description</th>
                </tr>
              </thead>
              <tbody className="text-[0.68cqw]">
                {ROWS.map((r, i) => (
                  <tr key={i} className="border-t border-[#eef1f4]">
                    <td className="py-[0.5cqw] text-navy">{r.amt}</td>
                    <td className="py-[0.5cqw]">
                      <span
                        className={`inline-flex rounded-[0.25cqw] px-[0.5cqw] py-[0.18cqw] text-[0.6cqw] font-medium leading-[1.5] ${
                          r.status === "Paid"
                            ? "bg-[#d7f5e3] text-[#0b6b3a]"
                            : "bg-[#fde8cf] text-[#8a4b06]"
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="py-[0.5cqw] text-slate-body">{r.method}</td>
                    <td className="py-[0.5cqw] text-slate-body">{r.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
        </div>
      </div>

      {/* callouts */}
      {NOTES.map((n) => (
        <div
          key={n.title}
          className={`absolute ${n.at} rounded-[0.35cqw] bg-white p-[0.8cqw] shadow-[0_0.2cqw_0.8cqw_rgba(20,20,43,0.14),0_1.4cqw_3cqw_rgba(20,20,43,0.16)]`}
        >
          <p className="text-[0.72cqw] font-semibold leading-none text-navy">
            {n.title}
          </p>
          <p className="mt-[0.35cqw] text-[0.66cqw] leading-[1.4] text-slate-body">
            {n.body}
          </p>
          <p className="mt-[0.55cqw] overflow-hidden rounded-[0.2cqw] bg-[#f6f9fc] px-[0.5cqw] py-[0.4cqw] font-mono text-[0.6cqw] leading-none text-navy">
            aaruvoShopPanel.
            <span className="text-[#fc393a]">create</span>(
            <span className="text-[#0b7a4b]">&apos;{n.call}&apos;</span>);
          </p>
        </div>
      ))}

      <button
        type="button"
        aria-label="Replay"
        className="absolute bottom-[3%] right-[2%] flex h-[2.4cqw] w-[2.4cqw] items-center justify-center rounded-[0.35cqw] bg-white text-slate-body shadow-[0_0.2cqw_0.7cqw_rgba(20,20,43,0.18)] transition-colors duration-150 hover:text-navy"
      >
        <svg viewBox="0 0 16 16" className="h-[1.1cqw] w-[1.1cqw]" aria-hidden>
          <path
            d="M13 8a5 5 0 1 1-1.6-3.7M13 2.6V5.4h-2.8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
