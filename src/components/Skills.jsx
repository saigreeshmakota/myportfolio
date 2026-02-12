import { motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { fadeIn, fadeInListItem, staggerContainer } from "../utils/motion";

const skillCategories = [
  { label: "Programming", key: "programming", icon: "💻" },
  { label: "Databases", key: "databases", icon: "🗄️" },
  { label: "Frontend", key: "frontend", icon: "🎨" },
  { label: "Backend", key: "backend", icon: "⚙️" },
  { label: "Concepts", key: "concepts", icon: "🧠" },
  { label: "Tools", key: "tools", icon: "🧰" },
  { label: "Soft Skills", key: "soft", icon: "🤝" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [justScrolledIn, setJustScrolledIn] = useState(false);

  useEffect(() => {
    const handler = () => setJustScrolledIn(true);
    window.addEventListener("skills-nav-scroll", handler);
    return () => window.removeEventListener("skills-nav-scroll", handler);
  }, []);

  useEffect(() => {
    if (!justScrolledIn) return;
    const t = setTimeout(() => setJustScrolledIn(false), 1200);
    return () => clearTimeout(t);
  }, [justScrolledIn]);

  const handleLegendClick = useCallback((key) => {
    setActiveCategory((prev) => (prev === key ? null : key));
    setSelectedSkill(null); // Clear skill selection when changing category
  }, []);

  const handleSkillClick = useCallback((categoryKey, skillName) => {
    const skillId = `${categoryKey}-${skillName}`;
    setSelectedSkill((prev) => (prev === skillId ? null : skillId));
  }, []);

  useEffect(() => {
    if (!activeCategory) {
      return;
    }
    const target = document.getElementById(`skills-${activeCategory}`);
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }
  }, [activeCategory]);

  return (
    <motion.section
      id="skills"
      className={`section skills ${justScrolledIn ? "skills-just-arrived" : ""}`}
      variants={staggerContainer(0.05, 0.06)}
      initial="show"
      animate="show"
      whileInView="show"
      viewport={{ once: false, margin: "-50px", amount: 0.01 }}
    >
      <motion.h2 className="section-title" variants={fadeIn("up")}>
        Skills
      </motion.h2>

      <motion.div className="skills-legend" variants={fadeIn("up", 0.1)}>
        {skillCategories.map((cat) => (
          <button
            key={cat.key}
            type="button"
            className={`legend-item ${activeCategory === cat.key ? "active" : ""}`}
            onClick={() => handleLegendClick(cat.key)}
          >
            <span className="legend-icon">{cat.icon}</span>
            <span className="legend-label">{cat.label}</span>
          </button>
        ))}
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((cat, i) => {
          const categorySkills = portfolioData.skills[cat.key] ?? [];
          const isCardActive = activeCategory === cat.key;

          return (
            <motion.div
              key={cat.key}
              id={`skills-${cat.key}`}
              className={`skill-card ${isCardActive ? "active" : ""}`}
              variants={fadeIn("up", 0.12 * i)}
            >
              <div className="skill-card-header">
                <span className="skill-card-icon">{cat.icon}</span>
                <h3 className="skill-category">{cat.label}</h3>
              </div>

              <div className="skill-pills">
                {categorySkills.map((skill, j) => {
                  const skillId = `${cat.key}-${skill.name}`;
                  const isSelected = selectedSkill === skillId;

                  return (
                    <motion.div
                      key={skill.name}
                      className={`skill-pill ${skill.top ? "top-skill" : ""} ${
                        isSelected ? "highlighted" : ""
                      }`}
                      variants={fadeInListItem(j, 0.12 * i + 0.2)}
                      whileHover={{ y: -3 }}
                      onClick={() => handleSkillClick(cat.key, skill.name)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="skill-pill-header">
                        <span className="skill-name">{skill.name}</span>
                        {skill.top && <span className="skill-badge">Core</span>}
                      </div>
                      {skill.subSkills && skill.subSkills.length > 0 && (
                        <div className="skill-subskills">
                          {skill.subSkills.map((sub) => (
                            <span key={sub} className="skill-subskill">{sub}</span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}