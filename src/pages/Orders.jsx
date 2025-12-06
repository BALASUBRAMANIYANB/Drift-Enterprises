import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function Orders() {
  const { orders } = useCart();

  return (
    <div className="page-shell" style={{ maxWidth: "1200px" }}>
      <h1>📦 Your Orders</h1>
      
      {orders.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>No orders yet</p>
          <p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem" }}>
            Looks like you haven't placed any orders. Start shopping now!
          </p>
          <Link to="/products" className="primary-button" style={{ display: "inline-block", padding: "1rem 3rem" }}>
            🛍️ Start Shopping
          </Link>
        </div>
      ) : (
        <div style={{ marginTop: "2rem" }}>
          <p style={{ color: "#666", marginBottom: "2rem" }}>
            You have {orders.length} order{orders.length !== 1 ? 's' : ''}
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {orders.map((order) => (
              <div 
                key={order.id} 
                style={{ 
                  background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)",
                  border: "1px solid #e8e8e8",
                  borderRadius: "20px",
                  padding: "2rem",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.06)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                  <div>
                    <h3 style={{ fontSize: "1.2rem", color: "#1a1a1a", marginBottom: "0.5rem" }}>
                      Order #{order.id}
                    </h3>
                    <p style={{ color: "#666", fontSize: "0.9rem" }}>
                      Placed on {new Date(order.createdAt).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: "0.25rem" }}>Order Total</p>
                    <p style={{ fontSize: "1.8rem", fontWeight: "800", color: "#e71d36" }}>
                      ₹{order.total.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: "1.5rem" }}>
                  <h4 style={{ fontSize: "1rem", marginBottom: "1rem", color: "#1a1a1a" }}>Items:</h4>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                    {order.items.map((item) => (
                      <div 
                        key={item.id} 
                        style={{ 
                          display: "flex", 
                          justifyContent: "space-between", 
                          alignItems: "center",
                          padding: "0.75rem",
                          background: "#ffffff",
                          borderRadius: "12px",
                          border: "1px solid #f0f0f0"
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            style={{ 
                              width: "60px", 
                              height: "60px", 
                              objectFit: "contain",
                              borderRadius: "8px",
                              background: "#fafafa"
                            }} 
                          />
                          <div>
                            <p style={{ fontWeight: "600", color: "#1a1a1a", marginBottom: "0.25rem" }}>
                              {item.title}
                            </p>
                            <p style={{ color: "#666", fontSize: "0.85rem" }}>
                              Quantity: {item.quantity}
                            </p>
                          </div>
                        </div>
                        <p style={{ fontWeight: "700", color: "#e71d36", fontSize: "1.1rem" }}>
                          ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #e8e8e8" }}>
                  <div style={{ 
                    background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                    padding: "1rem 1.5rem",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem"
                  }}>
                    <span style={{ fontSize: "1.5rem" }}>✅</span>
                    <div>
                      <p style={{ fontWeight: "700", color: "#2e7d32", marginBottom: "0.25rem" }}>
                        Order Confirmed
                      </p>
                      <p style={{ fontSize: "0.85rem", color: "#388e3c" }}>
                        Your order has been placed successfully (Demo Mode)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
