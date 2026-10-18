import React, { useState } from "react";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import "./FaqSection.css";

const FAQS = [
  {
    q: "How do I submit my eye power or prescription?",
    a: "It's super easy! You have three convenient choices: (1) Enter your sphere, cylinder, and axis values directly during checkout, (2) Upload a clear smartphone photo of your doctor's slip, or (3) Select 'I will send prescription later' and our certified optometrist will WhatsApp you to verify the details.",
  },
  {
    q: "Can I buy glasses with zero power just for computer and mobile protection?",
    a: "Absolutely! Many of our customers have 20/20 vision and wear Olive frames exclusively for screen protection. Choose our 'Zero Power BlueShield™' option to block 98% of digital screen blue light and eliminate daily eye strain without altering your vision.",
  },
  {
    q: "What if the frame doesn't suit my face or fits uncomfortably?",
    a: "We offer a 100% Risk-Free 14-Day Home Trial. If the frames don't feel just right on your face, simply initiate an exchange or return through our website or WhatsApp support. We will arrange a free reverse pickup from your doorstep and either adjust the frame or issue a full refund.",
  },
  {
    q: "How do I know what frame size fits my face?",
    a: "Every product page displays the exact dimensions (Lens Width - Bridge - Temple Length, e.g. 50-18-142 mm). You can also look at the inner temple arm of your existing comfortable pair of glasses to compare measurements, or use our interactive 'Shop by Face Shape' guide above.",
  },
  {
    q: "Do you offer progressive or bifocal lenses for reading and distance?",
    a: "Yes! We craft high-definition digital progressive lenses with ultra-wide vision corridors, allowing seamless transitions from reading small text up close to clear distance viewing without the annoying visible divider line of older bifocals.",
  },
  {
    q: "What is covered under the Olive 1-Year Warranty?",
    a: "Our comprehensive 1-year warranty covers all manufacturing defects, lens coating peeling, spontaneous anti-reflective crazing, hinge looseness, and frame structural welds. Accidental scratches caused by rough usage are eligible for replacement at 50% subsidized cost.",
  },
  {
    q: "How fast is delivery and what are the shipping charges?",
    a: "Standard shipping is 100% FREE across India on all prepaid orders. Zero-power frames ship within 24-48 hours. Custom prescription and progressive lenses are precision-surfaced and delivered to your doorstep within 3-5 business days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="wrap">
        <div className="faq-head">
          <div className="faq-badge">
            <HelpCircle size={14} />
            <span>GOT QUESTIONS?</span>
          </div>
          <h2>
            Frequently Asked · <em>Questions &amp; Clarity</em>
          </h2>
          <p>
            Everything you need to know about prescriptions, optical lens technology,
            and our risk-free guarantee.
          </p>
        </div>

        <div className="faq-accordion">
          {FAQS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`faq-item ${isOpen ? "open" : ""}`}
                onClick={() => toggle(idx)}
              >
                <button
                  className="faq-question-btn"
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span className="faq-q-text">{item.q}</span>
                  <span className="faq-toggle-icon">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="faq-help-strip">
          <div className="help-left">
            <MessageCircle size={22} />
            <div>
              <strong>Still have a question or need personalized styling advice?</strong>
              <p>Our optical specialists are available 7 days a week on WhatsApp and phone.</p>
            </div>
          </div>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-chat-btn"
          >
            Chat with Optometrist
          </a>
        </div>
      </div>
    </section>
  );
}
