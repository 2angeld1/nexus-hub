import { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  Brain,
  TestTubeDiagonal,
  Layers,
  Cloud,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ArrowUp,
} from "lucide-react";
import { services, servicesI18n } from "../data/services";
import {
  fadeInUp,
  fadeIn,
  staggeredContainer,
  titleReveal,
} from "../animations/variants";

type Lang = "es" | "en";

const ICONS: Record<string, React.ReactNode> = {
  RefreshCcw: <RefreshCcw size={28} />,
  Brain: <Brain size={28} />,
  TestTubeDiagonal: <TestTubeDiagonal size={28} />,
  Layers: <Layers size={28} />,
  Cloud: <Cloud size={28} />,
};

const PROCESS_ICONS = ["💬", "📐", "⚙️", "🚀"];

const WHATSAPP_NUMBER = "50768014613";

export const ServicesPage = () => {
  const [lang, setLang] = useState<Lang>("es");
  const t = servicesI18n[lang];

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.ctaWhatsapp)}`;

  return (
    <div className="services-page">
      {/* Language Toggle */}
      <div className="services-page__lang-toggle">
        <button
          className={`services-page__lang-btn ${lang === "es" ? "services-page__lang-btn--active" : ""}`}
          onClick={() => setLang("es")}
        >
          ES
        </button>
        <button
          className={`services-page__lang-btn ${lang === "en" ? "services-page__lang-btn--active" : ""}`}
          onClick={() => setLang("en")}
        >
          EN
        </button>
      </div>

      {/* ===== HERO ===== */}
      <section className="services-hero">
        <div className="services-hero__bg" />
        <div className="services-hero__content">
          <motion.span
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="services-hero__label"
          >
            {t.heroLabel}
          </motion.span>

          <motion.h1
            variants={titleReveal}
            initial="hidden"
            animate="show"
            className="services-hero__title"
          >
            {t.heroTitle}
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.3 }}
            className="services-hero__subtitle"
          >
            {t.heroSubtitle}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5 }}
          >
            <button
              className="services-hero__cta"
              onClick={() =>
                document
                  .getElementById("services-contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t.heroCta} <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ===== SERVICE CARDS ===== */}
      <section className="services-grid-section">
        <div className="services-grid-section__container">
          <div className="services-grid-section__header">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="services-grid-section__label"
            >
              {t.servicesLabel}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="services-grid-section__title"
            >
              {t.servicesTitle}
            </motion.h2>
          </div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="services-grid"
          >
            {services.map((service) => {
              const content = service[lang];
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="service-card"
                >
                  <div className="service-card__icon">
                    {ICONS[service.icon]}
                  </div>
                  <h3 className="service-card__title">{content.title}</h3>
                  <p className="service-card__description">
                    {content.description}
                  </p>

                  <div className="service-card__features">
                    <span className="service-card__features-label">
                      {t.includes}:
                    </span>
                    <ul>
                      {content.features.map((feature, i) => (
                        <li key={i}>
                          <CheckCircle2 size={14} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="service-card__tags">
                    {service.tags.map((tag) => (
                      <span key={tag} className="service-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="services-process">
        <div className="services-process__container">
          <div className="services-process__header">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="services-process__label"
            >
              {t.processLabel}
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="services-process__title"
            >
              {t.processTitle}
            </motion.h2>
          </div>

          <motion.div
            variants={staggeredContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="services-process__steps"
          >
            {t.processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="services-process__step"
              >
                <div className="services-process__step-number">
                  <span>{PROCESS_ICONS[i]}</span>
                </div>
                <div className="services-process__step-connector" />
                <h4 className="services-process__step-title">{step.title}</h4>
                <p className="services-process__step-desc">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== CTA / CONTACT ===== */}
      <section id="services-contact" className="services-cta">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="services-cta__container"
        >
          <h2 className="services-cta__title">{t.ctaTitle}</h2>
          <p className="services-cta__subtitle">{t.ctaSubtitle}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="services-cta__whatsapp-btn"
          >
            <MessageCircle size={22} />
            {t.ctaButton}
          </a>
        </motion.div>
      </section>

      {/* Scroll to top */}
      <button
        className="services-page__scroll-top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};
