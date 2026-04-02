import Link from "next/link";
import { ArrowRight, Zap, Shield, Leaf, Sparkles } from "lucide-react";
import { getFeaturedProducts, activeProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import HeroSlider from "@/components/home/HeroSlider";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      {/* ── Hero Slider ───────────────────────────────────────────────── */}
      <HeroSlider slides={activeProducts} />

      {/* ── Stats / Trust Bar ─────────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-200">
            {[
              { value: "7", label: "Ürün" },
              { value: "3", label: "Kategori" },
              { value: "%100", label: "Doğal" },
              { value: "Türkiye", label: "Made in" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center py-8 px-6 text-center"
              >
                <span className="font-bold text-3xl text-indigo-600 leading-none" style={{ fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}>
                  {stat.value}
                </span>
                <span className="mt-1.5 text-sm text-slate-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ─────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">
                Ürünlerimiz
              </h2>
              <p className="text-slate-500 text-lg">
                Saç, cilt ve vücut için geliştirilen FiONCÉ beauty &amp; healthy serisi
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Tümünü Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center sm:hidden">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold min-h-[44px] hover:bg-indigo-700 transition-colors duration-150"
            >
              Tüm Ürünleri Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Value Proposition / Feature Section ──────────────────────── */}
      <section className="py-20 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            Neden FiONCÉ?
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Bilim ve doğanın buluştuğu nokta: sağlıklı, güçlü ve parlak saçlar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Leaf,
              title: "Doğal İçerikler",
              desc: "Ozon yağı, aloe vera, ginseng, çay ağacı yağı ve bitkisel özler ile zenginleştirilmiş doğal formül.",
              color: "bg-indigo-50 text-indigo-600",
            },
            {
              icon: Zap,
              title: "İleri Teknoloji",
              desc: "Biotin, Keratin, Collagen ve Sodium Hyaluronate kombinasyonu ile saç köklerini derinlemesine besler.",
              color: "bg-violet-50 text-violet-600",
            },
            {
              icon: Shield,
              title: "Güvenli Formül",
              desc: "Türkiye'de üretilmiş, tüm saç tiplerine uygun, uzun süreli kullanım için güvenli bakım ürünleri.",
              color: "bg-sky-50 text-sky-600",
            },
          ].map(({ icon: Icon, title, desc, color }) => (
            <div
              key={title}
              className="flex flex-col gap-5 p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-700 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-indigo-100 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-3.5 h-3.5" />
            Made in Türkiye
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-5 leading-tight text-balance">
            Saçlarınız İçin{" "}
            <span className="text-indigo-300">En İyi Bakım</span>
          </h2>

          <p className="text-indigo-200 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Saç, cilt ve vücut bakımı için doğal içerikli ürünlerimizle kendinize en iyi bakımı verin.
          </p>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold min-h-[44px] hover:bg-indigo-50 transition-colors duration-150 shadow-xl shadow-indigo-900/30 text-base"
          >
            Ürünleri İncele
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
