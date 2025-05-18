'use client';

import { useState, useEffect } from 'react';
import { CartItem as CartItemType, useCart } from '@/context/CartContext';
import logger from '@/lib/logger';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);
  const [localQuantity, setLocalQuantity] = useState(item.quantity);
  
  // Sync with parent's item quantity when it changes
  useEffect(() => {
    setLocalQuantity(item.quantity);
  }, [item.quantity]);

  const handleIncrement = () => {
    if (isUpdating) return;
    
    try {
      setIsUpdating(true);
      const newQuantity = localQuantity + 1;
      setLocalQuantity(newQuantity); // Update local state immediately for UI responsiveness
      
      updateQuantity(item.id, newQuantity);
      
      // Brief delay to prevent rapid successive updates
      setTimeout(() => {
        setIsUpdating(false);
      }, 100);
    } catch (error) {
      console.error('Failed to update cart:', error);
      logger.error('Failed to update cart item quantity', error as Error);
      setIsUpdating(false);
    }
  };

  const handleDecrement = () => {
    if (isUpdating || localQuantity <= 1) return;
    
    try {
      setIsUpdating(true);
      const newQuantity = localQuantity - 1;
      setLocalQuantity(newQuantity); // Update local state immediately for UI responsiveness
      
      updateQuantity(item.id, newQuantity);
      
      // Brief delay to prevent rapid successive updates
      setTimeout(() => {
        setIsUpdating(false);
      }, 100);
    } catch (error) {
      console.error('Failed to update cart:', error);
      logger.error('Failed to update cart item quantity', error as Error);
      setIsUpdating(false);
    }
  };

  const handleRemove = () => {
    if (isUpdating) return;
    
    try {
      setIsUpdating(true);
      removeItem(item.id);
      // Component will unmount, no need to reset isUpdating
    } catch (error) {
      logger.error('Failed to remove cart item', error as Error);
      setIsUpdating(false);
    }
  };

  return (
    <div className="flex py-6 border-b border-gray-200 last:border-b-0">
      {/* Ürün görseli */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="h-full w-full object-cover object-center"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Ürün bilgileri */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-primary">
            <h3>{item.name}</h3>
            <p className="ml-4">${item.price.toFixed(2)}</p>
          </div>
          <div className="mt-1 text-sm text-gray-500">
            <span>{item.weight}</span>
            <span className="mx-2">|</span>
            <span>{item.roastLevel}</span>
          </div>
        </div>

        <div className="flex flex-1 items-end justify-between text-sm">
          {/* Miktar değiştirme */}
          <div className="flex items-center border rounded">
            <button
              type="button"
              disabled={isUpdating || localQuantity <= 1}
              onClick={handleDecrement}
              className="px-2 py-1 text-gray-600 hover:text-primary disabled:opacity-50"
            >
              -
            </button>
            <span className="px-2 py-1 text-gray-900">{localQuantity}</span>
            <button
              type="button"
              disabled={isUpdating}
              onClick={handleIncrement}
              className="px-2 py-1 text-gray-600 hover:text-primary disabled:opacity-50"
            >
              +
            </button>
          </div>

          {/* Kaldırma butonu */}
          <div className="flex">
            <button
              type="button"
              disabled={isUpdating}
              onClick={handleRemove}
              className="font-medium text-accent hover:text-accent/80"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 