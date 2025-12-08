import React, { useState, useEffect } from 'react';
import { ref as dbRef, get, set, update } from 'firebase/database';
import { database } from '../config/firebase';
import './OrderManagement.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');

  useEffect(() => {
    loadCustomers();
    
    // Auto-refresh every 30 seconds for live data (FREE solution)
    const interval = setInterval(() => {
      loadCustomers();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const loadCustomers = async () => {
    setLoading(true);
    try {
      const usersRef = dbRef(database, 'users');
      const snapshot = await get(usersRef);
      
      if (snapshot.exists()) {
        const usersData = snapshot.val();
        const customersList = Object.entries(usersData).map(([uid, data]) => ({
          uid,
          ...data,
          createdAt: data.createdAt || Date.now()
        }));
        setCustomers(customersList);
      }
    } catch (error) {
      console.error('Error loading customers:', error);
      alert('Failed to load customers');
    } finally {
      setLoading(false);
    }
  };

  const handleRoleChange = async (uid, newRole) => {
    if (!window.confirm(`Change user role to ${newRole}?`)) return;

    try {
      const userRef = dbRef(database, `users/${uid}`);
      await update(userRef, { role: newRole });
      alert('✅ Role updated successfully!');
      loadCustomers();
    } catch (error) {
      console.error('Error updating role:', error);
      alert('❌ Failed to update role');
    }
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.username?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.fullName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = roleFilter === 'all' || customer.role === roleFilter;
    return matchesSearch && matchesRole;
  });

  const stats = {
    total: customers.length,
    admins: customers.filter(c => c.role === 'admin').length,
    customers: customers.filter(c => c.role === 'customer' || !c.role).length
  };

  if (loading) {
    return <div className="page-loading">Loading customers...</div>;
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <div>
          <h1>👥 Customer Management</h1>
          <p>Manage users, roles, and customer information</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginBottom: '2rem' }}>
        <div className="stat-card">
          <span className="stat-icon">👥</span>
          <div className="stat-info">
            <h3>Total Users</h3>
            <p className="stat-value">{stats.total}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">👨‍💼</span>
          <div className="stat-info">
            <h3>Admins</h3>
            <p className="stat-value">{stats.admins}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">🛍️</span>
          <div className="stat-info">
            <h3>Customers</h3>
            <p className="stat-value">{stats.customers}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <input
          type="text"
          placeholder="🔍 Search by name, email, or username..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <select value={roleFilter} onChange={(e) => setRoleFilter(e.target.value)} className="filter-select">
          <option value="all">All Roles</option>
          <option value="admin">Admins Only</option>
          <option value="customer">Customers Only</option>
        </select>
      </div>

      {/* Customer List */}
      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Username</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
                  No customers found
                </td>
              </tr>
            ) : (
              filteredCustomers.map((customer) => (
                <tr key={customer.uid}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <div style={{ 
                        width: '40px', 
                        height: '40px', 
                        borderRadius: '50%', 
                        background: 'linear-gradient(135deg, #e71d36, #ff6b6b)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 'bold',
                        fontSize: '1.2rem'
                      }}>
                        {(customer.fullName || customer.username || 'U')[0].toUpperCase()}
                      </div>
                      <strong>{customer.fullName || customer.username || 'Unknown'}</strong>
                    </div>
                  </td>
                  <td>{customer.email}</td>
                  <td>{customer.username}</td>
                  <td>
                    <span className={`status-badge ${customer.role === 'admin' ? 'delivered' : 'pending'}`}>
                      {customer.role === 'admin' ? '👨‍💼 Admin' : '🛍️ Customer'}
                    </span>
                  </td>
                  <td>{new Date(customer.createdAt).toLocaleDateString()}</td>
                  <td>
                    <select
                      value={customer.role || 'customer'}
                      onChange={(e) => handleRoleChange(customer.uid, e.target.value)}
                      style={{
                        padding: '0.5rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        background: 'white',
                        cursor: 'pointer'
                      }}
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;
