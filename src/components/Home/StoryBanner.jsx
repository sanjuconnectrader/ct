import React, { useEffect, useRef } from "react";
import "./StoryBanner.css";

export default function StoryBanner({
  title = "Our Journey",
  body = `From humble beginnings to digital innovation, our path has been shaped by curiosity and determination. We started with a simple vision: to create meaningful digital experiences that solve real problems and make a difference in people's lives.`,
  body2 = `Through continuous learning and adaptation, we've evolved our craft, embracing new technologies while staying true to our core values of quality, integrity, and user-centered design. Every project represents another step forward in our ongoing mission to push boundaries and deliver excellence.`,
  ctaLabel = "Learn more",
  ctaHref = "#",
  imageSrc = "./circle.jpg",
  imageAlt = "Abstract circular graphic representing growth and innovation",
}) {
  const titleRef = useRef(null);
  const body1Ref = useRef(null);
  const body2Ref = useRef(null);
  const ctaRef = useRef(null);
  const orbRef = useRef(null);

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
    if (body1Ref.current) observer.observe(body1Ref.current);
    if (body2Ref.current) observer.observe(body2Ref.current);
    if (ctaRef.current) observer.observe(ctaRef.current);
    if (orbRef.current) observer.observe(orbRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="story" aria-labelledby="story-title">
      <div className="story__container">
        {/* LEFT */}
        <div className="story__col story__col--left">
          <h2 id="story-title" className="story__title" ref={titleRef}>{title}</h2>
          <p className="story__body" ref={body1Ref}>{body}</p>
          <p className="story__body story__body--second" ref={body2Ref}>{body2}</p>

          <a className="story__cta" href={ctaHref} aria-label="Learn more about our journey" ref={ctaRef}>
            <span>{ctaLabel}</span>
            <svg className="story__ctaArrow" width="18" height="18" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 10H15M15 10L11.5 6.5M15 10L11.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* RIGHT */}
        <div className="story__col story__col--right">
          <div className="story__orbWrap">
            <img className="story__orb" src={imageSrc} alt={imageAlt} ref={orbRef} />
          </div>
        </div>
      </div>
    </section>
  );
}