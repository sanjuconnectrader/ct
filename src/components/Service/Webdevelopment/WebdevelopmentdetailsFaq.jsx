// WebdevelopmentdetailsFaq.jsx
import React, { useState } from "react";
import "./WebdevelopmentdetailsFaq.css";

const ALL_FAQS = [
  {
    q: "Which stack do you use for web development?",
    a: "We specialize in MERN (MongoDB, Express, React, Node.js) and Next.js for SSR/SSG. TypeScript is our default for safer, scalable codebases."
  },
  {
    q: "When do you choose MERN vs. Next.js?",
    a: "For SPA-style apps and API-heavy dashboards, MERN with React Router is great. For SEO, performance, or content-heavy sites, we prefer Next.js for SSR/SSG, routing, image optimization, and server actions."
  },
  {
    q: "Why do you prefer TypeScript?",
    a: "TypeScript catches bugs at compile time, improves IDE autocomplete, and enables safer refactors—ideal for teams, shared components, and long-term maintenance."
  },
  {
    q: "How do you manage code on GitHub?",
    a: "We use PR reviews with required checks (lint, type-check, tests). Protected branches, code owners, conventional commits, and preview deployments ensure quality and traceability."
  },
  // revealed by “Show more”
  {
    q: "MySQL vs. MongoDB—how do you decide?",
    a: "MySQL fits relational data, strict schemas, and complex joins. MongoDB suits flexible documents, rapid iteration, and variable record shapes. We also mix: MySQL for transactions, MongoDB for events/content."
  },
  {
    q: "How do you model data for MySQL and MongoDB?",
    a: "For MySQL we design normalized schemas with clear FKs and indexes. For MongoDB we design collections around read patterns, with compound indexes and careful document sizing."
  },
  {
    q: "What does your CI/CD and deployment look like?",
    a: "GitHub Actions runs linting, type-checking, tests, and builds. Next.js deploys to Vercel for edge performance, or to AWS (ECS/Lambda) when we need custom infrastructure. Secrets live in platform secret stores."
  },
  {
    q: "How do you handle auth, security, and performance?",
    a: "NextAuth/Auth0 for authentication, secure cookies, input validation, parameterized queries, and rate-limits. Performance via caching, CDN, DB indexes, lazy/dynamic imports, and detailed observability."
  }
];

export default function WebdevelopmentdetailsFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      className="WebdevelopmentdetailsFaq"
      aria-labelledby="WebdevelopmentdetailsFaq-title"
    >
      <div className="WebdevelopmentdetailsFaq__wrap">
        <h2
          id="WebdevelopmentdetailsFaq-title"
          className="WebdevelopmentdetailsFaq__title"
        >
          Web Development FAQs 
        </h2>

        <div role="list" className="WebdevelopmentdetailsFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`WebdevelopmentdetailsFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="WebdevelopmentdetailsFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`WebdevelopmentdetailsFaq-panel-${idx}`}
                >
                  <span className="WebdevelopmentdetailsFaq__question">{item.q}</span>
                  <span className="WebdevelopmentdetailsFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`WebdevelopmentdetailsFaq-panel-${idx}`}
                  className="WebdevelopmentdetailsFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="WebdevelopmentdetailsFaq__more">
            <button
              type="button"
              className="WebdevelopmentdetailsFaq__moreBtn"
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
