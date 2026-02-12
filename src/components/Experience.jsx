import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, fadeInListItem, staggerContainer } from "../utils/motion";

export default function Experience() {
  const { experience, internships, education } = portfolioData;
  const allItems = [
    ...experience,
    ...internships,
  ];

  return (
    <motion.section
      id="experience"
      className="section experience"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        Experience
      </motion.h2>

      <motion.div className="timeline" variants={fadeIn("up", 0.1)}>
        {allItems.map((item, i) => (
          <motion.div
            key={`${item.company}-${item.role}-${i}`}
            className="timeline-item"
            variants={fadeIn("up", 0.12 * i)}
          >
            <div className="timeline-dot" />
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p className="timeline-period">{item.period}</p>
              <ul>
                {item.points.map((point, j) => (
                  <motion.li
                    key={j}
                    variants={fadeInListItem(j, 0.12 * i + 0.2)}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="education-card"
        variants={fadeIn("up", 0.12 * allItems.length)}
      >
        <h3>Education</h3>
        <p className="edu-degree">{education.degree}</p>
        <p className="edu-college">{education.college}</p>
        <p className="edu-location">{education.location}</p>
        <p className="edu-period">{education.period}</p>
        <p className="edu-cgpa">CGPA: {education.cgpa}</p>
      </motion.div>
    </motion.section>
  );
}
