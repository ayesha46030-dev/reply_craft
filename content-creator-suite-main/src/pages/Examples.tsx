import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import ProductMockup from "@/components/ProductMockup";

const examples = [
  {
    title: "From Research Paper to LinkedIn Thread",
    source: "3,200 word research paper on AI alignment",
    outputs: [
      { platform: "LinkedIn", type: "Carousel post", chars: "1,240" },
      { platform: "X", type: "Thread (7 tweets)", chars: "1,960" },
      { platform: "Instagram", type: "Caption + 5 slides", chars: "800" },
    ],
  },
  {
    title: "Newsletter to Social Distribution",
    source: "Weekly newsletter on product design (2,100 words)",
    outputs: [
      { platform: "LinkedIn", type: "Single post", chars: "620" },
      { platform: "X", type: "Thread (4 tweets)", chars: "1,120" },
      { platform: "Instagram", type: "Quote card", chars: "280" },
    ],
  },
  {
    title: "Blog Post to Multi-Platform Campaign",
    source: "How-to guide on startup fundraising (4,500 words)",
    outputs: [
      { platform: "LinkedIn", type: "Article summary", chars: "1,800" },
      { platform: "X", type: "Thread (9 tweets)", chars: "2,520" },
      { platform: "Instagram", type: "Carousel (8 slides)", chars: "1,600" },
    ],
  },
];

const Examples = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <section className="py-24 lg:py-32 border-b border-subtle">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Examples</span>
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-6">
            See Echo in action.
          </h1>
          <p className="text-lg text-muted-foreground max-w-[50ch] leading-relaxed">
            Real transformations from real content. Every output preserves the author's voice.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="font-display text-2xl font-medium tracking-[-0.03em] mb-4">Live Preview</h2>
              <p className="text-muted-foreground text-sm mb-8">A sample transformation showing the Echo engine processing an article into platform-ready posts.</p>
              <ProductMockup />
            </div>
            <div className="flex flex-col gap-6">
              {examples.map((example, i) => (
                <motion.div
                  key={example.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-subtle border-[0.5px] p-6"
                >
                  <h3 className="font-display text-lg font-medium tracking-[-0.02em] mb-2">{example.title}</h3>
                  <p className="font-mono-brand text-[10px] text-muted-foreground uppercase tracking-wider mb-4">{example.source}</p>
                  <div className="flex flex-col gap-2">
                    {example.outputs.map((output) => (
                      <div key={output.platform} className="flex justify-between items-center py-2 border-b border-subtle last:border-0">
                        <div className="flex items-center gap-3">
                          <span className="font-mono-brand text-[10px] text-primary uppercase tracking-wider w-20">{output.platform}</span>
                          <span className="text-sm text-muted-foreground">{output.type}</span>
                        </div>
                        <span className="font-mono-brand text-[10px] text-muted-foreground">{output.chars} chars</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Examples;
