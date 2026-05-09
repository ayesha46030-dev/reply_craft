import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ProductMockup from "./ProductMockup";

const HeroSection = () => (
  <section className="min-h-svh grain border-b border-subtle">
    <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-svh">
      {/* Left: Content */}
      <div className="lg:col-span-7 px-6 lg:px-12 pt-28 pb-16 lg:py-0 flex flex-col justify-center lg:border-r border-subtle">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-6"
        >
          Available for Individual Creators
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-8"
        >
          Turn your long-form <br className="hidden lg:block" />
          into a <span className="italic text-muted-foreground">social ecosystem.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-[45ch] text-lg text-muted-foreground mb-10 text-pretty leading-relaxed"
        >
          Echo deconstructs your articles and rebuilds them into high-signal threads, carousels, and captions. No fluff, just your ideas, redistributed.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <Link
            to="/signup"
            className="h-14 px-10 flex items-center bg-foreground text-background font-medium text-sm hover:bg-primary transition-colors duration-500 ease-studio"
          >
            Start Repurposing — Free
          </Link>
          <Link
            to="/examples"
            className="h-14 px-10 flex items-center border border-foreground text-sm font-medium hover:bg-secondary transition-all duration-300"
          >
            View Examples
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex gap-8"
        >
          <div>
            <span className="font-mono-brand text-[11px] text-muted-foreground">Articles processed</span>
            <p className="font-display text-2xl font-medium tracking-tight mt-1">24,891</p>
          </div>
          <div>
            <span className="font-mono-brand text-[11px] text-muted-foreground">Posts generated</span>
            <p className="font-display text-2xl font-medium tracking-tight mt-1">142,067</p>
          </div>
        </motion.div>
      </div>

      {/* Right: Mockup */}
      <div className="lg:col-span-5 bg-secondary/30 p-8 lg:p-10 flex items-center justify-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full"
        >
          <ProductMockup />
        </motion.div>

        {/* Geometric decoration */}
        <svg className="absolute top-10 right-10 w-20 h-20 text-muted-foreground/20" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="24" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="40" r="10" stroke="currentColor" strokeWidth="0.5" />
          <line x1="40" y1="2" x2="40" y2="78" stroke="currentColor" strokeWidth="0.5" />
          <line x1="2" y1="40" x2="78" y2="40" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
    </div>
  </section>
);

export default HeroSection;
