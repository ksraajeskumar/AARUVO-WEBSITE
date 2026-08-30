import Backbone from "@/components/Backbone";
import Connect from "@/components/Connect";
import Customers from "@/components/Customers";
import Experts from "@/components/Experts";
import Happening from "@/components/Happening";
import Embed from "@/components/Embed";
import Hero from "@/components/Hero";
import Infrastructure from "@/components/Infrastructure";
import HeroRibbon from "@/components/HeroRibbon";
import LogoBar from "@/components/LogoBar";
import Platform from "@/components/Platform";
import Sessions from "@/components/Sessions";
import Solutions from "@/components/Solutions";
import Startups from "@/components/Startups";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main>
      <div className="relative isolate min-h-[640px] overflow-hidden bg-white pr-[var(--ribbon-w)] pt-[var(--header-h)]">
        <HeroRibbon />
        <Hero />
        <LogoBar />
      </div>
      <Solutions />
      <Platform />
      <Embed />
      <Sessions />
      <Backbone />
      <Customers />
      <Experts />
      <Startups />
      <Connect />
      <Testimonials />
      <Infrastructure />
      <Happening />
    </main>
  );
}
