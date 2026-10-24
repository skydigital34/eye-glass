import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Phone,
  CheckCircle,
  Stethoscope,
  Home as HomeIcon,
  MessageCircle,
  X,
} from "lucide-react";
import "./BookEyeTest.css";

export default function BookEyeTest({
  open,
  initialService = "home",
  onClose,
  showNotice,
}) {
  const [service, setService] = useState(initialService || "home"); // 'clinic' | 'home'
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Coimbatore (Flagship Clinic: Dr. Raja Road, Tatabad)",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

  // Sync service when initialService prop changes
  useEffect(() => {
    if (open && initialService) {
      setService(initialService);
    }
  }, [open, initialService]);

  // Lock background scroll and handle Escape key when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          onClose?.();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [open, onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      if (showNotice) showNotice("Please fill in your name and phone number");
      return;
    }

    const ref = "OLV-" + Math.floor(100000 + Math.random() * 900000);
    setBookingId(ref);
    setSubmitted(true);
    if (showNotice) {
      showNotice(`Appointment confirmed! Booking Reference: ${ref}`);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      city: "Coimbatore (Flagship Clinic: Dr. Raja Road, Tatabad)",
      date: "",
      timeSlot: "Morning (10:00 AM - 1:00 PM)",
    });
  };

  // If not open, don't show on page (veliya show aaga vendam)
  if (!open) return null;

  return (
    <div
      className="book-modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="book-modal-dialog"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Book Eye Test & Frame Try-On"
      >
        {/* Close Button */}
        <button
          type="button"
          className="book-modal-close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="book-card-container">
          {/* Left Info Column */}
          <div className="book-info-side">
            <span className="book-pill">PROFESSIONAL OPTOMETRY</span>
            <h2>
              Precision Eye Care · <em>At Your Convenience</em>
            </h2>
            <p>
              Whether you prefer a thorough in-clinic digital eye exam or trying
              curated frames in the comfort of your living room, Olive has you covered.
            </p>

            <div className="book-perks-list">
              <div className="book-perk-item">
                <div className="perk-icon-circle">
                  <Stethoscope size={18} />
                </div>
                <div>
                  <strong>Certified Optometrists</strong>
                  <p>20-point digital vision assessment &amp; eye health check.</p>
                </div>
              </div>

              <div className="book-perk-item">
                <div className="perk-icon-circle">
                  <HomeIcon size={18} />
                </div>
                <div>
                  <strong>Free Home Try-On Kit</strong>
                  <p>Pick 5 frames delivered to your home for 4 days trial.</p>
                </div>
              </div>

              <div className="book-perk-item">
                <div className="perk-icon-circle">
                  <Clock size={18} />
                </div>
                <div>
                  <strong>Zero Waiting Time</strong>
                  <p>Reserved slot with personalized frame styling consultation.</p>
                </div>
              </div>
            </div>

            {/* Direct Coimbatore Clinic Contact Strip */}
            <div className="book-clinic-quick-contact">
              <div className="clinic-contact-head">
                <MapPin size={15} />
                <span>Flagship Coimbatore Center</span>
              </div>
              <p>
                No 99/100, Dr. Raja Road, Tatabad, Sivananda Colony, Coimbatore - 641012
              </p>
              <div className="clinic-contact-links">
                <a href="tel:08838289852">
                  <Phone size={13} /> Call: 088382 89852
                </a>
                <a
                  href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20book%20an%20eye%20test"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={14} /> WhatsApp: 88382 89852
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="book-form-side">
            {submitted ? (
              <div className="book-success-box">
                <div className="success-icon-wrap">
                  <CheckCircle size={44} />
                </div>
                <h3>Appointment Booked!</h3>
                <p className="success-ref">
                  Booking Reference: <strong>{bookingId}</strong>
                </p>
                <div className="success-details">
                  <p>
                    <strong>Service:</strong>{" "}
                    {service === "clinic"
                      ? "In-Store Comprehensive Eye Exam"
                      : "Home Try-On & Vision Check"}
                  </p>
                  <p>
                    <strong>Customer:</strong> {formData.name} ({formData.phone})
                  </p>
                  <p>
                    <strong>Location:</strong> {formData.city} · {formData.timeSlot}
                  </p>
                </div>
                <p className="success-note">
                  Our optometry coordinator will call you within 2 hours to confirm your slot.
                </p>
                <div className="success-actions-row">
                  <button type="button" className="book-reset-btn" onClick={resetForm}>
                    Book Another Appointment
                  </button>
                  <button
                    type="button"
                    className="book-modal-done-btn"
                    onClick={onClose}
                  >
                    Done &amp; Close
                  </button>
                </div>
              </div>
            ) : (
              <form className="book-form" onSubmit={handleSubmit}>
                <h3>Schedule Your Visit</h3>
                <p className="form-sub">100% Free · No purchase obligation</p>

                {/* Service Selection Toggle */}
                <div className="service-toggle-group">
                  <button
                    type="button"
                    className={`service-btn ${service === "clinic" ? "active" : ""}`}
                    onClick={() => setService("clinic")}
                  >
                    <Stethoscope size={15} />
                    <span>Store Eye Exam</span>
                  </button>

                  <button
                    type="button"
                    className={`service-btn ${service === "home" ? "active" : ""}`}
                    onClick={() => setService("home")}
                  >
                    <HomeIcon size={15} />
                    <span>Home Try-On (5 Frames)</span>
                  </button>
                </div>

                <div className="form-grid">
                  <div className="form-field">
                    <label>
                      <User size={13} /> Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label>
                      <Phone size={13} /> Mobile Number
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="88382 89852"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label>
                      <MapPin size={13} /> City / Center
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                    >
                      <option value="Coimbatore (Flagship Clinic: Dr. Raja Road, Tatabad)">
                        Coimbatore (Flagship Clinic: Dr. Raja Road, Tatabad)
                      </option>
                      <option value="Coimbatore (Home Eye Test & 5-Frame Try-On)">
                        Coimbatore (Free Home Eye Test & 5-Frame Try-On)
                      </option>
                      <option value="Coimbatore (Sivananda Colony / Gandhipuram)">
                        Coimbatore (Sivananda Colony / Gandhipuram)
                      </option>
                      <option value="Coimbatore (RS Puram / Saibaba Colony)">
                        Coimbatore (RS Puram / Saibaba Colony)
                      </option>
                      <option value="Other Locations">Other Tamil Nadu Center</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>
                      <Calendar size={13} /> Preferred Slot
                    </label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) =>
                        setFormData({ ...formData, timeSlot: e.target.value })
                      }
                    >
                      <option value="Morning (10:00 AM - 1:00 PM)">
                        Morning (10:00 AM - 1:00 PM)
                      </option>
                      <option value="Afternoon (1:00 PM - 5:00 PM)">
                        Afternoon (1:00 PM - 5:00 PM)
                      </option>
                      <option value="Evening (5:00 PM - 8:30 PM)">
                        Evening (5:00 PM - 8:30 PM)
                      </option>
                    </select>
                  </div>
                </div>

                <button type="submit" className="book-submit-btn">
                  Confirm Free Appointment
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
