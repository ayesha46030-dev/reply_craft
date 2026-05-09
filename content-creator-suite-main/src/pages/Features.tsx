import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";

const Features = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <section className="py-24 lg:py-32 border-b border-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Capabilities</span>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-6">
            Built for craft.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[50ch] leading-relaxed">
            Every feature designed with the independent creator in mind. No bloat, no complexity.
          </p>
        </div>
      </section>
      <FeaturesSection />
      <CTASection />
    </div>
    <Footer />
  </div>
);

export default Features;
