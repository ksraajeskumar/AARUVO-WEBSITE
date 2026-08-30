/** The partner page gutter plus the dashed three-column guides. */
export default function PFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative px-[var(--hero-indent)] ${className}`}>
      <div className="relative border-x border-dashed border-[#dfe6ee]">
        <div
          className="pointer-events-none absolute inset-0 hidden grid-cols-3 lg:grid"
          aria-hidden
        >
          {[0, 1].map((i) => (
            <div key={i} className="border-r border-dashed border-[#dfe6ee]" />
          ))}
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
