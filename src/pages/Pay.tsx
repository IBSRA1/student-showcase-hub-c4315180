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
      <div className="flex-1 flex items-center justify-center p-12">
        <div className="glass-card p-8 max-w-[480px] w-full text-center">
          <div className="text-5xl mb-5">🔒</div>
          <h1 className="text-3xl font-extrabold tracking-tight mb-3">
            Premium <span className="text-gradient">Content</span>
          </h1>
          <p className="text-muted-foreground mb-6">This article is reserved for students and premium subscribers.</p>

          <div className="text-5xl font-extrabold text-gradient">$9.99</div>
          <div className="text-muted-foreground text-sm mb-8">One-time · Lifetime access · All current & future articles</div>

          <ul className="text-left flex flex-col gap-4 my-8">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-muted-foreground text-sm">
                <span className="w-[22px] h-[22px] rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center text-xs text-green-300 shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>

          <button className="w-full py-5 rounded-lg btn-brand text-white font-bold text-lg transition-all border-none cursor-pointer">
            Get Lifetime Access →
          </button>

          <p className="mt-6 text-xs text-muted-foreground">
            Already a registered student?{" "}
            <Link to="/auth" className="text-accent font-semibold hover:underline">Sign in with your student email</Link> for free access.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pay;
