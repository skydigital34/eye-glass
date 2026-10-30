import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Search,
  ShoppingBag,
  User,
  ChevronDown,
  Menu,
  X,
  Truck,
} from "lucide-react";
import MobileAppDrawer from "./MobileAppDrawer.jsx";
import BrandLogo from "./BrandLogo.jsx";
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
  const [searchExpanded, setSearchExpanded] = useState(false);

  // Scroll spy (home page only)
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

  return (
    <>
      {/* Top Highlighted Delivery Announcement Banner */}
      <div className="olive-top-delivery-bar" role="region" aria-label="Delivery Information">
        <div className="top-delivery-wrap">
          <div className="delivery-free-highlight-pill">
            <Truck size={14} className="truck-pulse-icon" />
            <span className="free-badge-text">FREE DELIVERY AVAILABLE IN TAMIL NADU</span>
          </div>

          <div className="delivery-times-group">
            <span className="delivery-time-item tn-item">
              <span className="live-dot-pulse" />
              <span>Tamil Nadu Delivery Time: <strong>1 to 3 Days</strong></span>
            </span>

            <span className="delivery-sep-dot" aria-hidden="true">•</span>

            <span className="delivery-time-item india-item">
              <span>All other places in India: <strong>7 to 10 Days</strong></span>
            </span>
          </div>
        </div>
      </div>

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

        {/* Brand Logo - Official Store Logo Image */}
        <Link className="olive-luxury-brand" to="/" aria-label="Olive Eye Care Home">
          <img
            src="/image copy 2.png"
            alt="Olive Eye Care - The Branch Of New Style"
            className="olive-navbar-logo-img"
          />
        </Link>

        {/* Desktop Navigation Links matching Mockup */}
        <nav className="olive-luxury-nav">
          <Link
            to="/"
            className={`olive-nav-link ${isHome && activeSection === "home" ? "active" : ""}`}
          >
            Home
          </Link>

          {/* Eyewear Dropdown */}
          <div className="nav-dropdown-item">
            <button type="button" className="olive-nav-link dropdown-trigger">
              <span>Eyewear</span>
              <ChevronDown size={14} className="dropdown-chevron" />
            </button>
            <div className="nav-dropdown-menu">
              <Link to="/eyeglasses">Eyeglasses</Link>
              <Link to="/sunglasses">Sunglasses</Link>
              <Link to="/contact-lenses">Contact Lenses</Link>
              <a href="/#brands">Our Brands</a>
            </div>
          </div>

          {/* Eye Care Dropdown */}
          <div className="nav-dropdown-item">
            <button type="button" className="olive-nav-link dropdown-trigger">
              <span>Eye Care</span>
              <ChevronDown size={14} className="dropdown-chevron" />
            </button>
            <div className="nav-dropdown-menu">
              <a href="/#brands">Our Brands</a>
              <a href="/#face-shape-guide">Face Shape Guide</a>
              <a href="/#book-test">Book Eye Exam</a>
            </div>
          </div>

          <Link
            to="/about"
            className={`olive-nav-link ${pathname === "/about" ? "active" : ""}`}
          >
            About Us
          </Link>

          <a href="#contact" className="olive-nav-link">
            Contact
          </a>
        </nav>

        {/* Desktop & Mobile Actions */}
        <div className="olive-nav-actions">
          {/* Desktop Expandable Search */}
          <div className={`olive-search-box ${searchExpanded ? "expanded" : ""}`}>
            <button
              type="button"
              className="search-icon-btn"
              onClick={() => setSearchExpanded(!searchExpanded)}
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.8} />
            </button>
            <input
              aria-label="Search frames"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && onSearch()}
            />
          </div>

          {/* Mobile Search Toggle Button */}
          <button
            type="button"
            className="olive-mobile-search-toggle"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Toggle Search"
          >
            {mobileSearchOpen ? <X size={21} /> : <Search size={21} />}
          </button>

          {/* User Account Button */}
          <button
            type="button"
            className="olive-icon-button olive-desktop-only"
            aria-label="Account"
            onClick={() => alert("Welcome to Olive Eye Care!")}
          >
            <User size={22} strokeWidth={1.8} />
          </button>

          {/* Cart Bag Button with Dark Olive Pill Badge */}
          <button
            type="button"
            className="olive-icon-button"
            aria-label="Shopping bag"
            onClick={onCart}
          >
            <ShoppingBag size={22} strokeWidth={1.8} />
            <span className="olive-count">{cartCount}</span>
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