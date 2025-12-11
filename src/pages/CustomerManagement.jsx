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
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
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
        <div className="stat-card">
          <span className="stat-icon">📍</span>
          <div className="stat-info">
            <h3>Total Addresses</h3>
            <p className="stat-value">{customers.reduce((sum, c) => sum + (c.addresses?.length || 0), 0)}</p>
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
        {filteredCustomers.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#999' }}>
            No customers found
          </div>
        ) : (
          filteredCustomers.map((customer) => (
            <div key={customer.uid} style={{
              background: 'white',
              borderRadius: '12px',
              border: '1px solid #e0e0e0',
              marginBottom: '1.5rem',
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
            }}>
              {/* Customer Header */}
              <div style={{
                background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
                padding: '1.5rem',
                borderBottom: '1px solid #e0e0e0'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #e71d36, #ff6b6b)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '1.4rem'
                  }}>
                    {(customer.fullName || customer.username || 'U')[0].toUpperCase()}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ margin: '0 0 0.25rem 0', color: '#1a1a1a' }}>
                      {customer.fullName || customer.username || 'Unknown User'}
                    </h3>
                    <p style={{ margin: '0', color: '#666', fontSize: '0.9rem' }}>
                      {customer.email} • Joined {new Date(customer.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <span className={`status-badge ${customer.role === 'admin' ? 'delivered' : 'pending'}`}>
                      {customer.role === 'admin' ? '👨‍💼 Admin' : '🛍️ Customer'}
                    </span>
                    <select
                      value={customer.role || 'customer'}
                      onChange={(e) => handleRoleChange(customer.uid, e.target.value)}
                      style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        background: 'white',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Customer Details */}
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div>
                    <h4 style={{ margin: '0 0 0.75rem 0', color: '#1a1a1a', fontSize: '1rem' }}>📧 Contact Information</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div><strong>Email:</strong> {customer.email}</div>
                      <div><strong>Username:</strong> {customer.username || 'Not set'}</div>
                      <div><strong>Full Name:</strong> {customer.fullName || 'Not set'}</div>
                    </div>
                  </div>

                  <div>
                    <h4 style={{ margin: '0 0 0.75rem 0', color: '#1a1a1a', fontSize: '1rem' }}>📊 Account Details</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      <div><strong>User ID:</strong> {customer.uid}</div>
                      <div><strong>Role:</strong> {customer.role || 'customer'}</div>
                      <div><strong>Joined:</strong> {new Date(customer.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                </div>

                {/* Saved Addresses */}
                <div>
                  <h4 style={{ margin: '0 0 1rem 0', color: '#1a1a1a', fontSize: '1rem' }}>
                    📍 Saved Addresses ({customer.addresses?.length || 0})
                  </h4>

                  {customer.addresses && customer.addresses.length > 0 ? (
                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {customer.addresses.map((address, index) => (
                        <div key={address.id || index} style={{
                          background: '#f8f9fa',
                          border: '1px solid #e0e0e0',
                          borderRadius: '8px',
                          padding: '1rem'
                        }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                            <h5 style={{ margin: 0, color: '#1a1a1a' }}>
                              {address.name || `${address.firstName} ${address.lastName}`}
                            </h5>
                            <span style={{
                              background: '#e71d36',
                              color: 'white',
                              padding: '0.25rem 0.75rem',
                              borderRadius: '12px',
                              fontSize: '0.75rem',
                              fontWeight: '600'
                            }}>
                              Address {index + 1}
                            </span>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '0.9rem' }}>
                            <div>
                              <strong>📧 Email:</strong> {address.email || customer.email}
                            </div>
                            <div>
                              <strong>📞 Phone:</strong> {address.phone}
                            </div>
                            <div style={{ gridColumn: '1 / -1' }}>
                              <strong>🏠 Address:</strong><br />
                              {address.address}, {address.city}, {address.state} - {address.pincode}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{
                      background: '#f8f9fa',
                      border: '2px dashed #e0e0e0',
                      borderRadius: '8px',
                      padding: '2rem',
                      textAlign: 'center',
                      color: '#999'
                    }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📍</div>
                      <p>No saved addresses yet</p>
                      <p style={{ fontSize: '0.9rem' }}>Addresses will appear here after the customer places their first order</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CustomerManagement;
