import Image from "next/image";
import ArrowLink from "./ArrowLink";

const COLUMNS: { title: string; links: string[] }[][] = [
  [
    {
      title: "What you can buy",
      links: [
        "Grocery", "Fruits and vegetables", "Milk and dairy", "Bakery",
        "Snacks and drinks", "Cooking ingredients", "Ready to cook",
        "Mobiles and chargers", "Home electronics", "Small appliances",
        "Men's clothing", "Women's clothing", "Kids' clothing", "Footwear",
        "Bags and accessories", "Home and kitchen", "Cleaning supplies",
        "Beauty and personal care", "Books and stationery", "Wholesale and bulk",
      ],
    },
  ],
  [
    {
      title: "How AARUVO helps",
      links: [
        "Shop by talking", "Read the screen aloud", "Shop in Tamil or English",
        "Search with a photo", "Compare two products", "Stay inside a budget",
        "Plan a meal or a task", "Buy from shops near you",
        "Set up monthly items", "Get help after delivery",
      ],
    },
    {
      title: "Good to know",
      links: [
        "How payment works", "Why we do not take cash", "Delivery and tracking",
        "If an item is missing", "Returns and exchanges", "Prices and charges",
      ],
    },
  ],
  [
    {
      title: "For shop owners",
      links: [
        "List your shop", "Add items by talking", "Get orders nearby",
        "Get paid to your bank", "Wholesale selling", "Help for shop owners",
      ],
    },
    {
      title: "Company",
      links: [
        "About AARUVO", "Careers", "Contact us", "Privacy", "Terms",
        "Your data and choices",
      ],
    },
  ],
  [
    {
      title: "Help",
      links: ["Talk to a person", "Common questions", "Report a problem"],
    },
    {
      title: "Languages",
      links: ["Tamil", "English", "Tanglish", "More coming soon"],
    },
  ],
];

const ASIDES = [
  {
    icon: "tag",
    lead: "No hidden charges",
    body: "You see the price of every item and every charge before you pay.",
    cta: "How pricing works",
  },
  {
    icon: "build",
    lead: "Own a shop?",
    body: "List your shop and start taking orders from people near you.",
    cta: "Sell on AARUVO",
  },
];

function Glyph({ kind }: { kind: string }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <span className="flex h-[1.9em] w-[1.9em] items-center justify-center rounded-[6px] bg-[#ffe9e9] text-brand">
      <svg viewBox="0 0 20 20" className="h-[0.95em] w-[0.95em]" aria-hidden>
        {kind === "tag" ? (
          <g {...s}>
            <path d="M9.6 2.6H16a1.4 1.4 0 0 1 1.4 1.4v6.4l-7 7-7.8-7.8z" />
            <path d="M13.4 6.6h.01" />
          </g>
        ) : (
          <g {...s}>
            <rect x="3" y="3" width="14" height="14" rx="2.4" />
            <path d="M7 10.6 9.2 12.8 13 8.4" />
          </g>
        )}
      </svg>
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="mt-[var(--sec-mt)] bg-[#f6f9fc]">
      <div className="w-full px-[var(--hero-indent)]">
        <div className="grid gap-x-[clamp(24px,3vw,60px)] gap-y-10 py-[clamp(30px,2.8vw,56px)] lg:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <h2 className="text-[length:var(--cust-lead)] font-medium leading-[1.3] tracking-[-0.015em] text-navy">
              Ready to try it?
            </h2>
            <p className="mt-[clamp(8px,0.8vw,16px)] max-w-[42ch] text-[length:var(--cust-body)] leading-[1.55] text-slate-body">
              Open AARUVO, say what you need, and see how far you get. If you
              get stuck, we are one message away.
            </p>
            <a
              href="#"
              className="group mt-[clamp(14px,1.3vw,26px)] inline-flex items-center gap-1.5 rounded-[4px] bg-brand px-[clamp(12px,1vw,20px)] py-[clamp(8px,0.62vw,13px)] text-[length:var(--cust-small)] font-semibold leading-none text-white transition-colors duration-200 hover:bg-brand-hover"
            >
              Talk to us
              <span className="transition-transform duration-200 group-hover:translate-x-[2px]">
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
              </span>
            </a>
          </div>

          {ASIDES.map((a) => (
            <div key={a.lead} className="text-[length:var(--cust-body)]">
              <Glyph kind={a.icon} />
              <p className="mt-[clamp(12px,1.1vw,22px)] font-semibold text-navy">
                {a.lead}
              </p>
              <p className="mt-[0.35em] max-w-[34ch] leading-[1.55] text-slate-body">
                {a.body}
              </p>
              <div className="mt-[clamp(8px,0.8vw,16px)]">
                <ArrowLink>{a.cta}</ArrowLink>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 border-t border-line text-[length:var(--cust-small)] md:grid-cols-4">
          {COLUMNS.map((groups, i) => (
            <div
              key={groups[0].title}
              className={`space-y-[clamp(20px,1.8vw,36px)] py-[clamp(24px,2.2vw,44px)] pr-[clamp(12px,1.4vw,28px)] ${
                i > 0 ? "border-l border-dashed border-line pl-[clamp(12px,1.4vw,28px)]" : ""
              }`}
            >
              {groups.map((g) => (
                <div key={g.title}>
                  <p className="font-semibold text-navy">{g.title}</p>
                  <ul className="mt-[0.9em] space-y-[0.55em]">
                    {g.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="text-slate-body transition-colors duration-150 hover:text-navy"
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              {i === COLUMNS.length - 1 && (
                <ArrowLink>Download the app</ArrowLink>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between gap-6 border-t border-line py-[clamp(18px,1.6vw,32px)] text-[length:var(--cust-small)]">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="#"
              className="flex items-center gap-1.5 text-brand transition-colors duration-150 hover:text-brand-hover"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
                <g fill="none" stroke="currentColor" strokeWidth="1.3">
                  <circle cx="8" cy="8" r="6.2" />
                  <path d="M1.8 8h12.4M8 1.8c3.4 3.4 3.4 9 0 12.4-3.4-3.4-3.4-9 0-12.4z" />
                </g>
              </svg>
              India (English)
            </a>
            <span className="text-slate-body">© 2026 AARUVO</span>
          </div>

          <Image
            src="/aaruvo-icon.png"
            alt=""
            width={433}
            height={479}
            className="h-6 w-auto shrink-0"
          />
        </div>
      </div>
    </footer>
  );
}
