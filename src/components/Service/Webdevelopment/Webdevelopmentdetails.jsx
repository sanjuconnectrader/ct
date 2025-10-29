// Webdevelopmentdetails.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Webdevelopmentdetails.css";

/* ---------- Inline SVG Icons (no external libs) ---------- */
const IconNextTs = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="28" rx="4" />
    <path d="M14 18h8M14 24h8M14 30h6" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M30 18l8 12" stroke="currentColor" strokeWidth="2" />
    <circle cx="32" cy="22" r="3" />
  </svg>
);

const IconMERN = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="12" cy="24" r="6" />
    <circle cx="24" cy="24" r="6" />
    <circle cx="36" cy="24" r="6" />
    <path d="M12 30v6M24 30v6M36 30v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconLaravelPhp = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M8 28l12 6 12-6V14L20 8 8 14v14z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M32 14l8 4v14l-8 4" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconVue = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M24 38L8 10h8l8 14 8-14h8L24 38z" />
  </svg>
);

const IconCMS = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="28" rx="4" />
    <rect x="12" y="16" width="12" height="8" />
    <rect x="26" y="16" width="10" height="8" />
    <rect x="12" y="26" width="24" height="6" />
  </svg>
);

const IconDB = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <ellipse cx="24" cy="12" rx="16" ry="6" />
    <path d="M8 12v10c0 3.3 7.2 6 16 6s16-2.7 16-6V12" />
    <path d="M8 22v10c0 3.3 7.2 6 16 6s16-2.7 16-6V22" />
  </svg>
);

const IconAuthSecurity = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M24 8l14 6v8c0 9-7 14-14 16-7-2-14-7-14-16v-8l14-6z" />
    <rect x="18" y="20" width="12" height="10" rx="2" fill="white" />
    <path d="M20 25h8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconPerformanceSEO = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="18" cy="18" r="8" />
    <path d="M23 23l11 11" stroke="currentColor" strokeWidth="3" />
    <path d="M10 34h28" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconTesting = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="6" y="10" width="36" height="24" rx="3" />
    <path d="M10 16h10l3 6h15" stroke="currentColor" strokeWidth="2" fill="none" />
    <circle cx="16" cy="34" r="3" />
    <circle cx="32" cy="34" r="3" />
  </svg>
);

const IconCICD = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="12" cy="24" r="6" />
    <circle cx="36" cy="24" r="6" />
    <path d="M18 24h12M24 8v6M24 34v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* ---------- Content ---------- */
const features = [
  {
    icon: <IconNextTs className="Webdevelopmentdetails__feature-icon" />,
    title: "Next.js + TypeScript",
    description:
      "App Router, server components, API routes, and strict TypeScript types. Image optimization, ISR/SSG, and Route Handlers for fast, SEO-friendly sites.",
  },
  {
    icon: <IconMERN className="Webdevelopmentdetails__feature-icon" />,
    title: "MERN Applications",
    description:
      "MongoDB + Express + React + Node. Clean architecture, RTK/Zustand state, and robust API layers with validation, caching, and pagination.",
  },
  {
    icon: <IconLaravelPhp className="Webdevelopmentdetails__feature-icon" />,
    title: "PHP / Laravel Backends",
    description:
      "REST/GraphQL APIs, queued jobs, scheduled tasks, and policy-based authorization. Eloquent with migrations, seeders, and request validation.",
  },
  {
    icon: <IconVue className="Webdevelopmentdetails__feature-icon" />,
    title: "Vue 3 & Vite",
    description:
      "Composition API, Pinia, Vue Router, and Vite build tooling. Great for dashboards and admin portals with speedy HMR and DX.",
  },
  {
    icon: <IconCMS className="Webdevelopmentdetails__feature-icon" />,
    title: "Headless CMS",
    description:
      "Strapi, Contentful, or Sanity integrated via SDKs/webhooks. Role-based editorial workflows and preview hooks for Next.js.",
  },
  {
    icon: <IconDB className="Webdevelopmentdetails__feature-icon" />,
    title: "Data & ORMs",
    description:
      "Prisma/Sequelize/Eloquent, migrations, indexing, and connection pooling. Multi-env secrets and automated backups.",
  },
  {
    icon: <IconAuthSecurity className="Webdevelopmentdetails__feature-icon" />,
    title: "Auth & Security",
    description:
      "NextAuth/JWT/OAuth, CSRF protection, rate-limits, and input sanitization following OWASP ASVS. Secure file uploads and signed URLs.",
  },
  {
    icon: <IconPerformanceSEO className="Webdevelopmentdetails__feature-icon" />,
    title: "Performance & SEO",
    description:
      "Core Web Vitals, code-splitting, caching headers, and structured data. Lighthouse-driven tuning for speed and discoverability.",
  },
  {
    icon: <IconTesting className="Webdevelopmentdetails__feature-icon" />,
    title: "Testing & Quality",
    description:
      "Unit with Jest/RTL, E2E with Playwright, API tests, and visual regressions. Git hooks and lint rules keep repos healthy.",
  },
  {
    icon: <IconCICD className="Webdevelopmentdetails__feature-icon" />,
    title: "CI/CD & Deployment",
    description:
      "Vercel, Docker, or Nginx. GitHub Actions pipelines, preview environments, and zero-downtime releases with observability baked in.",
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

export default function Webdevelopmentdetails() {
  return (
    <section className="Webdevelopmentdetails" aria-labelledby="webdevelopmentdetails-title">
      <div className="Webdevelopmentdetails__decorative-circle" />
      <div className="Webdevelopmentdetails__container">
        <motion.div
          className="Webdevelopmentdetails__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 id="webdevelopmentdetails-title" className="Webdevelopmentdetails__title" variants={item}>
            <span className="Webdevelopmentdetails__title-gradient" aria-hidden="true"></span>
            Full-Stack Web Development
          </motion.h2>
          <motion.p className="Webdevelopmentdetails__subtitle" variants={item}>
            Modern web apps with Next.js & TypeScript, MERN, Vue, and Laravel APIs—built for speed, security, and scale.
          </motion.p>
          <motion.div className="Webdevelopmentdetails__header-divider" variants={item} />
        </motion.div>

        <motion.div
          className="Webdevelopmentdetails__features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          role="list"
        >
          {features.map((feature, idx) => (
            <motion.div
              className="Webdevelopmentdetails__feature-card"
              key={idx}
              variants={item}
              whileHover="hover"
              role="listitem"
            >
              <motion.div className="Webdevelopmentdetails__card-inner" variants={cardHover}>
                <div className="Webdevelopmentdetails__card-icon-container">
                  <div className="Webdevelopmentdetails__card-icon-bg" />
                  <div className="Webdevelopmentdetails__card-icon">{feature.icon}</div>
                </div>

                <h3 className="Webdevelopmentdetails__card-title">{feature.title}</h3>
                <p className="Webdevelopmentdetails__card-description">{feature.description}</p>

                <div className="Webdevelopmentdetails__card-hover-effect" />
                <div className="Webdevelopmentdetails__card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
