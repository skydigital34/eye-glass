import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Eye,
  Search,
  ShoppingBag,
  Heart,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import MobileAppDrawer from "./MobileAppDrawer.jsx";
import "./Navbar.css";

export default function Navbar({
  query,
  setQuery,
  cartCount,
  wishlistCount,
  onCart,
  onShop,
  onSearch,
}) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [activeSection, setActiveSection] = useState("home");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // Scroll spy (home page la mattum)
  useEffect(() => {
    if (!isHome) return;

    const ids = ["home", "categories", "story", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isHome]);

  const cls = (active) => `olive-nav-link ${active ? "active" : ""}`;

  return (
    <>
      <header className="olive-luxury-header">
        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="olive-mobile-menu-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open Navigation Menu"
        >
          <Menu size={24} />
        </button>

        {/* Brand Logo */}
        <Link className="olive-luxury-brand" to="/">
          <span className="olive-logo-icon">
            <Eye size={28} strokeWidth={1.5} />
          </span>

          <span className="olive-logo-text">
            <strong>OLIVE</strong>
            <small>EYE CARE</small>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="olive-luxury-nav">
          <Link to="/" className={cls(isHome && activeSection === "home")}>
            HOME
          </Link>

          <Link to="/eyeglasses" className={cls(pathname === "/eyeglasses")}>
            EYEGLASSES
          </Link>

          <Link to="/sunglasses" className={cls(pathname === "/sunglasses")}>
            SUNGLASSES
          </Link>

          <a href="/#face-shape-guide" className="olive-nav-link">
            FACE GUIDE
          </a>

          <a href="/#lens-guide" className="olive-nav-link">
            LENSES
          </a>

          <a href="/#book-test" className="olive-nav-link">
            BOOK EXAM
          </a>

          <Link to="/about" className={cls(pathname === "/about")}>
            ABOUT
          </Link>
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="olive-nav-actions">
          {/* Desktop Search */}
          <label className="olive-search-box">
            <Search size={18} />
            <input
              aria-label="Search frames"
              placeholder="Search frames..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
          </label>

          {/* Mobile Search Toggle Button */}
          <button
            type="button"
            className="olive-mobile-search-toggle"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Toggle Search"
          >
            {mobileSearchOpen ? <X size={21} /> : <Search size={21} />}
          </button>

          {/* Wishlist Button */}
          <button
            type="button"
            className="olive-icon-button olive-desktop-only"
            aria-label="Wishlist"
            onClick={() => alert(`${wishlistCount} item(s) in wishlist`)}
          >
            <Heart size={24} strokeWidth={1.8} />
            <span className="olive-count wishlist-count">{wishlistCount}</span>
          </button>

          {/* Cart Bag Button */}
          <button
            type="button"
            className="olive-icon-button"
            aria-label="Shopping bag"
            onClick={onCart}
          >
            <ShoppingBag size={24} strokeWidth={1.8} />
            <span className="olive-count">{cartCount}</span>
          </button>

          {/* Desktop Shop Button */}
          <button
            type="button"
            className="olive-shop-button olive-desktop-only"
            onClick={onShop}
          >
            SHOP NOW
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Expandable Mobile Search Bar */}
        {mobileSearchOpen && (
          <div className="olive-mobile-search-bar">
            <Search size={17} />
            <input
              autoFocus
              aria-label="Search frames"
              placeholder="Search by frame name, shape or color..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSearch();
                  setMobileSearchOpen(false);
                }
              }}
            />
            {query && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setQuery("")}
              >
                Clear
              </button>
            )}
          </div>
        )}
      </header>

      {/* Slide-out Mobile App Drawer */}
      <MobileAppDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </>
  );
}