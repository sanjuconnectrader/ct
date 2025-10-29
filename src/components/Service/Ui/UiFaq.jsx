import React, { useState } from "react";
import "./UiFaq.css";

const ALL_FAQS = [
  {
    q: "Which tech stack do you specialize in for web development?",
    a: "We primarily work with Next.js, TypeScript, Tailwind CSS, and modern frameworks. Our backend expertise includes MySQL, MongoDB, and serverless architectures for scalable applications."
  },
  {
    q: "Do you provide mobile app development services?",
    a: "Yes, we develop cross-platform mobile applications using React Native and Flutter, ensuring consistent performance across iOS and Android with native-like user experiences."
  },
  {
    q: "What CMS solutions do you recommend and implement?",
    a: "We implement headless CMS solutions like Contentful and Strapi, along with traditional platforms like WordPress, tailored to your content management needs and scalability requirements."
  },
  {
    q: "How do you handle DevOps and deployment processes?",
    a: "We implement CI/CD pipelines using GitHub Actions, Docker containerization, and cloud platforms like Vercel and AWS for automated testing, deployment, and monitoring."
  },
  // More items revealed by "Show more"
  {
    q: "Do you work with design tools like Figma?",
    a: "Absolutely. We collaborate closely with design teams using Figma, ensuring pixel-perfect implementation and maintaining design consistency throughout the development process."
  },
  {
    q: "What database solutions do you support?",
    a: "We work with both SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases, choosing the right solution based on data structure, scalability needs, and performance requirements."
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, feature enhancements, and 24/7 monitoring for critical applications."
  },
  {
    q: "How do you ensure code quality and best practices?",
    a: "We enforce code quality through TypeScript, ESLint, Prettier, unit testing, and code reviews. Our development process follows agile methodologies with regular client collaboration."
  }
];

export default function UiFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="UiFaq" aria-labelledby="UiFaq-title">
      <div className="UiFaq__wrap">
        <h2 id="UiFaq-title" className="UiFaq__title">Technology FAQs</h2>

        <div role="list" className="UiFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`UiFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="UiFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`UiFaq-panel-${idx}`}
                >
                  <span className="UiFaq__question">{item.q}</span>
                  <span className="UiFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`UiFaq-panel-${idx}`}
                  className="UiFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="UiFaq__more">
            <button
              type="button"
              className="UiFaq__moreBtn"
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
