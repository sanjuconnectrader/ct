import React from "react";
import "./OmniSection.css";

/** 24px monochrome SVG icons (accessible, decorative) */
const IconPhone = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 2h6a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 2v16h6V4H9zm3 14a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 12 20z" fill="currentColor"/>
  </svg>
);

const IconServer = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="6" rx="2" fill="currentColor"/>
    <rect x="3" y="14" width="18" height="6" rx="2" fill="currentColor"/>
    <circle cx="7" cy="7" r="1.25" fill="#fff"/>
    <circle cx="10" cy="7" r="1.25" fill="#fff"/>
    <circle cx="7" cy="17" r="1.25" fill="#fff"/>
    <circle cx="10" cy="17" r="1.25" fill="#fff"/>
  </svg>
);

const IconBrowser = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="4" width="18" height="16" rx="2" fill="currentColor"/>
    <rect x="5" y="7" width="14" height="2" rx="1" fill="#fff"/>
    <rect x="5" y="11" width="10" height="2" rx="1" fill="#fff"/>
    <rect x="5" y="15" width="8" height="2" rx="1" fill="#fff"/>
  </svg>
);

/** Default content */
const DEFAULT_TITLE = "Mobile Apps, Backends, CMS & Web Apps — Unified Framework";

const DEFAULT_FEATURES = [
  {
    icon: <IconPhone />,
    heading: "Mobile App Development",
    copy:
      "Fast, responsive iOS/Android apps with clean UX and offline-first patterns. We ship with CI/CD, analytics, and crash reporting baked in.",
  },
  {
    icon: <IconServer />,
    heading: "Backend APIs & Databases",
    copy:
      "Secure Node/Express services, REST/GraphQL APIs, and scalable data models. Auth, RBAC, queues, and caching for real-world performance.",
  },
  {
    icon: <IconBrowser />,
    heading: "Web App Development",
    copy:
      "High-performance web apps with modern React patterns, accessibility, SEO, and pixel-perfect UI—optimized for Core Web Vitals.",
  },
];

/**
 * Props:
 * - title: string
 * - features: [{icon: ReactNode, heading: string, copy: string}]
 * - imageSrc: string
 * - imageAlt: string
 */
export default function OmniSection({
  title = DEFAULT_TITLE,
  features = DEFAULT_FEATURES,
  imageSrc = "./data-removebg-preview.png",
  imageAlt = "Connected platform illustration covering mobile, backend, CMS, and web",
}) {
  return (
    <section className="omni" aria-labelledby="omni-title">
      <div className="omni__container">
        {/* LEFT */}
        <div className="omni__left">
          <h2 id="omni-title" className="omni__title">{title}</h2>

          <ul className="omni__list" role="list">
            {features.map((f, i) => (
              <li className="omni__row" key={i}>
                <span className="omni__ico" aria-hidden="true">{f.icon}</span>
                <div className="omni__rowText">
                  <h3 className="omni__rowTitle">{f.heading}</h3>
                  <p className="omni__rowBody">{f.copy}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="omni__right">
          <img className="omni__art" src={imageSrc} alt={imageAlt} loading="lazy" />
        </div>
      </div>
    </section>
  );
}
