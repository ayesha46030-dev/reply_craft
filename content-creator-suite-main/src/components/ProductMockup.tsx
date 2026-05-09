import { motion } from "framer-motion";

const ProductMockup = () => (
  <div className="w-full max-w-md mx-auto">
    <div className="bg-card shadow-card border-subtle p-6 flex flex-col gap-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-foreground flex items-center justify-center">
            <span className="text-background font-display text-[8px] font-bold">E</span>
          </div>
          <span className="font-mono-brand text-[10px] text-muted-foreground uppercase tracking-wider">Echo Engine</span>
        </div>
        <span className="font-mono-brand text-[10px] text-primary">● Live</span>
      </div>

      {/* Source article */}
      <div className="border-subtle p-4">
        <span className="font-mono-brand text-[9px] uppercase tracking-[0.15em] text-muted-foreground">Source Article</span>
        <div className="mt-3 space-y-2">
          <div className="h-2.5 w-4/5 bg-secondary" />
          <div className="h-2 w-full bg-secondary/60" />
          <div className="h-2 w-full bg-secondary/60" />
          <div className="h-2 w-3/5 bg-secondary/60" />
        </div>
        <div className="mt-3 flex gap-4">
          <span className="font-mono-brand text-[9px] text-muted-foreground">1,842 words</span>
          <span className="font-mono-brand text-[9px] text-muted-foreground">7 min read</span>
        </div>
      </div>

      {/* Generated outputs */}
      <div className="flex flex-col gap-3">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="border-l-2 border-primary bg-primary/5 p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-brand text-[9px] text-primary uppercase tracking-wider">LinkedIn Post</span>
            <span className="font-mono-brand text-[9px] text-muted-foreground">286 chars</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-primary/10" />
            <div className="h-2 w-4/5 bg-primary/10" />
            <div className="h-2 w-3/5 bg-primary/10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="border-l-2 border-foreground/30 bg-secondary/40 p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-brand text-[9px] text-muted-foreground uppercase tracking-wider">X Thread</span>
            <span className="font-mono-brand text-[9px] text-muted-foreground">5 tweets</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-secondary" />
            <div className="h-2 w-2/3 bg-secondary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="border-l-2 border-accent-foreground/20 bg-accent/30 p-4"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono-brand text-[9px] text-muted-foreground uppercase tracking-wider">Instagram Caption</span>
            <span className="font-mono-brand text-[9px] text-muted-foreground">1 slide</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 w-full bg-accent" />
            <div className="h-2 w-3/4 bg-accent" />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ProductMockup;
