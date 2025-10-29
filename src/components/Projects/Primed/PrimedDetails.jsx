import React from "react";
import "./PrimedDetails.css";

export default function PrimedDetails({
  services = [
    "Landscape Design",
    "Lawn Care & Maintenance",
    "Custom Hardscaping",
    "Garden Design",
    "Irrigation Systems / Installation",
    "Seasonal Cleanups",
    "Commercial Landscape Maintenance",
    "HOA Landscape Maintenance",
    "Lawn Recovery Package",
  ],
  title = "Primed Landscaping — Maple Valley Landscaping Experts",
  body = `Primed Landscaping provides premium residential, commercial, and HOA landscaping services in Maple Valley, Washington and nearby areas. Our crews handle everything from weekly lawn care and seasonal cleanups to custom hardscaping, irrigation, and full garden design—so your outdoor space looks great and stays healthy year-round.`,
  specs = [
    { label: "Business", value: "Primed Landscaping" },
    { label: "Services", value: "Landscape design, lawn maintenance, hardscaping, garden care, irrigation install, seasonal cleanups" },
    { label: "Service Area", value: "Maple Valley, WA and surrounding Greater Seattle area" },
    { label: "Phone", value: "(206) 258-7535" },
    { label: "Email", value: "primedlandscaping@gmail.com" },
    { label: "Hours", value: "Mon–Fri · 8 am – 6 pm" },
    { label: "Website", value: "primedlandscaping.com" },
  ],
}) {
  return (
    <section className="PrimedDetails" aria-labelledby="PrimedDetails-title">
      <div className="PrimedDetails__wrap">
        {/* LEFT - Services */}
        <aside className="PrimedDetails__left">
          <div className="PrimedDetails__leftContent">
            <h3 className="PrimedDetails__subtitle">Services Provided</h3>
            <div className="PrimedDetails__servicesWrapper">
              <ul className="PrimedDetails__chips" role="list">
                {services.map((s, i) => (
                  <li
                    key={i}
                    className="PrimedDetails__chip"
                    role="listitem"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <span className="PrimedDetails__chipText">{s}</span>
                    <div className="PrimedDetails__chipHover"></div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        {/* RIGHT - Content */}
        <div className="PrimedDetails__right">
          <div className="PrimedDetails__content">
            <h2 id="PrimedDetails-title" className="PrimedDetails__title">
              {title.split("\n").map((line, idx) => (
                <span
                  key={idx}
                  className="PrimedDetails__titleLine"
                  style={{ animationDelay: `${idx * 0.2 + 0.3}s` }}
                >
                  {line}
                </span>
              ))}
            </h2>

            <p className="PrimedDetails__body">{body}</p>

            <div className="PrimedDetails__specsContainer">
              <div className="PrimedDetails__specs" role="table" aria-label="Company details">
                {specs.map((row, i) => (
                  <div
                    className="PrimedDetails__row"
                    role="row"
                    key={i}
                    style={{ animationDelay: `${i * 0.15 + 0.6}s` }}
                  >
                    <div className="PrimedDetails__cell PrimedDetails__cell--label" role="cell">
                      {row.label}
                    </div>
                    <div className="PrimedDetails__cell PrimedDetails__cell--value" role="cell">
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
