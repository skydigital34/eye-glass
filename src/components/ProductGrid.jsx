import React from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({
  products,
  category,
  setCategory,
  query,
  setQuery,
  wishlist,
  onWishlist,
  onAdd,
  onBuy,
  eyebrow = "THE OLIVE EDIT",
  title = (
    <>
      Everyday <em>favourites.</em>
    </>
  ),
  filterOptions = ["All", "Eyeglasses", "Sunglasses"],
  activeFilter = category,
  onFilterChange = setCategory,
  sort,
  onSort,
  onReset,
}) {
  const reset =
    onReset ||
    (() => {
      setQuery("");
      if (setCategory) setCategory("All");
    });

  return (
    <section className="collection wrap" id="collection">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2>{title}</h2>
        </div>

        <div className="filters">
          {filterOptions.map((c) => (
            <button
              className={activeFilter === c ? "active" : ""}
              key={c}
              onClick={() => onFilterChange(c)}
            >
              {c}
            </button>
          ))}

          {onSort && (
            <select
              className="cpage-sort"
              value={sort}
              onChange={(e) => onSort(e.target.value)}
              aria-label="Sort products"
            >
              <option value="featured">Featured</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          )}
        </div>
      </div>

      {query && (
        <p className="search-status">
          Results for “{query}”{" "}
          <button onClick={() => setQuery("")}>Clear</button>
        </p>
      )}

      <div className="products">
        {products.map((p) => (
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

      {!products.length && (
        <div className="empty">
          <Search />
          <h3>No frames found</h3>
          <button onClick={reset}>View all frames</button>
        </div>
      )}
    </section>
  );
}