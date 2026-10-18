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
      { threshold: 0.2 }
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
        onClick();
      }}
    >
      <img className="cat-img" src={image} alt={title} />
      <span className="cat-overlay" />
      <span className="cat-frame" />

      <span className="cat-badge">
        <i /> {badge}
      </span>

      <span className="cat-panel">
        <span className="cat-panel-top">
          <strong>{title}</strong>
          <small>{count}</small>
        </span>

        <span className="cat-text">{text}</span>

        <span className="cat-cta">
          {cta}
          <b>
            <ArrowRight size={15} />
          </b>
        </span>
      </span>
    </a>
  );
}