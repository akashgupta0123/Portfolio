import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import "./projects.css";

const PROJECTS = [
  {
    title: "🤝 CollabZone",
    category: "Full Stack MERN Application",
    desc: "A full-stack influencer collaboration platform where brands can connect with influencers for promotional campaigns. Features include JWT authentication, role-based dashboards, campaign management, analytics, and responsive UI.",
    ss: "/gallery/Projects/collabzone.png",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    live: "https://github.com/akashgupta0123",
    code: "https://github.com/akashgupta0123",
  },
  {
    title: "🌐 Portfolio Website",
    category: "Frontend Development",
    desc: "A modern responsive portfolio website designed to showcase projects, skills, certifications, and contact information with interactive UI and smooth animations.",
    ss: "/gallery/Projects/portfolio.png",
    tech: ["React.js", "TypeScript", "CSS3"],
    live: "https://akash-portfolio-tsev.onrender.com/",
    code: "https://github.com/akashgupta0123",
  },
  {
    title: "🧮 Calculator App",
    category: "Frontend Project",
    desc: "A responsive calculator application with modern UI, dark/light theme support, hover animations, and clean user interaction design.",
    ss: "/gallery/Projects/calculator.png",
    tech: ["HTML5", "CSS3", "JavaScript"],
    live: "https://github.com/akashgupta0123",
    code: "https://github.com/akashgupta0123",
  },
  // {
  //   title: "🎨 Frontend UI/UX Projects",
  //   category: "UI/UX & Frontend",
  //   desc: "A collection of responsive UI designs and frontend layouts created during frontend and UI/UX training, focused on user experience and clean interface design.",
  //   ss: "/uiux.png",
  //   tech: ["HTML", "CSS", "JavaScript", "Figma"],
  //   live: "https://github.com/akashgupta0123",
  //   code: "https://github.com/akashgupta0123",
  // },
  {
  title: "📋 TaskFlow - Task Management App",
  category: "Frontend Development",
  desc: "A responsive task management application designed to help users organize tasks, track progress, and improve productivity through an intuitive and modern user interface.",
  ss: "/gallery/Projects/task.png",
  tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
  live: "https://task-flow-zp89.onrender.com",
  code: "https://github.com/akashgupta0123"
},
];

export default function Projects() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-20% 0px" });

  return (
    <motion.section
      ref={sectionRef}
      className="projects-container"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      id="projects"
    >
      <motion.div
        className="projects-card"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.18 } },
        }}
      >
        {/* Title */}
        <motion.h2
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="projects-title"
        >
          🚀 My <span className="proj">Projects</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="projects-subtitle"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          Some of the projects I have built using modern web technologies.
        </motion.p>

        {/* Grid */}
        <div className="projects-grid">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              className="project-card"
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: "easeOut",
                    delay: idx * 0.1,
                  },
                },
              }}
              whileHover={{ scale: 1.04 }}
            >
              {/* Project Image */}
              <motion.div
  className="project-image-wrapper"
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.3 }}
>
  {/* Shine Effect */}
  <div className="project-shine"></div>

  <img
    src={p.ss}
    alt={p.title}
    className="project-image"
  />

  <span className="project-category-badge">
    {p.category}
  </span>
</motion.div>

              <div className="project-content">
                <h3 className="project-heading">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tech">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="code-btn"
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.08 }}
                    className="live-btn"
                  >
                    <ExternalLink size={14} /> Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}