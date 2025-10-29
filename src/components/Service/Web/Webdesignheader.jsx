import React from "react";
import "./Webdesignheader.css";

export default function Webdesignheader({
  title = "WebDesign",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header
      className="Webdesignheader"
      style={{ ["--bg-src"]: `url("${bgSrc}")` }}
    >
      <div className="Webdesignheader__shade" />
      <div className="Webdesignheader__container">
        <h1 className="Webdesignheader__title">{title}</h1>
      </div>
    </header>
  );
}
