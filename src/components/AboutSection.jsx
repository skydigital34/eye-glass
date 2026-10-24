import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Stethoscope,
  HeartHandshake,
  Glasses,
  Users,
} from "lucide-react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="about-home-section" id="about">
      {/* Anchor shim for backwards-compatibility */}
      <span id="story" className="anchor-shim" />

      <div className="wrap">
        {/* Section Header */}
        <div className="about-home-header">
          <div className="about-eyebrow-container">
            <span className="about-eyebrow-line" />
            <span className="about-eyebrow-text">ABOUT OLIVE EYE CARE</span>
            <span className="about-eyebrow-line" />
          </div>

          <h2 className="about-home-title">
            The Branch Of New Style · <em>Where Clarity Meets Elegance</em>
          </h2>

          <p className="about-home-subtitle">
            Founded with a passion for optical perfection, Olive Eye Care seamlessly merges
            certified clinical optometry with handpicked international designer frames.
          </p>
        </div>

        {/* 2-Column Content Showcase */}
        <div className="about-home-grid">
          {/* Left Column: Visual Showcase & Floating Metrics */}
          <div className="about-visual-col">
            <div className="about-img-frame">
              <img
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=85"
                alt="Olive Eye Care Optical Boutique Specialist"
                className="about-main-img"
              />
              <div className="about-img-gradient" />

              {/* Floating Trust Badge */}
              <div className="about-floating-card">
                <div className="floating-badge-icon">
                  <Award size={20} />
                </div>
                <div>
                  <strong>15+ Years of Excellence</strong>
                  <small>50,000+ Happy Eyes Fitted</small>
                </div>
              </div>
            </div>

            {/* Quote Strip below Image */}
            <div className="about-quote-box">
              <Sparkles size={18} className="quote-icon" />
              <p>
                "We believe the right pair of spectacles should feel like it was
                always meant to be yours — thoughtful design, medical accuracy, and effortless confidence."
              </p>
            </div>
          </div>

          {/* Right Column: Mission, 3 Core Pillars & Stats */}
          <div className="about-content-col">
            <span className="about-col-tag">OUR PHILOSOPHY</span>
            <h3>
              Precision eye care designed around your life, your face, and your style.
            </h3>
            <p className="about-lead-desc">
              At Olive Eye Care, we believe you shouldn't have to choose between medical-grade
              optical precision and high-fashion aesthetics. Every frame in our studio is
              personally handpicked, laser-calibrated to your pupillary distance, and verified
              by our senior optometrists.
            </p>

            {/* 3 Core Value Pillars */}
            <div className="about-pillars-list">
              <div className="about-pillar-item">
                <div className="pillar-icon-wrap">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <h4>Certified Clinical Optometry</h4>
                  <p>Comprehensive 14-point digital eye exams using automated Japanese corneal mapping technology.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-wrap">
                  <Glasses size={20} />
                </div>
                <div>
                  <h4>Authorized Global Eyewear</h4>
                  <p>Direct authorized partner for Ray-Ban, ProDesign Denmark, Titan, Vogue, Arcadio, and boutique European houses.</p>
                </div>
              </div>

              <div className="about-pillar-item">
                <div className="pillar-icon-wrap">
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h4>Lifetime Aftercare Guarantee</h4>
                  <p>Enjoy complimentary ultrasonic cleaning, screw tightening, nose pad replacement, and frame alignment forever.</p>
                </div>
              </div>
            </div>

            {/* Metrics Counters Row */}
            <div className="about-stats-row">
              <div className="stat-item">
                <strong>15+</strong>
                <span>Years of Optical Care</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>50K+</strong>
                <span>Prescriptions Fitted</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>100%</strong>
                <span>Genuine Guarantee</span>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <strong>4.9 ★</strong>
                <span>Google Reviews</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="about-actions-row">
              <Link to="/about" className="about-primary-btn">
                <span>Read Full Story</span>
                <ArrowRight size={15} />
              </Link>

              <a href="#book-test" className="about-secondary-btn">
                <span>Book Free In-Store Exam</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
