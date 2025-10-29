import React from "react";
import "./Primedconclusion.css";

/**
 * Primedconclusion
 * - High-end UI with elegant typography and spacing
 * - Fully responsive design
 * - Montserrat typography hierarchy
 * - Clean, modern layout with strategic color usage
 *
 * Defaults use details from primedlandscaping.com
 */
export default function Primedconclusion({
  title = "Conclusion",
  body = `With a brand-first, neighborhood-focused approach, we present Primed Landscaping as the Maple Valley Landscaping Experts. The site showcases core services—Lawn Care & Maintenance, Custom Hardscaping, Garden Design, Irrigation Installation, and Seasonal Cleanups—alongside dedicated pages for HOA and Commercial Maintenance and a Lawn Recovery Package. Clear calls to action highlight (206) 258-7535 and primedlandscaping@gmail.com with typical Mon–Fri 8 am–6 pm availability and responses within 24 hours, serving Maple Valley and the Greater Seattle area. The result is a fast, credible, and conversion-ready experience.`,
}) {
  return (
    <section className="Primedconclusion" aria-labelledby="pcon-title">
      <div className="Primedconclusion__container">
        <div className="Primedconclusion__content">
          <div className="Primedconclusion__header">
            <div className="Primedconclusion__accent-line"></div>
            <h2 id="pcon-title" className="Primedconclusion__title">
              {title}
            </h2>
          </div>

          <div className="Primedconclusion__body">
            <p className="Primedconclusion__text">{body}</p>
          </div>

          <div className="Primedconclusion__decoration">
            <div className="Primedconclusion__dot"></div>
            <div className="Primedconclusion__dot"></div>
            <div className="Primedconclusion__dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
