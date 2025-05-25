'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { useCart } from '@/context/CartContext';

/**
 * Client-side Header component with navigation and cart count
 */
export function HeaderClient() {
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="py-6 bg-primary text-white border-b border-natural">
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image 
              src="/mood-logo.jpg" 
              alt="Mood Coffee Logo" 
              width={40} 
              height={40} 
              className="rounded-full"
            />
            <span className="text-2xl font-bold tracking-tight text-white">Mood</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/about" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Hakkımızda
            </Link>
            <Link href="/products" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Ürünler
            </Link>
            <Link href="/blog" className="text-sm font-medium text-white hover:text-accent transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-sm font-medium text-white hover:text-accent transition-colors">
              İletişim
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="/cart"
              className="relative text-white hover:text-accent transition-colors"
              aria-label="Alışveriş Sepeti"
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
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Mobil menüyü aç/kapat"
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
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-primary">
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-between items-center mb-8">
              <Link 
                href="/" 
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image 
                  src="/mood-logo.jpg" 
                  alt="Mood Coffee Logo" 
                  width={40} 
                  height={40} 
                  className="rounded-full"
                />
                <span className="text-2xl font-bold tracking-tight text-white">Mood</span>
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="text-white"
                aria-label="Menüyü kapat"
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
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-6 text-center">
              <Link 
                href="/" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
              <Link 
                href="/about" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Hakkımızda
              </Link>
              <Link 
                href="/products" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Ürünler
              </Link>
              <Link 
                href="/blog" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                İletişim
              </Link>
              <Link 
                href="/cart" 
                className="text-xl font-medium text-white hover:text-accent transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sepet ({itemCount})
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
