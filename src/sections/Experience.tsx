import { motion } from "framer-motion";
import { experience } from "../data/data";

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="experience__title"
        >
          Experiencia Laboral
        </motion.h2>

        <div className="experience__timeline">
          {experience.map((job, index) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="experience__item"
            >
              <div className="experience__card">
                <span className="experience__period">{job.period}</span>
                <h3 className="experience__role">{job.role}</h3>
                <h4 className="experience__company">{job.company}</h4>
                <p className="experience__description">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
