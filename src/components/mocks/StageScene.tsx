import { seeded } from "@/lib/rand";

const r2 = (n: number) => Math.round(n * 100) / 100;

/**
 * The fanned ribbons on the backdrop. Each band is a wedge between two curves
 * that share an origin behind the curtain and diverge across the right edge,
 * so the bands widen as they spread instead of staying hairline-thin.
 */
const BANDS = (() => {
  const out = [];
  const N = 16;
  // Control points sit well above the ends, so every band arcs up out of the
  // bundle before falling away to the right — the plume, not a starburst.
  const ey = (u: number) => r2(-70 + u * 720);
  const cy = (u: number) => r2(24 + u * 210);
  const sy = (u: number) => r2(302 + u * 42);

  for (let i = 0; i < N; i++) {
    const u0 = i / N;
    const u1 = u0 + 0.78 / N;
    out.push({
      edge: `M604 ${sy(u0)} Q1020 ${cy(u0)} 1580 ${ey(u0)}`,
      fill: `M604 ${sy(u0)} Q1020 ${cy(u0)} 1580 ${ey(u0)} L1580 ${ey(u1)} Q1020 ${cy(u1)} 604 ${sy(u1)} Z`,
      o: r2(0.95 - u0 * 0.2),
      delay: `${r2(-i * 0.46)}s`,
    });
  }
  return out;
})();

/** Heads and shoulders of the audience across the foreground. */
const CROWD = (() => {
  const rnd = seeded(0x7d31);
  const out = [];
  for (let i = 0; i < 74; i++) {
    const x = r2(-20 + rnd() * 1580);
    const y = r2(432 + rnd() * 74);
    out.push({ x, y, r: r2(15 + rnd() * 13) });
  }
  return out.sort((a, b) => a.y - b.y);
})();

export default function StageScene() {
  return (
    <svg
      viewBox="0 0 1540 500"
      className="stage-scene h-full w-full transition-transform duration-[900ms] ease-out"
      aria-hidden
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient
          id="band-grad"
          gradientUnits="userSpaceOnUse"
          x1="600"
          y1="470"
          x2="1620"
          y2="-60"
        >
          <stop offset="0%" stopColor="#4c1d95" />
          <stop offset="26%" stopColor="#7c3aed" />
          <stop offset="48%" stopColor="#a855f7" />
          <stop offset="66%" stopColor="#d946ef" />
          <stop offset="84%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>

        <linearGradient
          id="edge-grad"
          gradientUnits="userSpaceOnUse"
          x1="600"
          y1="470"
          x2="1620"
          y2="-60"
        >
          <stop offset="0%" stopColor="#c4b5fd" />
          <stop offset="55%" stopColor="#fde68a" />
          <stop offset="100%" stopColor="#fdba74" />
        </linearGradient>

        <linearGradient id="curtain" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="620" y2="0">
          <stop offset="0%" stopColor="#120a08" />
          <stop offset="60%" stopColor="#2a1710" />
          <stop offset="100%" stopColor="#120a12" />
        </linearGradient>

        <radialGradient id="stage-glow" gradientUnits="userSpaceOnUse" cx="1080" cy="250" r="620">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.30" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>

        <clipPath id="stage-clip">
          <rect width="1540" height="500" />
        </clipPath>
      </defs>

      <g clipPath="url(#stage-clip)">
        <rect width="1540" height="500" fill="#0b0510" />
        <rect width="620" height="500" fill="url(#curtain)" />

        <g className="band-fan">
          {BANDS.map((b) => (
            <g key={b.edge} className="band" style={{ animationDelay: b.delay }}>
              <path d={b.fill} fill="url(#band-grad)" opacity={b.o} />
              <path
                d={b.edge}
                fill="none"
                stroke="url(#edge-grad)"
                strokeWidth="1.6"
                opacity={r2(b.o * 0.85)}
              />
            </g>
          ))}
        </g>

        <rect width="1540" height="500" fill="url(#stage-glow)" />

        {/* stage deck */}
        <path d="M905 404h700v40H905z" fill="#141019" />
        <path d="M905 404h700v3H905z" fill="#4c3f63" opacity=".7" />

        {/* speaker */}
        <g>
          <ellipse cx="1231" cy="252" rx="13" ry="15" fill="#2a2028" />
          <path
            d="M1214 272c4-5 30-5 34 0 6 8 8 30 7 46h-48c-1-16 1-38 7-46z"
            fill="#5c626c"
          />
          <path d="M1212 292c-3 12-3 22-1 30l7-2c-1-9-1-18 1-26z" fill="#5c626c" />
          <path d="M1250 292c3 12 3 22 1 30l-7-2c1-9 1-18-1-26z" fill="#5c626c" />
          <path d="M1218 318h13v88h-13zM1233 318h13v88h-13z" fill="#1c2231" />
          <path d="M1214 402h18v6h-18zM1234 402h18v6h-18z" fill="#0d1017" />
        </g>

        {/* audience */}
        {CROWD.map((c, i) => (
          <g key={i}>
            <circle cx={c.x} cy={c.y} r={c.r} fill="#0a0610" />
            <ellipse
              cx={c.x}
              cy={c.y + c.r * 2.1}
              rx={c.r * 2}
              ry={c.r * 1.7}
              fill="#0a0610"
            />
          </g>
        ))}
      </g>
    </svg>
  );
}
