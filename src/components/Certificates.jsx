import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Trophy, Medal, Star, Calendar, Building2, X, ExternalLink } from "lucide-react";
import "./Certificates.css";

export const ALL_CERTS = [
  {
    title: "Future of UI Bootcamp",
    org: "C-DAC Mohali",
    date: "2025",
    category: "Training",
    icon: Award,
    img: "/certs/future-ui-bootcamp.jpg",
    description: "Completed a professional bootcamp on modern UI/UX trends under the FutureSkills PRIME initiative conducted by C-DAC Mohali.",
    achievement: "Learned modern UI systems, design trends, responsive layouts, and industry-level frontend practices.",
    whatLearned: "Modern UI frameworks, design systems, responsive layouts, and professional frontend workflows.",
    impact: "Strengthened my frontend skills and gave me industry exposure to modern design practices.",
    skills: ["UI/UX Design", "Frontend Development", "Responsive Design", "Modern Interfaces"],
  },
  {
    title: "Frontend Development Training",
    org: "Alpha IT Managed Services",
    date: "2025",
    category: "Training",
    icon: Trophy,
    img: "/certs/frontend-alpha.jpg",
    description: "Completed a 45-day frontend development training focused on real-world web development skills.",
    achievement: "Built frontend projects using HTML, CSS, JavaScript, and modern UI practices.",
    whatLearned: "HTML5, CSS3, JavaScript fundamentals, and responsive website creation.",
    impact: "Gave me practical experience in building real-world web projects from scratch.",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  },
  {
    title: "Program in Cyber Security",
    org: "NIIT Foundation",
    date: "2023",
    category: "Technical",
    icon: Medal,
    img: "/certs/cyber-security.jpg",
    description: "Completed a cybersecurity training program with excellent performance under NIIT Foundation.",
    achievement: "Gained understanding of cyber threats, security practices, and safe digital systems.",
    whatLearned: "Cyber threat awareness, safe browsing, network security basics, and digital protection.",
    impact: "Built awareness of secure software practices that I apply in my development work.",
    skills: ["Cyber Security", "Digital Safety", "Networking Basics", "Security Awareness"],
  },
  {
    title: "Program in Digital Literacy",
    org: "NIIT Foundation",
    date: "2023",
    category: "Technical",
    icon: Star,
    img: "/certs/digital-literacy.jpg",
    description: "Awarded outstanding performance in the Program in Digital Literacy conducted by NIIT Foundation.",
    achievement: "Developed strong computer fundamentals and digital productivity skills.",
    whatLearned: "Computer fundamentals, internet tools, digital communication, and productivity software.",
    impact: "Built a strong digital foundation that supports all my technical work.",
    skills: ["Digital Literacy", "Computer Fundamentals", "Internet Tools", "Productivity"],
  },
  {
    title: "Career Edge IT Program",
    org: "NIIT Foundation",
    date: "2023",
    category: "Technical",
    icon: Award,
    img: "/certs/career-edge.jpg",
    description: "Successfully completed the Career Edge IT professional training with outstanding performance.",
    achievement: "Strengthened professional communication, IT fundamentals, and workplace readiness.",
    whatLearned: "Professional communication, IT career skills, resume building, and workplace readiness.",
    impact: "Prepared me professionally for the IT industry and improved my communication skills.",
    skills: ["Professional Skills", "Communication", "IT Fundamentals", "Career Readiness"],
  },
  {
    title: "Hackathon Runner-Up",
    org: "GJIMT Mohali",
    date: "2024",
    category: "Competition",
    icon: Trophy,
    img: "/certs/screen-masters.jpg",
    description: "Secured Runner-Up position in the Screen Masters competition organized at GianByte event.",
    achievement: "Competed against multiple teams and achieved second position through creativity and teamwork.",
    whatLearned: "Competitive problem solving, rapid prototyping, team coordination under pressure.",
    impact: "Boosted my confidence in competitive environments and validated my frontend skills.",
    skills: ["Teamwork", "Creativity", "Presentation", "Competition"],
  },
  {
    title: "Smart India Hackathon",
    org: "GJIMT",
    date: "2025",
    category: "Hackathon",
    icon: Award,
    img: "/certs/smart-india.jpg",
    description: "Participated in Smart India Hackathon 2025 with Team Aspire and secured second position.",
    achievement: "Worked collaboratively on innovative problem-solving and technical implementation.",
    whatLearned: "Rapid development, collaborative coding, presenting technical solutions to judges.",
    impact: "Gained real hackathon experience and improved my ability to build under tight deadlines.",
    skills: ["Hackathon", "Innovation", "Problem Solving", "Team Collaboration"],
  },
  {
    title: "Mera Yuva Bharat",
    org: "MY Bharat",
    date: "2026",
    category: "Volunteering",
    icon: Medal,
    img: "/certs/my-bharat.jpg",
    description: "Participated in youth engagement and social awareness activities under MY Bharat initiative.",
    achievement: "Contributed actively in social participation and community engagement events.",
    whatLearned: "Leadership, community engagement, social responsibility, and teamwork.",
    impact: "Developed social awareness and leadership skills beyond technical work.",
    skills: ["Leadership", "Social Service", "Community Work", "Participation"],
  },
  {
    title: "NSS Volunteer Certificate",
    org: "National Service Scheme",
    date: "2026",
    category: "Volunteering",
    icon: Star,
    img: "/certs/nss.jpg",
    description: "Recognized as an active NSS volunteer participating in various social service activities.",
    achievement: "Successfully contributed to social welfare and volunteer initiatives.",
    whatLearned: "Volunteer coordination, social impact activities, and community leadership.",
    impact: "Shaped me as a well-rounded individual with a sense of social responsibility.",
    skills: ["Volunteer Work", "Leadership", "Social Impact", "Team Activities"],
  },
  {
    title: "Swachhata Participation",
    org: "Municipal Corporation Mohali",
    date: "2024",
    category: "Volunteering",
    icon: Award,
    img: "/certs/swachhata.jpg",
    description: "Received appreciation certificate for participation in cleanliness and green city initiatives.",
    achievement: "Actively contributed towards cleanliness and environmental awareness campaigns.",
    whatLearned: "Environmental awareness, civic responsibility, and community service.",
    impact: "Reinforced my commitment to contributing positively to the community.",
    skills: ["Environment", "Social Work", "Cleanliness Drive", "Community Service"],
  },
];

export const CATEGORY_COLORS = {
  Technical:    "badge-blue",
  Training:     "badge-purple",
  Hackathon:    "badge-orange",
  Competition:  "badge-red",
  Volunteering: "badge-green",
  Achievement:  "badge-gold",
};

export default function Certificates({ onOpenCertificatesPage }) {
  const [tab, setTab]                   = useState("technical");
  const [selectedCert, setSelectedCert] = useState(null);

  const technical    = ALL_CERTS.filter(c => ["Technical", "Training"].includes(c.category));
  const achievements = ALL_CERTS.filter(c => ["Competition", "Hackathon", "Volunteering", "Achievement"].includes(c.category));
  const displayed    = (tab === "technical" ? technical : achievements).slice(0, 3);

  return (
    <section id="certificates" className="cert-section">
      <div className="cert-wrapper">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="cert-main-title">
            My <span className="gradient-text">Certifications & Achievements</span>
          </h2>
          <p className="cert-main-subtitle">
            Technical certifications, hackathons, competitions, and social contributions throughout my journey.
          </p>
        </motion.div>

        {/* TABS */}
        <div className="cert-tabs">
          {["technical", "achievements"].map(t => (
            <button
              key={t}
              className={`cert-tab ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "technical" ? "Technical & Training" : "Achievements"}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="cert-grid">
          <AnimatePresence mode="wait">
            {displayed.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  className="cert-card"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setSelectedCert(cert)}
                >
                  {/* Image */}
                  <div className="cert-image-wrapper">
                    <img src={cert.img} alt={cert.title} className="cert-image" />
                    <div className="cert-shine" />
                    <div className="cert-overlay"><span>View Details</span></div>
                    <span className={`cert-badge ${CATEGORY_COLORS[cert.category] ?? "badge-blue"}`}>
                      {cert.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="cert-content">
                    <div className="cert-icon-box"><Icon size={20} /></div>
                    <h3 className="cert-card-title">{cert.title}</h3>
                    <div className="cert-card-meta">
                      <span><Building2 size={13} /> {cert.org}</span>
                      <span><Calendar size={13} /> {cert.date}</span>
                    </div>
                    <p className="cert-card-desc">{cert.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* VIEW ALL BUTTON */}
        <div className="see-more-wrapper">
          <motion.button
            className="see-more-btn"
            onClick={onOpenCertificatesPage}
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            View All Certificates{" "}
            <ExternalLink size={16} style={{ marginLeft: 8, display: "inline" }} />
          </motion.button>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ─── SHARED MODAL ─── */
export function CertModal({ cert, onClose }) {
  return (
    <motion.div
      className="cert-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="cert-modal-content"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={e => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        <div className="modal-grid">
          {/* LEFT */}
          <div className="modal-image">
            <img src={cert.img} alt={cert.title} />
          </div>

          {/* RIGHT */}
          <div className="modal-info">
            <span
              className={`cert-badge ${CATEGORY_COLORS[cert.category] ?? "badge-blue"}`}
              style={{ marginBottom: 10, display: "inline-block", position: "static" }}
            >
              {cert.category}
            </span>

            <h2>{cert.title}</h2>

            <div className="modal-meta">
              <span><Building2 size={14} /> {cert.org}</span>
              <span><Calendar size={14} /> {cert.date}</span>
            </div>

            <div className="modal-section">
              <h4>🏆 Description</h4>
              <p>{cert.description}</p>
            </div>

            <div className="modal-section">
              <h4>💡 What I Learned</h4>
              <p>{cert.whatLearned}</p>
            </div>

            <div className="modal-section">
              <h4>🎯 Achievement</h4>
              <p>{cert.achievement}</p>
            </div>

            <div className="modal-section">
              <h4>🚀 Impact</h4>
              <p>{cert.impact}</p>
            </div>

            <div className="modal-section">
              <h4>🛠 Skills Gained</h4>
              <div className="skills-tags">
                {cert.skills.map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}