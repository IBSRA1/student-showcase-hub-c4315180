import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Editor = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminPassword")) navigate("/auth");
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-8 pb-16">
        <div className="max-w-[860px] mx-auto px-8">
          <div className="mb-5">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Article Title</label>
            <input
              type="text"
              className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/15 placeholder:text-muted-foreground transition-all text-lg"
              placeholder="Enter a catchy title…"
            />
          </div>

          <div className="mb-5">
            <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Content</label>
            <textarea
              className="w-full px-4 py-3 bg-white/[0.93] border border-white/10 rounded-lg text-slate-800 min-h-[420px] focus:outline-none focus:border-primary transition-all resize-y"
              placeholder="Write your article content here..."
            />
            <p className="text-xs text-muted-foreground mt-2">💡 Rich text editor will be available when backend is connected.</p>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-8">
            <div className="glass-card p-5" style={{ boxShadow: "none", border: "1px solid rgba(255,255,255,0.05)" }}>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Multimedia Cover</label>
              <div className="relative p-6 border-2 border-dashed border-white/10 rounded-lg text-center text-muted-foreground text-sm bg-white/[0.02] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all">
                <input type="file" accept="image/*,video/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                📁 Upload Image or Video
              </div>
            </div>
            <div className="glass-card p-5" style={{ boxShadow: "none", border: "1px solid rgba(255,255,255,0.05)" }}>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Audio Narration</label>
              <div className="relative p-6 border-2 border-dashed border-white/10 rounded-lg text-center text-muted-foreground text-sm bg-white/[0.02] hover:border-primary hover:bg-primary/5 cursor-pointer transition-all">
                <input type="file" accept="audio/*" className="absolute inset-0 opacity-0 cursor-pointer" />
                🎙️ Upload Audio (Optional)
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 mb-8">
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Status</label>
              <select className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer">
                <option value="posted">Posted (Public)</option>
                <option value="draft">Draft</option>
                <option value="scheduled">Scheduled</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Access Level</label>
              <select className="w-full px-4 py-3 bg-black/25 border border-white/7 rounded-lg text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer">
                <option value="free">Free (Everyone)</option>
                <option value="students">Students Only</option>
                <option value="premium">Premium (Paid)</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-4 rounded-lg btn-brand text-white font-bold transition-all border-none cursor-pointer">
              Save & Publish
            </button>
            <Link to="/admin/blogs" className="py-4 px-8 rounded-lg bg-white/[0.04] border border-white/10 text-muted-foreground font-semibold hover:bg-white/[0.07] transition-all flex items-center justify-center">
              Cancel
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Editor;
