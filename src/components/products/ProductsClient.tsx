'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { getFilteredProducts, getSelectedCategory, setSelectedCategory } from '@/lib/mockApi';

export function ProductsClient({ initialProducts }: { initialProducts: Product[] }) {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [category, setCategory] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);

  // Load selected category from localStorage on component mount
  useEffect(() => {
    const savedCategory = getSelectedCategory();
    setCategory(savedCategory);

    if (savedCategory !== 'all') {
      loadFilteredProducts(savedCategory);
    }
  }, []);

  // Load filtered products based on category
  const loadFilteredProducts = async (selectedCategory: string) => {
    setLoading(true);
    try {
      const filteredProducts = await getFilteredProducts(selectedCategory);
      setProducts(filteredProducts);
    } catch (error) {
      console.error('Error loading filtered products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Handle category change
  const handleCategoryChange = async (selectedCategory: string) => {
    setCategory(selectedCategory);
    setSelectedCategory(selectedCategory);
    await loadFilteredProducts(selectedCategory);
  };

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'all' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border border-natural rounded-l-md`}
          >
            All
          </button>
          <button
            onClick={() => handleCategoryChange('single-origin')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'single-origin' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border-t border-b border-r border-natural`}
          >
            Single Origin
          </button>
          <button
            onClick={() => handleCategoryChange('blend')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'blend' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border-t border-b border-r border-natural rounded-r-md`}
          >
            Blends
          </button>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-neutral">Loading products...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm border border-natural overflow-hidden">
              <Link href={`/products/${product.slug}`} className="block">
                <div className="h-48 bg-secondary flex items-center justify-center text-neutral">
                  Product Image Placeholder
                </div>
              </Link>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-primary">
                      <Link href={`/products/${product.slug}`} className="hover:text-accent transition-colors">
                        {product.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-neutral">{product.origin}</p>
                  </div>
                  <p className="text-accent font-medium">${product.price}</p>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <div className="text-xs inline-flex items-center font-medium bg-natural/20 text-primary rounded-full px-2.5 py-0.5">
                      {product.roastLevel} Roast
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
