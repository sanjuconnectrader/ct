import React, { useEffect, useRef } from "react";
import "./ConnectraderHero.css";

export default function ConnectraderHero({
  title = <>Digital Solutions<br/>for Modern Business</>,
  body = `We transform complex challenges into elegant digital experiences. Our team crafts responsive websites, scalable applications, and strategic platforms that drive growth and engagement. From concept to deployment, we deliver solutions that are both beautiful and functional. Built to scale with your goals, we ship quickly without compromising quality. Let's craft something your customers will love.`,
  image = "./ct-hero.webp",
}) {
  const titleRef = useRef(null);
  const leadRef = useRef(null);
  const ctaRef = useRef(null);
  const imageRef = useRef(null);
  const baseRef = useRef(null);
  const dotsRef = useRef(null);

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
    if (imageRef.current) observer.observe(imageRef.current);
    if (baseRef.current) observer.observe(baseRef.current);
    if (dotsRef.current) observer.observe(dotsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ch-section" aria-labelledby="ch-title">
      <div className="ch-wrap">
        {/* LEFT: media */}
        <div className="ch-media">
          <div className="ch-base" aria-hidden="true" ref={baseRef} />
          <div className="ch-imageWrap">
            <img
              className="ch-image"
              src={image}
              alt="Team collaborating on digital design and development"
              ref={imageRef}
            />
            <span className="ch-dots" aria-hidden="true" ref={dotsRef} />
          </div>
        </div>

        {/* RIGHT: copy */}
        <div className="ch-copy">
          <h1 id="ch-title" className="ch-title" ref={titleRef}>{title}</h1>
          <p className="ch-lead" ref={leadRef}>{body}</p>

          {/* CTA button */}
          <a href="/contact" className="ch-cta" aria-label="View all works" ref={ctaRef}>
            Get Started →
          </a>
        </div>
      </div>
    </section>
  );
}