/** Orders placed over the last 30 days. */
const BARS = [
  8, 12, 10, 26, 34, 22, 30, 46, 38, 30, 52, 44, 58, 50, 100, 62, 54, 70, 60,
  48, 66, 56, 74, 82, 64, 58, 46, 40, 34, 26,
];

/** The two stacked panels inside the billing card. */
export default function BillingPanels() {
  return (
    <div className="w-full space-y-[22px]">
      <div className="rounded-[10px] bg-white p-[18px] shadow-[0_2px_6px_rgba(20,20,43,0.08),0_10px_28px_rgba(20,20,43,0.06)]">
        <div className="flex items-center gap-2.5">
          <span className="flex h-[26px] w-[26px] items-center justify-center rounded-[6px] bg-[#e6f0ff]">
            <svg viewBox="0 0 16 16" className="h-[13px] w-[13px]" aria-hidden>
              <path
                d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.3 4.5 8.5 4.5 8.5s4.5-5.2 4.5-8.5A4.5 4.5 0 0 0 8 1.5z"
                fill="none"
                stroke="#fc393a"
                strokeWidth="1.4"
              />
              <circle cx="8" cy="6" r="1.7" fill="#fc393a" />
            </svg>
          </span>
          <div>
            <p className="text-[12px] font-semibold leading-tight text-navy">
              Monthly list
            </p>
            <p className="text-[10px] leading-tight text-muted">AARUVO Store</p>
          </div>
        </div>

        <p className="mt-4 text-[12px] font-semibold text-navy">Next reminder</p>
        <p className="mt-0.5 text-[10px] text-muted">Rice and oil, in 4 days</p>

        <div className="mt-3.5 flex items-center gap-1.5 text-[10px] text-slate-body">
          <svg viewBox="0 0 14 14" className="h-[11px] w-[11px]" aria-hidden>
            <circle
              cx="7"
              cy="7"
              r="5.6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path d="M4.4 9.6 9.6 4.4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
          Almost finished
        </div>

        <div className="mt-2 h-[7px] w-full overflow-hidden rounded-full bg-[#eef1f5]">
          <div
            className="h-full w-[68%] rounded-full"
            style={{
              background:
                "linear-gradient(90deg,#7a5cf0 0%,#a855f7 45%,#f472b6 100%)",
            }}
          />
        </div>
      </div>

      <div className="rounded-[10px] bg-white p-[18px] shadow-[0_2px_6px_rgba(20,20,43,0.08),0_10px_28px_rgba(20,20,43,0.06)]">
        <p className="text-[10px] text-slate-body">Orders in the last 30 days</p>
        <p className="mt-1 text-[13px] font-semibold tracking-[-0.01em] text-navy">
          18 orders
        </p>

        <div className="mt-4 flex h-[112px] items-end gap-[3px]">
          {BARS.map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-[1.5px] bg-[#e02a2b]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
