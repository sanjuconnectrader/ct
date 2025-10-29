import React from "react";
import "./Ecommerceheader.css";

export default function Ecommerceheader({
  title = "Ecommerceheader",
  bgSrc = "/uiux-hero.png", // put your image in /public
}) {
  return (
    <header
      className="Ecommerceheader"
      style={{ ["--bg-src"]: `url("${bgSrc}")` }}
    >
      <div className="Ecommerceheader__shade" />
      <div className="Ecommerceheader__container">
        <h1 className="Ecommerceheader__title">{title}</h1>
      </div>
    </header>
  );
}
