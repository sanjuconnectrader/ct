// Philosophy.jsx
import React from "react";
import "./Philosophy.css";

const CARDS = [
  {
    title: "Web App Development",
    desc:
      "Design systems, type-safe APIs, and observability-first builds. From MVPs to scale, we keep performance, security, and developer velocity in balance.",
    bg:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
  {
    title: "Mobile App Development",
    desc:
      "React Native/Flutter with native-feel UX: offline-first flows, push notifications, and smooth navigation tuned for iOS and Android.",
    bg:
      "https://images.pexels.com/photos/54284/pexels-photo-54284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
  {
    title: "CRM Development",
    desc:
      "Your pipeline, your rules. Roles, automation, audit trails, and dashboards so teams adopt the tool instead of avoiding it.",
    bg:
      "https://images.pexels.com/photos/139387/pexels-photo-139387.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
  {
    title: "Ecommerce Development",
    desc:
      "High-conversion storefronts with secure checkout, promos, inventory sync, and integrations that grow with your business.",
    bg:
      "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1600",
  },
];

export default function Philosophy() {
  return (
    <section className="philo" aria-labelledby="philo-title">
      <div className="philo__container">
        <div className="philo__inner">
          <div className="philo__header">
            <h2 id="philo-title" className="philo__title">
            Culture of Advancement
            </h2>

            <p className="philo__lead">
            At the crossroads of business problems and insightful thinking lies innovation. We guide clients through a comprehensive process to achieve purposeful solutions.
            </p>

            {/* CTA directly below the lead */}
           
          </div>

          <div className="philo__grid" role="list">
            {CARDS.map(({ title, desc, bg }) => (
              <article
                key={title}
                className="philoCard"
                role="listitem"
                style={{ ["--bg"]: `url("${bg}")` }}
                aria-label={title}
              >
                <div className="philoCard__bg"></div>
                <div className="philoCard__overlay"></div>
                <div className="philoCard__content">
                  <h3 className="philoCard__title">{title}</h3>
                  <p className="philoCard__desc">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
