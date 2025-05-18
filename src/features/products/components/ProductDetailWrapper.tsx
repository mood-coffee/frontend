'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductDetail } from './ProductDetail';
import { fetchProductBySlug } from '@/lib/api';
import logger from '@/lib/logger';

interface ProductDetailWrapperProps {
  slug?: string;
}

export function ProductDetailWrapper({ slug: initialSlug }: ProductDetailWrapperProps = {}) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        // Slug prop yoksa URL'den al
        let slug = initialSlug;
        if (!slug) {
          const pathname = window.location.pathname;
          slug = pathname.split('/').pop() || '';
        }
        
        // URL'den alınan slug boşsa, varsayılan bir değer kullan
        if (!slug) {
          logger.warn('No slug provided for ProductDetailWrapper');
          return;
        }
        
        // Fetch the product by slug
        const productData = await fetchProductBySlug(slug);
        setProduct(productData);
      } catch (error) {
        logger.error('Error loading product', error as Error);
      } finally {
        setLoading(false);
      }
    };
    
    loadProduct();
  }, [initialSlug]);

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

  return <ProductDetail product={product} />;
} 