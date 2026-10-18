import React, { useState } from "react";
import { Calendar, Clock, MapPin, User, Phone, CheckCircle, Stethoscope, Home as HomeIcon } from "lucide-react";
import "./BookEyeTest.css";

export default function BookEyeTest({ showNotice }) {
  const [service, setService] = useState("clinic"); // 'clinic' | 'home'
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "Chennai",
    date: "",
    timeSlot: "Morning (10:00 AM - 1:00 PM)",
  });
  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState("");

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
      city: "Chennai",
      date: "",
      timeSlot: "Morning (10:00 AM - 1:00 PM)",
    });
  };

  return (
    <section className="book-section" id="book-test">
      <div className="wrap">
        <div className="book-card-container">
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
          </div>

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
                    {service === "clinic" ? "In-Store Comprehensive Eye Exam" : "Home Try-On & Vision Check"}
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
                <button className="book-reset-btn" onClick={resetForm}>
                  Book Another Appointment
                </button>
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
                      placeholder="+91 98765 43210"
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
                      <option value="Chennai">Chennai (T. Nagar / Anna Nagar)</option>
                      <option value="Bangalore">Bangalore (Indiranagar / Koramangala)</option>
                      <option value="Coimbatore">Coimbatore (RS Puram)</option>
                      <option value="Hyderabad">Hyderabad (Jubilee Hills)</option>
                      <option value="Mumbai">Mumbai (Bandra West)</option>
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
    </section>
  );
}
