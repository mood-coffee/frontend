'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CartItem as CartItemType, useCart } from '@/context/CartContext';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';
import logger from '@/lib/logger';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();
  const [isUpdating, setIsUpdating] = useState(false);
  const [localQuantity, setLocalQuantity] = useState(item.quantity);
  
  // Process Google Drive URL for cart item image
  const processedImage = item.image ? convertGoogleDriveUrl(item.image) : null;
  
  // Simple placeholder data URL
  const placeholderImage = "data:image/svg+xml,%3Csvg width='96' height='96' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='96' height='96' fill='%23f3f4f6'/%3E%3Ctext x='48' y='52' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='12'%3E☕%3C/text%3E%3C/svg%3E";
  
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
      
      updateQuantity(item.cartItemId, newQuantity);
      
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
      
      updateQuantity(item.cartItemId, newQuantity);
      
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
      removeItem(item.cartItemId);
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
        <Image
          src={processedImage || placeholderImage}
          alt={item.name}
          width={96}
          height={96}
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Ürün bilgileri */}
      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-primary">
            <h3>{item.name}</h3>
            <p className="ml-4">₺{(item.price * localQuantity).toFixed(2)}</p>
          </div>
          <div className="mt-1 text-sm text-gray-500">
            <span>{item.weight}</span>
            <span className="mx-2">|</span>
            <span>{item.roastLevel}</span>
            <span className="mx-2">|</span>
            <span>Birim: ₺{item.price.toFixed(2)}</span>
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
              Kaldır
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 