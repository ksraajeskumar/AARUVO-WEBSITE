import { seeded } from "@/lib/rand";

const r2 = (n: number) => Math.round(n * 100) / 100;

/**
 * The throughput ribbon. The viewBox matches the frame it is drawn into, so
 * nothing is cropped and the bundle the strands fan out of stays on screen.
 */
const LINES = (() => {
  const rnd = seeded(0x3e71);
  const out = [];
  const N = 64;

  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    // A little jitter keeps neighbouring strands from fusing into a slab.
    const j = (rnd() - 0.5) * 7;
    const sx = 44 + t * 10;
    const sy = 262 - t * 12;
    const c1x = 300 + t * 70;
    const c1y = 248 - t * 96 + j * 0.4;
    const c2x = 690 + t * 40;
    const c2y = 196 - t * 152 + j * 0.6;
    const ey = 196 - t * 168 + j;

    out.push({
      d: `M${r2(sx)} ${r2(sy)} C ${r2(c1x)} ${r2(c1y)}, ${r2(c2x)} ${r2(c2y)}, 1000 ${r2(ey)}`,
      o: r2(0.26 + t * 0.62),
      w: r2(0.8 + rnd() * 0.9),
      delay: `${r2(-i * 0.14)}s`,
    });
  }
  return out;
})();

export default function ScaleWave() {
  return (
    <svg
      viewBox="0 0 1000 290"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden
    >
      <defs>
        <linearGradient
          id="wave-grad"
          gradientUnits="userSpaceOnUse"
          x1="44"
          y1="266"
          x2="960"
          y2="40"
        >
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="14%" stopColor="#fb7185" />
          <stop offset="38%" stopColor="#e935c8" />
          <stop offset="62%" stopColor="#a855f7" />
          <stop offset="84%" stopColor="#7c6cf5" />
          <stop offset="100%" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <g className="wave-fan">
        {LINES.map((l) => (
          <path
            key={l.d}
            className="wave-line"
            d={l.d}
            fill="none"
            stroke="url(#wave-grad)"
            strokeWidth={l.w}
            opacity={l.o}
            style={{ animationDelay: l.delay }}
          />
        ))}
      </g>
    </svg>
  );
}
