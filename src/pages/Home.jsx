import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setProducts([]));
  }, []);

  return (
    <div className="amazon-grid-section">
      <div className="amazon-hero">
        <div className="amazon-hero-banner page-shell">
          <div className="amazon-hero-text">
            <h1>Shop the best of DRIFT ENTERPRISES</h1>
            <p>Fast delivery, curated products, and an Amazon-inspired shopping experience.</p>
            <Link to="/products" className="amazon-hero-button">Shop featured deals</Link>
          </div>
        </div>
        <aside className="amazon-hero-sidebar">
          <h2>Top categories</h2>
          <ul>
            <li>Electronics</li>
            <li>Fashion & Accessories</li>
            <li>Home & Kitchen</li>
            <li>Books & Audible</li>
            <li>Beauty & Personal Care</li>
          </ul>
        </aside>
      </div>

      <section style={{ marginTop: "1.5rem" }}>
        <h2 style={{ marginBottom: ".75rem" }}>Featured products</h2>
        <div className="amazon-product-grid">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="amazon-product-card">
              <div className="amazon-product-image-wrapper">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="amazon-product-info">
                <div className="amazon-product-category">{p.category}</div>
                <div className="amazon-product-title"><Link to={`/products/${p.id}`}>{p.title}</Link></div>
                <div className="amazon-product-rating">{'★'.repeat(Math.round(p.rating))} <span className="rating-number">{p.rating.toFixed(1)}</span></div>
                <div className="amazon-product-price"><span className="currency">$</span>{p.price.toFixed(2)}</div>
                <Link className="primary-button" to={`/products/${p.id}`}>Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
        }
