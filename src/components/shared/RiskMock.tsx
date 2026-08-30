/**
 * The sign-up form beside its risk verdict. Shared by the Connect deep-dive
 * card and the enterprise account-management card.
 */
export default function RiskMock() {
  return (
    <div className="relative text-[length:var(--cust-body)]">
      <div className="w-[76%] rounded-[8px] bg-white p-[1.4em] shadow-[0_1px_3px_rgba(20,20,43,0.08),0_14px_38px_rgba(20,20,43,0.10)]">
        <p className="text-[1.05em] font-semibold text-navy">
          Create a business account
        </p>
        <div className="mt-[1.1em] space-y-[0.9em]">
          {[
            ["Business email address", "newshop@gmail.com"],
            ["Business name", "New Shop"],
            ["Tax ID / EIN", "47-•••••••••"],
          ].map(([l, v]) => (
            <div key={l}>
              <p className="text-[0.8em] font-medium text-navy">{l}</p>
              <div className="mt-[0.35em] rounded-[4px] border border-line px-[0.8em] py-[0.6em] text-[0.85em] text-slate-body">
                {v}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-[1.2em] rounded-[5px] bg-[#ffe9e9] py-[0.75em] text-center text-[0.86em] font-medium text-[#e02a2b]">
          Create account
        </div>
      </div>

      <div className="absolute right-0 top-[6%] w-[62%] rounded-[8px] bg-white p-[1.2em] shadow-[0_1px_3px_rgba(20,20,43,0.10),0_18px_44px_rgba(20,20,43,0.14)]">
        <p className="flex items-center gap-[0.6em] text-[0.92em] font-semibold text-navy">
          New Shop
          <span className="rounded-[4px] bg-[#fde8ea] px-[0.55em] py-[0.25em] text-[0.68em] font-medium text-[#c0244a]">
            High risk
          </span>
        </p>

        <div className="mt-[0.9em] flex items-center justify-between rounded-[6px] border border-line p-[0.9em]">
          <span>
            <span className="block text-[0.78em] text-slate-body">
              Risk of fraud
            </span>
            <span className="block text-[0.95em] font-semibold text-[#c0244a]">
              High
            </span>
          </span>
          <span className="relative flex items-center">
            <svg viewBox="0 0 60 34" className="h-[2.4em] w-[4.2em]" aria-hidden>
              <path d="M4 32a26 26 0 0 1 52 0" fill="none" stroke="#f2dfe3" strokeWidth="5" strokeLinecap="round" />
              <path
                className="risk-gauge"
                d="M4 32a26 26 0 0 1 52 0"
                fill="none"
                stroke="#d6294f"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="82"
                strokeDashoffset="16"
              />
              <circle cx="53" cy="20" r="3.4" fill="#d6294f" />
            </svg>
            <span className="absolute inset-0 flex items-end justify-center pb-[0.1em] text-[0.78em] font-semibold text-navy">
              80<span className="text-[0.8em] font-normal text-muted">/100</span>
            </span>
          </span>
        </div>

        <p className="mt-[1em] text-[0.88em] font-semibold text-navy">
          Risk analysis
        </p>
        {["High-risk accounts", "High number of disputes"].map((r) => (
          <p
            key={r}
            className="mt-[0.7em] flex items-center gap-[0.6em] border-t border-line pt-[0.7em] text-[0.85em] text-slate-body"
          >
            <svg viewBox="0 0 16 16" className="h-[1.1em] w-[1.1em] text-[#d6294f]" aria-hidden>
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5.6 5.6 10.4 10.4M10.4 5.6 5.6 10.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            {r}
          </p>
        ))}
      </div>
    </div>
  );
}
