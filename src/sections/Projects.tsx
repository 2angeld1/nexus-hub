import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../data/data";
import { Github, ExternalLink, LayoutDashboard, X } from "lucide-react";
import { staggeredContainer, fadeInUp, fadeIn } from "../animations/variants";

export const Projects = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="projects__container">
        <div className="projects__header">
          <motion.p
            variants={fadeIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="projects__label"
          >
            Portafolio
          </motion.p>
          <motion.h2 
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="projects__title"
          >
            Proyectos Destacados
          </motion.h2>
        </div>

        <motion.div 
          variants={staggeredContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="projects__grid"
        >
          {projects.map((project) => (
            <motion.article 
              key={project.id}
              variants={fadeInUp}
              className="projects__card"
              onMouseEnter={() => handleMouseEnter(project.id)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className="projects__image"
                onClick={() => project.videoUrl && setSelectedVideo(project.videoUrl)}
                style={{ cursor: project.videoUrl ? 'pointer' : 'default' }}
              >
                <img src={project.imageUrl} alt={project.title} style={{ opacity: hoveredId === project.id && project.videoUrl ? 0 : 1 }} />

                {project.videoUrl && (
                  <video
                    src={project.videoUrl}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="projects__video"
                    style={{
                      opacity: hoveredId === project.id ? 1 : 0,
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'opacity 0.4s ease',
                      zIndex: hoveredId === project.id ? 2 : 0
                    }}
                  />
                )}

                <div className="projects__overlay" style={{ zIndex: 3 }}>
                  {/* GitHub Repo */}
                  {project.repoUrl && (
                    <button
                      className="projects__icon-btn projects__icon-btn--github"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.repoUrl, "_blank");
                      }}
                      title="Ver Código"
                      aria-label="Ver Código Fuente"
                    >
                      <Github size={22} />
                    </button>
                  )}

                  {/* Dashboard Link */}
                  {project.dashboardUrl && (
                    <button
                      className="projects__icon-btn projects__icon-btn--demo"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.dashboardUrl, "_blank");
                      }}
                      title="Ver Dashboard"
                      aria-label="Ver Dashboard Admin"
                      style={{ background: 'var(--gradient-secondary)', borderColor: 'transparent' }}
                    >
                      <LayoutDashboard size={22} />
                    </button>
                  )}

                  {/* Live Demo */}
                  {project.demoUrl && (
                    <button
                      className="projects__icon-btn projects__icon-btn--demo"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.demoUrl, "_blank");
                      }}
                      title="Ver Demo"
                      aria-label="Ver Demo"
                    >
                      <ExternalLink size={22} />
                    </button>
                  )}
                </div>
              </div>
              
              <div className="projects__info">
                <div className="projects__card-header">
                  <h3 className="projects__card-title">{project.title}</h3>
                  {project.status === "in-progress" && (
                    <span className="projects__status projects__status--wip">WIP</span>
                  )}
                  {project.status === "concept" && (
                    <span className="projects__status projects__status--concept">Concept</span>
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

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="project-modal"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="project-modal__content" onClick={(e) => e.stopPropagation()}>
              <button
                className="project-modal__close"
                onClick={() => setSelectedVideo(null)}
              >
                <X size={24} />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="project-modal__video"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
