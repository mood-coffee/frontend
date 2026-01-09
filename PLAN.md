# SEO ve Backend Entegrasyonu İyileştirme Planı

## 🚨 Kritik SEO Eksiklikleri

### 1. robots.txt Dosyası

- **Durum**: Eksik
- **Lokasyon**: `public/robots.txt`
- **İçerik**:
  ```
  <code_block_to_apply_changes_from>
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://www.moodcoffee.tr/sitemap.xml
  ```

### 2. Sitemap.xml

- **Durum**: Eksik
- **Lokasyon**: `app/sitemap.ts` (App Router ile dinamik)
- **Gereklilik**: Tüm statik ve dinamik sayfaları içermeli

### 3. Open Graph & Twitter Cards

- **Durum**: Eksik
- **Lokasyon**: Tüm sayfalarda metadata genişletilmeli
- **Gerekli Alanlar**:
  - `openGraph.title`
  - `openGraph.description`
  - `openGraph.images`
  - `openGraph.type`
  - `twitter.card`
  - `twitter.title`
  - `twitter.description`
  - `twitter.images`

### 4. JSON-LD Structured Data

- **Durum**: Eksik
- **Gerekli Schema.org Türleri**:
  - Product schema (ürün sayfaları)
  - Article schema (blog yazıları)
  - Organization schema (şirket bilgileri)
  - WebSite schema (site genel bilgileri)
  - BreadcrumbList schema (breadcrumb navigation)

### 5. Language Tags

- **Durum**: Hatalı
- **Mevcut**: `<html lang="en">`
- **Olması Gereken**: `<html lang="tr">`

### 6. Canonical URLs

- **Durum**: Eksik
- **Lokasyon**: Tüm sayfalarda metadata'ya eklenmeli

## 🔧 Backend Entegrasyonu Eksiklikleri

### 1. API Routes

- **Durum**: Eksik
- **Gerekli Klasör**: `src/app/api/`
- **Gerekli Endpoints**:
  - `/api/products`
  - `/api/products/[slug]`
  - `/api/posts`
  - `/api/posts/[slug]`
  - `/api/contact`
  - `/api/wholesale`

### 2. Middleware

- **Durum**: Eksik
- **Lokasyon**: Root seviyede `middleware.ts`
- **Gerekli Özellikler**:
  - i18n handling
  - Security headers
  - Rate limiting
  - Redirect management

### 3. Authentication System Hazırlığı

- **Durum**: Eksik
- **Gerekli Bileşenler**:
  - JWT token handling
  - User session management
  - Protected routes
  - Auth middleware

### 4. Real-time Data Fetching

- **Durum**: Mock data kullanımda
- **Gerekli**: SWR veya TanStack Query entegrasyonu
- **Geçiş Planı**: `API_CONFIG.USE_MOCK_DATA: false` yapılacak

## 🎯 Öncelik Sıralaması

### Yüksek Öncelik (Acil)

1. **robots.txt** oluşturma
2. **sitemap.xml** dinamik oluşturma
3. **Language tag** düzeltme (`lang="tr"`)
4. **Open Graph metadata** ekleme

### Orta Öncelik

1. **JSON-LD structured data** ekleme
2. **Canonical URLs** ekleme
3. **API routes** oluşturma
4. **Middleware** implementasyonu

### Düşük Öncelik

1. **Authentication system** hazırlığı
2. **Real-time data fetching** geçişi
3. **Advanced SEO** optimizasyonları
4. **Performance** optimizasyonları

## 📋 İmplementasyon Adımları

### Fase 1: Kritik SEO Düzeltmeleri (1-2 gün)

- [ ] `public/robots.txt` oluştur
- [ ] `app/sitemap.ts` dinamik sitemap oluştur
- [ ] `app/layout.tsx`'da `lang="tr"` düzelt
- [ ] Tüm sayfalarda Open Graph metadata ekle

### Fase 2: Structured Data (2-3 gün)

- [ ] Product sayfaları için JSON-LD schema
- [ ] Blog sayfaları için Article schema
- [ ] Organization schema (şirket bilgileri)
- [ ] WebSite schema (genel site bilgileri)

### Fase 3: Backend Entegrasyonu (3-5 gün)

- [ ] `app/api/` klasörü ve route handlers
- [ ] `middleware.ts` oluştur
- [ ] API adapter'ı gerçek API'ye geçir
- [ ] Error handling ve validation

### Fase 4: İleri Düzey Optimizasyonlar (5+ gün)

- [ ] Authentication system
- [ ] Real-time data fetching
- [ ] Advanced caching stratejileri
- [ ] Performance monitoring

## 🔄 Test ve Doğrulama

### SEO Testleri

- [ ] Google Search Console verification
- [ ] Structured data validator
- [ ] Open Graph debugger (Facebook)
- [ ] Twitter Card validator
- [ ] Lighthouse SEO score

### Backend Testleri

- [ ] API endpoint testleri
- [ ] Authentication flow testleri
- [ ] Error handling testleri
- [ ] Performance testleri

## 📊 Başarı Metrikleri

### SEO

- Lighthouse SEO score: >90
- Google Search Console errors: 0
- Structured data errors: 0
- Page speed score: >85

### Backend

- API response time: <200ms
- Error rate: <1%
- Uptime: >99.9%
- Authentication success rate: >99%
