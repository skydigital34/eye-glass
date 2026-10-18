import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { ShieldCheck, Sparkles, Truck, ArrowUpRight } from "lucide-react";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import CategoryCard from "./components/CategoryCard.jsx";
import CategoryPage from "./components/CategoryPage.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import CartDrawer from "./components/CartDrawer.jsx";
import Checkout from "./components/Checkout.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import PromoBanner from "./components/PromoBanner.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import FaceShapeGuide from "./components/FaceShapeGuide.jsx";
import LensGuide from "./components/LensGuide.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import BookEyeTest from "./components/BookEyeTest.jsx";
import Testimonials from "./components/Testimonials.jsx";
import FaqSection from "./components/FaqSection.jsx";
import InstagramShowcase from "./components/InstagramShowcase.jsx";
import MobileBottomNav from "./components/MobileBottomNav.jsx";
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
}) {
  const navigate = useNavigate();

  return (
    <main>
      <Hero scrollToProducts={scrollToCategories} />

      <section className="trust">
        <div>
          <ShieldCheck /> Quality you can feel
        </div>
        <div>
          <Sparkles /> Styles worth keeping
        </div>
        <div>
          <Truck /> Easy, reliable delivery
        </div>
      </section>

      {/* Special Offer Strip */}
      <PromoBanner
        showNotice={showNotice}
        scrollToProducts={scrollToCategories}
      />

      {/* Handpicked Categories */}
      <section className="cats" id="categories">
        <span className="cats-side">TIMELESS ELEGANCE</span>

        <div className="wrap">
          <div className="cats-head">
            <h2>
              Shop Handpicked <em>Eyeglasses &amp; Sunglasses</em>
            </h2>
            <p>Timeless frames. Thoughtfully chosen for you.</p>
          </div>

          <div className="cats-grid">
            <CategoryCard
              title="Eyeglasses"
              badge="EVERYDAY OPTICALS"
              count="36+ DESIGNS"
              text="Lightweight frames and crystal-clear comfort, made to be worn all day."
              cta="EXPLORE EYEGLASSES"
              image="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=85"
              onClick={() => navigate("/eyeglasses")}
            />

            <CategoryCard
              title="Sunglasses"
              badge="SUN-READY STYLES"
              count="36+ DESIGNS"
              text="Bold shapes and tinted lenses that finish every look under the sun."
              cta="EXPLORE SUNGLASSES"
              image="https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=85"
              onClick={() => navigate("/sunglasses")}
            />
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

      {/* 3-Step Ordering Guide */}
      <HowItWorks />

      {/* Professional In-Store Eye Test & Home Try-On Booking */}
      <BookEyeTest showNotice={showNotice} />

      {/* Brand Story */}
      <section className="story" id="story">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=85"
          alt="Portrait in natural light"
        />
        <div>
          <p className="eyebrow">A CLEARER KIND OF STYLE</p>
          <h2>
            Less fuss.
            <br />
            <em>More you.</em>
          </h2>
          <p>
            We believe the right pair of glasses should feel like it was
            always meant to be yours. Thoughtful design, everyday comfort,
            and timeless style — that’s the Olive way.
          </p>
          <a href="#categories">
            Discover our approach <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      {/* Verified Reviews & Social Proof */}
      <Testimonials />

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
  const [notice, setNotice] = useState("");
  const [checkout, setCheckout] = useState(null); // { items, fromCart }

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
          path="/product/:id"
          element={<ProductDetail {...pageProps} showNotice={showNotice} />}
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />

      {/* Mobile Native App Bottom Navigation Bar */}
      <MobileBottomNav
        cartCount={count}
        wishlistCount={wishlist.length}
        onCart={() => setCartOpen(true)}
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