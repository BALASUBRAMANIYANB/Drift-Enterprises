import React, { useState, useEffect } from 'react';
import { ref as dbRef, get, set, remove } from 'firebase/database';
import { database } from '../config/firebase';
import './OrderManagement.css';

const ReviewsManagement = () => {
  const [reviews, setReviews] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterRating, setFilterRating] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');
  const [replyText, setReplyText] = useState({});

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
      // Load products
      const productsRef = dbRef(database, 'products');
      const productsSnap = await get(productsRef);
      const productsList = productsSnap.exists() 
        ? Object.entries(productsSnap.val()).map(([id, data]) => ({ id, ...data }))
        : [];
      setProducts(productsList);

      // Load reviews
      const reviewsRef = dbRef(database, 'reviews');
      const reviewsSnap = await get(reviewsRef);
      const reviewsList = reviewsSnap.exists()
        ? Object.entries(reviewsSnap.val()).map(([id, data]) => ({ id, ...data }))
        : generateMockReviews(productsList);
      
      setReviews(reviewsList);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateMockReviews = (productsList) => {
    const mockReviews = [];
    const reviewTexts = {
      5: ['Excellent product! Highly recommended.', 'Amazing quality, worth every penny!', 'Best purchase ever!'],
      4: ['Very good product, happy with the purchase.', 'Great quality, minor issues.', 'Good value for money.'],
      3: ['Average product, meets expectations.', 'Okay for the price.', 'Neither good nor bad.'],
      2: ['Not satisfied, expected better.', 'Below average quality.', 'Disappointed with this purchase.'],
      1: ['Terrible product, waste of money.', 'Very poor quality.', 'Would not recommend.']
    };
    const names = ['Rahul S.', 'Priya K.', 'Amit P.', 'Sneha M.', 'Vikram R.', 'Anjali T.'];
    
    productsList.slice(0, 5).forEach((product, idx) => {
      const rating = 5 - (idx % 5);
      mockReviews.push({
        id: `review-${idx + 1}`,
        productId: product.id,
        productName: product.name,
        userName: names[idx % names.length],
        rating,
        comment: reviewTexts[rating][Math.floor(Math.random() * reviewTexts[rating].length)],
        status: idx % 3 === 0 ? 'pending' : 'approved',
        createdAt: Date.now() - (idx * 86400000),
        adminReply: idx % 4 === 0 ? 'Thank you for your feedback!' : null
      });
    });
    
    return mockReviews;
  };

  const handleStatusChange = async (reviewId, newStatus) => {
    try {
      const reviewRef = dbRef(database, `reviews/${reviewId}`);
      await set(reviewRef, { ...reviews.find(r => r.id === reviewId), status: newStatus });
      alert(`✅ Review ${newStatus}!`);
      loadData();
    } catch (error) {
      console.error('Error updating review:', error);
      alert('❌ Failed to update review');
    }
  };

  const handleReply = async (reviewId) => {
    const reply = replyText[reviewId];
    if (!reply || !reply.trim()) {
      alert('Please enter a reply message');
      return;
    }

    try {
      const review = reviews.find(r => r.id === reviewId);
      const reviewRef = dbRef(database, `reviews/${reviewId}`);
      await set(reviewRef, { ...review, adminReply: reply });
      alert('✅ Reply posted successfully!');
      setReplyText({ ...replyText, [reviewId]: '' });
      loadData();
    } catch (error) {
      console.error('Error posting reply:', error);
      alert('❌ Failed to post reply');
    }
  };

  const handleDelete = async (reviewId) => {
    if (!window.confirm('Delete this review?')) return;

    try {
      const reviewRef = dbRef(database, `reviews/${reviewId}`);
      await remove(reviewRef);
      alert('✅ Review deleted!');
      loadData();
    } catch (error) {
      console.error('Error deleting review:', error);
      alert('❌ Failed to delete review');
    }
  };

  const filteredReviews = reviews.filter(review => {
    const matchesRating = filterRating === 'all' || review.rating === parseInt(filterRating);
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    return matchesRating && matchesStatus;
  });

  const stats = {
    total: reviews.length,
    pending: reviews.filter(r => r.status === 'pending').length,
    approved: reviews.filter(r => r.status === 'approved').length,
    avgRating: reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : 0
  };

  if (loading) {
    return <div className="page-loading">Loading reviews...</div>;
  }

  return (
    <div className="order-management">
      <div className="page-header">
        <div>
          <h1>⭐ Reviews Management</h1>
          <p>Moderate, approve, and respond to customer reviews</p>
        </div>
      </div>

      {/* Stats */}
      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginBottom: '2rem' }}>
        <div className="stat-card">
          <span className="stat-icon">💬</span>
          <div className="stat-info">
            <h3>Total Reviews</h3>
            <p className="stat-value">{stats.total}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⏳</span>
          <div className="stat-info">
            <h3>Pending</h3>
            <p className="stat-value">{stats.pending}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">✅</span>
          <div className="stat-info">
            <h3>Approved</h3>
            <p className="stat-value">{stats.approved}</p>
          </div>
        </div>
        <div className="stat-card">
          <span className="stat-icon">⭐</span>
          <div className="stat-info">
            <h3>Avg Rating</h3>
            <p className="stat-value">{stats.avgRating}</p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-section">
        <select value={filterRating} onChange={(e) => setFilterRating(e.target.value)} className="filter-select">
          <option value="all">All Ratings</option>
          <option value="5">⭐⭐⭐⭐⭐ (5 Stars)</option>
          <option value="4">⭐⭐⭐⭐ (4 Stars)</option>
          <option value="3">⭐⭐⭐ (3 Stars)</option>
          <option value="2">⭐⭐ (2 Stars)</option>
          <option value="1">⭐ (1 Star)</option>
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="filter-select">
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
        </select>
      </div>

      {/* Reviews List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '2rem' }}>
        {filteredReviews.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#999', padding: '3rem' }}>No reviews found</p>
        ) : (
          filteredReviews.map((review) => (
            <div key={review.id} style={{ background: 'white', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e8e8e8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <div>
                  <h4 style={{ marginBottom: '0.5rem' }}>{review.productName}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>By {review.userName} • {new Date(review.createdAt).toLocaleDateString()}</p>
                </div>
                <span className={`status-badge ${review.status === 'approved' ? 'delivered' : 'pending'}`}>
                  {review.status}
                </span>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <div style={{ color: '#ffa500', marginBottom: '0.5rem' }}>
                  {'⭐'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
                <p style={{ lineHeight: '1.6' }}>{review.comment}</p>
              </div>

              {review.adminReply && (
                <div style={{ background: '#f9f9f9', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
                  <strong style={{ color: '#e71d36' }}>Admin Reply:</strong>
                  <p style={{ marginTop: '0.5rem' }}>{review.adminReply}</p>
                </div>
              )}

              {!review.adminReply && (
                <div style={{ marginBottom: '1rem' }}>
                  <textarea
                    placeholder="Write a reply to this review..."
                    value={replyText[review.id] || ''}
                    onChange={(e) => setReplyText({ ...replyText, [review.id]: e.target.value })}
                    style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', minHeight: '80px' }}
                  />
                </div>
              )}

              <div style={{ display: 'flex', gap: '0.75rem' }}>
                {review.status === 'pending' && (
                  <>
                    <button onClick={() => handleStatusChange(review.id, 'approved')} style={{ padding: '0.5rem 1rem', background: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                      ✅ Approve
                    </button>
                    <button onClick={() => handleStatusChange(review.id, 'rejected')} style={{ padding: '0.5rem 1rem', background: '#dc3545', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                      ❌ Reject
                    </button>
                  </>
                )}
                {!review.adminReply && (
                  <button onClick={() => handleReply(review.id)} style={{ padding: '0.5rem 1rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    💬 Post Reply
                  </button>
                )}
                <button onClick={() => handleDelete(review.id)} style={{ padding: '0.5rem 1rem', background: '#6c757d', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', marginLeft: 'auto' }}>
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewsManagement;
