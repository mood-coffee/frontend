/**
 * Blog Posts API functions
 * 
 * Bu modül, blog yazılarına erişim sağlayan API fonksiyonlarını içerir.
 * Şu anda mock verilerle çalışır, ancak gerçek API'ye geçişte fonksiyon
 * imzaları aynı kalacaktır.
 */

import { Post } from '@/types/post';
import { API_CONFIG, fetchApi } from './index';

// Tüm blog yazılarını getirme
export async function fetchPosts(): Promise<Post[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    return await import('../../../data/posts.json').then(m => m.default);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Post[]>('/blog/posts');
  }
}

// Slug'a göre tek bir blog yazısı getirme
export async function fetchPostBySlug(slug: string): Promise<Post | null> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const posts = await fetchPosts();
    return posts.find(post => post.slug === slug) || null;
  } else {
    // Gerçek API çağrısı
    try {
      return await fetchApi<Post>(`/blog/posts/${slug}`);
    } catch (error) {
      // 404 hatası durumunda null dön
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }
}

// Son eklenen blog yazılarını getirme
export async function fetchRecentPosts(limit: number = 5): Promise<Post[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const posts = await fetchPosts();
    return posts
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, limit);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Post[]>(`/blog/posts/recent?limit=${limit}`);
  }
}

// Etiketlere göre blog yazılarını filtreleme
export async function fetchPostsByTag(tag: string): Promise<Post[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const posts = await fetchPosts();
    return posts.filter(post => post.tags.includes(tag));
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Post[]>(`/blog/posts/tag/${tag}`);
  }
}

// Yazara göre blog yazılarını filtreleme
export async function fetchPostsByAuthor(authorId: string): Promise<Post[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı
    const posts = await fetchPosts();
    return posts.filter(post => post.authorId === authorId);
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Post[]>(`/blog/posts/author/${authorId}`);
  }
}

// Blog yazısı arama
export async function searchPosts(query: string): Promise<Post[]> {
  if (API_CONFIG.USE_MOCK_DATA) {
    // Mock veri kullanımı - basit bir string araması
    const posts = await fetchPosts();
    const searchTerms = query.toLowerCase().split(' ');
    
    return posts.filter(post => {
      const searchableText = `${post.title} ${post.excerpt} ${post.content}`.toLowerCase();
      return searchTerms.some(term => searchableText.includes(term));
    });
  } else {
    // Gerçek API çağrısı
    return await fetchApi<Post[]>(`/blog/posts/search?q=${encodeURIComponent(query)}`);
  }
} 