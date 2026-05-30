import { useEffect, useState } from "react";

const images = [
  { src: "/gallery/collabzone.png",   alt: "CollabZone Dashboard UI"        },
  { src: "/gallery/landing-page.png", alt: "Responsive Landing Page Design" },
  { src: "/gallery/react-project.png",alt: "React UI Components"            },
  { src: "/gallery/calculator.png",   alt: "Calculator App UI Design"       },
  { src: "/gallery/portfolio.png",    alt: "Portfolio Website Design"       },
];

export function PhotographyFrames() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 80);
  }, []);

  return (
    <div className={`masonry-wrapper ${loaded ? "show" : ""}`}>
      <div className="masonry">
        {images.map((img, index) => (
          <div key={index} className="masonry-item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
}