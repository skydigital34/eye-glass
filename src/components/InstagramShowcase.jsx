import React from "react";
import { Link } from "react-router-dom";
import { Instagram, ArrowUpRight, ShoppingBag } from "lucide-react";
import "./InstagramShowcase.css";

const POSTS = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=700&q=85",
    user: "@sneha.design",
    frame: "The Olivia · Champagne",
    link: "/eyeglasses",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=700&q=85",
    user: "@vikram_chawla",
    frame: "The Sol · Amber Tortoise",
    link: "/sunglasses",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=85",
    user: "@kavya.reads",
    frame: "The Rowan · Olive Crystal",
    link: "/eyeglasses",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
    user: "@aditya_rawat",
    frame: "The Atlas · Black & Gold",
    link: "/sunglasses",
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=85",
    user: "@tanya.creates",
    frame: "The Eden · Rose Gold",
    link: "/eyeglasses",
  },
];

export default function InstagramShowcase() {
  return (
    <section className="insta-section" id="community">
      <div className="wrap">
        <div className="insta-head">
          <div>
            <span className="eyebrow">COMMUNITY &amp; STYLE</span>
            <h2>
              Styled in the Wild · <em>#OliveLook</em>
            </h2>
            <p>
              Tag @OliveEyeCare on Instagram to be featured in our seasonal lookbook.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="insta-follow-btn"
          >
            <Instagram size={15} />
            <span>Follow @OliveEyeCare</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="insta-grid">
          {POSTS.map((post) => (
            <Link
              to={post.link}
              key={post.id}
              className="insta-card"
              aria-label={`Shop ${post.frame}`}
            >
              <img src={post.img} alt={post.frame} loading="lazy" />
              <div className="insta-overlay">
                <span className="insta-user">{post.user}</span>
                <strong className="insta-frame">{post.frame}</strong>
                <span className="insta-cta">
                  <ShoppingBag size={13} /> Shop Style
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
