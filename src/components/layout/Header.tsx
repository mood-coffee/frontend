import Link from 'next/link';
import { Container } from '@/components/ui/Container';

/**
 * Header component with navigation
 */
export function Header() {
  // Mock cart count - in a real app, this would come from a state management solution
  const itemCount = 3;
  return (
    <header className="py-6 bg-primary text-white border-b border-natural">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white">
            Mood
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/products" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Products
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-white hover:text-accent transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            <button className="md:hidden text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
