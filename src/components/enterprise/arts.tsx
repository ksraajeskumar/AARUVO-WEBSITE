/* Card artwork for the enterprise detail sections. Every piece animates on its
   own so the cards keep moving while the page is read. */

export function PaymentTilesArt() {
  const tile =
    "absolute flex items-center justify-center rounded-[10px] shadow-[0_4px_14px_rgba(20,20,43,0.10),0_18px_40px_rgba(20,20,43,0.10)]";

  return (
    <div className="relative h-full w-full">
      <div className={`${tile} ent-tile left-[6%] top-[4%] h-[27%] w-[62%] bg-white`}>
        <span className="flex items-center gap-[0.4em] text-[1.35em] font-bold text-navy">
          <span className="flex h-[1.15em] w-[1.15em] items-center justify-center rounded-[5px] bg-[#1677ff] text-[0.62em] text-white">
            支
          </span>
          UPI
        </span>
      </div>

      <div
        className={`${tile} ent-tile-2 right-[-14%] top-[20%] h-[27%] w-[58%] bg-[#ffb3c7]`}
      >
        <span className="text-[1.35em] font-bold text-[#17120f]">UPI</span>
      </div>

      <div className={`${tile} ent-tile-3 left-[6%] top-[38%] h-[27%] w-[62%] bg-white`}>
        <span className="flex items-center gap-[0.4em] text-[1.35em] font-bold text-navy">
          <span className="flex h-[1.05em] w-[1.05em] items-center justify-center rounded-full bg-[#00d66f] text-[0.6em] text-white">
            ▶
          </span>
          link
        </span>
      </div>

      <div
        className={`${tile} ent-tile-2 right-[-14%] top-[54%] h-[27%] w-[58%] bg-[#0b0b0b]`}
      >
        <span className="text-[1.3em] font-semibold text-white"> Pay</span>
      </div>

      <div className={`${tile} ent-tile-3 left-[6%] top-[72%] h-[26%] w-[62%] bg-white`}>
        <span className="flex flex-col items-center leading-none">
          <svg viewBox="0 0 60 20" className="h-[1.1em] w-[3em]" aria-hidden>
            <path d="M2 14 24 2h34L36 14z" fill="#005498" />
            <path d="M20 18 42 6h16L36 18z" fill="#ffd800" />
          </svg>
          <span className="mt-[0.25em] text-[0.55em] font-bold text-[#005498]">
            Net banking
          </span>
        </span>
      </div>
    </div>
  );
}

export function ReaderArt() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="ent-float-slow w-[62%] rounded-[1.6em] bg-[#15161a] p-[0.6em] shadow-[0_20px_46px_rgba(20,20,43,0.24)]">
        <div className="rounded-[1.2em] bg-white p-[1em]">
          <p className="text-[1em] font-semibold text-navy">Please sign</p>
          <p className="mt-[0.3em] text-[0.68em] leading-[1.4] text-slate-body">
            I agree to the terms and conditions as set out by the user agreement.
          </p>
          <div className="relative mt-[0.7em] h-[6em] rounded-[6px] bg-[#f5f6f8]">
            <span className="absolute right-[0.5em] top-[0.4em] text-[0.8em] text-muted">
              ✕
            </span>
            <svg viewBox="0 0 200 80" className="h-full w-full" aria-hidden>
              <path
                className="ent-sign"
                d="M22 58c14-26 24-32 30-18s2 30 12 24 16-30 26-30 8 22 20 18 22-24 34-30"
                fill="none"
                stroke="#060c17"
                strokeWidth="3.4"
                strokeLinecap="round"
                strokeDasharray="230"
              />
            </svg>
          </div>
          <div className="mt-[0.8em] rounded-[5px] bg-[#fc393a] py-[0.55em] text-center text-[0.78em] font-medium text-white">
            Done
          </div>
        </div>
      </div>
    </div>
  );
}

const AUTH_BARS: [string, number, string, string][] = [
  ["Order placed", 46, "100%", "#8a919c"],
  ["Shop confirms", 62, "96%", "#fc393a"],
  ["Found nearby", 78, "3%", "#fc393a"],
  ["Refunded", 30, "1%", "#fc393a"],
];

export function AuthChartArt() {
  return (
    <div className="flex h-full items-center">
      <div className="w-full rounded-[8px] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10)]">
        <p className="text-[0.95em] font-semibold text-navy">
          What happens to an order
        </p>
        <p className="mt-[0.3em] text-[0.72em] leading-[1.4] text-slate-body">
          Almost every order is confirmed. If not, we find it nearby or refund you.
        </p>

        <div className="mt-[1em] flex h-[8em] items-end gap-[0.8em] border-l border-line pl-[0.6em]">
          {AUTH_BARS.map(([label, h, val, c]) => (
            <span key={label} className="flex flex-1 flex-col items-center">
              <span className="mb-[0.35em] text-[0.6em] font-medium text-navy">
                {val}
              </span>
              <span
                className="ent-bar w-full rounded-t-[2px]"
                style={{ height: `${h}%`, background: c }}
              />
              <span className="mt-[0.4em] text-center text-[0.55em] leading-[1.25] text-muted">
                {label}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-[0.5em] flex justify-between text-[0.6em] text-muted">
          <span>91.25%</span>
          <span>94.50%</span>
          <span>97.75%</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
}

export function DepositsArt() {
  const rows = [
    ["£432.33", "(19 transactions)", "12/03/2023"],
    ["£487.32", "(21 transactions)", "09/03/2023"],
    ["£290.79", "(17 transactions)", "03/02/2023"],
    ["£345.12", "(19 transactions)", "28/01/2023"],
  ];
  return (
    <div className="flex h-full items-start justify-center pt-[1.2em]">
      <div className="ent-float-slow w-[70%] rounded-t-[1.2em] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10),0_20px_44px_rgba(20,20,43,0.10)]">
        <p className="flex items-center gap-[0.6em] text-[0.9em] font-semibold text-navy">
          <span className="text-muted">←</span> Deposits
        </p>
        <p className="mt-[0.9em] text-center text-[1.5em] font-semibold tracking-[-0.02em] text-navy">
          £280.81
        </p>
        <p className="text-center text-[0.66em] text-muted">
          Pending balance: £341.42
        </p>
        <div className="mt-[0.8em] rounded-[5px] bg-[#fc393a] py-[0.55em] text-center text-[0.78em] font-medium text-white">
          Instant payout
        </div>
        <p className="mt-[1em] text-[0.6em] uppercase tracking-[0.1em] text-muted">
          Recent deposits
        </p>
        {rows.map(([amt, tx, date], i) => (
          <div
            key={i}
            className="ent-row flex items-start gap-[0.6em] border-b border-line py-[0.55em]"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <svg viewBox="0 0 16 16" className="mt-[0.15em] h-[0.9em] w-[0.9em]" aria-hidden>
              <circle cx="8" cy="8" r="8" fill="#ffe4e4" />
              <path d="M4.6 8.4 6.9 10.7 11.4 5.4" fill="none" stroke="#fc393a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[0.68em] leading-[1.35]">
              <span className="block text-navy">
                {amt} <span className="text-muted">{tx}</span>
              </span>
              <span className="block text-muted">Deposited on {date}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BrushArt() {
  const rows = [
    ["29 May", "Deposit", "Appointment no. 34107", "+£156.22"],
    ["29 May", "Deposit", "Appointment no. 34106", "+£238.17"],
    ["29 May", "Transfer", "Transfer to xxxx-3918", "-£275.15"],
    ["27 May", "Deposit", "Appointment no. 34105", "+£102.45"],
  ];
  return (
    <div className="flex h-full items-start justify-center pt-[1.2em]">
      <div className="w-[86%] rounded-t-[8px] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10),0_20px_44px_rgba(20,20,43,0.10)]">
        <div className="flex items-center justify-between border-b border-line pb-[0.6em]">
          <span className="font-serif text-[0.95em] tracking-[0.08em] text-navy">
            AARUVO STORE
          </span>
          <span className="text-[0.66em] text-slate-body">👤 Account</span>
        </div>
        <p className="mt-[0.8em] text-[0.85em] font-semibold text-navy">
          Hi, AARUVO Store!
        </p>
        <div className="mt-[0.7em] rounded-[6px] border border-line p-[0.8em]">
          <p className="text-[0.66em] text-muted">Available balance</p>
          <p className="mt-[0.15em] text-[1.25em] font-semibold text-navy">£820.56</p>
          <p className="text-[0.62em] text-muted">Pending: £341.80</p>
        </div>
        <div className="mt-[0.7em] flex items-center gap-[0.8em] rounded-[6px] border border-line p-[0.8em]">
          <span className="flex-1">
            <span className="block text-[0.7em] font-semibold text-navy">
              Your Brush Card
            </span>
            <span className="block text-[0.62em] text-muted">Jane Smith</span>
            <span className="mt-[0.5em] block text-[0.62em] text-brand">
              See settings ›
            </span>
            <span className="block text-[0.62em] text-brand">Order new card ›</span>
          </span>
          <span className="ent-float-slow h-[3.4em] w-[5.4em] shrink-0 rounded-[5px] bg-gradient-to-br from-[#1f7a6b] to-[#0f4b42] p-[0.4em]">
            <span className="block h-[0.9em] w-[1.2em] rounded-[2px] bg-white/80" />
            <span className="mt-[1.1em] block text-right text-[0.42em] text-white/80">
              AARUVO STORE
            </span>
          </span>
        </div>
        <p className="mt-[0.9em] text-[0.75em] font-semibold text-navy">Activity</p>
        <div className="mt-[0.4em] grid grid-cols-[auto_auto_1fr_auto] gap-x-[0.7em] text-[0.58em] uppercase tracking-[0.06em] text-muted">
          <span>Date</span>
          <span>Type</span>
          <span>Description</span>
          <span>Amount</span>
        </div>
        {rows.map((r, i) => (
          <div
            key={i}
            className="ent-row mt-[0.35em] grid grid-cols-[auto_auto_1fr_auto] gap-x-[0.7em] border-t border-line pt-[0.35em] text-[0.62em] text-slate-body"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <span>{r[0]}</span>
            <span>{r[1]}</span>
            <span className="truncate">{r[2]}</span>
            <span className="text-navy">{r[3]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InvoiceArt() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="ent-float-slow w-[68%] rounded-[8px] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10),0_20px_44px_rgba(20,20,43,0.10)]">
        <p className="flex items-center gap-[0.4em] text-[0.85em] font-semibold text-navy">
          <span className="flex h-[1.1em] w-[1.1em] items-center justify-center rounded-[3px] bg-[#12131a] text-[0.6em] text-white">
            R
          </span>
          AARUVO Store
        </p>
        <p className="mt-[0.7em] text-[1.5em] font-semibold tracking-[-0.02em] text-navy">
          £214.50
        </p>
        <p className="text-[0.66em] text-muted">Due 20 February 2022</p>
        <div className="mt-[0.8em] space-y-[0.3em] text-[0.66em] text-slate-body">
          <p>To &nbsp;&nbsp;Tyler Conway</p>
          <p>From &nbsp;AARUVO Store</p>
          <p>Memo &nbsp;Thanks for your business!</p>
        </div>
        <div className="mt-[0.8em] rounded-[5px] bg-[#0b1220] py-[0.6em] text-center text-[0.85em] font-semibold text-white">
           Pay
        </div>
        <div className="mt-[0.6em] grid grid-cols-2 gap-[0.5em] text-[0.66em]">
          <span className="rounded-[4px] border border-brand px-[0.6em] py-[0.5em] text-navy">
            Card
          </span>
          <span className="rounded-[4px] border border-line px-[0.6em] py-[0.5em] text-slate-body">
            Bank transfer
          </span>
        </div>
        <p className="mt-[0.7em] text-[0.62em] text-slate-body">Card information</p>
        <div className="mt-[0.3em] flex items-center justify-between rounded-[4px] border border-line px-[0.6em] py-[0.5em] text-[0.66em] text-muted">
          1234 1234 1234 1234
          <span className="flex gap-[0.2em]">
            {["#1a1f71", "#eb001b", "#f79e1b", "#016fd0"].map((c) => (
              <span key={c} className="h-[0.7em] w-[1em] rounded-[1px]" style={{ background: c }} />
            ))}
          </span>
        </div>
        <div className="mt-[0.4em] grid grid-cols-2 gap-[0.5em] text-[0.66em] text-muted">
          <span className="rounded-[4px] border border-line px-[0.6em] py-[0.5em]">MM / YY</span>
          <span className="rounded-[4px] border border-line px-[0.6em] py-[0.5em]">CVC</span>
        </div>
        <div className="mt-[0.6em] rounded-[5px] bg-[#fc393a] py-[0.6em] text-center text-[0.78em] font-medium text-white">
          Pay £214.50
        </div>
      </div>
    </div>
  );
}

export function TaxArt() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[74%] rounded-[8px] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10),0_20px_44px_rgba(20,20,43,0.10)]">
        <p className="flex items-center gap-[0.45em] text-[0.85em] font-semibold text-navy">
          <span className="flex h-[1.1em] w-[1.1em] items-center justify-center rounded-full bg-[#0aa85a] text-[0.6em] text-white">
            ✦
          </span>
          AARUVO Store
        </p>
        <p className="mt-[0.9em] text-[0.7em] text-slate-body">Pay AARUVO Store</p>
        <p className="text-[1.5em] font-semibold tracking-[-0.02em] text-navy">
          £20.00
        </p>
        <div className="mt-[0.9em] flex items-center gap-[0.6em] text-[0.7em]">
          <span className="h-[1.8em] w-[1.8em] rounded-[4px] bg-gradient-to-br from-[#f5b301] to-[#0aa85a]" />
          <span className="flex-1">
            <span className="block text-navy">AARUVO Store Pro</span>
            <span className="block text-[0.85em] text-muted">Qty 1</span>
          </span>
          <span className="text-navy">£20.00</span>
        </div>
        <div className="mt-[0.9em] space-y-[0.5em] text-[0.7em]">
          <div className="flex justify-between border-t border-line pt-[0.5em] text-slate-body">
            <span>Subtotal</span>
            <span className="text-navy">£20.00</span>
          </div>
          <div className="flex justify-between border-t border-line pt-[0.5em] text-[#fc393a]">
            <span>Sales tax (10.25%)</span>
            <span>£2.05</span>
          </div>
          <div className="flex justify-between border-t border-line pt-[0.5em] text-slate-body">
            <span>Total due today</span>
            <span className="text-navy">£22.05</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const REV_BARS = [8, 11, 14, 12, 18, 22, 26, 31, 36, 42, 48, 55, 62, 70, 78, 86, 94, 100];

export function RevenueArt() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-[86%] rounded-[8px] bg-white p-[1.1em] shadow-[0_2px_10px_rgba(20,20,43,0.10),0_20px_44px_rgba(20,20,43,0.10)]">
        <div className="flex items-start justify-between">
          <span>
            <span className="block text-[0.68em] text-slate-body">
              Revenue recognition
            </span>
            <span className="block text-[0.95em] font-semibold text-navy">
              ₹58,39,417.15
            </span>
          </span>
          <span className="flex gap-[0.7em] text-[0.6em] text-slate-body">
            <span className="flex items-center gap-[0.25em]">
              <span className="h-[0.5em] w-[0.5em] rounded-full bg-[#7c5cf5]" /> Open
            </span>
            <span className="flex items-center gap-[0.25em]">
              <span className="h-[0.5em] w-[0.5em] rounded-full bg-[#ec4899]" /> Closed
            </span>
          </span>
        </div>

        <div className="mt-[0.9em] flex h-[6em] items-end gap-[0.2em]">
          {REV_BARS.map((v, i) => (
            <span
              key={i}
              className="ent-bar flex-1 rounded-t-[1px] bg-[#ec4899]"
              style={{ height: `${v}%`, animationDelay: `${i * 0.03}s` }}
            />
          ))}
          <span className="ent-bar w-[4%] rounded-t-[1px] bg-[#7c5cf5]" style={{ height: "100%" }} />
        </div>
        <div className="mt-[0.4em] flex justify-between text-[0.6em] text-muted">
          <span>Aug 2025</span>
          <span>Aug 2026</span>
        </div>

        <div className="mt-[0.9em] rounded-[6px] border border-line p-[0.8em]">
          <p className="flex items-center justify-between text-[0.7em] font-semibold text-navy">
            August summary
            <span className="text-[0.85em] font-normal text-muted">Aug 2026 ⌄</span>
          </p>
          {[
            ["Recognised revenue previously deferred", "₹12,16,752.67"],
            ["Revenue from unbilled services", "₹42,44,870.34"],
            ["Less refunds", "₹22.38"],
            ["Less disputes", "₹8,813.74"],
            ["Less bad debts", "₹190.56"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="mt-[0.4em] flex justify-between border-t border-line pt-[0.4em] text-[0.62em]"
            >
              <span className="text-slate-body">{k}</span>
              <span className="text-navy">{v}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
