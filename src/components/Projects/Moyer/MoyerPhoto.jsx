import React from "react";
import "./MoyerPhoto.css";
import moyerone from '../../../assets/Moyerone.png'
import moyertwo from '../../../assets/Moyerone.png'

/**
 * MoyerPhoto
 * - Two large grey boxes (left/right)
 * - Centered white cards inside each, containing images
 * - Fully responsive (stacks on small screens)
 *
 * Props (optional):
 *  - leftImg, rightImg: image URLs
 *  - leftAlt, rightAlt: alt text
 */
export default function MoyerPhoto({
  leftImg = moyerone ,
  rightImg = moyertwo,

}) {
  return (
    <section className="mphoto" aria-label="Photo mockups">
      <div className="mphoto__container">
        <div className="mphoto__grid">
          {/* Left panel */}
          <div className="mphoto__panel mphoto__panel--left">
            <div className="mphoto__boxWrapper">
              <div className="mphoto__box" aria-hidden="true">
                <div className="mphoto__boxInner"></div>
              </div>
              <figure className="mphoto__card">
                <div className="mphoto__imageContainer">
                  <img 
                    className="mphoto__img" 
                    src={leftImg} 
               
                    loading="lazy"
                  />
                  <div className="mphoto__imageOverlay"></div>
                </div>
             
              </figure>
            </div>
          </div>

          {/* Right panel */}
          <div className="mphoto__panel mphoto__panel--right">
            <div className="mphoto__boxWrapper">
              <div className="mphoto__box" aria-hidden="true">
                <div className="mphoto__boxInner"></div>
              </div>
              <figure className="mphoto__card">
                <div className="mphoto__imageContainer">
                  <img 
                    className="mphoto__img" 
                    src={rightImg} 
               
                    loading="lazy"
                  />
                  <div className="mphoto__imageOverlay"></div>
                </div>
    
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}