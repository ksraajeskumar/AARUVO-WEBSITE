import type { Metadata } from "next";
import PartnerCases from "@/components/partner/PartnerCases";
import PartnerConnect from "@/components/partner/PartnerConnect";
import PartnerHero from "@/components/partner/PartnerHero";
import PartnerOptions from "@/components/partner/PartnerOptions";
import {
  PartnerSpecialisations,
  PartnerWhy,
} from "@/components/partner/PartnerWhy";

export const metadata: Metadata = {
  title: "Sell on AARUVO — AARUVO",
  description:
    "List your shop, add your items by talking, and start getting orders from people who live near you.",
};

export default function BecomeAPartner() {
  return (
    <main>
      <PartnerHero />
      <PartnerWhy />
      <PartnerSpecialisations />
      <PartnerOptions />
      <PartnerCases />
      <PartnerConnect />
    </main>
  );
}
