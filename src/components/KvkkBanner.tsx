'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function KvkkBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
    // Here you would enable all cookies/tracking
    console.log('Cookies accepted');
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
    // Here you would disable non-essential cookies
    console.log('Cookies rejected');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-gray-700 leading-5">
              Web sitemiz, kullanıcı deneyimini iyileştirmek ve size kişiselleştirilmiş hizmet sunmak 
              amacıyla çerezler kullanmaktadır. Çerezler hakkında daha fazla bilgi almak ve tercihlerinizi 
              yönetmek için{' '}
              <Link 
                href="/privacy" 
                className="font-medium text-accent hover:text-accent/80 underline"
              >
                Çerez Politikamızı
              </Link>
              {' '}inceleyebilirsiniz. Sitemizi kullanarak çerez kullanımını kabul etmiş olursunuz.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Link
              href="/privacy"
              className="text-sm font-medium text-accent hover:text-accent/80 transition-colors text-center py-2 px-4 border border-accent rounded-md"
            >
              Çerez Politikamızı Görüntüle
            </Link>
            <Button
              onClick={handleReject}
              variant="outline"
              size="sm"
              className="text-sm"
            >
              Reddet
            </Button>
            <Button
              onClick={handleAccept}
              variant="primary"
              size="sm"
              className="text-sm"
            >
              Kabul Ediyorum
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 