'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductDetailClient } from './ProductDetailClient';
import { fetchProductBySlug } from '@/lib/api';

export function ProductDetailWrapper() {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        // Get the slug from the URL
        const pathname = window.location.pathname;
        const slug = pathname.split('/').pop() || 'ethiopian-yirgacheffe';
        
        // Fetch the product by slug
        const productData = await fetchProductBySlug(slug);
        setProduct(productData);
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-neutral">Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-neutral">Product not found</p>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}
