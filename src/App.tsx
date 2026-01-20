import { useState, useEffect } from "react";
import { Hero } from "./sections/Hero";
import { Skills } from "./sections/Skills";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/main.scss";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav__container">
          <span className="nav__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            NEXUS<span>.</span>HUB
          </span>

          <div className="nav__links">
            {["Skills", "Experience", "Projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="nav__link"
              >
                {item}
              </button>
            ))}
            <button className="nav__cta">Contáctame</button>
          </div>

          <button className="nav__mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="mobile-menu"
          >
            {["Skills", "Experience", "Projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="mobile-menu__link"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__brand">
            <h3 className="footer__logo">NEXUS<span>.</span>HUB</h3>
            <p className="footer__copyright">© 2026 Creado con React & Vite</p>
          </div>

          <div className="footer__socials">
            <a href="#" className="footer__social-link"><Github size={20} /></a>
            <a href="#" className="footer__social-link"><Linkedin size={20} /></a>
            <a href="#" className="footer__social-link"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
