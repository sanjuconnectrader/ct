import React from "react";
import "./HeroHeadline.css";

export default function HeroHeadline() {
  return (
    <section className="hero" role="banner" aria-label="Design Experiences">
      {/* Decorative background only */}
      <div aria-hidden="true" className="hero__bg">
        <div className="hero__vignette" />
        <div className="hero__glow" />
        <div className="hero__grid" />
      </div>

      {/* Content */}
      <div className="hero__inner">
        <h1 className="hero__title">Make Experiences That Move People</h1>

        <a className="hero__cta" href="/contact" aria-label="Talk to an expert">
          <span>Connect With Us</span>
          <svg
            className="hero__ctaArrow"
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M5 10H15M15 10L11.5 6.5M15 10L11.5 13.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}