import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "./CartProvider";

export default function Header() {
  const { totalItems } = useCart();
  const [openDropdown, setOpenDropdown] = useState(null);

  const categories = {
    appliances: [
      { name: "Refrigerator", link: "/products?category=appliances&sub=refrigerator" },
      { name: "Air Conditioner", link: "/products?category=appliances&sub=air-conditioner" }
    ],
    mobiles: [
      { name: "Apple", link: "/products?category=mobiles&sub=apple" },
      { name: "Vivo", link: "/products?category=mobiles&sub=vivo" },
      { name: "Oppo", link: "/products?category=mobiles&sub=oppo" },
      { name: "Realme", link: "/products?category=mobiles&sub=realme" },
      { name: "OnePlus", link: "/products?category=mobiles&sub=oneplus" },
      { name: "Motorola", link: "/products?category=mobiles&sub=motorola" },
      { name: "Poco", link: "/products?category=mobiles&sub=poco" }
    ],
    electronics: [
      { name: "Home Theater", link: "/products?category=electronics&sub=home-theater" },
      { name: "Sound Bar", link: "/products?category=electronics&sub=sound-bar" }
    ],
    tv: [
      { name: "Toshiba", link: "/products?category=tv&sub=toshiba" },
      { name: "Mi", link: "/products?category=tv&sub=mi" },
      { name: "Realme", link: "/products?category=tv&sub=realme" },
      { name: "Samsung", link: "/products?category=tv&sub=samsung" },
      { name: "LG", link: "/products?category=tv&sub=lg" },
      { name: "Assembled TV", link: "/products?category=tv&sub=assembled-tv" },
      { name: "TCL", link: "/products?category=tv&sub=tcl" }
    ],
    trending: []
  };

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
          <Link to="/account" className="amazon-header-link"><span className="small">Hello, Sign in</span><span className="bold">Account &amp; Lists</span></Link>
          <Link to="/orders" className="amazon-header-link"><span className="small">Returns</span><span className="bold">&amp; Orders</span></Link>
          <Link to="/cart" className="amazon-header-cart"><span className="cart-count">{totalItems}</span><span className="bold">Cart</span></Link>
        </nav>
      </div>
      <div className="amazon-header-bottom">
        <nav className="amazon-categories">
          {Object.entries(categories).map(([key, subcats]) => (
            <div key={key} className="category-dropdown" onMouseEnter={() => setOpenDropdown(key)} onMouseLeave={() => setOpenDropdown(null)}>
              <Link to={`/products?category=${key}`} className="category-link">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Link>
              {subcats.length > 0 && (
                <div className={`dropdown-menu ${openDropdown === key ? 'active' : ''}`}>
                  {subcats.map((subcat, idx) => (
                    <Link key={idx} to={subcat.link} className="dropdown-item">{subcat.name}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
