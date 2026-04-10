import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  "Full access to all published articles",
  "Exclusive video content & resources",
  "Priority community access",
  "Direct communication with the author",
];

const Pay = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-sm opacity-0 animate-fade-in">
          <div className="text-center mb-8">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold tracking-tight mb-2">Premium Content</h1>
            <p className="text-sm text-muted-foreground">Unlock full access to all articles and resources</p>
          </div>

          <div className="glass rounded-3xl p-8">
            <div className="text-center mb-8">
              <div className="text-4xl font-black text-gradient mb-1">$9.99</div>
              <div className="text-xs text-muted-foreground">One-time · Lifetime access</div>
            </div>

            <ul className="space-y-3.5 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-green-400">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            <button className="w-full py-3.5 rounded-2xl btn-glow font-semibold text-sm border-none cursor-pointer">
              <span>Get Access →</span>
            </button>
          </div>

          <p className="text-center mt-6 text-xs text-muted-foreground">
            Student?{" "}
            <Link to="/auth" className="text-primary font-medium hover:underline underline-offset-4">Sign in for free access</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pay;
