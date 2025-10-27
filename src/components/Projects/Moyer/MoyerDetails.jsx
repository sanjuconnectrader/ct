import React from "react";
import "./MoyerDetails.css";

export default function MoyerDetails({
  services = [
    "Photography Portfolio Website",
    "Videography Reels & Showreels",
    "Drone/Aerial Media Support",
    "Custom Admin Panel (Media CMS)",
    "Lead & Booking Form (Formspree)",
    "SEO & Performance Optimization",
  ],
  title = "Moyer Production — Photography & Videography Studio Website",
  body = `Moyer Production is a Bonney Lake–based studio serving Pierce County and the greater Puget Sound area. We built a fast, media-first portfolio site that showcases photography sets, cinematic reels, and drone work, while converting visitors through a streamlined booking flow. 
The build includes a custom admin panel for uploading photos and videos, automatic thumbnailing, and categorized galleries. Forms are routed via Formspree to keep the stack lean while maintaining robust deliverability.`,
  specs = [
    { label: "Frontend", value: "React + CSS" },
    { label: "Backend", value: "Node.js + Express" },
    { label: "Database", value: "MySQL (Sequelize ORM)" },
  
    { label: "Location", value: "Bonney Lake, Washington, USA" },

  ],
}) {
  return (
    <section className="mdet" aria-labelledby="mdet-title">
      <div className="mdet__wrap">
        {/* LEFT - Services Section */}
        <aside className="mdet__left">
          <div className="mdet__leftContent">
            <h3 className="mdet__subtitle">Services Provided</h3>
            <div className="mdet__servicesWrapper">
              <ul className="mdet__chips" role="list">
                {services.map((s, i) => (
                  <li
                    key={i}
                    className="mdet__chip"
                    role="listitem"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="mdet__chipText">{s}</span>
                    <div className="mdet__chipHover"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* RIGHT - Content Section */}
        <div className="mdet__right">
          <div className="mdet__content">
            <h2 id="mdet-title" className="mdet__title">
              {title.split("\n").map((line, idx) => (
                <span
                  key={idx}
                  className="mdet__titleLine"
                  style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="mdet__body">{body}</p>

            <div className="mdet__specsContainer">
              <div className="mdet__specs" role="table" aria-label="Project details">
                {specs.map((row, i) => (
                  <div
                    className="mdet__row"
                    role="row"
                    key={i}
                    style={{ animationDelay: `${i * 0.15 + 0.6}s` }}
                  >
                    <div className="mdet__cell mdet__cell--label" role="cell">
                      {row.label}
                    </div>
                    <div className="mdet__cell mdet__cell--value" role="cell">
                      {row.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
