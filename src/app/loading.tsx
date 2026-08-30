/**
 * Route-transition fallback.
 *
 * Without this, clicking a nav link leaves the browser sitting on the old page
 * until the whole next route is ready — which reads as "nothing happened".
 * With it, Next wraps every page in a Suspense boundary, so the URL changes and
 * this paints immediately while the real page streams in behind it.
 *
 * The shape mirrors the top of every route (fixed header, indented hero, a
 * heading and a lead paragraph) so the swap to real content does not jump.
 */
export default function Loading() {
  return (
    <main className="min-h-screen bg-white pt-[var(--header-h)]" aria-busy>
      <span className="sr-only">Loading</span>

      <div className="px-[var(--hero-indent)] pt-[var(--hero-pt)]">
        <div className="skeleton h-[0.9em] w-[min(34%,320px)] rounded-full text-[length:var(--cust-body)]" />

        <div className="mt-[var(--hero-h1-mt)] space-y-[0.42em] text-[length:var(--h1-size)]">
          <div className="skeleton h-[0.82em] w-[min(76%,900px)] rounded-[8px]" />
          <div className="skeleton h-[0.82em] w-[min(52%,620px)] rounded-[8px]" />
        </div>

        <div className="mt-[var(--hero-h1-mt)] space-y-[0.5em] text-[length:var(--body-size)]">
          <div className="skeleton h-[0.8em] w-[min(64%,720px)] rounded-full" />
          <div className="skeleton h-[0.8em] w-[min(58%,660px)] rounded-full" />
          <div className="skeleton h-[0.8em] w-[min(40%,460px)] rounded-full" />
        </div>

        <div className="mt-[var(--hero-cta-mt)] flex flex-wrap gap-3">
          <div className="skeleton h-[clamp(38px,3.1vw,58px)] w-[clamp(120px,10vw,190px)] rounded-[6px]" />
          <div className="skeleton h-[clamp(38px,3.1vw,58px)] w-[clamp(96px,8vw,150px)] rounded-[6px]" />
        </div>

        <div className="mt-[var(--hero-pb)] grid gap-[clamp(16px,1.6vw,34px)] pb-[var(--hero-pb)] sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="skeleton h-[clamp(150px,14vw,260px)] rounded-[10px]"
            />
          ))}
        </div>
      </div>
    </main>
  );
}
