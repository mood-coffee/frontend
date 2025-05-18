'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '@/types/product';
import logger from '@/lib/logger';

// Cart item interface
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  slug: string;
  weight: string;
  roastLevel: string;
  image?: string;
}

// Shape of our context value
interface CartContextValue {
  items: CartItem[];
  addItem: (product: Product, quantity: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  isInitialized: boolean;
}

// LocalStorage key
const CART_STORAGE_KEY = 'mood-coffee-cart';

// Create the context with a default value
const CartContext = createContext<CartContextValue | undefined>(undefined);

// Provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedItems = JSON.parse(savedCart);
        setItems(parsedItems);
        console.log('[CartContext] Loaded cart from localStorage', parsedItems);
      }
    } catch (error) {
      logger.error('Failed to load cart from localStorage', error as Error);
    }
    
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      console.log('[CartContext] Saved cart to localStorage', items);
    } catch (error) {
      logger.error('Failed to save cart to localStorage', error as Error);
    }
  }, [items, isInitialized]);

  // Add an item to the cart
  const addItem = (product: Product, quantity: number) => {
    console.log(`[CartContext] Adding product ${product.id} to cart`, { product, quantity });
    
    setItems(prevItems => {
      // Check if item already exists in cart
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);
      
      if (existingItemIndex >= 0) {
        // If exists, update quantity
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        return updatedItems;
      } else {
        // If new, add to cart
        return [...prevItems, {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity,
          slug: product.slug,
          weight: product.weight,
          roastLevel: product.roastLevel,
          image: product.images?.[0]
        }];
      }
    });
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    console.log(`[CartContext] Removing item ${id} from cart`);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    console.log(`[CartContext] Updating quantity for item ${id} to ${quantity}`);
    
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    console.log('[CartContext] Clearing cart');
    setItems([]);
  };

  // Calculate cart totals (recalculated on each render)
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  // Create context value object
  const contextValue: CartContextValue = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    itemCount,
    subtotal,
    shipping,
    total,
    isInitialized
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}
