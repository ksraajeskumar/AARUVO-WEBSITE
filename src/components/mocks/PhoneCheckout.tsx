const LINES: [string, string][] = [
  ["Rice 5 kg", "₹340"],
  ["Groundnut oil 1 L", "₹220"],
  ["Regular customer (5% off)", "-₹28"],
  ["Delivery", "Free"],
];

/** The shop counter screen: what a customer sees when they tap to pay. */
export default function PhoneCheckout() {
  return (
    <div className="w-[200px] rounded-[30px] bg-[#0a0a0a] p-[7px] shadow-[0_24px_50px_rgba(20,20,43,0.28)]">
      <div className="relative overflow-hidden rounded-[24px] bg-white px-4 pb-4 pt-5">
        <span className="absolute left-1/2 top-[9px] h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#d8d8d8]" />

        <div className="flex justify-center pt-2">
          <svg viewBox="0 0 26 26" className="h-6 w-6 text-navy" aria-hidden>
            <g fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round">
              <path d="M6 8.5a9 9 0 0 1 0 9" />
              <path d="M10.5 6.5a13 13 0 0 1 0 13" />
              <path d="M15 4.5a17 17 0 0 1 0 17" />
              <path d="M19.5 2.5a21 21 0 0 1 0 21" />
            </g>
          </svg>
        </div>

        <p className="mt-3 text-center text-[11px] text-muted">Pay AARUVO Store</p>
        <p className="mt-0.5 text-center text-[26px] font-semibold tracking-[-0.03em] text-navy">
          ₹532
        </p>
        <p className="mt-1 text-center text-[9px] text-muted">
          Tap your phone or scan the code
        </p>

        <div className="mt-4 space-y-[7px] border-t border-line pt-3">
          {LINES.map(([label, value]) => (
            <div key={label} className="flex justify-between text-[9px]">
              <span className="text-slate-body">{label}</span>
              <span className="text-navy">{value}</span>
            </div>
          ))}
          <div className="flex justify-between border-t border-line pt-[7px] text-[10px] font-semibold text-navy">
            <span>Total</span>
            <span>₹532</span>
          </div>
        </div>

        <div className="mt-4 rounded-[8px] bg-brand py-2 text-center text-[10px] font-semibold text-white">
          Pay with UPI
        </div>
      </div>
    </div>
  );
}
