// Mobiledetails.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Mobiledetails.css";

/* ---------- Inline SVG Icons (lightweight, no external libs) ---------- */
const IconCrossPlatform = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="3" y="6" width="28" height="20" rx="3" />
    <rect x="17" y="26" width="28" height="16" rx="3" />
    <circle cx="31" cy="34" r="2.5" />
    <path d="M10 10h14M10 16h9" stroke="currentColor" strokeWidth="2" fill="none" />
  </svg>
);

const IconFlutter = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M28 6L10 24l6 6L40 6h-12z" />
    <path d="M22 30l6 6L40 24h-12l-6 6z" />
  </svg>
);

const IconReactNative = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="24" cy="24" r="3.5" />
    <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(60 24 24)" fill="none" stroke="currentColor" strokeWidth="2" />
    <ellipse cx="24" cy="24" rx="18" ry="7" transform="rotate(-60 24 24)" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconLaravel = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M6 30l12 6 12-6V12L18 6 6 12v18z" fill="none" stroke="currentColor" strokeWidth="2" />
    <path d="M30 12l12 6v18l-12 6" fill="none" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconDatabase = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <ellipse cx="24" cy="10" rx="16" ry="6" />
    <path d="M8 10v12c0 3.3 7.2 6 16 6s16-2.7 16-6V10" />
    <path d="M8 22v12c0 3.3 7.2 6 16 6s16-2.7 16-6V22" />
  </svg>
);

const IconNotifications = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M24 6a8 8 0 00-8 8v6l-4 6h24l-4-6v-6a8 8 0 00-8-8z" />
    <circle cx="24" cy="40" r="4" />
  </svg>
);

const IconSecurityPay = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <path d="M24 6l16 6v10c0 9-7 14-16 16-9-2-16-7-16-16V12l16-6z" />
    <rect x="16" y="18" width="16" height="12" rx="2" fill="white" />
    <path d="M18 24h12M18 28h8" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconOffline = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="10" width="32" height="24" rx="4" />
    <path d="M16 28h16M14 18h20" stroke="currentColor" strokeWidth="2" />
    <path d="M10 38h28" />
    <circle cx="14" cy="34" r="2.5" />
  </svg>
);

const IconCICD = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <circle cx="12" cy="24" r="6" />
    <circle cx="36" cy="24" r="6" />
    <path d="M18 24h12" stroke="currentColor" strokeWidth="2" />
    <path d="M24 8v6M24 34v6" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const IconAnalytics = (props) => (
  <svg viewBox="0 0 48 48" aria-hidden="true" {...props}>
    <rect x="8" y="30" width="6" height="10" rx="1" />
    <rect x="20" y="22" width="6" height="18" rx="1" />
    <rect x="32" y="14" width="6" height="26" rx="1" />
    <path d="M8 12h32" stroke="currentColor" strokeWidth="2" />
  </svg>
);

/* ---------- Content ---------- */
const features = [
  {
    icon: <IconCrossPlatform className="Mobiledetails__feature-icon" />,
    title: "Cross-Platform Delivery",
    description:
      "Build once, deploy to iOS and Android. We choose React Native or Flutter based on your UI complexity, team skills, and roadmap—without compromising performance.",
  },
  {
    icon: <IconReactNative className="Mobiledetails__feature-icon" />,
    title: "React Native Expertise",
    description:
      "Reusable components, native navigation, TypeScript safety, deep links, background tasks, and first-class integration with native modules when you need them.",
  },
  {
    icon: <IconFlutter className="Mobiledetails__feature-icon" />,
    title: "Flutter for Pixel-Perfect UI",
    description:
      "Beautiful, consistent interfaces with smooth animations and Material/Cupertino widgets. Ideal for brand-driven apps that demand high-fidelity motion.",
  },
  {
    icon: <IconLaravel className="Mobiledetails__feature-icon" />,
    title: "Laravel API Backend",
    description:
      "Secure REST/GraphQL APIs, role-based auth, queue workers, scheduled jobs, and robust validation. Sanctum/Passport for tokens, plus cache and rate-limits.",
  },
  {
    icon: <IconDatabase className="Mobiledetails__feature-icon" />,
    title: "MySQL Data Layer",
    description:
      "Relational design, migrations, indexing, and backup strategies. We implement Prisma/Sequelize or Eloquent with read/write separation and safe rollbacks.",
  },
  {
    icon: <IconNotifications className="Mobiledetails__feature-icon" />,
    title: "Real-Time Messaging & Push",
    description:
      "Firebase Cloud Messaging & APNs for targeted push. WebSockets for chat/live updates, in-app notifications, and queued retries for reliability.",
  },
  {
    icon: <IconSecurityPay className="Mobiledetails__feature-icon" />,
    title: "Security & Payments",
    description:
      "OWASP-guided security, encrypted storage, and secure sessions. Payment integration (Stripe/Razorpay) with 3-D Secure, refunds, and webhooks.",
  },
  {
    icon: <IconOffline className="Mobiledetails__feature-icon" />,
    title: "Offline-First Experience",
    description:
      "Smart caching and background sync so the app works on spotty networks. Conflict resolution and optimistic UI to keep users moving.",
  },
  {
    icon: <IconCICD className="Mobiledetails__feature-icon" />,
    title: "CI/CD & Store Releases",
    description:
      "Fastlane, EAS, or Codemagic pipelines. Automated builds, code-signing, beta distribution (TestFlight/Play Console), and guided App Store submission.",
  },
  {
    icon: <IconAnalytics className="Mobiledetails__feature-icon" />,
    title: "Analytics & Crash Reporting",
    description:
      "Track funnels and retention with Firebase/Amplitude. Monitor performance, crashes, and ANR; close the loop with alerts and dashboards.",
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

export default function Mobiledetails() {
  return (
    <section className="Mobiledetails" aria-labelledby="mobiledetails-title">
      <div className="Mobiledetails__decorative-circle" />
      <div className="Mobiledetails__container">
        <motion.div
          className="Mobiledetails__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 id="mobiledetails-title" className="Mobiledetails__title" variants={item}>
            <span className="Mobiledetails__title-gradient" aria-hidden="true"></span>
            Mobile App Development
          </motion.h2>
          <motion.p className="Mobiledetails__subtitle" variants={item}>
            Cross-platform apps with React Native or Flutter, powered by Laravel APIs and MySQL—fast,
            secure, and ready to scale.
          </motion.p>
          <motion.div className="Mobiledetails__header-divider" variants={item} />
        </motion.div>

        <motion.div
          className="Mobiledetails__features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
          role="list"
        >
          {features.map((feature, idx) => (
            <motion.div
              className="Mobiledetails__feature-card"
              key={idx}
              variants={item}
              whileHover="hover"
              role="listitem"
            >
              <motion.div className="Mobiledetails__card-inner" variants={cardHover}>
                <div className="Mobiledetails__card-icon-container">
                  <div className="Mobiledetails__card-icon-bg" />
                  <div className="Mobiledetails__card-icon">{feature.icon}</div>
                </div>

                <h3 className="Mobiledetails__card-title">{feature.title}</h3>
                <p className="Mobiledetails__card-description">{feature.description}</p>

                <div className="Mobiledetails__card-hover-effect" />
                <div className="Mobiledetails__card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
