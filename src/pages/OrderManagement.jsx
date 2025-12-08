import React, { useState, useEffect } from 'react';
import { ref as dbRef, get, set, update } from 'firebase/database';
import { database } from '../config/firebase';
import './OrderManagement.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    loadOrders();
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
          ...data,
          customer: data.shippingAddress?.name || 'N/A',
          email: data.customerEmail || 'N/A',
          date: data.placedAt ? new Date(data.placedAt).toLocaleDateString() : 'N/A',
          items: data.items?.length || 0
        }));
        setOrders(ordersList.sort((a, b) => new Date(b.placedAt) - new Date(a.placedAt)));
      } else {
        setOrders([]);
      }
    } catch (error) {
      console.error('Error loading orders:', error);
      setOrders([]);
    } finally {
      setLoading(false);
    }
  };

  const updateOrderStatus = async (orderId, newStatus) => {
    // Enforce workflow: pending -> shipped -> delivered or cancelled
    const order = orders.find(o => o.id === orderId);
    const validTransitions = {
      pending: ['shipped', 'cancelled'],
      shipped: ['delivered', 'cancelled'],
      delivered: [],
      cancelled: []
    };

    if (!validTransitions[order.status]?.includes(newStatus)) {
      alert(`❌ Cannot change from ${order.status} to ${newStatus}`);
      return;
    }

    try {
      const orderRef = dbRef(database, `orders/${orderId}`);
      await update(orderRef, { status: newStatus, updatedAt: new Date().toISOString() });
      alert(`✅ Order status updated to ${newStatus}!`);
      loadOrders();
    } catch (error) {
      console.error('Error updating order:', error);
      alert('❌ Failed to update order status');
    }
  };

  const filteredOrders = filterStatus === 'all' ? orders : orders.filter(o => o.status === filterStatus);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '4rem 2rem' }}><p style={{ fontSize: '1.5rem', color: '#e71d36' }}>⏳ Loading orders...</p></div>;
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <div>
          <h1>🛒 Order Management</h1>
          <p>View and manage all customer orders</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid">
        <div className="stat-card"><div className="stat-icon">📦</div><div><h3>Total Orders</h3><p className="stat-value">{orders.length}</p></div></div>
        <div className="stat-card"><div className="stat-icon">⏳</div><div><h3>Pending</h3><p className="stat-value">{orders.filter(o => o.status === 'pending').length}</p></div></div>
        <div className="stat-card"><div className="stat-icon">🚚</div><div><h3>Shipped</h3><p className="stat-value">{orders.filter(o => o.status === 'shipped').length}</p></div></div>
        <div className="stat-card"><div className="stat-icon">✅</div><div><h3>Delivered</h3><p className="stat-value">{orders.filter(o => o.status === 'delivered').length}</p></div></div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', minWidth: '200px' }}>
          <option value="all">All Orders</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Orders Table */}
      <div className="orders-table-container">
        {filteredOrders.length === 0 ? (
          <p style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>No orders found</p>
        ) : (
          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Email</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map(order => (
                <tr key={order.id}>
                  <td className="order-id">#{order.id.substring(0, 8)}</td>
                  <td>{order.customer}</td>
                  <td>{order.email}</td>
                  <td>{order.date}</td>
                  <td>{order.items}</td>
                  <td className="total">₹{order.total?.toLocaleString()}</td>
                  <td>
                    <select 
                      value={order.status || 'pending'} 
                      onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                      style={{ padding: '0.5rem', borderRadius: '6px', border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}
                    >
                      <option value="pending">Pending</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button title="View Details" style={{ padding: '0.5rem 1rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>👁️</button>
                      <button title="Print Invoice" style={{ padding: '0.5rem 1rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>🖨️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrderManagement;
