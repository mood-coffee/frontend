'use client';

import { usePathname } from 'next/navigation';
import { HeaderClient } from './HeaderClient';
import { Footer } from './Footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

export function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname();
  
  // Ana sayfa (/) için header ve footer olmadan render
  if (pathname === '/') {
    return <>{children}</>;
  }
  
  // Diğer tüm sayfalar için normal layout
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderClient />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
} 