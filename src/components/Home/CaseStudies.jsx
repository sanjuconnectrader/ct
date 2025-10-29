import React, { useRef, useEffect } from "react";
import "./CaseStudies.css";

export default function CaseStudies({
  items = DEFAULT_ITEMS,
  ctaHref = "/works",
}) {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        });
      },
      { threshold: 0.2, rootMargin: "-50px 0px" }
    );

    cardsRef.current.forEach((card) => card && observer.observe(card));
    return () => observer.disconnect();
  }, []);

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
          <h2 id="case-studies-title" className="cs-title">Our Work</h2>

          {/* optional arrows if you enable horizontal overflow on .cs-grid */}
          {/* <div className="cs-arrows">
            <button className="cs-arrow" onClick={() => page(-1)} aria-label="Previous">←</button>
            <button className="cs-arrow" onClick={() => page(1)} aria-label="Next">→</button>
          </div> */}
        </div>

        <div
          className="cs-grid"
          ref={scrollerRef}
          role="list"
          aria-label="Case studies list"
        >
          {items.map((it, i) => (
            <article
              role="listitem"
              className="cs-card"
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
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

/* === Your three real projects === */
const DEFAULT_ITEMS = [
  {
    href: "/works/Moyer-production",  
    imageSrc: "/moyer-project.png", // keep your asset; swap to /moyer-project.png if you prefer
    imageAlt: "Moyer Production studio portfolio website mockup",
    category: "Photography & Videography",
    title: "Moyer Production — Studio Portfolio Website",
    summary:
      "A fast, media-rich studio site showcasing reels, galleries, and services with mobile-first performance and smooth browsing.",
  },
  {
    href: "/primed-landscaping",
    imageSrc: "./prime.png", // keep your asset; swap to /prime.png if you prefer
    imageAlt: "Primed Landscaping local services website preview",
    category: "Landscaping Services",
    title: "Primed Landscaping — Local Services Website",
    summary:
      "Service-driven pages with clear packages, quotes, and trust signals to convert neighborhood visitors into qualified leads.",
  },
  {
    href: "/greenworks-carpet-cleaning",
    imageSrc: "./green2.png", // keep your asset; swap to /green2.png if you prefer
    imageAlt: "GreenWorks Carpet Cleaning website redesign preview",
    category: "Cleaning Services",
    title: "GreenWorks Carpet Cleaning — Service Website Revamp",
    summary:
      "Modernized layouts, credibility badges, and streamlined booking flow to increase calls and form submissions.",
  },
];
