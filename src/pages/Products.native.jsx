import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { products } from '../data/products';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#050505',
  },
  section: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  productGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden',
    marginBottom: 10,
  },
  productImage: {
    width: '100%',
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  productInfo: {
    padding: 10,
  },
  productCategory: {
    fontSize: 11,
    color: '#666',
    marginBottom: 4,
  },
  productName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#000',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#e50914',
    marginBottom: 8,
  },
  productButton: {
    backgroundColor: '#FFD700',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  productButtonText: {
    fontWeight: '600',
    fontSize: 12,
    color: '#000',
  },
});

// Archived native Products page. See `archive/native/pages/Products.native.jsx` for original source.
export default function ArchivedNativeProducts() { return null; }
