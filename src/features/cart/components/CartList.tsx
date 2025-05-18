'use client';

import { useCart } from '@/context/CartContext';
import { CartItem } from './CartItem';
import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';

export function CartList() {
  const { items, clearCart, itemCount } = useCart();
  const [hasItems, setHasItems] = useState(false);
  
  // Check item state after cart is loaded
  useEffect(() => {
    setHasItems(items.length > 0);
  }, [items]);

  if (!hasItems) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-medium text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
        <Button href="/products" variant="primary">
          Continue Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-primary">
          Shopping Cart ({itemCount} {itemCount === 1 ? 'item' : 'items'})
        </h2>
        <button
          type="button"
          onClick={clearCart}
          className="text-sm font-medium text-accent hover:text-accent/80"
        >
          Clear Cart
        </button>
      </div>

      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
} 