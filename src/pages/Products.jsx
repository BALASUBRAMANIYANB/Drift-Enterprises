import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products as localProducts } from "../data/products.js";

export default function Products() {
	const [products, setProducts] = useState(localProducts);
	const [searchParams] = useSearchParams();

	useEffect(() => {
		fetch("http://localhost:4000/api/products")
			.then((r) => r.json())
			.then(setProducts)
			.catch(() => setProducts(localProducts));
	}, []);

	const category = searchParams.get('category');
	const sub = searchParams.get('sub');

	let filteredProducts = products;
	if (category) {
		filteredProducts = filteredProducts.filter(p => p.category.toLowerCase() === category.toLowerCase());
	}
	if (sub) {
		filteredProducts = filteredProducts.filter(p => p.brand && p.brand.toLowerCase() === sub.toLowerCase());
	}

	const formatTitle = (str) => str.charAt(0).toUpperCase() + str.slice(1).replace(/-/g, ' ');
	const title = category ? (sub ? `${formatTitle(sub)} - ${formatTitle(category)}` : formatTitle(category)) : "All Products";

	return (
		<div className="amazon-grid-section">
			<h1 style={{ padding: "0 0.5rem", fontSize: "2.5rem", fontWeight: "900", color: "#1a1a1a", letterSpacing: "-1px", marginBottom: "2rem" }}>
				{title}
			</h1>
			{filteredProducts.length === 0 ? (
				<div className="empty-state">
					<p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>No products found</p>
					<p style={{ fontSize: "1rem", color: "#666", marginBottom: "2rem" }}>Try browsing other categories</p>
					<Link to="/products" className="primary-button" style={{ display: "inline-block", padding: "1rem 2rem" }}>
						View All Products
					</Link>
				</div>
			) : (
			<div className="amazon-product-grid">
				{filteredProducts.map((p) => (
					<div key={p.id} className="amazon-product-card">
						<div className="amazon-product-image-wrapper">
							<img src={p.image} alt={p.title} />
						</div>
						<div className="amazon-product-info">
							<div className="amazon-product-category">{p.category}</div>
							<div className="amazon-product-title">
								<Link to={`/products/${p.id}`}>{p.title}</Link>
							</div>
							<div className="amazon-product-rating">
								{'★'.repeat(Math.round(p.rating))} <span className="rating-number">{p.rating?.toFixed?.(1)}</span>
							</div>
							<div className="amazon-product-price">
								<span className="currency">₹</span>
								{Number(p.price).toFixed(2)}
							</div>
							<Link className="primary-button" to={`/products/${p.id}`}>
								View Details
							</Link>
						</div>
					</div>
				))}
			</div>
			)}
		</div>
	);
}
