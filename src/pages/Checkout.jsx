import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, placeOrder, subtotal } = useCart();

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("⚠️ Your cart is empty!");
      return;
    }
    placeOrder();
    alert("✅ Order placed successfully!\n\nThank you for shopping with Drift Enterprises!\nYour order will be delivered soon. (Demo Mode)");
    navigate("/");
  };

  return (
    <div className="page-shell" style={{ maxWidth: "1200px" }}>
      <h1 className="checkout-page">💳 Secure Checkout</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: "1.2rem" }}>Your cart is empty. Add items to proceed with checkout.</p>
        </div>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form">
            <section>
              <h2>📦 Shipping Address</h2>
              <div className="form-grid">
                <label>First Name <input type="text" placeholder="Enter first name" required /></label>
                <label>Last Name <input type="text" placeholder="Enter last name" required /></label>
                <label style={{ gridColumn: "1 / -1" }}>Address <input type="text" placeholder="Street address, P.O. box" required /></label>
                <label>City <input type="text" placeholder="City" required /></label>
                <label>State <input type="text" placeholder="State/Province" required /></label>
                <label>ZIP Code <input type="text" placeholder="Postal code" required /></label>
              </div>
            </section>

            <section>
              <h2>💳 Payment Method</h2>
              <div className="form-grid">
                <label style={{ gridColumn: "1 / -1" }}>Card Number <input type="text" placeholder="1234 5678 9012 3456" required /></label>
                <label>Expiry Date <input type="text" placeholder="MM/YY" required /></label>
                <label>CVV <input type="text" placeholder="123" required /></label>
              </div>
            </section>
          </form>

          <div className="checkout-summary">
            <h2>📋 Order Summary</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <span>{item.title} × {item.quantity}</span>
                  <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div className="checkout-totals">
              <div><span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span></div>
              <div><span>Shipping</span> <span style={{ color: "#4caf50", fontWeight: "700" }}>FREE</span></div>
              <div className="checkout-total-row">
                <span>Order Total</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="primary-button"
              style={{ width: "100%", marginTop: "1.5rem", padding: "1rem", fontSize: "1.05rem" }}
            >
              🚀 Place Order
            </button>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666", textAlign: "center", lineHeight: "1.6" }}>
              By placing your order, you agree to our terms and conditions. Your payment information is secure and encrypted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
