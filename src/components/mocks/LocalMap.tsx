import { seeded } from "@/lib/rand";

/**
 * The order on its way: a dotted map of the streets around you, the shop it
 * came from, your home, and the rider between them. Dots are laid on a
 * jittered grid inside the block shapes, so the neighbourhood reads as built
 * up without drawing a single building.
 */

const r2 = (n: number) => Math.round(n * 100) / 100;

/** City blocks the dots fill, as rotated rectangles in the 600x640 frame. */
const BLOCKS = [
  { x: 90, y: 120, w: 150, h: 110 },
  { x: 270, y: 90, w: 130, h: 130 },
  { x: 430, y: 130, w: 120, h: 100 },
  { x: 70, y: 260, w: 130, h: 120 },
  { x: 240, y: 250, w: 150, h: 140 },
  { x: 430, y: 270, w: 130, h: 110 },
  { x: 100, y: 420, w: 140, h: 120 },
  { x: 280, y: 420, w: 120, h: 130 },
  { x: 430, y: 410, w: 130, h: 120 },
];

type Dot = { x: number; y: number; r: number; o: number };

const LAYERS: Dot[][] = (() => {
  const rnd = seeded(0x5c21);
  const layers: Dot[][] = [[], [], []];
  let n = 0;

  for (const b of BLOCKS) {
    for (let gy = b.y; gy < b.y + b.h; gy += 8) {
      for (let gx = b.x; gx < b.x + b.w; gx += 8) {
        if (rnd() < 0.18) continue;
        layers[n++ % 3].push({
          x: r2(gx + (rnd() - 0.5) * 5),
          y: r2(gy + (rnd() - 0.5) * 5),
          r: r2(1 + rnd() * 1.5),
          o: r2(0.35 + rnd() * 0.5),
        });
      }
    }
  }
  return layers;
})();

/** Shop, two turns, then home. */
const ROUTE = "M182 470 L182 336 L330 336 L330 200 L470 200";

export default function LocalMap() {
  return (
    <div className="relative h-full w-full">
      <svg
        viewBox="0 0 600 640"
        className="h-full w-full"
        aria-hidden
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient
            id="map-grad"
            gradientUnits="userSpaceOnUse"
            x1="80"
            y1="560"
            x2="540"
            y2="90"
          >
            <stop offset="0%" stopColor="#ffb3a6" />
            <stop offset="42%" stopColor="#fc393a" />
            <stop offset="78%" stopColor="#e02a2b" />
            <stop offset="100%" stopColor="#8f1f20" />
          </linearGradient>
        </defs>

        <g className="globe-drift">
          {LAYERS.map((layer, li) => (
            <g key={li} className={`dust-layer dust-layer-${li}`}>
              {layer.map((d, i) => (
                <circle
                  key={i}
                  cx={d.x}
                  cy={d.y}
                  r={d.r}
                  fill="url(#map-grad)"
                  opacity={d.o}
                />
              ))}
            </g>
          ))}

          {/* the road the rider takes */}
          <path
            d={ROUTE}
            fill="none"
            stroke="#fc393a"
            strokeWidth="3"
            opacity="0.22"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="arc-comet"
            d={ROUTE}
            fill="none"
            stroke="#fc393a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              strokeDasharray: "54 460",
              animationDuration: "5s",
              ["--arc-len" as string]: "514",
            }}
          />

          {/* shop */}
          <g>
            <circle className="node-pulse" cx="182" cy="470" r="12" fill="none" stroke="#fc393a" strokeWidth="2" />
            <circle cx="182" cy="470" r="9" fill="#fff" />
            <circle cx="182" cy="470" r="9" fill="none" stroke="#fc393a" strokeWidth="3" />
          </g>
          {/* home */}
          <g>
            <circle cx="470" cy="200" r="14" fill="#060c17" />
            <path d="M463 202l7-7 7 7v8h-14z" fill="#fff" />
          </g>
        </g>
      </svg>

      <div className="pill-float absolute left-[46%] top-[13%] flex -translate-x-1/2 items-center gap-2 rounded-[9px] bg-white px-2.5 py-1.5 shadow-[0_2px_6px_rgba(20,20,43,0.10),0_10px_24px_rgba(20,20,43,0.08)]">
        <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-brand text-[10px] font-bold leading-none text-white">
          ₹
        </span>
        <span className="text-[12px] font-semibold leading-none text-navy">
          ₹532
        </span>
        <span className="text-[12px] leading-none text-muted">on the way</span>
      </div>

      <div className="absolute bottom-[8%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] leading-none shadow-[0_2px_6px_rgba(20,20,43,0.10)]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#0f9d8a]" />
        <span className="text-navy">Arriving in 12 minutes</span>
      </div>
    </div>
  );
}
