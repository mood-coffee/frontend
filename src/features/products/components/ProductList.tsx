'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [category, setCategory] = useState<string>('all');
  const [loading] = useState<boolean>(false);

  // Kategori değiştiğinde ürünleri filtrele
  useEffect(() => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  }, [category, products]);

  // Kategori değiştirme işleyicisi
  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory);
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
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
} 