import Frame from "./Frame";
import Quote from "./Quote";

type Part = string | { link: string };

const ITEMS: Part[][] = [
  ["Identity verifications"],
  [{ link: "identity checks" }, " and ", { link: "AML" }, " checks for individuals and businesses"],
  ["Sanctions screening"],
  ["MATCH list checks"],
  ["Secure credit card data tokenization for ", { link: "PCI compliance" }],
  ["Money transmitter licence (MTL) in the US"],
  ["Electronic money institution (EMI) licence in the EU"],
];

export default function ConnectCompliance() {
  return (
    <Frame className="bg-white">
      <div className="grid items-start gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)] lg:grid-cols-2">
        <div>
          <p className="text-[length:var(--cust-body)] font-semibold text-[#0aa6b8]">
            Security and compliance
          </p>
          <h3 className="mt-[clamp(14px,1.4vw,30px)] max-w-[18ch] text-[length:var(--connect-sub)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
            Safe to use, every single time
          </h3>

          <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[46ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            Paying out money is complicated by stringent regulations that vary by
            country. Connect shifts payment obligations from you to AARUVO. Under
            the hood, Connect tokenises card data to help with PCI compliance;
            manages identity verifications, identity checks, and sanctions checks while
            sign-up your users to Connect; leverages AARUVO&rsquo;s licences
            around the world; and more.
          </p>

          <ul className="mt-[clamp(20px,2vw,44px)] space-y-[0.7em] text-[length:var(--cust-body)]">
            {ITEMS.map((parts, i) => (
              <li key={i} className="flex gap-2.5 leading-[1.5]">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-[0.2em] h-[1.05em] w-[1.05em] shrink-0"
                  aria-hidden
                >
                  <circle cx="10" cy="10" r="10" fill="#d6f4f7" />
                  <path
                    d="M5.6 10.4 8.6 13.4 14.4 6.8"
                    fill="none"
                    stroke="#0aa6b8"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-slate-body">
                  {parts.map((p, k) =>
                    typeof p === "string" ? (
                      <span key={k}>{p}</span>
                    ) : (
                      <a
                        key={k}
                        href="#"
                        className="font-medium text-[#0aa6b8] transition-colors duration-200 hover:text-[#08808f]"
                      >
                        {p.link}
                      </a>
                    )
                  )}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="#"
            className="group mt-[clamp(16px,1.6vw,34px)] inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-[#0aa6b8] transition-colors duration-200 hover:text-[#08808f]"
          >
            See all features
            <svg
              viewBox="0 0 16 16"
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-[3px]"
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

        <Quote
          img="/aaruvo-help.svg"
          tint="linear-gradient(180deg,rgba(6,12,23,0.62) 0%,rgba(6,12,23,0.84) 55%,rgba(6,12,23,0.93) 100%)"
          logo={
            <span className="text-[length:var(--connect-sub)] font-medium italic tracking-[-0.02em] text-white">
              we<span className="font-semibold">travel</span>
            </span>
          }
          quote="Connect allows us to achieve compliance with minimal effort, spend practically no time on payments-related customer support, and keep the user experience on our platform. And, it's reassuring to know that when we're expanding to a new country, AARUVO will be ready for us."
          name="Sample name"
          role="Chief Product Officer and Co-founder"
        />
      </div>
    </Frame>
  );
}
