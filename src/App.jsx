import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Truck,
  ArrowUpRight,
  Glasses,
  Sun,
  Droplets,
  MessageCircle,
} from "lucide-react";
import About from "./components/About.jsx";
import AboutSection from "./components/AboutSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Checkout from "./components/Checkout.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import FaceShapeGuide from "./components/FaceShapeGuide.jsx";
import LensGuide from "./components/LensGuide.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import BookEyeTest from "./components/BookEyeTest.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FaqSection from "./components/FaqSection.jsx";
import InstagramShowcase from "./components/InstagramShowcase.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
import Preloader from "./components/Preloader.jsx";
import { products as allProducts } from "./data/products.js";

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const t = setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: "smooth" });
      }, 60);
      return () => clearTimeout(t);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

/* ---------------- HOME PAGE ---------------- */
function Home({
  scrollToCategories,
  showNotice,
  wishlist = [],
  onWishlist,
  onAdd,
  onBuy,
  onBookAppointment,
}) {
  const navigate = useNavigate();

  return (
    <main>
      <Hero scrollToProducts={scrollToCategories} />

      {/* Handpicked Categories Section */}
      <section className="cats" id="categories">
        {/* Decorative corner leaves & soft curve */}
        <img
          src="/cat_leaf_tl.png"
          alt=""
          className="cats-leaf-tl"
          aria-hidden="true"
        />
        <img
          src="/cat_curve_bl.png"
          alt=""
          className="cats-curve-bl"
          aria-hidden="true"
        />
        <img
          src="/cat_leaf_br.png"
          alt=""
          className="cats-leaf-br"
          aria-hidden="true"
        />

        <div className="wrap">
          {/* Section Header matching mockup 1:1 */}
          <div className="cats-head">
            <div className="cats-eyebrow-container">
              <span className="cats-eyebrow-line" />
              <span className="cats-eyebrow-text">
                PREMIUM EYE CARE COLLECTION
              </span>
              <span className="cats-eyebrow-line" />
            </div>

            <h2 className="cats-title">
              Eyeglasses, Sunglasses <span className="cats-amp">&amp;</span> Contact Lenses
            </h2>

            <p className="cats-subtitle">
              Style your vision. See a better tomorrow.
            </p>
          </div>

          {/* 3 Interactive Cards matching mockup 1:1 */}
          <div className="cats-grid">
            {/* Card 1: Eyeglasses */}
            <a
              href="#eyeglasses"
              className="cat-showcase-card"
              onClick={(e) => {
                e.preventDefault();
                navigate("/eyeglasses");
              }}
              aria-label="Explore Eyeglasses collection"
            >
              <img
                src="/cat_card_eyeglasses.png"
                alt="Eyeglasses - Everyday Essential"
                className="cat-showcase-img"
              />
              <span className="cat-card-hover-border" />
            </a>

            {/* Card 2: Sunglasses */}
            <a
              href="#sunglasses"
              className="cat-showcase-card"
              onClick={(e) => {
                e.preventDefault();
                navigate("/sunglasses");
              }}
              aria-label="Explore Sunglasses collection"
            >
              <img
                src="/cat_card_sunglasses.png"
                alt="Sunglasses - Trending Style"
                className="cat-showcase-img"
              />
              <span className="cat-card-hover-border" />
            </a>

            {/* Card 3: Contact Lenses */}
            <a
              href="#contact-lenses"
              className="cat-showcase-card"
              onClick={(e) => {
                e.preventDefault();
                navigate("/contact-lenses");
              }}
              aria-label="Explore Contact Lenses collection"
            >
              <img
                src="/cat_card_contactlenses.png"
                alt="Contact Lenses - Clearer Vision"
                className="cat-showcase-img"
              />
              <span className="cat-card-hover-border" />
            </a>
          </div>

          {/* Bottom Slider Indicator Dots */}
          <div className="cats-slider-dots" aria-hidden="true">
            <span className="dots-line" />
            <span className="dot active" />
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
            <span className="dots-line" />
          </div>
        </div>
      </section>

      {/* Trending & Featured Products Carousel / Grid */}
      <FeaturedProducts
        wishlist={wishlist}
        onWishlist={onWishlist}
        onAdd={onAdd}
        onBuy={onBuy}
      />

      {/* Face Shape / Frame Finder Guide */}
      <FaceShapeGuide />

      {/* Precision Lens Science & Health */}
      <LensGuide />

      {/* Home Eye Test & Eyeglasses Services (Triggers Popup Modal) */}
      <HowItWorks onBookAppointment={onBookAppointment} />

      {/* Anchor shim for backwards-compatibility */}
      <span id="book-test" className="anchor-shim" />

      {/* About Us Home Showcase Section */}
      <AboutSection />

      {/* Verified Reviews & Social Proof */}
      <Testimonials showNotice={showNotice} />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Instagram / Community Lookbook */}
      <InstagramShowcase />

      {/* Newsletter Signup */}
      <Newsletter showNotice={showNotice} />
    </main>
  );
}

/* ---------------- APP ---------------- */
export default function App() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [query, setQuery] = useState("");
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [bookModalService, setBookModalService] = useState("home"); // "home" | "clinic"
  const [notice, setNotice] = useState("");
  const [checkout, setCheckout] = useState(null); // { items, fromCart }

  const openBookModal = (service = "home") => {
    setBookModalService(service);
    setBookModalOpen(true);
  };

  // Intercept any clicks on #book-test across the site to trigger the modal
  useEffect(() => {
    const handleGlobalBookClick = (e) => {
      const link = e.target.closest('a[href$="#book-test"], a[href*="#book-test"]');
      if (link) {
        e.preventDefault();
        openBookModal("clinic");
      }
    };
    document.addEventListener("click", handleGlobalBookClick);
    return () => document.removeEventListener("click", handleGlobalBookClick);
  }, []);

  const showNotice = (m) => {
    setNotice(m);
    window.setTimeout(() => setNotice(""), 2200);
  };

  const scrollToCategories = () => {
    if (pathname !== "/") {
      navigate("/#categories");
      return;
    }
    document
      .getElementById("categories")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const onSearch = () => {
    const q = query.trim().toLowerCase();
    if (!q || pathname !== "/") return;

    const match = allProducts.find((p) =>
      `${p.name} ${p.category} ${p.shape} ${p.color}`
        .toLowerCase()
        .includes(q)
    );

    if (match) {
      navigate(
        match.category === "Sunglasses" ? "/sunglasses" : "/eyeglasses"
      );
    } else {
      showNotice("No frames found");
    }
  };

  const onWishlist = (id) => {
    const exists = wishlist.includes(id);
    setWishlist((v) => (exists ? v.filter((x) => x !== id) : [...v, id]));
    showNotice(exists ? "Removed from wishlist" : "Added to wishlist");
  };

  const addToCart = (p, qty = 1) =>
    setCart((v) => {
      const found = v.find((x) => x.id === p.id);
      return found
        ? v.map((x) => (x.id === p.id ? { ...x, qty: x.qty + qty } : x))
        : [...v, { ...p, qty }];
    });

  const onAdd = (p, qty = 1) => {
    addToCart(p, qty);
    showNotice(`${p.name} added to bag`);
  };

  /* BUY NOW: delivery details popup open aagum */
  const onBuy = (p, qty = 1) => {
    setCheckout({ items: [{ ...p, qty }], fromCart: false });
  };

  /* Cart drawer la "Continue to checkout" */
  const onCheckoutCart = () => {
    if (!cart.length) return;
    setCartOpen(false);
    setCheckout({ items: cart, fromCart: true });
  };

  const changeQty = (id, d) =>
    setCart((v) =>
      v
        .map((p) => (p.id === id ? { ...p, qty: p.qty + d } : p))
        .filter((p) => p.qty > 0)
    );

  const count = cart.reduce((s, p) => s + p.qty, 0);

  const pageProps = {
    query,
    setQuery,
    wishlist,
    onWishlist,
    onAdd,
    onBuy,
  };

  return (
    <div>
      {/* Luxury Brand Optical Preloading Screen */}
      <Preloader />

      <ScrollToHash />

      <Navbar
        query={query}
        setQuery={setQuery}
        cartCount={count}
        wishlistCount={wishlist.length}
        onCart={() => setCartOpen(true)}
        onShop={scrollToCategories}
        onSearch={onSearch}
      />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              scrollToCategories={scrollToCategories}
              showNotice={showNotice}
              onBookAppointment={openBookModal}
              {...pageProps}
            />
          }
        />

        <Route path="/about" element={<About />} />

        <Route
          path="/eyeglasses"
          element={
            <CategoryPage key="eyeglasses" type="eyeglasses" {...pageProps} />
          }
        />

        <Route
          path="/sunglasses"
          element={
            <CategoryPage key="sunglasses" type="sunglasses" {...pageProps} />
          }
        />

        <Route
          path="/contact-lenses"
          element={
            <CategoryPage
              key="contact-lenses"
              type="contact-lenses"
              {...pageProps}
            />
          }
        />

        <Route
          path="/product/:id"
          element={<ProductDetail {...pageProps} showNotice={showNotice} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/918838289852?text=Hi%20Olive%20Eye%20Care,%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-wa-btn"
        aria-label="Chat with Olive Eye Care on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className="wa-tooltip">Chat on WhatsApp (88382 89852)</span>
      </a>

      {/* Mobile Native App Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={count}
        wishlistCount={wishlist.length}
        onCart={() => setCartOpen(true)}
        showNotice={showNotice}
      />

      {/* Appointment & Home Try-On Booking Popup Modal */}
      <BookEyeTest
        open={bookModalOpen}
        initialService={bookModalService}
        onClose={() => setBookModalOpen(false)}
        showNotice={showNotice}
      />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        changeQty={changeQty}
        removeItem={(id) => setCart((v) => v.filter((p) => p.id !== id))}
        onCheckout={onCheckoutCart}
      />

      {checkout && (
        <Checkout
          items={checkout.items}
          onClose={() => setCheckout(null)}
          onDone={() => {
            if (checkout.fromCart) setCart([]);
          }}
        />
      )}

      {notice && <div className="toast">{notice}</div>}
    </div>
  );
}