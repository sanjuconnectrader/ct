import React from "react";
import "./Moyerconclusion.css";

/**
 * Moyerconclusion
 * - Large title + readable paragraph
 * - Montserrat Light
 * - Matches the clean, wide-margin layout from the reference
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
    <section className="mcon" aria-labelledby="mcon-title">
      <div className="mcon__wrap">
        <h2 id="mcon-title" className="mcon__title">{title}</h2>
        <p className="mcon__lead">
          {body}
        </p>
      </div>
    </section>
  );
}