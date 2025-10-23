import React from "react";
import "./StoryBanner.css";

/**
 * Props
 * - title: string
 * - body: string
 * - body2: string
 * - ctaLabel: string
 * - ctaHref: string
 * - imageSrc: string
 * - imageAlt: string
 * - badges: [
 *     { id, lines: [strongText, subText], style: { top?, right?, bottom?, left? } }
 *   ]
 */
export default function StoryBanner({
  title = "Our Story",
  body = `Amid endless possibilities, we took root—shaping our own journey filled with joy, struggle, growth, and celebration.From the soil of potential, we rose—nurturing a path defined by passion, perseverance, and purpose.`,
  body2 = `Through relentless innovation and unwavering commitment, we've transformed obstacles into opportunities, crafting solutions that not only meet today's demands but also shape tomorrow's possibilities. Our journey continues as we push boundaries and redefine excellence in every endeavor.`,
  ctaLabel = "About us",
  ctaHref = "#",
  imageSrc = "./circle.jpg",
  imageAlt = "Iridescent ring graphic",
 
}) {
  return (
    <section className="story" aria-labelledby="story-title">
      <div className="story__container">
        {/* LEFT */}
        <div className="story__col story__col--left">
          <h2 id="story-title" className="story__title">{title}</h2>
          <p className="story__body">{body}</p>
          <p className="story__body story__body--second">{body2}</p>

          <a className="story__cta" href={ctaHref} aria-label="Learn more about us">
            <span>{ctaLabel}</span>
            <svg className="story__ctaArrow" width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 10H15M15 10L11.5 6.5M15 10L11.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* RIGHT */}
        <div className="story__col story__col--right">
          <div className="story__orbWrap">
            <img className="story__orb" src={imageSrc} alt={imageAlt} />
         
          </div>
        </div>
      </div>
    </section>
  );
}
