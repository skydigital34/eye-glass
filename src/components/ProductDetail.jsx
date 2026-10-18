import React, { useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Share2,
  Minus,
  Plus,
  ChevronRight,
  ChevronLeft,
  Glasses,
  Palette,
  Hexagon,
  User,
  Calendar,
  Sparkles,
} from "lucide-react";
import ProductCard from "./ProductCard.jsx";
import { products, money } from "../data/products.js";
import "./ProductDetail.css";

/* Thumbnail gallery ku photos. Unga own photos irundha inga maathunga */
const POOL = [
  "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=85",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1000&q=85",
];

function Detail({ product, wishlist, onWishlist, onAdd, onBuy, showNotice }) {
  const [tab, setTab] = useState("description");
  const [qty, setQty] = useState(1);
  const railRef = useRef(null);

  const gallery = useMemo(() => {
    const first = product.image.replace("w=900", "w=1000");
    return [first, ...POOL.filter((u) => u.split("?")[0] !== first.split("?")[0])].slice(0, 4);
  }, [product]);

  const [active, setActive] = useState(0);

  const related = useMemo(
    () =>
      products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 10),
    [product]
  );

  const isSun = product.category === "Sunglasses";
  const save = Math.round(
    ((product.oldPrice - product.price) / product.oldPrice) * 100
  );

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showNotice("Link copied!");
    } catch {
      showNotice("Copy the link from the address bar");
    }
  };

  const rail = (dir) =>
    railRef.current?.scrollBy({ left: dir * 520, behavior: "smooth" });

  const details = [
    { icon: Glasses, label: "Type", value: product.category },
    { icon: Hexagon, label: "Shape", value: product.shape },
    { icon: Palette, label: "Colour", value: product.color },
    { icon: User, label: "Ideal For", value: "Men & Women" },
    {
      icon: Calendar,
      label: "Occasion",
      value: isSun ? "Travel, Beach & Daily Wear" : "Office, Study & Daily Wear",
    },
    { icon: Sparkles, label: "Care", value: "Clean with microfiber cloth" },
  ];

  return (
    <main className="pd">
      <div className="wrap">
        {/* Breadcrumb */}
        <nav className="pd-crumb">
          <Link to="/">HOME</Link>
          <ChevronRight size={12} />
          <Link to={isSun ? "/sunglasses" : "/eyeglasses"}>
            {product.category.toUpperCase()}
          </Link>
          <ChevronRight size={12} />
          <span>{product.name.toUpperCase()}</span>
        </nav>

        <section className="pd-top">
          {/* ===== GALLERY ===== */}
          <div className="pd-gallery">
            <div className="pd-thumbs">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  className={i === active ? "active" : ""}
                  onClick={() => setActive(i)}
                  aria-label={`Show photo ${i + 1}`}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>

            <div className="pd-main">
              <img key={active} src={gallery[active]} alt={product.name} />

              <button className="pd-share" onClick={share} aria-label="Share">
                <Share2 size={18} />
              </button>

              {product.tag && <span className="pd-tag">{product.tag}</span>}
            </div>
          </div>

          {/* ===== INFO ===== */}
          <div className="pd-info">
            <small className="pd-brand">OLIVE EYE CARE</small>
            <h1 className="pd-title">
              {product.name} · {product.shape}
            </h1>

            <div className="pd-price">
              <b>{money(product.price)}</b>
              <del>{money(product.oldPrice)}</del>
              <span>{save}% OFF</span>
            </div>

            <div className="pd-tabs">
              <button
                className={tab === "description" ? "active" : ""}
                onClick={() => setTab("description")}
              >
                DESCRIPTION
              </button>
              <button
                className={tab === "care" ? "active" : ""}
                onClick={() => setTab("care")}
              >
                PRODUCT CARE
              </button>
            </div>

            <div className="pd-card">
              {tab === "description" ? (
                <>
                  <h4>PRODUCT DESCRIPTION</h4>
                  <p className="pd-line">Price: {money(product.price)}</p>
                  <p>
                    {product.name} is a {product.shape.toLowerCase()}{" "}
                    {product.category.toLowerCase().replace(/s$/, "")} in a
                    refined {product.color.toLowerCase()} finish, made for
                    all-day comfort. Lightweight, durable and designed to
                    sit gently on every face. A timeless pick for work,
                    travel and everyday style.
                  </p>
                </>
              ) : (
                <>
                  <h4>PRODUCT CARE</h4>
                  <ul>
                    <li>Clean lenses with the microfiber cloth provided.</li>
                    <li>Rinse with lukewarm water before wiping dust.</li>
                    <li>Store in the hard case when not in use.</li>
                    <li>Avoid leaving the frame in hot cars or direct heat.</li>
                  </ul>
                </>
              )}
            </div>

            <div className="pd-card">
              <h4>PRODUCT DETAILS</h4>
              <div className="pd-details">
                {details.map(({ icon: Icon, label, value }) => (
                  <div key={label}>
                    <Icon size={18} />
                    <b>{label}</b>
                    <span>: {value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pd-badges">
              <span>PREMIUM QUALITY FRAME</span>
              <span>{isSun ? "UV PROTECTED LENS" : "ANTI-GLARE LENS"}</span>
              <span>TRUSTED AUTHENTICITY</span>
              <span>SECURE PACKAGING</span>
            </div>

            <h4 className="pd-label">SELECTION &amp; QUANTITY</h4>

            <div className="pd-qty">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                aria-label="Decrease quantity"
              >
                <Minus size={16} />
              </button>
              <b>{qty}</b>
              <button
                onClick={() => setQty((q) => q + 1)}
                aria-label="Increase quantity"
              >
                <Plus size={16} />
              </button>
            </div>

            <div className="pd-buttons">
              <button
                className="pd-add"
                onClick={() => onAdd(product, qty)}
              >
                ADD TO CART
              </button>
              <button
                className="pd-buy"
                onClick={() => onBuy(product, qty)}
              >
                BUY NOW
              </button>
            </div>

            <p className="pd-stock">
              <i /> AVAILABILITY: IN STOCK
            </p>
          </div>
        </section>

        {/* ===== RECOMMENDATIONS ===== */}
        <section className="pd-rec">
          <p className="pd-rec-eyebrow">RECOMMENDATIONS</p>
          <h2>
            You might also <em>like</em>
          </h2>

          <div className="pd-rail-wrap">
            <button
              className="pd-arrow left"
              onClick={() => rail(-1)}
              aria-label="Previous"
            >
              <ChevronLeft />
            </button>

            <div className="pd-rail" ref={railRef}>
              {related.map((p) => (
                <div className="pd-rail-item" key={p.id}>
                  <ProductCard
                    product={p}
                    wishlisted={wishlist.includes(p.id)}
                    onWishlist={onWishlist}
                    onAdd={onAdd}
                    onBuy={onBuy}
                  />
                </div>
              ))}
            </div>

            <button
              className="pd-arrow right"
              onClick={() => rail(1)}
              aria-label="Next"
            >
              <ChevronRight />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

/* Route wrapper: id maarum bodhu state reset aagum */
export default function ProductDetail(props) {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <main className="pd">
        <div className="wrap pd-missing">
          <h2>Product not found</h2>
          <Link to="/">Back to home</Link>
        </div>
      </main>
    );
  }

  return <Detail key={id} product={product} {...props} />;
}