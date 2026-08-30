type Row = {
  name: string;
  country: string;
  balance: string;
  volume: string;
  bg: string;
  glyph: "letter" | "wave" | "sun" | "star" | "flame" | "blend";
};

/** The connected-accounts table, transcribed from the reference dashboard. */
const ROWS: Row[] = [
  { name: "Kumar Stores", country: "Canada", balance: "₹793,060.00", volume: "₹6,798,483.10", bg: "#ffffff", glyph: "wave" },
  { name: "Meena Bakery", country: "United States", balance: "₹142,690.00", volume: "₹843,505.00", bg: "#6366f1", glyph: "sun" },
  { name: "Selvi Vegetables", country: "UK", balance: "₹118,465.00", volume: "₹2,334,063.55", bg: "#f5b301", glyph: "letter" },
  { name: "AARUVO Store", country: "Australia", balance: "₹347,700.00", volume: "₹1,201,113.50", bg: "#f2620f", glyph: "letter" },
  { name: "Raja Provision", country: "United States", balance: "₹2,938,350.00", volume: "₹27,993,616.75", bg: "#e879f9", glyph: "blend" },
  { name: "Arun Mobiles", country: "Canada", balance: "₹31,825.00", volume: "₹346,784.20", bg: "#4f46e5", glyph: "letter" },
  { name: "Priya Tailors", country: "United States", balance: "₹213,275.00", volume: "₹817,760.00", bg: "#ffffff", glyph: "star" },
  { name: "City Hardware", country: "UK", balance: "₹36,860.00", volume: "₹151,655.15", bg: "#ffffff", glyph: "flame" },
  { name: "Lakshmi Dairy", country: "Australia", balance: "₹62,700.00", volume: "₹156,113.50", bg: "#e8442e", glyph: "letter" },
  { name: "New Sweets", country: "Canada", balance: "₹420,280.00", volume: "₹637,412.00", bg: "#f5b301", glyph: "letter" },
];

function Avatar({ row }: { row: Row }) {
  const common = "h-[1.28cqw] w-[1.28cqw] shrink-0 rounded-full";

  if (row.glyph === "blend") {
    return (
      <span
        className={common}
        style={{
          background: "linear-gradient(140deg,#f0abfc 0%,#c084fc 55%,#f9a8d4 100%)",
        }}
      />
    );
  }

  return (
    <span
      className={`${common} flex items-center justify-center`}
      style={{ background: row.bg }}
    >
      {row.glyph === "letter" && (
        <span className="text-[0.66cqw] font-semibold leading-none text-white">
          {row.name[0]}
        </span>
      )}
      {row.glyph === "wave" && (
        <svg viewBox="0 0 16 16" className="h-[0.86cqw] w-[0.86cqw]" aria-hidden>
          <g fill="none" stroke="#060c17" strokeWidth="1.3" strokeLinecap="round">
            <path d="M2 6c1.4-1.6 2.9-1.6 4.3 0S9.2 7.6 10.6 6s2.9-1.6 3.4-.6" />
            <path d="M2 10c1.4-1.6 2.9-1.6 4.3 0s2.9 1.6 4.3 0 2.9-1.6 3.4-.6" />
          </g>
        </svg>
      )}
      {row.glyph === "sun" && (
        <svg viewBox="0 0 16 16" className="h-[0.8cqw] w-[0.8cqw]" aria-hidden>
          <circle cx="8" cy="8" r="2.6" fill="#fff" />
          <g stroke="#fff" strokeWidth="1.2" strokeLinecap="round">
            <path d="M8 1.6v1.6M8 12.8v1.6M1.6 8h1.6M12.8 8h1.6" />
          </g>
        </svg>
      )}
      {row.glyph === "star" && (
        <svg viewBox="0 0 16 16" className="h-[0.86cqw] w-[0.86cqw]" aria-hidden>
          <g stroke="#060c17" strokeWidth="1.4" strokeLinecap="round">
            <path d="M8 2v12M2 8h12M3.8 3.8l8.4 8.4M12.2 3.8l-8.4 8.4" />
          </g>
        </svg>
      )}
      {row.glyph === "flame" && (
        <svg viewBox="0 0 16 16" className="h-[0.86cqw] w-[0.86cqw]" aria-hidden>
          <path
            d="M8 2c2.6 2.4 4 4.3 4 6.4A4 4 0 0 1 4 8.4C4 6.3 5.4 4.4 8 2z"
            fill="#f97316"
          />
        </svg>
      )}
    </span>
  );
}

/** The platform's dashboard, framed in a browser chrome. */
export default function ConnectedAccounts() {
  return (
    <div className="h-full w-full overflow-hidden rounded-t-[0.8cqw] bg-white shadow-[0_2px_10px_rgba(20,20,43,0.08),0_24px_60px_rgba(20,20,43,0.12)]">
      <div className="relative flex items-center bg-[#f4f6f8] px-[0.95cqw] py-[0.62cqw]">
        <div className="flex gap-[0.32cqw]">
          {["#d3d8de", "#d3d8de", "#d3d8de"].map((c, i) => (
            <span
              key={i}
              className="h-[0.52cqw] w-[0.52cqw] rounded-full"
              style={{ background: c }}
            />
          ))}
        </div>
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[0.34cqw] rounded-full bg-white px-[0.9cqw] py-[0.28cqw]">
          <svg viewBox="0 0 12 14" className="h-[0.62cqw] w-[0.54cqw]" aria-hidden>
            <path
              d="M3 6V4.2a3 3 0 0 1 6 0V6"
              fill="none"
              stroke="#8a919c"
              strokeWidth="1.4"
            />
            <rect x="1.6" y="6" width="8.8" height="6.4" rx="1.4" fill="#8a919c" />
          </svg>
          <span className="text-[0.68cqw] leading-none text-slate-body">
            dashboard.aaruvo-store.com
          </span>
        </div>
      </div>

      <div className="flex">
        <aside className="w-[16.5%] shrink-0 px-[1.2cqw] py-[1.35cqw]">
          <div className="flex items-center gap-[0.55cqw]">
            <svg viewBox="0 0 24 24" className="h-[1.45cqw] w-[1.45cqw]" aria-hidden>
              <g fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 20c-4 0-7-2.6-7-5.6 2.6 0 7 1.6 7 5.6z" />
                <path d="M12 20c4 0 7-2.6 7-5.6-2.6 0-7 1.6-7 5.6z" />
                <path d="M12 19c-2.4-2-3.6-4.2-3.6-6.4S9.6 8 12 6c2.4 2 3.6 4.4 3.6 6.6S14.4 17 12 19z" />
              </g>
            </svg>
            <span className="text-[0.95cqw] font-medium text-navy">AARUVO Store</span>
          </div>
        </aside>

        <main className="min-w-0 flex-1 border-l border-[#eceff3] px-[1.5cqw] py-[1.35cqw]">
          <h4 className="text-[1.08cqw] font-semibold tracking-[-0.01em] text-navy">
            Connected Accounts
          </h4>

          <table className="mt-[1.15cqw] w-full table-fixed border-collapse text-left">
            <thead>
              <tr className="text-[0.72cqw] text-slate-body">
                <th className="w-[30%] pb-[0.62cqw] font-normal">Accounts</th>
                <th className="w-[20%] pb-[0.62cqw] font-normal">
                  Account country
                </th>
                <th className="w-[25%] pb-[0.62cqw] font-normal">
                  Payment balance (INR)
                </th>
                <th className="w-[25%] pb-[0.62cqw] font-normal">Volume (INR)</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.name}
                  className={`acct-row border-t border-[#eef1f4] text-[0.78cqw] transition-colors duration-300 ${
                    r.name === "AARUVO Store" ? "acct-row-active" : ""
                  }`}
                >
                  <td className="py-[0.66cqw]">
                    <span className="flex items-center gap-[0.55cqw] text-navy">
                      <Avatar row={r} />
                      {r.name}
                    </span>
                  </td>
                  <td className="py-[0.66cqw] text-slate-body">{r.country}</td>
                  <td className="py-[0.66cqw] text-navy">{r.balance}</td>
                  <td className="py-[0.66cqw] text-navy">{r.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
