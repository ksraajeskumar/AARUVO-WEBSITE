/** The page gutter plus the dashed four-column guides the reference draws. */
export default function Frame({
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
          className="pointer-events-none absolute inset-0 hidden grid-cols-4 lg:grid"
          aria-hidden
        >
          {[0, 1, 2].map((i) => (
            <div key={i} className="border-r border-dashed border-[#dfe6ee]" />
          ))}
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}
