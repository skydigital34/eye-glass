import React, { useState } from "react";
import { Star, CheckCircle, Quote, ThumbsUp } from "lucide-react";
import "./Testimonials.css";

const REVIEWS = [
  {
    id: 1,
    name: "Dr. Ananya Sundaram",
    role: "Verified Buyer · Chennai",
    frame: "The Olivia (Champagne)",
    stars: 5,
    date: "2 weeks ago",
    title: "Lightest frames I have ever worn!",
    review:
      "As a researcher staring at microscopes and screens all day, my nose bridge used to get terrible red marks from heavy frames. The Olivia feels virtually weightless, and the BlueShield lenses made a noticeable difference to my evening headaches.",
    helpful: 48,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 2,
    name: "Karthik Subramanian",
    role: "Verified Buyer · Bangalore",
    frame: "The Rowan (Olive Green)",
    stars: 5,
    date: "1 month ago",
    title: "Remarkable optical clarity & luxury finish",
    review:
      "Ordered online with my high cylindrical prescription (-3.75). The lenses arrived perfectly indexed, thin and without any distortion at the edges. The olive green acetate looks even more handsome in person than on the website.",
    helpful: 35,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 3,
    name: "Meera Krishnan",
    role: "Verified Buyer · Coimbatore",
    frame: "The Sol (Tortoise Sunglasses)",
    stars: 5,
    date: "3 weeks ago",
    title: "Worth every rupee. Compliments everywhere!",
    review:
      "I was skeptical about ordering polarized sunglasses online, but the build quality is on par with luxury designer brands that cost triple the price. The packaging was immaculate with a leather case and certificate.",
    helpful: 29,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    id: 4,
    name: "Siddharth Verma",
    role: "Verified Buyer · Hyderabad",
    frame: "The Eden (Rose Gold)",
    stars: 5,
    date: "Just recently",
    title: "Seamless prescription process & fast delivery",
    review:
      "Uploaded my prescription slip via WhatsApp, got optical confirmation in 10 minutes, and the glasses arrived in 4 days. The fit is rock-solid and the anti-reflective coating is fantastic for night driving.",
    helpful: 21,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  const [likes, setLikes] = useState({});

  const toggleLike = (id) => {
    setLikes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="wrap">
        <div className="reviews-header">
          <div>
            <span className="eyebrow">VERIFIED EXPERIENCES</span>
            <h2>
              Stories in Focus · <em>Loved by 15,000+ Happy Eyes</em>
            </h2>
            <p>
              Real people, genuine comfort. Read unfiltered feedback from individuals
              who made Olive their daily eyewear choice.
            </p>
          </div>

          <div className="reviews-score-badge">
            <div className="score-num">4.9</div>
            <div className="score-details">
              <div className="score-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#ffd988" color="#ffd988" />
                ))}
              </div>
              <small>Based on 2,850+ Reviews</small>
            </div>
          </div>
        </div>

        <div className="reviews-grid">
          {REVIEWS.map((rev) => {
            const isLiked = likes[rev.id];
            const currentHelpful = rev.helpful + (isLiked ? 1 : 0);

            return (
              <article key={rev.id} className="review-card">
                <div className="review-top">
                  <div className="reviewer-info">
                    <img
                      src={rev.avatar}
                      alt={rev.name}
                      className="reviewer-img"
                      loading="lazy"
                    />
                    <div>
                      <strong>{rev.name}</strong>
                      <span className="reviewer-role">
                        <CheckCircle size={12} className="verified-icon" />
                        {rev.role}
                      </span>
                    </div>
                  </div>
                  <Quote size={28} className="review-quote-icon" />
                </div>

                <div className="review-stars-row">
                  <div className="stars">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={13} fill="#b99a5b" color="#b99a5b" />
                    ))}
                  </div>
                  <span className="review-date">{rev.date}</span>
                </div>

                <h3 className="review-title">"{rev.title}"</h3>
                <p className="review-body">{rev.review}</p>

                <div className="review-footer">
                  <div className="review-purchased">
                    <small>Frame:</small>
                    <span>{rev.frame}</span>
                  </div>

                  <button
                    className={`review-helpful-btn ${isLiked ? "liked" : ""}`}
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
    </section>
  );
}
