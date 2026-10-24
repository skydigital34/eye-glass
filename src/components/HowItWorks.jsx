import React from "react";
import "./HowItWorks.css";

export default function HowItWorks({ onBookAppointment }) {
  const handleHomeTestClick = (e) => {
    e.preventDefault();
    if (onBookAppointment) {
      onBookAppointment("home");
    }
  };

  const handleStylishFramesClick = (e) => {
    e.preventDefault();
    if (onBookAppointment) {
      onBookAppointment("clinic");
    }
  };

  return (
    <section className="services-showcase-section" id="services">
      {/* Anchor shim for backwards-compatibility */}
      <span id="how-it-works" className="anchor-shim" />

      {/* Decorative Corner Leaves matching mockup 1:1 */}
      <img
        src="/services_leaf_tl.png"
        alt=""
        className="services-leaf-tl"
        aria-hidden="true"
      />
      <img
        src="/services_leaf_br.png"
        alt=""
        className="services-leaf-br"
        aria-hidden="true"
      />

      <div className="wrap">
        {/* Section Header matching mockup 1:1 */}
        <div className="services-header">
          <div className="services-eyebrow-container">
            <span className="services-eyebrow-line" />
            <span className="services-eyebrow-text">
              CONVENIENT &amp; COMPREHENSIVE
            </span>
            <span className="services-eyebrow-line" />
          </div>

          <h2 className="services-title">
            Home Eye Test <span className="services-amp">&amp;</span> Eyeglasses Services
          </h2>

          <p className="services-subtitle">
            Better vision. Greater comfort. All in one place.
          </p>
        </div>

        {/* 2 Showcase Cards Grid matching mockup 1:1 */}
        <div className="services-grid">
          {/* Card 1: Professional Eye Test at Your Home */}
          <a
            href="#book-test"
            className="service-card"
            onClick={handleHomeTestClick}
            aria-label="Book Professional Eye Test at Your Home"
          >
            <img
              src="/service_card_hometest.png"
              alt="Professional Eye Test at Your Home - Comprehensive eye examination from the comfort of your home"
              className="service-card-img"
            />
            <span className="service-card-border" />
          </a>

          {/* Card 2: Stylish Frames for Better Vision */}
          <a
            href="#book-test"
            className="service-card"
            onClick={handleStylishFramesClick}
            aria-label="Book Stylish Frames consultation and Eyeglasses Services"
          >
            <img
              src="/service_card_eyeglasses.png"
              alt="Eyeglasses Services - Stylish Frames for Better Vision"
              className="service-card-img"
            />
            <span className="service-card-border" />
          </a>
        </div>
      </div>
    </section>
  );
}
