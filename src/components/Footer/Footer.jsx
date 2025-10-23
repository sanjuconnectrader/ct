import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="ft">
      {/* ======= CTA STRIP ======= */}
      <div className="ft__cta">
        <div className="ft__cta-container">
          <div className="ft__cta-content">
            <h2 className="ft__cta-title">
              Get started now!
           
            </h2>
            
            <div className="ft__cta-actions">
              <a 
                className="ft__cta-btn ft__cta-btn--primary" 
                href="/contact" 
                aria-label="Request a quote"
              >
                <span>Request a quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                  <path 
                    d="M5 12h12M13 6l6 6-6 6" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              
       
            </div>
          </div>
        </div>
      </div>

      {/* ======= MAIN GRID ======= */}
      <div className="ft__main">
        <div className="ft__container">
          <div className="ft__grid">
            {/* Column: Company */}
            <nav className="ft__col" aria-label="Company navigation">
              <h3 className="ft__heading">
                <span className="ft__heading-text">Company</span>
              </h3>
              <ul className="ft__links">
                <li><a href="/about" className="ft__link">About</a></li>
                <li><a href="/services" className="ft__link">Services</a></li>
                <li><a href="/industries" className="ft__link">Industries</a></li>
                <li><a href="/works" className="ft__link">Works</a></li>
                <li><a href="/careers" className="ft__link">Careers</a></li>
                <li><a href="/contact" className="ft__link">Contact</a></li>
              </ul>
            </nav>

            {/* Column: Services */}
            <nav className="ft__col" aria-label="Services navigation">
              <h3 className="ft__heading">
                <span className="ft__heading-text">Services</span>
              </h3>
              <ul className="ft__links">
                <li><a href="/services/branding" className="ft__link">Branding</a></li>
                <li><a href="/services/experience-design" className="ft__link">Experience Design</a></li>
                <li><a href="/services/technology" className="ft__link">Technology</a></li>
                <li><a href="/services/digital-marketing" className="ft__link">Digital Marketing</a></li>
                <li><a href="/services/strategy" className="ft__link">Strategy</a></li>
                <li><a href="/services/consulting" className="ft__link">Consulting</a></li>
              </ul>
            </nav>

            {/* Column: Resources */}
            <nav className="ft__col" aria-label="Resources navigation">
              <h3 className="ft__heading">
                <span className="ft__heading-text">Resources</span>
              </h3>
              <ul className="ft__links">
                <li><a href="/blog" className="ft__link">Blog</a></li>
                <li><a href="/case-studies" className="ft__link">Case Studies</a></li>
                <li><a href="/insights" className="ft__link">Insights</a></li>
                <li><a href="/news" className="ft__link">News</a></li>
                <li><a href="/events" className="ft__link">Events</a></li>
                <li><a href="/help" className="ft__link">Help Center</a></li>
              </ul>
            </nav>

            {/* Column: Connect */}
            <div className="ft__col ft__col--connect">
              <h3 className="ft__heading">
                <span className="ft__heading-text">Connect</span>
              </h3>
              
              <div className="ft__contact-grid">
                <div className="ft__contact-group">
                  <div className="ft__contact-item">
                    <span className="ft__contact-label">General Enquiry</span>
                    <a href="tel:+12065550111" className="ft__contact-value">+1 (206) 555-0111</a>
                  </div>
                  
                  <div className="ft__contact-item">
                    <span className="ft__contact-label">Sales Enquiry</span>
                    <a href="tel:+12065550123" className="ft__contact-value">+1 (206) 555-0123</a>
                  </div>
                  
                  <div className="ft__contact-item">
                    <span className="ft__contact-label">Email</span>
                    <a href="mailto:info@connectrader.com" className="ft__contact-value">info@connectrader.com</a>
                  </div>
                </div>
                
                <div className="ft__contact-group">
                 
                  <div className="ft__contact-item">
                    <span className="ft__contact-label">WhatsApp (Sales)</span>
                    <a 
                      href="https://wa.me/12065550123" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="ft__contact-value"
                    >
                      +1 (206) 555-0123
                    </a>
                  </div>
                  
                  <div className="ft__contact-item">
                    <span className="ft__contact-label">Office</span>
                    <span className="ft__contact-value">Tacoma, WA • USA</span>
                  </div>
                </div>
              </div>
              
              <div className="ft__newsletter">
                <h4 className="ft__newsletter-title">Stay Updated</h4>
                <div className="ft__newsletter-form">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="ft__newsletter-input"
                  />
                  <button className="ft__newsletter-btn" aria-label="Subscribe to newsletter">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path 
                        d="M5 12h12M13 6l6 6-6 6" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======= BOTTOM BAR ======= */}
      <div className="ft__bottom">
        <div className="ft__container">
          <div className="ft__bottom-content">
            <div className="ft__legal">
              <span className="ft__copyright">
                connectrader tacoma © 2025 All rights reserved
              </span>
              
              <div className="ft__legal-links">
                <a href="/privacy" className="ft__legal-link">Privacy Policy</a>
                <span className="ft__legal-separator">•</span>
                <a href="/terms" className="ft__legal-link">Terms & Conditions</a>
                <span className="ft__legal-separator">•</span>
                <a href="/cookies" className="ft__legal-link">Cookies</a>
              </div>
            </div>
            
            <div className="ft__social">
              <span className="ft__social-label">Follow us</span>
              
              <div className="ft__social-links">
                <a aria-label="LinkedIn" href="#" className="ft__social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.5h4.9V24H.5zM9 8.5h4.7v2.1h.1c.7-1.2 2.3-2.5 4.8-2.5 5.1 0 6 3.3 6 7.6V24H19.7v-6.8c0-1.6 0-3.7-2.3-3.7-2.3 0-2.7 1.8-2.7 3.6V24H9z"/>
                  </svg>
                </a>
                
                <a aria-label="YouTube" href="#" className="ft__social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19 3.5 12 3.5 12 3.5s-7 0-9.4.6A3 3 0 0 0 .5 6.2 31.8 31.8 0 0 0 0 12a31.8 31.8 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1C5 20.5 12 20.5 12 20.5s7 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 24 12a31.8 31.8 0 0 0-.5-5.8zM9.8 15.5V8.5l6.4 3.5-6.4 3.5z"/>
                  </svg>
                </a>
                
                <a aria-label="Instagram" href="#" className="ft__social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.5.6.3 1 .7 1.3 1.3.3.5.5 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.5 2.4-.3.6-.7 1-1.3 1.3-.5.3-1.2.5-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.5a2.9 2.9 0 0 1-1.3-1.3c-.3-.5-.5-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.5-2.4.3-.6.7-1 1.3-1.3.5-.3 1.2-.5 2.4-.5C8.4 2.2 8.8 2.2 12 2.2m0 2.2c-3.1 0-3.5 0-4.7.1-.9 0-1.4.2-1.7.3-.4.2-.6.3-.9.6-.3.3-.5.5-.6.9-.2.3-.3.8-.3 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c0 .9.2 1.4.3 1.7.2.4.3.6.6.9.3.3.5.5.9.6.3.2.8.3 1.7.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9 0 1.4-.2 1.7-.3.4-.2.6-.3.9-.6.3-.3.5-.5.6-.9.2-.3.3-.8.3-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-.9-.2-1.4-.3-1.7-.2-.4-.3-.6-.6-.9-.3-.3-.5-.5-.9-.6-.3-.2-.8-.3-1.7-.3-1.2-.1-1.6-.1-4.7-.1zm0 2.6a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm7.3-1.4a1.6 1.6 0 1 1 0 3.1 1.6 1.6 0 0 1 0-3.1z"/>
                  </svg>
                </a>
                
                <a aria-label="X" href="#" className="ft__social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="currentColor" d="M17.5 3H20l-6.4 7.3L21 21h-5l-4-4.8L7 21H4.5l6.8-7.7L3 3h5l3.7 4.4L17.5 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}