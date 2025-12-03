import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function Products(){
  return (
    <div className="amazon-grid-section">
      <h1 style={{ padding: "0 0.5rem" }}>All Products</h1>
      <div style={{height: '1rem'}}></div>
      <div className="amazon-product-grid">
        {products.map(p=> (
          <div key={p.id} className="amazon-product-card">
            <div className="amazon-product-image-wrapper"><img src={p.image} alt={p.title} /></div>
            <div className="amazon-product-info">
              <div className="amazon-product-category">{p.category}</div>
              <div className="amazon-product-title"><Link to={`/products/${p.id}`}>{p.title}</Link></div>
              <div className="amazon-product-rating">{'★'.repeat(Math.round(p.rating))} <span className="rating-number">{p.rating.toFixed(1)}</span></div>
              <div className="amazon-product-price"><span className="currency">$</span>{p.price.toFixed(2)}</div>
              <Link className="primary-button" to={`/products/${p.id}`}>View Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
