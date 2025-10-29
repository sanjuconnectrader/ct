import React from "react";
import "./WebAppHero.css";

export default function WebAppHero({
  title = "Web App Development\nThat Drives Your Business",
  subtitle = "We build fast, secure, and scalable applications—pairing best-in-class engineering with modern cloud to accelerate your digital journey.",
  bgSrc = "https://images.pexels.com/photos/7130481/pexels-photo-7130481.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1920&h=1080"
}) {
  return (
    <section
      className="wah-hero"
      style={{ backgroundImage: `url("${bgSrc}")` }}
      aria-label="Web App Development hero"
    >
      <div className="wah-hero__overlay" />
      <div className="wah-hero__pattern" />
      <div className="wah-hero__inner">
        <h1 className="wah-hero__title">
          {title.split("\n").map((line, i) => (
            <span key={i} className="wah-hero__line">
              {line}
            </span>
          ))}
        </h1>
        <p className="wah-hero__sub">
          {subtitle}
        </p>
      </div>
    </section>
  );
}