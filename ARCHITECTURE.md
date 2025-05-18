# Project Architecture

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
│   │   ├── error.tsx         # 500 error page
│   │   ├── not-found.tsx     # 404 not found page
│   │   └── layout.tsx        # Root layout with HTML and body tags
│   ├── components/           # Shared components (cross-feature)
│   │   ├── cart/             # Cart-related components
│   │   ├── contact/          # Contact form components
│   │   ├── layout/           # Layout components (header, footer)
│   │   ├── products/         # Product-related components
│   │   ├── ErrorBoundary.tsx # Client-side error boundary component
│   │   └── ui/               # Atomic UI components (buttons, inputs, etc.)
│   ├── context/              # React Context providers (global state)
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
