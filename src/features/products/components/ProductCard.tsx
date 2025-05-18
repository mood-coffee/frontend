import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-natural overflow-hidden">
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
  );
} 