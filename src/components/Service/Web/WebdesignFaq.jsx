// WebdesignFaq.jsx
import React, { useState } from "react";
import "./WebdesignFaq.css";

const ALL_FAQS = [
  {
    q: "What does your web design process look like from start to finish?",
    a: "We follow a four-phase process: Discovery (goals, audience, sitemap), Design (wireframes → high-fidelity mockups), Build (responsive React/Next.js frontend + CMS if needed), and Launch (QA, performance/SEO checks, deployment)."
  },
  {
    q: "Will my website be responsive and accessible?",
    a: "Yes. We design mobile-first layouts that adapt to all screen sizes and follow WCAG guidelines for color contrast, keyboard navigation, and semantic HTML for better accessibility."
  },
  {
    q: "Do you also handle SEO best practices?",
    a: "We implement technical SEO (meta tags, structured data where applicable, XML sitemaps, clean URLs), performance optimizations, and on-page essentials to help your site get discovered."
  },
  {
    q: "Can I edit content myself after launch?",
    a: "Absolutely. We can integrate a CMS like WordPress, Strapi, or a headless setup so you can manage pages, blogs, and media without touching code."
  },
  // More items revealed by "Show more"
  {
    q: "How long does a typical website project take?",
    a: "Most small business sites (5–8 pages) take 2–4 weeks depending on content readiness and review speed. Larger, custom builds can take 6–10 weeks."
  },
  {
    q: "What is included in your pricing?",
    a: "Design, responsive development, basic SEO setup, contact forms, analytics hookup, and launch support are standard. Add-ons include branding, copywriting, advanced animations, or custom integrations."
  },
  {
    q: "How many revision rounds do I get?",
    a: "We include two structured revision rounds during the design phase and one during development for polishing real content and micro-interactions."
  },
  {
    q: "Do you provide hosting, domain, and ongoing maintenance?",
    a: "We can set up hosting on Vercel/Netlify or your provider, help connect your domain, and offer maintenance plans for backups, updates, monitoring, and small enhancements."
  }
];

export default function WebdesignFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="WebdesignFaq" aria-labelledby="WebdesignFaq-title">
      <div className="WebdesignFaq__wrap">
        <h2 id="WebdesignFaq-title" className="WebdesignFaq__title">Web Design FAQs</h2>

        <div role="list" className="WebdesignFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`WebdesignFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="WebdesignFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`WebdesignFaq-panel-${idx}`}
                >
                  <span className="WebdesignFaq__question">{item.q}</span>
                  <span className="WebdesignFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`WebdesignFaq-panel-${idx}`}
                  className="WebdesignFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="WebdesignFaq__more">
            <button
              type="button"
              className="WebdesignFaq__moreBtn"
              onClick={() => setShowAll(true)}
            >
              Show more FAQs
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
