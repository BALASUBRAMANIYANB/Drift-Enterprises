"use client";

import Link from "next/link";
import { useCart } from "./CartProvider";

export function Header() {
  const { totalItems } = useCart();

  return (
    <header className="amazon-header">
      <div className="amazon-header-top">
        <Link href="/" className="amazon-logo">
          DRIFT<span> ENTERPRISES</span>
        </Link>
        <form
          className="amazon-search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <select className="amazon-search-category" defaultValue="all">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          <input
            className="amazon-search-input"
            type="text"
            placeholder="Search DRIFT ENTERPRISES for products"
          />
          <button type="submit" className="amazon-search-button">
            Search
          </button>
        </form>
        <nav className="amazon-header-links">
          <Link href="/account" className="amazon-header-link">
            <span className="small">Hello, Sign in</span>
            <span className="bold">Account &amp; Lists</span>
          </Link>
          <Link href="/orders" className="amazon-header-link">
            <span className="small">Returns</span>
            <span className="bold">&amp; Orders</span>
          </Link>
          <Link href="/cart" className="amazon-header-cart">
            <span className="cart-count">{totalItems}</span>
            <span className="bold">Cart</span>
          </Link>
        </nav>
      </div>
      <div className="amazon-header-bottom">
        <button className="amazon-nav-item">All</button>

        <div className="amazon-nav-group">
          <button className="amazon-nav-item">Appliances</button>
          <div className="amazon-nav-dropdown">
            <ul>
              <li>Refrigerator</li>
              <li>Air conditioner</li>
            </ul>
          </div>
        </div>

        <div className="amazon-nav-group">
          <button className="amazon-nav-item">Mobiles</button>
          <div className="amazon-nav-dropdown">
            <ul>
              <li>Apple</li>
              <li>vivo</li>
              <li>oppo</li>
              <li>realme</li>
              <li>oneplus</li>
              <li>motorola</li>
              <li>
                <Link href="/products/7">POCO</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="amazon-nav-group">
          <button className="amazon-nav-item">Electronics</button>
          <div className="amazon-nav-dropdown">
            <ul>
              <li>Home theater</li>
              <li>Sound bar</li>
            </ul>
          </div>
        </div>

        <div className="amazon-nav-group">
          <button className="amazon-nav-item">TV</button>
          <div className="amazon-nav-dropdown">
            <ul>
              <li>Toshiba</li>
              <li>Mi</li>
              <li>realme</li>
              <li>Samsung</li>
              <li>LG</li>
              <li>Assembled TV</li>
              <li>TCL</li>
            </ul>
          </div>
        </div>

        <div className="amazon-nav-group">
          <button className="amazon-nav-item">Trending products</button>
          <div className="amazon-nav-dropdown">
            <ul>
              <li>Best sellers</li>
              <li>New arrivals</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}


