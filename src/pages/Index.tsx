import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useToast2 } from "@/components/Toast";

const Index = () => {
  const [fileName, setFileName] = useState("Drop your .zip file here or browse");
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const { showToast } = useToast2();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileName(e.target.files?.[0]?.name || "Drop your .zip file here or browse");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    let pct = 0;
    const interval = setInterval(() => {
      pct += Math.random() * 15;
      if (pct >= 100) {
        pct = 100;
        clearInterval(interval);
        setProgress(100);
        showToast("✅ Portfolio submitted successfully!");
        setUploading(false);
        formRef.current?.reset();
        setFileName("Drop your .zip file here or browse");
        setTimeout(() => setProgress(0), 2000);
      } else {
        setProgress(Math.round(pct));
      }
    }, 300);
  };

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="text-xs font-bold tracking-[0.12em] uppercase text-accent mb-4">
          📂 IBSR Education
        </div>
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-center mb-4">
          Portfolio <span className="text-gradient">Submission</span>
        </h1>
        <p className="text-muted-foreground text-lg text-center max-w-[480px] mb-12">
          Upload your project files and information securely to the cloud. You'll get access to exclusive course content right after.
        </p>

        <div className="w-full max-w-[540px]">
          <div className="glass-card p-8">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Full Name</label>
                <input className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all" type="text" placeholder="Your full name" required />
              </div>
              <div className="mb-5">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Group / Section</label>
                <input className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all" type="text" placeholder="e.g. Alpha, Section A" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">WhatsApp</label>
                  <input className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all" type="tel" placeholder="+20 123 456 789" required />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email</label>
                  <input className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="mt-5">
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Project Zip File</label>
                <div className="relative p-8 border-2 border-dashed border-white/10 rounded-lg text-center text-muted-foreground bg-white/[0.02] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all">
                  <input type="file" accept=".zip" required className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" onChange={handleFileChange} />
                  <div className="text-3xl mb-3">📦</div>
                  <div>{fileName}</div>
                </div>
              </div>

              {progress > 0 && (
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full rounded-full progress-gradient transition-all duration-200" style={{ width: `${progress}%` }} />
                  </div>
                  <span className="text-xs text-muted-foreground min-w-[2.5rem] text-right">{progress}%</span>
                </div>
              )}

              <button
                type="submit"
                disabled={uploading}
                className="w-full py-4 mt-6 rounded-lg btn-brand text-white font-bold text-base flex items-center justify-center gap-3 transition-all disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none border-none cursor-pointer"
              >
                <span>{uploading ? `Uploading... ${progress}%` : "Send Submission"}</span>
                {uploading && (
                  <div className="w-[18px] h-[18px] border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
              </button>
            </form>
          </div>

          <p className="text-center mt-6 text-muted-foreground text-sm">
            Already a student?{" "}
            <Link to="/auth" className="text-accent font-semibold hover:underline">
              Sign in to read articles →
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
