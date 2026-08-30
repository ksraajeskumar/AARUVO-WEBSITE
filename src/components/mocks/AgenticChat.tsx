/** What AARUVO found nearby after the voice request. */
const PRODUCTS = [
  {
    name: "Ponni rice 5 kg",
    variant: "AARUVO Store · 400 m away",
    price: "₹340",
    art: (
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <path d="M36 44h48l8 52H28z" fill="#e8dcc8" />
        <path d="M36 44h48l3 18H33z" fill="#d6c6ac" />
        <rect x="44" y="30" width="32" height="16" rx="4" fill="#c9b18c" />
        <g fill="#fff">
          <ellipse cx="52" cy="72" rx="5" ry="9" transform="rotate(-20 52 72)" />
          <ellipse cx="64" cy="78" rx="5" ry="9" transform="rotate(10 64 78)" />
          <ellipse cx="74" cy="68" rx="5" ry="9" transform="rotate(-8 74 68)" />
        </g>
      </svg>
    ),
  },
  {
    name: "Groundnut oil 1 L",
    variant: "AARUVO Store · 400 m away",
    price: "₹220",
    art: (
      <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden>
        <path d="M50 26h20v14l14 14v46a6 6 0 0 1-6 6H42a6 6 0 0 1-6-6V54l14-14z" fill="#f2b134" />
        <path d="M50 26h20v14H50z" fill="#d9971f" />
        <rect x="44" y="62" width="32" height="26" rx="3" fill="#fff" opacity=".85" />
        <rect x="49" y="70" width="22" height="4" rx="2" fill="#8a5a1f" />
        <rect x="52" y="78" width="16" height="3" rx="1.5" fill="#b98a3c" />
      </svg>
    ),
  },
];

function Product({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <div className="flex-1 overflow-hidden rounded-[7px] border border-[#eceff3] bg-white">
      <div className="flex h-[104px] items-center justify-center bg-[#f1f3f6] p-2">
        {p.art}
      </div>
      <div className="p-2.5">
        <p className="text-[11px] font-medium leading-tight text-navy">
          {p.name}
        </p>
        <p className="mt-0.5 text-[10.5px] leading-tight text-muted">
          {p.variant}
        </p>
        <p className="mt-1.5 text-[11px] font-medium text-navy">{p.price}</p>
        <p className="mt-1 text-[10.5px] text-[#0f9d8a]">In stock</p>
      </div>
    </div>
  );
}

/** The agentic-commerce conversation: two bubbles, then the shopping panel. */
export default function AgenticChat() {
  return (
    <div className="mx-auto w-full max-w-[352px] space-y-[13px]">
      <div className="chat-step flex justify-end">
        <p className="max-w-[86%] rounded-[9px] bg-white/95 px-3.5 py-2.5 text-[12.5px] leading-[1.42] text-navy shadow-[0_1px_3px_rgba(20,20,43,0.07),0_8px_20px_rgba(20,20,43,0.05)]">
          We have run out of rice and cooking oil at home. Please order some.
        </p>
      </div>

      <div className="chat-step flex justify-start">
        <p className="max-w-[92%] rounded-[9px] bg-white/95 px-3.5 py-2.5 text-[12.5px] leading-[1.42] text-navy shadow-[0_1px_3px_rgba(20,20,43,0.07),0_8px_20px_rgba(20,20,43,0.05)]">
          Of course. The two you usually buy are in stock at a shop close to
          you. Here they are:
        </p>
      </div>

      <div className="chat-step rounded-[10px] bg-white p-2.5 shadow-[0_1px_3px_rgba(20,20,43,0.07),0_10px_26px_rgba(20,20,43,0.06)]">
        <div className="flex gap-2.5">
          {PRODUCTS.map((p) => (
            <Product key={p.name} p={p} />
          ))}
        </div>

        <button
          type="button"
          className="mt-2.5 w-full rounded-[7px] bg-[#e8f0fd] py-2.5 text-[12.5px] font-medium text-[#fc393a] transition-colors duration-150 hover:bg-[#ddeafc]"
        >
          Order now · ₹560
        </button>
      </div>
    </div>
  );
}
