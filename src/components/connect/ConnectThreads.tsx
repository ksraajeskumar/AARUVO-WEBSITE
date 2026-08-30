import Frame from "./Frame";

/**
 * The thread that runs under the What we do hero.
 *
 * One thread, laid the way a real one falls: the curve is a base wave plus two
 * harmonics so no two bends match, and the advance along x is modulated too,
 * which packs the turns tight and stretches the straights — the thing a plain
 * sine wave never does, and the reason three of them read as wallpaper.
 *
 * It is alive in two ways at once. The thread slides along its own axis, so
 * the words travel down it, and it lifts and settles on a slower clock, so the
 * whole line breathes. Both are one composited transform; there is no JS here.
 *
 * Every harmonic is an integer multiple of the base and the x modulation
 * shares its period, so the curve repeats exactly every wavelength. The slide
 * covers exactly that distance, which is what makes the loop seamless.
 */

const PHRASE = "SAY IT · WE FIND IT · WE FINISH IT · ";

/** Centre line and swing of the thread, in viewBox units. */
const MID = 260;
const AMP = 200;
/** How far the thread advances in x per wave. */
const WAVELENGTH = 1150;
/**
 * How much that advance itself swings. Below 1 the thread never doubles back
 * on itself; near 1 the turns pull tight, which is where it starts to look
 * like thread rather than a signal.
 */
const STRETCH = 0.7;
const X_PHASE = 0.9;
const PHASE = 0.6;
/** [multiple of the base frequency, its phase, its share of the swing] */
const HARMONICS: [number, number, number][] = [
  [2, 1.3, 0.3],
  [3, 4.1, 0.12],
];

/** Wide enough that the thread still covers the frame after it has slid. */
const X0 = -1900;
const X_MIN_END = 3200;
/** Samples per wave — fine enough that the polyline reads as a curve. */
const SAMPLES = 140;
/** Average glyph advance as a share of the font size, letter-spacing included. */
const CHAR_W = 0.66;
/** Type height against band thickness — the band follows the words, not the reverse. */
const TYPE_RATIO = 0.62;
/** The white gap the thread keeps around itself. */
const HALO = 16;

function thread() {
  const advance = WAVELENGTH / (2 * Math.PI);
  const stretch = advance * STRETCH;
  const spread = 1 + HARMONICS.reduce((sum, [, , h]) => sum + h, 0);
  const waves = Math.ceil((X_MIN_END - X0) / WAVELENGTH);
  const pts: [number, number][] = [];

  for (let i = 0; i <= waves * SAMPLES; i++) {
    const t = (2 * Math.PI * i) / SAMPLES;
    const swing =
      Math.sin(t + PHASE) +
      HARMONICS.reduce((sum, [k, p, h]) => sum + h * Math.sin(k * t + p), 0);
    pts.push([
      X0 + advance * t + stretch * Math.sin(t + X_PHASE),
      MID + (AMP * swing) / spread,
    ]);
  }

  let len = 0;
  for (let i = 1; i < pts.length; i++) {
    len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  }

  const d = pts
    .map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join("");

  // One run of the phrase per wave, sized to the length it has to fill, so
  // textLength only nudges the spacing. The band is then cut to suit the type.
  const size = len / waves / (PHRASE.length * CHAR_W);

  return {
    d,
    len,
    size,
    width: size / TYPE_RATIO,
    text: PHRASE.repeat(waves),
  };
}

const T = thread();

export default function ConnectThreads() {
  return (
    <Frame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pt-[clamp(40px,4.4vw,96px)]">
        <h2 className="max-w-[18ch] text-[length:var(--connect-h2)] font-bold leading-[1.1] tracking-[-0.035em] text-navy">
          One thread, from &ldquo;I need this&rdquo; to &ldquo;it&rsquo;s
          done&rdquo;.
        </h2>

        <p className="mt-[clamp(16px,1.6vw,34px)] max-w-[52ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Your request is not passed around and forgotten. The same thread runs
          through the shop, the rider and the follow-up call, so nothing falls
          between them and you never have to explain yourself twice.
        </p>

        <a
          href="#"
          className="group mt-[clamp(18px,1.8vw,38px)] inline-flex items-center gap-2 text-[length:var(--cust-body)] font-semibold text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
        >
          See how a request travels
          <svg
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-[3px]"
            aria-hidden
          >
            <path
              d="M5.5 2.5 11 8l-5.5 5.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <div className="threads mt-[clamp(28px,3vw,64px)]" aria-hidden>
        <svg viewBox="0 0 1320 520" preserveAspectRatio="xMidYMid slice">
          <defs>
            <path id="thread-run" d={T.d} />
          </defs>

          <g transform={`rotate(-3 660 ${MID})`}>
            <g
              className="thread-sway"
              style={
                {
                  "--sway": "14px",
                  "--sway-rot": "0.7deg",
                } as React.CSSProperties
              }
            >
              <g
                className="thread-drift"
                style={{ "--drift": `${-WAVELENGTH}px` } as React.CSSProperties}
              >
                <use
                  href="#thread-run"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={(T.width + HALO).toFixed(1)}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <use
                  href="#thread-run"
                  fill="none"
                  stroke="var(--color-brand)"
                  strokeWidth={T.width.toFixed(1)}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <text
                  className="thread-word"
                  fontSize={T.size.toFixed(1)}
                  dominantBaseline="central"
                >
                  <textPath href="#thread-run" textLength={T.len.toFixed(1)}>
                    {T.text}
                  </textPath>
                </text>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Frame>
  );
}
