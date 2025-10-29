// Webdesign.jsx
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
import "./Webdesign.css";

const features = [
  {
    icon: <FaPalette className="Webdesign-icon" />,
    title: "Brand-First UI/UX Design",
    description:
      "We craft cohesive visual systems—color palettes, typography, and layouts—tailored to your brand and applied consistently across every page."
  },
  {
    icon: <FaBrush className="Webdesign-icon" />,
    title: "High-Fidelity Prototyping",
    description:
      "Interactive, clickable prototypes let you preview the experience early, gather feedback, and reduce costly changes during development."
  },
  {
    icon: <FaMobileAlt className="Webdesign-icon" />,
    title: "Responsive & Accessible",
    description:
      "Every interface is built to perform beautifully on desktop, tablet, and mobile—and meets accessibility best practices so all users can succeed."
  },
  {
    icon: <FaImages className="Webdesign-icon" />,
    title: "Graphics & Micro-Animations",
    description:
      "Clean, lightweight visuals, icons, and subtle motion reinforce your message without slowing down the experience."
  },
  {
    icon: <FaLaptopCode className="Webdesign-icon" />,
    title: "Front-End to Back-End Delivery",
    description:
      "Production-ready React builds that stay faithful to the design, with clean, maintainable code and modern tooling."
  },
  {
    icon: <FaCloudUploadAlt className="Webdesign-icon" />,
    title: "Performance & SEO",
    description:
      "From semantic HTML and schema to image optimization and caching—we tune sites for speed, stability, and search visibility."
  }
];

const Webdesign = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 0.77, 0.47, 0.97] }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="Webdesign-section">
      <div className="Webdesign-decorative-circle" />
      <div className="Webdesign-container">
        <motion.div
          className="Webdesign-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          <motion.h2 className="Webdesign-title" variants={item}>
            <span className="Webdesign-title-gradient">Web Design</span> Services We Offer
          </motion.h2>
          <motion.p className="Webdesign-subtitle" variants={item}>
            Fast, modern, and scalable websites designed to grow your business.
          </motion.p>
          <motion.div className="Webdesign-header-divider" variants={item} />
        </motion.div>

        <motion.div
          className="Webdesign-features-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={container}
        >
          {features.map((feature, index) => (
            <motion.div
              className="Webdesign-feature-card"
              key={index}
              variants={item}
              whileHover="hover"
            >
              <motion.div className="Webdesign-card-inner" variants={cardHover}>
                <div className="Webdesign-card-icon-container">
                  <div className="Webdesign-card-icon-bg" />
                  <div className="Webdesign-card-icon">{feature.icon}</div>
                </div>
                <h3 className="Webdesign-card-title">{feature.title}</h3>
                <p className="Webdesign-card-description">{feature.description}</p>
                <div className="Webdesign-card-hover-effect" />
                <div className="Webdesign-card-accent" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Webdesign;
