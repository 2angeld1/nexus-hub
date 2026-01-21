import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  const isArcade = theme === 'arcade';

  return (
    <motion.button
      className="theme-switcher"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      title={isArcade ? 'Cambiar a Modern' : 'Cambiar a Arcade'}
      aria-label={`Tema actual: ${theme}. Click para cambiar.`}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={theme}
          initial={{ rotate: -180, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 180, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="theme-switcher__icon"
        >
          {isArcade ? <Gamepad2 size={24} /> : <Sparkles size={24} />}
        </motion.span>
      </AnimatePresence>
      
      <span className="theme-switcher__label">
        {isArcade ? 'ARCADE' : 'MODERN'}
      </span>
      
      {/* Glow ring for arcade theme */}
      {isArcade && (
        <motion.span
          className="theme-switcher__glow"
          animate={{
            boxShadow: [
              '0 0 20px #00ff88, 0 0 40px #00ff88',
              '0 0 30px #ff00aa, 0 0 60px #ff00aa',
              '0 0 20px #00d4ff, 0 0 40px #00d4ff',
              '0 0 20px #00ff88, 0 0 40px #00ff88',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}
    </motion.button>
  );
}
