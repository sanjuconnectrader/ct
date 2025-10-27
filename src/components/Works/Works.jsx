import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Works.css";
import ConstructionDetails from "../Projects/Construction/ConstructionDetails.jsx";

const ITEMS = [
  {
    id: "c1",
    img: "/moyer-project.png", // put this in public/ for Vite, or import it
    tag: "Photography & Videography",
    title: "Moyer Production — Studio Portfolio Website",
    to: "/works/Moyer-production",      // <-- use `to` for internal routes
    isLinkTitle: false,
    alt: "Moyer Production studio website preview",
    external: false
  },
  {
    id: "c2",
    img: "/prime.png",
    tag: "Landscaping Services",
    title: "Primed Landscaping — Local Services Website",
    to: "#",                              // replace with a real internal route later
    isLinkTitle: false,
    alt: "Primed Landscaping services website preview",
    external: false
  },
  {
    id: "c3",
    img: "/green2.png",
    tag: "Cleaning Services",
    title: "GreenWorks Carpet Cleaning — Service Website Revamp",
    to: "#",
    isLinkTitle: false,
    alt: "GreenWorks Carpet Cleaning website preview",
    external: false
  },
  {
    id: "c4",
    img: "/construction.png",
    tag: "Construction",
    title: "mngllc construction company - Tacoma",
    to: null,                             // handled by side drawer button
    isLinkTitle: false,
    alt: "MNG LLC construction website preview",
    external: false
  },
];

export default function Works() {
  const [openConstruction, setOpenConstruction] = useState(false);

  return (
    <>
      <section className="works-section" aria-labelledby="works-title">
        <div className="works-wrap">
          <header className="works-header">
            <h2 id="works-title" className="works-title">Case Studies</h2>
          </header>

          <div className="works-grid" role="list">
            {ITEMS.map((it) => (
              <article key={it.id} className="works-card" role="listitem">
                {/* Construction card opens the side drawer */}
                {it.id === "c4" ? (
                  <button
                    type="button"
                    className="works-thumbLink as-button"
                    onClick={() => setOpenConstruction(true)}
                    aria-label={`${it.title} — open details`}
                  >
                    <div className="works-thumb">
                      <img src={it.img} alt={it.alt || ""} loading="lazy" />
                    </div>
                  </button>
                ) : it.external ? (
                  <a
                    href={it.to}
                    className="works-thumbLink"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={it.title}
                  >
                    <div className="works-thumb">
                      <img src={it.img} alt={it.alt || ""} loading="lazy" />
                    </div>
                  </a>
                ) : (
                  <Link to={it.to || "#"} className="works-thumbLink" aria-label={it.title}>
                    <div className="works-thumb">
                      <img src={it.img} alt={it.alt || ""} loading="lazy" />
                    </div>
                  </Link>
                )}

                <div className="works-meta">
                  <div className="works-tag">{it.tag}</div>
                  {it.isLinkTitle && it.to ? (
                    <Link className="works-titleLink" to={it.to}>{it.title}</Link>
                  ) : (
                    <h3 className="works-itemTitle">{it.title}</h3>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Side drawer */}
      <ConstructionDetails
        open={openConstruction}
        onClose={() => setOpenConstruction(false)}
      />
    </>
  );
}
