import { motion } from "framer-motion";
import PrismIcon from "./illustrations/PrismIcon";

const steps = [
  {
    number: "01",
    title: "Paste your article",
    description: "Drop in a URL or paste your text. Echo ingests long-form content from any source — blog posts, newsletters, research notes.",
    meta: "Supported: URL, Markdown, Plain Text",
  },
  {
    number: "02",
    title: "Deconstruct",
    description: "Echo analyzes your content structure, extracts key arguments, quotes, and data points, then maps them to platform-specific formats.",
    meta: "AI-powered semantic analysis",
  },
  {
    number: "03",
    title: "Distribute",
    description: "Get ready-to-post content for LinkedIn, X, Instagram, and more. Each piece preserves your voice while optimizing for the platform.",
    meta: "One-click export to all platforms",
  },
];

const HowItWorksSection = () => (
  <section className="py-24 lg:py-32 border-b border-subtle">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4">
          <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">How It Works</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-6">
            Three steps to<br />redistribute.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-[35ch]">
            From long-form to everywhere. No templates, no guesswork.
          </p>
          <div className="mt-8 text-muted-foreground/30">
            <PrismIcon className="w-28 h-28" />
          </div>
        </div>

        <div className="lg:col-span-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-px bg-border" />

            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-14 py-10 border-b border-subtle last:border-0"
                >
                  <div className="absolute left-0 top-10 w-10 h-10 bg-foreground flex items-center justify-center z-10">
                    <span className="font-mono-brand text-[11px] text-background font-medium">{step.number}</span>
                  </div>
                  <h3 className="font-display text-2xl font-medium tracking-[-0.03em] mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-[50ch] mb-3">{step.description}</p>
                  <span className="font-mono-brand text-[10px] text-muted-foreground/60 uppercase tracking-wider">{step.meta}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
