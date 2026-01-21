import { motion } from "framer-motion";
import { experience } from "../data/data";
import { fadeInUp, staggeredContainer } from "../animations/variants";

export const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        <motion.h2 
          variants={fadeInUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="experience__title"
        >
          Experiencia Laboral
        </motion.h2>

        <motion.div
          className="experience__timeline"
          variants={staggeredContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {experience.map((job) => (
            <motion.div 
              key={job.id}
              variants={fadeInUp}
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
        </motion.div>
      </div>
    </section>
  );
};
