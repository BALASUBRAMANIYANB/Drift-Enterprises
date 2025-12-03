import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../components/CartProvider";

export default function Cart(){
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  
  return (
    <div className="page-shell" style={{maxWidth:'1000px'}}>
      <h1>Your Shopping Cart</h1>
      {items.length===0 ? (
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <p style={{fontSize: '1.1rem', color: '#565959', marginBottom: '1rem'}}>Your cart is empty</p>
          <Link to="/products" className="primary-button" style={{display: 'inline-block'}}>Continue Shopping</Link>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items">
            {items.map(i=> (
              <div key={i.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={i.image} alt={i.title} style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
                </div>
                <div className="cart-item-body" style={{flex: 1}}>
                  <h2>{i.title}</h2>
                  <div className="cart-item-price"><span className="currency">$</span>{i.price.toFixed(2)}</div>
                  <div className="cart-item-each">${(i.price * i.quantity).toFixed(2)} total</div>
                  <div className="cart-item-actions">
                    <label>Qty: 
                      <input 
                        type="number" 
                        value={i.quantity} 
                        min={1} 
                        onChange={(e)=> updateQuantity(i.id, Number(e.target.value))} 
                        style={{width:60, padding: '0.25rem', marginLeft: '0.25rem'}}
                      />
                    </label>
                    <button onClick={()=> removeItem(i.id)} style={{cursor: 'pointer', padding: '0.5rem 0.75rem', background: '#e50914', color: '#fff', border: 'none', borderRadius: '4px'}}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div style={{marginBottom: '1rem'}}>
              <div style={{marginBottom: '0.5rem'}}>Subtotal: <strong>${subtotal.toFixed(2)}</strong></div>
              <div style={{marginBottom: '0.5rem'}}>Shipping: <strong>FREE</strong></div>
              <div style={{marginBottom: '1rem', fontSize: '0.8rem', color: '#565959'}}>Tax calculated at checkout</div>
            </div>
            <div style={{paddingTop: '1rem', borderTop: '1px solid #e3e6e6'}}>
              <div style={{fontSize: '1.2rem', fontWeight: '700', marginBottom: '1rem'}}>Order Total: ${subtotal.toFixed(2)}</div>
              <Link to="/checkout" className="primary-button wide" style={{display: 'block', textAlign: 'center', padding: '0.75rem'}}>Proceed to Checkout</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
