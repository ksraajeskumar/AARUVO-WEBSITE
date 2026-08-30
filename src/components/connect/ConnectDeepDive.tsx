import RiskMock from "../shared/RiskMock";
import Frame from "./Frame";

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" className="h-3 w-3" aria-hidden>
      <path
        d="M5.5 2.5 11 8l-5.5 5.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ConnectDeepDive() {
  return (
    <>
      <Frame className="bg-white">
        <div className="px-[clamp(16px,1.7vw,34px)] py-[clamp(44px,4.6vw,100px)]">
          <p className="text-[length:var(--cust-body)] font-semibold text-[#fc393a]">
            Under the hood
          </p>
          <h3 className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--connect-sub)] font-bold leading-[1.2] tracking-[-0.025em] text-navy">
            A deep dive into Connect
          </h3>
          <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[44ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            A fully integrated solution for offering payments and financial
            services to your users.
          </p>

          <div className="mt-[clamp(18px,1.8vw,38px)] flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-full bg-[#fc393a] px-[clamp(16px,1.35vw,27px)] py-[clamp(10px,0.85vw,17px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#e02a2b]"
            >
              See all features
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-[length:var(--cust-body)] font-medium text-[#fc393a] transition-colors duration-200 hover:text-[#e02a2b]"
            >
              Explore the docs
              <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                <Chevron />
              </span>
            </a>
          </div>
        </div>
      </Frame>

      <Frame className="bg-[#f6f9fc]">
        <div className="px-[clamp(16px,1.7vw,34px)] py-[clamp(30px,3vw,64px)]">
          <div className="grid items-center gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] rounded-[10px] bg-white p-[clamp(20px,2.4vw,52px)] shadow-[0_1px_3px_rgba(20,20,43,0.06),0_18px_46px_rgba(20,20,43,0.08)] lg:grid-cols-2">
            <div>
              <h4 className="max-w-[20ch] text-[length:var(--connect-card-h)] font-bold leading-[1.22] tracking-[-0.025em] text-navy">
                AI-powered risk management for your platform
              </h4>
              <p className="mt-[clamp(12px,1.2vw,26px)] max-w-[44ch] text-[length:var(--cust-body)] leading-[1.6] text-slate-body">
                Help protect your platform from financial risk. Use{" "}
                <a href="#" className="text-[#fc393a] hover:text-[#e02a2b]">
                  Radar
                </a>{" "}
                for AI-powered fraud detection you control, or let AARUVO manage
                risk on your behalf with{" "}
                <a href="#" className="text-[#fc393a] hover:text-[#e02a2b]">
                  Managed Risk
                </a>
                .
              </p>
              <a
                href="#"
                className="group mt-[clamp(14px,1.4vw,30px)] inline-flex items-center gap-2 rounded-full bg-[#fc393a] px-[clamp(16px,1.35vw,27px)] py-[clamp(10px,0.85vw,17px)] text-[length:var(--cust-body)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-[#e02a2b]"
              >
                Get started
                <span className="transition-transform duration-200 group-hover:translate-x-[3px]">
                  <Chevron />
                </span>
              </a>
            </div>

            <RiskMock />
          </div>
        </div>
      </Frame>
    </>
  );
}
