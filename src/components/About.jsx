import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import "./About.css";

/* Number scroll-la theriyumbodhu 0 la irundhu count aagum */
function CountUp({ end, suffix = "", decimals = 0 }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setValue(end * eased);
          if (p < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  return (
    <b ref={ref}>
      {value.toFixed(decimals)}
      {suffix}
    </b>
  );
}

export default function About() {
  const bodyRef = useRef(null);

  // Scroll reveal
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="about">
      {/* ===== BANNER ===== */}
      <section className="about-banner">
        <div className="about-banner-text">
          <h1>About Us</h1>

          <nav className="about-crumb" aria-label="Breadcrumb">
            <Link to="/">HOME</Link>
            <ChevronRight size={13} />
            <span>ABOUT US</span>
          </nav>
        </div>

        <img
          className="about-banner-img"
          src="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1400&q=85"
          alt=""
        />
      </section>

      {/* ===== STORY ===== */}
      <section className="about-body wrap" ref={bodyRef}>
        <div className="about-photo">
          <span className="about-photo-block" />

          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
            alt="Smiling woman wearing glasses"
          />

          <div className="about-quote">
            <p>
              Good eyewear does more than help you see. It helps you feel
              like yourself.
            </p>
            <small>OLIVE EYE CARE</small>
          </div>
        </div>

        <div className="about-copy">
          <p className="about-eyebrow">WHO WE ARE</p>

          <h2>
            Eyewear is about confidence,
            <br />
            not just frames.
          </h2>

          <p className="about-lead">
            At Olive Eye Care we pick every frame with care, from everyday
            eyeglasses to sunglasses made for sunlit days. Thoughtful
            design, comfortable fit, and timeless style, all at honest
            prices.
          </p>

          <div className="about-feature">
            <h3>Thoughtful Design</h3>
            <p>
              Every shape and colour is chosen to suit real faces and real
              routines, light enough to forget you are wearing them.
            </p>
          </div>

          <div className="about-feature">
            <h3>Style That Lasts</h3>
            <p>
              Timeless shapes and warm tones that look good today and
              years from now, so you never need to chase trends.
            </p>
          </div>

          <Link to="/eyeglasses" className="about-btn">
            DISCOVER MORE
          </Link>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="about-stats wrap">
        <div>
          <CountUp end={1.4} decimals={1} suffix="K+" />
          <span>Frames Sold</span>
        </div>
        <div>
          <CountUp end={72} suffix="+" />
          <span>Unique Styles</span>
        </div>
        <div>
          <CountUp end={899} suffix="+" />
          <span>Happy Customers</span>
        </div>
        <div>
          <CountUp end={15} suffix="+" />
          <span>Years Experience</span>
        </div>
      </section>
    </main>
  );
}