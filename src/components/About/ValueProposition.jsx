import React from "react";
import "./ValueProposition.css";

/**
 * ValueProposition
 * - Left: image panel
 * - Right: large headline + 2-column list of value-prop problems (with dividers)
 */
export default function ValueProposition({
  image = "./value.webp",
}) {
  return (
    <section className="vp" aria-labelledby="vp-title">
      <div className="vp__wrap">
        {/* LEFT: Media */}
        <figure className="vp__media">
          <img src={image} alt="Tech team collaborating on digital solutions" />
        </figure>

        {/* RIGHT: Copy */}
        <div className="vp__content">
          <h1 id="vp-title" className="vp__title">
            Digital Transformation Demands
            <br />
            <span className="vp__titleDim">Customer-Centric Solutions</span>
          </h1>

          <div className="vp__grid" role="list">
            <article className="vp__item" role="listitem">
              <h3 className="vp__itemTitle">Digital Experience Gap</h3>
              <p className="vp__itemBody">
                Customers expect seamless digital interactions across all touchpoints. 
                Legacy systems create friction that drives users to more agile competitors.
              </p>
              <div className="vp__rule" aria-hidden="true" />
            </article>

            <article className="vp__item" role="listitem">
              <h3 className="vp__itemTitle">Data Integration Challenges</h3>
              <p className="vp__itemBody">
                Siloed customer data prevents personalized experiences. 
                Unified platforms are essential for delivering contextual, real-time solutions.
              </p>
              <div className="vp__rule" aria-hidden="true" />
            </article>

            <article className="vp__item" role="listitem">
              <h3 className="vp__itemTitle">Scalability Limitations</h3>
              <p className="vp__itemBody">
                Traditional infrastructure struggles with modern demand spikes. 
                Cloud-native architectures ensure reliability during critical growth phases.
              </p>
              <div className="vp__rule" aria-hidden="true" />
            </article>

            <article className="vp__item" role="listitem">
              <h3 className="vp__itemTitle">Security Vulnerabilities</h3>
              <p className="vp__itemBody">
                Increasing cyber threats require proactive protection. 
                Enterprise-grade security must be built into every layer of your technology stack.
              </p>
              <div className="vp__rule" aria-hidden="true" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}