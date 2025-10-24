import React, { useEffect, useRef } from "react";
import "./WhatYouWillAchieve.css";

export default function WhatYouWillAchieve() {
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    if (leadRef.current) observer.observe(leadRef.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="wya" aria-labelledby="wya-title">
      <div className="wya__wrap">
        {/* LEFT: Title + paragraph + CTA */}
        <div className="wya__intro">
          <div className="wya__header">
            <h2 id="wya-title" className="wya__title" ref={titleRef}>
             The Results You 
              <span className="wya__titleAccent">Can Expect</span>
            </h2>
            <div className="wya__titleLine"></div>
          </div>

          <p className="wya__lead" ref={leadRef}>
            We design and ship production-grade software—modern front-ends,
            resilient back-ends, and cloud-native systems. From UX and design
            systems to CI/CD, observability, and container orchestration, we
            turn product goals into scalable, measurable outcomes.
          </p>

          <a className="wya__cta" href="/contact" aria-label="Let's talk" ref={ctaRef}>
            <span>Let's talk</span>
            <div className="wya__ctaIcon">
              <svg
                width="18"
                height="18"
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 10H15M15 10L11.5 6.5M15 10L11.5 13.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </a>
        </div>

        {/* RIGHT: 2×2 grid with enhanced design */}
        <div className="wya__grid" role="list">
          {/* Item 1 */}
          <article className="wya__item" role="listitem" ref={el => itemsRef.current[0] = el}>
            <div className="wya__itemIcon">
              <div className="wya__iconCircle"></div>
            </div>
            <h3 className="wya__itemTitle">
              Faster Releases & Stickier Products
            </h3>
            <p className="wya__itemBody">
              Accelerate delivery with type-safe codebases, automated tests,
              and CI/CD pipelines. Close the loop with analytics and UX research
              to reduce churn and lift retention.
            </p>
          </article>

          {/* Item 2 */}
          <article className="wya__item" role="listitem" ref={el => itemsRef.current[1] = el}>
            <div className="wya__itemIcon">
              <div className="wya__iconCircle"></div>
            </div>
            <h3 className="wya__itemTitle">Higher LTV via Personalization</h3>
            <p className="wya__itemBody">
              Drive revenue per user with event tracking, feature flags, and
              experimentation frameworks (A/B, holdouts). Power tailored
              journeys through robust data pipelines.
            </p>
          </article>

          {/* Item 3 */}
          <article className="wya__item" role="listitem" ref={el => itemsRef.current[2] = el}>
            <div className="wya__itemIcon">
              <div className="wya__iconCircle"></div>
            </div>
            <h3 className="wya__itemTitle">Design-Driven Engineering</h3>
            <p className="wya__itemBody">
              Ship accessible, consistent UIs with a shared design system,
              component libraries, and tokenized theming—aligning product,
              design, and engineering from day one.
            </p>
          </article>

          {/* Item 4 */}
          <article className="wya__item" role="listitem" ref={el => itemsRef.current[3] = el}>
            <div className="wya__itemIcon">
              <div className="wya__iconCircle"></div>
            </div>
            <h3 className="wya__itemTitle">
              Cloud-Native & Data-Driven Advantage
            </h3>
            <p className="wya__itemBody">
              Containerize services with Docker, orchestrate at scale with
              Kubernetes, and adopt GitOps. Instrument everything—metrics,
              logs, and traces—to guide smarter decisions and outpace rivals.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}