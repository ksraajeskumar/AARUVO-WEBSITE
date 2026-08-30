"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

const NAV = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Who we are", href: "/who-we-are" },
  { label: "Become a partner", href: "/become-a-partner" },
  { label: "Contact us", href: "/contact" },
];

/** Matches the section, so a nested route still lights up its top-level tab. */
function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Routes whose hero runs dark all the way under the transparent bar.
  const onDark = pathname === "/who-we-are" && !scrolled;

  // Transparent over the hero artwork; the bar only paints once the page moves.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-white/92 shadow-[0_4px_14px_rgba(50,50,93,0.09),0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="px-[var(--hero-indent)]">
        <div className="flex h-[var(--header-h)] items-center gap-[var(--nav-gap)]">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="AARUVO home"
          >
            <Image
              src="/aaruvo-logo.png"
              alt="AARUVO"
              width={1918}
              height={479}
              priority
              className={cn(
                "h-[var(--logo-size)] w-auto",
                onDark && "brightness-0 invert"
              )}
            />
          </Link>

          <nav className="hidden flex-1 items-center gap-[var(--nav-gap)] lg:flex">
            {NAV.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-2 text-[length:var(--nav-size)] transition-colors duration-200",
                    active ? "font-semibold" : "font-medium",
                    onDark
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-brand"
                        : "text-navy hover:text-brand"
                  )}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className={cn(
                        "absolute inset-x-0 -bottom-0.5 h-[2px] rounded-full",
                        onDark ? "bg-white" : "bg-brand"
                      )}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto hidden items-center gap-2.5 lg:flex">
            <a
              href="#"
              className={cn(
                "rounded-[6px] px-[clamp(14px,1.15vw,23px)] py-[clamp(9px,0.7vw,14px)] text-[length:var(--nav-size)] font-medium leading-none transition-colors duration-200",
                onDark
                  ? "border border-white/30 text-white hover:bg-white/10"
                  : "border border-brand/40 bg-white text-brand hover:bg-[#fff1f1]"
              )}
            >
              Sign in
            </a>
            <a
              href="#"
              className="group flex items-center gap-1.5 rounded-[6px] bg-brand px-[clamp(14px,1.15vw,23px)] py-[clamp(9px,0.7vw,14px)] text-[length:var(--nav-size)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              Talk to us
              <svg
                viewBox="0 0 16 16"
                className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[2px]"
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

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className={cn(
              "ml-auto flex h-10 w-10 items-center justify-center rounded-md lg:hidden",
              onDark ? "text-white" : "text-navy"
            )}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
              <path
                d={
                  mobileOpen ? "M5 5l14 14M19 5L5 19" : "M3 7h18M3 12h18M3 17h18"
                }
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-white shadow-[0_12px_30px_rgba(50,50,93,0.13)] lg:hidden"
          >
            <div className="px-[var(--hero-indent)] pb-5 pt-1">
              {NAV.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center justify-between border-b border-line/70 py-3 text-[16px] last:border-0",
                      active
                        ? "font-semibold text-brand"
                        : "font-medium text-navy"
                    )}
                  >
                    {item.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                    )}
                  </Link>
                );
              })}
              <div className="flex gap-2.5 pt-4">
                <a
                  href="#"
                  className="rounded-[6px] border border-[#ffd4d4] px-4 py-2.5 text-[14px] font-medium text-brand"
                >
                  Sign in
                </a>
                <a
                  href="#"
                  className="rounded-[6px] bg-brand px-4 py-2.5 text-[14px] font-semibold text-white"
                >
                  Talk to us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
