import React from "react";
import "./Webdevheader.css";

export default function Webdevheader({
  title = "Webdevelopment",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header
      className="Webdevheader"
      style={{ ["--bg-src"]: `url("${bgSrc}")` }}
    >
      <div className="Webdevheader__shade" />
      <div className="Webdevheader__container">
        <h1 className="Webdevheader__title">{title}</h1>
      </div>
    </header>
  );
}
