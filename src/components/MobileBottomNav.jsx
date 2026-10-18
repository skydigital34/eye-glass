import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Glasses, Sun, Heart, ShoppingBag } from "lucide-react";
import "./MobileBottomNav.css";

export default function MobileBottomNav({
  cartCount = 0,
  wishlistCount = 0,
  onCart,
  showNotice,
}) {
  const { pathname } = useLocation();

  const handleWishlistClick = () => {
    if (showNotice) {
      showNotice(
        wishlistCount > 0
          ? `You have ${wishlistCount} frame(s) saved in your wishlist ❤️`
          : "Your wishlist is empty. Tap the heart on any frame to save it!"
      );
    }
  };

  return (
    <aside className="mobile-app-bottom-bar" aria-label="Mobile Application Navigation">
      <nav className="mobile-tab-nav">
        {/* 1. Home Tab */}
        <Link
          to="/"
          className={`mobile-tab-item ${pathname === "/" ? "active" : ""}`}
        >
          <div className="tab-icon-wrap">
            <Home size={20} strokeWidth={pathname === "/" ? 2.4 : 1.8} />
          </div>
          <span className="tab-label">Home</span>
          {pathname === "/" && <span className="tab-indicator" />}
        </Link>

        {/* 2. Eyeglasses Tab */}
        <Link
          to="/eyeglasses"
          className={`mobile-tab-item ${pathname === "/eyeglasses" ? "active" : ""}`}
        >
          <div className="tab-icon-wrap">
            <Glasses size={20} strokeWidth={pathname === "/eyeglasses" ? 2.4 : 1.8} />
          </div>
          <span className="tab-label">Optical</span>
          {pathname === "/eyeglasses" && <span className="tab-indicator" />}
        </Link>

        {/* 3. Sunglasses Tab */}
        <Link
          to="/sunglasses"
          className={`mobile-tab-item ${pathname === "/sunglasses" ? "active" : ""}`}
        >
          <div className="tab-icon-wrap">
            <Sun size={20} strokeWidth={pathname === "/sunglasses" ? 2.4 : 1.8} />
          </div>
          <span className="tab-label">Sunwear</span>
          {pathname === "/sunglasses" && <span className="tab-indicator" />}
        </Link>

        {/* 4. Wishlist Tab */}
        <button
          type="button"
          className="mobile-tab-item tab-btn"
          onClick={handleWishlistClick}
          aria-label="Wishlist"
        >
          <div className="tab-icon-wrap">
            <Heart size={20} strokeWidth={1.8} />
            {wishlistCount > 0 && (
              <span className="tab-badge wishlist-badge">{wishlistCount}</span>
            )}
          </div>
          <span className="tab-label">Saved</span>
        </button>

        {/* 5. Cart / Bag Tab */}
        <button
          type="button"
          className="mobile-tab-item tab-btn"
          onClick={onCart}
          aria-label="Shopping Bag"
        >
          <div className="tab-icon-wrap">
            <ShoppingBag size={20} strokeWidth={1.8} />
            {cartCount > 0 && (
              <span className="tab-badge cart-badge">{cartCount}</span>
            )}
          </div>
          <span className="tab-label">Bag</span>
        </button>
      </nav>
    </aside>
  );
}
