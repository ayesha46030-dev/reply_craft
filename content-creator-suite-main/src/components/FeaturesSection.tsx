import { motion } from "framer-motion";
import ConnectIcon from "./illustrations/ConnectIcon";
import DistributeIcon from "./illustrations/DistributeIcon";

const features = [
  {
    label: "Voice Preservation",
    title: "Your words, their format.",
    description: "Echo doesn't rewrite — it restructures. Your tone, vocabulary, and perspective stay intact across every generated post.",
    stat: "98.4% voice fidelity score",
  },
  {
    label: "Multi-Platform Output",
    title: "LinkedIn. X. Instagram. Newsletter.",
    description: "Each platform has its own grammar. Echo understands character limits, hashtag conventions, carousel structures, and thread pacing.",
    stat: "4 platforms, one click",
  },
  {
    label: "Semantic Extraction",
    title: "Key ideas, surfaced.",
    description: "AI-powered analysis identifies your core arguments, supporting data, quotable moments, and narrative arcs.",
    stat: "Avg. 12 content atoms per article",
  },
  {
    label: "Tone Control",
    title: "From academic to casual.",
    description: "Adjust the register of your output. Professional for LinkedIn, conversational for X, visual-first for Instagram.",
    stat: "5 tone presets + custom",
  },
];

const cardHover = {
  whileHover: { y: -4, transition: { type: "spring" as const, stiffness: 400, damping: 25 } },
  whileTap: { scale: 0.98 },
};

const FeaturesSection = () => (
  <section className="py-24 lg:py-32 border-b border-subtle grain">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-20">
        <div>
          <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Features</span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.95] tracking-[-0.04em]">
            Precision tools for<br />thoughtful creators.
          </h2>
        </div>
        <div className="flex gap-4 text-muted-foreground/20">
          <ConnectIcon className="w-14 h-14" />
          <DistributeIcon className="w-14 h-14" />
        </div>
      </div>

      <div className="flex flex-col gap-0">
        {features.map((feature, i) => (
          <motion.div
            key={feature.label}
            {...cardHover}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-10 border-b border-subtle cursor-default"
          >
            <div className="lg:col-span-1">
              <span className="font-mono-brand text-[11px] text-muted-foreground/50">0{i + 1}</span>
            </div>
            <div className="lg:col-span-3">
              <span className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-primary">{feature.label}</span>
              <h3 className="font-display text-xl font-medium tracking-[-0.03em] mt-2">{feature.title}</h3>
            </div>
            <div className="lg:col-span-5">
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
            <div className="lg:col-span-3 flex items-end lg:justify-end">
              <span className="font-mono-brand text-[11px] text-muted-foreground/60">{feature.stat}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
