import { motion } from "framer-motion";

const SocialProofSection = () => (
  <section className="py-24 lg:py-32 border-b border-subtle">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="max-w-3xl">
        <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-6 block">The Problem</span>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(1.5rem,3vw,2.5rem)] font-display font-medium leading-[1.15] tracking-[-0.03em] mb-8"
        >
          "92% of your audience never saw your last article. Your ideas deserve more than a single publishing moment."
        </motion.blockquote>
        <p className="text-muted-foreground leading-relaxed max-w-[55ch]">
          Every long-form piece contains dozens of standalone insights. Echo surfaces them and reformats each one for the platform where it'll resonate most.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 border-t border-subtle">
        {[
          { value: "6.2x", label: "Average reach increase", sub: "vs. single-platform publishing" },
          { value: "14min", label: "Saved per article", sub: "compared to manual repurposing" },
          { value: "3.8k", label: "Creators using Echo", sub: "writers, researchers, founders" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="py-10 pr-8 border-b md:border-b-0 md:border-r border-subtle last:border-0"
          >
            <p className="font-display text-4xl lg:text-5xl font-medium tracking-[-0.04em] mb-2">{stat.value}</p>
            <p className="text-sm font-medium mb-1">{stat.label}</p>
            <span className="font-mono-brand text-[10px] text-muted-foreground">{stat.sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
