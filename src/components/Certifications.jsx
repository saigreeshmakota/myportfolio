import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, staggerContainer } from "../utils/motion";

export default function Certifications() {
  return (
    <motion.section
      id="certifications"
      className="section certifications"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        Certifications
      </motion.h2>
      <div className="certs-grid">
        {portfolioData.certifications.map((cert, i) => (
          <motion.div
            key={cert.name}
            className="cert-card"
            variants={fadeIn("up", 0.12 * i)}
          >
            <span className="cert-badge">🏆</span>
            <h4>{cert.name}</h4>
            <p>{cert.issuer}</p>
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            ) : (
              <span style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>
                —
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
