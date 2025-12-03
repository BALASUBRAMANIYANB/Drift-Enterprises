import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../components/CartProvider";

export default function ProductDetail(){
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find(p=> p.id === id);
  const { addItem } = useCart();

  if(!product) return (
    <div className="page-shell" style={{maxWidth: '1200px', textAlign: 'center'}}>
      <h1>Product not found</h1>
      <p>The product you're looking for doesn't exist.</p>
      <Link to="/products" style={{color: '#e50914', fontWeight: 'bold'}}>Back to products</Link>
    </div>
  );

  const handleAddToCart = () => {
    addItem(product);
    alert('Added to cart!');
  };

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
          <button className="primary-button wide" onClick={handleAddToCart} style={{width: '100%'}}>Add to Cart</button>
          <button className="primary-button wide" style={{marginTop:'.5rem', width: '100%'}}>Buy now</button>
        </aside>
      </div>
      <p style={{marginTop:'.75rem', fontSize:'.85rem'}}><Link to="/products" className="amazon-link">Back to all products</Link></p>
    </div>
  )
}
