import React from "react";
import "./Primedheader.css";

/**
 * Primedheader – hero banner
 * - Full-bleed background image (landscaping vibe)
 * - Large headline (site heading)
 * - Subtitle line beneath
 *
 * Props (optional):
 * - image: string (background image URL)
 * - title: string (heading)
 * - subtitle: string
 */
export default function Primedheader({
  image = "https://images.pexels.com/photos/9092820/pexels-photo-9092820.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // lawn/landscape
  title = "Maple Valley Landscaping Experts",
  subtitle = "Premium Landscaping Services in Maple Valley, WA",
}) {
  return (
    <header
      className="Primedheader"
      role="banner"
      aria-label={`${title} hero header`}
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* dark overlay for contrast */}
      <div className="Primedheader__overlay" aria-hidden="true" />

      <div className="Primedheader__inner">
        <h1 className="Primedheader__title">{title}</h1>

        <div className="Primedheader__meta" aria-label="Subtitle">
          <div className="Primedheader__metaValue">{subtitle}</div>
        </div>
      </div>
    </header>
  );
}
