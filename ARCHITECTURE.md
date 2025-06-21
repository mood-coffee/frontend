# Project Architecture

### 2024-12-21 – Updated: Footer'a Mesafeli Satış Sözleşmesi Eklendi

Footer'ın yasal kısmına mesafeli satış sözleşmesi eklendi:
- `/mesafeli-satis-sozlesmesi` rotası oluşturuldu
- Tam yasal sözleşme içeriği ile yeni sayfa implementasyonu
- Footer component'ında yasal bölümüne yeni link eklendi
- Responsive tasarım ve düzenli içerik yapısı sağlandı

### 2024-05-24 – Updated: Toptan Kahve Başvuru Sayfası ve Formu Eklendi

Yeni toptan kahve başvuru sayfası ve formu implementasyonu:
- `/toptan-kahve` rotası oluşturuldu
- `src/components/wholesale/WholesaleForm.tsx` bileşeni eklendi
- `src/data/cities.ts` Türkiye şehirleri verisi eklendi
- Header navigasyonuna "Toptan Kahve" linki eklendi
- Kapsamlı form validasyonu ve kullanıcı deneyimi implementasyonu

## Overview

Bu proje, Next.js tabanlı bir frontend uygulaması olup, gelecekte NestJS backendi ile entegre edilecek şekilde tasarlanmıştır. Mimari, özellik tabanlı (feature-based) bir yaklaşımı ve temiz kod (clean code) prensiplerini benimser.

## Temel Prensipler

- **Tek Sorumluluk (Single Responsibility Principle)**: Her bileşen ve modül sadece bir sorumluluk taşır.
- **Modülerlik**: Kod tabanı, tekrar kullanılabilir modüller şeklinde organize edilmiştir.
- **Tip Güvenliği**: TypeScript ile tüm veri modelleri ve fonksiyon imzaları statik tip denetimine tabidir.
- **Geliştirilebilirlik**: Kod tabanı, gelecekteki geliştirmelere ve özellik eklemelerine açıktır.
- **Test Edilebilirlik**: Bileşenler ve işlevler, test edilmeye elverişli şekilde tasarlanmıştır.
- **Bakım Kolaylığı**: Mimari yapı, uzun vadeli bakım ve kod anlaşılırlığını optimize eder.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS ve Design Tokens
- **State Management**: React Context API (minimal), local state, ve ileride React Query/SWR
- **Cart Management**: localStorage-based (geçici çözüm)
- **Form Validation**: Client-side validation (ileriki aşamada zod/io-ts)
- **Error Handling**: App level ve component level error boundaries
- **Build & Quality**: ESLint, Prettier, TypeScript, Jest/React Testing Library
- **Future Backend**: NestJS (API entegrasyonu için adapter pattern)

## Directory Structure

```
/
├── src/
│   ├── app/                  # Next.js App Router pages
│   │   ├── [locale]/         # Localized routes (i18n desteği)
│   │   ├── about/            # About page
│   │   ├── blog/             # Blog pages
│   │   │   └── [slug]/       # Blog post detail page
│   │   ├── cart/             # Shopping cart page
│   │   ├── contact/          # Contact page
│   │   ├── products/         # Products listing page
│   │   │   └── [slug]/       # Product detail page
│   │   ├── toptan-kahve/     # Wholesale coffee application page
│   │   ├── error.tsx         # 500 error page
│   │   ├── not-found.tsx     # 404 not found page
│   │   └── layout.tsx        # Root layout with HTML and body tags
│   ├── components/           # Shared components (cross-feature)
│   │   ├── cart/             # Cart-related components
│   │   ├── contact/          # Contact form components
│   │   ├── layout/           # Layout components (header, footer)
│   │   ├── products/         # Product-related components
│   │   ├── wholesale/        # Wholesale application components
│   │   │   └── WholesaleForm.tsx # Wholesale application form
│   │   ├── ErrorBoundary.tsx # Client-side error boundary component
│   │   └── ui/               # Atomic UI components (buttons, inputs, etc.)
│   ├── context/              # React Context providers (global state)
│   ├── data/                 # Static data files
│   │   └── cities.ts         # Turkish cities and business type data
│   ├── features/             # Feature-based components and logic
│   │   ├── about/            # About page specific components
│   │   ├── blog/             # Blog feature specific components
│   │   ├── cart/             # Cart feature specific logic and components
│   │   ├── home/             # Home page specific components
│   │   └── products/         # Products feature specific logic and components
│   ├── hooks/                # Custom hooks
│   │   ├── useCart.ts        # Cart functionality hook
│   │   ├── useForm.ts        # Form management hook
│   │   └── useLocalStorage.ts # Local storage abstraction hook
│   ├── i18n/                 # Internationalization
│   │   ├── config.ts         # i18n configuration
│   │   └── locales/          # Translation files
│   ├── lib/                  # Shared utilities
│   │   ├── api/              # API client abstraction
│   │   │   ├── index.ts      # Main API exports
│   │   │   ├── products.ts   # Product-related API functions
│   │   │   ├── posts.ts      # Blog post-related API functions
│   │   │   └── users.ts      # User-related API functions  
│   │   ├── mockApi.ts        # Mock API implementation (geçici)
│   │   ├── logger.ts         # Centralized logging functionality
│   │   ├── validation.ts     # Schema validation utilities
│   │   └── utils/            # Utility functions
│   │       ├── date.ts       # Date formatting utilities
│   │       ├── string.ts     # String manipulation utilities
│   │       └── array.ts      # Array manipulation utilities
│   ├── styles/               # Global styles and Tailwind extensions
│   │   ├── globals.css       # Global CSS
│   │   └── tokens.css        # Design tokens (CSS variables)
│   └── types/                # TypeScript type definitions
│       ├── api.ts            # API response and request types
│       ├── product.ts        # Product-related type definitions
│       ├── post.ts           # Blog post-related type definitions
│       ├── user.ts           # User-related type definitions
│       └── common.ts         # Shared type definitions
├── data/                     # Stub data (to be replaced with API calls)
│   ├── mockDb.json           # Mock database for cart
│   ├── posts.json            # Stub posts data
│   ├── products.json         # Stub products data
│   └── users.json            # Stub users data
├── public/                   # Static assets
├── tests/                    # Test files
│   ├── components/           # Component tests
│   ├── hooks/                # Hook tests
│   ├── pages/                # Page tests
│   └── utils/                # Utility function tests
├── ARCHITECTURE.md           # Architecture documentation
├── ISSUES.md                 # Project tasks and issues tracking
└── README.md                 # Project overview and setup instructions
```

## Veri Akışı ve Katmanlar

### 1. Veri Erişim Katmanı

- **API Adapter Pattern**:
  - `src/lib/api/` modülleri API isteklerini soyutlar
  - Her endpoint, uygun tip tanımlarıyla işlev olarak açığa çıkarılır
  - Mock verileri gerçek API'ye geçişte yerine konacak şekilde yapılandırılmıştır
  - Gerçek API entegrasyonunda fonksiyon parametreleri ve dönüş tipleri değişmeyecektir

```typescript
// Örnek API tasarımı
import type { Product } from '@/types/product';

export async function fetchProducts(): Promise<Product[]> {
  // Mock verilerle çalışırken:
  return await import('../../data/products.json').then(m => m.default);
  
  // NestJS entegrasyonunda:
  // return await fetch('/api/products').then(r => r.json());
}
```

### 2. Next.js 15 Dinamik Rota Yapısı

- **Next.js 15.3.2 Asenkron Params**:
  - Dinamik rota parametreleri Next.js 15'te Promise olarak tiptlendirilmektedir
  - Sayfa bileşenleri ve metadata fonksiyonlarında `params` Promise'i açıkça await edilmelidir
  - Server Component'lerde doğrudan await kullanılır

```typescript
// Next.js 15 dinamik rota yapısı
interface PageParams {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: PageParams) {
  // Next.js 15.3.2'de params bir Promise olarak gelir
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);
  
  // ...
}
```

- **TypeScript Tip Güvenliği**:
  - Tüm dinamik rota parametreleri için özel tip tanımlamaları
  - Tip tanımlarında params Promise'ının açıkça belirtilmesi
  - Her sayfanın kendi özel params tipi için arayüz tanımlaması

### 3. UI Katmanları

- **Atomic Design Yaklaşımı**:
  - **Atomlar** (`src/components/ui/`): Buton, input, card gibi temel UI parçaları
  - **Moleküller** (`src/components/`): Form grupları, liste öğeleri gibi bileşik UI parçaları
  - **Organizmalar** (`src/features/*/components/`): Özelliğe özgü karmaşık bileşenler
  - **Şablonlar** (`src/app/*/layout.tsx`): Sayfa düzenleri ve genel yapılandırmalar
  - **Sayfalar** (`src/app/*/page.tsx`): Nihai son kullanıcı görünümleri

- **Server vs Client Component Ayrımı**:
  - Server bileşenleri: Veri getirme, statik içerik, ilk render
  - Client bileşenleri: Kullanıcı etkileşimi, form yönetimi, dinamik davranış

### 4. State Management

- **Kademeli State Yaklaşımı**:
  - Bileşen-içi state: `useState` ve `useReducer` ile yerel durum
  - Özellik düzeyi state: Context API ile özelliğe özgü paylaşılan durum
  - Global state: Sınırlı Context API veya ileriki aşamada React Query/SWR

- **Cart State Management**:
  - localStorage ile geçici çözüm
  - Gerçek backend implementasyonunda API kaynaklı state yönetimine geçiş

### 5. Form Yönetimi ve Doğrulama

- **İki Aşamalı Doğrulama**:
  - Client-side anlık doğrulama: UX ve gereksiz API çağrılarını önleme 
  - API tarafında doğrulama: Backend entegrasyonu sonrası

- **Schema-Based Doğrulama**:
  - İleriki aşamalarda zod veya io-ts ile runtime tip doğrulama
  - Form alanları için hata mesajları ve durum yönetimi

### 6. Hata Yönetimi

- **Çok Katmanlı Yaklaşım**:
  - Uygulama düzeyi: `error.tsx` ile global hataları yakala
  - Özellik düzeyi: Özelliğe özgü error boundary'ler
  - Bileşen düzeyi: Try-catch ve local hata durumları
  - API düzeyi: İstek/yanıt hata işlemleri ve raporlama

- **Merkezi Loglama**:
  - `src/lib/logger.ts` ile hataları merkezi olarak kaydet ve format
  - İleriki aşamalarda Sentry/LogRocket gibi servislerle entegrasyon

## Mimari Tasarım Desenleri

- **Repository Pattern**: API client ile veri erişimini soyutlama
- **Adapter Pattern**: Mock API ile gerçek API arasında tutarlı arayüz
- **Decorator Pattern**: Higher Order Components ile bileşen işlevselliğini artırma
- **Observer Pattern**: localStorage olayları ile cart güncellemelerini izleme
- **Provider Pattern**: Context API ile global state yönetimi
- **Composite Pattern**: Atomic Design ile UI parçalarını hiyerarşik şekilde yapılandırma
- **Strategy Pattern**: Farklı form doğrulama stratejilerini değiştirilebilir kılma
- **Factory Pattern**: Dinamik bileşen oluşturma için fabrika fonksiyonları

## Branching Stratejisi ve Geliştirme Akışı

- **Basitleştirilmiş Git Flow**:
  - `main`: Yalnızca production-ready kod
  - `develop`: Entegrasyon branch'i ve test ortamı
  - `feature/<name>`: Yeni özellikler için çalışma branch'leri
  - `hotfix/<name>`: Kritik hatalar için acil düzeltme branch'leri

- **Pull Request Süreci**:
  - ISSUES.md dosyasındaki işleri referanslama
  - Kodun yapılandırma prensipleriyle uyumluluğunu kontrol
  - Test kapsamını doğrulama
  - Code review sonrası merge

## Performans Optimizasyonları

- **Code Splitting**:
  - Dinamik `import()` ve Next.js `dynamic()` ile sayfa/bileşen lazy loading
  - Büyük 3rd-party kütüphaneleri gerektiğinde yükleme

- **Görsel Optimizasyonu**:
  - `next/image` ile görsel önbelleğe alma ve boyut optimizasyonu
  - LCP (Largest Contentful Paint) görsellerini öncelikli yükleme

- **State Optimizasyonu**:
  - `useMemo` ve `useCallback` ile gereksiz render'ları önleme
  - Context API kullanımında parçalama ile re-render kapsamını sınırlama

## Tasarım Kararları ve Çözümler

### Next.js 15 Uyumluluğu

- **Dinamik Rota Params Yapısı**:
  - Next.js 15.3.2'de dinamik rota parametreleri Promise olarak ele alınır
  - Tüm slug ve diğer dinamik parametreler için Promise tipini kabul eden arayüzler
  - Her sayfada params'ı await etme deseninin tutarlı uygulanışı
  - generateMetadata ve diğer fonksiyonlarda Promise açma işleminin standartlaştırılması

```typescript
// Örnek dinamik sayfa bileşeni
export default async function ProductPage({ params }: PageParams) {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);
  
  if (!product) {
    notFound();
  }
  
  return <ProductDetailWrapper slug={slug} />;
}
```

### Layout Yapısı

- **Tek Root Layout**: Sadece root layout.tsx içinde `<html>` ve `<body>` etiketleri
  - Diğer tüm layoutlar fragment sarmalayıcılar kullanarak hydration hatalarından kaçınır
  - Bu yapı, düzgün HTML yapısını sağlar ve çift HTML/body etiketlerini önler

### Mobil Navigasyon

- **Responsive Tasarım**: Uygulama tüm ekran boyutlarında çalışır
  - Masaüstünde header'da her zaman görünür navigasyon
  - Mobilde hamburger menüden açılan tam ekran overlay
  - Dokunmatik kullanım için büyük hedefler ve net görsel hiyerarşi

### Cart Implementasyonu

- **LocalStorage-Tabanlı Sepet (Geçici)**:
  - Sayfa yenilemeleri arasında kalıcılık
  - Backend entegrasyonu olmadan kullanıcı deneyimi
  - Özel event sistemi ile gerçek zamanlı güncellemeler

### Form Doğrulama

- **Client-side Doğrulama**:
  - Anında hata mesajları ile gelişmiş kullanıcı deneyimi
  - Gereksiz sunucu isteklerini engelleme
  - Her alan için bağımsız hata kontrolleri
  - İleriki aşamalarda zod/io-ts ile şema doğrulama

### Hata Yakalama

- **Özel Hata Sayfaları**: 404 ve 500 sayfaları ile gelişmiş kullanıcı deneyimi
- **Error Boundary'ler**: Client-side çalışma zamanı hatalarını yakalama
  - Tüm uygulamanın çökmesini önleme
  - Hatalardan kurtulma mekanizmaları sunma

### Bileşen Organizasyonu

- **Client vs Server Bileşenler**:
  - Statik içerik ve veri çekme için server bileşenleri
  - Etkileşimli öğeler için 'use client' direktifli client bileşenleri
  - Performans optimizasyonu için net ayrım

### Kod Standardizasyonu

- **Linting ve Formatting**:
  - ESLint ve Prettier ile tutarlı kod stili
  - Commit öncesi otomatik format kontrolleri
  - TypeScript katı tip kontrolü

### Test Stratejisi

- **Çok Katmanlı Test**:
  - Birim testler: İzole işlevsellikleri doğrulama
  - Entegrasyon testleri: Bileşen kombinasyonlarını doğrulama
  - End-to-end testler: Kullanıcı yolculuklarını doğrulama

## Geliştirilecek ve İyileştirilecek Alanlar

- **Cart State Management**: localStorage yerine daha güvenilir çözüm
- **API Soyutlama**: NestJS entegrasyonu için hazır adaptor
- **Internationalization**: Tam yerelleştirme desteği
- **Performans Optimizasyonları**: React Profiler ile performans dar boğazlarını tespit
- **Schema Doğrulama**: Runtime tip güvenliği için zod/io-ts entegrasyonu
- **Kapsamlı Test Coverage**: Jest ve React Testing Library ile test kapsamı artırma
- **Merkezi Loglama**: Hata yakalama ve izleme altyapısı
- **CI/CD Pipeline**: Otomatik test ve deploy süreçleri

## Değişiklik Geçmişi

### 2024-12-27 – Updated: Sepet Ürün Kimliği Bug'ının Düzeltilmesi

- CartContext'te aynı ürünün farklı gramajlarının ayrı sepet öğeleri olarak işlenmesi sorunu çözüldü
- CartItem interface'ine cartItemId (ürün ID + gramaj kombinasyonu) benzersiz kimlik alanı eklendi
- addItem fonksiyonunda mevcut ürün kontrolü cartItemId ile yapılacak şekilde güncellendi
- removeItem ve updateQuantity fonksiyonları cartItemId kullanacak şekilde revize edildi
- CartItem bileşeninde sepet işlemleri cartItemId ile yapılacak şekilde güncellendi
- Artık aynı ürünün farklı gramajları (100g, 250g, 1kg) ayrı sepet satırları olarak görünüyor
- Her gramaj için ayrı fiyat, miktar ve toplam hesaplama doğru şekilde çalışıyor

### 2024-12-27 – Updated: İletişim Sayfasına WhatsApp Entegrasyonu

- Contact sayfasına WhatsApp iletişim bölümü eklendi
- WhatsApp'a doğrudan yönlendiren link entegrasyonu (https://wa.me/905316922045)
- WhatsApp resmi ikonu ve "💬 WhatsApp'tan mesaj gönderin" rehberlik mesajı eklendi
- Yeni sekmede açılım ve güvenlik özellikleri (target="_blank", rel="noopener noreferrer")
- İletişim kanalları çeşitlendirildi: telefon, e-posta, adres, WhatsApp
- Kullanıcıların tercih ettikleri iletişim kanalını seçebilmeleri sağlandı

### 2024-12-27 – Updated: İletişim Sayfasına Google Maps Entegrasyonu

- Contact sayfasındaki adres bölümüne Google Maps linki entegrasyonu eklendi
- Adres alanı artık tıklanabilir ve yeni sekmede Google Maps konumunu açıyor
- Gerçek iş yeri adresi ile güncelleme: "Feyzullah Mahallesi, Serap Caddesi, No: 9, 34843 Maltepe/İstanbul"
- Kullanıcı deneyimi iyileştirmesi: "📍 Haritada görüntülemek için tıklayın" rehberlik mesajı eklendi
- Hover efektleri ve accessible link özellikleri (target="_blank", rel="noopener noreferrer") eklendi

### 2024-12-27 – Updated: Sepet Badge Pozisyon Düzeltmesi

- HeaderClient bileşeninde sepet badge pozisyonlama sorunu düzeltildi
- Badge'in "Sepet" yazısının üstüne çıkmasını engellemek için badge konumu iyileştirildi
- Sepet ikonu için ayrı relative container oluşturularak badge pozisyonu sadece ikona göre ayarlandı
- Desktop navigasyonda sepet badge artık sadece sepet ikonunun sağ üst köşesine konumlanıyor
- Kullanıcı deneyimi iyileştirildi: badge artık metni kapsamıyor

### 2024-12-27 – Updated: Fiyat Hesaplama Bug'larının Düzeltilmesi

- ProductDetail bileşeninde sepete ekleme butonunda toplam fiyat hesaplama düzeltildi
- Miktar değiştiğinde buton fiyatının (birim fiyat × miktar) olarak güncellenmesi sağlandı
- CartItem bileşeninde ürün toplam fiyatının miktar ile çarpılarak gösterilmesi düzeltildi
- Sepet öğelerinde hem toplam fiyat hem de birim fiyat bilgisi gösterilmesi eklendi
- Kullanıcı deneyimi iyileştirildi: fiyat hesaplamaları gerçek zamanlı olarak güncelleniyor

### 2024-12-27 – Updated: Google Drive Görsel URL'lerinin Entegrasyonu

- Google Drive share URL'lerini direkt görüntülenebilir URL'lere dönüştüren utility fonksiyon eklendi
- `src/lib/utils/imageUtils.ts` modülü ile URL conversion sistemi oluşturuldu
- Next.js Image component için `drive.google.com` hostname desteği eklendi
- Tüm ürün bileşenlerinde (ProductDetail, ProductCard, FeaturedProducts, CartItem) Google Drive URL işleme entegrasyonu
- `convertGoogleDriveUrl` fonksiyonu ile `https://drive.google.com/file/d/ID/view` formatını `https://drive.google.com/uc?export=view&id=ID` formatına dönüştürme
- Gerçek ürün görsellerinin production ortamında güvenilir şekilde yüklenmesi sağlandı
- Placeholder fallback sistemi ile backward compatibility korundu

### 2024-12-27 – Updated: Navigation Icons ve Sepet Text Ekleme

- Ana navigasyon tablarına (Ana Sayfa, Hakkımızda, Ürünler, Blog, İletişim) görsel iconlar eklendi
- Sepet ikonu yanına "Sepet" text'i eklendi (hem desktop hem mobile)
- Heroicons SVG'leri ile tutarlı görsel dil sağlandı
- Responsive tasarım uygulandı (desktop'ta w-4 h-4, mobile'da w-5 h-5 icon boyutları)
- Flexbox ile icon ve text arasında uygun spacing (gap-2, gap-3) uygulandı
- HeaderClient.tsx bileşeninde navigasyon kullanıcı deneyimi iyileştirildi

### 2024-12-27 – Updated: Favicon Güncelleme ve Optimizasyon

- Eski favicon (src/app/favicon.ico) kaldırıldı
- Yeni favicon dosyaları public/favicon/ klasörüne organize edildi
- Çoklu boyut desteği (16x16, 32x32, 120x120, 512x512) eklendi
- layout.tsx'e kapsamlı favicon metadata yapılandırması eklendi
- Browser uyumluluğu için farklı boyut seçenekleri sağlandı
- public/favicon.ico olarak standart favicon konfigürasyonu yapıldı

### 2024-12-27 – Updated: Ürün Görselleri İmplementasyonu ve Optimizasyon

- products.json dosyasında görsel yolları düzeltildi (absolute → relative paths)
- Tüm ürün bileşenlerinde placeholder'lar kaldırılarak gerçek görseller entegre edildi
- Next.js Image bileşeni ile optimized görsel yükleme implementasyonu
- ProductDetail sayfasında gelişmiş galeri sistemi (thumbnail navigation)
- Hover efektleri ve geçiş animasyonları eklendi
- Responsive görsel boyutlandırma ve performans optimizasyonu sağlandı
- El Salvador ürünü için /product-images/el-salvador.jpg görsel yolu aktive edildi

### 2024-12-27 – Updated: Excel Verilerinden Ürün Migrasyonu ve Yapısal Dönüşüm

- Product type definition kapsamlı olarak güncellendiği, legacy single price/weight sisteminden modern priceWeight array yapısına geçiş
- 11 yeni premium kahve ürünü eklendi (Brazil Rio Minas, Mogiana, Nicaragua San Jose, El Salvador Shasta, Guatemala Huehuetenango, Ethiopia Yirgacheffe, Honduras San Marcos, Kenya AA Nyeri, Uganda Bugisu)
- Çoklu gramaj seçenekleri sistemi (100g, 250g, 1000g) ile dinamik fiyatlama
- Gelişmiş kahve özellikleri: asidite/yoğunluk skorları, işleme yöntemi, yetişme yüksekliği
- ProductDetail bileşeninde interaktif gramaj seçimi ve gerçek zamanlı fiyat güncelleme
- ProductCard ve FeaturedProducts bileşenlerinde akıllı fiyat gösterimi (en düşük fiyat + seçenek sayısı)
- CartContext backward compatibility ile legacy product desteği
- TRY para birimi standardizasyonu ve Türkçe içerik lokalizasyonu

### 2024-12-27 – Updated: Google Drive Görsel Linklerinin Placeholder ile Değiştirilmesi

- Google Drive share linklerinin Next.js Image component ile uyumsuzluk sorunu çözüldü
- SVG tabanlı placeholder image sistemi oluşturuldu (/product-images/placeholder.jpg)
- Tüm product bileşenlerinde (ProductDetail, ProductCard, FeaturedProducts, CartItem) error handling eklendi
- Image yüklenme hatalarında otomatik placeholder gösterimi (onError handlers)
- Kahve temalı placeholder tasarımı (☕ emoji) ile tutarlı görsel deneyim
- Türkçe placeholder metinleri ve responsive placeholder layout
- Production build ve development server stabilitysi sağlandı

### 2024-12-27 – Updated: CartList React Key Prop Bug'ının Düzeltilmesi

- CartList bileşeninde React key prop sorunu çözüldü
- Map fonksiyonunda item.id yerine item.cartItemId kullanımına geçiş yapıldı
- "Encountered two children with the same key" hatasının ortadan kaldırılması
- Aynı ürün ID'sine sahip farklı gramajlı ürünler için benzersiz key garantisi
- React component identity ve update performansının iyileştirilmesi
- Sepet öğelerinin doğru şekilde render edilmesi ve re-render davranışının düzgün çalışması

### 2024-12-27 – Updated: ProductDetail Miktar Reset Bug'ının Düzeltilmesi

- ProductDetail component'inde sepete ekleme sonrası quantity reset sorunu çözüldü
- handleAddToCart fonksiyonuna setQuantity(1) eklenerek automatic reset sağlandı
- Kullanıcı deneyimi iyileştirildi: sepete ekleme sonrası quantity otomatik 1'e dönüyor
- Sürekli alışveriş senaryolarında kullanıcının quantity'yi manuel reset etme ihtiyacı kaldırıldı
- UX best practice uygulaması: form state'inin işlem sonrası temizlenmesi
- Success message ile senkronize quantity reset davranışı

### 2024-12-27 – Updated: Footer Sosyal Medya Linklerinin Güncellenmesi

- Footer component'inde sosyal medya linklerinin güncellenmesi
- Instagram linkinin placeholder'dan gerçek hesaba yönlendirilmesi (https://www.instagram.com/moodcoffeeandmore/)
- Twitter ikonu ve linkinin kaldırılarak Google Maps entegrasyonu eklenmesi
- Google Maps linki ile konum tabanlı navigasyon (https://maps.app.goo.gl/n76fDfpQ6d76AN4J8)
- Güvenlik özelliklerinin eklenmesi: target="_blank" ve rel="noopener noreferrer"
- Accessibility iyileştirmeleri: screen reader desteği ve updated sr-only metinleri
- Harita ikonu SVG tasarımı ile tutarlı görsel dil korunması

### 2024-12-27 – Updated: Footer Ürün Kategori Linklerinin Düzeltilmesi

- Footer component'inde ürün kategorisi linklerinin doğru sayfalara yönlendirmesi sağlandı
- "Çekirdek Kahve" linkinin single_origin kategorisine yönlendirilmesi (/products?category=single_origin)
- "Türk Kahvesi" linkinin turkish_coffee kategorisine yönlendirilmesi (/products?category=turkish_coffee)
- Yanlış "blend" kategori referanslarının gerçek kategori adlarıyla değiştirilmesi
- "Ekipman" kategorisinin kaldırılması (henüz mevcut ürün yok)
- Footer navigasyonunun mevcut ürün veritabanındaki gerçek kategorilerle tutarlılığının sağlanması
- Kullanıcıların footer'dan kategori linklerine tıkladığında doğru filtrelenmiş ürün listesini görmesi

### 2024-12-27 – Updated: Ürün Kategori Filtreleme Sistemi Bug'ının Düzeltilmesi

- ProductList component'inde URL-based kategori filtreleme sistemi implementasyonu
- useSearchParams hook'u ile URL'den category parametresini okuma ve state'e yansıtma
- URL değiştiğinde otomatik kategori güncelleme ve filtreleme işlevselliği
- handleCategoryChange fonksiyonunda browser history API ile URL güncelleme
- Kategori button'larında yanlış karşılaştırmaların düzeltilmesi (single-origin → single_origin, blend → turkish_coffee)
- Active state gösterimlerinin doğru kategori ile eşleştirilmesi
- "Ekipman" kategori linkinin Footer'a geri eklenmesi
- URL-based navigation ile sayfa yenileme sonrası filtre durumunun korunması
- Browser back/forward button'ları ile kategori geçişlerinin çalışması
- Footer kategori linklerinden ürün sayfasına geçişte doğru filtreleme çalışması

### 2024-12-27 – Updated: Header Navigasyonuna Kafe Menüsü Link Entegrasyonu

- HeaderClient component'ine kafe menüsü external link entegrasyonu
- "Ürünler" ile "Blog" arasına "Kafe Menüsü" linkinin mantıklı yerleşimi
- External menü platformu entegrasyonu (https://menu-online.co/doodcoffee/5/menu)
- target="_blank" ve rel="noopener noreferrer" güvenlik özellikleri
- Book/menu ikonu ile görsel tutarlılık sağlanması
- Desktop ve mobile navigasyon için responsive tasarım
- Çevrimiçi mağaza ile fiziksel kafe menüsü arasında net kullanıcı ayrımı
- Mobile menü otomatik kapanma işlevselliği
- Hover efektleri ve transition animasyonları ile tutarlı UX

### 2024-12-27 – Updated: Header Sticky Positioning Implementasyonu

- HeaderClient bileşeninde position: sticky CSS özelliği uygulandı
- Header'ın scroll yapıldığında sayfanın üstünde sabit kalması sağlandı
- z-index: 50 ile header'ın diğer content'lerin üstünde konumlanması
- Tailwind CSS sticky top-0 z-50 sınıfları ile clean implementation
- Navigation ve sepet icon'una scroll sırasında erişim sürekli korundu
- Uzun sayfalarda (ürün detayları, blog postları) kullanıcı deneyimi iyileştirildi
- Header background (bg-primary) ve border'ın sticky modda korunması
- Responsive tasarım uyumluluğu: hem desktop hem mobile sticky davranış

### 2024-12-27 – Updated: Products Sayfası Suspense Boundary Bug'ının Düzeltilmesi

- Next.js 15.3.2'de useSearchParams hook'u Suspense boundary gerektirmesi sorunu çözüldü
- Products page'inde ProductList component'i Suspense ile sarmalandı
- "useSearchParams() should be wrapped in a suspense boundary" build error'ı ortadan kaldırıldı
- ProductListFallback loading component'i ile graceful loading state eklendi
- Production build'inin başarıyla tamamlanması sağlandı (24/24 static pages generated)
- Client component'lerde useSearchParams kullanımının Next.js 15 standartlarına uyumlu hale getirilmesi
- Static generation ve server-side rendering performance'ının korunması
- SEO optimizasyonları ve meta data generation'ının etkilenmemesi
- Loading transition'ları ile kullanıcı deneyimi iyileştirilmesi

### 2025-01-24 – Updated: Route Yapısı Yeniden Organize Edildi

- Ana route "/" artık karşılama sayfası olarak yapılandırıldı
- Mevcut ana sayfa "/home" route'una taşındı  
- ConditionalLayout bileşeni ile pathname bazlı layout yönetimi eklendi
- Ana sayfa (/) için header/footer olmadan minimal layout sağlandı
- Diğer tüm sayfalar için normal layout (header + content + footer) korundu
- Navigation linklerinin güncellenmesi ve tutarlılığın sağlanması

### 2025-01-24 – Updated: Karşılama Sayfası Tasarım İyileştirmeleri

- Dikey layout (üst-alt) ile sayfa bölümlemesi implementasyonu
- Menü linkinin yeni sekmede açılması (_blank target)
- Poppins font entegrasyonu (Google Fonts) ve Tailwind CSS font konfigürasyonu
- Gerçek Mood Coffee logosu kullanımı (mood-logo.png)
- Koyu gri arka plan (#gray-800) ile modern görünüm
- ESLint hatalarının düzeltilmesi ve kod kalitesi iyileştirmesi

### 2025-01-27 – Updated: CSS Değişkenleri ve Tailwind CSS Entegrasyonu Düzeltildi

CSS variables ve Tailwind CSS entegrasyonu sorunu çözüldü:
- Tailwind config dosyasında hard-coded renk değerleri CSS değişkenleri ile değiştirildi
- `tailwind.config.js`'de colors objesi artık `var(--primary)`, `var(--secondary)` vb. kullanıyor
- `globals.css`'teki `:root` değişkenlerinin değiştirilmesi artık tüm web sitesini etkiliyor
- Merkezi tema yönetimi sağlandı: tek yerden tüm renkleri değiştirme imkanı
- CSS custom properties ile Tailwind utility classes arasında doğru mapping
- Background, foreground, primary, secondary, accent, natural, neutral renkleri entegre edildi
- Tema değişikliklerinin runtime'da uygulanabilmesi için altyapı hazırlandı

### 2025-01-27 – Updated: Öne Çıkan Ürünler Carousel'ına Navigasyon Okları Eklendi

Carousel navigation functionality implementasyonu:
- Sol ve sağ navigasyon okları eklendi (absolute positioning ile)
- Manuel scroll fonksiyonları (scrollLeft, scrollRight) implementasyonu
- Infinite scroll mantığının navigate okları ile uyumlu hale getirilmesi
- Mevcut auto-scroll, hover pause ve infinite scroll özelliklerinin korunması
- Arrow butonlarına hover effects ve accessibility özellikleri eklendi
- Smooth scroll behavior ile kullanıcı deneyimi iyileştirilmesi
- Z-index layering ile arrow butonlarının carousel üzerinde konumlanması

### 2025-01-27 – Updated: Mobile Responsive Design Improvements

Enhanced mobile user experience with the following architectural changes:

1. **Hero Section Button Layout**
   - Modified button container to use flexbox with responsive direction
   - Implemented full-width buttons on mobile, auto-width on desktop
   - Added proper spacing and alignment for better touch targets

2. **Featured Products Carousel**
   - Migrated from static grid to horizontal scrolling carousel
   - Implemented infinite scroll with product duplication
   - Added auto-scroll functionality with 2-second intervals
   - Included hover pause functionality for better user control
   - Added custom scrollbar hiding utilities

3. **Mobile Navigation Menu**
   - Restructured menu items with consistent icon alignment
   - Added divider lines between menu items for better visual separation
   - Implemented fixed-width icon containers for proper alignment
   - Enhanced touch targets and visual hierarchy

4. **CSS Architecture Updates**
   - Added `.scrollbar-hide` utility class for cross-browser scrollbar hiding
   - Enhanced global CSS with custom utility classes
   - Maintained responsive design principles throughout

These changes improve the mobile user experience significantly while maintaining the existing design system and architectural patterns.

## Guidelines

- All architectural decisions must be documented
- Performance implications should be considered for all changes
- Accessibility must be maintained across all features
- Mobile-first approach should be followed for all new components
- Components should be reusable and well-documented
- State management should be efficient and predictable

### 2025-01-24 – Updated: Blog Görselleri Google Drive Entegrasyonu Başarıyla Tamamlandı

#### Google Drive URL İşleme Sistemi Optimizasyonu
- **Thumbnail Format Kullanımı**: Google Drive URL'leri `thumbnail` formatına güncellendi
- **Next.js Image Optimization**: `unoptimized` prop kaldırılarak Next.js'in kendi optimizasyonu kullanıldı
- **Performance İyileştirmesi**: Thumbnail format ile daha hızlı yükleme sağlandı

#### Başarılı Çözüm Detayları
- **URL Format**: `https://drive.google.com/thumbnail?id=FILE_ID&sz=w800`
- **Image Optimization**: Next.js'in built-in image optimization aktif
- **Responsive Images**: Otomatik boyut optimizasyonu ve lazy loading
- **Cross-Origin Support**: CORS ayarları ile Google Drive entegrasyonu

#### Blog Bileşenleri Final Durumu
- **BlogPreview Component**: Google Drive thumbnail'ları düzgün görüntüleniyor
- **Blog List Page**: Tüm blog görselleri yükleniyor
- **Blog Detail Page**: Yüksek kaliteli blog görselleri aktif

#### Teknik Başarı Faktörleri
- **Doğru URL Format**: Thumbnail format Next.js Image component ile uyumlu
- **Optimization Enabled**: Next.js'in kendi image processing'i kullanılıyor
- **Hostname Configuration**: Gerekli domain'ler next.config.ts'e eklendi
- **Performance**: Hızlı yükleme ve otomatik optimizasyon

### 2025-01-24 – Updated: About Sayfası Görsel Entegrasyonu

#### Placeholder Sisteminden Logo Entegrasyonuna Geçiş
- **SVG Placeholder Kaldırma**: "Hikayemiz" ve "Değerlerimiz" bölümlerindeki SVG placeholder'lar kaldırıldı
- **Marka Logosu Entegrasyonu**: Her iki bölümde de `mood-logo.png` görseli kullanıldı
- **Tutarlı Görsel Dil**: Tüm sayfalarda aynı marka logosu ile tutarlılık sağlandı

#### Next.js Image Component Optimizasyonu
- **Performance**: Next.js Image component ile otomatik optimizasyon
- **Responsive Design**: Container boyutuna uyumlu görsel boyutlandırma
- **Aspect Ratio**: `object-contain` ile logo oranlarının korunması
- **Loading**: Lazy loading ve progressive enhancement

#### About Sayfası Görsel Düzeni
- **Hikayemiz Bölümü**: Sağ tarafta logo görseli
- **Değerlerimiz Bölümü**: Sol tarafta logo görseli (order-1/order-2 ile responsive)
- **Styling**: `bg-secondary` arka plan ile marka renklerine uyum
- **Padding**: `p-8` ile logo etrafında uygun boşluk

#### Marka Tutarlılığı
- **Logo Kullanımı**: Tüm sayfalarda aynı `mood-logo.png` dosyası
- **Görsel Hiyerarşi**: Logo'nun about sayfasında marka hikayesini desteklemesi
- **User Experience**: Görsel tutarlılık ile marka tanınırlığının artırılması

### 2025-01-27 – Updated: Ürün Detayında Öğütme Seçenekleri Eklendi

Çekirdek kahveler için öğütme seçenekleri sistemi implementasyonu:
- `Product` interface'ine `grindType` ve `availableGrindOptions` alanları eklendi
- `CartItem` interface'ine öğütme seçeneği desteği eklendi
- `products.json` dosyasında her ürün için `availableGrindOptions` alanı tanımlandı
- Türk Kahvesi için `availableGrindOptions: null`, diğer kahveler için 9 öğütme seçeneği
- `ProductDetail` bileşeninde dinamik öğütme seçenekleri (ürün verisinden)
- Hardcoded seçeneklerden veri-tabanlı dinamik seçeneklere geçiş
- CartContext'te öğütme seçeneği ile benzersiz ürün kimliği oluşturma
- Aynı ürünün farklı öğütme seçenekleriyle ayrı sepet öğeleri olarak işlenmesi
