/** Rows under the "thank you" note, in reference order. */
const ROWS = [
  { label: "Order number", value: "#2945467" },
  { label: "Date", value: "25 Feb" },
  { label: "Payment method", value: null },
  { label: "Your purchase", value: "A$72.00 /year" },
];

/**
 * The customer's receipt. Sized in container-query units so the whole scene
 * scales with the card instead of stepping at breakpoints.
 */
export default function ReceiptCard() {
  return (
    <div className="receipt-lift w-full rounded-[0.9cqw] bg-white p-[1.55cqw] shadow-[0_2px_8px_rgba(20,20,43,0.08),0_18px_44px_rgba(20,20,43,0.13)] transition-transform duration-500 ease-out">
      <div className="flex items-center gap-[0.8cqw]">
        <span className="flex h-[2.3cqw] w-[2.3cqw] items-center justify-center rounded-full bg-[#f2620f] text-[1.2cqw] font-semibold leading-none text-white">
          J
        </span>
        <p className="text-[1.28cqw] font-semibold tracking-[-0.01em] text-navy">
          AARUVO Store
        </p>
      </div>

      <p className="mt-[1.15cqw] text-[0.86cqw] leading-[1.55] text-navy">
        Thank you!
        <br />
        Your payment was successful.
      </p>

      {ROWS.map((r) => (
        <div
          key={r.label}
          className="mt-[0.72cqw] flex items-center justify-between border-t border-[#eceff3] pt-[0.72cqw] text-[0.86cqw]"
        >
          <span className="text-navy">{r.label}</span>
          {r.value ? (
            <span className="text-slate-body">{r.value}</span>
          ) : (
            <span className="rounded-[0.2cqw] bg-[#111827] px-[0.42cqw] py-[0.2cqw] text-[0.62cqw] font-bold italic leading-none text-white">
              zip
            </span>
          )}
        </div>
      ))}

      <div className="mt-[0.72cqw] flex items-center justify-between border-t border-[#eceff3] pt-[0.9cqw] text-[0.92cqw] font-semibold text-navy">
        <span>Total</span>
        <span>A$72.00</span>
      </div>
    </div>
  );
}
