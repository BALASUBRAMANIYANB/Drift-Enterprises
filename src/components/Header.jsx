import React, { useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "./CartProvider";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
	const { totalItems } = useCart();
	const { user, isAuthenticated, logout, isAdmin } = useAuth();
	const [openGroup, setOpenGroup] = useState(null);
	const navigate = useNavigate();
	
	// Memoize auth checks to prevent unnecessary re-renders
	const userIsAuthenticated = useMemo(() => isAuthenticated(), [user]);
	const userIsAdmin = useMemo(() => isAdmin(), [user]);

	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<header className="amazon-header">
			<div className="amazon-header-top">
				<Link to="/" className="amazon-logo">
					<div className="logo-content">
						<img src="/assets/logo.png" alt="DRIFT ENTERPRISES Logo" style={{ height: '45px' }} />
						<div className="logo-text">
							<div className="logo-main">DRIFT</div>
							<div className="logo-sub">ENTERPRISES</div>
						</div>
					</div>
				</Link>
				<form className="amazon-search" onSubmit={(e)=>e.preventDefault()}>
					<select className="amazon-search-category" defaultValue="all">
						<option value="all">All</option>
						<option value="electronics">Electronics</option>
						<option value="mobiles">Mobiles</option>
						<option value="appliances">Appliances</option>
						<option value="tv">TV</option>
					</select>
					<input className="amazon-search-input" placeholder="Search for products, brands and more..." />
					<button type="submit" className="amazon-search-button">🔍</button>
				</form>
				<nav className="amazon-header-links">
					{userIsAdmin && (
						<Link to="/admin/products" className="amazon-header-link admin-link">
							<span className="icon">⚙️</span>
							<span className="text">Admin</span>
						</Link>
					)}
					{userIsAuthenticated ? (
						<>
							<Link to="/account" className="amazon-header-link">
								<span className="icon">👤</span>
								<span className="text">{user?.username || "Account"}</span>
							</Link>
							<button 
								onClick={handleLogout} 
								className="amazon-header-link logout-btn" 
								style={{ 
									background: "none", 
									border: "none", 
									cursor: "pointer",
									color: "inherit",
									font: "inherit",
									padding: "0"
								}}
							>
								<span className="icon">🚪</span>
								<span className="text">Logout</span>
							</button>
						</>
					) : (
						<Link to="/login" className="amazon-header-link">
							<span className="icon">🔐</span>
							<span className="text">Sign In</span>
						</Link>
					)}
					{userIsAdmin ? (
						<Link to="/admin/orders" className="amazon-header-link">
							<span className="icon">📦</span>
							<span className="text">Orders</span>
						</Link>
					) : (
						<Link to="/orders" className="amazon-header-link">
							<span className="icon">📦</span>
							<span className="text">Orders</span>
						</Link>
					)}
					<Link to="/cart" className="amazon-header-cart">
						<span className="cart-icon">🛒</span>
						<span className="cart-count">{totalItems}</span>
					</Link>
				</nav>
			</div>
			<div className="amazon-header-bottom">
				<nav className="amazon-categories">
					<div className="category-group" onMouseEnter={() => setOpenGroup('appliances')} onMouseLeave={() => setOpenGroup(null)}>
						<div className="category-header">Appliances</div>
						<div className={`category-items ${openGroup === 'appliances' ? 'active' : ''}`}>
							<Link to="/products?category=appliances&sub=refrigerator" className="category-link">Refrigerator</Link>
							<Link to="/products?category=appliances&sub=air-conditioner" className="category-link">Air Conditioner</Link>
						</div>
					</div>
					<div className="category-group" onMouseEnter={() => setOpenGroup('mobiles')} onMouseLeave={() => setOpenGroup(null)}>
						<div className="category-header">Mobiles</div>
						<div className={`category-items ${openGroup === 'mobiles' ? 'active' : ''}`}>
							<Link to="/products?category=mobiles&sub=apple" className="category-link">Apple</Link>
							<Link to="/products?category=mobiles&sub=poco" className="category-link">Poco</Link>
							<Link to="/products?category=mobiles&sub=vivo" className="category-link">Vivo</Link>
							<Link to="/products?category=mobiles&sub=oppo" className="category-link">Oppo</Link>
							<Link to="/products?category=mobiles&sub=realme" className="category-link">Realme</Link>
							<Link to="/products?category=mobiles&sub=oneplus" className="category-link">OnePlus</Link>
							<Link to="/products?category=mobiles&sub=motorola" className="category-link">Motorola</Link>
						</div>
					</div>
					<div className="category-group" onMouseEnter={() => setOpenGroup('electronics')} onMouseLeave={() => setOpenGroup(null)}>
						<div className="category-header">Electronics</div>
						<div className={`category-items ${openGroup === 'electronics' ? 'active' : ''}`}>
							<Link to="/products?category=electronics&sub=home-theater" className="category-link">Home Theater</Link>
							<Link to="/products?category=electronics&sub=sound-bar" className="category-link">Sound Bar</Link>
						</div>
					</div>
					<div className="category-group" onMouseEnter={() => setOpenGroup('tv')} onMouseLeave={() => setOpenGroup(null)}>
						<div className="category-header">TV</div>
						<div className={`category-items ${openGroup === 'tv' ? 'active' : ''}`}>
							<Link to="/products?category=tv&sub=toshiba" className="category-link">Toshiba</Link>
							<Link to="/products?category=tv&sub=mi" className="category-link">Mi</Link>
							<Link to="/products?category=tv&sub=realme" className="category-link">Realme</Link>
							<Link to="/products?category=tv&sub=samsung" className="category-link">Samsung</Link>
							<Link to="/products?category=tv&sub=lg" className="category-link">LG</Link>
							<Link to="/products?category=tv&sub=assembled-tv" className="category-link">Assembled TV</Link>
							<Link to="/products?category=tv&sub=tcl" className="category-link">TCL</Link>
						</div>
					</div>
					<div className="category-group" onMouseEnter={() => setOpenGroup('trending')} onMouseLeave={() => setOpenGroup(null)}>
						<div className="category-header">Trending</div>
						<div className={`category-items ${openGroup === 'trending' ? 'active' : ''}`}>
							<Link to="/products?category=trending&sub=best-sellers" className="category-link">Best Sellers</Link>
							<Link to="/products?category=trending&sub=new-arrivals" className="category-link">New Arrivals</Link>
						</div>
					</div>
				</nav>
			</div>
		</header>
	);
}
