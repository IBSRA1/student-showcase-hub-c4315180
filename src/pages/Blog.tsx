import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const demoBlogs = [
  { id: "1", title: "Getting Started with Web Development", summary: "A beginner-friendly guide to modern web development tools and practices.", thumbnail: "/blog-1-DT5WTh4A.jpg", date: "Apr 5, 2026" },
  { id: "2", title: "Mastering CSS Grid Layouts", summary: "Learn how to create complex, responsive layouts with CSS Grid.", thumbnail: "/blog-2-CJfrtdEk.jpg", date: "Apr 3, 2026" },
  { id: "3", title: "JavaScript Best Practices 2026", summary: "Write cleaner, faster, and more maintainable JavaScript.", thumbnail: "/blog-3-sgqVMcXl.jpg", date: "Mar 28, 2026" },
  { id: "4", title: "Introduction to TypeScript", summary: "Why TypeScript is becoming the standard for modern web apps.", thumbnail: "/blog-4-wzS92LNt.jpg", date: "Mar 22, 2026" },
  { id: "5", title: "Building Responsive UIs", summary: "Techniques for building UIs that look great on every device.", thumbnail: "/blog-5-HJcpsHrI.jpg", date: "Mar 15, 2026" },
  { id: "6", title: "The Future of AI in Education", summary: "How AI is transforming the way students learn and grow.", thumbnail: "/blog-6-BuTfOLuI.jpg", date: "Mar 10, 2026" },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 py-16 pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
              Stay <span className="text-gradient">Curious</span>
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Insights on design, education, and technology from IBSR.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {demoBlogs.map((blog, i) => (
              <Link
                key={blog.id}
                to={`/blog/article/${blog.id}`}
                className={`group glass rounded-2xl overflow-hidden flex flex-col card-hover opacity-0 animate-slide-up stagger-${i + 1}`}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary mb-2.5">Insight</span>
                  <h2 className="text-base font-semibold leading-snug mb-2 group-hover:text-primary transition-colors">{blog.title}</h2>
                  <p className="text-sm text-muted-foreground flex-1 line-clamp-2 leading-relaxed">{blog.summary}</p>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                    <span className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
