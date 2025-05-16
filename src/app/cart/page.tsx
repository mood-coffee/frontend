import { Container } from '@/components/ui/Container';
import { CartClient } from '@/components/cart/CartClient';

export const metadata = {
  title: 'Shopping Cart | Mood Coffee',
  description: 'Review your cart and checkout.',
};



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
        <CartClient />
      </Container>
    </>
  );
}
