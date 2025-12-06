import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useCart } from '../components/CartProvider';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
    fontSize: 13,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    gap: 10,
  },
  halfInput: {
    flex: 1,
  },
  placeOrderButton: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  placeOrderButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
  summary: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  summaryLabel: {
    fontSize: 13,
    color: '#000',
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#e50914',
  },
});

export default function Checkout() {
  const { cart, placeOrder } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    placeOrder();
    alert('Order placed successfully!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Checkout</Text>

      {/* Shipping Address */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Shipping Address</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#999"
          value={formData.firstName}
          onChangeText={(text) => setFormData({ ...formData, firstName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#999"
          value={formData.lastName}
          onChangeText={(text) => setFormData({ ...formData, lastName: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone"
          placeholderTextColor="#999"
          value={formData.phone}
          onChangeText={(text) => setFormData({ ...formData, phone: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor="#999"
          value={formData.address}
          onChangeText={(text) => setFormData({ ...formData, address: text })}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="City"
            placeholderTextColor="#999"
            value={formData.city}
            onChangeText={(text) => setFormData({ ...formData, city: text })}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="State"
            placeholderTextColor="#999"
            value={formData.state}
            onChangeText={(text) => setFormData({ ...formData, state: text })}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="ZIP Code"
          placeholderTextColor="#999"
          value={formData.zip}
          onChangeText={(text) => setFormData({ ...formData, zip: text })}
        />
      </View>

      {/* Payment Method */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Method</Text>
        <TextInput
          style={styles.input}
          placeholder="Card Number"
          placeholderTextColor="#999"
          value={formData.cardNumber}
          onChangeText={(text) => setFormData({ ...formData, cardNumber: text })}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="MM/YY"
            placeholderTextColor="#999"
            value={formData.expiry}
            onChangeText={(text) => setFormData({ ...formData, expiry: text })}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="CVV"
            placeholderTextColor="#999"
            value={formData.cvv}
            onChangeText={(text) => setFormData({ ...formData, cvv: text })}
          />
        </View>
      </View>

      {/* Order Summary */}
      <View style={styles.summary}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>{item.title} x {item.quantity}</Text>
            <Text style={styles.summaryValue}>${(item.price * item.quantity).toFixed(2)}</Text>
          </View>
        ))}
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Shipping</Text>
          <Text style={styles.summaryValue}>FREE</Text>
        </View>
        <View style={[styles.summaryRow, { borderBottomWidth: 0 }]}>
          <Text style={[styles.summaryLabel, { fontWeight: 'bold', fontSize: 14 }]}>Total</Text>
          <Text style={[styles.summaryValue, { fontSize: 16 }]}>${total.toFixed(2)}</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
        <Text style={styles.placeOrderButtonText}>Place Order</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
