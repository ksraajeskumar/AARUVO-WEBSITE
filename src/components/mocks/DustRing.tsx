import { seeded } from "@/lib/rand";

type Dot = { x: number; y: number; r: number; o: number };

/** Two decimals is well past what the eye resolves, and it keeps the numbers
 *  React writes identical on the server and the client. */
const r2 = (n: number) => Math.round(n * 100) / 100;

/**
 * A ring of pink particle dust behind the agentic-commerce conversation.
 * Directions come from rejection sampling rather than sin/cos: sqrt is exactly
 * specified by IEEE-754, so the field hydrates byte-for-byte.
 */
const DOTS: Dot[][] = (() => {
  const rnd = seeded(0x51f3);
  const layers: Dot[][] = [[], [], []];
  let n = 0;

  while (n < 900) {
    const dx = rnd() * 2 - 1;
    const dy = rnd() * 2 - 1;
    const q = dx * dx + dy * dy;
    if (q > 1 || q < 0.04) continue;

    const inv = 1 / Math.sqrt(q);
    // Two samples approximate a bell curve around the ring radius.
    const rad = 224 + (rnd() + rnd() - 1) * 40;

    layers[n++ % 3].push({
      x: r2(300 + dx * inv * rad),
      y: r2(300 + dy * inv * rad * 0.98),
      r: r2(0.9 + rnd() * rnd() * 3),
      o: r2(0.5 + rnd() * 0.5),
    });
  }
  return layers;
})();

export default function DustRing() {
  return (
    <svg
      viewBox="0 0 600 600"
      className="h-full w-full"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient
          id="dust-grad"
          gradientUnits="userSpaceOnUse"
          cx="300"
          cy="300"
          r="300"
        >
          <stop offset="0%" stopColor="#f9a8d4" />
          <stop offset="62%" stopColor="#f0509f" />
          <stop offset="100%" stopColor="#fb7fc4" />
        </radialGradient>
      </defs>

      <g className="dust-spin">
        {DOTS.map((layer, li) => (
          <g key={li} className={`dust-layer dust-layer-${li}`}>
            {layer.map((d, i) => (
              <circle
                key={i}
                cx={d.x}
                cy={d.y}
                r={d.r}
                fill="url(#dust-grad)"
                opacity={d.o}
              />
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
}
