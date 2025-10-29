
// Wireframingheader.jsx
import React from "react";
import "./Wireframingheader.css";

export default function Wireframingheader({
  title = "Wire Framing",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header
      className="Wireframingheader"
      style={{ ["--bg-src"]: `url("${bgSrc}")` }}
    >
      <div className="Wireframingheader__shade" />
      <div className="Wireframingheader__container">
        <h1 className="Wireframingheader__title">{title}</h1>
      </div>
    </header>
  );
}
