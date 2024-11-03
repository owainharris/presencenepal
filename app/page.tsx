import PricingSection from "@/components/pricing-section";
import Features from "@/components/features";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Features />
      <PricingSection />
      <TrustSection />
    </main>
  );
}