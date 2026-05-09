import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTASection = () => (
  <section className="py-24 lg:py-32 grain">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[clamp(2rem,5vw,4rem)] font-medium leading-[0.95] tracking-[-0.04em] mb-6"
        >
          Your best work deserves<br />a second life.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-lg text-muted-foreground mb-10 max-w-[45ch] mx-auto"
        >
          Start repurposing your content today. No credit card required.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/signup"
            className="h-14 px-10 flex items-center bg-foreground text-background font-medium text-sm hover:bg-primary transition-colors duration-500 ease-studio"
          >
            Distribute Your Thoughts
          </Link>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="font-mono-brand text-[11px] text-muted-foreground mt-6"
        >
          Free plan includes 5 articles/month
        </motion.p>
      </div>
    </div>
  </section>
);

export default CTASection;
