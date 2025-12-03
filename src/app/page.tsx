"use client";

import Link from "next/link";
import { products } from "./data/products";
import { useCart } from "./components/CartProvider";

const heroCategories = [
  "Electronics",
  "Fashion & Accessories",
  "Home & Kitchen",
  "Books & Audible",
  "Beauty & Personal Care",
  "Toys & Games",
];

export default function Home() {
  const { addItem } = useCart();
  return (
    <div>
      <section className="amazon-hero">
        <div className="amazon-hero-banner">
          <div className="amazon-hero-text">
            <h1>Shop the best of DRIFT ENTERPRISES</h1>
            <p>
              Fast delivery, curated products, and an Amazon-inspired shopping
              experience.
            </p>
            <Link href="#featured" className="amazon-hero-button">
              Shop featured deals
            </Link>
          </div>
        </div>
        <aside className="amazon-hero-sidebar">
          <h2>Top categories</h2>
          <ul>
            {heroCategories.map((category) => (
              <li key={category}>
                <button className="amazon-link-button">{category}</button>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section id="featured" className="amazon-grid-section">
        <header className="amazon-section-header">
          <h2>Featured products</h2>
          <Link href="/products" className="amazon-link">
            View all products
          </Link>
        </header>
        <div className="amazon-product-grid">
          {products.slice(0, 4).map((product) => (
            <article key={product.id} className="amazon-product-card">
              <div className="amazon-product-image-wrapper">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="amazon-product-info">
                <p className="amazon-product-category">{product.category}</p>
                <h3 className="amazon-product-title">
                  <Link href={`/products/${product.id}`}>{product.title}</Link>
                </h3>
                <p className="amazon-product-rating">
                  {"★".repeat(Math.round(product.rating))}
                  <span className="rating-number">{product.rating.toFixed(1)}</span>
                </p>
                <p className="amazon-product-price">
                  <span className="currency">$</span>
                  {product.price.toFixed(2)}
                </p>
                <button
                  className="amazon-add-to-cart"
                  onClick={() => addItem(product)}
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
