'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';
import logger from '@/lib/logger';

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const selectedPriceWeight = product.priceWeight[selectedWeightIndex];

  const handleAddToCart = useCallback(() => {
    if (isUpdating || !product) return;

    try {
      setIsUpdating(true);
      // Create a legacy compatible product object for the cart
      const cartProduct = {
        ...product,
        price: selectedPriceWeight.price,
        weight: selectedPriceWeight.weight + 'g'
      };
      addItem(cartProduct, quantity);
      setAddedToCart(true);
      
      // Reset quantity to 1 after adding to cart
      setQuantity(1);

      // Hide success message after 3 seconds
      setTimeout(() => {
        setAddedToCart(false);
      }, 3000);
    } catch (error) {
      logger.error('Error adding item to cart', error as Error);
    } finally {
      setIsUpdating(false);
    }
  }, [product, quantity, selectedPriceWeight, addItem, isUpdating]);

  const incrementQuantity = useCallback(() => {
    setQuantity(prev => prev + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  }, []);

  // Process images for Google Drive URLs and use placeholder fallback
  const processedImages = product.images.map(convertGoogleDriveUrl);
  const mainImage = processedImages.length > 0 ? processedImages[selectedImageIndex] : null;

  // Simple placeholder data URL for coffee image
  const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='18'%3EKahve Görseli%3C/text%3E%3C/svg%3E";

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div>
        {/* Main product image */}
        <div className="w-full h-[500px] bg-secondary rounded-lg overflow-hidden">
          <Image
            src={mainImage || placeholderImage}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        {/* Thumbnail images */}
        {processedImages.length > 1 && (
          <div className="mt-4 grid grid-cols-4 gap-2">
            {processedImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`h-24 rounded overflow-hidden border-2 transition-colors ${selectedImageIndex === index ? 'border-accent' : 'border-gray-200'
                  }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} görsel ${index + 1}`}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-primary">Köken:</span>
              <span className="text-sm text-neutral">{product.origin}</span>
            </div>
            {product.roastLevel && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">Kavurma Seviyesi:</span>
                <span className="text-sm text-neutral">{product.roastLevel}</span>
              </div>
            )}
            {product.processing && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">İşleme:</span>
                <span className="text-sm text-neutral">{product.processing}</span>
              </div>
            )}
            {product.growingAltitude && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-primary">Yetişme Yüksekliği:</span>
                <span className="text-sm text-neutral">{product.growingAltitude}</span>
              </div>
            )}
          </div>
        </div>

        {/* Weight and Price Selection */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-primary mb-3">Gramaj Seçimi</h3>
          <div className="grid grid-cols-1 gap-2">
            {product.priceWeight.map((priceWeight, index) => (
              <button
                key={index}
                onClick={() => setSelectedWeightIndex(index)}
                className={`p-4 border rounded-lg text-left transition-colors ${selectedWeightIndex === index
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-natural hover:border-accent/50'
                  }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{priceWeight.weight}g</span>
                  <span className="text-lg font-bold">₺{priceWeight.price}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold text-primary">Açıklama</h2>
          <p className="mt-2 text-neutral">{product.description}</p>
        </div>

        {/* Flavor Notes */}
        {product.flavorNotes && product.flavorNotes.length > 0 && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-primary">Lezzet Notları</h2>
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
        )}

        {/* Additional Info */}
        {(product.acidity || product.intensity) && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-primary">Kahve Özellikleri</h2>
            <div className="mt-2 flex flex-wrap gap-5">
              {product.acidity && (
                <div>
                  <span className="text-sm text-neutral">Asidite: </span>
                  <span className="inline-flex items-center rounded-full bg-natural/20 px-3 py-1 text-sm font-medium text-primary">{product.acidity}/5</span>
                </div>
              )}
              {product.intensity && (
                <div>
                  <span className="text-sm text-neutral">Yoğunluk: </span>
                  <span className="inline-flex items-center rounded-full bg-natural/20 px-3 py-1 text-sm font-medium text-primary">{product.intensity}/5</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-8 space-y-4">
          <div className="flex items-center">
            <span className="mr-4 text-neutral">Miktar:</span>
            <div className="flex items-center border border-natural rounded-md">
              <button
                onClick={decrementQuantity}
                disabled={isUpdating}
                className="px-3 py-1 text-neutral hover:text-primary transition-colors disabled:opacity-50"
                aria-label="Miktarı azalt"
              >
                -
              </button>
              <span className="px-4 py-1 text-neutral">{quantity}</span>
              <button
                onClick={incrementQuantity}
                disabled={isUpdating}
                className="px-3 py-1 text-neutral hover:text-primary transition-colors disabled:opacity-50"
                aria-label="Miktarı artır"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={isUpdating}
            className="w-full bg-accent hover:bg-accent/90 text-white py-3 px-4 rounded-md font-medium transition-colors disabled:opacity-50"
          >
            {addedToCart ? 'Sepete Eklendi!' : `Sepete Ekle - ₺${(selectedPriceWeight.price * quantity).toFixed(2)}`}
          </button>

          {addedToCart && (
            <div className="text-sm text-accent text-center animate-pulse">
              Ürün sepetinize eklendi!
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 