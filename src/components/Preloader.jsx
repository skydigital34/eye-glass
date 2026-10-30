import React, { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import "./Preloader.css";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("drawing"); // drawing -> illuminated -> unveiling -> done
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Sequence timeline:
    // 0ms: Line drawing starts
    // 800ms: Logo fully illuminated with optic glint & pulse
    // 1600ms: Shutters slide open (split curtain unveiling)
    // 2300ms: Completely done, remove from DOM
    const t1 = setTimeout(() => {
      setPhase("illuminated");
    }, 850);

    const t2 = setTimeout(() => {
      setPhase("unveiling");
    }, 1750);

    const t3 = setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 2450);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  // Fast skip if clicked
  const handleSkip = () => {
    if (phase === "unveiling" || isDone) return;
    setPhase("unveiling");
    setTimeout(() => {
      setIsDone(true);
      document.body.style.overflow = "";
      if (onComplete) onComplete();
    }, 700);
  };

  if (isDone) return null;

  return (
    <div
      className={`olive-cinematic-preloader ${phase}`}
      onClick={handleSkip}
      role="status"
      aria-label="Loading Olive Eye Care"
    >
      {/* Top Shutter Panel (Slides UP on unveil) */}
      <div className="preloader-shutter shutter-top">
        <div className="shutter-texture" />
        <div className="shutter-edge-glow top-edge" />
      </div>

      {/* Bottom Shutter Panel (Slides DOWN on unveil) */}
      <div className="preloader-shutter shutter-bottom">
        <div className="shutter-texture" />
        <div className="shutter-edge-glow bottom-edge" />
      </div>

      {/* Central Cinematic Stage */}
      <div className="preloader-stage" onClick={(e) => e.stopPropagation()}>
        {/* Ambient Optical Lens Flare */}
        <div className="lens-flare-core" />
        <div className="lens-flare-ring ring-1" />
        <div className="lens-flare-ring ring-2" />

        {/* Dynamic Eyecare Focus Target Marks */}
        <div className="optic-target-marks">
          <span className="target-bracket bracket-tl" />
          <span className="target-bracket bracket-tr" />
          <span className="target-bracket bracket-bl" />
          <span className="target-bracket bracket-br" />
          <div className="optic-vision-tag">20 / 20 FOCUS</div>
        </div>

        {/* Central Logo Container */}
        <div className="preloader-hero-emblem">
          {/* Phase 1: Glowing Golden-Emerald SVG Laser Line Drawing */}
          <svg
            className={`spectacles-laser-draw ${phase !== "drawing" ? "faded" : ""}`}
            viewBox="0 0 160 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Top brow bar */}
            <path
              d="M 28 32 Q 80 28 132 32"
              className="laser-stroke brow-stroke"
            />
            {/* Bridge */}
            <path
              d="M 68 35 Q 80 43 92 35"
              className="laser-stroke bridge-stroke"
            />
            {/* Left rim */}
            <path
              d="M 28 32 C 26 50 32 68 50 68 C 66 68 70 52 68 34"
              className="laser-stroke rim-left"
            />
            {/* Right rim */}
            <path
              d="M 92 34 C 90 52 94 68 110 68 C 128 68 134 50 132 32"
              className="laser-stroke rim-right"
            />
            {/* Temples */}
            <path d="M 22 34 L 28 32" className="laser-stroke temple-l" />
            <path d="M 132 32 L 138 34" className="laser-stroke temple-r" />
            {/* Olive branch */}
            <path
              d="M 25 28 Q 45 20 68 25"
              className="laser-stroke branch-stem"
            />
            {/* Leaves */}
            <path
              d="M 28 26 C 26 18 30 14 32 12 C 34 16 32 22 30 25 Z"
              className="laser-leaf"
            />
            <path
              d="M 35 24 C 35 15 40 11 44 9 C 44 14 41 20 38 23 Z"
              className="laser-leaf leaf-2"
            />
            <path
              d="M 43 23 C 44 14 51 11 55 10 C 54 15 49 20 45 22 Z"
              className="laser-leaf leaf-3"
            />
            <path
              d="M 52 23 C 55 15 62 13 67 13 C 65 18 59 21 54 23 Z"
              className="laser-leaf leaf-4"
            />
            <path
              d="M 60 24 C 64 18 70 17 74 18 C 72 22 66 24 62 25 Z"
              className="laser-leaf leaf-5"
            />
            {/* Olives */}
            <ellipse
              cx="44"
              cy="33"
              rx="4"
              ry="6"
              transform="rotate(-20 44 33)"
              className="laser-olive"
            />
            <ellipse
              cx="53"
              cy="32"
              rx="4"
              ry="5.5"
              transform="rotate(15 53 32)"
              className="laser-olive"
            />
          </svg>

          {/* Phase 2: Full Crisp Official Logo Image (Fades in with Glint & Glow) */}
          <div className="official-logo-reveal-box">
            <img
              src="/image copy 2.png"
              alt="Olive Eye Care"
              className="emblem-logo-image"
            />
            {/* Diagonal Lens Refraction Light Glint */}
            <div className="lens-refraction-glint" />
          </div>

          {/* Sparkle Glint on the Olive Branch */}
          <div className="branch-sparkle-glint">
            <Sparkles size={20} />
          </div>
        </div>

        {/* Elegant Bottom Ribbon */}
        <div className="preloader-luxury-footer">
          <div className="luxury-divider">
            <span className="line left" />
            <span className="gold-gem" />
            <span className="line right" />
          </div>
          <p className="luxury-tagline">THE BRANCH OF NEW STYLE</p>
        </div>

        {/* Skip button */}
        <button
          type="button"
          className="cinematic-skip-hint"
          onClick={handleSkip}
          aria-label="Skip intro"
        >
          TAP TO ENTER STORE
        </button>
      </div>
    </div>
  );
}
