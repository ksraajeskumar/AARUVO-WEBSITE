/**
 * The rainbow band that cuts across the lower half of the partner hero.
 *
 * Two clipped layers: the first paints everything below the band's top edge
 * white, so the hero's tint stops at the band; the second is the band itself.
 * Both silhouettes use objectBoundingBox units, so they scale with the hero.
 *
 * The colour is a CSS gradient whose position animates, so the band holds
 * still while the light travels along it.
 */

/**
 * Top edge: a single straight diagonal, shared by both clips. The band's
 * lower-left lands exactly on the frame's bottom corner, so both ends run off
 * the edge on the diagonal rather than being sliced flat.
 */
const TOP =
  "M0,0.565 C0.25,0.439 0.50,0.313 0.75,0.187 C0.85,0.136 0.93,0.095 1,0.06";

export default function PartnerRibbon() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-[72%]"
      aria-hidden
    >
      <svg className="absolute h-0 w-0">
        <defs>
          <clipPath id="partner-ribbon-fill" clipPathUnits="objectBoundingBox">
            <path d={`${TOP} L1,1 L0,1 Z`} />
          </clipPath>
          <clipPath id="partner-ribbon" clipPathUnits="objectBoundingBox">
            <path
              d={`${TOP} L1,0.495 C0.93,0.530 0.85,0.571 0.75,0.622 C0.50,0.748 0.25,0.874 0,1.0 Z`}
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="absolute inset-0 bg-white"
        style={{ clipPath: "url(#partner-ribbon-fill)" }}
      />

      <div className="absolute inset-0" style={{ clipPath: "url(#partner-ribbon)" }}>
        <div
          className="ribbon-flow absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(96deg,#8fe6b8 0%,#63d0d8 8%,#8ed8f8 16%,#ffd166 26%,#fb9b3c 34%,#f4643c 42%,#ef4444 50%,#e8477e 58%,#c451c8 66%,#8b6cf0 74%,#6aa8f0 82%,#7fd8e8 90%,#ffd85e 100%)",
            backgroundSize: "132% 100%",
          }}
        />
        {/* soft shading across the band's thickness */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(172deg,rgba(255,255,255,0.40) 0%,rgba(255,255,255,0) 24%,rgba(255,255,255,0) 74%,rgba(255,255,255,0.28) 100%)",
          }}
        />
      </div>
    </div>
  );
}
