import React, { useEffect, useMemo, useState } from "react";
import {
  X,
  Smartphone,
  CreditCard,
  Landmark,
  Wallet,
  Percent,
  CheckCircle2,
  Timer,
  ChevronRight,
} from "lucide-react";
import { money } from "../data/products.js";
import "./Checkout.css";

/* Demo QR (real QR illa) */
function FakeQR({ seed }) {
  const size = 25;

  const cells = useMemo(() => {
    let s = seed || 7;
    const rand = () => {
      s = (s * 1664525 + 1013904223) % 4294967296;
      return s / 4294967296;
    };
    const list = [];
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const inFinder =
          (x < 8 && y < 8) ||
          (x >= size - 8 && y < 8) ||
          (x < 8 && y >= size - 8);
        if (!inFinder && rand() > 0.52) list.push([x, y]);
      }
    }
    return list;
  }, [seed]);

  const Finder = ({ x, y }) => (
    <g transform={`translate(${x} ${y})`}>
      <rect width="7" height="7" fill="#111" />
      <rect x="1" y="1" width="5" height="5" fill="#fff" />
      <rect x="2" y="2" width="3" height="3" fill="#111" />
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      shapeRendering="crispEdges"
      className="co-qr"
      aria-label="Demo QR code"
    >
      <rect width={size} height={size} fill="#fff" />
      {cells.map(([x, y]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" fill="#111" />
      ))}
      <Finder x={0} y={0} />
      <Finder x={size - 7} y={0} />
      <Finder x={0} y={size - 7} />
    </svg>
  );
}

const METHODS = [
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "card", label: "Cards", icon: CreditCard },
  { id: "emi", label: "EMI", icon: Percent },
  { id: "net", label: "Netbanking", icon: Landmark },
  { id: "wallet", label: "Wallet", icon: Wallet },
];

const formatPhone = (p) => (p.length === 10 ? `${p.slice(0, 5)} ${p.slice(5)}` : p);

export default function Checkout({ items, onClose, onDone }) {
  const total = items.reduce((s, p) => s + p.price * p.qty, 0);

  const [step, setStep] = useState("delivery"); // delivery | payment | success
  const [form, setForm] = useState({ name: "", phone: "", address: "" });
  const [errors, setErrors] = useState({});

  const [method, setMethod] = useState("upi");
  const [contactOpen, setContactOpen] = useState(true);
  const [contactPhone, setContactPhone] = useState("");
  const [contactError, setContactError] = useState("");
  const [secs, setSecs] = useState(15 * 60);
  const [upiId, setUpiId] = useState("");
  const [card, setCard] = useState({ number: "", expiry: "", cvv: "", name: "" });
  const [paying, setPaying] = useState(false);
  const [orderId, setOrderId] = useState("");

  // Page scroll lock + Esc to close
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  // Payment timer
  useEffect(() => {
    if (step !== "payment") return;
    const t = setInterval(() => setSecs((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [step]);

  const mm = String(Math.floor(secs / 60)).padStart(2, "0");
  const ss = String(secs % 60).padStart(2, "0");

  /* ---------- Step 1: Delivery ---------- */
  const setField = (key) => (e) => {
    let v = e.target.value;
    if (key === "phone") v = v.replace(/\D/g, "").slice(0, 10);
    setForm((f) => ({ ...f, [key]: v }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const confirmDelivery = (e) => {
    e.preventDefault();
    const er = {};
    if (form.name.trim().length < 2) er.name = "Please enter your full name";
    if (!/^[6-9]\d{9}$/.test(form.phone))
      er.phone = "Enter a valid 10-digit mobile number";
    if (form.address.trim().length < 10)
      er.address = "Please enter your full address";

    setErrors(er);
    if (Object.keys(er).length) return;

    setContactPhone(form.phone);
    setContactError("");
    setContactOpen(true);
    setSecs(15 * 60);
    setStep("payment");
  };

  /* ---------- Step 2: Payment ---------- */
  const continueContact = () => {
    if (!/^[6-9]\d{9}$/.test(contactPhone)) {
      setContactError("Enter a valid 10-digit mobile number");
      return;
    }
    setForm((f) => ({ ...f, phone: contactPhone }));
    setContactOpen(false);
  };

  const pay = () => {
    if (paying) return;
    setPaying(true);

    setTimeout(() => {
      setOrderId("OLV" + Math.floor(100000 + Math.random() * 900000));
      setPaying(false);
      setStep("success");
      onDone?.();
    }, 1500);
  };

  const cardNumber = (e) =>
    setCard((c) => ({
      ...c,
      number: e.target.value
        .replace(/\D/g, "")
        .slice(0, 16)
        .replace(/(.{4})/g, "$1 ")
        .trim(),
    }));

  const cardExpiry = (e) => {
    const d = e.target.value.replace(/\D/g, "").slice(0, 4);
    setCard((c) => ({
      ...c,
      expiry: d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d,
    }));
  };

  const closeOnBackdrop = (e) => {
    if (e.target === e.currentTarget && step !== "payment") onClose();
  };

  /* ===================== RENDER ===================== */
  return (
    <div className="co-backdrop" onMouseDown={closeOnBackdrop}>
      {/* ---------- DELIVERY DETAILS ---------- */}
      {step === "delivery" && (
        <form className="co-delivery" onSubmit={confirmDelivery} noValidate>
          <button
            type="button"
            className="co-close"
            onClick={onClose}
            aria-label="Close"
          >
            <X size={22} />
          </button>

          <h2>
            Delivery <em>Details</em>
          </h2>

          <label className="co-field">
            <span>FULL NAME</span>
            <input
              value={form.name}
              onChange={setField("name")}
              autoComplete="name"
              autoFocus
            />
            {errors.name && <small>{errors.name}</small>}
          </label>

          <label className="co-field">
            <span>PHONE NUMBER</span>
            <input
              value={form.phone}
              onChange={setField("phone")}
              inputMode="numeric"
              autoComplete="tel"
              placeholder="10-digit mobile number"
            />
            {errors.phone && <small>{errors.phone}</small>}
          </label>

          <label className="co-field">
            <span>FULL ADDRESS</span>
            <textarea
              rows={4}
              value={form.address}
              onChange={setField("address")}
              autoComplete="street-address"
            />
            {errors.address && <small>{errors.address}</small>}
          </label>

          <button type="submit" className="co-gold">
            CONFIRM &amp; PAY
          </button>
        </form>
      )}

      {/* ---------- PAYMENT OPTIONS ---------- */}
      {step === "payment" && (
        <div className="co-pay">
          {/* Left panel (background) */}
          <aside className="co-left">
            <div className="co-brand">
              <span>O</span>
              <b>OLIVE Eye Care</b>
            </div>

            <div className="co-summary">
              <small>Price Summary</small>
              <strong>{money(total)}</strong>

              <ul>
                {items.map((p) => (
                  <li key={p.id}>
                    <img src={p.image} alt="" />
                    <span>
                      {p.name}
                      <em>Qty {p.qty}</em>
                    </span>
                    <b>{money(p.price * p.qty)}</b>
                  </li>
                ))}
              </ul>
            </div>

            {/* Phone number background la theriyum */}
            <div className="co-phone-chip">
              <Smartphone size={17} />
              <span>
                +91 {formatPhone(form.phone)}
                <em>{form.name}</em>
              </span>
            </div>

            <p className="co-demo">Demo checkout · no real payment</p>
          </aside>

          {/* Right panel */}
          <section className="co-main">
            <header>
              <h3>Payment Options</h3>
              <button onClick={onClose} aria-label="Close">
                <X size={20} />
              </button>
            </header>

            <div className="co-main-body">
              <ul className="co-methods">
                {METHODS.map(({ id, label, icon: Icon }) => (
                  <li key={id}>
                    <button
                      className={method === id ? "active" : ""}
                      onClick={() => setMethod(id)}
                    >
                      <Icon size={18} />
                      {label}
                      <ChevronRight size={15} />
                    </button>
                  </li>
                ))}
              </ul>

              <div className="co-method-body">
                {method === "upi" && (
                  <>
                    <div className="co-method-head">
                      <h4>UPI QR</h4>
                      <span className="co-timer">
                        <Timer size={14} /> {mm}:{ss}
                      </span>
                    </div>

                    <div className="co-qr-box">
                      <FakeQR
                        seed={Number(form.phone.slice(-6)) + total}
                      />
                      <p>
                        Scan the QR using any UPI app
                        <em>Demo QR (not scannable)</em>
                      </p>
                    </div>

                    <label className="co-input">
                      <span>Or pay with UPI ID</span>
                      <input
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="name@upi"
                      />
                    </label>
                  </>
                )}

                {method === "card" && (
                  <>
                    <div className="co-method-head">
                      <h4>Credit / Debit Card</h4>
                      <span className="co-timer">
                        <Timer size={14} /> {mm}:{ss}
                      </span>
                    </div>

                    <label className="co-input">
                      <span>Card number</span>
                      <input
                        value={card.number}
                        onChange={cardNumber}
                        inputMode="numeric"
                        placeholder="0000 0000 0000 0000"
                      />
                    </label>

                    <div className="co-row">
                      <label className="co-input">
                        <span>Expiry</span>
                        <input
                          value={card.expiry}
                          onChange={cardExpiry}
                          inputMode="numeric"
                          placeholder="MM/YY"
                        />
                      </label>

                      <label className="co-input">
                        <span>CVV</span>
                        <input
                          value={card.cvv}
                          onChange={(e) =>
                            setCard((c) => ({
                              ...c,
                              cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                            }))
                          }
                          inputMode="numeric"
                          type="password"
                          placeholder="•••"
                        />
                      </label>
                    </div>

                    <label className="co-input">
                      <span>Name on card</span>
                      <input
                        value={card.name}
                        onChange={(e) =>
                          setCard((c) => ({ ...c, name: e.target.value }))
                        }
                      />
                    </label>
                  </>
                )}

                {["emi", "net", "wallet"].includes(method) && (
                  <>
                    <div className="co-method-head">
                      <h4>
                        {METHODS.find((m) => m.id === method)?.label}
                      </h4>
                      <span className="co-timer">
                        <Timer size={14} /> {mm}:{ss}
                      </span>
                    </div>
                    <p className="co-note">
                      Demo mode: this option is not connected. Click Pay to
                      complete the sample order.
                    </p>
                  </>
                )}

                <button className="co-paybtn" onClick={pay} disabled={paying}>
                  {paying ? "Processing…" : `Pay ${money(total)}`}
                </button>
              </div>
            </div>
          </section>

          {/* Contact details popup (phone prefilled) */}
          {contactOpen && (
            <div className="co-contact">
              <div className="co-contact-card">
                <button
                  className="co-contact-x"
                  onClick={onClose}
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <h3>Contact details</h3>
                <p>Enter mobile number to continue</p>

                <div className="co-phone-input">
                  <span>
                    <i>🇮🇳</i> +91
                  </span>
                  <input
                    value={contactPhone}
                    onChange={(e) => {
                      setContactPhone(
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      );
                      setContactError("");
                    }}
                    inputMode="numeric"
                    placeholder="Mobile number"
                    autoFocus
                  />
                </div>
                {contactError && <small>{contactError}</small>}

                <button className="co-continue" onClick={continueContact}>
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ---------- SUCCESS ---------- */}
      {step === "success" && (
        <div className="co-success">
          <CheckCircle2 size={64} />
          <h2>
            Order <em>placed!</em>
          </h2>
          <p className="co-order">Order ID: {orderId}</p>
          <p>
            Thank you, <b>{form.name}</b>. We will deliver to:
          </p>
          <address>{form.address}</address>
          <p className="co-sub">
            We will call you on +91 {formatPhone(form.phone)}
          </p>
          <p className="co-total">{money(total)}</p>
          <small>Demo order, no real payment was taken.</small>

          <button className="co-gold" onClick={onClose}>
            CONTINUE SHOPPING
          </button>
        </div>
      )}
    </div>
  );
}