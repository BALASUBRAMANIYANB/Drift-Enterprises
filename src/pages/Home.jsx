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
            <h1>Shop the best of DRIFT ENTERPRISES</h1>
            <p>Fast delivery, curated products, and an Amazon-inspired shopping experience.</p>
            <Link to="/products" className="amazon-hero-button">Shop featured deals</Link>
          </div>
        </div>
      </div>

      <div className="full-screen-slideshow">
        <img src={banners[currentBanner]} alt="Slideshow" />
        <img src={banners[(currentBanner + 1) % banners.length]} alt="Slideshow" />
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
                <div className="amazon-product-price"><span className="currency">₹</span>{p.price.toFixed(2)}</div>
                <Link className="primary-button" to={`/products/${p.id}`}>Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2 style={{ marginBottom: ".75rem" }}>Mobiles</h2>
        <h3 style={{ marginBottom: ".5rem" }}>Poco</h3>
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
                <Link className="primary-button" to={`/products/${p.id}`}>Add to Cart</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
        }
