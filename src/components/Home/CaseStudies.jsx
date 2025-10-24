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
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px 0px" }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

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
        </div>

        <div className="cs-grid" ref={scrollerRef} role="list" aria-label="Case studies list">
          {items.map((it, i) => (
            <article 
              role="listitem" 
              className="cs-card" 
              key={i}
              ref={el => cardsRef.current[i] = el}
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

const DEFAULT_ITEMS = [
  {
    href: "/case-studies/ecommerce-platform",
    imageSrc: "/caseone.webp",
    imageAlt: "Modern e-commerce dashboard with analytics and product management",
    category: "E-commerce / Platform",
    title: "Scalable E-commerce Solution",
    summary: "Built a high-performance online store with real-time inventory, secure payments, and mobile-first responsive design for optimal customer experience.",
  },
  {
    href: "/case-studies/saas-dashboard",
    imageSrc: "/case2.webp",
    imageAlt: "Business analytics dashboard with data visualization charts",
    category: "SaaS / Analytics",
    title: "Business Intelligence Platform",
    summary: "Developed an intuitive dashboard with custom data visualization, real-time reporting, and automated insights for data-driven decision making.",
  },
  {
    href: "/case-studies/mobile-app",
    imageSrc: "/case3.webp",
    imageAlt: "Mobile application interface showing user profile and features",
    category: "Mobile / Cross-platform",
    title: "Fitness Tracking Application",
    summary: "Created a cross-platform mobile app with health tracking, social features, and personalized workout plans using React Native and cloud services.",
  },
  {
    href: "/case-studies/web-app",
    imageSrc: "/case4.webp",
    imageAlt: "Project management tool with team collaboration features",
    category: "Web Application / Productivity",
    title: "Team Collaboration Platform",
    summary: "Engineered a real-time collaboration tool with task management, file sharing, and video conferencing integration for remote teams.",
  },
  {
    href: "/case-studies/design-system",
    imageSrc: "/case5.webp",
    imageAlt: "Design system components and documentation",
    category: "Design System / UI/UX",
    title: "Enterprise Design System",
    summary: "Built a comprehensive design system with reusable components, accessibility guidelines, and developer documentation for consistent user experiences.",
  },
  {
    href: "/case-studies/api-platform",
    imageSrc: "/case6.webp",
    imageAlt: "API documentation and developer portal interface",
    category: "API / Backend",
    title: "RESTful API Platform",
    summary: "Developed a scalable API platform with comprehensive documentation, rate limiting, and authentication for third-party developer integration.",
  },
];