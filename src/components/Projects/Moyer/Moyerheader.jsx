import React from "react";
import "./Moyerheader.css";

/**
 * Moyerheader – hero banner like the Caribou case-study header
 * - Full-bleed background image from Pexels (photography studio vibe)
 * - Large headline on the left
 * - “Industry / Photography & Videography” block beneath
 *
 * Props (optional):
 * - image: string (background image URL)
 * - title: string
 * - industry: string
 */
export default function Moyerheader({
  image = "https://images.pexels.com/photos/274973/pexels-photo-274973.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // studio/film set
  title = "Moyer Production",
  industry = "Photography & Videography",
}) {
  return (
    <header
      className="moyerhero"
      role="banner"
      aria-label={`${title} case header`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* dark overlay for contrast */}
      <div className="moyerhero__overlay" aria-hidden="true" />

      <div className="moyerhero__inner">
        <h1 className="moyerhero__title">
          {title}
        </h1>

        <div className="moyerhero__meta" aria-label="Industry">
     
          <div className="moyerhero__metaValue">{industry}</div>
        </div>
      </div>
    </header>
  );
}
