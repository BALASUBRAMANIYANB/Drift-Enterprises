import React, { useState, useEffect } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../config/firebase';
import './Analytics.css';

const RevenueManagement = () => {
  const [orders, setOrders] = useState([]);
  const [timeFilter, setTimeFilter] = useState('month');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadOrders();
    
    // Auto-refresh every 30 seconds for live data (FREE solution)
    const interval = setInterval(() => {
      loadOrders();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const loadOrders = async () => {
    setLoading(true);
    try {
      const ordersRef = dbRef(database, 'orders');
      const snapshot = await get(ordersRef);
      
      if (snapshot.exists()) {
        const ordersData = snapshot.val();
        const ordersList = Object.entries(ordersData).map(([id, data]) => ({
          id,
          ...data
        }));
        setOrders(ordersList);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
    } finally {
      setLoading(false);
    }
  };

  // Calculate revenue metrics
  const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
  const totalOrders = orders.length;
  const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;
  const totalTax = totalRevenue * 0.18; // 18% GST
  const netRevenue = totalRevenue - totalTax;

  // Revenue by status
  const completedOrders = orders.filter(o => o.status === 'delivered');
  const completedRevenue = completedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
  const pendingRevenue = totalRevenue - completedRevenue;

  // Monthly breakdown
  const monthlyData = orders.reduce((acc, order) => {
    const month = new Date(order.createdAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    acc[month] = (acc[month] || 0) + (order.total || 0);
    return acc;
  }, {});

  if (loading) {
    return <div className="page-loading">Loading revenue data...</div>;
  }

  return (
    <div className="analytics-page">
      <div className="page-header">
        <div>
          <h1>💰 Revenue Management</h1>
          <p>Track revenue, payments, and financial performance</p>
        </div>
        <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} className="time-filter">
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {/* Revenue KPIs */}
      <div className="kpi-grid">
        <div className="kpi-card revenue">
          <div className="kpi-icon">💰</div>
          <div className="kpi-info">
            <h3>Total Revenue</h3>
            <p className="kpi-value">₹{totalRevenue.toLocaleString()}</p>
            <span className="kpi-trend positive">Gross Revenue</span>
          </div>
        </div>

        <div className="kpi-card orders">
          <div className="kpi-icon">✅</div>
          <div className="kpi-info">
            <h3>Completed Orders</h3>
            <p className="kpi-value">₹{completedRevenue.toLocaleString()}</p>
            <span className="kpi-trend positive">{completedOrders.length} orders</span>
          </div>
        </div>

        <div className="kpi-card customers">
          <div className="kpi-icon">⏳</div>
          <div className="kpi-info">
            <h3>Pending Revenue</h3>
            <p className="kpi-value">₹{pendingRevenue.toLocaleString()}</p>
            <span className="kpi-trend neutral">{totalOrders - completedOrders.length} orders</span>
          </div>
        </div>

        <div className="kpi-card avg-order">
          <div className="kpi-icon">📊</div>
          <div className="kpi-info">
            <h3>Avg Order Value</h3>
            <p className="kpi-value">₹{Math.round(avgOrderValue).toLocaleString()}</p>
            <span className="kpi-trend positive">Per transaction</span>
          </div>
        </div>
      </div>

      {/* Tax & Net Revenue */}
      <div className="charts-grid" style={{ marginTop: '2rem' }}>
        <div className="chart-card">
          <h3>💳 Financial Breakdown</h3>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
              <span><strong>Gross Revenue:</strong></span>
              <span style={{ color: '#28a745', fontWeight: 'bold' }}>₹{totalRevenue.toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', padding: '1rem', background: '#f9f9f9', borderRadius: '8px' }}>
              <span><strong>Tax (GST 18%):</strong></span>
              <span style={{ color: '#dc3545', fontWeight: 'bold' }}>- ₹{Math.round(totalTax).toLocaleString()}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: 'linear-gradient(135deg, #e71d36, #ff6b6b)', color: 'white', borderRadius: '8px', fontSize: '1.2rem' }}>
              <span><strong>Net Revenue:</strong></span>
              <span style={{ fontWeight: 'bold' }}>₹{Math.round(netRevenue).toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>📅 Monthly Revenue</h3>
          <div style={{ padding: '2rem' }}>
            {Object.entries(monthlyData).length === 0 ? (
              <p style={{ textAlign: 'center', color: '#999' }}>No revenue data available</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {Object.entries(monthlyData).map(([month, revenue]) => (
                  <div key={month} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.75rem', background: '#f9f9f9', borderRadius: '8px' }}>
                    <span>{month}</span>
                    <span style={{ fontWeight: 'bold', color: '#e71d36' }}>₹{revenue.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div className="top-products-section" style={{ marginTop: '2rem' }}>
        <h3>💳 Payment Gateway Settings</h3>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', border: '1px solid #e8e8e8' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💳</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Razorpay</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>UPI, Cards, Netbanking</p>
              <button style={{ padding: '0.5rem 1.5rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Configure
              </button>
            </div>
            <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Cash on Delivery</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Pay on delivery</p>
              <button style={{ padding: '0.5rem 1.5rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Enabled
              </button>
            </div>
            <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏦</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Bank Transfer</h4>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '1rem' }}>Direct bank payments</p>
              <button style={{ padding: '0.5rem 1.5rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                Configure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueManagement;
