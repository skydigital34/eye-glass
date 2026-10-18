import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import "./FaceShapeGuide.css";

const FACE_SHAPES = [
  {
    id: "oval",
    name: "Oval Face",
    tagline: "Naturally balanced & versatile",
    desc: "Oval faces feature gently rounded curves and balanced proportions. Lucky you — almost every frame style flatters your face naturally!",
    bestFrames: ["Rectangle", "Cat-eye", "Aviator", "Square"],
    avoid: "Oversized frames that overpower your natural symmetry.",
    icon: (
      <svg viewBox="0 0 100 120" className="shape-svg">
        <ellipse cx="50" cy="60" rx="36" ry="48" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <ellipse cx="50" cy="60" rx="20" ry="10" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "round",
    name: "Round Face",
    tagline: "Soft contours & equal proportions",
    desc: "Characterized by full cheeks, a softly curved chin, and equal width and length. Angular and bold frames add definition and structure.",
    bestFrames: ["Square", "Rectangle", "Geometric", "Wayfarer"],
    avoid: "Small round frames that exaggerate roundness.",
    icon: (
      <svg viewBox="0 0 100 120" className="shape-svg">
        <circle cx="50" cy="60" r="42" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="20" y1="60" x2="80" y2="60" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "square",
    name: "Square Face",
    tagline: "Strong jawline & broad forehead",
    desc: "You have striking, well-defined angles and a bold jawline. Curved, round, or teardrop-shaped frames soften harsh edges beautifully.",
    bestFrames: ["Round", "Oval", "Aviator", "Browline"],
    avoid: "Boxy, thick rectangular frames that clash with your jawline.",
    icon: (
      <svg viewBox="0 0 100 120" className="shape-svg">
        <rect x="15" y="20" width="70" height="80" rx="8" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <line x1="15" y1="85" x2="85" y2="85" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: "heart",
    name: "Heart Face",
    tagline: "Broad forehead & delicate tapered chin",
    desc: "Features wide cheekbones and forehead that taper down into a slender pointed chin. Frames with lower emphasis or thin metal rims balance your features.",
    bestFrames: ["Aviator", "Round", "Cat-eye", "Rimless"],
    avoid: "Heavy browlines or top-heavy frames that widen the forehead.",
    icon: (
      <svg viewBox="0 0 100 120" className="shape-svg">
        <path d="M18 28 Q50 20 82 28 Q80 75 50 105 Q20 75 18 28 Z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: "diamond",
    name: "Diamond Face",
    tagline: "High prominent cheekbones & narrow eye line",
    desc: "Rarest face shape, highlighted by dramatic, high cheekbones with a narrower forehead and chin. Oval and cat-eye frames accentuate your natural contours.",
    bestFrames: ["Cat-eye", "Oval", "Round", "Soft Square"],
    avoid: "Narrow or overly slim frames that draw focus to eye width.",
    icon: (
      <svg viewBox="0 0 100 120" className="shape-svg">
        <polygon points="50,15 88,60 50,105 12,60" fill="none" stroke="currentColor" strokeWidth="2.5" />
      </svg>
    ),
  },
];

export default function FaceShapeGuide() {
  const [selectedId, setSelectedId] = useState("oval");
  const navigate = useNavigate();

  const selected = FACE_SHAPES.find((s) => s.id === selectedId) || FACE_SHAPES[0];

  return (
    <section className="face-guide-section" id="face-shape-guide">
      <div className="wrap">
        <div className="face-guide-head">
          <span className="eyebrow">INTERACTIVE FRAME FINDER</span>
          <h2>
            Find Your Match · <em>Shop by Face Shape</em>
          </h2>
          <p>
            The right frame doesn't just improve your vision — it accentuates your
            natural facial features. Select your face shape below to discover your perfect silhouette.
          </p>
        </div>

        {/* Shape Selector Bar */}
        <div className="shape-selector-grid">
          {FACE_SHAPES.map((shape) => {
            const isActive = shape.id === selectedId;
            return (
              <button
                key={shape.id}
                className={`shape-select-btn ${isActive ? "active" : ""}`}
                onClick={() => setSelectedId(shape.id)}
              >
                <div className="shape-svg-wrap">{shape.icon}</div>
                <strong className="shape-name">{shape.name}</strong>
                <span className="shape-sub">{shape.tagline.split("&")[0]}</span>
                {isActive && <div className="shape-active-dot" />}
              </button>
            );
          })}
        </div>

        {/* Selected Shape Detail Showcase */}
        <div className="shape-detail-card">
          <div className="shape-detail-left">
            <div className="shape-badge">
              <Sparkles size={14} />
              <span>RECOMMENDED FOR {selected.name.toUpperCase()}</span>
            </div>
            <h3>{selected.tagline}</h3>
            <p className="shape-desc">{selected.desc}</p>

            <div className="shape-dos-donts">
              <div className="shape-do">
                <strong>Best Frame Styles:</strong>
                <div className="shape-tags">
                  {selected.bestFrames.map((frame, idx) => (
                    <span key={idx} className="shape-frame-tag">
                      <Check size={12} /> {frame}
                    </span>
                  ))}
                </div>
              </div>

              <div className="shape-dont">
                <strong>Stylist Tip:</strong>
                <p>{selected.avoid}</p>
              </div>
            </div>

            <button
              className="shape-explore-btn"
              onClick={() => navigate("/eyeglasses")}
            >
              <span>Explore {selected.name} Frames</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="shape-detail-right">
            <div className="shape-preview-box">
              <div className="shape-hero-svg">{selected.icon}</div>
              <div className="shape-overlay-specs">
                <span className="spec-label">IDEAL PROPORTIONS</span>
                <strong>{selected.bestFrames.join(" · ")}</strong>
                <p>Engineered for all-day balanced weight distribution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
