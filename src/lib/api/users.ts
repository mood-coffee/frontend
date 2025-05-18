/**
 * Users API functions
 * 
 * Bu modül, kullanıcı verilerine erişim sağlayan API fonksiyonlarını içerir.
 * Şu anda mock verilerle çalışır, ancak gerçek API'ye geçişte fonksiyon
 * imzaları aynı kalacaktır.
 */

import { User } from '@/types/user';
import { API_CONFIG, fetchApi } from './index';
import logger from '@/lib/logger';

// Tüm kullanıcıları getirme
export async function fetchUsers(): Promise<User[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    return await import('../../../data/users.json').then(m => m.default);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<User[]>('/users');
  }
}

// ID'ye göre tek bir kullanıcı getirme
export async function fetchUserById(id: string): Promise<User | null> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const users = await fetchUsers();
    return users.find(user => user.id === id) || null;
  } else {
    // Gerçek API çağrısı
    try {
      return await fetchApi<User>(`/users/${id}`);
    } catch (error) {
      // 404 hatası durumunda null dön
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }
}

// Kullanıcı kimlik doğrulama (ileride gerçek implementasyon eklenecek)
export async function authenticateUser(email: string, password: string): Promise<{user: User, token: string} | null> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı - basit bir doğrulama
    const users = await fetchUsers();
    const user = users.find(u => u.email === email);
    
    // Gerçek implementasyonda şifre kontrolü yapılacak
    // Şimdilik basit bir kontrol
    if (user && password.length > 0) {
      return {
        user,
        token: `mock-token-${user.id}-${Date.now()}`
      };
    }
    return null;
  } else {
    // Gerçek API çağrısı
    try {
      return await fetchApi<{user: User, token: string}>('/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
    } catch (error) {
      // Kimlik doğrulama hatası durumunda null dön
      logger.error('Authentication failed', error as Error);
      return null;
    }
  }
}

// Aktif kullanıcı profilini getirme (ileride token ile çalışacak)
export async function fetchCurrentUserProfile(): Promise<User | null> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı - şimdilik ilk kullanıcıyı dön
    const users = await fetchUsers();
    return users[0] || null;
  } else {
    // Gerçek API çağrısı - token ile güvenli istek
    try {
      return await fetchApi<User>('/users/me');
    } catch (error) {
      logger.error('Failed to fetch current user profile', error as Error);
      return null;
    }
  }
} 