import React from "react";
import { Link } from "react-router-dom";
import { Eye, Phone, Mail, MapPin, ShieldCheck, Heart, MessageCircle, RotateCcw } from "lucide-react";
import BrandLogo from "./BrandLogo.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="olive-footer" id="contact">
      <div className="wrap">
        <div className="footer-top-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <BrandLogo theme="light" size={1.15} />
            </div>

            <p className="footer-tagline">
              Thoughtfully handcrafted optical frames &amp; precision-engineered
              lenses, made for all-day weightless comfort.
            </p>

            <div className="footer-contact-details">
              <a href="tel:08838289852" className="contact-item">
                <Phone size={14} />
                <span>Call: 088382 89852</span>
              </a>
              <a
                href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item whatsapp-item"
              >
                <MessageCircle size={14} />
                <span>WhatsApp: 88382 89852</span>
              </a>
              <a href="mailto:oliveyecare@gmail.com" className="contact-item">
                <Mail size={14} />
                <span>oliveyecare@gmail.com</span>
              </a>
              <div className="contact-item address-item">
                <MapPin size={15} />
                <span>
                  No 99/100, Dr. Raja Road, Tatabad, Sivananda Colony,
                  <br />
                  Coimbatore, Tamil Nadu - 641012
                </span>
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
                <a href="#faq" className="footer-exchange-link" title="Exchange Policy">
                  <RotateCcw size={12} />
                  <span>No Returns · Only Exchange</span>
                </a>
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