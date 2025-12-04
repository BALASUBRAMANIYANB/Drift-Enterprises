import React from "react";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div className="page-shell" style={{ maxWidth: "1000px" }}>
      <h1>👤 My Account</h1>
      <div style={{ marginTop: "2rem" }}>
        <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "20px", marginBottom: "2rem", border: "1px solid #e8e8e8" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1a1a1a" }}>👋 Welcome to Your Account</h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
            Manage your personal information, track orders, and update your preferences.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
          <Link to="/orders" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", transition: "all 0.3s ease" }} className="account-card">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📦</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Your Orders</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Track, return, or buy things again</p>
          </Link>

          <Link to="/account" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", transition: "all 0.3s ease" }} className="account-card">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔒</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Login & Security</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Edit login, name, and password</p>
          </Link>

          <Link to="/account" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", transition: "all 0.3s ease" }} className="account-card">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Addresses</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Edit addresses for orders and gifts</p>
          </Link>

          <Link to="/account" style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", transition: "all 0.3s ease" }} className="account-card">
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💳</div>
            <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Payment Options</h3>
            <p style={{ color: "#666", fontSize: "0.9rem" }}>Manage payment methods and settings</p>
          </Link>
        </div>

        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <p style={{ color: "#999", fontSize: "0.9rem", marginBottom: "1rem" }}>This is a demo page</p>
          <Link to="/" className="primary-button" style={{ display: "inline-block", padding: "1rem 2rem" }}>
            🏠 Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
