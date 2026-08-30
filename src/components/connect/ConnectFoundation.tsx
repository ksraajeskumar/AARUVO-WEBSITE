import Frame from "./Frame";

const STATS = [
  ["17,000+", "Platforms and marketplaces actively using Connect"],
  ["13+", "Years of AARUVO leading the embedded payments market"],
  ["11M+", "Active, onboarded accounts that get paid via Connect"],
  [
    "$1B+",
    "Payments processed by 104 different platforms on Connect over the last year",
  ],
];

export default function ConnectFoundation() {
  return (
    <Frame className="bg-white">
      <div className="px-[clamp(16px,1.7vw,34px)] pb-[clamp(30px,3vw,64px)] pt-[clamp(44px,4.6vw,100px)]">
        <p className="text-[length:var(--cust-body)] font-semibold text-[#fc393a]">
          Embed payments with confidence
        </p>

        <h2 className="mt-[clamp(16px,1.6vw,34px)] max-w-[22ch] text-[length:var(--connect-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
          Build a foundation for any business model
        </h2>

        <p className="mt-[clamp(16px,1.6vw,34px)] max-w-[62ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
          Connect is the best way to integrate AARUVO as a software platform,
          marketplace, or business that needs to orchestrate money movement across
          multiple parties.
        </p>
      </div>

      <div className="grid gap-x-[clamp(20px,2vw,40px)] gap-y-[clamp(28px,2.6vw,52px)] px-[clamp(16px,1.7vw,34px)] pb-[clamp(44px,4.6vw,100px)] pt-[clamp(20px,2.2vw,48px)] sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map(([n, label]) => (
          <div key={n} className="border-l-2 border-[#fc393a] pl-4">
            <p className="text-[length:var(--connect-stat)] font-bold leading-none tracking-[-0.03em] text-[#fc393a]">
              {n}
            </p>
            <p className="mt-[clamp(10px,1vw,20px)] max-w-[30ch] text-[length:var(--cust-body)] leading-[1.55] text-slate-body">
              {label}
            </p>
          </div>
        ))}
      </div>
    </Frame>
  );
}
