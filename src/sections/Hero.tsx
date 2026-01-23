import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { fadeInUp, titleReveal, popIn } from "../animations/variants";

const TypewriterText = ({ texts }: { texts: string[] }) => {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  useEffect(() => {
    if (subIndex === texts[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === texts[index].length ? 1500 : 150, Math.random() * 50));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts]);

  useEffect(() => {
    setDisplay(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

  return (
    <span className="typewriter">
      {display}
      <span style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
};


export const Hero = () => {
  const { theme } = useTheme();
  const isArcade = theme === 'arcade';

  // Theme-specific content
  const greeting = isArcade ? "PLAYER ONE READY" : "WELCOME";
  const primaryCta = isArcade ? "START GAME" : "Ver Proyectos";
  const secondaryCta = isArcade ? "LOAD SAVE" : "Descargar CV";

  return (
    <section className="hero">
      <div className="hero__background" />

      <div className="hero__content">
        <motion.div
          variants={popIn}
          initial="hidden"
          animate="show"
          className="hero__avatar"
        >
          <img
            src="/projects/profile.jpeg"
            alt="Profile"
          />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="hero__greeting"
        >
          {greeting}
        </motion.p>

        <motion.h1
          variants={titleReveal}
          initial="hidden"
          animate="show"
          className="hero__title"
        >
          Hola, soy
          <span className="name" data-text="Angel Fernandez">[Angel Fernandez]</span>
        </motion.h1>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="hero__subtitle"
          style={{ minHeight: '1.6em', fontWeight: 'bold', fontSize: '1.5rem' }}
        >
          Soy <TypewriterText texts={["Full Stack Developer", "Creador de Soluciones", "Innovador Digital", "Arquitecto de Software"]} />
        </motion.div>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.6 }}
          className="hero__description"
          style={{ maxWidth: '600px', margin: '0 auto 2.5rem' }}
        >
          Especializado en transformar ideas complejas en experiencias web fluidas y potentes.
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="hero__cta-group"
        >
          <button
            className="hero__cta hero__cta--primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            {primaryCta}
          </button>
          <a
            href="/projects/AngelFernandezResume2026.pdf"
            download="AngelFernandezResume2026.pdf"
            className="hero__cta hero__cta--secondary"
            style={{ display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
          >
            {secondaryCta}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hero__scroll-indicator"
      >
        <ArrowDown size={28} />
      </motion.div>
    </section>
  );
};
