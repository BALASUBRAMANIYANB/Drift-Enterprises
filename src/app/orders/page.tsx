"use client";

import Link from "next/link";
import { useCart } from "../components/CartProvider";

export default function OrdersPage() {
  const { orders } = useCart();

  if (orders.length === 0) {
    return (
      <div className="page-shell">
        <h1>Your Orders</h1>
        <p>You have not placed any orders yet.</p>
        <p style={{ marginTop: ".5rem" }}>
          Start by adding items to your cart on the{" "}
          <Link href="/">home page</Link> and completing checkout.
        </p>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <h1>Your Orders</h1>
      <div className="orders-list">
        {orders.map((order) => (
          <article key={order.id} className="order-card">
            <header className="order-card-header">
              <div>
                <div className="label">Order placed</div>
                <div>
                  {new Date(order.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </div>
              </div>
              <div>
                <div className="label">Total</div>
                <div>
                  <span className="currency">$</span>
                  {order.total.toFixed(2)}
                </div>
              </div>
              <div>
                <div className="label">Order #</div>
                <div>{order.id}</div>
              </div>
            </header>
            <ul className="order-items">
              {order.items.map((item) => (
                <li key={item.id}>
                  <div className="order-item-main">
                    <div className="order-item-image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div>
                      <div className="order-item-title">{item.title}</div>
                      <div className="text-muted">Qty: {item.quantity}</div>
                    </div>
                  </div>
                  <div className="order-item-price">
                    <span className="currency">$</span>
                    {(item.price * item.quantity).toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}


