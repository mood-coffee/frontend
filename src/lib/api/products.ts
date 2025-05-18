/**
 * Product API functions
 * 
 * Bu modül, ürün verilerine erişim sağlayan API fonksiyonlarını içerir.
 * Şu anda mock verilerle çalışır, ancak gerçek API'ye geçişte fonksiyon
 * imzaları aynı kalacaktır.
 */

import { Product } from '@/types/product';
import { API_CONFIG, fetchApi } from './index';

// Tüm ürünleri getirme
export async function fetchProducts(): Promise<Product[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    return await import('../../../data/products.json').then(m => m.default);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Product[]>('/products');
  }
}

// Slug'a göre tek bir ürün getirme
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const products = await fetchProducts();
    return products.find(product => product.slug === slug) || null;
  } else {
    // Gerçek API çağrısı
    try {
      return await fetchApi<Product>(`/products/${slug}`);
    } catch (error) {
      // 404 hatası durumunda null dön
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }
}

// Öne çıkarılan ürünleri getirme
export async function fetchFeaturedProducts(): Promise<Product[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const products = await fetchProducts();
    return products.filter(product => product.featured);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Product[]>('/products/featured');
  }
}

// Kategoriye göre ürün getirme
export async function fetchProductsByCategory(category: string): Promise<Product[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const products = await fetchProducts();
    return category === 'all' 
      ? products 
      : products.filter(product => product.category === category);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Product[]>(`/products?category=${category}`);
  }
}

// Ürün arama
export async function searchProducts(query: string): Promise<Product[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı - basit bir string araması
    const products = await fetchProducts();
    const searchTerms = query.toLowerCase().split(' ');
    
    return products.filter(product => {
      const searchableText = `${product.name} ${product.description} ${product.origin}`.toLowerCase();
      return searchTerms.every(term => searchableText.includes(term));
    });
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Product[]>(`/products/search?q=${encodeURIComponent(query)}`);
  }
} 