import React from "react";
import { useCart } from "../components/CartProvider";

export default function Checkout(){
  const { items, placeOrder, subtotal } = useCart();
  return (
    <div className="page-shell" style={{maxWidth:'800px'}}>
      <h1>Checkout</h1>
      <p>Items: {items.length}</p>
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <button onClick={()=> placeOrder()} className="primary-button">Place order (demo)</button>
    </div>
  )
}
