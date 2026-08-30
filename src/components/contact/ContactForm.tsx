"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const REASONS = [
  "I need help with an order",
  "I want to ask about a product",
  "I own a shop and want to join",
  "I want to work with AARUVO",
  "Something else",
];

const LANGUAGES = ["Tamil", "English", "Either is fine"];

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-[length:var(--cust-body)] font-semibold text-navy">
        {label}
      </span>
      {hint && (
        <span className="mt-[0.25em] block text-[length:var(--cust-small)] text-muted">
          {hint}
        </span>
      )}
      <span className="mt-[0.6em] block">{children}</span>
    </label>
  );
}

const inputBase =
  "w-full rounded-[8px] border border-line bg-white px-[1em] py-[0.85em] text-[length:var(--cust-body)] text-navy outline-none transition-colors duration-200 placeholder:text-muted focus:border-brand";

/**
 * A deliberately short form. It only asks for a name and a number; everything
 * else is optional, so someone who finds forms hard can still get through it.
 */
export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState(REASONS[0]);
  const [language, setLanguage] = useState(LANGUAGES[2]);
  const [message, setMessage] = useState("");

  const ready = name.trim().length > 1 && phone.replace(/\D/g, "").length >= 10;

  return (
    <div className="rounded-[12px] border border-line bg-white p-[clamp(20px,2.2vw,46px)] shadow-[0_1px_3px_rgba(20,20,43,0.05),0_16px_44px_rgba(20,20,43,0.07)]">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="py-[clamp(20px,2vw,44px)] text-center"
          >
            <span className="mx-auto flex h-[3.4em] w-[3.4em] items-center justify-center rounded-full bg-[#ffe9e9] text-[length:var(--cust-lead)] text-brand">
              <svg viewBox="0 0 24 24" className="h-[1.4em] w-[1.4em]" aria-hidden>
                <path
                  d="m5 12.5 4.5 4.5L19 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className="mt-[clamp(14px,1.4vw,30px)] text-[length:var(--connect-card-h)] font-bold tracking-[-0.025em] text-navy">
              Thank you, {name.split(" ")[0]}.
            </p>
            <p className="mx-auto mt-[0.7em] max-w-[36ch] text-[length:var(--cust-body)] leading-[1.65] text-slate-body">
              We have your number. Someone from AARUVO will call you, usually the
              same day. If it is urgent, please call us instead.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-[clamp(16px,1.6vw,34px)] text-[length:var(--cust-body)] font-medium text-brand transition-colors duration-200 hover:text-brand-hover"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, ease: EASE }}
            onSubmit={(e) => {
              e.preventDefault();
              if (ready) setSent(true);
            }}
            className="space-y-[clamp(16px,1.5vw,32px)]"
          >
            <Field label="Your name">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="For example, Lakshmi"
                className={inputBase}
              />
            </Field>

            <Field label="Your phone number" hint="This is how we will reach you.">
              <input
                required
                inputMode="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="10 digit mobile number"
                className={inputBase}
              />
            </Field>

            <Field label="What is this about?">
              <div className="flex flex-wrap gap-2">
                {REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    aria-pressed={r === reason}
                    className={`rounded-full px-[1em] py-[0.6em] text-[length:var(--cust-small)] font-medium leading-none transition-colors duration-200 ${
                      r === reason
                        ? "bg-brand text-white"
                        : "bg-[#f2f4f7] text-navy hover:bg-[#ffe9e9]"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Which language should we speak?">
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map((l) => (
                  <button
                    key={l}
                    type="button"
                    onClick={() => setLanguage(l)}
                    aria-pressed={l === language}
                    className={`rounded-full px-[1em] py-[0.6em] text-[length:var(--cust-small)] font-medium leading-none transition-colors duration-200 ${
                      l === language
                        ? "bg-brand text-white"
                        : "bg-[#f2f4f7] text-navy hover:bg-[#ffe9e9]"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
            </Field>

            <Field
              label="Anything you want to tell us?"
              hint="You can leave this empty. We will ask on the call."
            >
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write in Tamil or English, whichever is easier"
                className={`${inputBase} resize-none`}
              />
            </Field>

            <button
              type="submit"
              disabled={!ready}
              className="w-full rounded-full bg-brand py-[0.95em] text-[length:var(--cust-lead)] font-semibold leading-none text-white transition-colors duration-200 enabled:hover:bg-brand-hover disabled:cursor-not-allowed disabled:bg-[#f2b7b7]"
            >
              Ask AARUVO to call me
            </button>

            <p className="text-center text-[length:var(--cust-small)] leading-[1.6] text-muted">
              We use your number only to reply to this message. Nothing is shared
              with shops.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
