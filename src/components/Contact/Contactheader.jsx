import React from "react";
import "./Contactheader.css";

/**
 * Contactheader
 * Props (optional):
 * - title: string (default: "Contact Us")
 * - image: string (Pexels/any URL)
 */
export default function Contactheader({
  title = "Contact Us",
  image = "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1",
}) {
  return (
    <header
      className="contactheader"
      role="banner"
      aria-label="Contact page header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="contactheader__overlay" aria-hidden="true" />
      <div className="contactheader__inner">
        <h1 className="contactheader__title">{title}</h1>
      </div>
    </header>
  );
}
