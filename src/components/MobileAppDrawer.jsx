import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Eye,
  Glasses,
  Sun,
  Sparkles,
  Stethoscope,
  ShieldCheck,
  Star,
  HelpCircle,
  Phone,
  MessageCircle,
  ChevronRight,
  Info,
} from "lucide-react";
import "./MobileAppDrawer.css";

export default function MobileAppDrawer({ open, onClose }) {
  // Prevent background scroll when drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="mobile-drawer-backdrop" onClick={onClose}>
      <aside
        className="mobile-drawer-panel"
        onClick={(e) => e.stopPropagation()}
        aria-label="Navigation Menu"
      >
        {/* Drawer Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <span className="drawer-logo-icon">
              <Eye size={22} />
            </span>
            <div>
              <strong>OLIVE</strong>
              <small>EYE CARE</small>
            </div>
          </div>

          <button
            type="button"
            className="drawer-close-btn"
            onClick={onClose}
            aria-label="Close Menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Promo Ribbon */}
        <div className="drawer-promo-ribbon">
          <Sparkles size={14} />
          <span>Use code <strong>OLIVE20</strong> for 20% OFF</span>
        </div>

        {/* Scrollable Navigation Sections */}
        <div className="drawer-scroll-body">
          {/* Section 1: Collections */}
          <div className="drawer-nav-group">
            <span className="drawer-group-title">COLLECTIONS</span>
            <Link to="/eyeglasses" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Glasses size={18} />
                <span>Everyday Eyeglasses</span>
              </div>
              <span className="drawer-count-pill">36+</span>
            </Link>

            <Link to="/sunglasses" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Sun size={18} />
                <span>Sunwear Collection</span>
              </div>
              <span className="drawer-count-pill">36+</span>
            </Link>
          </div>

          {/* Section 2: Interactive Services */}
          <div className="drawer-nav-group">
            <span className="drawer-group-title">OPTICAL CARE &amp; GUIDES</span>
            <a href="/#face-shape-guide" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Sparkles size={18} />
                <span>Shop by Face Shape</span>
              </div>
              <ChevronRight size={16} />
            </a>

            <a href="/#lens-guide" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <ShieldCheck size={18} />
                <span>Precision Lens Science</span>
              </div>
              <ChevronRight size={16} />
            </a>

            <a href="/#book-test" className="drawer-link highlight-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Stethoscope size={18} />
                <span>Book Free Eye Exam</span>
              </div>
              <span className="drawer-badge-free">FREE</span>
            </a>
          </div>

          {/* Section 3: Assurance & Help */}
          <div className="drawer-nav-group">
            <span className="drawer-group-title">HELP &amp; STORIES</span>
            <a href="/#reviews" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Star size={18} />
                <span>Verified Customer Reviews</span>
              </div>
              <span className="drawer-rating-tag">★ 4.9</span>
            </a>

            <a href="/#faq" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <HelpCircle size={18} />
                <span>Frequently Asked Questions</span>
              </div>
              <ChevronRight size={16} />
            </a>

            <Link to="/about" className="drawer-link" onClick={onClose}>
              <div className="drawer-link-left">
                <Info size={18} />
                <span>About Olive Eyewear</span>
              </div>
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* Direct Support Buttons */}
          <div className="drawer-support-box">
            <span className="support-title">NEED ASSISTANCE?</span>
            <div className="support-actions">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="support-btn whatsapp-btn"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Optometrist</span>
              </a>

              <a href="tel:+919876543210" className="support-btn call-btn">
                <Phone size={15} />
                <span>Call Care Helpline</span>
              </a>
            </div>
          </div>
        </div>

        {/* Drawer Footer */}
        <div className="drawer-footer">
          <span>Olive Eye Care App Experience</span>
          <small>100% Prescription Accuracy Guaranteed</small>
        </div>
      </aside>
    </div>
  );
}
