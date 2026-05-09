import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-subtle bg-secondary/30 grain">
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-7 h-7 bg-foreground flex items-center justify-center">
              <span className="text-background font-display font-bold text-sm">E</span>
            </div>
            <span className="font-display font-medium text-lg tracking-tight">Echo</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-[30ch]">
            Your best work deserves a second life. Redistribute your ideas across every platform.
          </p>
        </div>
        <div>
          <h4 className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Product</h4>
          <div className="flex flex-col gap-3">
            <Link to="/features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/examples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Examples</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Company</h4>
          <div className="flex flex-col gap-3">
            <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="font-mono-brand text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal</h4>
          <div className="flex flex-col gap-3">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono-brand text-[11px] text-muted-foreground">© 2026 Echo. All rights reserved.</p>
        <p className="font-mono-brand text-[11px] text-muted-foreground">Crafted for independent creators.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
