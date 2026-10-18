import React from "react";
import { Link } from "react-router-dom";
import { Eye, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="olive-footer" id="contact">
      <div className="wrap">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <span className="brand-mark">
                <Eye size={22} />
              </span>
              <div>
                <strong>OLIVE</strong>
                <small>EYE CARE</small>
              </div>
            </div>

            <p className="footer-tagline">
              Thoughtfully handcrafted optical frames &amp; precision-engineered
              lenses, made for all-day weightless comfort.
            </p>

            <div className="footer-contact-details">
              <div className="contact-item">
                <Phone size={14} />
                <span>+91 (044) 4892 0100 / +91 98765 43210</span>
              </div>
              <div className="contact-item">
                <Mail size={14} />
                <span>care@oliveeyecare.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={14} />
                <span>Experience Stores: Chennai · Bangalore · Mumbai</span>
              </div>
            </div>
          </div>

          {/* Shop Column */}
          <div className="footer-col">
            <h4>COLLECTIONS</h4>
            <ul>
              <li>
                <Link to="/eyeglasses">Eyeglasses</Link>
              </li>
              <li>
                <Link to="/sunglasses">Sunglasses</Link>
              </li>
              <li>
                <a href="#featured-products">Best Sellers</a>
              </li>
              <li>
                <a href="#featured-products">New Arrivals</a>
              </li>
              <li>
                <a href="#lens-guide">BlueShield Lenses</a>
              </li>
            </ul>
          </div>

          {/* Eye Care Column */}
          <div className="footer-col">
            <h4>CARE &amp; SERVICES</h4>
            <ul>
              <li>
                <a href="#face-shape-guide">Face Shape Finder</a>
              </li>
              <li>
                <a href="#lens-guide">Lens Science</a>
              </li>
              <li>
                <a href="#book-test">Free Eye Exam</a>
              </li>
              <li>
                <a href="#book-test">Home Try-On</a>
              </li>
              <li>
                <a href="#how-it-works">How It Works</a>
              </li>
            </ul>
          </div>

          {/* Help & Policies */}
          <div className="footer-col">
            <h4>HELP &amp; POLICIES</h4>
            <ul>
              <li>
                <a href="#faq">FAQs</a>
              </li>
              <li>
                <a href="#reviews">Verified Reviews</a>
              </li>
              <li>
                <Link to="/about">About Olive</Link>
              </li>
              <li>
                <a href="#how-it-works">1-Year Warranty</a>
              </li>
              <li>
                <a href="#how-it-works">14-Day Returns</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-bottom-left">
            <ShieldCheck size={16} />
            <span>100% Optical Accuracy Guaranteed · ISO 9001 Certified Optical Labs</span>
          </div>

          <div className="footer-bottom-right">
            <span>© 2026 Olive Eye Care. All rights reserved. Crafted with care.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}