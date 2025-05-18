/**
 * API client abstraction - Main exports
 * 
 * Bu modül, API işlevselliklerini tek noktadan dışa aktarır.
 * Uygulama içinde kullanılan tüm API fonksiyonları buradan erişilir.
 */

export * from './products';
export * from './posts';
export * from './users';

// API konfigürasyonu
export const API_CONFIG = {
  // Gerçek API'ye geçiş için tek bir nokta
  USE_MOCK_DATA: true,
  BASE_URL: 'https://api.example.com'
};

// HTTP istek yardımcısı - ileride daha kapsamlı hale getirilebilir
export async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      // Authentication header'ı burada eklenecek
    },
    ...options
  });

  if (!response.ok) {
    // Hata yanıtlarını yapılandırılmış bir şekilde işle
    throw new Error(`API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
} 