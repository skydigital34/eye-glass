import React from "react";

/**
 * BrandLogo - Vector & Image logo component matching Olive Eye Care store signage
 * Features the signature spectacles with olive branch, hanging olives, and typography.
 *
 * @param {string} theme - "light" (for dark backgrounds: white logo) or "dark" (for light backgrounds: olive green logo)
 * @param {string} variant - "full" (icon + text + tagline), "inline" (icon + text), or "icon" (icon only)
 * @param {number} size - base size multiplier (default 1)
 * @param {string} className - extra CSS classes
 */
export default function BrandLogo({
  theme = "light",
  variant = "full",
  size = 1,
  className = "",
  showTagline = true,
  useImage = true,
}) {
  const isLight = theme === "light";
  const primaryColor = isLight ? "#ffffff" : "#2f3f1a";
  const secondaryColor = isLight ? "#d6e8aa" : "#2f3f1a";
  const taglineColor = isLight ? "#e2ebd0" : "#4a5d30";

  // When useImage is true, use the official logo image from public/image copy 2.png
  if (useImage && variant !== "svg" && variant !== "icon") {
    return (
      <img
        src="/image copy 2.png"
        alt="Olive Eye Care - The Branch Of New Style"
        className={`olive-brand-logo-img theme-${theme} ${className}`}
        style={{
          height: `${58 * size}px`,
          width: "auto",
          maxWidth: "100%",
          objectFit: "contain",
          display: "block",
          filter:
            theme === "dark"
              ? "brightness(0) saturate(100%) invert(16%) sepia(25%) saturate(1050%) hue-rotate(43deg) brightness(100%) contrast(90%)"
              : "none",
          transition: "transform 0.25s ease",
        }}
      />
    );
  }

  // Spectacles SVG with Olive Branch & Olives
  const SpectaclesIcon = ({ width = 56, height = 28 }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 160 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="olive-brand-svg"
      style={{ display: "block" }}
    >
      {/* Aviator top brow bar */}
      <path
        d="M 28 32 Q 80 28 132 32"
        stroke={primaryColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />

      {/* Nose bridge (lower arched bar) */}
      <path
        d="M 68 35 Q 80 43 92 35"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Left Eyeglass Rim (Aviator teardrop shape) */}
      <path
        d="M 28 32 C 26 50 32 68 50 68 C 66 68 70 52 68 34"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Right Eyeglass Rim (Aviator teardrop shape) */}
      <path
        d="M 92 34 C 90 52 94 68 110 68 C 128 68 134 50 132 32"
        stroke={primaryColor}
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Left Temple Hinge */}
      <path
        d="M 22 34 L 28 32"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Right Temple Hinge */}
      <path
        d="M 132 32 L 138 34"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
      />

      {/* Olive Branch along the top left rim */}
      {/* Branch stem */}
      <path
        d="M 25 28 Q 45 20 68 25"
        stroke={primaryColor}
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Olive leaves along branch */}
      {/* Leaf 1 */}
      <path
        d="M 28 26 C 26 18 30 14 32 12 C 34 16 32 22 30 25 Z"
        fill={primaryColor}
      />
      {/* Leaf 2 */}
      <path
        d="M 35 24 C 35 15 40 11 44 9 C 44 14 41 20 38 23 Z"
        fill={primaryColor}
      />
      {/* Leaf 3 */}
      <path
        d="M 43 23 C 44 14 51 11 55 10 C 54 15 49 20 45 22 Z"
        fill={primaryColor}
      />
      {/* Leaf 4 */}
      <path
        d="M 52 23 C 55 15 62 13 67 13 C 65 18 59 21 54 23 Z"
        fill={primaryColor}
      />
      {/* Leaf 5 */}
      <path
        d="M 60 24 C 64 18 70 17 74 18 C 72 22 66 24 62 25 Z"
        fill={primaryColor}
      />

      {/* Two hanging olives beneath the branch */}
      {/* Olive 1 (left) */}
      <ellipse
        cx="44"
        cy="33"
        rx="4"
        ry="6"
        transform="rotate(-20 44 33)"
        stroke={primaryColor}
        strokeWidth="1.8"
        fill="none"
      />
      {/* Olive 2 (right) */}
      <ellipse
        cx="53"
        cy="32"
        rx="4"
        ry="5.5"
        transform="rotate(15 53 32)"
        stroke={primaryColor}
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );

  if (variant === "icon") {
    return (
      <div className={`olive-brand-mark ${className}`} style={{ display: "inline-flex", alignItems: "center" }}>
        <SpectaclesIcon width={52 * size} height={26 * size} />
      </div>
    );
  }

  return (
    <div
      className={`olive-brand-container ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: `${10 * size}px`,
        textDecoration: "none",
        color: primaryColor,
        userSelect: "none",
      }}
    >
      <SpectaclesIcon width={48 * size} height={24 * size} />

      <div
        className="olive-brand-typography"
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.05,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 800,
            fontSize: `${17 * size}px`,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: primaryColor,
          }}
        >
          <span>OLIVE</span>
          <span style={{ fontWeight: 600, color: secondaryColor }}>EYE CARE</span>
        </div>

        {showTagline && (
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: `${8.5 * size}px`,
              fontWeight: 500,
              letterSpacing: "0.12em",
              color: taglineColor,
              marginTop: "2px",
            }}
          >
            The Branch Of New Style
          </span>
        )}
      </div>
    </div>
  );
}
