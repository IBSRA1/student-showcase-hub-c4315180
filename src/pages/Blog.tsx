import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Demo blog data since there's no backend connected
const demoBlogs = [
  { id: "1", title: "Getting Started with Web Development", summary: "A beginner-friendly guide to modern web development tools and practices.", thumbnail: "/blog-1-DT5WTh4A.jpg", date: "Apr 5, 2026", status: "posted" },
  { id: "2", title: "Mastering CSS Grid Layouts", summary: "Learn how to create complex, responsive layouts with CSS Grid in minutes.", thumbnail: "/blog-2-CJfrtdEk.jpg", date: "Apr 3, 2026", status: "posted" },
  { id: "3", title: "JavaScript Best Practices 2026", summary: "Write cleaner, faster, and more maintainable JavaScript with these tips.", thumbnail: "/blog-3-sgqVMcXl.jpg", date: "Mar 28, 2026", status: "posted" },
  { id: "4", title: "Introduction to TypeScript", summary: "Why TypeScript is becoming the standard for modern web applications.", thumbnail: "/blog-4-wzS92LNt.jpg", date: "Mar 22, 2026", status: "posted" },
  { id: "5", title: "Building Responsive UIs", summary: "Techniques and strategies for building UIs that look great on every device.", thumbnail: "/blog-5-HJcpsHrI.jpg", date: "Mar 15, 2026", status: "posted" },
  { id: "6", title: "The Future of AI in Education", summary: "How artificial intelligence is transforming the way students learn and grow.", thumbnail: "/blog-6-BuTfOLuI.jpg", date: "Mar 10, 2026", status: "posted" },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 py-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="text-center mb-12">
            <h1 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight">
              Stay <span className="text-gradient">Curious</span>
            </h1>
            <p className="text-muted-foreground mt-4 text-lg">
              Explore the latest insights on design, education, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/article/${blog.id}`}
                className="group glass-card overflow-hidden flex flex-col hover:-translate-y-1.5 hover:border-primary transition-all duration-300"
              >
                <div className="w-full h-[190px] overflow-hidden">
                  <img src={blog.thumbnail} alt={blog.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-[0.72rem] font-bold uppercase tracking-[0.1em] text-accent mb-3">✦ Insight</div>
                  <h2 className="text-lg font-bold leading-snug mb-3">{blog.title}</h2>
                  <p className="text-muted-foreground text-sm flex-1 line-clamp-2">{blog.summary}</p>
                  <div className="flex justify-between items-center mt-4 pt-4 border-t border-white/5">
                    <span className="text-xs text-muted-foreground">{blog.date}</span>
                    <span className="text-sm font-semibold text-primary">Read →</span>
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
