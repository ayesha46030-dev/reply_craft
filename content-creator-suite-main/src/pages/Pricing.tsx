import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For trying Echo on your first few articles.",
    features: [
      "5 articles per month",
      "LinkedIn + X output",
      "Basic tone control",
      "Community support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    description: "For active writers and content creators.",
    features: [
      "Unlimited articles",
      "All platforms (LinkedIn, X, IG, Newsletter)",
      "Advanced tone presets + custom",
      "Content library & history",
      "Priority support",
      "API access",
    ],
    cta: "Start Creating",
    highlight: true,
  },
  {
    name: "Studio",
    price: "$49",
    period: "/month",
    description: "For teams and agencies managing multiple voices.",
    features: [
      "Everything in Creator",
      "5 team members",
      "Brand voice profiles",
      "Bulk processing",
      "Analytics dashboard",
      "Dedicated support",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const Pricing = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <section className="py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Pricing</span>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-6">
              Simple, honest pricing.
            </h1>
            <p className="text-lg text-muted-foreground max-w-[40ch] mx-auto">
              No hidden fees. No feature walls. Scale when you're ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 lg:p-10 border-subtle flex flex-col ${
                  plan.highlight
                    ? "bg-foreground text-background border-[0.5px]"
                    : "border-[0.5px]"
                }`}
              >
                <span className={`font-mono-brand text-[10px] uppercase tracking-[0.2em] mb-4 ${
                  plan.highlight ? "text-primary" : "text-muted-foreground"
                }`}>
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="font-display text-4xl font-medium tracking-[-0.04em]">{plan.price}</span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-background/60" : "text-muted-foreground"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-8 ${plan.highlight ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>

                <div className="flex flex-col gap-3 mb-10 flex-1">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <Check size={14} className={`mt-0.5 flex-shrink-0 ${plan.highlight ? "text-primary" : "text-primary"}`} />
                      <span className={`text-sm ${plan.highlight ? "text-background/80" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/signup"
                  className={`h-12 flex items-center justify-center text-sm font-medium transition-colors duration-500 ease-studio ${
                    plan.highlight
                      ? "bg-primary text-background hover:bg-primary/90"
                      : "bg-foreground text-background hover:bg-primary"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Pricing;
