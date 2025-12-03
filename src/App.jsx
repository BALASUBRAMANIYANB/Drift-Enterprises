import React from "react";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartProvider";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductManagement from "./pages/ProductManagement";
import "./index.css";

export default function App() {
	return (
		<CartProvider>
			<Header />
			<main className="amazon-main">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/products/:id" element={<ProductDetail />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
				</Routes>
			</main>
			<footer className="amazon-footer">
				<div className="amazon-footer-back">
					<button className="back-to-top-btn">Back to top</button>
				</div>
				<div className="amazon-footer-main">
					<div className="footer-column">
						<h4>About Us</h4>
						<ul>
							<li><a href="#">About Drift Enterprises</a></li>
							<li><a href="#">Careers</a></li>
							<li><a href="#">News & Press</a></li>
							<li><a href="#">Blog</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h4>Follow Us</h4>
						<ul>
							<li><a href="#">Facebook</a></li>
							<li><a href="#">Twitter</a></li>
							<li><a href="#">Instagram</a></li>
							<li><a href="#">LinkedIn</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h4>For Sellers</h4>
						<ul>
							<li><a href="#">Sell with Drift</a></li>
							<li><a href="#">Partner Program</a></li>
							<li><a href="#">Advertising</a></li>
							<li><a href="#">Logistics</a></li>
						</ul>
					</div>
					<div className="footer-column">
						<h4>Support</h4>
						<ul>
							<li><a href="#">My Account</a></li>
							<li><a href="#">Support Center</a></li>
							<li><a href="#">Contact Support</a></li>
							<li><a href="#">Preferences</a></li>
						</ul>
					</div>
				</div>
				<div className="amazon-footer-bottom">
					<div className="footer-logo">DRIFT ENTERPRISES</div>
					<div className="footer-copyright">© 2024 Drift Enterprises - All Rights Reserved</div>
				</div>
			</footer>
		</CartProvider>
	);
}
