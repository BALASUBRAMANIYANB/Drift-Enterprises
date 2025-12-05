import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function Cart() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  return (
    <div className="page-shell" style={{ maxWidth: "1200px" }}>
      <h1>🛒 Your Shopping Cart</h1>
      {items.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Your cart is empty</p>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem" }}>Looks like you haven't added anything yet.</p>
          <Link to="/products" className="primary-button" style={{ display: "inline-block", padding: "1rem 3rem" }}>
            🛍️ Start Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map((i) => (
              <div key={i.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={i.image} alt={i.title} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
                <div className="cart-item-body" style={{ flex: 1 }}>
                  <h2>{i.title}</h2>
                  <div className="cart-item-price"><span className="currency">₹</span>{i.price.toFixed(2)}</div>
                  <div className="cart-item-each">₹{(i.price * i.quantity).toFixed(2)} total</div>
                  <div className="cart-item-actions">
                    <label>
                      Qty:
                      <input
                        type="number"
                        value={i.quantity}
                        min={1}
                        onChange={(e) => updateQuantity(i.id, Number(e.target.value))}
                        style={{ width: 60, padding: "0.25rem", marginLeft: "0.25rem" }}
                      />
                    </label>
                    <button onClick={() => removeItem(i.id)}>
                      🗑️ Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h2 style={{ fontSize: "1.4rem", fontWeight: "800", marginBottom: "1.5rem", color: "#1a1a1a" }}>Order Summary</h2>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "space-between", fontSize: "1rem" }}>
                <span>Subtotal:</span> <strong style={{ color: "#1a1a1a" }}>₹{subtotal.toFixed(2)}</strong>
              </div>
              <div style={{ marginBottom: "0.75rem", display: "flex", justifyContent: "space-between", fontSize: "1rem" }}>
                <span>Shipping:</span> <strong style={{ color: "#4caf50" }}>FREE</strong>
              </div>
              <div style={{ marginBottom: "1.5rem", fontSize: "0.85rem", color: "#666", fontStyle: "italic" }}>Tax calculated at checkout</div>
            </div>
            <div style={{ paddingTop: "1.5rem", borderTop: "2px solid #e8e8e8" }}>
              <div style={{ fontSize: "1.5rem", fontWeight: "800", marginBottom: "1.5rem", color: "#e71d36", display: "flex", justifyContent: "space-between" }}>
                <span>Total:</span> <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="primary-button wide" style={{ display: "block", textAlign: "center", padding: "1rem", fontSize: "1rem" }}>
                🚀 Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
