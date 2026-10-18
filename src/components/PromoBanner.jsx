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

      <div className="promo-perks">
        <div className="promo-perk">
          <Truck size={14} />
          <span>Free Express Shipping Across India</span>
        </div>
        <div className="promo-perk">
          <ShieldCheck size={14} />
          <span>1-Year Comprehensive Lens Warranty</span>
        </div>
        <div className="promo-perk">
          <RotateCcw size={14} />
          <span>14-Day Risk-Free Home Exchange</span>
        </div>
      </div>
    </section>
  );
}
