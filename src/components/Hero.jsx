import React, { useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import gsap from "gsap";
import "./Hero.css";

/* ---- Slides: image, text, product card — inga maathikalaam ---- */
const SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "THOUGHTFULLY CHOSEN EYEWEAR",
    line1: "See better.",
    line2: "Look better.",
    text: "Everyday frames, considered details, and a little more confidence in every look.",
    product: "The Sol",
    type: "Sunglasses · Cat-eye",
    price: "₹1,899",
  },
  {
    image:
      "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "MADE FOR SUNLIT DAYS",
    line1: "Own the",
    line2: "golden hour.",
    text: "Sunglasses that protect your eyes and finish every outfit, from morning walks to late sunsets.",
    product: "The Mira",
    type: "Sunglasses · Aviator",
    price: "₹2,199",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "THE EVERYDAY EDIT",
    line1: "Frames that",
    line2: "feel like you.",
    text: "Lightweight, comfortable eyeglasses designed to be worn all day without a second thought.",
    product: "The Olivia",
    type: "Eyeglasses · Round",
    price: "₹2,499",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=2200&q=90",
    eyebrow: "A CLEARER KIND OF STYLE",
    line1: "Less fuss.",
    line2: "More you.",
    text: "Timeless shapes and warm olive tones, made to look good today and years from now.",
    product: "The Rowan",
    type: "Eyeglasses · Square",
    price: "₹2,799",
  },
];

const SLIDE_SECONDS = 6;

export default function Hero({ scrollToProducts }) {
  const heroRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const slide = SLIDES[index];

  // Floating gold particles (random once)
  const particles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        duration: 9 + Math.random() * 10,
        delay: -Math.random() * 18,
      })),
    []
  );

  // Text animation every time the slide changes
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ohero-reveal",
        { yPercent: 115 },
        { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.12 }
      );

      gsap.fromTo(
        ".ohero-fade",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          delay: 0.35,
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [index]);

  // Mouse parallax
  const onMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(".ohero-bg", {
      x: x * -34,
      y: y * -22,
      duration: 1.2,
      ease: "power2.out",
      overwrite: "auto",
    });

    gsap.to(".ohero-card", {
      x: x * 22,
      y: y * 16,
      duration: 1.2,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const goNext = () => setIndex((i) => (i + 1) % SLIDES.length);

  return (
    <section
      className={`ohero ${paused ? "paused" : ""}`}
      id="home"
      ref={heroRef}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      <div className="ohero-bg">
        {SLIDES.map((s, i) => (
          <div
            key={s.image}
            className={`ohero-slide ${i === index ? "active" : ""}`}
          >
            <img src={s.image} alt="" />
          </div>
        ))}
      </div>

      <div className="ohero-shade" />
      <div className="ohero-glow" />

      <div className="ohero-particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.duration}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="ohero-inner">
        <div className="ohero-copy" key={index}>
          <p className="ohero-eyebrow ohero-fade">
            <i /> {slide.eyebrow}
          </p>

          <h1 className="ohero-title">
            <span className="ohero-mask">
              <span className="ohero-reveal">{slide.line1}</span>
            </span>
            <span className="ohero-mask">
              <span className="ohero-reveal">
                <em>{slide.line2}</em>
              </span>
            </span>
          </h1>

          <p className="ohero-text ohero-fade">{slide.text}</p>

          <div className="ohero-actions ohero-fade">
            <button className="ohero-btn-primary" onClick={scrollToProducts}>
              Explore the collection
              <ArrowUpRight size={17} />
            </button>

            <a className="ohero-btn-ghost" href="#story">
              Our story
            </a>
          </div>
        </div>

        {/* Floating glass card */}
        <div className="ohero-card">
          <div className="ohero-card-float" key={index}>
            <small>FEATURED FRAME</small>
            <strong>{slide.product}</strong>
            <span>{slide.type}</span>

            <div className="ohero-card-row">
              <b>{slide.price}</b>
              <button onClick={scrollToProducts} aria-label="Shop this frame">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="ohero-bottom">
        <div className="ohero-controls">
          <span className="ohero-count">
            0{index + 1} <em>/ 0{SLIDES.length}</em>
          </span>

          <div className="ohero-dots">
            {SLIDES.map((s, i) => (
              <button
                key={s.image}
                className={`ohero-dot ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Show slide ${i + 1}`}
              >
                {i === index && (
                  <span
                    className="ohero-dot-fill"
                    style={{ animationDuration: `${SLIDE_SECONDS}s` }}
                    onAnimationEnd={goNext}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="ohero-stats">
          <div>
            <b>24+</b>
            <span>Curated frames</span>
          </div>
          <div>
            <b>All day</b>
            <span>Comfort fit</span>
          </div>
          <div>
            <b>Easy</b>
            <span>Delivery</span>
          </div>
        </div>

        <button className="ohero-scroll" onClick={scrollToProducts}>
          Scroll <ChevronDown size={16} />
        </button>
      </div>
    </section>
  );
}