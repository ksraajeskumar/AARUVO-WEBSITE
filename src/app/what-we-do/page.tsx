import type { Metadata } from "next";
import ConnectAccept from "@/components/connect/ConnectAccept";
import ConnectCards from "@/components/connect/ConnectCards";
import ConnectCompliance from "@/components/connect/ConnectCompliance";
import ConnectDeepDive from "@/components/connect/ConnectDeepDive";
import ConnectFunds from "@/components/connect/ConnectFunds";
import ConnectMonetise from "@/components/connect/ConnectMonetise";
import ConnectScale from "@/components/connect/ConnectScale";
import ConnectSolutions from "@/components/connect/ConnectSolutions";
import ConnectThreads from "@/components/connect/ConnectThreads";
import ConnectFeatures from "@/components/connect/ConnectFeatures";
import ConnectFoundation from "@/components/connect/ConnectFoundation";
import ConnectLogos from "@/components/connect/ConnectLogos";
import Frame from "@/components/connect/Frame";
import PhoneStage from "@/components/connect/PhoneStage";

export const metadata: Metadata = {
  title: "What AARUVO does — AARUVO",
  description:
    "Say what you need. We find it in shops near you, deliver it, and stay with you until the job is done.",
};

const SUBNAV = [
  { label: "How it works", active: true },
  { label: "For homes", active: false },
  { label: "For shops", active: false },
  { label: "Prices", active: false },
  { label: "Help", active: false },
];

export default function WhatWeDo() {
  return (
    <main className="min-h-screen bg-[#f6f9fc] pt-[var(--header-h)]">
      <Frame className="bg-[#f6f9fc]">
          <div className="flex flex-wrap items-center gap-x-[clamp(18px,2.2vw,44px)] gap-y-3 px-[clamp(16px,1.7vw,34px)] py-[clamp(14px,1.3vw,26px)]">
            <span className="flex items-center gap-3">
              <a
                href="#"
                className="text-[length:var(--cust-lead)] font-medium tracking-[-0.015em] text-[#fc393a]"
              >
                How AARUVO works
              </a>
              <span className="rounded-[6px] bg-[#e9edf2] px-2.5 py-1 text-[length:var(--cust-small)] font-medium leading-none text-slate-body">
                Free to use
              </span>
            </span>

            <nav className="ml-auto flex flex-wrap items-center gap-x-[clamp(14px,1.7vw,34px)] gap-y-2 text-[length:var(--cust-body)] font-medium">
              {SUBNAV.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className={
                    s.active
                      ? "text-navy"
                      : "text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
                  }
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(32px,4vw,80px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(48px,5vw,110px)] pt-[clamp(28px,3.4vw,74px)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <div>
              <h1 className="max-w-[13ch] text-[length:var(--connect-h1)] font-bold leading-[1.08] tracking-[-0.035em] text-navy">
                Say it once. We take care of the rest.
              </h1>

              <p className="mt-[clamp(22px,2.2vw,46px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
                Press the mic and speak in your own words. AARUVO understands
                what you are trying to do, finds the items in shops close to you,
                shows you the full price before you pay, and stays with you after
                delivery until the job is actually finished.
              </p>

              <a
                href="#"
                className="group mt-[clamp(22px,2.2vw,46px)] inline-flex items-center gap-2 rounded-[8px] bg-[#fc393a] px-[clamp(16px,1.35vw,27px)] py-[clamp(11px,0.95vw,19px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#e02a2b]"
              >
                Start now
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

            <PhoneStage />
          </div>
      </Frame>

      <ConnectThreads />
      <ConnectLogos />
      <ConnectFoundation />
      <ConnectCards />
      <ConnectFeatures />
      <ConnectAccept />
      <ConnectMonetise />
      <ConnectFunds />
      <ConnectScale />
      <ConnectCompliance />
      <ConnectSolutions />
      <ConnectDeepDive />
    </main>
  );
}
