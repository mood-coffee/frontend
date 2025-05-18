'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import logger from '@/lib/logger';

// Cart item tipi
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

// LocalStorage anahtarı
const CART_STORAGE_KEY = 'mood-coffee-cart';

/**
 * Cart yönetimi için custom hook
 * 
 * Bu hook, sepet işlemlerini yönetir ve localStorage ile senkronize eder.
 * İleride gerçek bir API ile entegrasyon için hazır bir arayüz sağlar.
 */
export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Debug logger
  const logDebug = (message: string, data?: unknown) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
      console.log(`[Cart] ${message}`, data || '');
    }
  };

  // Load cart from localStorage on initial render
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      if (savedCart) {
        const parsedItems = JSON.parse(savedCart);
        setItems(parsedItems);
        logDebug('Loaded cart from localStorage', parsedItems);
      }
      
      setIsInitialized(true);
    } catch (error) {
      logger.error('Failed to load cart from localStorage', error as Error);
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!isInitialized || typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
      logDebug('Saved cart to localStorage', items);
    } catch (error) {
      logger.error('Failed to save cart to localStorage', error as Error);
    }
  }, [items, isInitialized]);

  // Add an item to the cart
  const addItem = (product: Product, quantity: number) => {
    logDebug(`Adding product ${product.id} to cart`, { product, quantity });
    
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
    logDebug(`Removing item ${id} from cart`);
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Update item quantity
  const updateQuantity = (id: string, quantity: number) => {
    logDebug(`Updating quantity for item ${id} to ${quantity}`);
    
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    
    setItems(prevItems => {
      return prevItems.map(item => 
        item.id === id ? { ...item, quantity } : item
      );
    });
  };

  // Clear the entire cart
  const clearCart = () => {
    logDebug('Clearing cart');
    setItems([]);
  };

  // Calculate cart totals
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = items.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  return {
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
} 