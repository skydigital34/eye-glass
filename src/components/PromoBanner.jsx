import React, { useState } from "react";
import { Sparkles, Copy, Check, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import "./PromoBanner.css";

export default function PromoBanner({ showNotice, scrollToProducts }) {
  const [copied, setCopied] = useState(false);
  const couponCode = "OLIVE20";

  const handleCopy = () => {
    navigator.clipboard?.writeText(couponCode);
    setCopied(true);
    if (showNotice) showNotice(`Coupon code "${couponCode}" copied!`);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="promo-strip">
      <div className="promo-wrap">
        <div className="promo-badge">
          <Sparkles size={14} />
          <span>FESTIVE VISION SPECIAL</span>
        </div>

        <div className="promo-content">
          <h3>
            Get <strong>Flat 20% OFF</strong> on your first pair of handcrafted frames
          </h3>
          <p>Complimentary anti-glare lens coating included with every order this week.</p>
        </div>

        <div className="promo-action">
          <button
            className={`promo-code-btn ${copied ? "copied" : ""}`}
            onClick={handleCopy}
            title="Click to copy coupon code"
          >
            <span className="code-label">USE CODE:</span>
            <span className="code-text">{couponCode}</span>
            {copied ? <Check size={14} /> : <Copy size={14} />}
          </button>

          {scrollToProducts && (
            <button className="promo-shop-btn" onClick={scrollToProducts}>
              Claim Offer
            </button>
          )}
        </div>
      </div>

      {/* Prominent Delivery Information Card */}
      <div className="promo-delivery-highlight-box">
        <div className="delivery-highlight-badge">
          <Truck size={16} />
          <strong>FREE DELIVERY AVAILABLE IN TAMIL NADU</strong>
        </div>

        <div className="delivery-cards-duo">
          <div className="delivery-card tn-delivery-card">
            <div className="d-card-top">
              <span className="live-dot-glow" />
              <strong>Tamil Nadu Orders (100% Free Shipping)</strong>
            </div>
            <div className="d-card-days">
              <span>Delivery Time:</span> <b>1 to 3 Days</b>
            </div>
            <p>Coimbatore, Chennai, Madurai, Trichy, Salem &amp; all TN districts</p>
          </div>

          <div className="delivery-card india-delivery-card">
            <div className="d-card-top">
              <span className="live-dot-glow grey" />
              <strong>All Other Places Across India</strong>
            </div>
            <div className="d-card-days">
              <span>Delivery Time:</span> <b>7 to 10 Days</b>
            </div>
            <p>Insured Express Delivery to Bangalore, Hyderabad, Mumbai, Delhi &amp; nationwide</p>
          </div>
        </div>
      </div>

      <div className="promo-perks">
        <div className="promo-perk highlight-delivery-perk">
          <Truck size={14} />
          <span>Free Delivery: Tamil Nadu Only (1-3 Days) · Rest of India (7-10 Days)</span>
        </div>
        <div className="promo-perk">
          <ShieldCheck size={14} />
          <span>1-Year Comprehensive Lens Warranty</span>
        </div>
        <div className="promo-perk">
          <RotateCcw size={14} />
          <span>No Returns · Only Exchange</span>
        </div>
      </div>
    </section>
  );
}
