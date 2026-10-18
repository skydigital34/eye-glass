import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard.jsx";
import { eyeglasses, sunglasses } from "../data/products.js";
import "./CategoryPage.css";

const PAGES = {
  eyeglasses: {
    label: "Eyeglasses",
    title: "Our Eyeglasses",
    text: "Lightweight, comfortable frames designed to be worn all day. Explore our most loved styles and find the pair that feels like you.",
    items: eyeglasses,
  },
  sunglasses: {
    label: "Sunglasses",
    title: "Our Sunglasses",
    text: "Bold shapes and tinted lenses that protect your eyes. Explore our most loved styles and bring home a pair for every sunny day.",
    items: sunglasses,
  },
};

export default function CategoryPage({
  type,
  query,
  setQuery,
  wishlist,
  onWishlist,
  onAdd,
  onBuy,
}) {
  const page = PAGES[type] || PAGES.eyeglasses;
  const base = page.items;

  const [shape, setShape] = useState("All");
  const [sort, setSort] = useState("featured");

  const shapes = useMemo(
    () => ["All", ...new Set(base.map((p) => p.shape))],
    [base]
  );

  const list = useMemo(() => {
    let result = base.filter(
      (p) =>
        (shape === "All" || p.shape === shape) &&
        `${p.name} ${p.shape} ${p.color}`
          .toLowerCase()
          .includes(query.toLowerCase())
    );

    if (sort === "low") result = [...result].sort((a, b) => a.price - b.price);
    if (sort === "high") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [base, shape, sort, query]);

  return (
    <main className="shop-page">
      <section className="wrap">
        <header className="shop-head">
          <p className="shop-eyebrow">
            <i /> FEATURED COLLECTION <i />
          </p>
          <h1>{page.title}</h1>
          <p className="shop-sub">{page.text}</p>
        </header>

        <div className="shop-tabs">
          <Link
            to="/eyeglasses"
            className={type === "eyeglasses" ? "active" : ""}
          >
            Eyeglasses
          </Link>
          <span />
          <Link
            to="/sunglasses"
            className={type === "sunglasses" ? "active" : ""}
          >
            Sunglasses
          </Link>
        </div>

        <div className="shop-toolbar">
          <div className="shop-shapes">
            {shapes.map((s) => (
              <button
                key={s}
                className={shape === s ? "active" : ""}
                onClick={() => setShape(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <select
            className="shop-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            aria-label="Sort products"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {query && (
          <p className="search-status">
            Results for “{query}”{" "}
            <button onClick={() => setQuery("")}>Clear</button>
          </p>
        )}

        <div className="shop-grid">
          {list.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              wishlisted={wishlist.includes(p.id)}
              onWishlist={onWishlist}
              onAdd={onAdd}
              onBuy={onBuy}
            />
          ))}
        </div>

        {!list.length && (
          <div className="shop-empty">
            <h3>No frames found</h3>
            <button
              onClick={() => {
                setQuery("");
                setShape("All");
              }}
            >
              Show all {page.label.toLowerCase()}
            </button>
          </div>
        )}
      </section>
    </main>
  );
}