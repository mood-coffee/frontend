import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types/product';
import { convertGoogleDriveUrl } from '@/lib/utils/imageUtils';

interface FeaturedProductsProps {
  products: Product[];
}

/**
 * Featured products section for the home page
 */
export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Öne Çıkan Ürünler
          </h2>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Dünyanın en iyi yetişme bölgelerinden özenle seçilmiş premium kahve çekirdeklerimizi keşfedin.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            // Process Google Drive URLs
            const processedImages = product.images.map(convertGoogleDriveUrl);
            const mainImage = processedImages.length > 0 ? processedImages[0] : null;
            const lowestPrice = Math.min(...product.priceWeight.map(pw => pw.price));
            const hasMultiplePrices = product.priceWeight.length > 1;
            
            // Simple placeholder data URL
            const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='200' y='150' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EKahve Görseli%3C/text%3E%3C/svg%3E";
            
            return (
              <div key={product.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
                  <div className="w-full h-[300px] bg-secondary overflow-hidden">
                    <Image
                      src={mainImage || placeholderImage}
                      alt={product.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-primary">
                        <Link href={`/products/${product.slug}`} className="hover:text-accent transition-colors">
                          <span aria-hidden="true" className="absolute inset-0" />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-neutral">{product.origin}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-medium text-accent">
                        {hasMultiplePrices ? '₺' + lowestPrice + '+' : '₺' + lowestPrice}
                      </p>
                      {hasMultiplePrices && (
                        <p className="text-xs text-neutral mt-1">
                          {product.priceWeight.length} seçenek
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.flavorNotes && product.flavorNotes.slice(0, 3).map((note) => (
                      <span
                        key={note}
                        className="inline-flex items-center rounded-full bg-natural/20 px-2.5 py-0.5 text-xs font-medium text-primary"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button href="/products" size="lg">
            Tüm Ürünleri Görüntüle
          </Button>
        </div>
      </Container>
    </section>
  );
}
