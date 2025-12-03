import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useCart } from '../components/CartProvider';
import { products } from '../data/products';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  productImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 4,
    margin: 10,
  },
  productCategory: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  productRating: {
    fontSize: 13,
    color: '#e50914',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: 12,
  },
  productDescription: {
    fontSize: 13,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  buttonContainer: {
    gap: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  addToCartButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000',
  },
  buyNowButton: {
    backgroundColor: '#e50914',
    paddingVertical: 12,
    borderRadius: 4,
    alignItems: 'center',
  },
  buyNowButtonText: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
  },
});

// Archived native ProductDetail page. See `archive/native/pages/ProductDetail.native.jsx` for original source.
export default function ArchivedNativeProductDetail() { return null; }
