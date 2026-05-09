import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <section className="py-24 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Contact</span>
              <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-6">
                Get in touch.
              </h1>
              <p className="text-muted-foreground leading-relaxed max-w-[40ch] mb-8">
                Questions, feedback, or partnership inquiries — we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div>
                  <span className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Email</span>
                  <p className="text-sm mt-1">hello@echo.studio</p>
                </div>
                <div>
                  <span className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground">Response Time</span>
                  <p className="text-sm mt-1">Within 24 hours</p>
                </div>
              </div>
            </div>

            <div>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 px-4 bg-secondary/50 border-subtle border-[0.5px] text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 px-4 bg-secondary/50 border-subtle border-[0.5px] text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Message</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    className="w-full p-4 bg-secondary/50 border-subtle border-[0.5px] text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us what you're working on..."
                  />
                </div>
                <button
                  type="submit"
                  className="h-12 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors duration-500 ease-studio"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
