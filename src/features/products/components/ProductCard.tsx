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
  
  // Simple placeholder data URL
  const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='192' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='192' fill='%23f3f4f6'/%3E%3Ctext x='200' y='100' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EKahve Görseli%3C/text%3E%3C/svg%3E";

  return (
    <div className="bg-white rounded-lg shadow-sm border border-natural overflow-hidden">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="h-48 bg-secondary overflow-hidden">
          <Image
            src={mainImage || placeholderImage}
            alt={product.name}
            width={400}
            height={192}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
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
          <div className="text-right">
            <p className="text-accent font-medium">
              {hasMultiplePrices ? '₺' + lowestPrice + '+' : '₺' + lowestPrice}
            </p>
            {hasMultiplePrices && (
              <p className="text-xs text-neutral mt-1">
                {product.priceWeight.length} gramaj seçeneği
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {product.roastLevel && (
            <div className="text-xs inline-flex items-center font-medium bg-natural/20 text-primary rounded-full px-2.5 py-0.5">
              {product.roastLevel} Roast
            </div>
          )}
          {product.acidity && (
            <div className="text-xs inline-flex items-center font-medium bg-accent/10 text-accent rounded-full px-2.5 py-0.5">
              Asidite: {product.acidity}/5
            </div>
          )}
          {product.intensity && (
            <div className="text-xs inline-flex items-center font-medium bg-primary/10 text-primary rounded-full px-2.5 py-0.5">
              Yoğunluk: {product.intensity}/5
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 