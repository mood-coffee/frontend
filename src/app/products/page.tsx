import { Container } from '@/components/ui/Container';
import { fetchProducts } from '@/lib/api';
import { ProductList } from '@/features/products/components/ProductList';
import { Suspense } from 'react';

export const metadata = {
  title: 'Products | Mood Coffee',
  description: 'Browse our carefully selected coffee beans from around the world.',
};

function ProductListFallback() {
  return (
    <div className="flex justify-center items-center h-64">
      <p className="text-neutral">Loading products...</p>
    </div>
  );
}

export default async function ProductsPage() {
  // Fetch all products
  const products = await fetchProducts();

  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Ürünler
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              Dünyanın en iyi bölgelerinden seçilen ve işlenen kahve çekirdekleri.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <Suspense fallback={<ProductListFallback />}>
          <ProductList initialProducts={products} />
        </Suspense>
      </Container>
    </>
  );
}
