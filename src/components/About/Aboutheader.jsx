import React from "react";
import "./Aboutheader.css";

/**
 * Aboutheader
 * Props (optional):
 * - company: string (default: "Connectrader")
 * - tagline: string (default: "Modern solutions for unified device & fleet management")
 * - image: string (Pexels/any URL; NOT the same as Contactheader)
 */
export default function Aboutheader({
  company = "About",
  tagline = "Modern solutions for unified World management",
  image = "USA.jpeg", // USA office building (different from Contactheader)
}) {
  return (
    <header
      className="aboutheader"
      role="banner"
      aria-label="About page header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="aboutheader__overlay" aria-hidden="true" />
      <div className="aboutheader__inner">
        <h1 className="aboutheader__title">
          <span className="aboutheader__brand">{company}</span>
          <span className="aboutheader__divider" aria-hidden="true"> | </span>
          <span className="aboutheader__tag">{tagline}</span>
        </h1>
      </div>
    </header>
  );
}
