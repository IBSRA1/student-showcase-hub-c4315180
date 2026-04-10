import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles: Record<string, { title: string; thumbnail: string; date: string; content: string }> = {
  "1": {
    title: "Getting Started with Web Development",
    thumbnail: "/blog-1-DT5WTh4A.jpg",
    date: "Apr 5, 2026",
    content: `<p>Web development is one of the most exciting and accessible fields in technology today. Whether you're a complete beginner or transitioning from another field, the web development ecosystem offers a wealth of tools and resources to help you get started.</p>
    <h2>Setting Up Your Environment</h2>
    <p>The first step in your web development journey is setting up your development environment. You'll need a code editor (VS Code is highly recommended), a modern web browser with developer tools, and Node.js for running JavaScript outside the browser.</p>
    <h2>HTML, CSS, and JavaScript</h2>
    <p>These three technologies form the foundation of web development. HTML provides structure, CSS handles presentation and styling, and JavaScript adds interactivity and logic to your web pages.</p>
    <blockquote>The best way to learn web development is by building projects. Start small, stay consistent, and don't be afraid to make mistakes.</blockquote>
    <p>As you progress, you'll discover frameworks and libraries like React, Vue, and Angular that can help you build more complex applications efficiently.</p>`,
  },
  "2": {
    title: "Mastering CSS Grid Layouts",
    thumbnail: "/blog-2-CJfrtdEk.jpg",
    date: "Apr 3, 2026",
    content: `<p>CSS Grid is a powerful layout system that allows you to create complex, responsive web layouts with ease. It's a two-dimensional system, meaning it can handle both columns and rows.</p>
    <h2>Why CSS Grid?</h2>
    <p>Before CSS Grid, developers relied on floats, inline-block, and Flexbox for layouts. While Flexbox is excellent for one-dimensional layouts, CSS Grid excels at two-dimensional layouts where you need control over both rows and columns simultaneously.</p>
    <p>With just a few lines of CSS, you can create layouts that would have required complex hacks in the past.</p>`,
  },
  "3": {
    title: "JavaScript Best Practices 2026",
    thumbnail: "/blog-3-sgqVMcXl.jpg",
    date: "Mar 28, 2026",
    content: `<p>JavaScript continues to evolve, and staying up-to-date with best practices is essential for writing clean, maintainable code.</p>
    <h2>Use Modern Syntax</h2>
    <p>Embrace ES2024+ features like optional chaining, nullish coalescing, and top-level await. These features make your code more concise and readable.</p>
    <h2>TypeScript Integration</h2>
    <p>Consider using TypeScript for larger projects. The type safety it provides can catch bugs early and improve developer experience significantly.</p>`,
  },
  "4": { title: "Introduction to TypeScript", thumbnail: "/blog-4-wzS92LNt.jpg", date: "Mar 22, 2026", content: "<p>TypeScript adds static typing to JavaScript, helping you catch errors during development rather than at runtime. It's become the standard for modern web applications.</p>" },
  "5": { title: "Building Responsive UIs", thumbnail: "/blog-5-HJcpsHrI.jpg", date: "Mar 15, 2026", content: "<p>Responsive design ensures your application looks great on all screen sizes. Using CSS media queries, flexible grids, and modern layout systems like CSS Grid and Flexbox, you can create interfaces that adapt seamlessly.</p>" },
  "6": { title: "The Future of AI in Education", thumbnail: "/blog-6-BuTfOLuI.jpg", date: "Mar 10, 2026", content: "<p>Artificial intelligence is revolutionizing education by providing personalized learning experiences, automated grading, and intelligent tutoring systems that adapt to each student's needs.</p>" },
};

const Article = () => {
  const { id } = useParams();
  const article = articles[id || ""];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col relative z-[1]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="text-5xl mb-4">📝</div>
            <p>Article not found.</p>
            <Link to="/blog" className="text-primary font-semibold mt-4 inline-block hover:underline">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 py-12 pb-16">
        <div className="max-w-[1200px] mx-auto px-8">
          <div className="max-w-[760px] mx-auto text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-accent mb-4">✦ Insight</div>
            <h1 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight leading-[1.1] mb-5">
              {article.title}
            </h1>
            <div className="flex justify-center gap-5 text-muted-foreground text-sm">
              <span>📅 {article.date}</span>
              <span>👤 IBSR Education</span>
            </div>
          </div>

          <img
            src={article.thumbnail}
            alt={article.title}
            className="w-full max-h-[480px] object-cover rounded-2xl mb-8 shadow-2xl"
          />

          <div
            className="max-w-[800px] mx-auto text-lg leading-relaxed text-slate-200 [&_p]:mb-6 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-12 [&_h2]:mb-5 [&_h2]:text-foreground [&_blockquote]:border-l-4 [&_blockquote]:border-l-accent [&_blockquote]:pl-8 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-10"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="max-w-[800px] mx-auto mt-16 pt-8 border-t border-white/10 text-center">
            <Link to="/blog" className="text-primary font-semibold hover:underline">← Back to all articles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
