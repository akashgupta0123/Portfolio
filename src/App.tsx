import { useState, useEffect } from "react";

import IntroVideo from "./components/IntroVideo";
import { Navbar } from "./components/Navbar";
import { FloatingNav } from "./components/FloatingNav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Projects from "./components/Projects";
import { Gallery } from "./components/Gallery";
import { GalleryPage } from "./components/GalleryPage";
import { Skills } from "./components/Skills";
import Certificates from "./components/Certificates";
import CertificatesShowcase from "./components/CertificatesShowcase";
import { Resume } from "./components/Resume";
import { Blog } from "./components/Blog";
import { BlogDetails } from "./components/BlogDetails";
import { Contact } from "./components/Contact";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [theme, setTheme]                         = useState<"light" | "dark">("dark");
  const [introDone, setIntroDone]                 = useState(false);
  const [openGalleryPage, setOpenGalleryPage]     = useState(false);
  const [openCertificatesPage, setOpenCertificatesPage] = useState(false);
  const [activeBlogId, setActiveBlogId]           = useState<number | null>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-white dark:bg-black min-h-screen relative overflow-x-hidden transition-colors duration-300">

      {/* Navbar — hidden on sub-pages */}
      {!openGalleryPage &&
        !openCertificatesPage &&
        activeBlogId === null && (
          <>
            <Navbar />
            <FloatingNav />
          </>
        )}

      <ThemeToggle theme={theme} setTheme={setTheme} />

      <main>

        {/* Intro Video */}
        {!introDone && (
          <IntroVideo onFinish={() => setIntroDone(true)} />
        )}

        {/* Main Content — after intro */}
        {introDone && (
          <>

            {/* ── GALLERY PAGE ── */}
            {openGalleryPage ? (
              <GalleryPage
                theme={theme}
                onBack={() => {
                  setOpenGalleryPage(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 50);
                }}
              />

            ) : openCertificatesPage ? (

              /* ── CERTIFICATES SHOWCASE ── */
              <CertificatesShowcase
                onBack={() => {
                  setOpenCertificatesPage(false);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 50);
                }}
              />

            ) : activeBlogId !== null ? (

              /* ── BLOG DETAILS PAGE ── */
              <BlogDetails
                blogId={activeBlogId}
                onBack={() => {
                  setActiveBlogId(null);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 50);
                }}
              />

            ) : (

              /* ── MAIN PORTFOLIO ── */
              <>
                <Home theme={theme} />

                <About />

                <Projects theme={theme} />

                <Gallery
                  theme={theme}
                  onOpenGalleryPage={() => {
                    setOpenGalleryPage(true);
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "instant" as ScrollBehavior,
                      });
                    }, 50);
                  }}
                />

                <Skills theme={theme} />

                <Resume theme={theme} />

                <Certificates
                  theme={theme}
                  onOpenCertificatesPage={() => {
                    setOpenCertificatesPage(true);
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "instant" as ScrollBehavior,
                      });
                    }, 50);
                  }}
                />

                <Blog
                  theme={theme}
                  onOpenBlog={(id) => {
                    setActiveBlogId(id);
                    setTimeout(() => {
                      window.scrollTo({
                        top: 0,
                        behavior: "instant" as ScrollBehavior,
                      });
                    }, 50);
                  }}
                />

                <Contact />
              </>
            )}
          </>
        )}
      </main>

      {/* Footer — hidden on sub-pages */}
      {!openGalleryPage &&
        !openCertificatesPage &&
        activeBlogId === null && (
          <footer className="relative border-t border-gray-200 dark:border-white/10 py-8">
            <div className="max-w-7xl mx-auto px-6 text-center">
              <p className="text-gray-600 dark:text-white/60">
                © 2026 Akash Kumar Gupta. All rights reserved.
              </p>
            </div>
          </footer>
        )}

    </div>
  );
}