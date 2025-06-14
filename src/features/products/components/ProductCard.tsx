import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types/product';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  // Process Google Drive URLs and get main image
  const processedImages = product.images.map(convertGoogleDriveUrl);
  const mainImage = processedImages.length > 0 ? processedImages[0] : null;
  
  // Get the lowest price from priceWeight array
  const lowestPrice = Math.min(...product.priceWeight.map(pw => pw.price));
  const hasMultiplePrices = product.priceWeight.length > 1;
  
  // Simple placeholder data URL - updated to square format
  const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EKahve Görseli%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-secondary rounded-lg shadow-md border-2 border-slate-300 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-slate-400">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative">
          <div className="aspect-square m-4 rounded-md overflow-hidden flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center p-4">
              <Image
                src={mainImage || placeholderImage}
                alt={product.name}
                width={400}
                height={400}
                className="max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </Link>
      <div className="p-6 pt-0">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-slate-800">
              <Link href={`/products/${product.slug}`} className="hover:text-accent transition-colors">
                {product.name}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-slate-600">{product.origin}</p>
          </div>
          <div className="text-right">
            <p className="text-accent font-semibold text-lg">
              {hasMultiplePrices ? '₺' + lowestPrice + '+' : '₺' + lowestPrice}
            </p>
            {hasMultiplePrices && (
              <p className="text-xs text-slate-500 mt-1">
                {product.priceWeight.length} gramaj seçeneği
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.roastLevel && (
            <div className="text-xs inline-flex items-center font-medium bg-slate-200 text-slate-700 rounded-full px-2.5 py-0.5">
              {product.roastLevel} Roast
            </div>
          )}
          {product.acidity && (
            <div className="text-xs inline-flex items-center font-medium bg-emerald-100 text-emerald-700 rounded-full px-2.5 py-0.5">
              Asidite: {product.acidity}/5
            </div>
          )}
          {product.intensity && (
            <div className="text-xs inline-flex items-center font-medium bg-rose-100 text-rose-700 rounded-full px-2.5 py-0.5">
              Yoğunluk: {product.intensity}/5
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 