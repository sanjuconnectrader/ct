// Mobileheader.jsx
import React from "react";
import "./Mobileheader.css";

export default function Mobileheader({
  title = "Mobile App Development",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header
      className="Mobileheader"
      style={{ ["--bg-src"]: `url("${bgSrc}")` }}
    >
      <div className="Mobileheader__shade" />
      <div className="Mobileheader__container">
        <h1 className="Mobileheader__title">{title}</h1>
      </div>
    </header>
  );
}
