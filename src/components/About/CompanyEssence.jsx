import React from "react";
import "./CompanyEssence.css";

export default function CompanyEssence() {
  return (
    <section className="mv" aria-label="Purpose and Outlook">
      <div className="mv__wrap">
        {/* Row 1 — Image (left) + Text (right) */}
        <div className="mv__row">
          <figure className="mv__media">
            <img
              src="./team.png"
              alt="Hand launching a red paper plane"
              loading="lazy"
            />
          </figure>

          <div className="mv__text">
            <h2 className="mv__title">Purpose</h2>
            <p className="mv__para">
              We focus on every layer of device and data protection—designed to
              be straightforward to deploy and effortless to maintain. By
              aligning people, devices, and corporate information under a single
              console, teams gain the visibility and control they need. Our
              platform is built for tomorrow—moving toward automation and
              hands-free operations—so organizations stay confident and secure.
            </p>
          </div>
        </div>

        {/* Row 2 — Text (left) + Image (right) */}
        <div className="mv__row mv__row--inverse">
          <div className="mv__text">
            <h2 className="mv__title">Outlook</h2>
            <p className="mv__para">
              Technology changes quickly; productivity demands change faster.
              Companies need tools that adapt without increasing complexity. As
              a unified management solution, we understand enterprise risks and
              requirements, delivering coverage across every security base. We
              close the gap between endpoints and IT—making governance and
              day-to-day management simpler, safer, and reliably scalable.
            </p>
          </div>

          <figure className="mv__media">
            <img
              src="./team1.webp"
              alt="Growth blocks with an upward arrow"
              loading="lazy"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
