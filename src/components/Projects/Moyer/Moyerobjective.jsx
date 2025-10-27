import React from "react";
import "./MoyerObjective.css";

/**
 * Moyerobjective
 * - Title + intro paragraph
 * - 3-column objectives with blue outline icons
 * - Montserrat Light
 */
export default function Moyerobjective({
  title = "Objectives",
  intro = `For Moyer Production (photography & videography studio), the core goal was to
  deliver a media-first portfolio that the client can manage independently. We
  focused on building an admin panel to upload images and attach YouTube links
  for reels; those links should render as playable videos on the frontend
  galleries. Alongside this, we planned a clean, conversion-friendly UI with a
  clear content architecture, fast performance, and easy booking.`,
  items = [
    {
      icon: "pen",
      heading: "Admin Panel for Media + YouTube Embeds",
      body:
        "Create a simple CMS-like admin panel where the client can upload photos and add YouTube links for videos. Videos must render as embedded players on the frontend (with thumbnails, categories, and optional descriptions).",
    },
    {
      icon: "grid",
      heading: "Frontend Galleries & Content Architecture",
      body:
        "Design media-first galleries that gracefully handle mixed content (images + videos). Implement category filters (e.g., weddings, portraits, drone) and detail views. Ensure responsive layouts and smooth loading for high-res media.",
    },
    {
      icon: "chat",
      heading: "UI Design, Planning, and Conversion",
      body:
        "Define the information hierarchy, wireframe key pages, and craft a minimalist, premium look. Align CTAs (Contact/Book a Shoot), add a lightweight form (Formspree), and optimize UX for mobile users without sacrificing brand feel.",
    },
  ],
}) {
  return (
    <section className="mo" aria-labelledby="mo-title">
      <div className="mo__wrap">
        <div className="mo__header">
          <h2 id="mo-title" className="mo__title">{title}</h2>
          <p className="mo__lead">{intro}</p>
        </div>

        <div className="mo__grid" role="list">
          {items.map((it, idx) => (
            <article 
              className="mo__card" 
              role="listitem" 
              key={idx}
              style={{ animationDelay: `${idx * 0.15 + 0.4}s` }}
            >
              <div className="mo__cardInner">
                <div className="mo__iconWrapper">
                  <div className="mo__icon" aria-hidden="true">
                    {it.icon === "pen" && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M3 21l3.75-.8a2 2 0 0 0 1.02-.55L20 7.4a2.5 2.5 0 1 0-3.54-3.54L4.23 16.11a2 2 0 0 0-.55 1.02L3 21z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M14.5 6.5l3 3" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                    {it.icon === "grid" && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <rect x="3" y="3" width="8" height="8" rx="2" stroke="#2563eb" strokeWidth="2"/>
                        <rect x="13" y="3" width="8" height="8" rx="2" stroke="#2563eb" strokeWidth="2"/>
                        <rect x="3" y="13" width="8" height="8" rx="2" stroke="#2563eb" strokeWidth="2"/>
                        <rect x="13" y="13" width="8" height="8" rx="2" stroke="#2563eb" strokeWidth="2"/>
                      </svg>
                    )}
                    {it.icon === "chat" && (
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                        <path d="M20 15.5A6.5 6.5 0 0 1 13.5 22H6l-2.5 2.5V15.5A6.5 6.5 0 0 1 10 9h3.5A6.5 6.5 0 0 1 20 15.5z" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M8 14h8M8 17h5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    )}
                  </div>
                  <div className="mo__iconHover"></div>
                </div>

                <div className="mo__content">
                  <h3 className="mo__heading">{it.heading}</h3>
                  <p className="mo__body">{it.body}</p>
                </div>
                
                <div className="mo__cardDecoration"></div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}