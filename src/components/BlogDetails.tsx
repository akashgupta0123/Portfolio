import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft, Calendar, Clock, Github, ExternalLink,
  BookOpen, Layers, Lightbulb, Target
} from "lucide-react";
import { blogs } from "./blogData.js";
import "./BlogDetails.css";

interface BlogDetailsProps {
  blogId: number;
  onBack: () => void;
}

export function BlogDetails({ blogId, onBack }: BlogDetailsProps) {
  const blog = blogs.find(b => b.id === blogId);
  const [readProgress, setReadProgress] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [blogId]);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const scrollHeight = el.scrollHeight - el.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setReadProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!blog) {
    return (
      <div className="blog-details-not-found">
        <p>Blog not found.</p>
        <button onClick={onBack}>Go Back</button>
      </div>
    );
  }

  const paragraphs = blog.content
    .trim()
    .split("\n")
    .map((line: string, i: number) => {
      const trimmed = line.trim();

      if (!trimmed) return <div key={i} className="bd-spacer" />;

      if (trimmed.startsWith("## "))
        return <h2 key={i} className="bd-h2">{trimmed.replace("## ", "")}</h2>;

      if (trimmed.startsWith("### "))
        return <h3 key={i} className="bd-h3">{trimmed.replace("### ", "")}</h3>;

      if (trimmed === "---")
        return <hr key={i} className="bd-divider" />;

      if (trimmed.startsWith("- "))
        return <li key={i} className="bd-list-item">{trimmed.replace("- ", "")}</li>;

      if (trimmed.startsWith("**") && trimmed.endsWith("**"))
        return <p key={i} className="bd-bold">{trimmed.replace(/\*\*/g, "")}</p>;

      if (trimmed.startsWith("> "))
        return <blockquote key={i} className="bd-quote">{trimmed.replace("> ", "")}</blockquote>;

      if (trimmed.startsWith("```")) return null;

      return <p key={i} className="bd-paragraph">{trimmed}</p>;
    });

  return (
    <div className="blog-details-page">

      {/* READING PROGRESS BAR */}
      <div className="bd-progress-bar">
        <div className="bd-progress-fill" style={{ width: `${readProgress}%` }} />
      </div>

      {/* BACK BUTTON */}
      <motion.button
        className="bd-back-btn"
        onClick={onBack}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: -4 }}
      >
        <ArrowLeft size={18} /> Back to Blog
      </motion.button>

      {/* HERO IMAGE */}
      <motion.div
        className="bd-hero"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <img src={blog.image} alt={blog.title} className="bd-hero-img" loading="lazy" />
        <div className="bd-hero-overlay" />
        <div className="bd-hero-content">
          <span className="bd-category-badge">{blog.category}</span>
          <h1 className="bd-title">{blog.title}</h1>
          <div className="bd-meta">
            <span><Calendar size={15} /> {blog.date}</span>
            <span><Clock size={15} /> {blog.readTime}</span>
          </div>
        </div>
      </motion.div>

      {/* MAIN LAYOUT */}
      <div className="bd-layout">

        {/* LEFT — ARTICLE */}
        <motion.div
          className="bd-article"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="bd-content">
            {paragraphs}
          </div>
        </motion.div>

        {/* RIGHT — SIDEBAR */}
    <aside className="bd-sidebar">
        <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        >

          {/* READING PROGRESS */}
          <div className="bd-sidebar-card">
            <h4><BookOpen size={16} /> Reading Progress</h4>
            <div className="bd-sidebar-progress-track">
              <div
                className="bd-sidebar-progress-fill"
                style={{ width: `${readProgress}%` }}
              />
            </div>
            <p className="bd-sidebar-progress-label">{Math.round(readProgress)}% completed</p>
          </div>

          {/* TECH STACK */}
          {blog.techStack && blog.techStack.length > 0 && (
            <div className="bd-sidebar-card">
              <h4><Layers size={16} /> Tech Stack</h4>
              <div className="bd-sidebar-tags">
                {blog.techStack.map((t: string, i: number) => (
                  <span key={i} className="bd-tag bd-tag-blue">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* SKILLS */}
          {blog.skills && blog.skills.length > 0 && (
            <div className="bd-sidebar-card">
              <h4><Lightbulb size={16} /> Skills Used</h4>
              <div className="bd-sidebar-tags">
                {blog.skills.map((s: string, i: number) => (
                  <span key={i} className="bd-tag bd-tag-purple">{s}</span>
                ))}
              </div>
            </div>
          )}

          {/* QUICK FACTS */}
          <div className="bd-sidebar-card">
            <h4><Target size={16} /> Quick Facts</h4>
            <ul className="bd-quick-facts">
              <li><span>Category</span><strong>{blog.category}</strong></li>
              <li><span>Date</span><strong>{blog.date}</strong></li>
              <li><span>Read Time</span><strong>{blog.readTime}</strong></li>
            </ul>
          </div>

          {/* LINKS */}
          {(blog.github || blog.demo) && (
            <div className="bd-sidebar-card">
              <h4>🔗 Links</h4>
              <div className="bd-sidebar-links">
                {blog.github && (
                  <a href={blog.github} target="_blank" rel="noreferrer" className="bd-link-btn bd-link-github">
                    <Github size={15} /> GitHub
                  </a>
                )}
                {blog.demo && (
                  <a href={blog.demo} target="_blank" rel="noreferrer" className="bd-link-btn bd-link-demo">
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          )}

        </motion.div>
        </aside>
      </div>
    </div>
  );
}