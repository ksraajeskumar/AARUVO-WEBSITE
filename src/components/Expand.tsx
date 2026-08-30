/**
 * The expand affordance in the top-right of every feature card. The solutions
 * cards sit on artwork and use the translucent white chip, the platform cards
 * the tinted one, and the embed card the solid brand one over its stripes.
 */
export default function Expand({
  tone = "light",
  onClick,
  label = "Expand",
}: {
  tone?: "light" | "tint" | "solid";
  onClick?: () => void;
  label?: string;
}) {
  const skin =
    tone === "tint"
      ? "rounded-[10px] bg-[#ffe9e9] text-[#fc393a] hover:bg-[#ffdcdc]"
      : tone === "solid"
        ? "rounded-[10px] bg-brand text-white hover:bg-brand-hover"
        : "rounded-lg bg-white/70 text-slate-body shadow-[0_1px_2px_rgba(50,50,93,0.10)] backdrop-blur hover:bg-white";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${label} — open details`}
      className={`flex h-9 w-9 shrink-0 items-center justify-center transition-all duration-200 hover:scale-[1.06] active:scale-95 ${skin}`}
    >
      <svg viewBox="0 0 24 24" className="h-[15px] w-[15px]" aria-hidden>
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 10V4h6" />
          <path d="M4 4l6.5 6.5" />
          <path d="M20 14v6h-6" />
          <path d="M20 20l-6.5-6.5" />
        </g>
      </svg>
    </button>
  );
}
