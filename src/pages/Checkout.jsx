import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, placeOrder, subtotal } = useCart();

  const handlePlaceOrder = () => {
    if (items.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    placeOrder();
    alert("Order placed successfully! (Demo)");
    navigate("/");
  };

  return (
    <div className="page-shell" style={{ maxWidth: "800px" }}>
      <h1 className="checkout-page">Checkout</h1>

      {items.length === 0 ? (
        <p style={{ padding: "2rem", textAlign: "center", color: "#565959" }}>Your cart is empty. Add items to proceed with checkout.</p>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form">
            <section>
              <h2>Shipping Address</h2>
              <div className="form-grid">
                <label>First Name <input type="text" placeholder="John" /></label>
                <label>Last Name <input type="text" placeholder="Doe" /></label>
                <label style={{ gridColumn: "1 / -1" }}>Address <input type="text" placeholder="123 Main St" /></label>
                <label>City <input type="text" placeholder="New York" /></label>
                <label>State <input type="text" placeholder="NY" /></label>
                <label>ZIP <input type="text" placeholder="10001" /></label>
              </div>
            </section>

            <section>
              <h2>Payment Method</h2>
              <div className="form-grid">
                <label>Card Number <input type="text" placeholder="1234 5678 9012 3456" /></label>
                <label>Expiry <input type="text" placeholder="MM/YY" /></label>
                <label>CVV <input type="text" placeholder="123" /></label>
              </div>
            </section>
          </form>

          <div className="checkout-summary">
            <h2>Order Summary</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <span>{item.title} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="checkout-totals">
              <div><span>Subtotal</span> <span>${subtotal.toFixed(2)}</span></div>
              <div><span>Shipping</span> <span>FREE</span></div>
              <div style={{ borderTop: "1px solid #d5d9d9", paddingTop: "0.5rem" }}>
                <span className="checkout-total-row">Total</span>
                <span className="checkout-total-row">${subtotal.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handlePlaceOrder}
              className="primary-button"
              style={{ width: "100%", marginTop: "1rem", padding: "0.75rem" }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
