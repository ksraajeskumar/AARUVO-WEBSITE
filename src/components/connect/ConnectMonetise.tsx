import Frame from "./Frame";
import Quote from "./Quote";

const LINKS = [
  ["AARUVO guide", "How to monetise payments effectively"],
  ["AARUVO demo", "How to set and manage payments pricing"],
  ["AARUVO guide", "How to choose a monetisation strategy"],
  ["Tidemark report", "Vertical & SMB SaaS Benchmark Report"],
];

export default function ConnectMonetise() {
  return (
    <Frame className="bg-white">
      <div className="grid items-start gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)] lg:grid-cols-2">
        <div>
          <h3 className="max-w-[22ch] text-[length:var(--connect-sub)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
            Successfully monetise financial products
          </h3>

          <p className="mt-[clamp(16px,1.6vw,34px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            When you partner with AARUVO, you&apos;ll get access to tools,
            resources and experts that can help ensure you hit the most important
            metrics and goals for your business.
          </p>

          <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            Easily monetise every transaction on your platform with no-code
            pricing tools, margin reports and revenue-driving capabilities such as{" "}
            {["Terminal", "Instant Payouts"].map((l, i) => (
              <span key={l}>
                <a
                  href="#"
                  className="text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
                >
                  {l}
                </a>
                {i === 0 ? ", " : " "}
              </span>
            ))}
            and{" "}
            <a
              href="#"
              className="text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
            >
              Capital
            </a>
            .
          </p>

          <ul className="mt-[clamp(20px,2vw,44px)] space-y-[0.85em] text-[length:var(--cust-lead)]">
            {LINKS.map(([tag, text]) => (
              <li key={text} className="flex gap-2.5 leading-[1.5]">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-[0.28em] h-[1.05em] w-[1.05em] shrink-0"
                  aria-hidden
                >
                  <circle cx="10" cy="10" r="10" fill="#ffe4e4" />
                  <path
                    d="M5.6 10.4 8.6 13.4 14.4 6.8"
                    fill="none"
                    stroke="#fc393a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-slate-body">
                  <a
                    href="#"
                    className="font-semibold text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
                  >
                    {tag}
                  </a>
                  : {text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <Quote
          img="/aaruvo-kirana.png"
          tint="linear-gradient(180deg,rgba(252,57,58,0.62) 0%,rgba(224,42,43,0.86) 55%,rgba(180,28,30,0.94) 100%)"
          logo={
            <span className="flex items-center gap-3 text-white">
              <svg viewBox="0 0 40 44" className="h-[3.2em] w-[2.9em]" aria-hidden>
                <path d="M31 8 25 6l-4-4-3 1-2 3-9 2-5 32 22 4 16-3z" fill="#fff" />
                <path
                  d="M23 18c-1.6-.9-3-1.1-4-.6-1.4.7-1.2 2.2.4 2.9 2.2 1 3.4 2.3 3.2 4.2-.3 2.6-3 3.7-5.8 2.7l.6-2.6c1.5.8 3 .9 3.2-.3.1-.9-.8-1.4-2.2-2.1-2-1-3-2.4-2.6-4.4.5-2.6 3.2-3.9 6.4-2.7z"
                  fill="#6a9a5b"
                />
              </svg>
              <span className="text-[length:var(--connect-sub)] font-bold tracking-[-0.03em]">
                Grocery
              </span>
            </span>
          }
          quote="We've partnered with AARUVO for more than a decade to create a more fair and even playing field for our shops. AARUVO is excellent at making the complexity of money go away, being resilient, having fantastic uptime, and creating beautiful APIs."
          name="Kaz Nejatian"
          role="VP Product & Chief Operating Officer"
        />
      </div>
    </Frame>
  );
}
