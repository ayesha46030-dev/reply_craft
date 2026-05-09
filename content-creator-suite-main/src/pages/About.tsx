import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import PrismIcon from "@/components/illustrations/PrismIcon";

const About = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <section className="py-24 lg:py-32 border-b border-subtle grain">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">About Echo</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-8">
              We believe every idea<br />deserves amplitude.
            </h1>
            <div className="space-y-6 text-muted-foreground leading-relaxed max-w-[55ch]">
              <p>
                Echo was built by creators who were tired of spending more time reformatting their work than creating it. We believe the bottleneck shouldn't be distribution — it should be thinking.
              </p>
              <p>
                Our team is small, intentional, and deeply focused on preserving the authenticity of your voice across every platform. We don't add fluff. We don't inject engagement bait. We restructure your ideas so they land naturally wherever your audience lives.
              </p>
              <p>
                We're building Echo as a tool for the long game — for writers, researchers, and founders who value substance over virality.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-muted-foreground/15"
            >
              <PrismIcon className="w-48 h-48" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-3xl font-medium tracking-[-0.03em] mb-12">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              { title: "Voice First", text: "Your writing has a fingerprint. Echo preserves it across every transformation." },
              { title: "No Fluff", text: "We remove nothing meaningful and add nothing unnecessary. Your ideas, redistributed." },
              { title: "Creator-Owned", text: "Your content stays yours. No training on your data. No lock-in. Export everything." },
            ].map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-8 pr-8 border-b md:border-b-0 md:border-r border-subtle last:border-0"
              >
                <span className="font-mono-brand text-[10px] text-primary uppercase tracking-[0.15em] mb-3 block">0{i + 1}</span>
                <h3 className="font-display text-xl font-medium tracking-[-0.02em] mb-3">{principle.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principle.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default About;
