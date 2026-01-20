import { motion } from "framer-motion";
import { projects } from "../data/data";
import { Github, ExternalLink } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="projects__label"
          >
            Portafolio
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="projects__title"
          >
            Proyectos Destacados
          </motion.h2>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="projects__grid"
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              variants={item}
              className="projects__card"
            >
              <div className="projects__image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="projects__overlay">
                  <button className="projects__icon-btn projects__icon-btn--github">
                    <Github size={22} />
                  </button>
                  <button className="projects__icon-btn projects__icon-btn--demo">
                    <ExternalLink size={22} />
                  </button>
                </div>
              </div>
              
              <div className="projects__info">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  {project.status === "in-progress" && (
                    <span className="projects__status projects__status--wip">WIP</span>
                  )}
                </div>
                <p className="projects__description">{project.description}</p>
                <div className="projects__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="projects__tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
