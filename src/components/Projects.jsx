import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, fadeInListItem, staggerContainer } from "../utils/motion";

export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="section projects"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        Projects
      </motion.h2>
      <div className="projects-grid">
        {portfolioData.projects.map((project, i) => (
          <motion.article
            key={project.title}
            className="project-card"
            variants={fadeIn("up", 0.12 * i)}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            <h3>{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <motion.ul
              className="project-highlights"
              variants={staggerContainer(0.05, 0.08)}
              initial="hidden"
              animate="show"
            >
              {project.highlights.map((h, j) => (
                <motion.li key={h} variants={fadeInListItem(j, 0.12 * i + 0.2)}>
                  {h}
                </motion.li>
              ))}
            </motion.ul>
            <div className="project-tech">
              {project.tech.map((t, j) => (
                <span key={j}>{t}</span>
              ))}
            </div>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Live →
              </a>
            )}
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
