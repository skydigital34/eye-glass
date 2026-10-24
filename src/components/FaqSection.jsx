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
    q: "What is your return and exchange policy?",
    a: "We follow a strict 'No Returns · Only Exchange' policy. If your frame doesn't fit comfortably or suit your face, you can initiate a hassle-free exchange within 7 days via WhatsApp (88382 89852). Our optometrists will help you select an alternative frame style or lens power that fits you perfectly.",
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
    a: "FREE Delivery is exclusively available for Tamil Nadu orders! For Tamil Nadu, our express dispatch reaches your doorstep in 1 to 3 Days. For all other places across India, delivery takes 7 to 10 Days via insured express courier.",
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
            href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20have%20a%20question%20about%20eyewear"
            target="_blank"
            rel="noopener noreferrer"
            className="faq-chat-btn"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
