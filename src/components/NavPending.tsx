"use client";

import { useLinkStatus } from "next/link";

/**
 * Sits inside a header <Link> and fills a bar under it while that link's
 * navigation is in flight.
 *
 * loading.tsx already makes the transition instant once a route is prefetched.
 * This covers the gap before that: `next dev` does not prefetch at all, and on
 * a slow connection the prefetch can lose the race with the click. Either way
 * the user gets an answer on the same frame they press.
 */
export default function NavPending({ tone }: { tone: "light" | "dark" }) {
  const { pending } = useLinkStatus();

  if (!pending) return null;

  return (
    <span
      aria-hidden
      className={`nav-pending pointer-events-none absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full ${
        tone === "dark" ? "bg-white" : "bg-brand"
      }`}
    />
  );
}
