import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const ALWAYS_SOLID = ["/contact", "/about", "/works", "/works/Moyer-production"];
const DARK_BACKGROUND_PAGES = ["/service"]; // keep only real paths
const SCROLL_OFFSET = 10;

export default function Navbar() {
  const { pathname } = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(ALWAYS_SOLID.includes(pathname));
  const [isDarkBackground, setIsDarkBackground] = useState(DARK_BACKGROUND_PAGES.includes(pathname));
  const [isHomeFirstSections, setIsHomeFirstSections] = useState(false);

  const mobileMenuRef = useRef(null);
  const megaRef = useRef(null);
  const servicesRef = useRef(null);
  const hoverTimer = useRef(null);
  const blurTimer = useRef(null);

  // close menus on route change (prevents sticky states)
  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaOpen(false);
  }, [pathname]);

  /* route → dark page flag */
  useEffect(() => {
    setIsDarkBackground(DARK_BACKGROUND_PAGES.includes(pathname));
  }, [pathname]);

  /* home first sections (keeps navbar transparent) */
  useEffect(() => {
    const check = () => {
      if (pathname !== "/") return setIsHomeFirstSections(false);

      const first = document.querySelectorAll(".home-first-section");
      let h = 0;
      first.forEach((s) => (h += s.offsetHeight));
      const hs = document.querySelector(".hero-scroll-section, [class*='HeroScroll']");
      if (hs) h += hs.offsetHeight;

      if (!h) {
        const kids = document.querySelectorAll("main > *");
        for (let i = 0; i < Math.min(3, kids.length); i++) h += kids[i].offsetHeight;
      }
      setIsHomeFirstSections(window.scrollY < h - 100);
    };

    if (pathname === "/") {
      check();
      window.addEventListener("scroll", check, { passive: true });
      const t1 = setTimeout(check, 100);
      const t2 = setTimeout(check, 500);
      const t3 = setTimeout(check, 1000);
      return () => {
        window.removeEventListener("scroll", check);
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
      };
    } else setIsHomeFirstSections(false);
  }, [pathname]);

  /* transparent ↔ solid */
  useEffect(() => {
    const onScroll = () => {
      if (ALWAYS_SOLID.includes(pathname)) setScrolled(true);
      else if (isDarkBackground) setScrolled(false);
      else if (pathname === "/" && isHomeFirstSections) setScrolled(false);
      else setScrolled(window.scrollY > SCROLL_OFFSET);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isDarkBackground, isHomeFirstSections]);

  /* outside click */
  useEffect(() => {
    const handle = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.classList.contains("mobile-menu-button")
      ) setMobileMenuOpen(false);

      if (
        megaRef.current &&
        !megaRef.current.contains(e.target) &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target)
      ) setMegaOpen(false);
    };
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, []);

  /* ESC to close mega */
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMegaOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const clearTimers = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    if (blurTimer.current) clearTimeout(blurTimer.current);
  };
  const openMega = () => { clearTimers(); setMegaOpen(true); };
  const closeMegaDelayed = () => {
    clearTimers();
    hoverTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };
  const onFocusIn = () => { clearTimers(); setMegaOpen(true); };
  const onFocusOut = () => {
    clearTimers();
    blurTimer.current = setTimeout(() => {
      const a = document.activeElement;
      if (!servicesRef.current?.contains(a) && !megaRef.current?.contains(a)) setMegaOpen(false);
    }, 80);
  };

  const toggleMobileMenu = () => setMobileMenuOpen((v) => !v);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const navbarClasses = [
    "navbar",
    scrolled ? "scrolled" : "",
    megaOpen ? "dropdown-open" : "",
    isDarkBackground ? "dark-background" : "",
    isHomeFirstSections ? "home-first-sections" : "",
  ].filter(Boolean).join(" ");

  return (
    <nav className={navbarClasses} role="navigation" aria-label="Main">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/" aria-label="Go to homepage">
            <img src="./logo_black.png" alt="Company Logo" className="logo-image" width="180" height="45" />
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="navbar-menu desktop" role="menubar" aria-label="Primary">
          <li role="none" className="nav-item">
            <Link to="/" className="nav-link" role="menuitem">Home</Link>
          </li>

          {/* Services (mega trigger) */}
          <li
            role="none"
            className="nav-item nav-item-has-mega"
            ref={servicesRef}
            onMouseEnter={openMega}
            onMouseLeave={closeMegaDelayed}
            onFocusCapture={onFocusIn}
            onBlurCapture={onFocusOut}
          >
            <Link
              to="/service"
              className="nav-link"
              role="menuitem"
              aria-haspopup="true"
              aria-expanded={megaOpen}
              onClick={() => setMegaOpen(false)}
            >
              Service
              <svg className="chev" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* Mega panel */}
            <div
              className={`mega ${megaOpen ? "open" : ""}`}
              ref={megaRef}
              role="group"
              aria-label="Service categories"
              onMouseEnter={openMega}
              onMouseLeave={closeMegaDelayed}
            >
              <div className="mega-inner">
                {/* Left headline block */}
                <div className="mega-hero">
                  <p className="mega-eyebrow">Services</p>
                  <h2 className="mega-title">
                    Crafting Bold <br />Ideas to<br />Strengthen Your<br />Brand
                  </h2>
                  <Link to="/service" className="mega-cta" onClick={() => setMegaOpen(false)}>
                    View Our Works <span aria-hidden>→</span>
                  </Link>
                </div>

                {/* Right: TWO COLUMNS (Design + Development) */}
                <nav className="mega-cols two" aria-label="Service lists">
                  {/* Design */}
                  <section className="mega-col" aria-labelledby="design-head">
                    <Link id="design-head" to="/service/design" className="mega-col-head" onClick={() => setMegaOpen(false)}>
                      Design <span aria-hidden>→</span>
                    </Link>
                    <Link to="/service/ui-ux" className="mega-a" onClick={() => setMegaOpen(false)}>UI/UX Design</Link>
                    <Link to="/service/website-design" className="mega-a" onClick={() => setMegaOpen(false)}>Website Design</Link>
                    <Link to="/service/mobile-experience" className="mega-a" onClick={() => setMegaOpen(false)}>Mobile App Design</Link>
                    <Link to="/service/commerce-experience" className="mega-a" onClick={() => setMegaOpen(false)}>Wire Framing & Prototyping</Link>
                  </section>

                  {/* Development */}
                  <section className="mega-col" aria-labelledby="dm-head">
                    <Link id="dm-head" to="/service/digital-marketing" className="mega-col-head" onClick={() => setMegaOpen(false)}>
                      Development <span aria-hidden>→</span>
                    </Link>
                    <Link to="/service/seo" className="mega-a" onClick={() => setMegaOpen(false)}>Web Development</Link>
                    <Link to="/service/social" className="mega-a" onClick={() => setMegaOpen(false)}>Mobile App Development</Link>
                    <Link to="/service/performance" className="mega-a" onClick={() => setMegaOpen(false)}>Ecommerce Development</Link>
                    <Link to="/service/content" className="mega-a" onClick={() => setMegaOpen(false)}>CMS Development</Link>
                    <Link to="/service/automation" className="mega-a" onClick={() => setMegaOpen(false)}>SEO</Link>
                    <Link to="/service/analytics" className="mega-a" onClick={() => setMegaOpen(false)}>Analytics</Link>
                  </section>
                </nav>
              </div>
            </div>
          </li>

          <li role="none" className="nav-item">
            <Link to="/works" className="nav-link" role="menuitem">Works</Link>
          </li>
          <li role="none" className="nav-item">
            <Link to="/about" className="nav-link" role="menuitem">About</Link>
          </li>
          <li role="none" className="nav-item">
            <Link to="/contact" className="nav-link" role="menuitem">Contact</Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`mobile-menu-button ${mobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="menu-line top-line"></span>
          <span className="menu-line middle-line"></span>
          <span className="menu-line bottom-line"></span>
        </button>

        {/* Mobile drawer */}
        <ul
          className={`navbar-menu mobile ${mobileMenuOpen ? "active" : ""}`}
          ref={mobileMenuRef}
          role="menubar"
          aria-label="Mobile navigation"
        >
          <li><Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link></li>

          <li className="mobile-accordion">
            <button className="accordion-btn" aria-expanded={megaOpen}
              onClick={() => setMegaOpen((v) => !v)}>
              Service
              <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
                <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="1.6" fill="none"
                  strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className={`accordion-panel ${megaOpen ? "open" : ""}`}>
              <Link to="/service" className="mobile-all" onClick={closeMobileMenu}>
                Go to overview →
              </Link>

              <div className="accordion-group">
                <p className="group-head">Design</p>
                <Link to="/service/ui-ux" onClick={closeMobileMenu}>UI/UX Design</Link>
                <Link to="/service/website-design" onClick={closeMobileMenu}>Website Design</Link>
                <Link to="/service/mobile-experience" onClick={closeMobileMenu}>Mobile Design</Link>
                <Link to="/service/commerce-experience" onClick={closeMobileMenu}>Wire Framing</Link>
              </div>

              <div className="accordion-group">
                <p className="group-head">Development</p>
                <Link to="/service/seo" onClick={closeMobileMenu}>Web Development</Link>
                <Link to="/service/social" onClick={closeMobileMenu}>Mobile App Development</Link>
                <Link to="/service/performance" onClick={closeMobileMenu}>CRM Development</Link>
                <Link to="/service/content" onClick={closeMobileMenu}>Ecommerce Website</Link>
                <Link to="/service/automation" onClick={closeMobileMenu}>SEO</Link>
                <Link to="/service/analytics" onClick={closeMobileMenu}>Analytics</Link>
              </div>
            </div>
          </li>

          <li><Link to="/works" className="nav-link" onClick={closeMobileMenu}>Works</Link></li>
          <li><Link to="/about" className="nav-link" onClick={closeMobileMenu}>About</Link></li>
          <li><Link to="/contact" className="nav-link" onClick={closeMobileMenu}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
