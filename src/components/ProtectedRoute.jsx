import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children, requireAdmin = false }) {
  const { user, isAdmin, isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated()) {
    // Redirect to login page with return URL
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && !isAdmin()) {
    // User is authenticated but not an admin
    return (
      <div className="page-shell" style={{ maxWidth: "800px", textAlign: "center" }}>
        <div style={{ padding: "4rem 2rem" }}>
          <div style={{ fontSize: "6rem", marginBottom: "1rem" }}>🚫</div>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#1a1a1a" }}>
            Access Denied
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "2rem", lineHeight: "1.6" }}>
            You don't have permission to access this page.<br />
            This area is restricted to administrators only.
          </p>
          
          <div style={{ 
            background: "linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)",
            padding: "2rem",
            borderRadius: "20px",
            marginBottom: "2rem",
            border: "1px solid #e8e8e8"
          }}>
            <p style={{ color: "#666", marginBottom: "1rem" }}>
              Logged in as: <strong>{user?.fullName || user?.username}</strong>
            </p>
            <p style={{ color: "#666" }}>
              Role: <span style={{ 
                background: "#e71d36", 
                color: "white", 
                padding: "0.25rem 0.75rem", 
                borderRadius: "12px",
                fontSize: "0.85rem",
                fontWeight: "700"
              }}>{user?.role}</span>
            </p>
          </div>

          <Navigate to="/" replace />
        </div>
      </div>
    );
  }

  return children;
}
