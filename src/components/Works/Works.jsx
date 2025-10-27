import React, { useState } from "react";
import "./Works.css";
import ConstructionDetails from "../Projects/Construction/ConstructionDetails";

const ITEMS = [
  {
    id: "c1",
    img: "/moyer-project.png",
    tag: "Photography & Videography",
    title: "Moyer Production — Studio Portfolio Website",
    href: "/works/Moyer-production",
    isLinkTitle: false,
    alt: "Moyer Production studio website preview"
  },
  {
    id: "c2",
    img: "./prime.png",
    tag: "Landscaping Services",
    title: "Primed Landscaping — Local Services Website",
    href: "#",
    isLinkTitle: false,
    alt: "Primed Landscaping services website preview"
  },
  {
    id: "c3",
    img: "./green2.png",
    tag: "Cleaning Services",
    title: "GreenWorks Carpet Cleaning — Service Website Revamp",
    href: "#",
    isLinkTitle: false,
    alt: "GreenWorks Carpet Cleaning website preview"
  },
  {
    id: "c4",
    img: "./construction.png",
    tag: "Construction",
    title: "mngllc construction company - Tacoma",
    href: "#",
    isLinkTitle: false,
    alt: "MNG LLC construction website preview"
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
                {/* Only the Construction card opens the side popup */}
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
                ) : (
                  <a href={it.href} className="works-thumbLink" aria-label={it.title}>
                    <div className="works-thumb">
                      <img src={it.img} alt={it.alt || ""} loading="lazy" />
                    </div>
                  </a>
                )}

                <div className="works-meta">
                  <div className="works-tag">{it.tag}</div>
                  {it.isLinkTitle ? (
                    <a className="works-titleLink" href={it.href}>{it.title}</a>
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
