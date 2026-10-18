import React from "react";
import { Glasses, FileText, PackageCheck, Award, HeartHandshake, RefreshCw } from "lucide-react";
import "./HowItWorks.css";

const STEPS = [
  {
    step: "01",
    icon: Glasses,
    title: "Discover Your Frame",
    desc: "Browse our curated collection of Italian-grade acetate and lightweight titanium frames. Use our Face Shape Guide to find your signature fit.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Customize Your Lenses",
    desc: "Choose single vision, bifocal, progressive, or zero-power computer blue-blockers. Snap a photo of your doctor's slip or enter values manually.",
  },
  {
    step: "03",
    icon: PackageCheck,
    title: "Delivered to Doorstep",
    desc: "Hand-assembled and laser-checked by certified opticians. Arrives in 3-5 days with a luxury protective case and 14-day risk-free home trial.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" id="how-it-works">
      <div className="wrap">
        <div className="how-header">
          <span className="eyebrow">SIMPLE &amp; TRANSPARENT</span>
          <h2>
            Effortless Eyewear · <em>In 3 Easy Steps</em>
          </h2>
          <p>
            No clinic queues, no overpriced markups. Just premium optical precision
            delivered directly to your home.
          </p>
        </div>

        <div className="how-steps-grid">
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="how-step-card">
                <div className="step-num-badge">{item.step}</div>
                <div className="step-icon-wrap">
                  <Icon size={26} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                {idx < STEPS.length - 1 && <div className="step-connector" />}
              </div>
            );
          })}
        </div>

        <div className="how-trust-banner">
          <div className="how-trust-item">
            <Award size={18} />
            <div>
              <strong>100% Prescription Accuracy</strong>
              <small>Dual optical verification before dispatch</small>
            </div>
          </div>

          <div className="how-trust-divider" />

          <div className="how-trust-item">
            <HeartHandshake size={18} />
            <div>
              <strong>1-Year Warranty Included</strong>
              <small>Covers coating peel &amp; structural defects</small>
            </div>
          </div>

          <div className="how-trust-divider" />

          <div className="how-trust-item">
            <RefreshCw size={18} />
            <div>
              <strong>14-Day Free Exchange</strong>
              <small>Didn't love the fit? We swap it free of charge</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
