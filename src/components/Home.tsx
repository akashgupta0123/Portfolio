import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./Home.css";

const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const instagramLogo = "/insta.png";
const whatsappLogo = "/whatsapp.png";

interface HeroProps {
  theme: "light" | "dark";
}

export function Home({ theme }: HeroProps) {
  const roles = [
    "MERN Stack Developer",
    "PHP Developer",
    "Frontend Developer",
    "React Developer",
    "AI/ML Learner",
  ];

  const connectLinks = [
    {
      img: linkedinLogo,
      link: "https://www.linkedin.com/in/akash-kumar-gupta-873433316/",
    },
    {
      img: gmailLogo,
      link: "mailto:akashgjimt@gmail.com",
    },
    {
      img: whatsappLogo,
      link: "https://wa.me/919798688567",
    },
    {
      img: instagramLogo,
      link: "https://www.instagram.com/i_am_akash_1509",
    },
  ];

  const workLinks = [
    {
      img: githubLogo,
      link: "https://github.com/akashgupta0123",
    },
  ];

  const [typedRoles, setTypedRoles] = useState("");

  const rolesText =
    "Building responsive full-stack web applications using MERN Stack and PHP";

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setTypedRoles(rolesText.slice(0, i + 1));

      i++;

      if (i === rolesText.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },

    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
      },
    },
  };

  return (
    <section id="home" className="hero">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url(${
            theme === "light"
              ? "/akash_portfolio_portrait.jpg"
              : "/akash_portfolio_portrait_dark.jpg"
          })`,
        }}
      />

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="hero-name"
          variants={itemVariants}
        >
          Hi! I'm <br />

          <span className="gradient-text hero-name-line">
            AKASH KUMAR GUPTA
          </span>

          <motion.div
            className="hero-line"
            variants={itemVariants}
          />
        </motion.h1>

        <motion.p
          className="hero-intro typing-effect"
          variants={itemVariants}
        >
          {typedRoles}
        </motion.p>

        <motion.p
          className="hero-intro"
          variants={itemVariants}
        >
          Building responsive and modern web applications.
          Focused on MERN Stack and PHP development.
          Currently learning Artificial Intelligence and
          Machine Learning.
        </motion.p>

        <motion.div
          className="hero-roles"
          variants={itemVariants}
        >
          {roles.map((r, i) => (
            <motion.div
              key={i}
              className="role-tag"
              variants={itemVariants}
            >
              {r}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hero-info"
          variants={itemVariants}
        >
          {[
            {
              label: "📍 Location",
              value: "Mohali / Chandigarh, India",
            },

            {
              label: "💼 Expertise",
              value:
                "MERN Stack, PHP, Frontend Development",
            },

            {
              label: "📞 Contact",
              value: "akashgjimt@gmail.com",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              className="info-card"
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              variants={itemVariants}
            >
              <h4>{info.label}</h4>
              <p>{info.value}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="hero-socials"
          variants={itemVariants}
        >
          <div className="social-group">
            <h5>Connect with me</h5>

            <div className="social-icons">
              {connectLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 3,
                  }}
                  variants={itemVariants}
                >
                  <img
                    src={s.img}
                    className="social-icon"
                    alt=""
                  />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="social-group">
            <h5>My Work</h5>

            <div className="social-icons">
              {workLinks.map((s, i) => (
                <motion.a
                  key={i}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    rotate: 3,
                  }}
                  variants={itemVariants}
                >
                  <img
                    src={s.img}
                    className="social-icon"
                    alt=""
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-arrow"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          variants={itemVariants}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}