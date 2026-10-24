import React, { useState, useMemo } from "react";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Check,
  Star,
  ExternalLink,
  Glasses,
} from "lucide-react";
import "./LensGuide.css";

const BRANDS = [
  {
    id: "rayban",
    name: "Ray-Ban",
    tagline: "Since 1937 · Italy / USA",
    badge: "GLOBAL ICON",
    badgeColor: "gold",
    category: "luxury",
    specialty: "Legendary Aviator, Wayfarer & Clubmaster",
    desc: "The undisputed global icon of timeless eyewear. Engineered with signature G-15 mineral crystal lenses, hypoallergenic acetate, and military-heritage aviators.",
    highlights: ["100% UV400 Protection", "Polarized G-15 Glass", "Classic Metal & Acetate"],
    count: "48+ Frames in Store",
    rating: "5.0",
    styleType: "Timeless Rebel & Classic Americana",
  },
  {
    id: "prodesign",
    name: "ProDesign Denmark",
    tagline: "Founded 1973 · Aarhus, Denmark",
    badge: "ARCHITECTURAL DESIGN",
    badgeColor: "olive",
    category: "minimal",
    specialty: "Architectural Clean Scandinavian Minimalism",
    desc: "Clean Danish aesthetics meeting surgical-grade engineering. Ultra-lightweight Japanese titanium frames, clean geometric profiles, and patented ergonomic flex hinges.",
    highlights: ["Pure Japanese Titanium", "Screwless Flex Hinges", "Featherlight Comfort"],
    count: "28+ Frames in Store",
    rating: "4.9",
    styleType: "Nordic Minimalist & Modern Tech",
  },
  {
    id: "nova",
    name: "Nova",
    tagline: "High-Definition Optical Science",
    badge: "LENS TECHNOLOGY",
    badgeColor: "tech",
    category: "optics",
    specialty: "Advanced Digital Free-Form & Blue-Cut Optics",
    desc: "Pioneering visual clarity through advanced digital free-form lenses, all-day blue-cut filtering, anti-fatigue coatings, and robust optical frames.",
    highlights: ["Digital Free-Form Clarity", "BlueX Screen Shield", "Anti-Reflective Hydrophobic"],
    count: "36+ Frames in Store",
    rating: "4.8",
    styleType: "Precision Science & Daily Optical",
  },
  {
    id: "arcadio",
    name: "Arcadio",
    tagline: "Milanese High-Octane Luxury",
    badge: "PREMIUM LUXURY",
    badgeColor: "gold",
    category: "luxury",
    specialty: "Hand-Sculpted Italian Acetates & Polarized Shields",
    desc: "Bold luxury engineered for high performance. Sculpted multi-layer Italian acetates with polarized glare-shield optics, gold-toned temples, and striking silhouettes.",
    highlights: ["Hand-Carved Italian Acetate", "Polarized Shield Lenses", "24K Gold Plated Accents"],
    count: "24+ Frames in Store",
    rating: "4.9",
    styleType: "Executive Prestige & High Fashion",
  },
  {
    id: "vogue",
    name: "Vogue",
    tagline: "Florence, Italy · Runway to Street",
    badge: "RUNWAY COUTURE",
    badgeColor: "fashion",
    category: "luxury",
    specialty: "Chic Cat-Eyes, Pastel Tints & Geometric Profiles",
    desc: "Runway glamour translated into accessible everyday statements. Vibrant color palettes, playful feminine angles, and trendsetting celebrity capsule edits.",
    highlights: ["Runway Trend Editions", "Jewel-Tone Colorways", "Featherlight Acetate"],
    count: "38+ Frames in Store",
    rating: "4.9",
    styleType: "Contemporary Chic & Glamour",
  },
  {
    id: "fastrack",
    name: "Fastrack",
    tagline: "Urban Youth Movement",
    badge: "YOUTH & STREETWEAR",
    badgeColor: "youth",
    category: "youth",
    specialty: "Sport Wraps, Rimless Aviators & Mirror Shades",
    desc: "Bold, energetic, and unapologetic eyewear crafted for dynamic daily wear. High-impact polycarbonate frames, mirror flash coatings, and ergonomic anti-slip grips.",
    highlights: ["Impact-Proof Polycarbonate", "Flash Mirror UV Coating", "Anti-Slip Sport Grips"],
    count: "42+ Frames in Store",
    rating: "4.7",
    styleType: "Street Cool & Active Lifestyle",
  },
  {
    id: "titan",
    name: "Titan",
    tagline: "A TATA Enterprise · Precision Heritage",
    badge: "INDIA'S MOST TRUSTED",
    badgeColor: "trusted",
    category: "optics",
    specialty: "Memory Metal, Flex Titanium & Boardroom Classics",
    desc: "India's gold standard in optical comfort and reliability. Memory metals that bounce back from bends, flexible bridge engineering, and dermatologically safe materials.",
    highlights: ["Bendable Memory Metal", "TATA Quality Tested", "Hypoallergenic Comfort"],
    count: "54+ Frames in Store",
    rating: "4.9",
    styleType: "Ergonomic Comfort & Boardroom Elegance",
  },
  {
    id: "mont-jacob",
    name: "Mont Jacob",
    tagline: "Handcrafted Heritage Eyewear",
    badge: "BESPOKE ARTISAN",
    badgeColor: "gold",
    category: "minimal",
    specialty: "Hand-Polished Mazzucchelli & Vintage Keyhole Panto",
    desc: "Bespoke artisan tailoring for the true connoisseur. Small-batch hand-polished Mazzucchelli acetates, custom vintage rivets, and effortless European quiet luxury.",
    highlights: ["Mazzucchelli 1849 Acetate", "Hand-Polished Barrel Hinges", "Vintage Keyhole Bridge"],
    count: "22+ Frames in Store",
    rating: "5.0",
    styleType: "Bespoke Vintage & Quiet Luxury",
  },
];

const FILTER_TABS = [
  { id: "all", label: "All Brands (8)" },
  { id: "luxury", label: "Luxury & Designer" },
  { id: "minimal", label: "Architectural & Bespoke" },
  { id: "optics", label: "Optics & Heritage" },
  { id: "youth", label: "Youth & Active" },
];

export default function LensGuide() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);

  const filteredBrands = useMemo(() => {
    if (activeTab === "all") return BRANDS;
    return BRANDS.filter((b) => b.category === activeTab);
  }, [activeTab]);

  return (
    <section className="brands-section" id="brands">
      {/* Target anchor for backwards-compatibility */}
      <span id="lens-guide" className="anchor-shim" />

      {/* Marquee ticker of brand names */}
      <div className="brands-ticker-wrap" aria-hidden="true">
        <div className="brands-ticker-track">
          {[...BRANDS, ...BRANDS].map((b, idx) => (
            <span key={idx} className="brands-ticker-item">
              <strong>{b.name}</strong>
              <span className="ticker-dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap">
        {/* Section Header */}
        <div className="brands-header">
          <div className="brands-eyebrow-row">
            <span className="brands-eyebrow-line" />
            <span className="brands-eyebrow-text">AUTHORIZED RETAILER &amp; CURATED HOUSES</span>
            <span className="brands-eyebrow-line" />
          </div>

          <h2 className="brands-main-title">
            Our Brands · <em>World-Renowned Eyewear &amp; Optics</em>
          </h2>

          <p className="brands-subtitle">
            We partner directly with leading international optical fashion houses to bring you
            100% authentic designer frames, official manufacturer warranties, and precision craftsmanship.
          </p>

          {/* Guarantee Badges Row */}
          <div className="brands-assurance-row">
            <div className="assurance-badge">
              <ShieldCheck size={16} className="badge-ico" />
              <span>100% Original Brand Guarantee</span>
            </div>
            <div className="assurance-badge">
              <Award size={16} className="badge-ico" />
              <span>Official Manufacturer Warranty</span>
            </div>
            <div className="assurance-badge">
              <Glasses size={16} className="badge-ico" />
              <span>Free Custom In-Store Fitting</span>
            </div>
          </div>

          {/* Interactive Filter Tabs */}
          <div className="brands-filter-pills" role="tablist">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`brand-pill-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Brands Grid */}
        <div className="brands-grid">
          {filteredBrands.map((brand) => (
            <article
              key={brand.id}
              className={`brand-card ${selectedBrand === brand.id ? "card-highlight" : ""}`}
              onMouseEnter={() => setSelectedBrand(brand.id)}
              onMouseLeave={() => setSelectedBrand(null)}
            >
              {/* Card Top Row: Badge & Origin */}
              <div className="brand-card-top">
                <span className={`brand-badge ${brand.badgeColor}`}>
                  {brand.badge}
                </span>
                <span className="brand-rating">
                  <Star size={12} className="star-fill" />
                  <span>{brand.rating}</span>
                </span>
              </div>

              {/* Brand Typography Title */}
              <div className="brand-title-wrap">
                <h3 className={`brand-name brand-${brand.id}`}>
                  {brand.name}
                </h3>
                <span className="brand-tagline">{brand.tagline}</span>
              </div>

              {/* Specialty Subtitle */}
              <h4 className="brand-specialty">{brand.specialty}</h4>

              {/* Description */}
              <p className="brand-desc">{brand.desc}</p>

              {/* Signature Feature Chips */}
              <div className="brand-chips-row">
                {brand.highlights.map((h, i) => (
                  <span key={i} className="brand-chip">
                    <Check size={11} className="chip-check" />
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Bottom Card Footer */}
              <div className="brand-card-footer">
                <span className="brand-stock-pill">{brand.count}</span>

                <a
                  href="#categories"
                  className="brand-explore-btn"
                  aria-label={`Explore ${brand.name} collection`}
                >
                  <span>Explore Frames</span>
                  <ArrowRight size={14} className="arrow-btn" />
                </a>
              </div>

              <div className="brand-card-ambient" />
            </article>
          ))}
        </div>

        {/* Bottom Consultation Box */}
        <div className="brands-footer-banner">
          <div className="banner-left">
            <Sparkles size={22} className="banner-sparkle" />
            <div>
              <strong>Looking for a specific model from Ray-Ban, Titan or ProDesign?</strong>
              <p>Our opticians can custom-order any global frame and calibrate your prescription lenses.</p>
            </div>
          </div>
          <a href="#book-test" className="banner-cta-btn">
            <span>Book In-Store Frame Try-On</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
