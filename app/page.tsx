import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/marketing/Hero";
import { LegacyComparison } from "@/components/marketing/LegacyComparison";
import { PainPoints } from "@/components/marketing/PainPoints";
import { BentoGrid } from "@/components/marketing/BentoGrid";
import { Pricing } from "@/components/marketing/Pricing";
import { Roadmap } from "@/components/marketing/Roadmap";
import { Footer } from "@/components/marketing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-canvas text-zinc-600 selection:bg-neon/30">
      <Navbar />
      <Hero />
      <PainPoints />
      <LegacyComparison />
      <BentoGrid />
      <Pricing />
      <Roadmap />
      <Footer />
    </main>
  );
}
