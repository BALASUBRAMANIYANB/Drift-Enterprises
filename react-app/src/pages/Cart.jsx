import React from "react";
import { useCart } from "../components/CartProvider";

export default function Cart(){
  const { items, updateQuantity, removeItem, subtotal } = useCart();
  return (
    <div className="page-shell" style={{maxWidth:'1000px'}}>
      <h1>Your Cart</h1>
      <div style={{height:'1rem'}}></div>
      {items.length===0 ? <p>Your cart is empty</p> : (
        <div>
          {items.map(i=> (
            <div key={i.id} style={{display:'flex', gap:16, marginBottom:16, alignItems:'center'}}>
              <img src={i.image} alt={i.title} style={{width:120, height:80, objectFit:'cover'}} />
              <div style={{flex:1}}>
                <div style={{fontWeight:700}}>{i.title}</div>
                <div>${i.price.toFixed(2)}</div>
                <div>
                  <label>Qty: <input type="number" value={i.quantity} min={1} onChange={(e)=> updateQuantity(i.id, Number(e.target.value))} style={{width:60}} /></label>
                </div>
              </div>
              <button onClick={()=> removeItem(i.id)}>Remove</button>
            </div>
          ))}
          <div style={{marginTop:16}}>Subtotal: ${subtotal.toFixed(2)}</div>
        </div>
      )}
    </div>
  )
}
