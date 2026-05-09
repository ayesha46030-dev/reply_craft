import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Privacy = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="pt-16">
      <section className="py-24 lg:py-32">
        <div className="max-w-[700px] mx-auto px-6 lg:px-12">
          <span className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-primary mb-4 block">Legal</span>
          <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[0.9] tracking-[-0.04em] mb-12">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-3">Data Collection</h2>
              <p>Echo collects only the information necessary to provide our service: your email address, name, and the content you choose to process. We do not track browsing behavior or sell your data to third parties.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-3">Content Processing</h2>
              <p>Your articles and generated content are processed in real-time and stored securely in your account. We do not use your content to train our AI models. Your intellectual property remains entirely yours.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-3">Data Retention</h2>
              <p>You can delete your content and account at any time. Upon deletion, all associated data is permanently removed from our systems within 30 days.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-3">Cookies</h2>
              <p>We use essential cookies only — for authentication and session management. No tracking cookies, no analytics cookies, no advertising cookies.</p>
            </div>
            <div>
              <h2 className="font-display text-lg font-medium text-foreground mb-3">Contact</h2>
              <p>For privacy-related inquiries, contact us at privacy@echo.studio.</p>
            </div>
            <p className="font-mono-brand text-[10px] text-muted-foreground/60 uppercase tracking-wider pt-4 border-t border-subtle">
              Last updated: March 2026
            </p>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
);

export default Privacy;
