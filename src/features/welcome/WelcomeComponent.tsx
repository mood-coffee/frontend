'use client';

import Image from 'next/image';

export function WelcomeComponent() {
  const handleRedirect = (url: string) => {
    window.location.href = url;
  };

  const handleMenuRedirect = () => {
    window.open('https://menu-online.co/doodcoffee/5/menu', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col font-poppins">
      {/* Üst Kısım - Logo ve Slogan (1/5 of the screen) */}
      <div className="flex-[1] flex flex-col items-center justify-center p-4">
        {/* Logo */}
        <div className="w-16 h-16 mb-4">
          <Image
            src="/mood-logo.png"
            alt="Mood Coffee Logo"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        
        {/* Slogan */}
        <h1 className="text-xl md:text-2xl font-normal text-white">
          Save the Mood!
        </h1>
      </div>

      {/* Orta Çizgi */}
      <div className="border-t border-gray-600"></div>

      {/* Alt Kısım - Yönlendirmeler (4/5 of the screen) */}
      <div className="flex-[4] flex flex-col">
        {/* İnternet Sitesi (2/5 of the screen) */}
        <div 
          className="flex-[2] flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200"
          onClick={() => handleRedirect('/home')}
        >
          <span className="text-lg md:text-xl text-white">
            İnternet Sitemiz İçin Tıklayınız.
          </span>
        </div>

        {/* Yatay Ayıraç */}
        <div className="border-t border-gray-600"></div>

        {/* Menü (2/5 of the screen) */}
        <div 
          className="flex-[2] flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors duration-200"
          onClick={handleMenuRedirect}
        >
          <span className="text-lg md:text-xl text-white">
            Menü İçin Tıklayınız.
          </span>
        </div>
      </div>
    </div>
  );
} 