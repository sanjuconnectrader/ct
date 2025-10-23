import React from "react";
import "./Homeabout.css";

export default function Homeabout() {
  return (
    <section className="about-block" aria-labelledby="about-title">
      <div className="about-wrap">
        {/* LEFT: Copy */}
        <div className="about-left">
          <h2 id="about-title" className="about-title">Our Story</h2>

          <p className="about-text">
            In a world brimming with possibilities, we sprouted, seizing our
            destiny to create an extraordinary narrative – a tale that
            encapsulates laughter, tears, challenges, and triumphs.
          </p>

          <a className="about-btn" href="/about" aria-label="Read more about us">
            <span>About us</span>
            <svg
              className="btn-arrow"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <path d="M5 10H15M15 10L12 6M15 10L12 14"
                stroke="currentColor" strokeWidth="1.5"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* RIGHT: Image + badge */}
        <div className="about-right">
          <figure className="about-figure">
            <img
              className="about-image"
              src="/images/ring.png"      /* <-- put your image here */
              alt="Iridescent glass ring sculpture"
              loading="lazy"
            />
            <figcaption className="about-badge" aria-label="600 plus international clients">
              <strong>600+</strong>
              <span>International<br />Clients</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}