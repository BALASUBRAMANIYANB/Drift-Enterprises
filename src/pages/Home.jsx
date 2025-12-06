import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { products as localProducts } from "../data/products.js";

const banners = [
  "/assets/home/Banner1.jpg",
  "/assets/home/Banner2.jpg",
  "/assets/home/Banner3.jpg"
];

export default function Home() {
  const [products, setProducts] = useState(localProducts);
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((r) => r.json())
      .then(setProducts)
      .catch(() => setProducts(localProducts));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="amazon-grid-section">
      <div className="amazon-hero">
        <div className="amazon-hero-banner">
          <div className="amazon-hero-text">
            <h1>Discover Premium Electronics at DRIFT ENTERPRISES</h1>
            <p>Fast delivery, curated products, and unbeatable deals on the latest tech.</p>
            <Link to="/products" className="amazon-hero-button">🛍️ Shop Now</Link>
          </div>
        </div>
      </div>

      <div className="full-screen-slideshow">
        <img src={banners[currentBanner]} alt="Featured Banner" />
        <img src={banners[(currentBanner + 1) % banners.length]} alt="Promotional Banner" />
      </div>

      <section style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1.5rem", fontSize: "2rem", fontWeight: "900", color: "#1a1a1a", letterSpacing: "-0.5px" }}>✨ Featured Products</h2>
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
                <div className="amazon-product-price"><span className="currency">₹</span>{p.price.toFixed(2)}</div>
                <Link className="primary-button" to={`/products/${p.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <h2 style={{ marginBottom: "1rem", fontSize: "2rem", fontWeight: "900", color: "#1a1a1a", letterSpacing: "-0.5px" }}>📱 Trending Mobiles</h2>
        <h3 style={{ marginBottom: "1.5rem", fontSize: "1.2rem", fontWeight: "600", color: "#666" }}>Poco Series</h3>
        <div className="amazon-product-grid">
          {products.filter(p => p.category === "Mobiles" && p.brand === "Poco").map((p) => (
            <div key={p.id} className="amazon-product-card">
              <div className="amazon-product-image-wrapper">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="amazon-product-info">
                <div className="amazon-product-category">{p.category}</div>
                <div className="amazon-product-title"><Link to={`/products/${p.id}`}>{p.title}</Link></div>
                <div className="amazon-product-rating">{'★'.repeat(Math.round(p.rating))} <span className="rating-number">{p.rating.toFixed(1)}</span></div>
                <div className="amazon-product-price"><span className="currency">₹</span>{p.price.toFixed(2)}</div>
                <Link className="primary-button" to={`/products/${p.id}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
        }
