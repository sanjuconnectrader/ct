// Wireframingdetails.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Wireframingdetails.css";

/* ---------- Inline SVG Icons (no external libs) ---------- */
const IconFigma = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="18" cy="12" r="6" />
    <circle cx="30" cy="12" r="6" />
    <circle cx="18" cy="24" r="6" />
    <circle cx="30" cy="24" r="6" />
    <path d="M18 36a6 6 0 100-12v12z" />
  </svg>
);

const IconXD = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="28" rx="4" />
    <path d="M14 30l6-12 6 12M26 24h8" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconFlow = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="10" cy="10" r="4" />
    <rect x="20" y="6" width="12" height="8" rx="2" />
    <circle cx="38" cy="10" r="4" />
    <rect x="6" y="22" width="12" height="8" rx="2" />
    <rect x="30" y="22" width="12" height="8" rx="2" />
    <path d="M14 14v8M34 14v8M18 10h2M28 10h2M18 26h12" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconIA = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="8" width="12" height="8" rx="2" />
    <rect x="6" y="20" width="12" height="8" rx="2" />
    <rect x="6" y="32" width="12" height="8" rx="2" />
    <rect x="22" y="8" width="20" height="8" rx="2" />
    <rect x="22" y="20" width="20" height="8" rx="2" />
    <rect x="22" y="32" width="20" height="8" rx="2" />
    <path d="M18 12h4M18 24h4M18 36h4" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconLowFi = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="28" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <rect x="10" y="14" width="12" height="6" />
    <rect x="24" y="14" width="14" height="6" />
    <rect x="10" y="22" width="28" height="4" />
    <rect x="10" y="28" width="18" height="4" />
  </svg>
);

const IconProto = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="6" width="22" height="36" rx="3" />
    <circle cx="19" cy="34" r="2.5" />
    <path d="M36 10l6 4-6 4V10zM30 14h6" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconUsability = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="14" cy="16" r="6" />
    <rect x="6" y="26" width="16" height="12" rx="3" />
    <path d="M30 18h10M30 26h10M30 34h10" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconTokens = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="14" cy="14" r="6" />
    <rect x="24" y="10" width="18" height="8" rx="2" />
    <circle cx="14" cy="34" r="6" />
    <rect x="24" y="30" width="18" height="8" rx="2" />
  </svg>
);

const IconHandoff = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="16" height="28" rx="2" />
    <rect x="26" y="10" width="16" height="28" rx="2" />
    <path d="M22 24h4" stroke="currentColor" strokeWidth="2" />
    <path d="M14 18h6M14 24h6M14 30h6M32 18h6M32 24h6M32 30h6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconCollab = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="16" cy="18" r="5" />
    <circle cx="32" cy="18" r="5" />
    <path d="M10 34c0-4 4-7 9-7s9 3 9 7" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M38 34l4-2-2-4" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

/* ---------- Content ---------- */
const features = [
  {
    icon: <IconFigma className="Wireframingdetails__feature-icon" />,
    title: "Figma Wireframing",
    description:
      "Rapid low- to mid-fidelity frames with components, constraints, and auto-layout. We create scalable frames that adapt across breakpoints.",
  },
  {
    icon: <IconXD className="Wireframingdetails__feature-icon" />,
    title: "Adobe XD Workflows",
    description:
      "Structured artboards, reusable symbols, and states. We keep layouts modular for quick iteration and stakeholder reviews.",
  },
  {
    icon: <IconFlow className="Wireframingdetails__feature-icon" />,
    title: "User Flows & Journeys",
    description:
      "From entry to conversion, we map happy paths and edge cases. Clear flow diagrams reveal friction points before UI design starts.",
  },
  {
    icon: <IconIA className="Wireframingdetails__feature-icon" />,
    title: "Information Architecture",
    description:
      "Sitemaps, content groupings, and navigation models that scale. We align structure with business goals and user tasks.",
  },
  {
    icon: <IconLowFi className="Wireframingdetails__feature-icon" />,
    title: "Low-Fidelity First",
    description:
      "Boxes before pixels. Sketches and grayscale frames validate layout, hierarchy, and copy blocks quickly—without visual noise.",
  },
  {
    icon: <IconProto className="Wireframingdetails__feature-icon" />,
    title: "Clickable Prototypes",
    description:
      "Smart interactions, overlay menus, and transitions in Figma/XD. Preview on device to validate flows in real contexts.",
  },
  {
    icon: <IconUsability className="Wireframingdetails__feature-icon" />,
    title: "Usability Review",
    description:
      "Heuristic checks (Nielsen’s 10), accessibility basics, and quick user walkthroughs to catch issues early and cheaply.",
  },
  {
    icon: <IconTokens className="Wireframingdetails__feature-icon" />,
    title: "Design Tokens & Grids",
    description:
      "Type scale, spacing, color roles, and grids embedded at the wireframe stage—so your UI system starts on solid rails.",
  },
  {
    icon: <IconHandoff className="Wireframingdetails__feature-icon" />,
    title: "Dev Handoff Ready",
    description:
      "Clear annotations, redlines, and component specs. We align nomenclature with future code (e.g., React/Next, Tailwind, or CSS Modules).",
  },
  {
    icon: <IconCollab className="Wireframingdetails__feature-icon" />,
    title: "Collaborative Iteration",
    description:
      "Comments, versions, and tickets integrated with your PM tools. Fast feedback loops to keep momentum and clarity.",
  },
];

/* ---------- Animations ---------- */
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.25 } },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.16, 0.77, 0.47, 0.97] } },
};

const cardHover = {
  hover: { y: -10, transition: { duration: 0.35, ease: "easeOut" } },
};

export default function Wireframingdetails() {
  return (
    <section className="Wireframingdetails" aria-labelledby="wireframingdetails-title">
      <div className="Wireframingdetails__decorative-circle" />
      <div className="Wireframingdetails__container">
        <motion.div
          className="Wireframingdetails__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 id="wireframingdetails-title" className="Wireframingdetails__title" variants={item}>
            <span className="Wireframingdetails__title-gradient" aria-hidden="true"></span>
            Wireframing & User Flows
          </motion.h2>
          <motion.p className="Wireframingdetails__subtitle" variants={item}>
            Figma & Adobe XD wireframes that clarify structure, journeys, and interactions—so UI design and development move faster with fewer surprises.
          </motion.p>
          <motion.div className="Wireframingdetails__header-divider" variants={item} />
        </motion.div>

        <motion.div
          className="Wireframingdetails__features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          role="list"
        >
          {features.map((feature, idx) => (
            <motion.div
              className="Wireframingdetails__feature-card"
              key={idx}
              variants={item}
              whileHover="hover"
              role="listitem"
            >
              <motion.div className="Wireframingdetails__card-inner" variants={cardHover}>
                <div className="Wireframingdetails__card-icon-container">
                  <div className="Wireframingdetails__card-icon-bg" />
                  <div className="Wireframingdetails__card-icon">{feature.icon}</div>
                </div>

                <h3 className="Wireframingdetails__card-title">{feature.title}</h3>
                <p className="Wireframingdetails__card-description">{feature.description}</p>

                <div className="Wireframingdetails__card-hover-effect" />
                <div className="Wireframingdetails__card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
