import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock,
  ShieldCheck,
  Award,
} from "lucide-react";
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

      {/* ===== FLAGSHIP SHOWROOM SECTION ===== */}
      <section className="about-store-section wrap">
        <div className="about-store-card">
          <div className="about-store-info">
            <span className="store-pill">FLAGSHIP OPTICAL BOUTIQUE</span>
            <h2>Visit Us in Coimbatore</h2>
            <p className="store-desc">
              Experience personalized frame fitting, 20-point digital optometry exams, and explore our collection of 1000+ designer spectacles and sunglasses in a warm, welcoming studio.
            </p>

            <div className="store-grid-details">
              <div className="store-detail-item">
                <MapPin className="store-icon" size={20} />
                <div>
                  <strong>Store Location</strong>
                  <p>
                    NO 99/100, DR. RAJA ROAD, TATABAD, SIVANANDA COLONY,<br />
                    COIMBATORE, TAMIL NADU - 641012
                  </p>
                </div>
              </div>

              <div className="store-detail-item">
                <Clock className="store-icon" size={20} />
                <div>
                  <strong>Store Hours</strong>
                  <p>Monday – Sunday: 9:30 AM – 9:00 PM<br />Open All 7 Days</p>
                </div>
              </div>

              <div className="store-detail-item">
                <Phone className="store-icon" size={20} />
                <div>
                  <strong>Phone Contact</strong>
                  <p><a href="tel:08838289852">088382 89852</a></p>
                </div>
              </div>

              <div className="store-detail-item">
                <MessageCircle className="store-icon" size={20} />
                <div>
                  <strong>WhatsApp Care</strong>
                  <p>
                    <a
                      href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20visit%20your%20Coimbatore%20store"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      88382 89852
                    </a>
                  </p>
                </div>
              </div>

              <div className="store-detail-item">
                <Mail className="store-icon" size={20} />
                <div>
                  <strong>Direct Email</strong>
                  <p><a href="mailto:oliveyecare@gmail.com">oliveyecare@gmail.com</a></p>
                </div>
              </div>
            </div>

            <div className="store-actions">
              <a
                href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20book%20a%20store%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="store-wa-btn"
              >
                <MessageCircle size={16} />
                <span>WhatsApp Appointment</span>
              </a>
              <a href="tel:08838289852" className="store-call-btn">
                <Phone size={15} />
                <span>Call 088382 89852</span>
              </a>
            </div>
          </div>

          <div className="about-store-map-preview">
            <div className="map-badge">
              <MapPin size={18} />
              <div>
                <strong>Olive Eye Care Flagship</strong>
                <small>Dr. Raja Road, Tatabad, Coimbatore</small>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
              alt="Olive Eye Care Coimbatore Flagship Store"
              className="store-showroom-img"
            />
          </div>
        </div>
      </section>
    </main>
  );
}