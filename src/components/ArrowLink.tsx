/** The brand-coloured "View services ›" link used across the lower sections. */
export default function ArrowLink({
  children,
  arrow = "chevron",
  className = "",
}: {
  children: React.ReactNode;
  arrow?: "chevron" | "long";
  className?: string;
}) {
  return (
    <a
      href="#"
      className={`group inline-flex items-center gap-1.5 text-[length:var(--cust-small)] font-medium leading-none text-brand transition-colors duration-200 hover:text-brand-hover ${className}`}
    >
      {children}
      <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
        {arrow === "long" ? (
          <svg viewBox="0 0 20 12" className="h-2.5 w-4" aria-hidden>
            <path
              d="M1 6h17m0 0-5-4.5M18 6l-5 4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
            <path
              d="M5.5 2.5 11 8l-5.5 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </a>
  );
}
