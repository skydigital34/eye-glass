import React from "react";
import {
  Glasses,
  CalendarCheck,
  Eye,
  ShieldCheck,
  Truck,
  ArrowRight,
} from "lucide-react";
import "./Hero.css";

export default function Hero({ scrollToProducts }) {
  return (
    <section className="ohero" id="home">
      {/* Background Hero Banner Image */}
      <div className="ohero-bg" aria-hidden="true">
        <img
          src="/image.png"
          alt="Olive Eye Care Hero Banner"
          className="ohero-bg-img"
        />
      </div>

      {/* Main Container */}
      <div className="ohero-wrap">
        <div className="ohero-content">
          {/* Eyebrow */}
          <div className="ohero-eyebrow-row">
            <span className="ohero-eyebrow-text">
              PREMIUM EYEWEAR &amp; EYE CARE
            </span>
            <span className="ohero-eyebrow-line" />
          </div>

          {/* Main Title */}
          <h1 className="ohero-main-title">
            <span className="title-line">Clear Vision,</span>
            <span className="title-line title-swoosh-wrap">
              A Brighter You
              <svg
                className="hero-swoosh-svg"
                viewBox="0 0 250 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M 8 13 Q 125 20 242 6"
                  stroke="#384c1f"
                  strokeWidth="3.4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          {/* Subtitle description */}
          <p className="ohero-subtext">
            Stylish eyewear and advanced eye testing
            <br />
            for a healthier, clearer tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className="ohero-cta-row">
            <button
              type="button"
              className="ohero-btn-primary"
              onClick={scrollToProducts}
            >
              <Glasses size={18} strokeWidth={2} />
              <span>Shop Eyewear</span>
              <ArrowRight size={17} strokeWidth={2.2} />
            </button>

            <a href="#book-test" className="ohero-btn-outline">
              <CalendarCheck size={18} strokeWidth={2} />
              <span>Book Eye Test</span>
            </a>
          </div>

          {/* Trust Features Bar */}
          <div className="ohero-features-bar">
            <div className="ohero-feature-item">
              <Glasses size={22} className="feature-icon" strokeWidth={1.75} />
              <div className="feature-text">
                <strong>Premium</strong>
                <span>Frames</span>
              </div>
            </div>

            <span className="feature-divider" />

            <div className="ohero-feature-item">
              <Eye size={22} className="feature-icon" strokeWidth={1.75} />
              <div className="feature-text">
                <strong>Expert</strong>
                <span>Eye Care</span>
              </div>
            </div>

            <span className="feature-divider" />

            <div className="ohero-feature-item">
              <ShieldCheck size={22} className="feature-icon" strokeWidth={1.75} />
              <div className="feature-text">
                <strong>Trusted</strong>
                <span>Quality</span>
              </div>
            </div>

            <span className="feature-divider" />

            <div className="ohero-feature-item">
              <Truck size={22} className="feature-icon" strokeWidth={1.75} />
              <div className="feature-text">
                <strong>Fast &amp; Safe</strong>
                <span>Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom-Right Floating Badge */}
        <a
          href="#book-test"
          className="ohero-testing-badge"
          aria-label="Professional Eye Testing"
        >
          <div className="testing-badge-icon">
            <Eye size={19} strokeWidth={2} />
          </div>

          <div className="testing-badge-info">
            <strong>Professional Eye Testing</strong>
            <small>Accurate · Advanced · Comfortable</small>
          </div>

          <div className="testing-badge-btn">
            <ArrowRight size={15} strokeWidth={2.4} />
          </div>
        </a>
      </div>
    </section>
  );
}