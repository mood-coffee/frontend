import { Container } from '@/components/ui/Container';
import { fetchProductBySlug, fetchProducts } from '@/lib/api';
import { ProductDetailWrapper } from '@/features/products/components/ProductDetailWrapper';
import { notFound } from 'next/navigation';

interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

// Metadata oluşturucu
export async function generateMetadata({ params }: PageParams) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return {
      title: 'Product Not Found | Mood Coffee',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} | Mood Coffee`,
    description: product.description,
  };
}

// Statik sayfaları oluşturan fonksiyon
export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: PageParams) {
  // Server-side validation
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  
  if (!product) {
    notFound();
  }
  
  return (
    <Container className="py-16">
      <ProductDetailWrapper slug={slug} />
    </Container>
  );
}
