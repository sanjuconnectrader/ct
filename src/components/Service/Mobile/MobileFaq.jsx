// MobileFaq.jsx
import React, { useState } from "react";
import "./MobileFaq.css";

const ALL_FAQS = [
  {
    q: "What does your mobile app development process look like from start to finish?",
    a: "We follow four phases: Discovery (goals, audience, feature list, user flows), Design (wireframes → high-fidelity UI and prototypes), Build (Flutter or React Native frontend + Laravel/Node.js backend + MySQL DB), and Launch (QA, store submission, performance/analytics, and deployment)."
  },
  {
    q: "Which technologies do you use for cross-platform apps?",
    a: "We build with Flutter (Dart) or React Native (JavaScript/TypeScript). Choice depends on your team, UI needs, and future roadmap. Both deliver iOS/Android from a single codebase with native performance."
  },
  {
    q: "What backend stack do you recommend and why?",
    a: "For monolithic APIs and speedy CRUD, Laravel (PHP) is fantastic. For real-time features and microservices, Node.js (Express/Nest) shines. We typically pair either with MySQL (or Postgres) and Redis for caching/queues."
  },
  {
    q: "How do you handle data storage and sync?",
    a: "Server data lives in MySQL with well-modeled schemas and migrations. On the device, we use secure local storage (e.g., SQLite/Room/SecureStorage) and implement background sync with conflict handling for offline-first UX."
  },
  // More items revealed by "Show more"
  {
    q: "Do you implement notifications, authentication, and payments?",
    a: "Yes. We integrate push notifications (FCM/APNs), email/SMS OTP, social logins, and payments (Stripe/Razorpay/etc.). We also support role-based access, refresh tokens, and secure session handling."
  },
  {
    q: "What is included in your pricing?",
    a: "Design system, cross-platform app, REST/GraphQL API (Laravel or Node.js), MySQL schema, CI/CD, basic analytics, crash reporting, and app store submission support. Add-ons: advanced animations, admin dashboards, 3rd-party integrations, or complex analytics."
  },
  {
    q: "How many revision rounds do I get and what about QA?",
    a: "We include two structured design revisions and one development polish round. QA covers unit/integration tests, device lab testing, beta builds (TestFlight/Play Internal), and performance profiling before release."
  },
  {
    q: "How long does a typical app take and do you offer maintenance?",
    a: "MVPs usually take 4–8 weeks depending on scope and content readiness. We provide maintenance plans for OS updates, library/security patches, backups, monitoring, and minor feature improvements."
  }
];

export default function MobileFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="MobileFaq" aria-labelledby="MobileFaq-title">
      <div className="MobileFaq__wrap">
        <h2 id="MobileFaq-title" className="MobileFaq__title">Mobile App Development FAQs</h2>

        <div role="list" className="MobileFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`MobileFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="MobileFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`MobileFaq-panel-${idx}`}
                >
                  <span className="MobileFaq__question">{item.q}</span>
                  <span className="MobileFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`MobileFaq-panel-${idx}`}
                  className="MobileFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="MobileFaq__more">
            <button
              type="button"
              className="MobileFaq__moreBtn"
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
