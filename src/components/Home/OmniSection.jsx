import React, { useEffect, useRef } from "react";
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
const DEFAULT_TITLE = "Mobile Apps, CMS & Web Apps — Unified Framework";

const DEFAULT_FEATURES = [
  {
    icon: <IconPhone />,
    heading: "Mobile-First Applications",
    copy:
      "Cross-platform mobile development with React Native and Flutter. We build performant apps with intuitive UX, offline capabilities, and seamless API integration.",
  },
  {
    icon: <IconServer />,
    heading: "Scalable Backend Systems",
    copy:
      "Robust server architecture with Node.js, Python, and cloud services. We design secure APIs, database schemas, and microservices for optimal performance.",
  },
  {
    icon: <IconBrowser />,
    heading: "Modern Web Platforms",
    copy:
      "Progressive web applications with React, Vue, and modern frameworks. We focus on performance, accessibility, and user experience across all devices.",
  },
];

export default function OmniSection({
  title = DEFAULT_TITLE,
  features = DEFAULT_FEATURES,
  imageSrc = "./data-removebg-preview.png",
  imageAlt = "Full-stack development architecture illustration",
}) {
  const titleRef = useRef(null);
  const rowsRef = useRef([]);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (imageRef.current) observer.observe(imageRef.current);
    
    rowsRef.current.forEach((row) => {
      if (row) observer.observe(row);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="omni" aria-labelledby="omni-title">
      <div className="omni__container">
        {/* LEFT */}
        <div className="omni__left">
          <h2 id="omni-title" className="omni__title" ref={titleRef}>{title}</h2>

          <ul className="omni__list" role="list">
            {features.map((f, i) => (
              <li className="omni__row" key={i} ref={el => rowsRef.current[i] = el}>
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
          <img className="omni__art" src={imageSrc} alt={imageAlt} loading="lazy" ref={imageRef} />
        </div>
      </div>
    </section>
  );
}