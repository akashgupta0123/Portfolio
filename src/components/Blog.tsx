import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogs } from "./blogData.js";
import "./Blog.css";

interface BlogProps {
  theme?: "light" | "dark";
  onOpenBlog: (id: number) => void;
}

export function Blog({ onOpenBlog }: BlogProps) {
  return (
    <section id="blog" className="blog-section">
      <div className="blog-wrapper">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="blog-header"
        >
          <h2 className="blog-main-title">
            My <span className="blog-gradient-text">Thoughts & Stories</span>
          </h2>
          <p className="blog-main-subtitle">
            Development journeys, lessons learned, and technical deep-dives from real projects.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="blog-grid">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              className="blog-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              {/* IMAGE */}
              <div className="blog-card-image-wrapper">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-card-image"
                  loading="lazy"
                />
                <div className="blog-card-image-overlay" />
                <span className="blog-category-badge">{blog.category}</span>
              </div>

              {/* CONTENT */}
              <div className="blog-card-content">
                <h3 className="blog-card-title">{blog.title}</h3>
                <p className="blog-card-desc">{blog.shortDesc}</p>

                <div className="blog-card-meta">
                  <span><Calendar size={13} /> {blog.date}</span>
                  <span><Clock size={13} /> {blog.readTime}</span>
                </div>

                <button
                  className="blog-read-more"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenBlog(blog.id);
                  }}
                >
                  Read More <ArrowRight size={15} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}