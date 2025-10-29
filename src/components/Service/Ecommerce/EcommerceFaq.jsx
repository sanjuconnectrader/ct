// EcommerceFaq.jsx
import React, { useState } from "react";
import "./EcommerceFaq.css";

const ALL_FAQS = [
  {
    q: "What stack do you use for e-commerce builds?",
    a: "We typically use Next.js (with React) and TypeScript on the frontend, backed by a Node.js/Express API with MongoDB or MySQL depending on data needs. For full-stack MERN, we add Redux Toolkit for state and RTK Query for API caching."
  },
  {
    q: "Do you build a custom admin panel?",
    a: "Yes. We create a role-based admin (Owner, Manager, Staff) with dashboards for products, categories, inventory, orders, customers, returns, coupons, and reports. We also add activity logs and granular permissions."
  },
  {
    q: "How do you handle payments and checkout?",
    a: "We integrate Stripe, Razorpay, PayPal, or Square with secure server-side intents, webhooks for order lifecycle, and PCI-aware flows. Features include saved cards, multi-currency, Apple/Google Pay, and 3-D Secure where supported."
  },
  {
    q: "What state management do you use?",
    a: "Redux Toolkit (slices + RTK Query) for cart, auth, and product caching. In Next.js App Router projects we mix server components with client islands and keep shared state minimal and predictable."
  },
  // revealed by “Show more”
  {
    q: "How do you model products, variants, and inventory?",
    a: "We support SPUs/variants (size, color), barcodes/SKUs, stock attributions, backorders, and bundles. Inventory updates are transactional with reserved stock during checkout to prevent oversells."
  },
  {
    q: "What about shipping, taxes, and coupons?",
    a: "We integrate carriers (Shippo/EasyPost) for live rates and labels, regional tax engines (TaxJar/Avalara), and advanced promotions—coupon codes, BOGO, tiered discounts, and cart rules."
  },
  {
    q: "How do you ensure performance and SEO?",
    a: "Next.js Image, route-level caching, ISR/SSG for catalog and PDPs, structured data for products, canonical URLs, sitemap, robots, and Core Web Vitals optimization. We also add search with debounce and server pagination."
  },
  {
    q: "How do you handle security and compliance?",
    a: "HTTPS everywhere, secure cookies, input validation, CSRF protection, rate-limiting, audit logs, least-privilege RBAC, and dependency scanning. Payments are processed via compliant gateways—no card data stored on our servers."
  }
];

export default function EcommerceFaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="EcommerceFaq" aria-labelledby="EcommerceFaq-title">
      <div className="EcommerceFaq__wrap">
        <h2 id="EcommerceFaq-title" className="EcommerceFaq__title">
          E-commerce Development FAQs (MERN • Next.js • TypeScript • Redux • Payments)
        </h2>

        <div role="list" className="EcommerceFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`EcommerceFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="EcommerceFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`EcommerceFaq-panel-${idx}`}
                >
                  <span className="EcommerceFaq__question">{item.q}</span>
                  <span className="EcommerceFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`EcommerceFaq-panel-${idx}`}
                  className="EcommerceFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="EcommerceFaq__more">
            <button
              type="button"
              className="EcommerceFaq__moreBtn"
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
