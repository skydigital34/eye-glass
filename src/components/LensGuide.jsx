import React, { useState } from "react";
import { Laptop, Sun, Shield, Droplets, CheckCircle2, ToggleLeft, ToggleRight } from "lucide-react";
import "./LensGuide.css";

const LENSES = [
  {
    id: "blue-light",
    icon: Laptop,
    badge: "WORK FROM HOME ESSENTIAL",
    title: "Digital BlueShield™",
    subtitle: "Anti-Fatigue Computer Glasses",
    desc: "Engineered specifically for screen workers. Selectively filters 98% of harsh blue-violet light emitted from smartphones, monitors, and LED screens.",
    benefits: [
      "Zero eye redness & fatigue after long work hours",
      "Better natural sleep melatonin cycle",
      "Available with prescription or zero power",
    ],
  },
  {
    id: "photochromic",
    icon: Sun,
    badge: "ALL-IN-ONE SOLUTION",
    title: "Intelligent Photochromic",
    subtitle: "Light-Responsive Transition Lenses",
    desc: "Seamlessly adapts to your environment. Ultra-clear indoors and transitions into dark UV sunglasses in under 30 seconds when exposed to natural sunlight.",
    benefits: [
      "No need to switch between eyeglasses and sunglasses",
      "100% UVA & UVB full spectrum defense",
      "Smooth, rapid indoor fade-back technology",
    ],
  },
  {
    id: "anti-glare",
    icon: Shield,
    badge: "CRYSTAL VISION",
    title: "UltraClear™ Anti-Reflective",
    subtitle: "Night Driving & Camera-Ready",
    desc: "Eliminates frustrating surface reflections and glare. Ideal for night driving through high beams and looking sharp on Zoom calls without glass glare.",
    benefits: [
      "Drastically reduces night headlight starbursts",
      "Lens disappears on camera — your eyes shine through",
      "Maximum light transmission for 20/20 sharpness",
    ],
  },
  {
    id: "hydrophobic",
    icon: Droplets,
    badge: "MAXIMUM DURABILITY",
    title: "DiamondCoat™ Hydrophobic",
    subtitle: "Scratch & Smudge Defense",
    desc: "A tough multi-layer nano shield that repels moisture, dust, oil, and fingerprint grease with effortless wipe-clean convenience.",
    benefits: [
      "Water droplets slide right off during rainy days",
      "3x higher resistance against accidental drops & scratches",
      "Stays cleaner 4x longer than standard lenses",
    ],
  },
];

export default function LensGuide() {
  const [filterActive, setFilterActive] = useState(false);

  return (
    <section className="lens-guide-section" id="lens-guide">
      <div className="wrap">
        <div className="lens-header">
          <div className="lens-header-copy">
            <span className="eyebrow">OPTICAL EXCELLENCE</span>
            <h2>
              Precision Lens Science · <em>Clearer, Healthier Eyes</em>
            </h2>
            <p>
              Every Olive frame is matched with certified medical-grade lenses,
              custom-cut and precision-calibrated for flawless optical clarity.
            </p>
          </div>

          {/* Interactive Screen Simulator Toggle */}
          <div className="lens-interactive-box">
            <div className="sim-head">
              <span>INTERACTIVE SIMULATOR</span>
              <button
                className="sim-toggle-btn"
                onClick={() => setFilterActive(!filterActive)}
                aria-label="Toggle Blue Light Filter Simulation"
              >
                <span>{filterActive ? "Shield Active" : "Standard Lens"}</span>
                {filterActive ? (
                  <ToggleRight size={24} className="active-icon" />
                ) : (
                  <ToggleLeft size={24} />
                )}
              </button>
            </div>

            <div className={`sim-screen ${filterActive ? "shield-on" : "shield-off"}`}>
              <div className="sim-code-preview">
                <span className="sim-dot red" />
                <span className="sim-dot yellow" />
                <span className="sim-dot green" />
                <div className="sim-text">
                  <strong>
                    {filterActive
                      ? "✓ Blue light absorbed · Relaxed ciliary eye muscles"
                      : "⚠ Harsh 450nm blue spike · Eye strain & dry fatigue"}
                  </strong>
                  <small>
                    {filterActive
                      ? "Warm, soothing high-contrast clarity"
                      : "High glare & disruptive digital flicker"}
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Lens Feature Cards */}
        <div className="lens-grid">
          {LENSES.map((lens) => {
            const Icon = lens.icon;
            return (
              <div key={lens.id} className="lens-card">
                <div className="lens-top">
                  <div className="lens-icon-circle">
                    <Icon size={20} />
                  </div>
                  <span className="lens-badge">{lens.badge}</span>
                </div>

                <h3>{lens.title}</h3>
                <h4 className="lens-sub">{lens.subtitle}</h4>
                <p className="lens-desc">{lens.desc}</p>

                <div className="lens-benefits-list">
                  {lens.benefits.map((b, i) => (
                    <div key={i} className="lens-benefit-item">
                      <CheckCircle2 size={13} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
