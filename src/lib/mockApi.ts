'use client';

import { Product } from '@/types/product';
import { fetchProducts, fetchProductBySlug } from './api';

// Define the cart item type
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

// Mock database in localStorage
const CART_STORAGE_KEY = 'mood-coffee-cart';
const SELECTED_CATEGORY_KEY = 'mood-coffee-selected-category';

// Get cart from localStorage
export function getCart(): CartItem[] {
  if (typeof window === 'undefined') {
    return [];
  }
  
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  if (!cartData) {
    return [];
  }
  
  try {
    return JSON.parse(cartData);
  } catch (error) {
    console.error('Failed to parse cart data:', error);
    return [];
  }
}

// Save cart to localStorage
export function saveCart(cart: CartItem[]): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Add item to cart
export function addToCart(product: Product, quantity: number): void {
  const cart = getCart();
  
  // Check if the product is already in the cart
  const existingItemIndex = cart.findIndex(item => item.id === product.id);
  
  if (existingItemIndex >= 0) {
    // If the product exists, update its quantity
    cart[existingItemIndex].quantity += quantity;
  } else {
    // If the product doesn't exist, add it to the cart
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      slug: product.slug,
      weight: product.weight,
      roastLevel: product.roastLevel,
      image: product.images?.[0]
    });
  }
  
  saveCart(cart);
}

// Update item quantity in cart
export function updateCartItemQuantity(id: string, quantity: number): void {
  const cart = getCart();
  
  if (quantity <= 0) {
    // If quantity is 0 or negative, remove the item from the cart
    removeFromCart(id);
    return;
  }
  
  // Find the item in the cart
  const itemIndex = cart.findIndex(item => item.id === id);
  
  if (itemIndex >= 0) {
    // Update the quantity
    cart[itemIndex].quantity = quantity;
    saveCart(cart);
  }
}

// Remove item from cart
export function removeFromCart(id: string): void {
  const cart = getCart();
  
  // Filter out the item with the given id
  const updatedCart = cart.filter(item => item.id !== id);
  
  saveCart(updatedCart);
}

// Clear cart
export function clearCart(): void {
  saveCart([]);
}

// Get cart total
export function getCartTotal(): number {
  const cart = getCart();
  
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Get cart item count
export function getCartItemCount(): number {
  const cart = getCart();
  
  return cart.reduce((count, item) => count + item.quantity, 0);
}

// Get selected category
export function getSelectedCategory(): string {
  if (typeof window === 'undefined') {
    return 'all';
  }
  
  return localStorage.getItem(SELECTED_CATEGORY_KEY) || 'all';
}

// Set selected category
export function setSelectedCategory(category: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  
  localStorage.setItem(SELECTED_CATEGORY_KEY, category);
}

// Get filtered products by category
export async function getFilteredProducts(category?: string): Promise<Product[]> {
  const products = await fetchProducts();
  
  if (!category || category === 'all') {
    return products;
  }
  
  return products.filter(product => product.category === category);
}
