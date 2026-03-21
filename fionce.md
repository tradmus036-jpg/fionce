# Project Requirements Document (PRD): Product Showcase Portal

## 1. Project Overview
Bu proje, modern ve profesyonel bir "Ürün Tanıtım Vitrini" sitesidir. Kullanıcılar ürünleri inceleyebilir, özelliklerine bakabilir ve harici satış mağazalarına yönlendirilebilir.
- **Tech Stack:** Next.js 14+ (App Router), TypeScript, Tailwind CSS.
- **Key UI Library:** Lucide React (Icons), Framer Motion (Animations).
- **Primary Goal:** Ürünlerin yüksek performanslı sunumu ve harici mağazalara yönlendirme.

## 2. Core Features & Enhancements
- **Dynamic Routing:** `/products/[slug]` yapısı ile dinamik ürün sayfaları.
- **Centralized Data Management:** Tüm ürünler `src/data/products.ts` dosyasında yönetilmeli.
- **SEO Optimization:** Her ürün için dinamik meta başlıkları ve açıklamaları (generateMetadata).
- **Image Optimization:** `next/image` bileşeni ile `blur` placeholder kullanımı.
- **User Navigation:** "Breadcrumbs" (Ana Sayfa > Ürünler > Ürün Adı) sistemi.
- **Related Products:** Ürün detay sayfalarının altında aynı kategoriden veya rastgele ürün önerileri.

## 3. Proposed File Structure
/src
  /app
    /layout.tsx         # Global Layout (Navbar, Footer, SEO)
    /page.tsx           # Home Page (Hero + Featured Products)
    /products
      /page.tsx         # All Products Listing
      /[slug]
        /page.tsx       # Dynamic Product Detail Page
    /about /contact /faq
  /components
    /navigation         # Navbar, Breadcrumbs, Footer
    /product            # ProductCard, ProductGallery, RelatedProducts
    /ui                 # Reusable Button, Badge, Accordion
  /data
    /products.ts        # SINGLE SOURCE OF TRUTH (Product array)
  /types
    /product.d.ts       # TypeScript interface

## 4. Product Data Schema
Her ürün objesi şu yapıda olmalıdır:
- `id`: string
- `slug`: string (URL dostu isim)
- `name`: string
- `category`: string
- `shortDesc`: string
- `longDesc`: string
- `price`: string (Opsiyonel)
- `images`: string[] (Görsel URL dizisi)
- `specs`: { label: string; value: string }[] (Teknik özellikler tablosu için)
- `externalLink`: string (Satın alma butonu linki)
- `isFeatured`: boolean (Ana sayfada gösterim için)

## 5. UI/UX Requirements
- **Theme:** Temiz, minimalist, bol beyaz alan kullanımı.
- **Colors:** Bir ana vurgu rengi (örn: Indigo veya Emerald) CTA (Call-to-Action) butonları için.
- **Responsive:** Mobil öncelikli (Mobile-first) tasarım.
- **Interactivity:** Butonlarda ve kartlarda hover efektleri, sayfa geçişlerinde yumuşak fade-in animasyonları.

## 6. Instructions for Claude Code
1.  **Environment Setup:** Next.js projesini TypeScript ve Tailwind CSS ile initialize et.
2.  **Data First:** `src/data/products.ts` dosyasını oluştur ve içine en az 3 farklı örnek ürün ekle.
3.  **Dynamic Page Logic:** `/products/[slug]` sayfasını oluştururken veriyi slug üzerinden çek. Eğer ürün bulunamazsa `notFound()` döndür.
4.  **SEO:** Ürün detay sayfalarında `generateMetadata` kullanarak dinamik başlık ve açıklama ekle.
5.  **Navigation:** Tüm sayfalarda tutarlı olan Sticky Navbar ve Footer'ı yapılandır.