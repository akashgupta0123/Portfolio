import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export function ProjectsFeed() {
  const projects = [
    {
      title: "CollabZone — Influencer Platform",
      desc: "Full-stack MERN influencer collaboration platform with JWT auth, role-based dashboards, and campaign management.",
      images: [
        "/gallery/Projects/collabzone.png",
      ],
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio built with React.js and TypeScript showcasing projects, skills, and certifications.",
      images: [
        "/gallery/Projects/portfolio.png",
      ],
    },
    {
      title: "Calculator App",
      desc: "Responsive calculator with modern UI, dark/light theme toggle, and smooth hover animations.",
      images: [
        "/gallery/Projects/calculator.png",
      ],
    },
    {
      title: "TaskFlow - Task Management App",
      desc: "Modern task management application with intuitive boards, task organization, team collaboration features, and a responsive user interface designed to boost productivity.",
      images: [
        "/gallery/Projects/task.png",
      ],
    },
  ];

  return (
    <section id="projects" className="g-projects-feed">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="g-title"
      >
        My <span className="grad">Projects</span>
      </motion.h2>

      {projects.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.3, duration: 0.7, ease: "easeOut" }}
        >
          <GalleryProjectCard project={project} />
        </motion.div>
      ))}
    </section>
  );
}

function GalleryProjectCard({ project }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen]   = useState(false);

  const next = () => setIndex((p) => (p + 1) % project.images.length);
  const prev = () => setIndex((p) => (p === 0 ? project.images.length - 1 : p - 1));

  const fade = {
    initial:    { opacity: 0, x: 30 },
    animate:    { opacity: 1, x: 0  },
    exit:       { opacity: 0, x: -30 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  return (
    <>
      <div className="g-project-card">
        <div className="g-carousel" onClick={() => setOpen(true)}>
          <AnimatePresence mode="wait">
            <motion.img
              key={project.images[index]}
              src={project.images[index]}
              alt={project.title}
              className="g-cimg"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
            />
          </AnimatePresence>
        </div>

        {project.images.length > 1 && (
          <div className="g-carousel-nav">
            <button className="g-carousel-btn" onClick={prev}><ChevronLeft /></button>
            <button className="g-carousel-btn" onClick={next}><ChevronRight /></button>
          </div>
        )}

        <h3 className="g-project-title">{project.title}</h3>
        <p className="g-caption">{project.desc}</p>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="g-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setOpen(false)}
          >
            <div className="g-modal-content" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={project.images[index]}
                  src={project.images[index]}
                  alt="fullscreen"
                  className="g-modal-img"
                  variants={fade}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              </AnimatePresence>

              <button className="g-close-modal" onClick={() => setOpen(false)}>
                <X size={30} />
              </button>

              {project.images.length > 1 && (
                <>
                  <button className="g-modal-left"  onClick={prev}><ChevronLeft  size={40} /></button>
                  <button className="g-modal-right" onClick={next}><ChevronRight size={40} /></button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}