"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "../data/products";

export type CartItem = {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type Order = {
  id: string;
  createdAt: string;
  total: number;
  items: CartItem[];
};

type CartContextValue = {
  items: CartItem[];
  orders: Order[];
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

const CART_KEY = "drift_enterprises_cart";
const ORDERS_KEY = "drift_enterprises_orders";

function loadFromStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return fallback;
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() =>
    loadFromStorage<CartItem[]>(CART_KEY, [])
  );
  const [orders, setOrders] = useState<Order[]>(() =>
    loadFromStorage<Order[]>(ORDERS_KEY, [])
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
  }, [orders]);

  const addItem = (product: Product) => {
    setItems((current) => {
      const existing = current.find((i) => i.id === product.id);
      if (existing) {
        return current.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...current,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
          quantity: 1,
        },
      ];
    });
  };

  const removeItem = (productId: string) => {
    setItems((current) => current.filter((i) => i.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((current) =>
      current.map((i) => (i.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => setItems([]);

  const placeOrder = () => {
    if (items.length === 0) return;
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const newOrder: Order = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      total,
      items,
    };
    setOrders((current) => [newOrder, ...current]);
    setItems([]);
  };

  const { totalItems, subtotal } = useMemo(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, subtotal };
  }, [items]);

  const value: CartContextValue = {
    items,
    orders,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    placeOrder,
    totalItems,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}


