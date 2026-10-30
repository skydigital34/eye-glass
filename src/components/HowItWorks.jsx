import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles } from "lucide-react";
import "./HowItWorks.css";

export default function HowItWorks({ onBookAppointment }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

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

        {/* Featured Video Showcase Card */}
        <div className="services-video-showcase">
          <div className="services-video-container">
            <video
              ref={videoRef}
              className="services-video-player"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              poster="/service_card_hometest.png"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/home-eye-test-service.mp4" type="video/mp4" />
              <source
                src="/gemini_generated_video_7e262447 (online-video-cutter.com).mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            {/* Video Overlay Vignette & Soft Gradient */}
            <div className="services-video-overlay" />

            {/* Top Bar Badges */}
            <div className="services-video-top-bar">
              <span className="services-video-badge">
                <span className="live-pulsing-dot" />
                <span>EXPERIENCE OUR DOORSTEP SERVICE</span>
              </span>
              <span className="services-video-pill-hd">HD 1080P</span>
            </div>

            {/* Interactive Control Buttons (Play/Pause, Sound) */}
            <div className="services-video-controls-bar">
              <button
                type="button"
                className="video-control-btn"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                title={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={17} /> : <Play size={17} fill="currentColor" />}
              </button>

              <button
                type="button"
                className="video-control-btn"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
              </button>
            </div>

            {/* Video Bottom Info & Direct CTA */}
            <div className="services-video-bottom-card">
              <div className="video-bottom-info">
                <div className="video-info-pill">
                  <Sparkles size={13} className="pill-sparkle-icon" />
                  <span>100% Certified Optometrists</span>
                </div>
                <h3 className="video-card-title">
                  Certified Eye Testing &amp; 150+ Frames at Your Doorstep
                </h3>
                <p className="video-card-desc">
                  Enjoy precision eye examination and personal trial of luxury frames in the comfort of your home.
                </p>
              </div>

              <button
                type="button"
                className="services-video-cta-btn"
                onClick={handleHomeTestClick}
              >
                <span>Book Home Test</span>
                <ArrowRight size={16} className="cta-arrow-icon" />
              </button>
            </div>
          </div>
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
