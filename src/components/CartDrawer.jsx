import React from "react";
import {
  Minus,
  Plus,
  Trash2,
  X,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { money } from "../data/products.js";

export default function CartDrawer({
  open,
  onClose,
  cart,
  changeQty,
  removeItem,
  onCheckout,
  showNotice,
}) {
  if (!open) return null;

  const total = cart.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  const itemCount = cart.reduce(
    (sum, product) => sum + product.qty,
    0
  );

  return (
    <div className="backdrop" onClick={onClose}>
      <aside
        className="drawer"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-head">
          <h2>Your bag ({itemCount})</h2>

          <button onClick={onClose} aria-label="Close cart">
            <X />
          </button>
        </div>

        {!cart.length ? (
          <div className="empty">
            <ShoppingBag />
            <h3>Your bag is empty</h3>

            <button onClick={onClose}>
              Continue shopping
            </button>
          </div>
        ) : (
          <>
            {cart.map((product) => (
              <div className="cart-row" key={product.id}>
                <img
                  src={product.image}
                  alt={product.name}
                />

                <div>
                  <b>{product.name}</b>
                  <p>{money(product.price)}</p>

                  <button
                    onClick={() => changeQty(product.id, -1)}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={13} />
                  </button>

                  {" "}{product.qty}{" "}

                  <button
                    onClick={() => changeQty(product.id, 1)}
                    aria-label="Increase quantity"
                  >
                    <Plus size={13} />
                  </button>
                </div>

                <button
                  onClick={() => removeItem(product.id)}
                  aria-label={`Remove ${product.name}`}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            {/* Delivery Alert Pill */}
            <div className="cart-delivery-pill-box">
              <div className="cart-del-tag">
                <Truck size={13} />
                <span>FREE DELIVERY AVAILABLE IN TAMIL NADU</span>
              </div>
              <div className="cart-del-timings">
                <span>⚡ Tamil Nadu: <strong>1 to 3 Days</strong></span>
                <span>📦 Rest of India: <strong>7 to 10 Days</strong></span>
              </div>
            </div>

            <div className="subtotal">
              <b>Subtotal</b>
              <b>{money(total)}</b>
            </div>

            <p className="muted">
              Delivery dispatch from our central Coimbatore optical laboratory.
            </p>

            <button
              className="checkout"
              onClick={() => {
                if (onCheckout) {
                  onCheckout();
                } else {
                  showNotice?.("Proceeding to checkout...");
                }
              }}
            >
              Continue to checkout
            </button>
          </>
        )}
      </aside>
    </div>
  );
}