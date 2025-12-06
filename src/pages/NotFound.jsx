import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page-shell" style={{ maxWidth: "800px", textAlign: "center" }}>
      <div style={{ padding: "4rem 2rem" }}>
        <div style={{ fontSize: "8rem", marginBottom: "1rem" }}>🔍</div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", color: "#1a1a1a" }}>
          404 - Page Not Found
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem", lineHeight: "1.6" }}>
          Oops! The page you're looking for doesn't exist.<br />
          It might have been moved or deleted.
        </p>
        
        <div style={{ 
          background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",
          padding: "2rem",
          borderRadius: "20px",
          marginBottom: "2rem",
          border: "1px solid #e8e8e8"
        }}>
          <h3 style={{ marginBottom: "1rem", color: "#1a1a1a" }}>Quick Links:</h3>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link to="/" className="primary-button" style={{ padding: "0.75rem 1.5rem" }}>
              🏠 Home
            </Link>
            <Link to="/products" className="primary-button" style={{ padding: "0.75rem 1.5rem", background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
              🛍️ Products
            </Link>
            <Link to="/cart" className="primary-button" style={{ padding: "0.75rem 1.5rem", background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
              🛒 Cart
            </Link>
          </div>
        </div>

        <p style={{ color: "#999", fontSize: "0.9rem" }}>
          Need help? <Link to="/" style={{ color: "#e71d36", fontWeight: "700" }}>Contact Support</Link>
        </p>
      </div>
    </div>
  );
}
