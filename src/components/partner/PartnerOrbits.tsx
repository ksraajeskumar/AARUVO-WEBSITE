/**
 * The partner cluster: three concentric rings that turn in alternating
 * directions. Each badge counter-rotates at its ring's own speed, so the
 * logos stay upright while the rings spin.
 */

type Badge = {
  id: string;
  /** angle on the ring, in degrees */
  a: number;
  /** badge diameter as a share of the frame */
  s: number;
  bg: string;
  node: React.ReactNode;
};

const RING_1: Badge[] = [
  {
    id: "grocery",
    a: 22,
    s: 13,
    bg: "#fc393a",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Grocery</span>,
  },
  {
    id: "vegetables",
    a: 118,
    s: 13,
    bg: "#4c9a4a",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Vegetables</span>,
  },
  {
    id: "bakery",
    a: 214,
    s: 13,
    bg: "#f5b301",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#12100c" }}>Bakery</span>,
  },
  {
    id: "tailor",
    a: 302,
    s: 13,
    bg: "#3f7fd8",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Tailor</span>,
  },
];

const RING_2: Badge[] = [
  {
    id: "mobile-shop",
    a: 12,
    s: 13,
    bg: "#060c17",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Mobile shop</span>,
  },
  {
    id: "pharmacy",
    a: 84,
    s: 13,
    bg: "#0f9d8a",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Pharmacy</span>,
  },
  {
    id: "stationery",
    a: 168,
    s: 13,
    bg: "#ffffff",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#2d2d2d" }}>Stationery</span>,
  },
  {
    id: "sweets",
    a: 236,
    s: 13,
    bg: "#ef6a9e",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Sweets</span>,
  },
  {
    id: "hardware",
    a: 300,
    s: 13,
    bg: "#8a5433",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Hardware</span>,
  },
];

const RING_3: Badge[] = [
  {
    id: "dairy",
    a: 44,
    s: 12,
    bg: "#ffffff",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#2d2d2d" }}>Dairy</span>,
  },
  {
    id: "flowers",
    a: 100,
    s: 12,
    bg: "#8a5cd8",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Flowers</span>,
  },
  {
    id: "fish-and-meat",
    a: 156,
    s: 12,
    bg: "#e8663c",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Fish & meat</span>,
  },
  {
    id: "clothes",
    a: 214,
    s: 12,
    bg: "#b9784a",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Clothes</span>,
  },
  {
    id: "electronics",
    a: 272,
    s: 12,
    bg: "#2b3b52",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#fff" }}>Electronics</span>,
  },
  {
    id: "provision",
    a: 332,
    s: 12,
    bg: "#ffb347",
    node: <span className="text-[0.17em] font-semibold" style={{ color: "#12100c" }}>Provision</span>,
  },
];

const RINGS: { badges: Badge[]; r: number; dur: string; cw: boolean }[] = [
  { badges: RING_1, r: 14, dur: "38s", cw: true },
  { badges: RING_2, r: 28, dur: "52s", cw: false },
  { badges: RING_3, r: 42, dur: "66s", cw: true },
];

export default function PartnerOrbits() {
  return (
    <div className="orbit-frame relative aspect-square w-full" aria-hidden>
      {RINGS.map((ring, i) => (
        <div
          key={i}
          className={`absolute inset-0 ${ring.cw ? "orbit-cw" : "orbit-ccw"}`}
          style={{ animationDuration: ring.dur }}
        >
          {ring.badges.map((bd) => (
            <span
              key={bd.id}
              className="absolute left-1/2 top-1/2 flex items-center justify-center rounded-full shadow-[0_6px_18px_rgba(20,20,43,0.10),0_20px_46px_rgba(20,20,43,0.10)]"
              style={{
                width: `${bd.s}%`,
                height: `${bd.s}%`,
                background: bd.bg,
                transform: `translate(-50%,-50%) rotate(${bd.a}deg) translate(${ring.r}cqw) rotate(${-bd.a}deg)`,
              }}
            >
              {/* undoes the ring's spin so the wordmark stays level */}
              {/* font-size tracks the badge diameter, so the em sizes inside
                  each mark scale with the badge rather than the frame */}
              <span
                className={`flex h-full w-full items-center justify-center ${
                  ring.cw ? "orbit-ccw" : "orbit-cw"
                }`}
                style={{ animationDuration: ring.dur, fontSize: `${bd.s}cqw` }}
              >
                {bd.node}
              </span>
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}
