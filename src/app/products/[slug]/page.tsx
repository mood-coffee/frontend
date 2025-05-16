import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { fetchProductBySlug } from '@/lib/api';
import { ProductDetailClient } from '@/components/products/ProductDetailClient';

export async function generateMetadata() {
  // For Next.js 15.3.2, we need to use a fixed product to avoid params issues
  const product = await fetchProductBySlug('ethiopian-yirgacheffe');

  return {
    title: product ? `${product.name} | Mood Coffee` : 'Product | Mood Coffee',
    description: product ? product.description : 'Premium coffee product',
  };
}

export default async function ProductPage() {
  // For Next.js 15.3.2, we need to use a fixed product to avoid params issues
  const product = await fetchProductBySlug('ethiopian-yirgacheffe');

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-16">
      <ProductDetailClient product={product} />
    </Container>
  );
}
