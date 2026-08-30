import type { Detail } from "@/components/DetailModal";

/** Detail view copy for every card that carries an expand control. */
export const CARD_DETAILS: Record<string, Detail> = {
  accept: {
    eyebrow: "Shops near you",
    title: "Buy from any shop near you, big or small",
    body: "The corner shop on your street and the big supermarket sit side by side. You choose who you want to buy from, and you can see how far away they are before you order.",
    points: [
      "Small shops, supermarkets and wholesale sellers in one place",
      "Distance and delivery time shown before you order",
      "Buy from more than one shop in a single order",
      "You always pick the shop — we never choose for you",
    ],
    stats: [
      ["400 m", "typical distance to the nearest shop"],
      ["10+", "kinds of shopping in one app"],
      ["0", "extra charge for buying from a small shop"],
    ],
  },
  billing: {
    eyebrow: "Monthly list",
    title: "Get your regular items on time",
    body: "Rice, oil, milk, soap. Tell us once how often you need them and we remind you a few days before they run out. Nothing is ever bought without you approving it.",
    points: [
      "Set your list by talking, once",
      "A reminder a few days before an item runs out",
      "Change, skip or pause any item at any time",
      "Nothing is ordered until you tap approve",
    ],
    stats: [
      ["3 taps", "to reorder your usual list"],
      ["Never", "bought without your approval"],
      ["Any time", "you can pause or stop"],
    ],
  },
  agentic: {
    eyebrow: "Voice shopping",
    title: "Just say what you need",
    body: "You do not need to know the product name or how to spell it. Say it the way you would say it to a shopkeeper, in Tamil, English or a mix, and we work out what to buy.",
    points: [
      "Speak in Tamil, English or Tanglish",
      "Say the need, not the product — we find the items",
      "Every screen can be read out loud",
      "Typing always works too, if you prefer it",
    ],
    stats: [
      ["3", "languages you can speak in"],
      ["0", "typing needed to place an order"],
      ["1", "voice message for a full basket"],
    ],
  },
  issuing: {
    eyebrow: "Paying",
    title: "Pay safely, online only",
    body: "You approve the amount on your own phone before anything is taken. Your card or UPI details are never stored on your phone and never given to the shop.",
    points: [
      "Pay by UPI, Google Pay, PhonePe, card or net banking",
      "You see the full amount before you approve it",
      "No cash at the door, so nothing to sort out on delivery",
      "If an item does not arrive, the money comes back the same way",
    ],
    stats: [
      ["0", "cash handled at your door"],
      ["Before", "you pay, you see every charge"],
      ["Same account", "any refund comes back to"],
    ],
  },
  stablecoin: {
    eyebrow: "After delivery",
    title: "We stay with you after delivery, until the job is done",
    body: "Getting the box to your door is not the end. We show you how to use it, how to store it, and what to do if something is wrong.",
    points: [
      "Step-by-step help, read out loud if you want",
      "If an item is missing, we look for it in another shop nearby",
      "We ask you before changing anything in your order",
      "Returns and exchanges explained in plain words",
    ],
    stats: [
      ["12 min", "typical delivery from a nearby shop"],
      ["Nearby", "we search other shops if one runs out"],
      ["Always", "we ask before we change your order"],
    ],
  },
  embed: {
    eyebrow: "For shop owners",
    title: "Shops run their day on AARUVO",
    body: "See your orders, your stock and your money in one place. Add items by talking, and the money for every order reaches your bank without you chasing it.",
    points: [
      "Add and price items by talking — no typing",
      "Orders from people living near your shop",
      "Every order is paid online before you pack it",
      "See what people nearby are searching for",
    ],
    stats: [
      ["1 day", "to list a full shop"],
      ["0", "computer skills needed"],
      ["Direct", "payouts to your bank"],
    ],
  },
};
