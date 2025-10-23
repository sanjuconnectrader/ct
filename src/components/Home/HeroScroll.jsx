import React, { useEffect, useMemo, useRef, useState } from "react";
import "./HeroScroll.css";

/* helpers */
const clamp01 = (t) => Math.max(0, Math.min(1, t));
const ease = (t) => t * (2 - t);
const easeInOut = (t) =>
  t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
const map01 = (t, a, b) => clamp01((t - a) / (b - a));

/* FRAMES — content */
const FRAMES = [
  {
    id: "design",
    title: "Envision",
    copy: [
      "We transform visionary ideas into strategic blueprints, mapping the future of your digital presence with clarity and purpose.",

    ],
    // IMPORTANT: label has NO arrow now (we render the icon ourselves)
    cta: { label: "Learn More", href: "#" },
    gradient:
      "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.12), transparent)",
  },
  {
    id: "build",
    title: "Artisan",
    copy: [
      "Precision engineering meets creative excellence as we build robust, scalable solutions that bring your vision to life seamlessly.",
    ],
    cta: { label: "Learn More", href: "#" },
    gradient:
      "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.12), transparent)",
  },
  {
    id: "market",
    title: "Amplify",
    copy: [
      "We elevate your digital presence to new heights, ensuring your message resonates powerfully across all channels and audiences.",
    ],
    cta: { label: "Learn More", href: "#" },
    gradient:
      "radial-gradient(40% 40% at 50% 50%, rgba(255,255,255,0.12), transparent)",
  },
];

export default function HeroScroll({ heightVh = 300, frames = FRAMES }) {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  /* measure progress (desktop) */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = clamp01(
          Math.min(Math.max(-rect.top, 0), total) / Math.max(1, total)
        );
        setProgress(scrolled);
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  /* per-frame animation from global progress (desktop) */
  const frameStates = useMemo(() => {
    const n = frames.length;
    const slice = 1 / n;

    return frames.map((f, i) => {
      const start = i * slice;
      const end = (i + 1) * slice;
      const local = map01(progress, start, end);

      const fadeIn = ease(map01(local, 0.0, 0.25));
      const fadeOut = 1 - ease(map01(local, 0.75, 1.0));
      const vis = clamp01(Math.min(fadeIn, fadeOut) * 1.1);

      const scale = 0.96 + 0.04 * easeInOut(local); // slightly tighter
      const blur = 5 * (1 - vis);
      const translateY = (1 - vis) * 34;

      return {
        id: f.id,
        visibility: vis,
        textStyle: {
          opacity: vis,
          transform: `scale(${scale}) translateY(${translateY}px)`,
          filter: `blur(${blur}px)`,
        },
        gradientStyle: {
          opacity: vis * 0.15,
        },
      };
    });
  }, [frames, progress]);

  return (
    <section
      className="hsc-section"
      ref={sectionRef}
      aria-labelledby="hsc-heading"
      style={{ "--canvas-h": `${heightVh}vh` }}
    >
      <h2 id="hsc-heading" className="sr-only">
        Three-stage scroll hero (Design, Build, Market)
      </h2>

      {/* DESKTOP sticky stage */}
      <div className="hsc-sticky">
        <div className="hsc-bg" aria-hidden="true" />
        <div className="hsc-stage">
          {frames.map((f, i) => {
            const s = frameStates[i];
            return (
              <div
                key={f.id}
                role="group"
                aria-labelledby={`hsc-${f.id}-title`}
                className="hsc-frame"
                style={{ opacity: s.visibility }}
              >
                <div
                  className="hsc-gradient"
                  style={{ background: f.gradient, ...s.gradientStyle }}
                  aria-hidden="true"
                />
                <div className="hsc-copy" style={s.textStyle}>
                  <h3 id={`hsc-${f.id}-title`} className="hsc-title">
                    {f.title}
                  </h3>

                  {/* tightened spacing + safe second line */}
                  <p className="hsc-sub">
                    {f.copy[0]}
                    {f.copy[1] ? (
                      <>
                        <br />
                        {f.copy[1]}
                      </>
                    ) : null}
                    {f.tail ? (
                      <>
                        <br />
                        {f.tail}
                      </>
                    ) : null}
                  </p>

                  {f.cta && (
                    <a className="hsc-cta" href={f.cta.href}>
                      <span className="hsc-cta-text">{f.cta.label}</span>
                      {/* Single arrow icon only */}
                      <span className="hsc-cta-arrow" aria-hidden="true">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M5 10H15M15 10L12 6M15 10L12 14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="hsc-progress" aria-hidden="true">
          <div
            className="hsc-progress-bar"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </div>

      {/* MOBILE static stack */}
      <div className="hsc-mobile">
        {frames.map((f) => (
          <article
            key={`m-${f.id}`}
            className="hsc-mobile-block"
            aria-labelledby={`m-${f.id}-t`}
          >
            <h3 id={`m-${f.id}-t`} className="hsc-mobile-title">
              {f.title}
            </h3>
            <p className="hsc-mobile-sub">
              {f.copy[0]}
              {f.copy[1] ? (
                <>
                  <br />
                  {f.copy[1]}
                </>
              ) : null}
              {f.tail ? (
                <>
                  <br />
                  {f.tail}
                </>
              ) : null}
            </p>
            {/* keep single-arrow look by using only text here (no duplicate icon) */}
            <a className="hsc-mobile-cta" href={f.cta?.href || "#"}>
              {f.cta?.label || "Learn More"}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
