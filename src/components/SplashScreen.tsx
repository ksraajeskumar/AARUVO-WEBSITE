"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/** Marks the splash as seen for the rest of this browser session. */
const KEY = "aaruvo-splash-seen";

/**
 * Taken once per page load, at module scope. React's dev-mode double-invoke
 * runs this effect twice; without this the second pass would read back the
 * flag the first pass just wrote and kill the card mid-animation.
 */
let decision: "play" | "skip" | null = null;

/**
 * The white opening card: the wordmark types itself in, one letter at a time,
 * then the whole thing lifts away.
 *
 * The reveal is a clip on the logo's own artwork rather than re-typed text, so
 * the letterforms are the real mark and not a font that happens to look close.
 * A `steps()` wipe is what makes it read as typing instead of a smooth swipe —
 * the mark is the icon plus six letters, hence seven steps.
 *
 * An inline script in the <head> stamps `splash-done` on <html> before first
 * paint when the session has already seen this, so returning visitors never
 * catch a frame of white.
 */
export default function SplashScreen() {
  const [done, setDone] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (decision === null) {
      let seen = false;
      try {
        seen = sessionStorage.getItem(KEY) === "1";
      } catch {
        // private mode or blocked storage — just play it
      }
      decision = seen ? "skip" : "play";

      if (!seen) {
        try {
          sessionStorage.setItem(KEY, "1");
        } catch {
          /* nothing to do */
        }
      }
    }

    if (decision === "skip") {
      // The inline guard has already hidden the card with CSS, so this only
      // takes the (invisible) node back out of the tree on the next tick.
      const t = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(t);
    }

    // hold the page still underneath while the card is up
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    )?.matches;

    const outAt = reduced ? 260 : 1450;
    const goneAt = outAt + (reduced ? 200 : 520);

    const t1 = setTimeout(() => setLeaving(true), outAt);
    const t2 = setTimeout(() => {
      setDone(true);
      document.body.style.overflow = prev;
    }, goneAt);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = prev;
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={`splash fixed inset-0 z-9999 flex items-center justify-center bg-white ${
        leaving ? "splash-out" : ""
      }`}
      role="status"
      aria-label="AARUVO"
    >
      {/* The row is held at the mark's finished width so the reveal is the only
          thing that moves — otherwise centring would slide the logo leftwards
          as it types. The mark is 1918x479, so width = height x 4.004. */}
      <span className="flex w-[clamp(172px,28.9vw,364px)] items-center">
        <span className="splash-type block shrink-0 overflow-hidden">
          <Image
            src="/aaruvo-logo.png"
            alt="AARUVO"
            width={1918}
            height={479}
            priority
            className="h-[clamp(40px,7vw,88px)] w-[clamp(160px,28.03vw,352px)] max-w-none"
          />
        </span>
        <span className="splash-caret ml-1.75 h-[clamp(34px,6vw,74px)] w-0.75 shrink-0 rounded-full bg-brand" />
      </span>
    </div>
  );
}
