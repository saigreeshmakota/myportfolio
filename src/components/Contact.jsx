import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <motion.section
      id="contact"
      className="section contact"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        Contact
      </motion.h2>
      <motion.p className="contact-text" variants={fadeIn("up", 0.1)}>
        I&apos;m open to opportunities and collaborations. Feel free to reach out!
      </motion.p>
      <motion.div
        className="contact-links"
        variants={fadeIn("up", 0.15)}
      >
        <a href={`mailto:${personal.email}`} className="contact-btn">
          Email
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          LinkedIn
        </a>
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          GitHub
        </a>
      </motion.div>
      <motion.p
        className="contact-footer"
        variants={fadeIn("up", 0.2)}
      >
        {personal.location} • {personal.phone}
      </motion.p>
    </motion.section>
  );
}
