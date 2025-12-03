import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function ProductDetail() {
	const { id } = useParams();
	const navigate = useNavigate();
	const [product, setProduct] = useState(null);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const { addItem } = useCart();

	useEffect(() => {
		fetch(`http://localhost:4000/api/products/${id}`)
			.then((r) => r.json())
			.then(setProduct)
			.catch(() => setProduct(null));
	}, [id]);

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
		alert("Added to cart!");
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
						<span className="currency">$</span>
						{product.price.toFixed(2)}
					</p>
					<p className="product-detail-description">{product.description}</p>
				</div>
				<aside className="product-detail-buybox">
					<p className="product-detail-price">
						<span className="currency">$</span>
						{product.price.toFixed(2)}
					</p>
					<p className="text-muted">FREE delivery with DRIFT ENTERPRISES Prime. This is a demo experience.</p>
					<button className="primary-button wide" onClick={handleAddToCart} style={{ width: "100%" }}>
						Add to Cart
					</button>
					<button className="primary-button wide" style={{ marginTop: ".5rem", width: "100%" }}>
						Buy now
					</button>
				</aside>
			</div>
			<p style={{ marginTop: ".75rem", fontSize: ".85rem" }}>
				<Link to="/products" className="amazon-link">
					Back to all products
				</Link>
			</p>
		</div>
	);
}
