import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Flame, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard.jsx";
import { products } from "../data/products.js";
import "./FeaturedProducts.css";

const TABS = [
  { id: "trending", label: "Trending Now", icon: Flame },
  { id: "bestsellers", label: "Best Sellers", icon: Sparkles },
  { id: "eyeglasses", label: "Everyday Eyeglasses" },
  { id: "sunglasses", label: "Sunwear Collection" },
];

export default function FeaturedProducts({
  wishlist = [],
  onWishlist,
  onAdd,
  onBuy,
}) {
  const [activeTab, setActiveTab] = useState("trending");

  const filtered = useMemo(() => {
    if (activeTab === "bestsellers") {
      return products.filter((p) => p.tag === "BESTSELLER" || p.tag === "POPULAR").slice(0, 8);
    }
    if (activeTab === "eyeglasses") {
      return products.filter((p) => p.category === "Eyeglasses").slice(0, 8);
    }
    if (activeTab === "sunglasses") {
      return products.filter((p) => p.category === "Sunglasses").slice(0, 8);
    }
    // "trending": mix of top trending & new
    return products
      .filter((p) => ["TRENDING", "BESTSELLER", "NEW"].includes(p.tag))
      .slice(0, 8);
  }, [activeTab]);

  return (
    <section className="featured-section" id="featured-products">
      <div className="wrap">
        <div className="featured-header">
          <div>
            <span className="eyebrow">HANDPICKED FAVORITES</span>
            <h2>
              Featured &amp; <em>Trending Frames</em>
            </h2>
            <p>
              Explore our most-loved silhouettes, designed for weightless comfort,
              precision clarity, and effortless everyday wear.
            </p>
          </div>

          <div className="featured-tabs">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`featured-tab ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {Icon && <Icon size={13} />}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="featured-grid">
          {filtered.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              wishlisted={wishlist.includes(product.id)}
              onWishlist={onWishlist}
              onAdd={onAdd}
              onBuy={onBuy}
            />
          ))}
        </div>

        <div className="featured-footer">
          <Link
            to={activeTab === "sunglasses" ? "/sunglasses" : "/eyeglasses"}
            className="featured-view-all"
          >
            <span>View Complete Collection</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
