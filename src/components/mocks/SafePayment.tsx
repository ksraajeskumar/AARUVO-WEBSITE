/**
 * What paying on AARUVO actually looks like: a UPI approval on the customer's
 * own phone, with the amount and the shop shown before anything is taken.
 * There is no card programme and no cash on delivery, so nothing here invents
 * a product we do not offer.
 */
export default function SafePayment() {
  return (
    <div className="flex h-full items-center justify-center px-[var(--card-pad)] pb-[var(--card-pad)]">
      <div className="pay-float @container aspect-[318/518] h-[70%] w-auto max-w-full">
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[7cqw] border-[1.4cqw] border-white bg-white shadow-[0_2px_10px_rgba(20,20,43,0.08),0_24px_60px_rgba(20,20,43,0.16)]">
          <div className="flex items-center justify-between bg-[#f7f8fa] px-[5cqw] py-[3.4cqw]">
            <span className="text-[3.2cqw] font-semibold text-navy">
              Approve payment
            </span>
            <span className="flex items-center gap-[1cqw] text-[2.8cqw] text-[#0f9d8a]">
              <svg viewBox="0 0 16 16" className="h-[3cqw] w-[3cqw]" aria-hidden>
                <path
                  d="M4 7V5a4 4 0 0 1 8 0v2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <rect x="2.6" y="7" width="10.8" height="6.6" rx="1.6" fill="currentColor" />
              </svg>
              Secure
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center px-[6cqw] text-center">
            <span className="flex h-[13cqw] w-[13cqw] items-center justify-center rounded-full bg-[#ffe9e9] text-[5cqw] font-bold text-brand">
              ₹
            </span>
            <p className="mt-[3.4cqw] text-[3cqw] text-slate-body">
              Paying AARUVO Store
            </p>
            <p className="mt-[1cqw] text-[9cqw] font-semibold leading-none tracking-[-0.03em] text-navy">
              ₹532
            </p>
            <p className="mt-[2cqw] text-[2.6cqw] leading-[1.5] text-muted">
              Rice, oil, dal and 3 more
              <br />
              Delivery free
            </p>

            <div className="mt-[5cqw] w-full space-y-[2cqw] text-left">
              {[
                ["UPI", "yourname@bank", true],
                ["Google Pay", "Linked", false],
              ].map(([a, b, on]) => (
                <div
                  key={a as string}
                  className={`flex items-center gap-[2.4cqw] rounded-[2cqw] border px-[3cqw] py-[2.6cqw] ${
                    on ? "border-brand bg-[#fff6f6]" : "border-line bg-white"
                  }`}
                >
                  <span
                    className={`h-[3cqw] w-[3cqw] rounded-full border-[0.9cqw] ${
                      on ? "border-brand bg-white" : "border-[#c9d1dc] bg-white"
                    }`}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[2.9cqw] font-medium text-navy">
                      {a as string}
                    </span>
                    <span className="block text-[2.4cqw] text-muted">
                      {b as string}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="px-[6cqw] pb-[6cqw]">
            <div className="rounded-[2.4cqw] bg-brand py-[3.4cqw] text-center text-[3.4cqw] font-semibold text-white">
              Approve ₹532
            </div>
            <p className="mt-[2.4cqw] text-center text-[2.3cqw] leading-[1.5] text-muted">
              Money leaves your account only after you approve.
              <br />
              No cash at the door.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
