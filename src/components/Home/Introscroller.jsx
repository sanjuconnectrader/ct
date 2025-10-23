import React, { useEffect, useRef, useState, useMemo } from "react";
import "./Introscroller.css";

export default function Introscroller({
  lines = [
    "We envision a future where",
    "design and technology shape your",
    "journey. And our purpose is",
    "amplify innovation!",
  ],
  dimColor = "rgba(255,255,255,0.35)",
  revealColor = "#ffffff",
  heightVh,
  perLineVh = 60,
  extraVh = 100,
}) {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  // total scroll height so the sticky block stays while lines reveal
  const wrapVh = useMemo(() => {
    const autoVh = extraVh + lines.length * perLineVh;
    return typeof heightVh === "number" ? heightVh : autoVh;
  }, [heightVh, lines.length, perLineVh, extraVh]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const rect = el.getBoundingClientRect();
        const total = el.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1));
        setProgress(scrolled / Math.max(total, 1));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  // map global progress to per-line local progress (0..1)
  const perLine = (i) => {
    const n = lines.length;
    const start = i / n;
    const end = (i + 1) / n;
    const t = (progress - start) / (end - start);
    return Math.max(0, Math.min(1, t));
  };

  return (
    <section
      ref={wrapRef}
      className="intro-wrap"
      style={{ "--wrap-h": `${wrapVh}vh` }}
    >
      {/* FIXED background layer (now truly fixed to the viewport) */}
      <div className="intro-bg-fixed" aria-hidden="true" />

      {/* Sticky content */}
      <div className="intro-sticky">
        <div className="intro-inner" role="heading" aria-level={1}>
          {lines.map((text, i) => {
            const p = perLine(i);
            const clipPct = 100 - p * 100;

            return (
              <div className="intro-line" key={i}>
                {/* Base (dim) text */}
                <span className="line-dim" style={{ color: dimColor }} aria-hidden="true">
                  {text}
                </span>

                {/* Reveal text with clip-path */}
                <span
                  className="line-reveal"
                  style={{
                    color: revealColor,
                    clipPath: `inset(0 ${clipPct}% 0 0)`,
                  }}
                >
                  {text}
                </span>

                {/* Sweep edge */}
                <span
                  className="line-reveal-edge"
                  style={{
                    left: `${p * 100}%`,
                    opacity: p > 0 && p < 1 ? 1 : 0,
                  }}
                  aria-hidden="true"
                />
              </div>
            );
          })}
        </div>

        {/* Progress indicator */}
     
      </div>
    </section>
  );
}
