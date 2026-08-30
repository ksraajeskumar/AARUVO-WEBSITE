/**
 * Five evenly spaced rows, symmetric about the centre line. AARUVO sits on the
 * same row as the marketplace and the pipeline, which is what makes the graph
 * read as one bus rather than a scatter of boxes.
 */
const NODES = [
  { id: "crm", label: "CRM", x: 28, y: 12 },
  { id: "booking", label: "Booking system", x: 72, y: 12 },
  { id: "sdk", label: "SDK", x: 32, y: 32 },
  { id: "events", label: "Event Destinations", x: 68, y: 32 },
  { id: "market", label: "App Marketplace", x: 27, y: 52, ext: true },
  { id: "pipeline", label: "Data Pipeline", x: 73, y: 52 },
  { id: "orch", label: "Orchestration", x: 50, y: 74 },
];

/** Ghost boxes share the rows of the real ones, as in the reference. */
const GHOSTS = [
  { x: 10, y: 12, w: 8 },
  { x: 48, y: 12, w: 14 },
  { x: 38, y: 94, w: 6 },
  { x: 46, y: 94, w: 6 },
  { x: 54, y: 94, w: 6 },
  { x: 62, y: 94, w: 6 },
];

/**
 * Connectors run node-centre to node-centre and pass under the boxes, so the
 * ends are always covered however the labels are sized. Each carries a pulse.
 */
const WIRES = [
  { d: "M6 52 L27 52", dur: "2.9s", delay: ".7s" },
  { d: "M27 52 L50 52", dur: "2.3s", delay: ".5s" },
  { d: "M50 52 L73 52", dur: "2.5s", delay: ".1s" },
  { d: "M73 52 L95 52", dur: "3.2s", delay: ".4s" },
  { d: "M50 52 L32 32", dur: "2.2s", delay: ".3s" },
  { d: "M50 52 L68 32", dur: "2.4s", delay: ".6s" },
  { d: "M32 32 L28 12", dur: "2.8s", delay: ".2s" },
  { d: "M68 32 L72 12", dur: "3s", delay: ".9s" },
  { d: "M50 52 L50 74", dur: "2.6s", delay: "0s" },
];

function Box({
  label,
  x,
  y,
  ext,
}: {
  label: string;
  x: number;
  y: number;
  ext?: boolean;
}) {
  return (
    <span
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center gap-[0.5cqw] whitespace-nowrap rounded-[0.4cqw] border border-[#3d3fa8] px-[1.3cqw] py-[0.7cqw] text-[1.35cqw] font-medium leading-none text-white"
      style={{ left: `${x}%`, top: `${y}%`, background: "#232a72" }}
    >
      {label}
      {ext && (
        <svg viewBox="0 0 12 12" className="h-[1cqw] w-[1cqw]" aria-hidden>
          <path
            d="M4 2h6v6M10 2 4.5 7.5M8 10H2V4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </span>
  );
}

/** The payment-method tile cluster on the left of the reference diagram. */
const TILES = [
  { bg: "#f5b301", mark: "€" },
  { bg: "#1a73e8", mark: "pay" },
  { bg: "#f2f4f8", mark: "◎", dark: true },
  { bg: "#e8442e", mark: "b" },
  { bg: "#101418", mark: "◍" },
  { bg: "#e02020", mark: "▲" },
];

export default function SystemsDiagram() {
  return (
    <div className="@container relative mx-auto aspect-[1000/440] w-full max-w-[860px]">
      {/* wires */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        {WIRES.map((w) => (
          <g key={w.d}>
            <path d={w.d} fill="none" stroke="#3a3f96" strokeWidth="0.28" />
            <path
              className="wire-pulse"
              d={w.d}
              fill="none"
              stroke="#8ea2ff"
              strokeWidth="0.55"
              strokeLinecap="round"
              strokeDasharray="4 60"
              style={{ animationDuration: w.dur, animationDelay: w.delay }}
            />
          </g>
        ))}
      </svg>

      {GHOSTS.map((g, i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-[0.35cqw] border border-dashed border-[#3a3f96]"
          style={{
            left: `${g.x}%`,
            top: `${g.y}%`,
            width: `${g.w}%`,
            height: "9%",
          }}
        />
      ))}

      {NODES.map((n) => (
        <Box key={n.id} {...n} />
      ))}

      {/* stripe */}
      <span className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-[0.45cqw] border border-[#5b62d8] bg-[#2c3496] px-[1.8cqw] py-[1.1cqw] text-[1.5cqw] font-semibold leading-none text-white">
        aaruvo
      </span>

      {/* payment-method tiles */}
      <div className="absolute left-[6%] top-[52%] z-10 grid -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-[0.5cqw]">
        {TILES.map((t, i) => (
          <span
            key={i}
            className="flex h-[3cqw] w-[3cqw] items-center justify-center rounded-[0.4cqw] text-[1.2cqw] font-bold leading-none"
            style={{ background: t.bg, color: t.dark ? "#060c17" : "#fff" }}
          >
            {t.mark}
          </span>
        ))}
      </div>

      {/* far-right endpoint */}
      <span className="absolute left-[95%] top-[52%] z-10 flex h-[3.4cqw] w-[3.4cqw] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[0.4cqw] bg-[#f5b301] text-[1.3cqw] font-bold leading-none text-white">
        ▤
      </span>
    </div>
  );
}
