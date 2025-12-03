\"use client\";

import Link from "next/link";
import { useCart } from "../components/CartProvider";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { items, subtotal, updateQuantity, removeItem } = useCart();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="page-shell">
        <h1>Your DRIFT ENTERPRISES cart is empty</h1>
        <p>
          Browse our <Link href="/products">latest products</Link> and add
          something to your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <h1>Shopping Cart</h1>
      <div className="cart-layout">
        <section className="cart-items">
          {items.map((item) => (
            <article key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="cart-item-body">
                <h2>{item.title}</h2>
                <p className="cart-item-price">
                  <span className="currency">$</span>
                  {(item.price * item.quantity).toFixed(2)}
                  <span className="cart-item-each">
                    {" "}
                    (${item.price.toFixed(2)} each)
                  </span>
                </p>
                <div className="cart-item-actions">
                  <label>
                    Qty:{" "}
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    >
                      {[1, 2, 3, 4, 5, 6].map((q) => (
                        <option key={q} value={q}>
                          {q}
                        </option>
                      ))}
                    </select>
                  </label>
                  <button
                    className="link-button"
                    onClick={() => removeItem(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
        <aside className="cart-summary">
          <p className="cart-summary-total">
            Subtotal ({items.length} item
            {items.length > 1 ? "s" : ""}):{" "}
            <span className="price">
              <span className="currency">$</span>
              {subtotal.toFixed(2)}
            </span>
          </p>
          <button
            className="primary-button"
            onClick={() => router.push("/checkout")}
          >
            Proceed to checkout
          </button>
        </aside>
      </div>
    </div>
  );
}


