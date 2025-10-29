import React from "react";
import "./Uiheader.css";

export default function Uiheader({
  title = "UI/UX Design",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header className="uihero" style={{ ["--bg-src"]: `url("${bgSrc}")` }}>
      <div className="uihero__shade" />
      <div className="uihero__container">
        <h1 className="uihero__title">{title}</h1>
      </div>
    </header>
  );
}
