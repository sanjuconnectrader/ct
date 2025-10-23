import React from "react";
import "./DBM.css";

const ITEMS = [
  {
    title: "Envision",
    copy: "We transform visionary ideas into strategic blueprints, mapping the future of your digital presence with clarity and purpose.",
    href: "#",
    gradient: "from-purple-500 to-pink-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5ZM4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4ZM14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V5Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M14 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4Z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    )
  },
  {
    title: "Craft",
    copy: "Precision engineering meets creative excellence as we build robust, scalable solutions that bring your vision to life seamlessly.",
    href: "#",
    gradient: "from-blue-500 to-cyan-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 10V3L4 14h7v7l9-11h-7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    title: "Amplify",
    copy: "We elevate your digital presence to new heights, ensuring your message resonates powerfully across all channels and audiences.",
    href: "#",
    gradient: "from-orange-500 to-red-500",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
];

export default function DBM() {
  return (
    <section className="dbm" aria-labelledby="dbm-title">
      <div className="dbm__background">
        <div className="dbm__gradient dbm__gradient--1"></div>
        <div className="dbm__gradient dbm__gradient--2"></div>
        <div className="dbm__gradient dbm__gradient--3"></div>
        <div className="dbm__noise"></div>
      </div>

      <h2 id="dbm-title" className="sr-only">Envision, Craft, Amplify</h2>

      <div className="dbm__container">
        <div className="dbm__grid">
          {ITEMS.map((it, i) => (
            <article 
              key={it.title} 
              className="dbm__card" 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
            >
              <div className="dbm__card-content">
                <div className="dbm__card-glow" data-gradient={it.gradient}></div>
                
                <header className="dbm__header">
                  <div className="dbm__icon-wrapper">
                    <div className="dbm__icon" data-gradient={it.gradient}>
                      {it.icon}
                    </div>
                    <div className="dbm__icon-ring"></div>
                  </div>
                  
                  <div className="dbm__heading-wrapper">
                    <span className="dbm__step">Step {i + 1}</span>
                    <h3 className="dbm__heading">
                      <span className="dbm__heading-text">{it.title}</span>
                      <span className="dbm__heading-underline" data-gradient={it.gradient}></span>
                    </h3>
                  </div>
                </header>

                <p className="dbm__copy" data-gradient={it.gradient}>{it.copy}</p>

                <div className="dbm__cta-wrapper">
                  <a className="dbm__cta" href={it.href} data-gradient={it.gradient}>
                    <span className="dbm__cta-text">Learn More</span>
                    <div className="dbm__cta-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="dbm__cta-glow"></div>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}