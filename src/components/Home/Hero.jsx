import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Hero.css";

const DEFAULT_SOURCES = ["/videoone.mp4", "/videotwo.mp4", "/videothree.mp4"];
const DEFAULT_THUMBS  = ["/thumb1.jpg", "/thumb2.jpg", "/thumb3.jpg"];
const CLAMP_MIN_MS = 6000;
const CLAMP_MAX_MS = 8000;
const FALLBACK_MS  = 7000;
const FADE_MS      = 220;

export default function Hero({
  sources = DEFAULT_SOURCES,
  thumbs  = DEFAULT_THUMBS,
  poster = "/hero.jpg",
  headline = "Welcome to ,\nconnectrader!",
  subtext  = "Delivering outstanding digital experiences driven by innovation and detail.",
 
  nextTitles = ["Story Reel", "Culture", "Craft"],
  titles,
}) {
  const [idx, setIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Refs
  const videoRefs = useRef(sources.map(() => React.createRef()));
  const rafRef = useRef(0);
  const timerRef = useRef(null);
  const containerRef = useRef(null);

  const activeRef = useMemo(() => videoRefs.current[idx], [idx]);
  const nextIdx = (i = idx) => (i + 1) % sources.length;
  const prevIdx = (i = idx) => (i - 1 + sources.length) % sources.length;

  // Initial preload
  useEffect(() => {
    const first = videoRefs.current[0]?.current;
    if (first) {
      first.preload = "auto";
      first.muted = true;
      first.playsInline = true;
      first.load();
      first.addEventListener("loadeddata", () => setIsLoaded(true));
    }
    videoRefs.current.slice(1).forEach((r) => {
      const v = r.current;
      if (!v) return;
      v.preload = "metadata";
      v.muted = true;
      v.playsInline = true;
    });
  }, []);

  const ensureLoaded = (i) => {
    const el = videoRefs.current[i]?.current;
    if (!el) return;
    if (!el.getAttribute("src")) {
      el.setAttribute("src", sources[i]);
      el.load();
    }
  };

  useEffect(() => {
    ensureLoaded(idx);
    ensureLoaded(nextIdx());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  const clampMs = (dur) => {
    if (!Number.isFinite(dur) || dur <= 0) return FALLBACK_MS;
    return Math.max(CLAMP_MIN_MS, Math.min(CLAMP_MAX_MS, dur * 1000));
  };

  const scheduleAdvance = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    const v = activeRef.current;
    const ms = v ? clampMs(v.duration) : FALLBACK_MS;
    timerRef.current = setTimeout(() => goTo(nextIdx()), ms);
  };

  const startRaf = () => {
    cancelAnimationFrame(rafRef.current);
    const tick = () => {
      const v = activeRef.current;
      if (v && Number.isFinite(v.duration) && v.duration > 0) {
        setProgress(Math.max(0, Math.min(1, v.currentTime / v.duration)));
        if (v.duration - v.currentTime < 0.2) { goTo(nextIdx()); return; }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  };

  const stopRaf = () => cancelAnimationFrame(rafRef.current);

  const playActive = async () => {
    const active = activeRef.current;
    if (!active) return;
    videoRefs.current.forEach((r, i) => { if (i !== idx) r.current?.pause(); });

    try {
      active.currentTime = Math.min(active.currentTime || 0, Math.max(0, (active.duration || 0) - 0.25));
    } catch {""}

    try { await active.play(); } catch (error) { console.warn("Video playback failed:", error); }
    startRaf();
    scheduleAdvance();
  };

  const goTo = (i) => {
    if (i === idx) return;
    const from = activeRef.current;
    const to = videoRefs.current[i]?.current;
    if (!to) return;

    ensureLoaded(i);
    try { to.currentTime = 0; } catch {""}

    // Cross-fade + slight scale
    to.style.opacity = "0";
    to.style.transform = "scale(1.05)";
    to.play().catch(() => {});

    requestAnimationFrame(() => {
      to.style.transition = `opacity ${FADE_MS}ms ease, transform ${FADE_MS * 1.5}ms ease`;
      to.style.opacity = "1";
      to.style.transform = "scale(1)";
      if (from) {
        from.style.transition = `opacity ${FADE_MS}ms ease, transform ${FADE_MS * 1.5}ms ease`;
        from.style.opacity = "0";
        from.style.transform = "scale(1.02)";
        from.pause();
      }
    });

    setIdx(i);
    setProgress(0);
  };

  const goNext = () => goTo(nextIdx());
  const goPrev = () => goTo(prevIdx());

  useEffect(() => { playActive(); /* eslint-disable-next-line */ }, [idx]);

  // Tab visibility pause/resume
  useEffect(() => {
    const onVis = () => {
      const v = activeRef.current;
      if (!v) return;
      if (document.hidden) { v.pause(); stopRaf(); if (timerRef.current) clearTimeout(timerRef.current); }
      else { playActive(); }
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Keyboard
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "ArrowRight") { e.preventDefault(); goNext(); }
      if (e.key === "ArrowLeft")  { e.preventDefault(); goPrev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  // Ended → next
  useEffect(() => {
    const v = activeRef.current;
    if (!v) return;
    const onEnd = () => goNext();
    v.addEventListener("ended", onEnd);
    return () => v.removeEventListener("ended", onEnd);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx]);

  useEffect(() => () => {
    stopRaf();
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  const lines = String(headline).split("\n");

  // Title strategy:
  const titlesArr = titles && Array.isArray(titles) ? titles : nextTitles;

  const nextTitle    = titlesArr[nextIdx() % titlesArr.length];

  return (
    <section
      ref={containerRef}
      className="wac-hero"
      role="region"
      aria-roledescription="carousel"
      aria-live="polite"
      data-nav-bg="dark"
    >
      {/* Loading overlay */}
      {!isLoaded && (
        <div className="wac-hero__loading">
          <div className="loading-spinner"></div>
        </div>
      )}

      {/* Video stack */}
      <div className="wac-hero__stage" aria-hidden="true">
        {sources.map((src, i) => (
          <video
            key={i}
            ref={videoRefs.current[i]}
            className={`wac-hero__video ${i === idx ? "is-active" : "is-inactive"}`}
            src={i === 0 ? src : undefined}
            poster={poster}
            muted
            loop
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            tabIndex={-1}
            style={{ opacity: i === 0 ? 1 : 0 }}
          />
        ))}
        <div className="wac-hero__shade" aria-hidden="true" />
        <div className="wac-hero__noise" aria-hidden="true" />
      </div>

      {/* Main content */}
      <div className="wac-hero__inner">
        <div className="wac-hero__copy">
          <h1
            className={`wac-hero__title ${isLoaded ? "is-visible" : ""}`}
            aria-label={headline.replace("\n", " ")}
          >
            {lines.map((l, i) => (
              <span key={i} className="wac-hero__line">
                {l}
                {i === lines.length - 1 && <span className="title__cursor">|</span>}
              </span>
            ))}
          </h1>

          {subtext && (
            <p className={`wac-hero__sub ${isLoaded ? "is-visible" : ""}`}>{subtext}</p>
          )}

          <div className={`wac-hero__ctaRow ${isLoaded ? "is-visible" : ""}`}>
          
            <div className="cta__secondary">
              <a href="#events" className="wac-hero__smalllink">
                <span className="link__text">Event Our Works</span>
                <span className="link__arrow">⟶</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="wac-hero__scroll">
          <div className="scroll__line"></div>
          <span className="scroll__text">Scroll</span>
        </div>
      </div>

      {/* Story Panel */}
      <aside className="storypanel" aria-label="Story reel">
        <div className="storypanel__row">
          <div className="storypanel__thumb">
            <img
              src={thumbs[nextIdx()] || thumbs[idx] || "/thumb-fallback.jpg"}
              alt={`Preview for ${nextTitle || "next story"}`}
              loading="eager"
            />
          </div>

          <div className="storypanel__text">
            <div className="storypanel__eyebrow">Next</div>
            <div className="storypanel__title">{nextTitle}</div>
          </div>
        </div>

        <div className="storypanel__segments" role="tablist" aria-label="Video selectors">
          {sources.map((_, i) => {
            const active = i === idx;
            const w = active ? `${Math.round(progress * 100)}%` : "0%";
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                aria-label={`Go to video ${i + 1}`}
                className={`seg ${active ? "is-active" : ""}`}
                onClick={() => goTo(i)}
              >
                <span className="seg__track" />
                <span className="seg__bar" style={{ width: w }} />
              </button>
            );
          })}
        </div>
      </aside>
    </section>
  );
}