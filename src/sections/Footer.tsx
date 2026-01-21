import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">NEXUS<span>.</span>HUB</h3>
            <p className="footer__copyright">© 2026 Creado con React & Vite</p>
          </div>

        <div className="footer__contact">
           <a href="tel:+50768014613" className="footer__contact-link">
              <Phone size={18} />
              <span>+507 6801-4613</span>
           </a>
        </div>
        </div>

        <div className="footer__socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Github">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:contacto@ejemplo.com" className="footer__social-link" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};
