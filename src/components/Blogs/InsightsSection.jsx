import React from "react";
import "./InsightsSection.css";

const POSTS = [
  {
    id: "p1",
    image: "./startup1.jpg",
    tag: "Blog",
    read: "9 mins read",
    date: "October 06, 2025",
    title: "Customer Obsession: The Key to Business Success",
    href: "#",
  },
  {
    id: "p2",
    image: "./startup2.jpg",
    tag: "Blog",
    read: "11 mins read",
    date: "Dec 14, 2015",
    title: "Ownership Over Titles: Driving Accountability and Excellence",
    href: "#",
  },
  {
    id: "p3",
    image: "./tacoma.jpg",
    tag: "Blog",
    read: "12 mins read",
    date: "Dec 08, 2022",
    title: "Inclusive by Design: Building Products for Everyone",
    href: "#",
  },
];

export default function InsightsSection() {
  return (
    <section className="ins" aria-labelledby="ins-title">
      <div className="ins__wrap">
        <h2 id="ins-title" className="ins__title">Latest Blog</h2>

        <div className="ins__grid">
          {POSTS.map((p) => (
            <article key={p.id} className="ins__card">
              <a href={p.href} className="ins__imageLink" aria-label={p.title}>
                <div className="ins__imageRatio">
                  <img className="ins__image" src={p.image} alt="" />
                  <div className="ins__imageOverlay"></div>
                </div>
              </a>

              <div className="ins__meta">
                <span className="ins__kicker">
                  {p.tag} <span className="ins__dot">•</span> {p.read}
                </span>
                <time className="ins__date">{p.date}</time>
              </div>

              <h3 className="ins__headline">
                <a href={p.href} className="ins__headlineLink">{p.title}</a>
              </h3>
            </article>
          ))}
        </div>

        <div className="ins__ctaRow">
          <a href="#/insights" className="ins__cta" aria-label="Explore all insights">
            <span>Explore all Blogs</span>
            <svg className="ins__ctaArrow" width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M5 10h10m0 0-3-3m3 3-3 3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}