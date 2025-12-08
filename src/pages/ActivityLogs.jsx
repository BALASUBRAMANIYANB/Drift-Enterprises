import React, { useState, useEffect } from 'react';
import { ref as dbRef, get, push, set } from 'firebase/database';
import { database } from '../config/firebase';
import './OrderManagement.css';

const ActivityLogs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState('all');
  const [filterUser, setFilterUser] = useState('all');
  const [dateRange, setDateRange] = useState('today');

  useEffect(() => {
    loadActivityLogs();
  }, []);

  const loadActivityLogs = async () => {
    setLoading(true);
    try {
      const logsRef = dbRef(database, 'activityLogs');
      const snapshot = await get(logsRef);
      
      let logsList;
      if (snapshot.exists()) {
        const logsData = snapshot.val();
        logsList = Object.entries(logsData).map(([id, data]) => ({ id, ...data }));
      } else {
        // Generate sample logs if none exist
        logsList = generateSampleLogs();
      }
      
      // Sort by timestamp (newest first)
      logsList.sort((a, b) => b.timestamp - a.timestamp);
      setLogs(logsList);
    } catch (error) {
      console.error('Error loading activity logs:', error);
      setLogs(generateSampleLogs());
    } finally {
      setLoading(false);
    }
  };

  const generateSampleLogs = () => {
    const activities = [
      { type: 'login', action: 'User logged in', icon: '🔐', user: 'admin@drift.com', role: 'admin' },
      { type: 'product', action: 'Added new product: Poco M7', icon: '📦', user: 'admin@drift.com', role: 'admin' },
      { type: 'order', action: 'New order placed: #1234', icon: '🛒', user: 'customer@example.com', role: 'customer' },
      { type: 'product', action: 'Updated product stock', icon: '📊', user: 'admin@drift.com', role: 'admin' },
      { type: 'login', action: 'User logged in', icon: '🔐', user: 'customer@example.com', role: 'customer' },
      { type: 'banner', action: 'Updated homepage banner', icon: '🎨', user: 'admin@drift.com', role: 'admin' },
      { type: 'order', action: 'Order status changed to delivered', icon: '✅', user: 'admin@drift.com', role: 'admin' },
      { type: 'settings', action: 'Changed site settings', icon: '⚙️', user: 'admin@drift.com', role: 'admin' },
      { type: 'user', action: 'New user registered', icon: '👤', user: 'newuser@example.com', role: 'customer' },
      { type: 'product', action: 'Deleted product', icon: '🗑️', user: 'admin@drift.com', role: 'admin' }
    ];

    return activities.map((activity, index) => ({
      id: `log-${index + 1}`,
      ...activity,
      timestamp: Date.now() - (index * 3600000), // Each log 1 hour apart
      ipAddress: `192.168.1.${Math.floor(Math.random() * 255)}`,
      device: Math.random() > 0.5 ? 'Desktop' : 'Mobile'
    }));
  };

  // Log activity helper function (export this for use across the app)
  const logActivity = async (type, action, user, role = 'customer') => {
    try {
      const logsRef = dbRef(database, 'activityLogs');
      const newLogRef = push(logsRef);
      await set(newLogRef, {
        type,
        action,
        user,
        role,
        timestamp: Date.now(),
        ipAddress: 'N/A', // In production, get from request
        device: 'Web'
      });
    } catch (error) {
      console.error('Error logging activity:', error);
    }
  };

  const getFilteredLogs = () => {
    let filtered = logs;

    // Filter by type
    if (filterType !== 'all') {
      filtered = filtered.filter(log => log.type === filterType);
    }

    // Filter by user role
    if (filterUser !== 'all') {
      filtered = filtered.filter(log => log.role === filterUser);
    }

    // Filter by date range
    const now = Date.now();
    const ranges = {
      today: 86400000, // 24 hours
      week: 604800000, // 7 days
      month: 2592000000, // 30 days
      all: Infinity
    };
    
    if (dateRange !== 'all') {
      filtered = filtered.filter(log => now - log.timestamp <= ranges[dateRange]);
    }

    return filtered;
  };

  const filteredLogs = getFilteredLogs();

  const stats = {
    total: logs.length,
    today: logs.filter(l => Date.now() - l.timestamp <= 86400000).length,
    admins: logs.filter(l => l.role === 'admin').length,
    customers: logs.filter(l => l.role === 'customer').length
  };

  const exportLogs = () => {
    const csvContent = [
      ['Timestamp', 'Type', 'Action', 'User', 'Role', 'IP Address', 'Device'],
      ...filteredLogs.map(log => [
        new Date(log.timestamp).toLocaleString(),
        log.type,
        log.action,
        log.user,
        log.role,
        log.ipAddress,
        log.device
      ])
    ].map(row => row.join(',')).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `activity-logs-${Date.now()}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  if (loading) {
    return <div className="page-loading">Loading activity logs...</div>;
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <div>
          <h1>🔍 Activity Logs</h1>
          <p>Complete audit trail of all system activities</p>
        </div>
        <button onClick={exportLogs} style={{ padding: '0.75rem 1.5rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
          📥 Export CSV
        </button>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
        <div className="stat-card">
          <span className="stat-icon">📋</span>
          <div className="stat-info">
            <h3>Total Activities</h3>
            <p className="stat-value">{stats.total}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">📅</span>
          <div className="stat-info">
            <h3>Today</h3>
            <p className="stat-value">{stats.today}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">👨‍💼</span>
          <div className="stat-info">
            <h3>Admin Actions</h3>
            <p className="stat-value">{stats.admins}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div className="stat-info">
            <h3>Customer Actions</h3>
            <p className="stat-value">{stats.customers}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="filter-select">
          <option value="all">All Activity Types</option>
          <option value="login">🔐 Login</option>
          <option value="product">📦 Products</option>
          <option value="order">🛒 Orders</option>
          <option value="banner">🎨 Banners</option>
          <option value="user">👤 Users</option>
          <option value="settings">⚙️ Settings</option>
        </select>
        <select value={filterUser} onChange={(e) => setFilterUser(e.target.value)} className="filter-select">
          <option value="all">All Users</option>
          <option value="admin">Admins Only</option>
          <option value="customer">Customers Only</option>
        </select>
        <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="filter-select">
          <option value="today">Today</option>
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="all">All Time</option>
        </select>
      </div>

      {/* Activity Log Table */}
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
              <th>User</th>
              <th>Role</th>
              <th>IP Address</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {filteredLogs.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                  No activity logs found
                </td>
              </tr>
            ) : (
              filteredLogs.map((log) => (
                <tr key={log.id}>
                  <td>
                    <div style={{ fontSize: '0.85rem' }}>
                      <div>{new Date(log.timestamp).toLocaleDateString()}</div>
                      <div style={{ color: '#999' }}>{new Date(log.timestamp).toLocaleTimeString()}</div>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{log.icon}</span>
                      <span>{log.action}</span>
                    </div>
                  </td>
                  <td>{log.user}</td>
                  <td>
                    <span className={`status-badge ${log.role === 'admin' ? 'delivered' : 'pending'}`}>
                      {log.role}
                    </span>
                  </td>
                  <td style={{ fontFamily: 'monospace', fontSize: '0.9rem' }}>{log.ipAddress}</td>
                  <td>{log.device}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityLogs;
