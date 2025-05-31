'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';

interface ProductListProps {
  initialProducts: Product[];
}

export function ProductList({ initialProducts }: ProductListProps) {
  const searchParams = useSearchParams();
  const [products] = useState<Product[]>(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(initialProducts);
  const [category, setCategory] = useState<string>('all');
  const [loading] = useState<boolean>(false);

  // URL'den category parametresini al
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setCategory(categoryParam);
    } else {
      setCategory('all');
    }
  }, [searchParams]);

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
    // URL'yi güncelle
    const url = new URL(window.location.href);
    if (newCategory === 'all') {
      url.searchParams.delete('category');
    } else {
      url.searchParams.set('category', newCategory);
    }
    window.history.pushState({}, '', url.toString());
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
            Tüm Ürünler
          </button>
          <button
            onClick={() => handleCategoryChange('single_origin')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'single_origin' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border-t border-b border-r border-natural`}
          >
            Çekirdek Kahve
          </button>
          <button
            onClick={() => handleCategoryChange('turkish_coffee')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'turkish_coffee' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border-t border-b border-r border-natural`}
          >
            Türk Kahvesi
          </button>
          <button
            onClick={() => handleCategoryChange('equipment')}
            className={`px-4 py-2 text-sm font-medium ${
              category === 'equipment' ? 'bg-accent text-white' : 'bg-white text-neutral hover:bg-secondary'
            } border-t border-b border-r border-natural rounded-r-md`}
          >
            Ekipman
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