import React, { useState, useMemo } from "react";
import {
  Star,
  CheckCircle2,
  Quote,
  ThumbsUp,
  Glasses,
  ShieldCheck,
  MapPin,
  MessageSquarePlus,
  X,
  Send,
  Sparkles,
} from "lucide-react";
import "./Testimonials.css";

const ALL_REVIEWS = [
  {
    id: 1,
    name: "Dr. Ananya Sundaram",
    role: "Verified Buyer · Tatabad, Coimbatore",
    city: "coimbatore",
    category: "blue-light",
    frame: "The Olivia (Champagne)",
    stars: 5,
    date: "2 weeks ago",
    title: "Lightest frames I have ever worn!",
    review:
      "As a researcher staring at microscopes and screens all day, my nose bridge used to get terrible red marks from heavy frames. The Olivia feels virtually weightless, and the BlueShield lenses made an instant difference to my evening eye fatigue and headaches.",
    helpful: 52,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    badge: "BlueShield™ Computer Lens",
  },
  {
    id: 2,
    name: "Karthik Subramanian",
    role: "Verified Buyer · Bangalore",
    city: "other",
    category: "prescription",
    frame: "The Rowan (Olive Green)",
    stars: 5,
    date: "1 month ago",
    title: "Remarkable optical clarity & luxury finish",
    review:
      "Ordered with my high cylindrical prescription (-3.75). The lenses arrived perfectly indexed, thin and without any distortion at the edges. The olive green acetate looks even more handsome in person than on the website. Truly world-class craftsmanship.",
    helpful: 38,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    badge: "High Index 1.67",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    role: "Verified Buyer · Sivananda Colony, Coimbatore",
    city: "coimbatore",
    category: "sunglasses",
    frame: "The Sol (Tortoise Sunglasses)",
    stars: 5,
    date: "3 weeks ago",
    title: "Worth every rupee. Visited their Tatabad studio!",
    review:
      "I was skeptical about ordering polarized sunglasses, but the build quality is on par with luxury designer brands that cost triple the price. Visited their Coimbatore flagship store on Dr. Raja Road — optometrists were super patient, hospitable and accurate.",
    helpful: 44,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    badge: "Polarized UV400",
  },
  {
    id: 4,
    name: "Siddharth Verma",
    role: "Verified Buyer · Hyderabad",
    city: "other",
    category: "prescription",
    frame: "The Eden (Rose Gold)",
    stars: 5,
    date: "Just recently",
    title: "Seamless WhatsApp prescription & 4-day delivery",
    review:
      "Uploaded my doctor prescription slip via WhatsApp, got optical confirmation in 10 minutes, and the glasses arrived in 4 days. The fit is rock-solid and the anti-reflective coating is fantastic for night driving.",
    helpful: 29,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    badge: "UltraClear™ AR Coating",
  },
  {
    id: 5,
    name: "Priya Ramanathan",
    role: "Verified Buyer · RS Puram, Coimbatore",
    city: "coimbatore",
    category: "blue-light",
    frame: "The Aero Titanium (Matte Black)",
    stars: 5,
    date: "5 days ago",
    title: "Pure comfort for 10-hour screen workdays",
    review:
      "I teach online courses and write daily. Switching to Olive titanium frames with blue light filters stopped my dry eye symptoms completely. Light as a feather and looks very stylish during video calls.",
    helpful: 33,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    badge: "Japanese Pure Titanium",
  },
  {
    id: 6,
    name: "Vigneshwaran R.",
    role: "Verified Buyer · Gandhipuram, Coimbatore",
    city: "coimbatore",
    category: "sunglasses",
    frame: "The Classic Pilot (Gold & Forest Green)",
    stars: 5,
    date: "1 week ago",
    title: "Night driving and sunny road trips sorted!",
    review:
      "Got photochromic transition lenses fitted in a classic aviator frame. Transitions into dark UV tint outdoors within 30 seconds and clears back indoors instantly. Excellent aftercare service from the Coimbatore store team.",
    helpful: 26,
    avatar:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80",
    badge: "Intelligent Photochromic",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Reviews", count: "2,850+" },
  { id: "coimbatore", label: "Coimbatore Studio", count: "1,200+" },
  { id: "blue-light", label: "BlueShield Lenses", count: "940+" },
  { id: "prescription", label: "Prescription Glasses", count: "810+" },
  { id: "sunglasses", label: "Polarized Sunglasses", count: "650+" },
];

export default function Testimonials({ showNotice }) {
  const [activeTab, setActiveTab] = useState("all");
  const [likes, setLikes] = useState({});
  const [writeModalOpen, setWriteModalOpen] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    city: "Coimbatore",
    frame: "",
    rating: 5,
    title: "",
    comment: "",
  });

  const toggleLike = (id) => {
    const isLiked = !likes[id];
    setLikes((prev) => ({
      ...prev,
      [id]: isLiked,
    }));
    if (showNotice) {
      showNotice(isLiked ? "Marked review as helpful 👍" : "Removed helpful vote");
    }
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.comment) {
      if (showNotice) showNotice("Please fill in your name and review");
      return;
    }
    setWriteModalOpen(false);
    if (showNotice) {
      showNotice("Thank you for your review! It has been submitted for verification.");
    }
    setReviewForm({
      name: "",
      city: "Coimbatore",
      frame: "",
      rating: 5,
      title: "",
      comment: "",
    });
  };

  const filteredReviews = ALL_REVIEWS.filter((item) => {
    if (activeTab === "all") return true;
    if (activeTab === "coimbatore") return item.city === "coimbatore";
    return item.category === activeTab;
  });

  const marqueeReviews = useMemo(() => {
    let list = filteredReviews;
    if (!list || list.length === 0) list = ALL_REVIEWS;
    while (list.length < 8) {
      list = [...list, ...filteredReviews];
    }
    return [...list, ...list];
  }, [filteredReviews]);

  return (
    <section className="reviews-section" id="reviews">
      {/* Decorative corner leaves matching our top sections */}
      <img
        src="/cat_leaf_tl.png"
        alt=""
        className="reviews-leaf-tl"
        aria-hidden="true"
      />
      <img
        src="/cat_leaf_br.png"
        alt=""
        className="reviews-leaf-br"
        aria-hidden="true"
      />

      <div className="wrap">
        {/* Section Header */}
        <div className="reviews-header">
          <div className="reviews-header-left">
            <div className="reviews-eyebrow-container">
              <span className="reviews-eyebrow-line" />
              <span className="reviews-eyebrow-text">
                VERIFIED CUSTOMER STORIES
              </span>
              <span className="reviews-eyebrow-line" />
            </div>

            <h2 className="reviews-title">
              Stories in Focus · <em>Loved by 15,000+ Happy Eyes</em>
            </h2>

            <p className="reviews-subtitle">
              Real people, genuine comfort. Read unfiltered feedback from customers who made Olive Eye Care their daily eyewear destination.
            </p>
          </div>

          {/* Luxury Score Summary Card */}
          <div className="reviews-score-card">
            <div className="score-top-row">
              <div className="score-big">4.9</div>
              <div className="score-meta">
                <div className="score-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#eab308" color="#eab308" />
                  ))}
                </div>
                <span className="score-label">Based on 2,850+ Verified Reviews</span>
              </div>
            </div>

            <div className="score-pillars">
              <div className="score-pillar-item">
                <ShieldCheck size={14} />
                <span>99.8% Prescription Accuracy</span>
              </div>
              <div className="score-pillar-item">
                <MapPin size={14} />
                <span>Flagship Tatabad, Coimbatore Clinic</span>
              </div>
            </div>

            <button
              type="button"
              className="write-review-trigger-btn"
              onClick={() => setWriteModalOpen(true)}
            >
              <MessageSquarePlus size={15} />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="reviews-filter-strip">
          <div className="filter-tabs-scroll">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filter-tab-pill ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="tab-count">{tab.count}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Infinite Single-Line Marquee Viewport */}
      <div className="reviews-marquee-wrapper">
        <div className="reviews-marquee-viewport">
          <div className="reviews-marquee-track" key={activeTab}>
            {marqueeReviews.map((rev, idx) => {
              const isLiked = likes[rev.id];
              const currentHelpful = rev.helpful + (isLiked ? 1 : 0);

              return (
                <article key={`${rev.id}-${idx}`} className="modern-review-card marquee-card">
                  {/* Background Watermark Quote */}
                  <Quote size={52} className="card-watermark-quote" aria-hidden="true" />

                  {/* Reviewer Header */}
                  <div className="card-reviewer-header">
                    <div className="reviewer-avatar-wrap">
                      <img
                        src={rev.avatar}
                        alt={rev.name}
                        className="reviewer-avatar-img"
                        loading="lazy"
                      />
                      <span className="avatar-online-dot" />
                    </div>

                    <div className="reviewer-info-body">
                      <div className="reviewer-name-row">
                        <strong>{rev.name}</strong>
                        <span className="verified-badge">
                          <CheckCircle2 size={12} />
                          <span>Verified Buyer</span>
                        </span>
                      </div>
                      <div className="reviewer-meta-sub">
                        <span>{rev.role}</span>
                        <span className="meta-dot">·</span>
                        <span className="review-time">{rev.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Rating & Feature Badge */}
                  <div className="card-rating-badge-row">
                    <div className="stars-cluster">
                      {[...Array(rev.stars)].map((_, i) => (
                        <Star key={i} size={14} fill="#eab308" color="#eab308" />
                      ))}
                      <span className="numeric-rating">5.0</span>
                    </div>

                    <span className="lens-feature-badge">
                      <Sparkles size={11} />
                      <span>{rev.badge}</span>
                    </span>
                  </div>

                  {/* Review Content */}
                  <h3 className="card-review-title">"{rev.title}"</h3>
                  <p className="card-review-text">{rev.review}</p>

                  {/* Card Footer: Frame Specs & Helpful Button */}
                  <div className="card-footer-strip">
                    <div className="purchased-frame-tag">
                      <Glasses size={14} className="frame-icon" />
                      <span className="frame-label">Frame:</span>
                      <strong className="frame-name">{rev.frame}</strong>
                    </div>

                    <button
                      type="button"
                      className={`helpful-btn ${isLiked ? "liked" : ""}`}
                      onClick={() => toggleLike(rev.id)}
                      aria-label="Mark review as helpful"
                    >
                      <ThumbsUp size={13} />
                      <span>Helpful ({currentHelpful})</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Marquee Interactive Info Badge */}
        <div className="marquee-interaction-hint">
          <span className="hint-pulse-dot" />
          <span>Continuous Live Review Stream · <strong>Hover over any review to pause &amp; read</strong></span>
        </div>
      </div>

      <div className="wrap">
        {/* Bottom Trust Guarantee Strip */}
        <div className="reviews-trust-banner">
          <div className="trust-item">
            <div className="trust-icon-circle">
              <ShieldCheck size={20} />
            </div>
            <div>
              <strong>100% Genuine Certified Optical Lenses</strong>
              <small>Calibrated to German &amp; Japanese optical precision standards</small>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <div className="trust-icon-circle">
              <MapPin size={20} />
            </div>
            <div>
              <strong>Flagship Coimbatore Experience Studio</strong>
              <small>Dr. Raja Road, Tatabad · Open 7 Days with Certified Optometrists</small>
            </div>
          </div>

          <div className="trust-divider" />

          <div className="trust-item">
            <div className="trust-icon-circle">
              <Glasses size={20} />
            </div>
            <div>
              <strong>1-Year Frame &amp; Coating Guarantee</strong>
              <small>Complimentary ultrasonic cleanings &amp; screw alignments forever</small>
            </div>
          </div>
        </div>
      </div>

      {/* Write a Review Popup Modal */}
      {writeModalOpen && (
        <div
          className="write-review-backdrop"
          onClick={() => setWriteModalOpen(false)}
        >
          <div
            className="write-review-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              type="button"
              className="write-modal-close"
              onClick={() => setWriteModalOpen(false)}
            >
              <X size={18} />
            </button>

            <div className="write-modal-head">
              <span className="write-modal-eyebrow">SHARE YOUR FEEDBACK</span>
              <h3>Write a Customer Review</h3>
              <p>Your honest experience helps fellow spectacles &amp; sunglasses wearers choose their perfect frames.</p>
            </div>

            <form onSubmit={handleReviewSubmit} className="write-review-form">
              <div className="form-field-row">
                <div className="modal-input-field">
                  <label>Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meera Raman"
                    value={reviewForm.name}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, name: e.target.value })
                    }
                  />
                </div>

                <div className="modal-input-field">
                  <label>City / Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Coimbatore, Tamil Nadu"
                    value={reviewForm.city}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, city: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="form-field-row">
                <div className="modal-input-field">
                  <label>Frame Model (Optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. The Olivia / Ray-Ban Aviator"
                    value={reviewForm.frame}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, frame: e.target.value })
                    }
                  />
                </div>

                <div className="modal-input-field">
                  <label>Overall Rating</label>
                  <div className="rating-selector-stars">
                    {[1, 2, 3, 4, 5].map((starVal) => (
                      <button
                        key={starVal}
                        type="button"
                        className={`star-select-btn ${starVal <= reviewForm.rating ? "active" : ""}`}
                        onClick={() =>
                          setReviewForm({ ...reviewForm, rating: starVal })
                        }
                      >
                        <Star size={20} fill={starVal <= reviewForm.rating ? "#eab308" : "none"} color="#eab308" />
                      </button>
                    ))}
                    <span className="rating-tag-label">{reviewForm.rating}.0 Stars</span>
                  </div>
                </div>
              </div>

              <div className="modal-input-field">
                <label>Headline / Short Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Incredibly comfortable for screen work"
                  value={reviewForm.title}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, title: e.target.value })
                  }
                />
              </div>

              <div className="modal-input-field">
                <label>Your Review *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about the frame fit, lens clarity, and store experience..."
                  value={reviewForm.comment}
                  onChange={(e) =>
                    setReviewForm({ ...reviewForm, comment: e.target.value })
                  }
                />
              </div>

              <button type="submit" className="submit-review-btn">
                <span>Submit Verified Review</span>
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
