import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useCart } from "../components/CartProvider";
import { ref as dbRef, get, set, update } from "firebase/database";
import { database } from "../config/firebase";
import { validateEmail, validatePhone, validatePincode, validateForm } from "../components/CartProvider";

export default function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { items, placeOrder, subtotal, tax, total } = useCart();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  useEffect(() => {
    if (user) loadAddresses();
  }, [user]);

  const loadAddresses = async () => {
    try {
      const userRef = dbRef(database, `users/${user.uid}`);
      const snapshot = await get(userRef);
      if (snapshot.exists()) {
        const userData = snapshot.val();
        setAddresses(userData.addresses || []);
      }
    } catch (error) {
      console.error('Error loading addresses:', error);
    }
  };

  const saveAddress = async (addressData) => {
    try {
      const userRef = dbRef(database, `users/${user.uid}`);
      const snapshot = await get(userRef);
      let userData = {};

      if (snapshot.exists()) {
        userData = snapshot.val();
      }

      // Initialize addresses array if it doesn't exist
      if (!userData.addresses) {
        userData.addresses = [];
      }

      // Check if this address already exists
      const existingAddressIndex = userData.addresses.findIndex(addr =>
        addr.firstName === addressData.firstName &&
        addr.lastName === addressData.lastName &&
        addr.address === addressData.address &&
        addr.city === addressData.city &&
        addr.state === addressData.state &&
        addr.pincode === addressData.pincode &&
        addr.phone === addressData.phone
      );

      if (existingAddressIndex === -1) {
        // Add new address with an ID
        const newAddress = {
          id: Date.now(), // Simple ID generation
          name: `${addressData.firstName} ${addressData.lastName}`,
          ...addressData
        };
        userData.addresses.push(newAddress);
      }

      // Save updated user data
      await set(userRef, userData);
    } catch (error) {
      console.error('Error saving address:', error);
      // Don't throw error here as it's not critical for order placement
    }
  };

  const deductStock = async () => {
    try {
      for (const item of items) {
        const productRef = dbRef(database, `products/${item.id}`);
        const snapshot = await get(productRef);
        if (snapshot.exists()) {
          const product = snapshot.val();
          const currentStock = product.stock || 0;
          const newStock = Math.max(0, currentStock - item.quantity);
          await update(productRef, { stock: newStock });
        }
      }
    } catch (error) {
      console.error('Error deducting stock:', error);
      throw error;
    }
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (items.length === 0) {
      alert("⚠️ Your cart is empty!");
      return;
    }

    let finalAddress = formData;
    if (selectedAddress) {
      finalAddress = addresses.find(a => a.id === parseInt(selectedAddress));
    }

    const validation = validateForm({ ...formData, ...finalAddress }, ['firstName', 'lastName', 'phone', 'address', 'city', 'state', 'pincode']);
    if (!validation.valid) {
      alert(`❌ ${validation.error}`);
      return;
    }

    if (!validateEmail(formData.email)) {
      alert('❌ Please enter a valid email address');
      return;
    }

    if (!validatePhone(finalAddress.phone || formData.phone)) {
      alert('❌ Please enter a valid 10-digit phone number');
      return;
    }

    if (!validatePincode(finalAddress.pincode || formData.pincode)) {
      alert('❌ Please enter a valid 6-digit pincode');
      return;
    }

    setLoading(true);
    try {
      const order = placeOrder();
      if (order) {
        const orderRef = dbRef(database, `orders/${order.id}`);
        await set(orderRef, {
          ...order,
          userId: user?.uid,
          customerEmail: formData.email,
          shippingAddress: finalAddress,
          paymentMethod,
          placedAt: new Date().toISOString()
        });

        // Save address to user profile if it's a new address (not from saved addresses)
        if (!selectedAddress && user) {
          await saveAddress(finalAddress);
        }

        // Deduct stock after order is saved
        await deductStock();

        alert(`✅ Order placed successfully!\n\nOrder ID: ${order.id}\nTotal: ₹${total.toFixed(2)}\n\nThank you for shopping!`);
        navigate("/orders");
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('❌ Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-shell" style={{ maxWidth: "1200px" }}>
      <h1 className="checkout-page">💳 Secure Checkout</h1>

      {items.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: "1.2rem" }}>Your cart is empty. Add items to proceed with checkout.</p>
        </div>
      ) : (
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handlePlaceOrder}>
            <section>
              <h2>📦 Shipping Address</h2>
              {addresses.length > 0 && (
                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>Use Saved Address:</label>
                  <select value={selectedAddress} onChange={(e) => setSelectedAddress(e.target.value)} style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <option value="">Or enter new address below</option>
                    {addresses.map(addr => (
                      <option key={addr.id} value={addr.id}>{addr.name} - {addr.address}, {addr.city}</option>
                    ))}
                  </select>
                </div>
              )}
              {!selectedAddress && (
                <div className="form-grid">
                  <label>First Name <input type="text" value={formData.firstName} onChange={(e) => setFormData({...formData, firstName: e.target.value})} placeholder="Enter first name" required /></label>
                  <label>Last Name <input type="text" value={formData.lastName} onChange={(e) => setFormData({...formData, lastName: e.target.value})} placeholder="Enter last name" required /></label>
                  <label>Email <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Enter email" required /></label>
                  <label>Phone <input type="tel" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="10-digit phone" required /></label>
                  <label style={{ gridColumn: "1 / -1" }}>Address <input type="text" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} placeholder="Street address, P.O. box" required /></label>
                  <label>City <input type="text" value={formData.city} onChange={(e) => setFormData({...formData, city: e.target.value})} placeholder="City" required /></label>
                  <label>State <input type="text" value={formData.state} onChange={(e) => setFormData({...formData, state: e.target.value})} placeholder="State/Province" required /></label>
                  <label>PIN Code <input type="text" value={formData.pincode} onChange={(e) => setFormData({...formData, pincode: e.target.value})} placeholder="6-digit PIN" required /></label>
                </div>
              )}
            </section>

            <section>
              <h2>💳 Payment Method</h2>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={(e) => setPaymentMethod(e.target.value)} />
                  <span>💵 Cash on Delivery</span>
                </label>
                <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                  <input type="radio" name="payment" value="razorpay" checked={paymentMethod === 'razorpay'} onChange={(e) => setPaymentMethod(e.target.value)} />
                  <span>💳 Razorpay (Coming Soon)</span>
                </label>
              </div>
              {paymentMethod === 'cod' && <p style={{ color: '#666', fontSize: '0.9rem' }}>✅ Pay securely when your order arrives</p>}
            </section>
          </form>

          <div className="checkout-summary">
            <h2>📋 Order Summary</h2>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  <span>{item.title} × {item.quantity}</span>
                  <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <div className="checkout-totals">
              <div><span>Subtotal</span> <span>₹{subtotal.toFixed(2)}</span></div>
              <div><span>Tax (18% GST)</span> <span>₹{tax.toFixed(2)}</span></div>
              <div><span>Shipping</span> <span style={{ color: "#4caf50", fontWeight: "700" }}>FREE</span></div>
              <div className="checkout-total-row">
                <span>Order Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
            <button
              type="submit"
              onClick={handlePlaceOrder}
              disabled={loading}
              className="primary-button"
              style={{ width: "100%", marginTop: "1.5rem", padding: "1rem", fontSize: "1.05rem" }}
            >
              {loading ? '⏳ Placing Order...' : '🚀 Place Order'}
            </button>
            <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666", textAlign: "center", lineHeight: "1.6" }}>
              By placing your order, you agree to our terms and conditions. Your payment information is secure and encrypted.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
