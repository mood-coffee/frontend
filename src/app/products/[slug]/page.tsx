import { Container } from '@/components/ui/Container';
import { ProductDetailWrapper } from '@/components/products/ProductDetailWrapper';

export const metadata = {
  title: 'Product | Mood Coffee',
  description: 'Premium coffee product from Mood Coffee',
};

export default function ProductPage() {
  return (
    <Container className="py-16">
      <ProductDetailWrapper />
    </Container>
  );
}
