import React, { useEffect, useRef, useState } from "react";
import "./TeamIntro.css";

/**
 * TeamIntro
 * - Right: portrait image with a circular, continuously rotating "CONNECTRADER"
 *   word around the corner (half in, half out). Any overlap is hidden by the image.
 * - Left: Title, role, and THREE paragraphs; the copy auto-fits to the image height.
 */
export default function TeamIntro({
  name = "Curtis Hackett",
  role = "CEO & Founder",
  image = "./curtis.jpeg",
  word = "connectrader",
}) {
  const imgWrapRef = useRef(null);
  const [panelH, setPanelH] = useState(520); // fallback

  useEffect(() => {
    const syncHeights = () => {
      if (imgWrapRef.current) {
        setPanelH(imgWrapRef.current.getBoundingClientRect().height);
      }
    };
    syncHeights();
    window.addEventListener("load", syncHeights);
    window.addEventListener("resize", syncHeights);
    return () => {
      window.removeEventListener("load", syncHeights);
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  // Build a long, evenly spaced string that fills the circle cleanly.
  const ringText = Array.from({ length: 30 })
    .map(() => word.toUpperCase() + " • ")
    .join("");

  // === Your 3 paragraphs (kept verbatim, lightly compact) ===
  const p1 =
    "Founded with a vision to deliver excellence, connectrader has become a trusted name in the industry, providing cutting-edge solutions and exceptional service to our clients. Our journey began with a simple yet powerful idea: to craft meaningful digital experiences that enrich lives and foster connections.";

  const p2 =
    "As experts in web-app development, mobile app development, and web application development, we deliver comprehensive services that help our clients thrive in the ever-evolving digital landscape. We architect and build responsive, high-performance websites and web applications, craft native and cross-platform mobile experiences, and design powerful and scalable back-end systems to power them all.";

  return (
    <section className="ti" aria-labelledby="ti-title">
      <div className="ti__wrap">
        {/* LEFT: Content (height follows image) */}
        <div className="ti__left" style={{ "--panel-h": `${panelH}px` }}>
          <h1 id="ti-title" className="ti__title">{name}</h1>
          <p className="ti__role">{role}</p>

          {/* Clamp container so copy never exceeds the image height */}
          <div className="ti__copy">
            <p>{p1}</p>
            <p>{p2}</p>
         
          </div>

          <a className="ti__cta" href="/careers" aria-label="Explore opportunities">
            Let's Connect
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <path
                d="M5 10H15M15 10L12 6M15 10L12 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* RIGHT: Image with circular rotating text */}
        <div className="ti__right">
          <div className="ti__imgWrap" ref={imgWrapRef}>
            {/* RING UNDER the image (so overlapped portion is hidden) */}
            <div className="ti__ring" aria-hidden="true">
              <svg className="ti__ringSvg" viewBox="0 0 320 320">
                <defs>
                  {/* Start at top and go clockwise; radius=130 */}
                  <path
                    id="tiCircle"
                    d="
                      M 160,160
                      m -130,0
                      a 130,130 0 1,0 260,0
                      a 130,130 0 1,0 -260,0
                    "
                  />
                </defs>
                <text className="ti__ringText">
                  <textPath
                    href="#tiCircle"
                    startOffset="0%"
                    lengthAdjust="spacingAndGlyphs"
                    textLength="815"
                  >
                    {ringText}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* IMAGE ABOVE ring */}
            <img className="ti__img" src={image} alt={`${name} portrait`} />
          </div>
        </div>
      </div>
    </section>
  );
}