import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    slug: "fionce-sac-bakim-sampuani",
    name: "FiONCÉ Saç Bakım Şampuanı",
    category: "Kişisel Bakım",
    shortDesc: "İki güçlü formül: Dökülme Karşıtı ve Kepek Karşıtı. Biotin, Keratin, Ozon ve doğal özlerle saçlarınıza sağlık katın. 250 ml.",
    longDesc:
      "FiONCÉ Saç Bakım Şampuanı, iki özel formülle saçlarınızın tüm ihtiyaçlarını karşılar.\n\nDökülme Karşıtı formül; saç derisinde biriken mikropları ve tıkanan gözenekleri derinlemesine temizlerken aktif oksijen ile saç ve saç derisinin nefes almasını sağlar. Biotin, Keratin, Collagen, Panthenol, Niacinamide, Sodium Hyaluronate, Aloe Vera, Ozon Yağı, Ginseng ve Çörek Otu içeriğiyle saç köklerini güçlendirir; dökülmeye karşı direnç kazandırır ve yeni saç oluşumunu destekler.\n\nKepek Karşıtı formül; Ardıç Katranı ile saç derisini temizleyerek kepek oluşumunu engeller. Trichogen saç köklerini beslerken Salicylic Acid ölü hücrelerden arındırır. Panthenol, Çay Ağacı Yağı, Ginseng, Biotin ve Niacinamide ile saçları güçlendirir ve yeniler.\n\nHer iki formül de tüm saç tiplerine uygun olup günlük kullanım için tasarlanmıştır.",
    price: "₺249",
    images: [
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=800&q=80",
      "https://images.unsplash.com/photo-1631390121823-1c0e5c55f50f?w=800&q=80",
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=800&q=80",
    ],
    specs: [
      { label: "Hacim", value: "250 ml / 8.45 fl.oz." },
      { label: "Varyantlar", value: "Dökülme Karşıtı · Kepek Karşıtı" },
      { label: "Ortak İçerikler", value: "Biotin, Keratin, Collagen, Ozon, Panthenol, Ginseng" },
      { label: "Dökülme Karşıtı+", value: "Aloe Vera, Sodium Hyaluronate, Niacinamide, Çörek Otu" },
      { label: "Kepek Karşıtı+", value: "Ardıç Katranı, Trichogen, Salicylic Acid, Çay Ağacı Yağı" },
      { label: "Saç Tipi", value: "Tüm Saç Tipleri" },
      { label: "Üretim Yeri", value: "Made in Türkiye" },
      { label: "Üretici", value: "FARMAPLUS KOZMETİK İLAÇ SAN. VE TİC. LTD. ŞTİ." },
      { label: "SKT", value: "04.2028" },
    ],
    externalLink: "https://www.farmapluskozmetik.com",
    isFeatured: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured);
}

export function getRelatedProducts(currentSlug: string, category: string, limit = 4): Product[] {
  return products
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
    .concat(
      products
        .filter((p) => p.slug !== currentSlug && p.category !== category)
        .slice(0, Math.max(0, limit - products.filter((p) => p.slug !== currentSlug && p.category === category).length))
    )
    .slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export const categories = [...new Set(products.map((p) => p.category))];
