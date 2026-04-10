import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.toLowerCase() === "admin@storyweaver.education") {
      localStorage.setItem("adminPassword", password);
      navigate("/admin");
    } else {
      localStorage.setItem("readerEmail", email);
      const next = searchParams.get("next") || "/blog";
      navigate(next);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="glass-card p-8 max-w-[440px] w-full">
          <h1 className="text-4xl font-extrabold tracking-tight text-center mb-3">
            Welcome to <span className="text-gradient">Portal</span>
          </h1>
          <p className="text-center text-muted-foreground mb-8">
            Sign in to access student features or manage the platform.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email Address</label>
              <input
                type="email"
                className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5">
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Identification Code / Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="w-full py-4 mt-4 rounded-lg btn-brand text-white font-semibold transition-all border-none cursor-pointer">
              Continue to Dashboard →
            </button>
          </form>
          <div className="mt-10 text-center text-sm text-muted-foreground leading-relaxed">
            Looking to submit your work?<br />
            <Link to="/" className="text-accent font-semibold hover:underline">Return to Portfolio Submissions</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
