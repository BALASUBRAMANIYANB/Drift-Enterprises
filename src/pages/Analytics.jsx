import React, { useState, useEffect } from 'react';
import { ref as dbRef, get } from 'firebase/database';
import { database } from '../config/firebase';
import { productService } from '../services/productService';
import './Analytics.css';

const Analytics = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [timeFilter, setTimeFilter] = useState('month'); // week, month, year
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [stats, setStats] = useState({
    totalRevenue: 0,
    totalOrders: 0,
    totalCustomers: 0,
    avgOrderValue: 0,
    categoryPerformance: {}
  });

  useEffect(() => {
    loadData();
    
    // Auto-refresh every 30 seconds for live data (FREE solution)
    const interval = setInterval(() => {
      loadData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    setLoading(true);
    try {
      setLastUpdated(new Date()); // Update timestamp
      
      // Load products
      const productsData = await productService.getAllProducts();
      setProducts(productsData);

      // Load orders
      const ordersRef = dbRef(database, 'orders');
      const ordersSnapshot = await get(ordersRef);
      const ordersList = ordersSnapshot.exists() ? Object.entries(ordersSnapshot.val()).map(([id, data]) => ({ id, ...data })) : [];
      setOrders(ordersList);

      // Load users
      const usersRef = dbRef(database, 'users');
      const usersSnapshot = await get(usersRef);
      const usersList = usersSnapshot.exists() 
        ? Object.entries(usersSnapshot.val())
            .filter(([_, u]) => u.role !== 'admin')
            .map(([uid, data]) => ({ uid, ...data }))
        : [];
      setUsers(usersList);

      // Calculate stats
      const totalRevenue = ordersList.reduce((sum, order) => sum + (order.total || 0), 0);
      const totalOrders = ordersList.length;
      const totalCustomers = usersList.length;
      const avgOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

      // Calculate category performance
      const categoryPerf = {};
      ordersList.forEach(order => {
        if (order.items) {
          order.items.forEach(item => {
            const product = productsData.find(p => p.id === item.id);
            if (product) {
              const category = product.category || 'Other';
              if (!categoryPerf[category]) {
                categoryPerf[category] = { sales: 0, revenue: 0 };
              }
              categoryPerf[category].sales += item.quantity;
              categoryPerf[category].revenue += item.price * item.quantity;
            }
          });
        }
      });

      setStats({
        totalRevenue,
        totalOrders,
        totalCustomers,
        avgOrderValue,
        categoryPerformance: categoryPerf
      });
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="analytics-page">
      <div className="page-header">
        <div>
          <h1>📈 Analytics Dashboard</h1>
          <p>Comprehensive insights into sales, products, and customer behavior</p>
          <div style={{ marginTop: '0.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.85rem', color: '#666', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              🔄 Auto-refreshes every 30s • Last updated: {lastUpdated.toLocaleTimeString()}
            </span>
            <button 
              onClick={() => loadData()} 
              disabled={loading}
              style={{ 
                padding: '0.4rem 1rem', 
                background: loading ? '#ccc' : '#e71d36', 
                color: 'white', 
                border: 'none', 
                borderRadius: '6px', 
                cursor: loading ? 'not-allowed' : 'pointer',
                fontSize: '0.85rem',
                fontWeight: '500'
              }}
            >
              {loading ? '⏳ Refreshing...' : '🔄 Refresh Now'}
            </button>
          </div>
        </div>
        <select value={timeFilter} onChange={(e) => setTimeFilter(e.target.value)} className="time-filter">
          <option value="week">Last 7 Days</option>
          <option value="month">Last 30 Days</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      {/* KPI Cards */}
      <div className="kpi-grid">
        <div className="kpi-card revenue">
          <div className="kpi-icon">💰</div>
          <div className="kpi-info">
            <h3>Total Revenue</h3>
            <p className="kpi-value">₹{loading ? '...' : stats.totalRevenue.toLocaleString('en-IN', { maximumFractionDigits: 0 })}</p>
            <span className="kpi-trend positive">↗ Real-time data</span>
          </div>
        </div>

        <div className="kpi-card orders">
          <div className="kpi-icon">🛒</div>
          <div className="kpi-info">
            <h3>Total Orders</h3>
            <p className="kpi-value">{loading ? '...' : stats.totalOrders}</p>
            <span className="kpi-trend positive">↗ Real-time data</span>
          </div>
        </div>

        <div className="kpi-card customers">
          <div className="kpi-icon">👥</div>
          <div className="kpi-info">
            <h3>Total Customers</h3>
            <p className="kpi-value">{loading ? '...' : stats.totalCustomers}</p>
            <span className="kpi-trend positive">↗ Real-time data</span>
          </div>
        </div>

        <div className="kpi-card avg-order">
          <div className="kpi-icon">📊</div>
          <div className="kpi-info">
            <h3>Avg Order Value</h3>
            <p className="kpi-value">₹{loading ? '...' : Math.round(stats.avgOrderValue).toLocaleString('en-IN')}</p>
            <span className="kpi-trend neutral">→ Real-time data</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="charts-grid">
        <div className="chart-card">
          <h3>📊 Sales Overview (Last 7 Days)</h3>
          <div style={{ padding: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {(() => {
                // Calculate daily sales from real orders
                const today = new Date();
                const dailySales = [];
                const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                
                for (let i = 6; i >= 0; i--) {
                  const date = new Date(today);
                  date.setDate(today.getDate() - i);
                  const dayName = days[date.getDay()];
                  
                  // Calculate sales for this day
                  const daySales = orders.filter(order => {
                    if (!order.createdAt) return false;
                    const orderDate = new Date(order.createdAt);
                    return orderDate.toDateString() === date.toDateString();
                  }).reduce((sum, order) => sum + (order.total || 0), 0);
                  
                  dailySales.push({ day: dayName, value: daySales });
                }
                
                const maxValue = Math.max(...dailySales.map(d => d.value), 1000);
                
                return dailySales.map(({ day, value }) => {
                  const percentage = (value / maxValue) * 100;
                  return (
                    <div key={day} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ minWidth: '40px', fontWeight: '500' }}>{day}</span>
                      <div style={{ flex: 1, background: '#f0f0f0', borderRadius: '8px', height: '32px', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${percentage}%`, 
                          height: '100%', 
                          background: `linear-gradient(90deg, #e71d36 0%, #ff6b6b ${percentage}%)`,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-end',
                          paddingRight: '0.5rem',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '0.85rem',
                          transition: 'width 0.5s ease'
                        }}>
                          {percentage > 15 && value > 0 && `₹${value >= 1000 ? (value / 1000).toFixed(1) + 'k' : value}`}
                        </div>
                      </div>
                      <span style={{ minWidth: '80px', fontSize: '0.9rem', color: '#666' }}>
                        ₹{value.toLocaleString('en-IN')}
                      </span>
                    </div>
                  );
                });
              })()}
            </div>
          </div>
        </div>

        <div className="chart-card">
          <h3>🎯 Category Performance</h3>
          <div style={{ padding: '2rem' }}>
            {Object.entries(stats.categoryPerformance).length === 0 ? (
              <p style={{ color: '#999', textAlign: 'center', padding: '2rem' }}>No sales data yet</p>
            ) : (
              Object.entries(stats.categoryPerformance).map(([category, data]) => {
                const maxRevenue = Math.max(...Object.values(stats.categoryPerformance).map(c => c.revenue), 200000);
                const percentage = (data.revenue / maxRevenue) * 100;
                const colors = {
                  'Mobiles': '#e71d36',
                  'Electronics': '#ff6b6b',
                  'Appliances': '#ffa500',
                  'Home & Kitchen': '#28a745',
                  'Beauty & Personal Care': '#ff69b4',
                  'Books & Audible': '#4169e1',
                  'TV': '#9370db'
                };
                return (
                  <div key={category} style={{ marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <span style={{ fontWeight: '600' }}>{category}</span>
                      <span style={{ color: '#666' }}>{data.sales} sales • ₹{(data.revenue / 1000).toFixed(0)}k</span>
                    </div>
                    <div style={{ background: '#f0f0f0', borderRadius: '8px', height: '12px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: `${percentage}%`, 
                        height: '100%', 
                        background: colors[category] || '#e71d36',
                        borderRadius: '8px',
                        transition: 'width 0.5s ease'
                      }} />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>

      {/* Top Products */}
      <div className="top-products-section">
        <h3>⭐ Top Selling Products</h3>
        <div className="products-grid">
          {loading ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#999' }}>Loading products...</p>
          ) : products.length === 0 ? (
            <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#999' }}>No products yet</p>
          ) : (
            products.slice(0, 5).map((product, index) => (
              <div key={product.id} className="product-card">
                <div className="rank-badge">#{index + 1}</div>
                <img src={product.images?.[0] || product.image || 'https://via.placeholder.com/200'} alt={product.title || product.name} />
                <h4>{product.title || product.name}</h4>
                <p className="price">₹{(product.price || 0).toLocaleString('en-IN')}</p>
                <div className="product-stats">
                  <span>Price: ₹{(product.price || 0).toLocaleString('en-IN')}</span>
                  <span>Stock: {product.stock || 0}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Customer Insights */}
      <div className="insights-section">
        <h3>💡 Customer Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <h4>Customer Lifetime Value</h4>
            <p className="insight-value">₹{stats.totalCustomers > 0 ? Math.round(stats.totalRevenue / stats.totalCustomers).toLocaleString('en-IN') : '0'}</p>
          </div>
          <div className="insight-card">
            <h4>Total Customers</h4>
            <p className="insight-value">{stats.totalCustomers}</p>
          </div>
          <div className="insight-card">
            <h4>Average Order Value</h4>
            <p className="insight-value">₹{Math.round(stats.avgOrderValue).toLocaleString('en-IN')}</p>
          </div>
          <div className="insight-card">
            <h4>Total Orders</h4>
            <p className="insight-value">{stats.totalOrders}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
