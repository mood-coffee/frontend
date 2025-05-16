'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { getCart, updateCartItemQuantity, removeFromCart, clearCart } from '@/lib/mockApi';
import { CartItem } from '@/lib/mockApi';

export function CartClient() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const loadCart = () => {
      const cart = getCart();
      setCartItems(cart);
      setLoading(false);
    };
    
    loadCart();
    
    // Add event listener for storage changes
    window.addEventListener('storage', loadCart);
    
    return () => {
      window.removeEventListener('storage', loadCart);
    };
  }, []);

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  // Handle quantity change
  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateCartItemQuantity(id, newQuantity);
    setCartItems(getCart());
  };

  // Handle remove item
  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
    setCartItems(getCart());
  };

  // Handle clear cart
  const handleClearCart = () => {
    clearCart();
    setCartItems([]);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-neutral">Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border border-natural p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-primary">Cart Items</h2>
                <button 
                  onClick={handleClearCart}
                  className="text-sm text-accent hover:text-accent/80 transition-colors"
                >
                  Clear Cart
                </button>
              </div>
              <div className="divide-y divide-natural">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-6">
                    <div className="sm:w-1/4">
                      <div className="bg-secondary h-32 rounded-lg flex items-center justify-center text-neutral overflow-hidden shadow-sm">
                        <div className="text-center p-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-accent mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="sm:w-3/4 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
                        <p className="text-sm text-neutral mt-1">
                          {item.weight} • {item.roastLevel} Roast
                        </p>
                      </div>
                      <div className="flex flex-wrap justify-between items-center mt-4">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-natural text-neutral hover:bg-natural/10 transition-colors"
                          >
                            -
                          </button>
                          <span className="text-neutral">{item.quantity}</span>
                          <button 
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-natural text-neutral hover:bg-natural/10 transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="text-accent font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                          <button 
                            onClick={() => handleRemoveItem(item.id)}
                            className="text-neutral hover:text-primary transition-colors"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-natural p-6 sticky top-6">
              <h2 className="text-2xl font-bold text-primary mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between text-neutral">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="border-t border-natural pt-4 flex justify-between font-semibold text-primary">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <Button className="w-full" size="lg">
                  Proceed to Checkout
                </Button>
                <Link href="/products" className="block text-center text-sm text-accent hover:text-accent/80 transition-colors">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm border border-natural">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-neutral/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <h2 className="text-2xl font-bold text-primary mb-2">Your cart is empty</h2>
          <p className="text-neutral mb-6">Looks like you haven't added any coffee to your cart yet.</p>
          <Button href="/products">
            Browse Products
          </Button>
        </div>
      )}
    </div>
  );
}
