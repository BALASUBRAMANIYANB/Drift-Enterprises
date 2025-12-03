"use client";

import { useRouter } from "next/navigation";
import { useCart } from "../components/CartProvider";

export default function CheckoutPage() {
  const { items, subtotal, placeOrder } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="page-shell">
        <h1>No items to checkout</h1>
        <p>Your cart is empty. Add items before proceeding to checkout.</p>
      </div>
    );
  }

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    placeOrder();
    router.push("/orders");
  };

  const shipping = subtotal > 0 ? 9.99 : 0;
  const tax = subtotal * 0.09;
  const total = subtotal + shipping + tax;

  return (
    <div className="page-shell checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handlePlaceOrder}>
          <section>
            <h2>Shipping address</h2>
            <div className="form-grid">
              <label>
                Full name
                <input required type="text" />
              </label>
              <label>
                Address line 1
                <input required type="text" />
              </label>
              <label>
                Address line 2 (optional)
                <input type="text" />
              </label>
              <label>
                City
                <input required type="text" />
              </label>
              <label>
                State/Province
                <input required type="text" />
              </label>
              <label>
                Postal code
                <input required type="text" />
              </label>
            </div>
          </section>

          <section>
            <h2>Payment method</h2>
            <p className="text-muted">
              This is a demo checkout. No real payment will be processed.
            </p>
            <div className="form-grid">
              <label>
                Card number
                <input required type="text" placeholder="4111 1111 1111 1111" />
              </label>
              <label>
                Expiry
                <input required type="text" placeholder="MM/YY" />
              </label>
              <label>
                CVC
                <input required type="text" placeholder="123" />
              </label>
            </div>
          </section>

          <button type="submit" className="primary-button wide">
            Place your order
          </button>
        </form>

        <aside className="checkout-summary">
          <h2>Order summary</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <div>
                  <strong>{item.title}</strong>
                  <div className="text-muted">Qty: {item.quantity}</div>
                </div>
                <span>
                  <span className="currency">$</span>
                  {(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
          <div className="checkout-totals">
            <div>
              <span>Items subtotal:</span>
              <span>
                <span className="currency">$</span>
                {subtotal.toFixed(2)}
              </span>
            </div>
            <div>
              <span>Shipping:</span>
              <span>
                <span className="currency">$</span>
                {shipping.toFixed(2)}
              </span>
            </div>
            <div>
              <span>Estimated tax:</span>
              <span>
                <span className="currency">$</span>
                {tax.toFixed(2)}
              </span>
            </div>
            <div className="checkout-total-row">
              <span>Order total:</span>
              <span>
                <span className="currency">$</span>
                {total.toFixed(2)}
              </span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}


