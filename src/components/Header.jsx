import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

export default function Header() {
	const { totalItems } = useCart();
	const [openGroup, setOpenGroup] = useState(null);

	return (
		<header className="amazon-header">
			<div className="amazon-header-top">
				<Link to="/" className="amazon-logo">DRIFT<span> ENTERPRISES</span></Link>
				<form className="amazon-search" onSubmit={(e)=>e.preventDefault()}>
					<select className="amazon-search-category" defaultValue="all">
						<option value="all">All</option>
						<option value="electronics">Electronics</option>
						<option value="fashion">Fashion</option>
						<option value="home">Home</option>
					</select>
					<input className="amazon-search-input" placeholder="Search DRIFT ENTERPRISES for products" />
					<button type="submit" className="amazon-search-button">Search</button>
				</form>
				<nav className="amazon-header-links">
					<Link to="/admin/products" className="amazon-header-link"><span className="small">Manage</span><span className="bold">Products</span></Link>
					<Link to="/account" className="amazon-header-link"><span className="small">Hello, Sign in</span><span className="bold">Account &amp; Lists</span></Link>
					<Link to="/orders" className="amazon-header-link"><span className="small">Returns</span><span className="bold">&amp; Orders</span></Link>
					<Link to="/cart" className="amazon-header-cart"><span className="cart-count">{totalItems}</span><span className="bold">Cart</span></Link>
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
