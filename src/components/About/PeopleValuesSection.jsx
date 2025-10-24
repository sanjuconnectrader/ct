import React, { useEffect, useRef } from "react";
import "./PeopleValuesSection.css";

export default function PeopleValuesSection() {
  const rightRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const panels = rightRef.current?.querySelectorAll(".pv-panel");
    if (!panels || !panels.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const panel = entry.target;
          const isVisible = entry.isIntersecting;

          if (isVisible) {
            panel.classList.add("is-visible");
            const index = Array.from(panels).indexOf(panel);
            panel.style.transitionDelay = `${index * 0.1}s`;
          } else {
            panel.classList.remove("is-visible");
            panel.style.transitionDelay = "0s";
          }
        });
      },
      {
        root: null,
        threshold: 0.4,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    panels.forEach((panel) => io.observe(panel));
    return () => io.disconnect();
  }, []);

  return (
    <section className="pv" aria-labelledby="pv-title">
      {/* Animated background gradient */}
      <div className="pv-background" aria-hidden="true">
        <div className="pv-glow pv-glow-1"></div>
        <div className="pv-glow pv-glow-2"></div>
        <div className="pv-glow pv-glow-3"></div>
      </div>

      <div className="pv-wrap">
        {/* LEFT: sticky column */}
        <div className="pv-left" ref={leftRef}>
          <div className="pv-left-content">
            <h2 id="pv-title" className="pv-title">
              <span className="pv-line pv-line-1">
                <span className="pv-word">Nurturing</span>
              </span>
              <span className="pv-line pv-line-2">
                <span className="pv-word">Our People</span>
              </span>
              <span className="pv-line pv-line-3">
                <span className="pv-word">and Growing</span>
              </span>
            </h2>

            <p className="pv-subtitle">
              Building a culture where everyone thrives, innovates, and grows together
            </p>

            <a className="pv-cta" href="/careers" aria-label="Explore career opportunities">
              <span className="pv-cta-text">Join our team</span>
              <div className="pv-cta-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12H19M19 12L15 8M19 12L15 16"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* RIGHT: scroll panels (page scroll) */}
        <div className="pv-right" ref={rightRef}>
          {/* Panel 1 */}
          <article className="pv-panel" aria-labelledby="panel-1-title">
            <div className="pv-panel-content">
              <div className="pv-panel-header">
                <div className="pv-ico" aria-hidden="true">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M50 60v10" />
                      <path d="M35 35h30M50 35v8" />
                      <path d="M30 43v4c0 4.4 3.6 8 8 8s8-3.6 8-8v-4H30z" />
                      <path d="M62 43v4c0 4.4 3.6 8 8 8s8-3.6 8-8v-4H62z" />
                      <circle cx="50" cy="25" r="4" />
                    </g>
                  </svg>
                </div>
                <div className="pv-panel-number">01</div>
              </div>

              <div className="pv-content">
                <h3 id="panel-1-title" className="pv-h3">Gender Equality</h3>
                <p className="pv-body">
                  We champion gender equality through inclusive policies, equal opportunities,
                  and a supportive environment where everyone can thrive regardless of gender identity.
                </p>
                <div className="pv-stats">
                  <div className="pv-stat">
                    <span className="pv-stat-number">50%</span>
                    <span className="pv-stat-label">Women in Leadership</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Panel 2 */}
          <article className="pv-panel" aria-labelledby="panel-2-title">
            <div className="pv-panel-content">
              <div className="pv-panel-header">
                <div className="pv-ico" aria-hidden="true">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <path
                      d="M50 75C30 60 25 52 25 42c0-8 6-14 14-14 6 0 11 3 14 8 3-5 8-8 14-8 8 0 14 6 14 14 0 10-5 18-25 33z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M40 45l5-2 2-5 3 2 5-2-2 5 5 5-5 2-2 5-3-2-5 2 2-5z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="pv-panel-number">02</div>
              </div>

              <div className="pv-content">
                <h3 id="panel-2-title" className="pv-h3">Mental Health &amp; Wellness</h3>
                <p className="pv-body">
                  We prioritize mental wellbeing with comprehensive support programs,
                  flexible work arrangements, and resources that empower our team to
                  maintain optimal health and productivity.
                </p>
                <div className="pv-stats">
                  <div className="pv-stat">
                    <span className="pv-stat-number">24/7</span>
                    <span className="pv-stat-label">Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Panel 3 */}
          <article className="pv-panel" aria-labelledby="panel-3-title">
            <div className="pv-panel-content">
              <div className="pv-panel-header">
                <div className="pv-ico" aria-hidden="true">
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <g fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <circle cx="65" cy="25" r="5" />
                      <path d="M50 35l12 8 16 2" />
                      <path d="M50 55h22" />
                      <path d="M65 40l-8 40" />
                      <path d="M57 70l-12 16" />
                      <circle cx="40" cy="65" r="8" />
                    </g>
                  </svg>
                </div>
                <div className="pv-panel-number">03</div>
              </div>

              <div className="pv-content">
                <h3 id="panel-3-title" className="pv-h3">Disability Inclusion</h3>
                <p className="pv-body">
                  We create accessible environments and provide accommodations
                  that enable employees with disabilities to excel, contribute,
                  and advance in their careers without barriers.
                </p>
                <div className="pv-stats">
                  <div className="pv-stat">
                    <span className="pv-stat-number">100%</span>
                    <span className="pv-stat-label">Accessibility</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}