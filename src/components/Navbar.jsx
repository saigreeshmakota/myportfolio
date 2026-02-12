import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      if (href === "#skills") {
        window.dispatchEvent(new CustomEvent("skills-nav-scroll"));
      }
    }
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <a href="#hero" className="nav-logo">
        <svg className="nav-logo-icon" viewBox="0 0 32 32" fill="none" aria-hidden>
          <rect width="32" height="32" rx="6" fill="currentColor" fillOpacity="0.2"/>
          <path d="M8 14h16v10a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V14z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M8 14V12a2 2 0 0 1 2-2h4v2H10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14 10h4V8h-4z" fill="currentColor"/>
        </svg>
        <span>myportfolio</span>
      </a>
      <button
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        {navLinks.map((link, i) => (
          <motion.li
            key={link.label}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <a
              href={link.href}
              onClick={(event) => handleNavClick(event, link.href)}
            >
              {link.label}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
