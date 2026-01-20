import { motion } from "framer-motion";

const skills = [
  "React", "TypeScript", "Vite", "Next.js", 
  "Tailwind CSS", "SCSS", "Node.js", "C#", ".NET", 
  "SQL Server", "MongoDB", "Framer Motion", "Git", "Docker"
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0 }
};

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="skills__label"
        >
          Tech Stack
        </motion.p>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="skills__title"
        >
          Tecnologías que domino
        </motion.h2>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills__grid"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={item}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="skills__item"
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
