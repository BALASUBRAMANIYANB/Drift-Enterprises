import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../components/CartProvider";

export default function ProductDetail(){
  const { id } = useParams();
  const product = products.find(p=> p.id === id);
  const { addItem } = useCart();

  if(!product) return <div style={{padding:'2rem'}}>Product not found. <Link to="/products">Back to products</Link></div>

  return (
    <div className="page-shell product-detail" style={{maxWidth: '1200px'}}>
      <div className="product-detail-layout">
        <div className="product-detail-image"><img src={product.image} alt={product.title} /></div>
        <div className="product-detail-main">
          <h1>{product.title}</h1>
          <p className="amazon-product-rating">{'★'.repeat(Math.round(product.rating))} <span className="rating-number">{product.rating.toFixed(1)}</span></p>
          <p className="product-detail-price"><span className="currency">$</span>{product.price.toFixed(2)}</p>
          <p className="product-detail-description">{product.description}</p>
        </div>
        <aside className="product-detail-buybox">
          <p className="product-detail-price"><span className="currency">$</span>{product.price.toFixed(2)}</p>
          <p className="text-muted">FREE delivery with DRIFT ENTERPRISES Prime. This is a demo experience.</p>
          <button className="primary-button wide" onClick={()=>addItem(product)}>Add to Cart</button>
          <button className="primary-button wide" style={{marginTop:'.5rem'}}>Buy now</button>
        </aside>
      </div>
      <p style={{marginTop:'.75rem', fontSize:'.85rem'}}><Link to="/products" className="amazon-link">Back to all products</Link></p>
    </div>
  )
}
