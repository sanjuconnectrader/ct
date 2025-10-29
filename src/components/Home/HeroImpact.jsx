import React from "react";
import "./HeroImpact.css";

export default function HeroImpact({
  // Tech-related background images
  bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop",
  variant = "primary", // "primary" | "secondary" | "tertiary"
  title = "Data-Driven Insights Transforming Business Decision Making",
  subtitle = "Utilize advanced analytics and real-time reporting to uncover opportunities, mitigate risks, and make informed strategic choices."
}) {
  
  // Alternate content variants
  const contentVariants = {
   primary: {
    title: "High-Value Results That Power Your Enterprise",
    subtitle: "In an always-on economy, speed is vital today. We combine talent and modern tooling to fast track the digital roadmap with precision and confidence. This ensures you stay ahead of competition while maximizing long-term business impact."
  },
  secondary: {
    title: "Transformative Technology Solutions For Modern Enterprises",
    subtitle: "Harness the power of AI, cloud computing, and data analytics to revolutionize your business operations and drive unprecedented growth."
  },
  tertiary: {
    title: "Innovation At Scale Accelerating Digital Transformation",
    subtitle: "Our cutting-edge platforms and expert teams deliver scalable solutions that adapt to your evolving business needs in real-time."
  },
  };

  const currentVariant = contentVariants[variant] || contentVariants.primary;

  return (
    <section
      className={`HeroImpact HeroImpact--${variant}`}
      style={{ ["--bg-img"]: `url("${bgImage}")` }}
      aria-labelledby="impact-title"
    >
      {/* Animated gradient overlay */}
      <div className="HeroImpact__gradient-overlay" />
      
      {/* Particle animation background */}
      <div className="HeroImpact__particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="HeroImpact__particle" />
        ))}
      </div>
      
      {/* Main content */}
      <div className="HeroImpact__container">
        <div className="HeroImpact__content">
          {/* Decorative tech elements */}
          <div className="HeroImpact__tech-decoration">
            <div className="HeroImpact__circuit-line"></div>
            <div className="HeroImpact__glow-orbs">
              <div className="HeroImpact__orb HeroImpact__orb--1"></div>
              <div className="HeroImpact__orb HeroImpact__orb--2"></div>
              <div className="HeroImpact__orb HeroImpact__orb--3"></div>
            </div>
          </div>
          
          <h1 id="impact-title" className="HeroImpact__title">
            {currentVariant.title}
          </h1>

          <p className="HeroImpact__sub">
            {currentVariant.subtitle}
          </p>
          
          {/* CTA Buttons */}
       
        </div>
      </div>
      
      {/* Scroll indicator */}
    
    </section>
  );
}