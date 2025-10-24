import React, { useEffect, useRef } from "react";
import "./ValuesAlt.css";

/**
 * Two-column "Values" layout
 * - Left: jumbo title split onto multiple lines + short intro + mark
 * - Right: stacked value cards with left divider and index (01/02/03)
 *
 * Copy is intentionally different ("alternate contents") while
 * preserving alignment and hierarchy from the screenshots.
 */
export default function ValuesAlt() {
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const markRef = useRef(null);

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

    // Observe all animated elements
    if (titleRef.current) observer.observe(titleRef.current);
    if (leadRef.current) observer.observe(leadRef.current);
    if (markRef.current) observer.observe(markRef.current);
    
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const ITEMS = [
    {
      id: "01",
      title: "Envision",
      body:
        "We transform abstract ideas into concrete digital strategies. Through collaborative discovery sessions, we define clear objectives and craft visionary roadmaps that align with your business goals and user needs.",
    },
    {
      id: "02",
      title: "Craft",
      body:
        "Precision engineering meets elegant design. We build responsive, high-performance applications using modern technologies like Next.js, TypeScript, and Tailwind CSS, ensuring every pixel and interaction feels intentional.",
    },
    {
      id: "03",
      title: "Amplify",
      body:
        "From deployment to continuous improvement, we optimize for scale and impact. Our DevOps expertise ensures reliable, secure deployments while data-driven insights guide ongoing enhancements and feature development.",
    },
  ];

  return (
    <section className="v-section" aria-labelledby="v-title">
      <div className="v-wrap">
        {/* LEFT COLUMN */}
        <div className="v-left">
          <h2 
            id="v-title" 
            className="v-title" 
            aria-label="Our Digital Creation Process"
            ref={titleRef}
          >
            <span className="v-br">From Idea</span>
            <span className="v-br">To Impact</span>
          </h2>

          <p className="v-lead" ref={leadRef}>
            We follow a structured yet flexible approach to digital innovation—transforming 
            concepts into scalable solutions through collaborative design and engineering excellence.
          </p>

          {/* Minimal white "mark"—a simple square motif matching the ref */}
          <div className="v-mark" aria-hidden="true" ref={markRef}>
            <svg viewBox="0 0 120 120" width="120" height="120">
              <path
                d="M20 20h80v80H20z M36 36h48v48H36z"
                fill="#fff"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="v-right" role="list">
          {ITEMS.map((it, index) => (
            <article 
              key={it.id} 
              className="v-card" 
              role="listitem"
              ref={el => itemsRef.current[index] = el}
            >
              <div className="v-num">{it.id}</div>
              <h3 className="v-heading">{it.title}</h3>
              <p className="v-body">{it.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}