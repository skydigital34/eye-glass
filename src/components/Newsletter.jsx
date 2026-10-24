
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

export default function Newsletter({ showNotice }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    showNotice?.("Thank you! Your message has been received.");

    setFormData({
      name: "",
      age: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-section" id="contact">

      <div className="contact-heading">
        <p className="eyebrow">GET IN TOUCH</p>

        <h2>
          Let's <em>talk.</em>
        </h2>

        <p>
          Have a question about our eyewear or optical services?
          We'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* Contact Information */}
        <div className="contact-info">
          <h3>Store &amp; Clinic Information</h3>

          <p>
            Visit our flagship clinic or reach out directly for frame styling and prescription support.
          </p>

          <div className="contact-detail">
            <Phone size={18} />
            <div>
              <small>Call Us</small>
              <a href="tel:08838289852">
                088382 89852
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <MessageCircle size={18} />
            <div>
              <small>WhatsApp</small>
              <a
                href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
              >
                88382 89852
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <Mail size={18} />
            <div>
              <small>Email</small>
              <a href="mailto:oliveyecare@gmail.com">
                oliveyecare@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin size={18} />
            <div>
              <small>Flagship Store Address</small>
              <p style={{ margin: 0, fontSize: "0.9rem", lineHeight: 1.45 }}>
                NO 99/100, Dr. Raja Road, Tatabad, Sivananda Colony,
                Coimbatore, Tamil Nadu - 641012
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <h3>Send us a message</h3>

          <div className="contact-fields">

            <div className="contact-field">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-age">Age</label>
              <input
                id="contact-age"
                type="number"
                name="age"
                placeholder="Enter your age"
                min="1"
                max="120"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-phone">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-email">
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field contact-message">
              <label htmlFor="contact-message">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="How can we help you?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <button
            type="submit"
            className="contact-submit"
          >
            Send Message <Send size={16} />
          </button>
        </form>

      </div>
    </section>
  );
}
