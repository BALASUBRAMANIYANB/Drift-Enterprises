import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ref as dbRef, get, set } from "firebase/database";
import { database } from "../config/firebase";

export default function Account() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');
  const [loading, setLoading] = useState(false);
  
  // Profile data
  const [profile, setProfile] = useState({
    fullName: '',
    phone: '',
    email: ''
  });

  // Addresses
  const [addresses, setAddresses] = useState([]);
  const [newAddress, setNewAddress] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    phone: '',
    isDefault: false
  });

  useEffect(() => {
    if (user) {
      loadUserData();
    }
  }, [user]);

  const loadUserData = async () => {
    try {
      const userRef = dbRef(database, `users/${user.uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProfile({
          fullName: data.fullName || '',
          phone: data.phone || '',
          email: data.email || user.email
        });
        setAddresses(data.addresses || []);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      const userRef = dbRef(database, `users/${user.uid}`);
      await set(userRef, {
        ...user,
        ...profile,
        addresses
      });
      alert('✅ Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('❌ Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const addAddress = () => {
    if (!newAddress.name || !newAddress.address || !newAddress.city) {
      alert('Please fill in all required fields');
      return;
    }
    setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    setNewAddress({
      name: '',
      address: '',
      city: '',
      state: '',
      pincode: '',
      phone: '',
      isDefault: false
    });
    alert('✅ Address added! Click "Save Changes" to save.');
  };

  const removeAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  return (
    <div className="page-shell" style={{ maxWidth: "1200px" }}>
      <h1>👤 My Account</h1>
      <div style={{ marginTop: "2rem" }}>
        <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "20px", marginBottom: "2rem", border: "1px solid #e8e8e8" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#1a1a1a" }}>👋 Welcome, {user?.fullName || user?.username}</h2>
          <p style={{ color: "#666", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1.5rem" }}>
            Manage your personal information, track orders, and update your preferences.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <button onClick={() => setActiveSection('overview')} style={{ padding: "0.75rem 1.5rem", background: activeSection === 'overview' ? '#e71d36' : 'white', color: activeSection === 'overview' ? 'white' : '#666', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
            📊 Overview
          </button>
          <button onClick={() => setActiveSection('profile')} style={{ padding: "0.75rem 1.5rem", background: activeSection === 'profile' ? '#e71d36' : 'white', color: activeSection === 'profile' ? 'white' : '#666', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
            👤 Profile
          </button>
          <button onClick={() => setActiveSection('addresses')} style={{ padding: "0.75rem 1.5rem", background: activeSection === 'addresses' ? '#e71d36' : 'white', color: activeSection === 'addresses' ? 'white' : '#666', border: '1px solid #ddd', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
            📍 Addresses
          </button>
          <Link to="/orders" style={{ padding: "0.75rem 1.5rem", background: 'white', color: '#666', border: '1px solid #ddd', borderRadius: '8px', textDecoration: 'none', fontWeight: '600' }}>
            📦 Orders
          </Link>
        </div>

        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📦</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Your Orders</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}>Track, return, or buy things again</p>
              <Link to="/orders" style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#e71d36', color: 'white', textDecoration: 'none', borderRadius: '8px' }}>View Orders</Link>
            </div>

            <div onClick={() => setActiveSection('profile')} style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", cursor: 'pointer' }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>👤</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Profile Settings</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}>Edit your name and contact info</p>
              <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#e71d36', color: 'white', borderRadius: '8px' }}>Manage</span>
            </div>

            <div onClick={() => setActiveSection('addresses')} style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center", cursor: 'pointer' }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📍</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Addresses</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}>Edit addresses for orders and gifts</p>
              <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#e71d36', color: 'white', borderRadius: '8px' }}>Manage</span>
            </div>

            <div style={{ background: "linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)", padding: "2rem", borderRadius: "16px", border: "1px solid #e8e8e8", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>💳</div>
              <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#1a1a1a" }}>Payment Options</h3>
              <p style={{ color: "#666", fontSize: "0.9rem", marginBottom: "1rem" }}>Manage payment methods</p>
              <span style={{ display: 'inline-block', padding: '0.5rem 1.5rem', background: '#6c757d', color: 'white', borderRadius: '8px' }}>Coming Soon</span>
            </div>
          </div>
        )}

        {/* Profile Section */}
        {activeSection === 'profile' && (
          <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e8e8e8' }}>
            <h2 style={{ marginBottom: '1.5rem' }}>👤 Profile Information</h2>
            <div style={{ display: 'grid', gap: '1.5rem', maxWidth: '600px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Full Name</label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', background: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Phone Number</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  placeholder="+91 1234567890"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
              </div>
              <button onClick={saveProfile} disabled={loading} style={{ padding: '0.75rem 2rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                {loading ? '⏳ Saving...' : '💾 Save Changes'}
              </button>
            </div>
          </div>
        )}

        {/* Addresses Section */}
        {activeSection === 'addresses' && (
          <div>
            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', border: '1px solid #e8e8e8', marginBottom: '2rem' }}>
              <h2 style={{ marginBottom: '1.5rem' }}>➕ Add New Address</h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                <input type="text" placeholder="Full Name" value={newAddress.name} onChange={(e) => setNewAddress({ ...newAddress, name: e.target.value })} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="tel" placeholder="Phone Number" value={newAddress.phone} onChange={(e) => setNewAddress({ ...newAddress, phone: e.target.value })} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>
              <textarea placeholder="Address (House No, Building, Street)" value={newAddress.address} onChange={(e) => setNewAddress({ ...newAddress, address: e.target.value })} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', marginBottom: '1rem', minHeight: '80px' }} />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <input type="text" placeholder="City" value={newAddress.city} onChange={(e) => setNewAddress({ ...newAddress, city: e.target.value })} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="text" placeholder="State" value={newAddress.state} onChange={(e) => setNewAddress({ ...newAddress, state: e.target.value })} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                <input type="text" placeholder="PIN Code" value={newAddress.pincode} onChange={(e) => setNewAddress({ ...newAddress, pincode: e.target.value })} style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
              </div>
              <button onClick={addAddress} style={{ marginTop: '1rem', padding: '0.75rem 2rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}>
                ➕ Add Address
              </button>
            </div>

            <h2 style={{ marginBottom: '1.5rem' }}>📍 Saved Addresses</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {addresses.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>No addresses saved yet</p>
              ) : (
                addresses.map((addr) => (
                  <div key={addr.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e8e8e8', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{addr.name}</h4>
                      <p style={{ color: '#666', marginBottom: '0.25rem' }}>{addr.address}</p>
                      <p style={{ color: '#666' }}>{addr.city}, {addr.state} - {addr.pincode}</p>
                      <p style={{ color: '#666' }}>Phone: {addr.phone}</p>
                    </div>
                    <button onClick={() => removeAddress(addr.id)} style={{ padding: '0.5rem 1rem', background: '#dc3545', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                      🗑️ Remove
                    </button>
                  </div>
                ))
              )}
            </div>
            {addresses.length > 0 && (
              <button onClick={saveProfile} disabled={loading} style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600', fontSize: '1rem' }}>
                {loading ? '⏳ Saving...' : '💾 Save All Changes'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
