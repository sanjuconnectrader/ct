// Uiuxdetails.jsx
import React from "react";
import {
  FaPalette,
  FaBrush,
  FaMobileAlt,
  FaImages,
  FaLaptopCode,
  FaCloudUploadAlt
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Uiuxdetails.css";

const features = [
  {
    icon: <FaPalette className="Uiuxdetails__feature-icon" />,
    title: "Brand-First UI/UX Design",
    description:
      "We create custom visual systems including color palettes, typography, and layouts that represent your brand and carry through to every page and platform.",
  },
  {
    icon: <FaBrush className="Uiuxdetails__feature-icon" />,
    title: "High-Fidelity Prototyping",
    description:
      "Our team builds interactive prototypes so you can see and test your site during development. This helps refine the design and avoid costly changes later.",
  },
  {
    icon: <FaMobileAlt className="Uiuxdetails__feature-icon" />,
    title: "Responsive Layout & Accessibility",
    description:
      "We design sites that work smoothly on desktops, tablets, and phones. Every site is built to meet accessibility standards so your content is usable by all visitors.",
  },
  {
    icon: <FaImages className="Uiuxdetails__feature-icon" />,
    title: "Graphics & Illustration",
    description:
      "We provide custom graphics, icons, and animations that are lightweight, clear, and consistent with your brand identity.",
  },
  {
    icon: <FaLaptopCode className="Uiuxdetails__feature-icon" />,
    title: "Front-End to Back-End Pipeline",
    description:
      "Our developers deliver complete builds in React. The result is a clean, maintainable site that stays true to the design.",
  },
  {
    icon: <FaCloudUploadAlt className="Uiuxdetails__feature-icon" />,
    title: "Performance & SEO Optimisation",
    description:
      "We optimize every site for speed and visibility. Our process includes structured data, clean HTML, image compression, and other best practices to improve search rankings.",
  },
];

const Uiuxdetails = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] },
    },
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section className="Uiuxdetails">
      <div className="Uiuxdetails__decorative-circle" />
      <div className="Uiuxdetails__container">
        <motion.div
          className="Uiuxdetails__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 className="Uiuxdetails__title" variants={item}>
            <span className="Uiuxdetails__title-gradient"></span>
            Web Design Services We Offer
          </motion.h2>
          <motion.p className="Uiuxdetails__subtitle" variants={item}>
            Professional websites that are fast, modern, and built to grow your business.
          </motion.p>
          <motion.div
            className="Uiuxdetails__header-divider"
            variants={item}
          />
        </motion.div>

        <motion.div
          className="Uiuxdetails__features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {features.map((feature, index) => (
            <motion.div
              className="Uiuxdetails__feature-card"
              key={index}
              variants={item}
              whileHover="hover"
            >
              <motion.div className="Uiuxdetails__card-inner" variants={cardHover}>
                <div className="Uiuxdetails__card-icon-container">
                  <div className="Uiuxdetails__card-icon-bg" />
                  <div className="Uiuxdetails__card-icon">{feature.icon}</div>
                </div>

                <h3 className="Uiuxdetails__card-title">{feature.title}</h3>
                <p className="Uiuxdetails__card-description">{feature.description}</p>

                <div className="Uiuxdetails__card-hover-effect" />
                <div className="Uiuxdetails__card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Uiuxdetails;
