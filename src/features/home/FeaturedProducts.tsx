'use client';

import { useEffect, useRef, useState } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!scrollRef.current || isHovered) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const currentScroll = container.scrollLeft;

        // If we're at the end, reset to beginning for infinite scroll
        if (currentScroll + clientWidth >= scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollTo({
            left: currentScroll + clientWidth / 2,
            behavior: 'smooth'
          });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Manual navigation functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth / 2;
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth / 2;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      
      // If we're near the end, reset to beginning for infinite scroll
      if (currentScroll + scrollAmount + clientWidth >= scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollTo({
          left: currentScroll + scrollAmount,
          behavior: 'smooth'
        });
      }
    }
  };

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

        {/* Horizontal Scrollable Products with Navigation Arrows */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Önceki ürünler"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Sonraki ürünler"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 group-hover:scale-110 transition-transform"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Duplicate products for infinite scroll effect */}
            {[...products, ...products].map((product, index) => {
              // Process Google Drive URLs
              const processedImages = product.images.map(convertGoogleDriveUrl);
              const mainImage = processedImages.length > 0 ? processedImages[0] : null;
              const lowestPrice = Math.min(...product.priceWeight.map(pw => pw.price));
              const hasMultiplePrices = product.priceWeight.length > 1;

              // Simple placeholder data URL
              const placeholderImage = "data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='200' y='200' text-anchor='middle' fill='%236b7280' font-family='Arial' font-size='16'%3EKahve Görseli%3C/text%3E%3C/svg%3E";

              return (
                <div
                  key={`${product.id}-${index}`}
                  className="group relative bg-secondary rounded-lg shadow-md border-2 border-slate-300 overflow-hidden flex-shrink-0 w-80 snap-start transition-all duration-300 hover:shadow-xl hover:border-slate-400"
                >
                  {/* Product Image Container */}
                  <div className="relative">
                    <div className="aspect-square m-4 rounded-md overflow-hidden flex items-center justify-center">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <Image
                          src={mainImage || placeholderImage}
                          alt={product.name}
                          width={400}
                          height={400}
                          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-6 pt-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-medium text-slate-800">
                          <Link href={`/products/${product.slug}`} className="hover:text-accent transition-colors">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-slate-600">{product.origin}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-semibold text-accent">
                          {hasMultiplePrices ? '₺' + lowestPrice + '+' : '₺' + lowestPrice}
                        </p>
                        {hasMultiplePrices && (
                          <p className="text-xs text-slate-500 mt-1">
                            {product.priceWeight.length} seçenek
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {product.flavorNotes && product.flavorNotes.slice(0, 3).map((note) => (
                        <span
                          key={note}
                          className="inline-flex items-center rounded-full bg-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-700"
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
