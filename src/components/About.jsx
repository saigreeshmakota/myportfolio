import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="section about"
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        About Me
      </motion.h2>
      <motion.div className="about-content" variants={fadeIn("up", 0.15)}>
        <p className="about-text">{portfolioData.objective}</p>
        <div className="about-meta">
          <span>📍 {portfolioData.personal.location}</span>
          <span>📧 {portfolioData.personal.email}</span>
        </div>
      </motion.div>
    </motion.section>
  );
}
