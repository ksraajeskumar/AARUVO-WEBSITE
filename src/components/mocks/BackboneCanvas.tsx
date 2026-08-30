"use client";

import { useEffect, useRef } from "react";
import type { Rgb } from "@/lib/backboneThemes";
import { seeded } from "@/lib/rand";

const N = 240; // strands
const S = 34; // samples per strand
const W = 1000; // design space
const DH = 620; // design height, squashed to whatever the canvas allows

/** Per-strand constants, drawn once so every shape shares the same jitter. */
const J = (() => {
  const rnd = seeded(0x4b19);
  const a = new Float32Array(N);
  const b = new Float32Array(N);
  const c = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    a[i] = rnd();
    b[i] = rnd();
    c[i] = rnd();
  }
  return { a, b, c };
})();

/** Writes x, y and depth for every sample of every strand. */
type Fill = (out: Float32Array, time: number) => void;

/** 135+ : a dandelion of routes leaving one point. */
const burst: Fill = (out, time) => {
  const fx = 500;
  const fy = 600;
  for (let i = 0; i < N; i++) {
    const sway = Math.sin(time * 0.35 + J.a[i] * 6.3) * 0.022;
    const ang =
      -Math.PI + ((i + 0.5) / N) * Math.PI + (J.a[i] - 0.5) * 0.03 + sway;
    const lenN = J.b[i] * J.b[i];
    const len =
      (170 + lenN * 400) * (1 + 0.045 * Math.sin(time * 0.9 + J.c[i] * 6.3));
    const bow = (J.c[i] - 0.5) * 0.2;
    // Long, low strands read as the near ones, so they take the dark end.
    const depth =
      0.12 + 0.88 * (0.58 * lenN + 0.42 * (1 - Math.abs(Math.sin(ang))));

    for (let s = 0; s < S; s++) {
      const t = s / (S - 1);
      const a2 = ang + bow * Math.sin(Math.PI * t);
      const r = len * t;
      const o = (i * S + s) * 3;
      out[o] = fx + Math.cos(a2) * r * 1.15;
      out[o + 1] = fy + Math.sin(a2) * r;
      out[o + 2] = depth;
    }
  }
};

/** US$1.9tn : meridians running off one pole of a globe. */
const globe: Fill = (out, time) => {
  const cx = 500;
  const cy = 720;
  const R = 600;
  // Pole, plus an orthonormal pair spanning the plane it is normal to.
  const px = -0.343;
  const py = 0.643;
  const pz = 0.685;
  const ux = 0.894;
  const uy = 0.448;
  const uz = 0;
  const vx = py * uz - pz * uy;
  const vy = pz * ux - px * uz;
  const vz = px * uy - py * ux;

  for (let i = 0; i < N; i++) {
    // Jittered spacing and a wide spread of reaches keep evenly cut meridians
    // from moireing into a solid mesh, and leave the horizon ragged.
    const phi =
      ((i + 0.5) / N) * Math.PI * 2 + (J.a[i] - 0.5) * 0.09 + time * 0.075;
    const cf = Math.cos(phi);
    const sf = Math.sin(phi);
    const reach = 0.8 + J.b[i] * 1.85;

    for (let s = 0; s < S; s++) {
      const t = s / (S - 1);
      const th = t * reach;
      const ct = Math.cos(th);
      const stt = Math.sin(th);
      const qx = px * ct + (ux * cf + vx * sf) * stt;
      const qy = py * ct + (uy * cf + vy * sf) * stt;
      const qz = pz * ct + (uz * cf + vz * sf) * stt;
      const o = (i * S + s) * 3;
      out[o] = cx + qx * R;
      out[o + 1] = cy - qy * R;
      out[o + 2] = 0.5 + qz * 0.5;
    }
  }
};

/** 99.999% : a ribbon of uptime turning through depth. */
const ribbon: Fill = (out, time) => {
  for (let i = 0; i < N; i++) {
    const u = i / (N - 1);
    const ang = -0.55 + u * 2.25 * Math.PI + time * 0.22;
    const x3 = Math.cos(ang);
    const z3 = Math.sin(ang) * 0.52;
    const y3 = -0.55 + u * 1.1 + Math.sin(ang * 2) * 0.08;
    const persp = 1 / (1 + z3 * 0.28);
    const X = 500 + x3 * 380 * persp;
    const top = 205 - y3 * 168 * persp;
    const drop = 205 * persp;
    const depth = 0.5 + (z3 / 0.52) * 0.5;

    for (let s = 0; s < S; s++) {
      // Samples run bottom to top so the tip dot lands on the ribbon itself.
      const t = 1 - s / (S - 1);
      const o = (i * S + s) * 3;
      out[o] = X;
      out[o + 1] = top + t * drop;
      out[o + 2] = depth;
    }
  }
};

/** 200m+ : subscriptions funnelling through a single waist. */
const waist: Fill = (out, time) => {
  const wx = 500;
  const wy = 365;
  const M = N / 4;

  for (let i = 0; i < N; i++) {
    const quad = i % 4;
    const m = Math.floor(i / 4);
    const side = quad < 2 ? -1 : 1;
    const vert = quad % 2 === 0 ? 1 : -1;
    const k = (m + 0.5) / M;
    const ripple = Math.sin(time * 0.7 + k * 7 + quad) * 5;

    const sx = wx + side * 357;
    const sy = wy - vert * (45 + k * 320 + ripple);
    const c1x = sx - side * 210;
    const c1y = sy;
    const c2x = wx + side * 150;
    const c2y = wy - vert * 14;
    const depth = (1 - k) * (vert > 0 ? 1 : 0.62);

    for (let s = 0; s < S; s++) {
      const t = 1 - s / (S - 1); // tip dot at the outer end
      const n = 1 - t;
      const b0 = n * n * n;
      const b1 = 3 * n * n * t;
      const b2 = 3 * n * t * t;
      const b3 = t * t * t;
      const o = (i * S + s) * 3;
      out[o] = b0 * wx + b1 * c2x + b2 * c1x + b3 * sx;
      out[o + 1] = b0 * wy + b1 * c2y + b2 * c1y + b3 * sy;
      out[o + 2] = depth;
    }
  }
};

const SHAPES: Fill[] = [burst, globe, ribbon, waist];

const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
const mix = (a: number, b: number, t: number) => a + (b - a) * t;

/**
 * One canvas for all four figures. A shape change cross-fades sample by
 * sample between the old and the new form while both keep animating, so the
 * switch reads as the same strands rearranging rather than a hard cut.
 */
export default function BackboneCanvas({
  shape,
  ramp,
}: {
  shape: number;
  ramp: [Rgb, Rgb];
}) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const st = useRef({
    from: shape,
    to: shape,
    m: 1,
    rampFrom: ramp,
    rampTo: ramp,
    rm: 1,
  });

  useEffect(() => {
    const s = st.current;
    if (shape === s.to) return;
    s.from = s.m < 1 ? s.to : s.from;
    s.to = shape;
    s.m = 0;
  }, [shape]);

  useEffect(() => {
    const s = st.current;
    if (ramp === s.rampTo) return;
    s.rampFrom = s.rampTo;
    s.rampTo = ramp;
    s.rm = 0;
  }, [ramp]);

  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const bufA = new Float32Array(N * S * 3);
    const bufB = new Float32Array(N * S * 3);

    let dpr = 1;
    let cw = 0;
    let ch = 0;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = el.getBoundingClientRect();
      cw = r.width;
      ch = r.height;
      el.width = Math.round(r.width * dpr);
      el.height = Math.round(r.height * dpr);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(el);

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      const s = st.current;
      if (reduced) {
        s.m = 1;
        s.rm = 1;
      } else {
        s.m = Math.min(1, s.m + dt / 1.15);
        s.rm = Math.min(1, s.rm + dt / 0.7);
      }

      const time = reduced ? 0 : now / 1000;
      SHAPES[s.to](bufB, time);
      const morphing = s.m < 1;
      if (morphing) SHAPES[s.from](bufA, time);
      const e = ease(s.m);
      const re = ease(s.rm);

      const c00 = mix(s.rampFrom[0][0], s.rampTo[0][0], re);
      const c01 = mix(s.rampFrom[0][1], s.rampTo[0][1], re);
      const c02 = mix(s.rampFrom[0][2], s.rampTo[0][2], re);
      const c10 = mix(s.rampFrom[1][0], s.rampTo[1][0], re);
      const c11 = mix(s.rampFrom[1][1], s.rampTo[1][1], re);
      const c12 = mix(s.rampFrom[1][2], s.rampTo[1][2], re);

      // Width drives the scale so the figure always spans the section; the
      // extra vertical factor fits the full design height into a shorter band.
      const k = (cw / W) * dpr;
      const ky = (ch / DH) * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, el.width, el.height);
      ctx.setTransform(k, 0, 0, ky, 0, 0);
      ctx.lineCap = "round";
      ctx.lineWidth = 1.05;

      for (let i = 0; i < N; i++) {
        const base = i * S * 3;
        const tip = base + (S - 1) * 3 + 2;
        const d = morphing ? mix(bufA[tip], bufB[tip], e) : bufB[tip];

        const r = Math.round(mix(c00, c10, d));
        const g = Math.round(mix(c01, c11, d));
        const b = Math.round(mix(c02, c12, d));

        ctx.beginPath();
        let tipX = 0;
        let tipY = 0;
        for (let sm = 0; sm < S; sm++) {
          const o = base + sm * 3;
          const x = morphing ? mix(bufA[o], bufB[o], e) : bufB[o];
          const y = morphing ? mix(bufA[o + 1], bufB[o + 1], e) : bufB[o + 1];
          if (sm === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          tipX = x;
          tipY = y;
        }
        ctx.strokeStyle = `rgba(${r},${g},${b},${0.28 + d * 0.62})`;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(tipX, tipY, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${0.5 + d * 0.5})`;
        ctx.fill();
      }
    };

    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return <canvas ref={canvas} className="block h-full w-full" aria-hidden />;
}
