import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import "./CategoryCard.css";

export default function CategoryCard({
  image,
  title,
  badge,
  count,
  text,
  cta,
  icon: Icon,
  highlights = [],
  onClick,
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
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
    <a
      ref={ref}
      href="#collection"
      className="cat-card"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      <img className="cat-img" src={image} alt={title} loading="lazy" />
      <span className="cat-overlay" />
      <span className="cat-frame" />

      {/* Floating Badge */}
      <span className="cat-badge">
        {Icon ? <Icon size={14} className="cat-badge-icon" /> : <i />}
        <span>{badge}</span>
      </span>

      {/* Glassmorphic Bottom Panel */}
      <span className="cat-panel">
        <span className="cat-panel-top">
          <strong>{title}</strong>
          <small>{count}</small>
        </span>

        {/* Highlight Feature Chips */}
        {highlights && highlights.length > 0 && (
          <span className="cat-tags">
            {highlights.map((h, i) => (
              <span key={i} className="cat-tag-chip">
                {h}
              </span>
            ))}
          </span>
        )}

        <span className="cat-text">{text}</span>

        <span className="cat-cta">
          <span>{cta}</span>
          <b>
            <ArrowRight size={15} />
          </b>
        </span>
      </span>
    </a>
  );
}