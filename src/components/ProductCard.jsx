import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import { money } from "../data/products.js";
import "./ProductCard.css";

const badgeClass = (tag = "") => {
  if (["NEW", "EVERYDAY"].includes(tag)) return "b-green";
  if (["TRENDING", "POPULAR", "LIMITED"].includes(tag)) return "b-rose";
  return "b-gold";
};

const rating = (id) => (4.5 + (id % 5) / 10).toFixed(1);

export default function ProductCard({
  product,
  wishlisted,
  onWishlist,
  onAdd,
  onBuy,
}) {
  const tag = product.tag || "";
  const link = `/product/${product.id}`;

  return (
    <article className="shop-card">
      <div className="shop-photo">
        <Link to={link} className="shop-photo-link" aria-label={product.name}>
          <img src={product.image} alt={product.name} loading="lazy" />
        </Link>

        {tag && (
          <span className={`shop-badge ${badgeClass(tag)}`}>
            {tag.charAt(0) + tag.slice(1).toLowerCase()}
          </span>
        )}

        <button
          className="shop-heart"
          onClick={() => onWishlist(product.id)}
          aria-label="Toggle wishlist"
        >
          <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="shop-info">
        <div className="shop-price">
          <b>{money(product.price)}</b>
          <del>{money(product.oldPrice)}</del>
        </div>

        <span className="shop-cat">
          {product.brand ? `${product.brand} · ${product.category}` : product.category}
        </span>

        <h3>
          <Link to={link}>
            {product.name} · {product.shape} · {product.color}
          </Link>
        </h3>

        <p className="shop-rating">
          <span>★★★★★</span> ({rating(product.id)})
        </p>

        <div className="shop-actions">
          <button className="shop-add" onClick={() => onAdd(product)}>
            <ShoppingBag size={15} /> ADD TO CART
          </button>

          {onBuy && (
            <button className="shop-buy" onClick={() => onBuy(product)}>
              BUY NOW
            </button>
          )}
        </div>
      </div>
    </article>
  );
}