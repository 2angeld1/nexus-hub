import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { Footer } from "./sections/Footer";
import { ParticlesBackground } from "./components/ParticlesBackground";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { ThemeProvider } from "./context/ThemeContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/main.scss";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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

  const navItems = isHome
    ? ["Skills", "Experience", "Caitlyn", "Projects"]
    : [];

  return (
    <>
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Theme Switcher Floating Button */}
      <ThemeSwitcher />

      <ScrollToTop />

      {/* Navigation */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="nav__container">
          <Link
            to="/"
            className="nav__logo"
            style={{ textDecoration: "none" }}
          >
            NEXUS<span>.</span>HUB
          </Link>

          <div className="nav__links">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="nav__link"
              >
                {item}
              </button>
            ))}
            <Link to="/services" className="nav__link">
              Services
            </Link>
            {isHome ? (
              <a href="tel:+50768014613" className="nav__cta">
                Contáctame
              </a>
            ) : (
              <a
                href={`https://wa.me/50768014613?text=${encodeURIComponent("Hola Angel, vi tu portafolio y me interesa cotizar un servicio.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="nav__cta"
              >
                WhatsApp
              </a>
            )}
          </div>

          <button
            className="nav__mobile-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
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
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="mobile-menu__link"
              >
                {item}
              </button>
            ))}
            <Link
              to="/services"
              className="mobile-menu__link"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            {isHome ? (
              <a
                href="tel:+50768014613"
                className="mobile-menu__link"
                style={{ color: "var(--color-primary)" }}
              >
                Contáctame
              </a>
            ) : (
              <a
                href={`https://wa.me/50768014613?text=${encodeURIComponent("Hola Angel, vi tu portafolio y me interesa cotizar un servicio.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-menu__link"
                style={{ color: "var(--color-primary)" }}
                onClick={() => setIsMenuOpen(false)}
              >
                WhatsApp
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
