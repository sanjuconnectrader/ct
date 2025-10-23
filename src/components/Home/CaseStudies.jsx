// CaseStudies.jsx
import React, { useRef } from "react";
import "./CaseStudies.css";

export default function CaseStudies({
  items = DEFAULT_ITEMS,
  ctaHref = "/works",
}) {
  const scrollerRef = useRef(null);

  const page = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <section className="cs-section" aria-labelledby="case-studies-title">
      <div className="cs-wrap">
        <div className="cs-header">
          <h2 id="case-studies-title" className="cs-title">Case Studies</h2>
     
        </div>

        <div className="cs-grid" ref={scrollerRef} role="list" aria-label="Case studies list">
          {items.map((it, i) => (
            <article role="listitem" className="cs-card" key={i}>
              <a href={it.href} className="cs-link">
                <div className="cs-media">
                  <img
                    src={it.imageSrc}
                    alt={it.imageAlt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <p className="cs-category">{it.category}</p>
                <h3 className="cs-card-title">{it.title}</h3>
                <p className="cs-summary">{it.summary}</p>
              </a>
            </article>
          ))}
        </div>

        <div className="cs-cta-row">
          <a className="cs-cta" href={ctaHref}>View all works →</a>
        </div>
      </div>
    </section>
  );
}

const DEFAULT_ITEMS = [
  {
    href: "/case-studies/moyer-production",
    imageSrc: "/caseone.webp",
    imageAlt: "Moyer Production photography portfolio shown on laptop and phone",
    category: "Photography / Studio",
    summary:
      "Designed and built a high-performance photography portfolio with curated galleries, EXIF-aware image handling.",
  },
  {
    href: "/case-studies/prined-landscaping",
    imageSrc: "/case2.webp",
    imageAlt: "Landscaping crew laying pavers and trimming hedges in a residential yard",
    category: "Landscaping / Home Services",
    summary:
      "Conversion-focused site with local-service SEO, seasonal offer modules, before–after project sliders.",
  },
  {
    href: "/case-studies/greenworks-carpet-cleaning",
    imageSrc: "/case3.webp",
    imageAlt: "Technician performing hot-water extraction on a living-room carpet",
    category: "Cleaning Services",
    summary:
      "Local-SEO optimized website featuring a dynamic pricing estimator, Formspree + reCAPTCHA booking forms.",
  },

    {
    href: "/case-studies/moyer-production",
    imageSrc: "/case4.webp",
    imageAlt: "Moyer Production photography portfolio shown on laptop and phone",
    category: "Photography / Studio",
    summary:
      "Designed and built a high-performance photography portfolio with curated galleries, EXIF-aware image handling.",
  },
  {
    href: "/case-studies/prined-landscaping",
    imageSrc: "/case5.webp",
    imageAlt: "Landscaping crew laying pavers and trimming hedges in a residential yard",
    category: "Landscaping / Home Services",
    summary:
      "Conversion-focused site with local-service SEO, seasonal offer modules, before–after project sliders.",
  },
  {
    href: "/case-studies/greenworks-carpet-cleaning",
    imageSrc: "/case6.webp",
    imageAlt: "Technician performing hot-water extraction on a living-room carpet",
    category: "Cleaning Services",
    summary:
      "Local-SEO optimized website featuring a dynamic pricing estimator, Formspree + reCAPTCHA booking forms.",
  },
];
