import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoBlogs = [
  { id: "1", title: "Getting Started with Web Development", status: "posted", date: "Apr 5, 2026" },
  { id: "2", title: "Mastering CSS Grid Layouts", status: "posted", date: "Apr 3, 2026" },
  { id: "3", title: "JavaScript Best Practices 2026", status: "posted", date: "Mar 28, 2026" },
  { id: "4", title: "Introduction to TypeScript", status: "draft", date: "Mar 22, 2026" },
  { id: "5", title: "Building Responsive UIs", status: "posted", date: "Mar 15, 2026" },
  { id: "6", title: "The Future of AI in Education", status: "scheduled", date: "Mar 10, 2026" },
];

const statusStyles: Record<string, string> = {
  posted: "bg-green-500/15 text-green-300 border-green-500/20",
  draft: "bg-slate-500/15 text-slate-400 border-slate-500/20",
  scheduled: "bg-amber-500/15 text-amber-300 border-amber-500/20",
};

const AdminBlogs = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("adminPassword")) navigate("/auth");
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <div className="flex-1 py-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight">
                Blog <span className="text-gradient">Articles</span>
              </h1>
              <p className="text-muted-foreground text-sm mt-2">Create, edit, and manage your published content.</p>
            </div>
            <Link to="/admin/editor" className="text-sm font-semibold px-5 py-2 rounded-lg btn-brand text-white transition-all">
              + New Article
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demoBlogs.map((blog) => (
              <div key={blog.id} className="glass-card p-6 flex flex-col gap-3 hover:border-primary hover:-translate-y-1 transition-all duration-200">
                <div className="flex justify-between items-start">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-[0.7rem] font-bold uppercase tracking-wider border ${statusStyles[blog.status]}`}>
                    {blog.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{blog.date}</span>
                </div>
                <h3 className="text-lg font-bold leading-snug">{blog.title}</h3>
                <div className="flex gap-3 mt-auto pt-3">
                  <Link to={`/admin/editor?id=${blog.id}`} className="flex-1 text-center text-sm font-semibold py-2 rounded-lg bg-white/[0.04] border border-white/10 text-muted-foreground hover:bg-white/[0.07] hover:text-foreground transition-all">
                    Edit
                  </Link>
                  <button className="text-sm font-semibold py-2 px-4 rounded-lg bg-destructive/10 text-red-300 border border-destructive/20 hover:bg-destructive/20 transition-all">
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminBlogs;
