type Method = {
  label: string;
  icon: React.ReactNode;
  note?: string;
};

function Chip({ bg, children }: { bg: string; children: React.ReactNode }) {
  return (
    <span
      className="flex h-[15px] w-[19px] shrink-0 items-center justify-center rounded-[3px] text-[8px] font-bold text-white"
      style={{ background: bg }}
    >
      {children}
    </span>
  );
}

const METHODS: Method[] = [
  {
    label: "UPI",
    icon: <Chip bg="#0f9d8a">₹</Chip>,
    note: "Approve the request in any UPI app on your phone.",
  },
  { label: "Google Pay", icon: <Chip bg="#4285f4">G</Chip> },
  { label: "PhonePe", icon: <Chip bg="#5f259f">P</Chip> },
  {
    label: "Debit or credit card",
    icon: (
      <Chip bg="linear-gradient(180deg,#8f9bb3,#6b7890)">
        <svg viewBox="0 0 16 11" className="h-[7px] w-[10px]" aria-hidden>
          <rect width="16" height="11" rx="1.6" fill="#fff" opacity="0.9" />
          <rect y="3" width="16" height="2" fill="#6b7890" />
        </svg>
      </Chip>
    ),
  },
  {
    label: "Net banking",
    icon: (
      <Chip bg="#5b6b8c">
        <svg viewBox="0 0 14 12" className="h-[8px] w-[9px]" aria-hidden>
          <path d="M7 1 13 4H1z" fill="#fff" />
          <rect x="2" y="5.5" width="1.6" height="4" fill="#fff" />
          <rect x="6.2" y="5.5" width="1.6" height="4" fill="#fff" />
          <rect x="10.4" y="5.5" width="1.6" height="4" fill="#fff" />
          <rect x="1" y="10.2" width="12" height="1.3" fill="#fff" />
        </svg>
      </Chip>
    ),
  },
];

const SUMMARY: [string, string][] = [
  ["Items (6)", "₹560"],
  ["Delivery", "₹0"],
  ["Savings applied", "-₹28"],
];

/**
 * The hosted-checkout window. Deliberately wider than the space it sits in —
 * the card clips its right edge, exactly as the reference does.
 */
export default function BrowserCheckout() {
  return (
    <div className="w-[640px] overflow-hidden rounded-t-[10px] bg-white shadow-[0_24px_60px_rgba(20,20,43,0.18)]">
      {/* chrome */}
      <div className="flex items-center gap-3 bg-[#eceff3] px-3 py-[9px]">
        <div className="flex gap-1.5">
          <span className="h-[7px] w-[7px] rounded-full bg-[#c9cfd8]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#c9cfd8]" />
          <span className="h-[7px] w-[7px] rounded-full bg-[#c9cfd8]" />
        </div>
        <div className="mx-auto flex w-[240px] items-center justify-center gap-1 rounded-full bg-white py-[3px] text-[8px] text-slate-body">
          <svg viewBox="0 0 10 12" className="h-[8px] w-[7px]" aria-hidden>
            <path
              d="M2 5V3.5a3 3 0 0 1 6 0V5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <rect x="1" y="5" width="8" height="6" rx="1.2" fill="currentColor" />
          </svg>
          aaruvo.com/order
        </div>
      </div>

      <div className="flex">
        {/* form */}
        <div className="w-[320px] px-5 pb-16 pt-5">
          <p className="text-[11px] font-bold tracking-[0.02em] text-navy">
            AARUVO Store
          </p>

          <p className="mt-5 text-[8px] font-medium text-slate-body">Deliver to</p>
          <div className="mt-1 rounded-[5px] border border-line bg-white px-2 py-[6px] text-[9px] text-navy shadow-[0_1px_2px_rgba(50,50,93,0.06)]">
            12, Bharathi Street, Chennai 600 001
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="flex items-center justify-center gap-1 rounded-[5px] bg-[#0f9d8a] py-[7px] text-[9px] font-semibold text-white">
              <svg viewBox="0 0 12 12" className="h-[9px] w-[9px]" aria-hidden>
                <circle cx="6" cy="6" r="6" fill="#0b3d1e" />
                <path d="M4.6 3.6 8.4 6 4.6 8.4z" fill="#00d64f" />
              </svg>
              Pay by UPI
            </div>
            <div className="flex items-center justify-center gap-1 rounded-[5px] bg-black py-[7px] text-[9px] font-semibold text-white">
              <svg viewBox="0 0 12 14" className="h-[10px] w-[9px]" aria-hidden>
                <path
                  d="M9.3 7.4c0-1.5 1.2-2.2 1.3-2.3-.7-1-1.8-1.2-2.2-1.2-.9-.1-1.8.6-2.3.6s-1.2-.5-2-.5c-1 0-2 .6-2.5 1.5-1.1 1.9-.3 4.6.8 6.1.5.7 1.1 1.5 1.9 1.5.8 0 1.1-.5 2-.5s1.2.5 2 .5 1.3-.7 1.8-1.4c.6-.8.8-1.6.8-1.6s-1.6-.6-1.6-2.7z"
                  fill="#fff"
                />
                <path
                  d="M7.9 2.9c.4-.5.7-1.2.6-1.9-.6 0-1.4.4-1.8.9-.4.5-.7 1.2-.6 1.9.7.1 1.4-.4 1.8-.9z"
                  fill="#fff"
                />
              </svg>
              Scan QR
            </div>
          </div>

          <p className="my-3 text-center text-[8px] text-muted">or</p>

          <p className="text-[8px] font-medium text-slate-body">Payment method</p>
          <div className="mt-1.5 overflow-hidden rounded-[5px] border border-line">
            {METHODS.map((m, i) => (
              <div
                key={m.label}
                className={`flex gap-2 px-2.5 py-[9px] ${
                  i > 0 ? "border-t border-line" : ""
                } ${m.note ? "bg-[#fafbfc]" : "bg-white"}`}
              >
                <span
                  className={`mt-[2px] h-[9px] w-[9px] shrink-0 rounded-full border ${
                    m.note
                      ? "border-[4px] border-brand bg-white"
                      : "border-[#c9d1dc] bg-white"
                  }`}
                />
                {m.icon}
                <div className="min-w-0">
                  <p className="text-[9px] text-navy">{m.label}</p>
                  {m.note ? (
                    <p className="mt-[3px] text-[8px] leading-[1.35] text-muted">
                      {m.note}
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-[5px] bg-[#fbd9c0] py-[9px] text-center text-[10px] font-medium text-white">
            Continue
          </div>
        </div>

        {/* order summary */}
        <div className="w-[320px] border-l border-line bg-[#fbfcfd] px-5 pb-16 pt-9">
          <p className="text-[10px] font-medium text-navy">Your order</p>

          <div className="mt-3 flex gap-3 rounded-[6px] bg-white p-3 shadow-[0_1px_3px_rgba(50,50,93,0.08)]">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[4px] bg-[#f3f5f8]">
              <svg viewBox="0 0 40 40" className="h-9 w-9" aria-hidden>
                <path
                  d="M12 14h13a6 6 0 0 1 6 6v8a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z"
                  fill="#2b3240"
                />
                <path
                  d="M25 17c5 0 8 2 9 5"
                  fill="none"
                  stroke="#2b3240"
                  strokeWidth="2"
                />
                <rect x="15" y="9" width="9" height="5" rx="1.4" fill="#2b3240" />
                <path d="M12 32h19l-1 3H13z" fill="#1a1f28" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-[9px] leading-[1.35] text-navy">
                Rice, oil, dal and 3 more
              </p>
              <p className="mt-2 text-[9px] text-slate-body">₹560</p>
            </div>
          </div>

          <div className="mt-4 space-y-2 border-t border-line pt-3">
            {SUMMARY.map(([k, v]) => (
              <div key={k} className="flex justify-between text-[9px]">
                <span className="text-slate-body">{k}</span>
                <span className="text-navy">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-3 flex justify-between border-t border-line pt-3 text-[9px] font-medium">
            <span className="text-navy">Total</span>
            <span className="text-navy">₹532</span>
          </div>
        </div>
      </div>
    </div>
  );
}
