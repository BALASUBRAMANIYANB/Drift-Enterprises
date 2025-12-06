import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet } from 'react-native';
import { useCart } from '../components/CartProvider';
import { products } from '../data/products';

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
  cartItem: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemInfo: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  itemPrice: {
    fontSize: 12,
    color: '#e50914',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  quantityButton: {
    backgroundColor: '#e50914',
    width: 24,
    height: 24,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  quantity: {
    fontSize: 12,
    color: '#000',
    fontWeight: '600',
    minWidth: 20,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff6666',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '600',
  },
  summary: {
    backgroundColor: '#fff',
    borderRadius: 4,
    padding: 12,
    marginVertical: 10,
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
    fontSize: 14,
    color: '#000',
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e50914',
  },
  checkoutButton: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyText: {
    fontSize: 16,
    color: '#ccc',
    textAlign: 'center',
    marginTop: 30,
  },
});

// Archived native Cart implementation. See `archive/native/pages/Cart.native.jsx` for original source.
export default function ArchivedNativeCart() { return null; }
