import React, { useState } from "react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, Award, Code2, Trophy, Heart, Star } from "lucide-react";
import { Building2, Calendar } from "lucide-react";
import { ALL_CERTS, CertModal, CATEGORY_COLORS } from "./Certificates";

const FILTERS = ["All", "Technical", "Training", "Hackathon", "Competition", "Volunteering"];

const TIMELINE = [
  { year: "2023", items: ["Digital Literacy", "Career Edge IT Program", "Program in Cyber Security"] },
  { year: "2024", items: ["Hackathon Runner-Up", "Swachhata Participation"] },
  { year: "2025", items: ["Frontend Development Training", "Future of UI Bootcamp", "Smart India Hackathon"] },
  { year: "2026", items: ["NSS Volunteer Certificate", "Mera Yuva Bharat"] },
];

const STATS = [
  { icon: Award,   label: "Total Certificates",        value: ALL_CERTS.length },
  { icon: Code2,   label: "Training Programs",          value: ALL_CERTS.filter(c => c.category === "Training").length },
  { icon: Trophy,  label: "Hackathons & Competitions",  value: ALL_CERTS.filter(c => ["Hackathon", "Competition"].includes(c.category)).length },
  { icon: Heart,   label: "Volunteering",               value: ALL_CERTS.filter(c => c.category === "Volunteering").length },
];

export default function CertificatesShowcase({ onBack }) {
    useEffect(() => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, 50);
}, []);
  const [filter, setFilter]             = useState("All");
  const [search, setSearch]             = useState("");
  const [selectedCert, setSelectedCert] = useState(null);

  const filtered = ALL_CERTS.filter(c => {
    const matchFilter = filter === "All" || c.category === filter;
    const matchSearch =
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.org.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div className="showcase-wrapper">

      {/* BACK BUTTON */}
      <motion.button
  className="showcase-back-btn"
  onClick={() => {
    onBack();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
>
        <ArrowLeft size={18} /> Back To Portfolio
      </motion.button>

      {/* HERO */}
      <motion.div
        className="showcase-hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="showcase-hero-title">
          Achievements & <span className="gradient-text">Certifications</span>
        </h1>
        <p className="showcase-hero-sub">
          A collection of professional certifications, hackathons, leadership experiences,
          competitions, and achievements that reflect my continuous learning journey.
        </p>

        {/* STATS */}
        <div className="showcase-stats">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <s.icon size={28} className="stat-icon" />
              <h3>{s.value}+</h3>
              <p>{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FILTERS + SEARCH */}
      <div className="showcase-controls">
        <div className="showcase-filters">
          {FILTERS.map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="showcase-search">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search certificates..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* CERT GRID */}
      <div className="showcase-grid">
        <AnimatePresence mode="wait">
          {filtered.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="no-results"
            >
              No certificates found.
            </motion.p>
          ) : (
            filtered.map((cert, i) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={cert.title}
                  className="cert-card"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -8, scale: 1.03 }}
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="cert-image-wrapper">
                    <img src={cert.img} alt={cert.title} className="cert-image" />
                    <div className="cert-shine" />
                    <div className="cert-overlay"><span>View Details</span></div>
                    <span className={`cert-badge ${CATEGORY_COLORS[cert.category] ?? "badge-blue"}`}>
                      {cert.category}
                    </span>
                  </div>

                  <div className="cert-content">
                    <div className="cert-icon-box"><Icon size={20} /></div>
                    <h3 className="cert-card-title">{cert.title}</h3>
                    <div className="cert-card-meta">
                      <span><Building2 size={13} /> {cert.org}</span>
                      <span><Calendar size={13} /> {cert.date}</span>
                    </div>
                    <p className="cert-card-desc">{cert.description}</p>
                    <div className="cert-skills-preview">
                      {cert.skills.slice(0, 3).map((s, j) => (
                        <span key={j} className="skill-mini-tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })
          )}
        </AnimatePresence>
      </div>

      {/* TIMELINE */}
      <div className="showcase-timeline">
        <motion.h2
          className="timeline-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="timeline-track">
          {TIMELINE.map((entry, i) => (
            <motion.div
              key={i}
              className="timeline-entry"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <div className="timeline-year">{entry.year}</div>
              <div className="timeline-items">
                {entry.items.map((item, j) => (
                  <div key={j} className="timeline-item">
                    <Star size={12} className="timeline-dot" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}