import { motion } from "framer-motion";
import { staggeredContainer, popIn, fadeInUp } from "../animations/variants";

const skills = [
  "React", "TypeScript", "Next.js", "Ionic",
  "Node.js", "C# .NET", "Python", "SQL Server",
  "MongoDB", "Redis", "Playwright", "Vitest",
  "Azure DevOps", "Docker", "Clean Arch.", "SOLID"
];

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills__label"
        >
          Tech Stack
        </motion.p>
        
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills__title"
        >
          Tecnologías que domino
        </motion.h2>

        <motion.div 
          variants={staggeredContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills__grid"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill}
              variants={popIn}
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
