import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16 min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-10">
            <h1 className="font-display text-3xl font-medium tracking-[-0.04em] mb-2">Start creating.</h1>
            <p className="text-sm text-muted-foreground">Free plan includes 5 articles per month.</p>
          </div>

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
              <label className="font-mono-brand text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-2 block">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-4 bg-secondary/50 border-subtle border-[0.5px] text-sm font-body focus:outline-none focus:ring-1 focus:ring-primary transition-all"
                placeholder="Min 8 characters"
              />
            </div>
            <button
              type="submit"
              className="h-12 bg-foreground text-background text-sm font-medium hover:bg-primary transition-colors duration-500 ease-studio mt-2"
            >
              Create Account
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-6 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-foreground font-medium hover:text-primary transition-colors">Log in</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
