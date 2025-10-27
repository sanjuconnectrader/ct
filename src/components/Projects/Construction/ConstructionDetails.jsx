import React, { useEffect } from "react";
import "./ConstructionDetails.css";

export default function ConstructionDetails({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <div
        className="cdrawer__overlay"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className="cdrawer"
        aria-hidden="false"
        aria-label="Construction case study details"
        role="dialog"
      >
        <button
          className="cdrawer__close"
          onClick={onClose}
          aria-label="Close details"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="cdrawer__scroll">
          <figure className="cdrawer__hero">
            <img
              src="./construction.png"
              alt="MNG LLC construction mockup"
              loading="eager"
            />
          </figure>

          <section className="cdrawer__intro">
            <div className="cdrawer__chip">Construction</div>
            <h1 className="cdrawer__title">
              MNG LLC: Streamlined Digital Presence for a Tacoma Contractor
            </h1>
            <p className="cdrawer__lead">
              We helped MNG LLC modernize their web presence with a clean,
              fast, and mobile-first site that showcases services, past work,
              and easy ways to request estimates. The result is a frictionless
              experience that converts visitors into qualified leads.
            </p>
          </section>

          <section className="cdrawer__specs">
            <div className="cdspec">
              <span className="cdspec__label">Language</span>
              <span className="cdspec__value">JavaScript</span>
            </div>
        
        
            <div className="cdspec">
              <span className="cdspec__label">System</span>
              <span className="cdspec__value">React / Node / MySQL</span>
            </div>
          </section>

          <section className="cdrawer__services">
            <h2 className="cdrawer__sub">Services Provided</h2>
            <div className="cdpills">
              <span className="cdpill">UI/UX Design</span>
              <span className="cdpill">Web Development</span>
          
            </div>
          </section>

          <section className="cdrawer__gallery">
            <div className="cdrawer__galleryItem">
              <img
                src="./construction-hero-1.png"
                alt="Service cards and estimate CTA preview"
                loading="lazy"
              />
            </div>
            <div className="cdrawer__galleryItem">
              <img
                src="./construction-hero-2.png"
                alt="Project detail page preview"
                loading="lazy"
              />
            </div>
            <div className="cdrawer__galleryItem">
              <img
                src="./construction-hero-3.png"
                alt="Brand icon close-up"
                loading="lazy"
              />
            </div>
          </section>

          <section className="cdrawer__more">
            <h3 className="cdrawer__moreTitle">
              Would you like to know more about the project?
            </h3>
            <p className="cdrawer__moreText">
              To find out more about our work or any of our other builds, get
              in touch. Mail us on <a href="mailto:info@connectrader.com">info@connectrader.com</a> or
              call <a href="tel:+14255550123">+1 (777) 7777</a>.
            </p>
            <a className="cdrawer__cta" href="/contact" aria-label="Let's talk">
              <span>Let's talk</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </section>
        </div>

      </aside>
    </>
  );
}