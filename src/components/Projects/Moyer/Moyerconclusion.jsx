import React from "react";
import "./Moyerconclusion.css";

/**
 * Moyerconclusion
 * - High-end UI with elegant typography and spacing
 * - Fully responsive design
 * - Montserrat typography hierarchy
 * - Clean, modern layout with strategic color usage
 */
export default function Moyerconclusion({
  title = "Conclusion",
  body = `With a deliberate, media-first approach, we delivered Moyer Production a
  fast and elegant portfolio experience. The custom admin panel lets the team
  upload photo sets and attach YouTube links that render as playable videos on
  the site, keeping content fresh without developer overhead. Combined with a
  streamlined booking flow and responsive UI, the new site strengthens brand
  presence, improves lead quality, and makes showcasing recent work effortless.`,
}) {
  return (
    <section className="moyer-conclusion" aria-labelledby="mcon-title">
      <div className="moyer-conclusion__container">
        <div className="moyer-conclusion__content">
          <div className="moyer-conclusion__header">
            <div className="moyer-conclusion__accent-line"></div>
            <h2 id="mcon-title" className="moyer-conclusion__title">
              {title}
            </h2>
          </div>
          <div className="moyer-conclusion__body">
            <p className="moyer-conclusion__text">
              {body}
            </p>
          </div>
          <div className="moyer-conclusion__decoration">
            <div className="moyer-conclusion__dot"></div>
            <div className="moyer-conclusion__dot"></div>
            <div className="moyer-conclusion__dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}