import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ref as dbRef, get, push, serverTimestamp } from "firebase/database";
import { database } from "../config/firebase";
import { useCart } from "../components/CartProvider";
import { useAuth } from "../contexts/AuthContext";
import { productService } from "../services/productService";

export default function ProductDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const { user } = useAuth();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [reviews, setReviews] = useState([]);
	const [reviewsLoading, setReviewsLoading] = useState(false);
	const [showReviewForm, setShowReviewForm] = useState(false);
	const [reviewForm, setReviewForm] = useState({ rating: 5, comment: '' });
	const [submittingReview, setSubmittingReview] = useState(false);
	const { addItem } = useCart();

	useEffect(() => {
		const loadProduct = async () => {
			try {
				const firebaseProduct = await productService.getProductById(id);
				// Transform Firebase product to match expected format
				const transformedProduct = {
					...firebaseProduct,
					image: firebaseProduct.images?.[0] || firebaseProduct.image || 'https://via.placeholder.com/400'
				};
				setProduct(transformedProduct);
			} catch (error) {
				console.error("Error loading product:", error);
				setProduct(null);
			} finally {
				setLoading(false);
			}
		};

		loadProduct();
		loadReviews();
	}, [id]);

	const loadReviews = async () => {
		setReviewsLoading(true);
		try {
			const reviewsRef = dbRef(database, 'reviews');
			const snapshot = await get(reviewsRef);
			if (snapshot.exists()) {
				const allReviews = snapshot.val();
				const productReviews = Object.entries(allReviews)
					.filter(([_, review]) => review.productId === id && review.status === 'approved')
					.map(([key, review]) => ({ id: key, ...review }))
					.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
				setReviews(productReviews);
			}
		} catch (error) {
			console.error('Error loading reviews:', error);
		} finally {
			setReviewsLoading(false);
		}
	};

	const handleSubmitReview = async (e) => {
		e.preventDefault();
		if (!user) {
			alert('Please login to post a review');
			return;
		}
		if (!reviewForm.comment.trim()) {
			alert('Please write a comment');
			return;
		}

		setSubmittingReview(true);
		try {
			const reviewsRef = dbRef(database, 'reviews');
			await push(reviewsRef, {
				productId: id,
				userId: user.uid,
				userName: user.displayName || 'Anonymous',
				rating: parseInt(reviewForm.rating),
				comment: reviewForm.comment,
				status: 'pending',
				createdAt: new Date().toISOString()
			});
			alert('✅ Review submitted! It will appear after admin approval.');
			setReviewForm({ rating: 5, comment: '' });
			setShowReviewForm(false);
		} catch (error) {
			console.error('Error submitting review:', error);
			alert('❌ Failed to submit review');
		} finally {
			setSubmittingReview(false);
		}
	};

	if (loading) {
		return (
			<div className="page-shell" style={{ maxWidth: "1200px", textAlign: "center", padding: "4rem 2rem" }}>
				<p style={{ fontSize: '2rem', color: '#e71d36', fontWeight: '700' }}>⏳ Loading product...</p>
			</div>
		);
	}

	if (!product)
		return (
			<div className="page-shell" style={{ maxWidth: "1200px", textAlign: "center" }}>
				<h1>Product not found</h1>
				<p>The product you're looking for doesn't exist.</p>
				<Link to="/products" style={{ color: "#e50914", fontWeight: "bold" }}>
					Back to products
				</Link>
			</div>
		);

	const handleAddToCart = () => {
		addItem(product);
		alert("✓ Added to cart successfully!");
	};

	const handleBuyNow = () => {
		addItem(product);
		navigate("/checkout");
	};

	const images = product.images || [product.image];
	const currentImage = images[currentImageIndex];

	const nextImage = () => {
		setCurrentImageIndex((prev) => (prev + 1) % images.length);
	};

	const prevImage = () => {
		setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
	};

	return (
		<div className="page-shell product-detail" style={{ maxWidth: "1200px" }}>
			<div className="product-detail-layout">
				<div className="product-detail-image">
					{images.length > 1 && (
						<div style={{ position: 'relative' }}>
							<button onClick={prevImage} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>{'<'}</button>
							<img src={currentImage} alt={product.title} style={{ width: '100%', height: 'auto' }} />
							<button onClick={nextImage} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', padding: '10px', cursor: 'pointer' }}>{'>'}</button>
							<div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '5px' }}>
								{images.map((_, index) => (
									<span key={index} onClick={() => setCurrentImageIndex(index)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: index === currentImageIndex ? 'white' : 'rgba(255,255,255,0.5)', cursor: 'pointer' }}></span>
								))}
							</div>
						</div>
					)}
					{images.length === 1 && <img src={currentImage} alt={product.title} />}
				</div>
				<div className="product-detail-main">
					<h1>{product.title}</h1>
					<p className="amazon-product-rating">
						{'★'.repeat(Math.round(product.rating))} <span className="rating-number">{product.rating.toFixed(1)}</span>
					</p>
					<p className="product-detail-price">
						{product.mrp && <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '10px' }}>MRP ₹{product.mrp.toFixed(2)}</span>}
						<span className="currency">₹</span>
						{product.price.toFixed(2)}
					</p>
					<p className="product-detail-description">{product.description}</p>
				</div>
				<aside className="product-detail-buybox">
					<p className="product-detail-price">
						{product.mrp && <span style={{ textDecoration: 'line-through', color: '#888', marginRight: '10px' }}>MRP ₹{product.mrp.toFixed(2)}</span>}
						<span className="currency">₹</span>
						{product.price.toFixed(2)}
					</p>
					<p className="text-muted">FREE delivery with DRIFT ENERPRISES Prime. This is a demo experience.</p>
					<button className="primary-button wide" onClick={handleAddToCart} style={{ width: "100%" }}>
						🛒 Add to Cart
					</button>
					<button className="primary-button wide" onClick={handleBuyNow} style={{ marginTop: ".75rem", width: "100%", background: "linear-gradient(135deg, #1a1a1a 0%, #000000 100%)" }}>
						⚡ Buy Now
					</button>
				</aside>
			</div>
			<p style={{ marginTop: ".75rem", fontSize: ".85rem" }}>
				<Link to="/products" className="amazon-link">
					Back to all products
				</Link>
			</p>

			{/* Reviews Section */}
			<div style={{ marginTop: '3rem', borderTop: '2px solid #e8e8e8', paddingTop: '2rem' }}>
				<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
					<h2 style={{ fontSize: '1.5rem' }}>⭐ Reviews ({reviews.length})</h2>
					<button 
						onClick={() => setShowReviewForm(!showReviewForm)}
						style={{ padding: '0.75rem 1.5rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
					>
						{showReviewForm ? '❌ Cancel' : '✍️ Write Review'}
					</button>
				</div>

				{showReviewForm && (
					<form onSubmit={handleSubmitReview} style={{ background: '#f9f9f9', padding: '2rem', borderRadius: '12px', marginBottom: '2rem', border: '1px solid #e8e8e8' }}>
						<div style={{ marginBottom: '1.5rem' }}>
							<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Rating:</label>
							<select 
								value={reviewForm.rating}
								onChange={(e) => setReviewForm({ ...reviewForm, rating: e.target.value })}
								style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem' }}
							>
								<option value="5">⭐⭐⭐⭐⭐ Excellent</option>
								<option value="4">⭐⭐⭐⭐ Very Good</option>
								<option value="3">⭐⭐⭐ Good</option>
								<option value="2">⭐⭐ Fair</option>
								<option value="1">⭐ Poor</option>
							</select>
						</div>
						<div style={{ marginBottom: '1.5rem' }}>
							<label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Your Review:</label>
							<textarea 
								value={reviewForm.comment}
								onChange={(e) => setReviewForm({ ...reviewForm, comment: e.target.value })}
								placeholder="Share your experience with this product..."
								style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '1rem', minHeight: '120px', fontFamily: 'inherit' }}
							/>
						</div>
						<button 
							type="submit"
							disabled={submittingReview}
							style={{ padding: '0.75rem 2rem', background: '#e71d36', color: 'white', border: 'none', borderRadius: '8px', cursor: submittingReview ? 'not-allowed' : 'pointer', fontWeight: '600', opacity: submittingReview ? 0.6 : 1 }}
						>
							{submittingReview ? '⏳ Submitting...' : '📤 Submit Review'}
						</button>
					</form>
				)}

				{reviewsLoading ? (
					<p style={{ textAlign: 'center', color: '#666' }}>⏳ Loading reviews...</p>
				) : reviews.length === 0 ? (
					<p style={{ textAlign: 'center', color: '#999', padding: '2rem' }}>No reviews yet. Be the first to review!</p>
				) : (
					<div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
						{reviews.map((review) => (
							<div 
								key={review.id}
								style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '12px', border: '1px solid #e8e8e8' }}
							>
								<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
									<div>
										<p style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{review.userName}</p>
										<p style={{ color: '#999', fontSize: '0.85rem' }}>
											{new Date(review.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
										</p>
									</div>
									<p style={{ fontSize: '1.1rem' }}>{'⭐'.repeat(review.rating)}</p>
								</div>
								<p style={{ color: '#333', lineHeight: '1.6' }}>{review.comment}</p>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
}
