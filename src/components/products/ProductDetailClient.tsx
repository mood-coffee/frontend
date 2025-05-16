'use client';

import { useState } from 'react';
import { Product } from '@/types/product';
import { addToCart } from '@/lib/mockApi';

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    
    // Reset the "Added to cart" message after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        {/* Placeholder for product image - in a real project, you would use a real image */}
        <div className="w-full h-[500px] bg-secondary rounded-lg flex items-center justify-center text-neutral">
          Product Image Placeholder
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {product.images.map((_, index) => (
            <div
              key={index}
              className="h-24 bg-secondary rounded flex items-center justify-center text-neutral text-xs"
            >
              Image {index + 1}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
        <p className="mt-2 text-sm text-neutral">Origin: {product.origin}</p>
        <p className="mt-2 text-sm text-neutral">Roast Level: {product.roastLevel}</p>

        <div className="mt-4 flex items-center">
          <p className="text-2xl font-bold text-accent">${product.price}</p>
          <p className="ml-2 text-sm text-neutral">/ {product.weight}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-primary">Description</h2>
          <p className="mt-2 text-neutral">{product.description}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold text-primary">Flavor Notes</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.flavorNotes.map((note) => (
              <span
                key={note}
                className="inline-flex items-center rounded-full bg-natural/20 px-3 py-1 text-sm font-medium text-primary"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 space-y-4">
          <div className="flex items-center">
            <span className="mr-4 text-neutral">Quantity:</span>
            <div className="flex items-center border border-natural rounded-md">
              <button 
                onClick={decrementQuantity}
                className="px-3 py-1 text-neutral hover:text-primary transition-colors"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-4 py-1 text-neutral">{quantity}</span>
              <button 
                onClick={incrementQuantity}
                className="px-3 py-1 text-neutral hover:text-primary transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 px-4 rounded-md font-medium transition-colors"
          >
            {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
          </button>
          
          {addedToCart && (
            <div className="text-sm text-accent text-center animate-pulse">
              Product added to your cart!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
