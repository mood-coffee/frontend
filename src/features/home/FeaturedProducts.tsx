import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Product } from '@/types/product';

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
            Featured Products
          </h2>
          <p className="mt-4 text-lg text-neutral max-w-2xl mx-auto">
            Discover our selection of premium coffee beans, carefully sourced from the world&apos;s best growing regions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden">
                {/* Placeholder for product image - in a real project, you would use a real image */}
                <div className="w-full h-[300px] bg-secondary flex items-center justify-center text-neutral">
                  Product Image Placeholder
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
                  <p className="text-lg font-medium text-accent">${product.price}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.flavorNotes.slice(0, 3).map((note) => (
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
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button href="/products" size="lg">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
