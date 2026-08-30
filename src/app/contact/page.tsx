import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact us — AARUVO",
  description:
    "Call us, message us or fill in a short form. A real person from AARUVO will get back to you.",
};

const WAYS = [
  {
    icon: "phone",
    title: "Call us",
    body: "Talk to a real person in Tamil or English.",
    value: "1800 000 0000",
    note: "Free call · Every day, 8 am to 10 pm",
    href: "tel:18000000000",
  },
  {
    icon: "chat",
    title: "Message us",
    body: "Send a message on WhatsApp and we reply.",
    value: "+91 90000 00000",
    note: "Usually answered within an hour",
    href: "https://wa.me/919000000000",
  },
  {
    icon: "mail",
    title: "Email us",
    body: "Good for anything that is not urgent.",
    value: "hello@aaruvo.com",
    note: "We reply within one working day",
    href: "mailto:hello@aaruvo.com",
  },
];

const FAQ = [
  {
    q: "My order has not arrived. What do I do?",
    a: "Open the app, go to Orders and tap the order. You will see where it is right now. If something looks wrong, tap Get help on that order and we will call you.",
  },
  {
    q: "The shop did not have my item. What happens to my money?",
    a: "We look for the same item in another shop near you and ask you first. If you do not want it, that item is refunded to the same account you paid from.",
  },
  {
    q: "I cannot read well. Can I still use AARUVO?",
    a: "Yes. Press the mic and speak in your own words. AARUVO can also read every screen out loud, including the price and the total before you pay.",
  },
  {
    q: "I own a shop. How do I join?",
    a: "Call us or fill in the form below and choose “I own a shop”. Someone will call you, and we set up your shop over the phone. You do not need a computer.",
  },
  {
    q: "Do you take cash on delivery?",
    a: "No. Every order is paid online before it is packed, so there is no money to sort out at your door.",
  },
];

function WayIcon({ kind }: { kind: string }) {
  const s = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <span className="flex h-[2.6em] w-[2.6em] items-center justify-center rounded-full bg-[#ffe9e9] text-brand">
      <svg viewBox="0 0 24 24" className="h-[1.2em] w-[1.2em]" aria-hidden>
        {kind === "phone" && (
          <path
            d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3z"
            {...s}
          />
        )}
        {kind === "chat" && (
          <path d="M4 5h16v11H9l-5 4V5z" {...s} />
        )}
        {kind === "mail" && (
          <>
            <rect x="3" y="5" width="18" height="14" rx="2.5" {...s} />
            <path d="m3.5 7 8.5 6 8.5-6" {...s} />
          </>
        )}
      </svg>
    </span>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-white pt-[var(--header-h)]">
      {/* ── Opening ── */}
      <section className="bg-[#fff6f6]">
        <div className="px-[var(--hero-indent)] py-[clamp(40px,4.6vw,100px)]">
          <h1 className="max-w-[16ch] text-[length:var(--ent-h1)] font-bold leading-[1.08] tracking-[-0.035em] text-navy">
            Need help? Talk to us.
          </h1>
          <p className="mt-[clamp(16px,1.6vw,34px)] max-w-[52ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
            You do not need to know the right words. Call us, send a message, or
            fill in the short form below. A real person will get back to you.
          </p>
        </div>
      </section>

      {/* ── Three ways to reach us ── */}
      <section>
        <div className="grid gap-[clamp(16px,1.6vw,34px)] px-[var(--hero-indent)] py-[clamp(36px,4vw,88px)] md:grid-cols-3">
          {WAYS.map((w) => (
            <a
              key={w.title}
              href={w.href}
              className="rounded-[10px] border border-line bg-white p-[clamp(18px,1.9vw,40px)] text-[length:var(--cust-body)] transition-shadow duration-300 hover:shadow-[0_2px_6px_rgba(20,20,43,0.08),0_18px_44px_rgba(20,20,43,0.10)]"
            >
              <WayIcon kind={w.icon} />
              <h2 className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--connect-card-h)] font-bold tracking-[-0.025em] text-navy">
                {w.title}
              </h2>
              <p className="mt-[0.6em] leading-[1.6] text-slate-body">{w.body}</p>
              <p className="mt-[0.9em] text-[length:var(--cust-lead)] font-semibold text-brand">
                {w.value}
              </p>
              <p className="mt-[0.35em] text-[length:var(--cust-small)] text-muted">
                {w.note}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ── Form ── */}
      <section className="bg-[#f7f8fa]">
        <div className="grid items-start gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(28px,3vw,60px)] px-[var(--hero-indent)] py-[clamp(40px,4.6vw,100px)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <h2 className="max-w-[18ch] text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
              Or leave your number
            </h2>
            <p className="mt-[clamp(14px,1.4vw,30px)] max-w-[40ch] text-[length:var(--cust-lead)] leading-[1.6] text-slate-body">
              Fill in whatever you know. We will call you back and take it from
              there. Nothing here is compulsory except your name and number.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* ── Common questions ── */}
      <section>
        <div className="px-[var(--hero-indent)] py-[clamp(40px,4.6vw,100px)]">
          <h2 className="text-[length:var(--ent-h2)] font-bold leading-[1.14] tracking-[-0.03em] text-navy">
            Questions people ask us
          </h2>

          <dl className="mt-[clamp(24px,2.6vw,56px)] grid gap-x-[clamp(24px,3vw,60px)] gap-y-[clamp(24px,2.4vw,50px)] md:grid-cols-2">
            {FAQ.map((f) => (
              <div key={f.q} className="text-[length:var(--cust-body)]">
                <dt className="border-l-2 border-brand pl-4 text-[length:var(--cust-lead)] font-semibold leading-[1.4] text-navy">
                  {f.q}
                </dt>
                <dd className="mt-[0.7em] max-w-[46ch] pl-4 leading-[1.65] text-slate-body">
                  {f.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
