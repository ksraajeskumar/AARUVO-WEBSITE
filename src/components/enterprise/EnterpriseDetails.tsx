import {
  AuthChartArt,
  BrushArt,
  DepositsArt,
  InvoiceArt,
  PaymentTilesArt,
  ReaderArt,
  RevenueArt,
  TaxArt,
} from "./arts";
import EnterpriseSection, { type RailItem } from "./EnterpriseSection";

const ProvisionMark = (
  <span className="relative inline-flex flex-col items-center">
    <span className="text-[1.6em] font-bold tracking-[-0.03em]">Provision</span>
    <svg viewBox="0 0 100 16" className="-mt-1 h-3 w-[86%]" preserveAspectRatio="none" aria-hidden>
      <path
        d="M2 4c22 12 62 14 92 1M84 1c8 2 12 5 10 9"
        fill="none"
        stroke="#f90"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </span>
);

const VegetablesMark = (
  <span className="flex items-center gap-2 text-[1.5em] font-bold tracking-[-0.02em] text-[#0b0b0b]">
    <svg viewBox="0 0 24 24" className="h-[1.1em] w-[1.1em]" aria-hidden>
      <path d="M12.4 8.4c2.4 2 4 5.6 3.6 11-5-1.2-7.6-4.2-8.4-7.4z" fill="#f36d21" />
      <path d="M12.8 7.6c1.4-2.4 3.6-3.4 6-3-.4 2.6-2 4.2-4.4 4.6z" fill="#43b02a" />
      <path d="M11.6 7.4C10.6 5.4 8.8 4.4 6.6 4.6c.2 2.4 1.6 3.9 3.6 4.3z" fill="#43b02a" />
    </svg>
    Vegetables
  </span>
);

const FoxMark = (
  <span className="flex h-[3.2em] w-[5.4em] flex-col items-center justify-center rounded-full border-[3px] border-[#0b2e6f] text-[#0b2e6f]">
    <span className="text-[1em] font-black leading-none tracking-[-0.02em]">A family</span>
    <span className="text-[0.44em] font-bold tracking-[0.2em]">at home</span>
  </span>
);

const GLOBAL_RAIL: RailItem[] = [
  {
    kind: "guide",
    tint: "linear-gradient(140deg,#6d5cf7 0%,#5b4bef 100%)",
    label: "Guide",
    text: "How to do your weekly shopping in one voice message",
  },
  {
    kind: "story",
    logo: ProvisionMark,
    label: "Customer story",
    text: "Sample story. Replace with a real customer who shops by voice.",
  },
  {
    kind: "stat",
    value: ">90",
    suffix: "%",
    color: "#f472b6",
    text: "of people finish their first order without help",
  },
];

const PLATFORM_RAIL: RailItem[] = [
  {
    kind: "guide",
    tint: "linear-gradient(140deg,#a06bfa 0%,#8b5cf6 100%)",
    label: "Guide",
    text: "How a small shop gets its first ten orders",
  },
  {
    kind: "story",
    logo: VegetablesMark,
    label: "Customer story",
    text: "Sample story. Replace with a real shop that joined AARUVO.",
  },
  {
    kind: "stat",
    value: "75",
    suffix: "%",
    color: "#fb7185",
    text: "of shop owners set up without any typing",
  },
];

const REVENUE_RAIL: RailItem[] = [
  {
    kind: "guide",
    tint: "linear-gradient(140deg,#12d1c6 0%,#0ec2b8 100%)",
    label: "Guide",
    text: "Setting up your monthly items, step by step",
  },
  {
    kind: "story",
    logo: FoxMark,
    label: "Customer story",
    text: "Sample story. Replace with a real family using reminders.",
  },
  {
    kind: "stat",
    value: "350K+",
    color: "#f472b6",
    text: "families who never run out of the basics",
  },
];

export default function EnterpriseDetails() {
  return (
    <>
      <EnterpriseSection
        id="global-payments"
        title="Shopping made simple"
        sub="Say what you need. We find it nearby and bring it to your door."
        rail={GLOBAL_RAIL}
        features={[
          {
            title: "Ask in your own words",
            body: "You do not need to know the product name. Say what you are trying to do and we work out what to buy.",
            pills: ["Speak or type", "Tamil or English", "Read aloud"],
            art: <PaymentTilesArt />,
          },
          {
            title: "Buy from the shops on your street",
            body: "Small shops and big stores sit side by side. You pick who you want to buy from.",
            pills: ["Shops near you"],
            art: <ReaderArt />,
          },
          {
            title: "See the full price before you pay",
            body: "Item price, delivery and every charge, all on one screen. Nothing is added after you agree.",
            pills: ["No hidden charges", "Pay online only"],
            art: <AuthChartArt />,
          },
        ]}
      />

      <EnterpriseSection
        id="platform-baas"
        title="For shop owners"
        sub="List your shop by talking, and sell to the people living around you."
        rail={PLATFORM_RAIL}
        features={[
          {
            title: "Money reaches your bank",
            body: "Every order is paid before it comes to you, so there is no cash to handle and nothing to chase.",
            pills: ["Direct payouts"],
            art: <DepositsArt />,
          },
          {
            title: "Add your items by talking",
            body: "Say the item name, the price and how many you have. We prepare the listing and read it back before publishing.",
            pills: ["No typing", "No computer"],
            art: <BrushArt />,
          },
        ]}
      />

      <EnterpriseSection
        id="revenue-automation"
        title="Revenue and finance automation"
        sub="Set your monthly items once. We remind you before they run out."
        rail={REVENUE_RAIL}
        features={[
          {
            title: "Never run out of the basics",
            body: "Rice, oil, milk, soap. Tell us once and we remind you before they finish.",
            pills: ["Monthly reminders", "One tap to reorder"],
            art: <InvoiceArt />,
          },
          {
            title: "Stay inside your budget",
            body: "Tell us your limit and we build the basket to fit, and explain what we left out.",
            pills: ["Budget mode"],
            art: <TaxArt />,
          },
          {
            title: "Help after it arrives",
            body: "How to use it, how to store it, what to do if it is wrong. We stay with you until it works.",
            pills: ["Step by step", "Voice guide"],
            art: <RevenueArt />,
          },
        ]}
      />
    </>
  );
}
