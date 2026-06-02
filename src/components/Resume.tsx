import { motion } from "motion/react";
import {
  Download,
  GraduationCap,
  Laptop,
  Layers,
  BookOpen,
} from "lucide-react";

import "./Resume.css";

export function Resume() {
  const fadeRight = {
    hidden: { opacity: 0, x: 80 },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -80 },

    visible: {
      opacity: 1,
      x: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="resume" className="resume-section">
      <div className="resume-container">

        {/* TITLE */}
        <motion.h2
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-title"
        >
          My{" "}

          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Resume
          </span>
        </motion.h2>

        <motion.p
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-subtitle"
        >
          My education, training, skills, and professional journey
        </motion.p>

        {/* DOWNLOAD BUTTON */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-download-top"
        >
          <a
            href="/Akash_Kumar_Gupta_Resume.pdf"
            download
            className="download-btn"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>

        {/* PROFILE BOX */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="profile-box"
        >
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="profile-name"
          >
            Akash Kumar Gupta
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="profile-role"
          >
            MERN Stack Developer | PHP Developer | Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.7 }}
            className="profile-info"
          >
            📍 Mohali / Chandigarh, India
            <br />
            📩 akashgjimt@gmail.com
            &nbsp;|&nbsp;
            📱 +91 9798688567
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="profile-summary"
          >
            Passionate Full Stack Web Developer focused on
            building responsive and user-friendly web
            applications using MERN Stack and PHP
            technologies.

            Currently learning Artificial Intelligence
            and Machine Learning to expand technical
            knowledge and development skills.
          </motion.p>

          {/* PROFILE LINKS */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="profile-links"
          >
            <a
              href="https://github.com/akashgupta0123"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link-btn"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/akash-kumar-gupta-873433316/"
              target="_blank"
              rel="noopener noreferrer"
              className="profile-link-btn"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* EDUCATION */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <GraduationCap className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree:
                  "Bachelor of Computer Applications (BCA)",

                school:
                  "Gian Jyoti Institute of Management and Technology",

                period:
                  "Affiliated with I.K. Gujral Punjab Technical University (IKGPTU)",

                detail: "Completed",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{edu.degree}</h4>

                <p className="resume-card-school">
                  {edu.school}
                </p>

                <p className="resume-card-period">
                  {edu.period}
                  {" — "}
                  <span>{edu.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* TRAINING */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-section-block"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box education-icon"
            >
              <BookOpen className="icon" />
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Industrial Training
            </motion.h3>
          </div>

          <div className="resume-list">
            {[
              {
                degree:
                  "Frontend Development Training",

                school:
                  "Industrial Training Program",

                period: "45 Days",

                detail: "Completed",
              },

              {
                degree:
                  "UI/UX Design Training",

                school:
                  "Industrial Training Program",

                period: "45 Days",

                detail: "Completed",
              },
            ].map((training, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="resume-card"
              >
                <h4>{training.degree}</h4>

                <p className="resume-card-school">
                  {training.school}
                </p>

                <p className="resume-card-period">
                  {training.period}
                  {" — "}
                  <span>{training.detail}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PROJECTS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box project-icon"
            >
              <Laptop className="icon" />
            </motion.div>

            <h3>Projects</h3>
          </div>

          <ul className="project-list">
            {[
              [
                "🛡️ CodeGuardian — AI-powered code review and security analysis platform",

                "🤝 CollabZone — MERN-based brand and influencer collaboration platform",

                "📋 Task Manager — Productivity application for task tracking, prioritization, and workflow management",

                "🌦️ Weather App — Real-time weather dashboard with API integration",

                "🌐 Portfolio Website — Responsive personal portfolio built with React.js",

                "🧮 Calculator App — Modern calculator with theme switching and animations",
              ]
            ].map((project, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: i * 0.2,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
              >
                {project}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="resume-skills"
        >
          <div className="resume-heading">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="icon-box skills-icon"
            >
              <Layers className="icon" />
            </motion.div>

            <h3>Skills</h3>
          </div>

          <div className="skill-tags">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "PHP",
              "MongoDB",
              "MySQL",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "GitHub",
              "Figma",
              "Postman",
              "AI/ML (Learning)",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: i * 0.06,
                  duration: 0.4,
                }}
                viewport={{ once: true }}
                className="skill-chip"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}