import type { Metadata } from "next";
import EnterpriseCards from "@/components/enterprise/EnterpriseCards";
import { EnterpriseClose, EnterpriseResources } from "@/components/enterprise/EnterpriseClose";
import EnterpriseDetails from "@/components/enterprise/EnterpriseDetails";
import EnterpriseExplore from "@/components/enterprise/EnterpriseExplore";
import EnterpriseHero from "@/components/enterprise/EnterpriseHero";
import EnterpriseNav from "@/components/enterprise/EnterpriseNav";
import {
  EnterpriseAuth,
  EnterpriseUseCases,
  EnterpriseWorking,
} from "@/components/enterprise/EnterpriseTail";

export const metadata: Metadata = {
  title: "Who we are — AARUVO",
  description:
    "AARUVO is built so that anyone can shop — whether or not they can read, type or use a computer.",
};

export default function WhoWeAre() {
  return (
    <main>
      <EnterpriseHero />
      <EnterpriseCards />
      <EnterpriseNav />
      <EnterpriseDetails />
      <EnterpriseAuth />
      <EnterpriseWorking />
      <EnterpriseUseCases />
      <EnterpriseExplore />
      <EnterpriseResources />
      <EnterpriseClose />
    </main>
  );
}
