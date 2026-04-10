import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const articles: Record<string, { title: string; thumbnail: string; date: string; readTime: string; content: string }> = {
  "1": {
    title: "Getting Started with Web Development",
    thumbnail: "/blog-1-DT5WTh4A.jpg",
    date: "Apr 5, 2026",
    readTime: "5 min",
    content: `<p>Web development is one of the most exciting and accessible fields in technology today. Whether you're a complete beginner or transitioning from another field, the ecosystem offers incredible tools and resources.</p>
    <h2>Setting Up Your Environment</h2>
    <p>The first step is setting up your development environment. You'll need a code editor like VS Code, a modern browser with developer tools, and Node.js for running JavaScript outside the browser.</p>
    <h2>The Foundation: HTML, CSS & JavaScript</h2>
    <p>These three technologies form the bedrock. HTML provides structure, CSS handles visual design, and JavaScript adds interactivity and logic.</p>
    <blockquote>The best way to learn web development is by building projects. Start small, stay consistent, and don't be afraid to make mistakes.</blockquote>
    <p>As you progress, frameworks like React, Vue, and Angular will help you build more complex applications efficiently. The key is mastering fundamentals first.</p>`,
  },
  "2": {
    title: "Mastering CSS Grid Layouts",
    thumbnail: "/blog-2-CJfrtdEk.jpg",
    date: "Apr 3, 2026",
    readTime: "4 min",
    content: `<p>CSS Grid is a powerful two-dimensional layout system that handles both columns and rows, making complex layouts surprisingly simple.</p>
    <h2>Why CSS Grid?</h2>
    <p>Before Grid, developers relied on floats, inline-block, and Flexbox. While Flexbox excels at one-dimensional layouts, Grid gives you full control over both axes simultaneously.</p>
    <p>With just a few lines of CSS, you can create layouts that would have required complex workarounds in the past.</p>`,
  },
  "3": {
    title: "JavaScript Best Practices 2026",
    thumbnail: "/blog-3-sgqVMcXl.jpg",
    date: "Mar 28, 2026",
    readTime: "6 min",
    content: `<p>JavaScript continues to evolve rapidly. Staying current with best practices is essential for writing clean, maintainable code.</p>
    <h2>Embrace Modern Syntax</h2>
    <p>Use ES2024+ features like optional chaining, nullish coalescing, and top-level await. They make your code more concise and expressive.</p>
    <h2>Consider TypeScript</h2>
    <p>For larger projects, TypeScript's static typing catches bugs early and dramatically improves the development experience.</p>`,
  },
  "4": { title: "Introduction to TypeScript", thumbnail: "/blog-4-wzS92LNt.jpg", date: "Mar 22, 2026", readTime: "3 min", content: "<p>TypeScript adds static typing to JavaScript, catching errors at development time rather than runtime. It's become essential for modern web applications.</p>" },
  "5": { title: "Building Responsive UIs", thumbnail: "/blog-5-HJcpsHrI.jpg", date: "Mar 15, 2026", readTime: "4 min", content: "<p>Responsive design ensures your application adapts to all screen sizes. Using CSS media queries, flexible grids, and modern layout tools, you can create interfaces that work everywhere.</p>" },
  "6": { title: "The Future of AI in Education", thumbnail: "/blog-6-BuTfOLuI.jpg", date: "Mar 10, 2026", readTime: "5 min", content: "<p>Artificial intelligence is transforming education through personalized learning, automated assessment, and intelligent tutoring systems that adapt to individual students.</p>" },
};

const Article = () => {
  const { id } = useParams();
  const article = articles[id || ""];

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col relative z-[1]">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center opacity-0 animate-fade-in">
            <div className="text-4xl mb-4">✦</div>
            <p className="text-muted-foreground mb-4">Article not found</p>
            <Link to="/blog" className="text-sm text-primary font-medium hover:underline underline-offset-4">← Back to Blog</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative z-[1]">
      <Navbar />
      <main className="flex-1 py-12 pb-20">
        <div className="max-w-[1100px] mx-auto px-6">
          {/* Header */}
          <div className="max-w-2xl mx-auto text-center mb-10 opacity-0 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/8 border border-primary/10 mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-primary">Insight</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-5">
              {article.title}
            </h1>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <span>{article.date}</span>
              <span>·</span>
              <span>{article.readTime} read</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="opacity-0 animate-slide-up stagger-2">
            <img
              src={article.thumbnail}
              alt={article.title}
              className="w-full max-h-[420px] object-cover rounded-3xl mb-12"
            />
          </div>

          {/* Content */}
          <article
            className="max-w-2xl mx-auto text-base leading-[1.85] text-foreground/85 opacity-0 animate-slide-up stagger-3
              [&_p]:mb-6
              [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight
              [&_blockquote]:border-l-2 [&_blockquote]:border-primary/40 [&_blockquote]:pl-6 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-8"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Back */}
          <div className="max-w-2xl mx-auto mt-16">
            <div className="divider mb-8" />
            <Link to="/blog" className="text-sm text-primary font-medium hover:underline underline-offset-4">← All articles</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
