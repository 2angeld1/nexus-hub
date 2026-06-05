import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        
        {/* Main Columns Grid */}
        <div className="footer__grid">
          
          {/* Column 1: Brand & Socials */}
          <div className="footer__col footer__col--brand">
            <h3 className="footer__logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} style={{ cursor: 'pointer' }}>
              NEXUS<span>.</span>HUB
            </h3>
            <p className="footer__tagline">
              Desarrollando e incubando software de alto impacto y soluciones de base tecnológica potenciadas por IA desde Panamá Oeste para el mundo.
            </p>
            <div className="footer__socials">
              <a href="https://github.com/2angeld1" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="mailto:adfp21900@gmail.com" className="footer__social-link" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Core Projects */}
          <div className="footer__col">
            <h4 className="footer__col-title">Proyectos Core</h4>
            <ul className="footer__links">
              <li>
                <button onClick={() => scrollToSection("caitlyn")} className="footer__link-btn">
                  Caitlyn AI
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  Kitchy & Vesta
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  Muelle SaaS
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  Verso Migrator
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  Gosen Engines
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Ecosistema */}
          <div className="footer__col">
            <h4 className="footer__col-title">Ecosistema</h4>
            <ul className="footer__links">
              <li>
                <button onClick={() => scrollToSection("experience")} className="footer__link-btn">
                  UTP Incuba (Programa)
                </button>
              </li>
              <li>
                <a href="https://innovaccion.utp.ac.pa/" target="_blank" rel="noopener noreferrer" className="footer__link-btn footer__link-btn--external">
                  Innova UTP <ExternalLink size={11} />
                </a>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  AgroLink
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")} className="footer__link-btn">
                  Velodrive Suite
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contacto</h4>
            <ul className="footer__contact-info">
              <li>
                <a href="mailto:adfp21900@gmail.com" className="footer__info-link">
                  <Mail size={16} />
                  <span>adfp21900@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+50768014613" className="footer__info-link">
                  <Phone size={16} />
                  <span>+507 6801-4613</span>
                </a>
              </li>
              <li>
                <div className="footer__info-text">
                  <MapPin size={16} />
                  <span>Panamá Oeste, Panamá</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Creado por <strong>Angel Fernandez</strong> (Gosen Tech). Todos los derechos reservados.
          </p>
          <p className="footer__tech">
            Desarrollado en Panamá con React, TypeScript & Sass.
          </p>
        </div>

      </div>
    </footer>
  );
};
