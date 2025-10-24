import React from "react";
import "./Values.css";

const PHOTO = "./principle.webp";
const ITEMS = [
  {
    id: "honor",
    title: "Act with Honor",
    body:
      "We choose what's right over what's easy, holding ourselves accountable in every promise and outcome.",
  },
  {
    id: "open",
    title: "Work in the Open",
    body:
      "Clear context, candid updates, and visible decisions help everyone move faster and make smarter choices.",
  },
  {
    id: "together",
    title: "Win Together",
    body:
      "Collaboration fuels results—diverse viewpoints, active listening, and shared ownership deliver better work.",
  },
  {
    id: "customers",
    title: "Obsess over Customers",
    body:
      "We listen, anticipate needs, and refine continuously to craft reliable experiences people love to use.",
  },
];

const CheckIcon = () => (
  <svg
    className="v-icon"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm-1.1 13.4-3.6-3.6 1.4-1.4 2.2 2.2 4.8-4.8 1.4 1.4-6.2 6.2Z"
      fill="currentColor"
    />
  </svg>
);

export default function Values() {
  return (
    <section className="values" aria-labelledby="values-title">
      <div className="values__wrap">
        {/* LEFT: Image */}
        <figure className="values__media">
          <img src={PHOTO} alt="Colleagues collaborating in a modern office" />
        </figure>

        {/* RIGHT: Content */}
        <div className="values__content">
          <h2 id="values-title" className="values__title">
            Our Principles
          </h2>

          <ul className="values__list" role="list">
            {ITEMS.map((item) => (
              <li className="values__item" key={item.id}>
                <div className="values__itemIcon" aria-hidden="true">
                  <CheckIcon />
                </div>
                <div className="values__itemBody">
                  <h3 className="values__itemTitle">{item.title}</h3>
                  <p className="values__itemText">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}