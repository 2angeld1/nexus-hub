import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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
  return (
    <section className="hero">
      <div className="hero__background" />
      
      <div className="hero__content">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero__avatar"
        >
          <img 
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=400" 
            alt="Profile" 
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="hero__greeting"
        >
          <Sparkles size={16} style={{ display: 'inline', marginRight: '0.5rem' }} />
          Bienvenido a mi universo digital
        </motion.p>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="hero__title"
        >
          Hola, soy <br className="md:hidden"/>
          <span className="name">[Tu Nombre]</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="hero__subtitle"
          style={{ minHeight: '1.6em', fontWeight: 'bold', fontSize: '1.5rem', color: '#ff8c42' }} // Match primary light
        >
          Soy <TypewriterText texts={["Full Stack Developer", "Creador de Soluciones", "Innovador Digital", "Arquitecto de Software"]} />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="hero__description"
          style={{ maxWidth: '600px', margin: '0 auto 2.5rem', color: '#94a3b8' }}
        >
          Especializado en transformar ideas complejas en experiencias web fluidas y potentes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="hero__cta-group"
        >
          <button 
            className="hero__cta hero__cta--primary"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            Ver Proyectos
          </button>
          <button className="hero__cta hero__cta--secondary">
            Descargar CV
          </button>
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
