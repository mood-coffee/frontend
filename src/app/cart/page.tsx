import { Container } from '@/components/ui/Container';
import { CartList } from '@/features/cart/components/CartList';
import { CartSummary } from '@/features/cart/components/CartSummary';

export const metadata = {
  title: 'Shopping Cart | Mood Coffee',
  description: 'Review your cart and checkout.',
};

// Ensure this page is not cached and always revalidated on each visit
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function CartPage() {
  return (
    <>
      <div className="bg-secondary py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Your Cart
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral">
              Review your items and proceed to checkout.
            </p>
          </div>
        </Container>
      </div>

      <Container className="py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <CartList />
            </div>
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
