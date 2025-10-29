// Wireframefaq.jsx
import React, { useState } from "react";
import "./Wireframefaq.css";

const ALL_FAQS = [
  {
    q: "What is wireframing and why is it important?",
    a: "Wireframing is the low-fidelity blueprint of a screen or flow. It helps align stakeholders on layout, hierarchy, and UX early—before investing in high-fidelity design or development."
  },
  {
    q: "Do you use Figma or Adobe XD for wireframes?",
    a: "We primarily use Figma for collaborative wireframing due to its real-time co-editing, comments, and component libraries. We also support Adobe XD upon request, especially for teams already standardized on XD."
  },
  {
    q: "Low-fidelity vs high-fidelity wireframes—what’s the difference?",
    a: "Low-fi wireframes focus on structure and flow with simple boxes and text. High-fi wireframes add spacing, typography scale, and component detail. We start low-fi to move fast, then refine to high-fi when decisions stabilize."
  },
  {
    q: "How interactive are your wireframes?",
    a: "We create clickable prototypes for key paths (e.g., onboarding, checkout) using Figma’s prototyping. This lets you test navigation, modals, and transitions without building code."
  },
  // revealed by “Show more”
  {
    q: "What deliverables will I receive?",
    a: "You’ll get a Figma file (or XD file) with page maps, wireframe screens, interaction notes, and a component inventory. We also include a short playback video or Loom explaining decisions."
  },
  {
    q: "How do you incorporate feedback efficiently?",
    a: "We collect comments in Figma/XD using pinned notes and run 1–2 review cycles per milestone. Changes are tracked with version history and a changelog frame inside the file."
  },
  {
    q: "Can you reuse wireframe components to speed up work?",
    a: "Yes. We maintain a wireframe UI kit (buttons, inputs, cards, nav, tables, etc.) as Figma components/XD symbols. This keeps layouts consistent and accelerates iteration."
  },
  {
    q: "How do wireframes transition into UI design and development?",
    a: "Once approved, wireframes become the source for high-fidelity UI. We map each wireframe to UI components and create a dev-handoff plan with annotations, acceptance criteria, and page-level specs."
  }
];

export default function Wireframefaq() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const faqs = showAll ? ALL_FAQS : ALL_FAQS.slice(0, 4);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="wireframeFaq" aria-labelledby="wireframeFaq-title">
      <div className="wireframeFaq__wrap">
        <h2 id="wireframeFaq-title" className="wireframeFaq__title">
          Wireframing FAQs (Figma & Adobe XD)
        </h2>

        <div role="list" className="wireframeFaq__list">
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <article
                key={idx}
                role="listitem"
                className={`wireframeFaq__item ${isOpen ? "is-open" : ""}`}
              >
                <button
                  type="button"
                  className="wireframeFaq__toggle"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`wireframeFaq-panel-${idx}`}
                >
                  <span className="wireframeFaq__question">{item.q}</span>
                  <span className="wireframeFaq__plus" aria-hidden="true" />
                </button>

                <div
                  id={`wireframeFaq-panel-${idx}`}
                  className="wireframeFaq__answer"
                  role="region"
                >
                  <p>{item.a}</p>
                </div>
              </article>
            );
          })}
        </div>

        {!showAll && (
          <div className="wireframeFaq__more">
            <button
              type="button"
              className="wireframeFaq__moreBtn"
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
