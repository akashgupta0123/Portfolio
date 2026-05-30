import { useEffect, useState } from "react";
import { ArrowLeft, Monitor, Award, Briefcase, Layout } from "lucide-react";
import "./GalleryPage.css";

import { PersonalGrid } from "./gallery/PersonalGrid";
import { ProjectsFeed } from "./gallery/ProjectsFeed";
import { AchievementsFeed } from "./gallery/AchievementsFeed";
import { PhotographyFrames } from "./gallery/PhotographyFrames";

interface GalleryPageProps {
  theme: "light" | "dark";
  onBack: () => void;
}

export function GalleryPage({ theme, onBack }: GalleryPageProps) {
  const [loaded, setLoaded] = useState(false);
  const [activeCategory, setActiveCategory] = useState("projects");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  const categories = [
    { key: "projects",      name: "Projects & Work",   icon: Briefcase },
    { key: "achievements",  name: "Certificates",       icon: Award     },
    { key: "photography",   name: "UI/UX Designs",      icon: Layout    },
    { key: "personal",      name: "Coding Journey",     icon: Monitor   },
  ];

  return (
    <div className="gallery-container">
      {/* NAVBAR */}
      <nav className="gallery-navbar">
        <h2
          className="gallery-title"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(-20px)",
          }}
        >
          My <span style={{ opacity: 1 }}>Gallery</span>
        </h2>

        <div className="gallery-links">
          {categories.map((c) => (
            <p
              key={c.key}
              className={activeCategory === c.key ? "active-link" : ""}
              onClick={() => setActiveCategory(c.key)}
            >
              <c.icon size={18} style={{ marginRight: "6px" }} />
              {c.name}
            </p>
          ))}
        </div>

        <button className="back-btn" onClick={onBack}>
          <ArrowLeft size={18} /> Back To Portfolio
        </button>
      </nav>

      {/* CATEGORY BODY */}
      <section className="category-section animate">
        {activeCategory === "projects"     && <ProjectsFeed />}
        {activeCategory === "achievements" && <AchievementsFeed />}
        {activeCategory === "photography"  && <PhotographyFrames />}
        {activeCategory === "personal"     && <PersonalGrid />}
      </section>
    </div>
  );
}