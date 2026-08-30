import Image from "next/image";

/**
 * The brand band down the hero's right edge, in place of the old gradient
 * sculpture: a solid strip in the logo red with the wordmark running up it
 * on a loop.
 *
 * The track carries the run twice over and travels exactly -50%, so the
 * second copy arrives where the first started and the loop has no seam.
 * MARKS is sized so one copy is taller than the hero at any viewport, which
 * is what keeps a gap from opening at the bottom of the strip.
 */
const MARKS = 8;

export default function HeroRibbon() {
  return (
    <div className="hero-ribbon" aria-hidden>
      <div className="ribbon-track">
        {Array.from({ length: MARKS * 2 }, (_, i) => (
          <div
            key={i}
            className="flex h-[var(--ribbon-item)] w-full shrink-0 items-center justify-center"
          >
            <Image
              src="/aaruvo-logo.png"
              alt=""
              width={1918}
              height={479}
              className="w-[calc(var(--ribbon-item)*0.58)] max-w-none rotate-90 brightness-0 invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
