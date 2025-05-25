'use client';

import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/Button';

export function CartSummary() {
  const { subtotal, shipping, total, itemCount } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-lg font-medium text-primary mb-4">Sipariş Özeti</h2>
      
      <div className="space-y-4">
        {/* Özet bilgileri */}
        <div className="flex justify-between">
          <p className="text-gray-600">Ara Toplam ({itemCount} ürün)</p>
          <p className="text-gray-900 font-medium">₺{subtotal.toFixed(2)}</p>
        </div>
        
        <div className="flex justify-between">
          <p className="text-gray-600">Kargo</p>
          <p className="text-gray-900 font-medium">₺{shipping.toFixed(2)}</p>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between">
            <p className="text-gray-900 font-semibold">Toplam</p>
            <p className="text-accent font-semibold">₺{total.toFixed(2)}</p>
          </div>
        </div>
        
        {/* Checkout butonu */}
        <div className="pt-4">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={() => {
              // İleride sepeti onaylama sayfasına yönlendirme
              alert('Ödeme özelliği yakında uygulanacak.');
            }}
          >
            Ödeme İşlemine Geç
          </Button>
        </div>
      </div>
    </div>
  );
} 