import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import "./index.css";

export default function App() {
  return (
    <CartProvider>
      <Header />
      <main className="amazon-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <footer className="amazon-footer">
        <div className="amazon-footer-top">Back to top</div>
        <div className="amazon-footer-bottom">
          <p>DRIFT ENTERPRISES - Amazon style clone for demo purposes only.</p>
        </div>
      </footer>
    </CartProvider>
  );
}
