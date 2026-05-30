import { useEffect, useState } from "react";

const images = [
  { src: "/gallery/portfolio.png",    alt: "Building My Portfolio"       },
  { src: "/gallery/mern-preview.png", alt: "Learning MERN Stack"         },
  { src: "/gallery/react-project.png",alt: "React Development Journey"   },
  { src: "/gallery/collabzone.png",   alt: "Working on CollabZone"       },
  { src: "/gallery/calculator.png",   alt: "Frontend Practice Projects"  },
];

export function PersonalGrid() {
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