import React from "react";
import "./CorporateStewardship.css";

export default function CorporateStewardship() {
  return (
    <section className="csr" aria-label="Corporate Stewardship">
      <div className="csr__wrap">
        {/* LEFT: Huge title + paragraph */}
        <div className="csr__left">
          <h1 className="csr__title">
            Work-Life <br /> Harmony
          </h1>

          <p className="csr__lead">
            We believe sustainable innovation thrives when people feel balanced and supported. 
            Our approach integrates flexible work, mental wellness, and personal growth into 
            the fabric of our culture—creating an environment where excellence and well-being coexist.
          </p>
        </div>

        {/* RIGHT: Two items with icons */}
        <div className="csr__right">
          {/* Item 1 */}
          <article className="csr__item" role="listitem">
            <div className="csr__icon" aria-hidden="true">
              {/* Work-life balance icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 4v4l3 3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="csr__body">
              <h3 className="csr__heading">Flexible Work Culture</h3>
              <p className="csr__text">
                We embrace hybrid models and flexible hours that adapt to life's rhythms. 
                Remote collaboration tools and outcome-based evaluation ensure productivity 
                while respecting personal time and family commitments.
              </p>
            </div>
          </article>

          <hr className="csr__divider" />

          {/* Item 2 */}
          <article className="csr__item" role="listitem">
            <div className="csr__icon" aria-hidden="true">
              {/* Mental wellness icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M14 9h-4v6h4V9z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12h8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="csr__body">
              <h3 className="csr__heading">Mental Wellness Support</h3>
              <p className="csr__text">
                Comprehensive mental health resources, mindfulness programs, and 
                confidential counseling services help maintain emotional balance. 
                We normalize conversations about mental health and provide tools 
                for stress management and resilience building.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}