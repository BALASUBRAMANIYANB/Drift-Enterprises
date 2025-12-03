import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

export default function Header() {
  const { totalItems } = useCart();
  return (
    <header className="amazon-header">
      <div className="amazon-header-top">
        <Link to="/" className="amazon-logo">DRIFT<span> ENTERPRISES</span></Link>
        <form className="amazon-search" onSubmit={(e)=>e.preventDefault()}>
          <select className="amazon-search-category" defaultValue="all">
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
          </select>
          <input className="amazon-search-input" placeholder="Search DRIFT ENTERPRISES for products" />
          <button type="submit" className="amazon-search-button">Search</button>
        </form>
        <nav className="amazon-header-links">
          <Link to="/account" className="amazon-header-link"><span className="small">Hello, Sign in</span><span className="bold">Account &amp; Lists</span></Link>
          <Link to="/orders" className="amazon-header-link"><span className="small">Returns</span><span className="bold">&amp; Orders</span></Link>
          <Link to="/cart" className="amazon-header-cart"><span className="cart-count">{totalItems}</span><span className="bold">Cart</span></Link>
        </nav>
      </div>
      <div className="amazon-header-bottom">
        <nav className="amazon-categories">
          <Link to="/products?category=appliances" className="category-link">Appliances</Link>
          <Link to="/products?category=mobiles" className="category-link">Mobiles</Link>
          <Link to="/products?category=electronics" className="category-link">Electronics</Link>
          <Link to="/products?category=tv" className="category-link">TV</Link>
          <Link to="/products?category=trending" className="category-link">Trending</Link>
        </nav>
      </div>
    </header>
  );
}
