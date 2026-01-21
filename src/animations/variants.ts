import type { Variants } from "framer-motion";

// Contenedor que orquesta la aparición escalonada de hijos
export const staggeredContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Elemento que aparece desde abajo con fade
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
};

// Elemento que hace pop (escala)
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { 
    opacity: 1, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  },
};

// Animación simple de opacidad
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

// Para títulos (animación más lenta y elegante)
export const titleReveal: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "backOut"
    }
  }
};
