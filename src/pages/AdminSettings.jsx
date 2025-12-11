import React, { useState, useEffect } from 'react';
import { ref as dbRef, get, set } from 'firebase/database';
import { database } from '../config/firebase';
import { useAuth } from '../contexts/AuthContext';
import './HomePageManager.css';

const AdminSettings = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('profile');
  const [loading, setLoading] = useState(false);

  // Profile settings
  const [profile, setProfile] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  // Site settings
  const [siteSettings, setSiteSettings] = useState({
    siteName: 'DRIFT ENERPRISES',
    tagline: 'Your One-Stop Shop',
    email: 'contact@drift.com',
    phone: '+91 1234567890',
    address: 'Mumbai, Maharashtra, India',
    currency: 'INR',
    taxRate: 18
  });

  // Shipping settings
  const [shipping, setShipping] = useState({
    freeShippingThreshold: 500,
    standardShipping: 40,
    expressShipping: 100,
    estimatedDays: '3-7 business days'
  });

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      // Load user profile
      if (user) {
        const userRef = dbRef(database, `users/${user.uid}`);
        const userSnap = await get(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.val();
          setProfile({
            fullName: userData.fullName || '',
            email: userData.email || '',
            phone: userData.phone || '',
            address: userData.address || ''
          });
        }
      }

      // Load site settings
      const siteRef = dbRef(database, 'siteSettings');
      const siteSnap = await get(siteRef);
      if (siteSnap.exists()) {
        setSiteSettings({ ...siteSettings, ...siteSnap.val() });
      }

      // Load shipping settings
      const shippingRef = dbRef(database, 'shippingSettings');
      const shippingSnap = await get(shippingRef);
      if (shippingSnap.exists()) {
        setShipping({ ...shipping, ...shippingSnap.val() });
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };

  const saveProfile = async () => {
    setLoading(true);
    try {
      const userRef = dbRef(database, `users/${user.uid}`);
      await set(userRef, {
        ...user,
        ...profile
      });
      alert('✅ Profile updated successfully!');
    } catch (error) {
      console.error('Error saving profile:', error);
      alert('❌ Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  const saveSiteSettings = async () => {
    setLoading(true);
    try {
      const siteRef = dbRef(database, 'siteSettings');
      await set(siteRef, siteSettings);
      alert('✅ Site settings updated successfully!');
    } catch (error) {
      console.error('Error saving site settings:', error);
      alert('❌ Failed to update site settings');
    } finally {
      setLoading(false);
    }
  };

  const saveShipping = async () => {
    setLoading(true);
    try {
      const shippingRef = dbRef(database, 'shippingSettings');
      await set(shippingRef, shipping);
      alert('✅ Shipping settings updated successfully!');
    } catch (error) {
      console.error('Error saving shipping settings:', error);
      alert('❌ Failed to update shipping settings');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="homepage-manager">
      <div className="manager-header">
        <h1>⚙️ Settings</h1>
        <p>Manage your profile, site configuration, and system settings</p>
      </div>

      {/* Tabs */}
      <div className="section-tabs">
        <button className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>
          👤 Admin Profile
        </button>
        <button className={activeTab === 'site' ? 'active' : ''} onClick={() => setActiveTab('site')}>
          🌐 Site Settings
        </button>
        <button className={activeTab === 'shipping' ? 'active' : ''} onClick={() => setActiveTab('shipping')}>
          📦 Shipping & Delivery
        </button>
        <button className={activeTab === 'payment' ? 'active' : ''} onClick={() => setActiveTab('payment')}>
          💳 Payment Gateway
        </button>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="content-section">
          <div className="upload-card">
            <h2>👤 Admin Profile</h2>
            <p className="helper-text">Manage your personal information and credentials</p>
            
            <div className="form-grid">
              <div className="form-group full-width">
                <label>Full Name</label>
                <input
                  type="text"
                  value={profile.fullName}
                  onChange={(e) => setProfile({ ...profile, fullName: e.target.value })}
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  value={profile.email}
                  disabled
                  style={{ background: '#f5f5f5', cursor: 'not-allowed' }}
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  placeholder="+91 1234567890"
                />
              </div>

              <div className="form-group full-width">
                <label>Address</label>
                <textarea
                  value={profile.address}
                  onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                  placeholder="Enter your address"
                  rows="3"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                />
              </div>
            </div>

            <button onClick={saveProfile} disabled={loading} className="submit-btn">
              {loading ? '⏳ Saving...' : '💾 Save Profile'}
            </button>
          </div>
        </div>
      )}

      {/* Site Settings Tab */}
      {activeTab === 'site' && (
        <div className="content-section">
          <div className="upload-card">
            <h2>🌐 Site Configuration</h2>
            <p className="helper-text">Configure your e-commerce site settings</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Site Name</label>
                <input
                  type="text"
                  value={siteSettings.siteName}
                  onChange={(e) => setSiteSettings({ ...siteSettings, siteName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Tagline</label>
                <input
                  type="text"
                  value={siteSettings.tagline}
                  onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Contact Email</label>
                <input
                  type="email"
                  value={siteSettings.email}
                  onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Contact Phone</label>
                <input
                  type="tel"
                  value={siteSettings.phone}
                  onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                />
              </div>

              <div className="form-group full-width">
                <label>Business Address</label>
                <input
                  type="text"
                  value={siteSettings.address}
                  onChange={(e) => setSiteSettings({ ...siteSettings, address: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Currency</label>
                <select
                  value={siteSettings.currency}
                  onChange={(e) => setSiteSettings({ ...siteSettings, currency: e.target.value })}
                  style={{ padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                </select>
              </div>

              <div className="form-group">
                <label>Tax Rate (%)</label>
                <input
                  type="number"
                  value={siteSettings.taxRate}
                  onChange={(e) => setSiteSettings({ ...siteSettings, taxRate: parseFloat(e.target.value) })}
                  min="0"
                  max="100"
                  step="0.1"
                />
              </div>
            </div>

            <button onClick={saveSiteSettings} disabled={loading} className="submit-btn">
              {loading ? '⏳ Saving...' : '💾 Save Settings'}
            </button>
          </div>
        </div>
      )}

      {/* Shipping Tab */}
      {activeTab === 'shipping' && (
        <div className="content-section">
          <div className="upload-card">
            <h2>📦 Shipping & Delivery</h2>
            <p className="helper-text">Configure shipping rates and delivery options</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Free Shipping Threshold (₹)</label>
                <input
                  type="number"
                  value={shipping.freeShippingThreshold}
                  onChange={(e) => setShipping({ ...shipping, freeShippingThreshold: parseFloat(e.target.value) })}
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Standard Shipping (₹)</label>
                <input
                  type="number"
                  value={shipping.standardShipping}
                  onChange={(e) => setShipping({ ...shipping, standardShipping: parseFloat(e.target.value) })}
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Express Shipping (₹)</label>
                <input
                  type="number"
                  value={shipping.expressShipping}
                  onChange={(e) => setShipping({ ...shipping, expressShipping: parseFloat(e.target.value) })}
                  min="0"
                />
              </div>

              <div className="form-group">
                <label>Estimated Delivery Time</label>
                <input
                  type="text"
                  value={shipping.estimatedDays}
                  onChange={(e) => setShipping({ ...shipping, estimatedDays: e.target.value })}
                  placeholder="e.g., 3-7 business days"
                />
              </div>
            </div>

            <button onClick={saveShipping} disabled={loading} className="submit-btn">
              {loading ? '⏳ Saving...' : '💾 Save Shipping Settings'}
            </button>
          </div>
        </div>
      )}

      {/* Payment Tab */}
      {activeTab === 'payment' && (
        <div className="content-section">
          <div className="upload-card">
            <h2>💳 Payment Gateway Configuration</h2>
            <p className="helper-text">Configure payment methods and gateway settings</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
              <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '1rem' }}>🇮🇳 Razorpay (Recommended for India)</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Accept UPI, Cards, Netbanking, and Wallets</p>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label>API Key</label>
                  <input type="text" placeholder="Enter Razorpay API Key" />
                </div>
                <div className="form-group">
                  <label>Secret Key</label>
                  <input type="password" placeholder="Enter Razorpay Secret Key" />
                </div>
                <button style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  Save Razorpay Settings
                </button>
              </div>

              <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '1rem' }}>💰 Cash on Delivery</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Allow customers to pay on delivery</p>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked />
                  <span>Enable Cash on Delivery</span>
                </label>
              </div>

              <div style={{ padding: '1.5rem', border: '2px solid #e8e8e8', borderRadius: '12px' }}>
                <h3 style={{ marginBottom: '1rem' }}>🌍 Stripe (International)</h3>
                <p style={{ color: '#666', marginBottom: '1rem' }}>Accept international credit/debit cards</p>
                <div className="form-group" style={{ marginBottom: '1rem' }}>
                  <label>Publishable Key</label>
                  <input type="text" placeholder="Enter Stripe Publishable Key" />
                </div>
                <div className="form-group">
                  <label>Secret Key</label>
                  <input type="password" placeholder="Enter Stripe Secret Key" />
                </div>
                <button style={{ marginTop: '1rem', padding: '0.75rem 1.5rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                  Save Stripe Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminSettings;
