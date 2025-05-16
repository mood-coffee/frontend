import { Container } from '@/components/ui/Container';
import { fetchProducts } from '@/lib/api';
import { ProductsClient } from '@/components/products/ProductsClient';

export const metadata = {
  title: 'Products | Mood Coffee',
  description: 'Explore our selection of premium coffee beans from around the world.',
};

export default async function ProductsPage() {
  // Fetch all products
  const products = await fetchProducts();

  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              Carefully sourced and expertly roasted coffee beans from the world&apos;s finest growing regions.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <ProductsClient initialProducts={products} />
      </Container>
    </>
  );
}
