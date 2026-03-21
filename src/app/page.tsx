import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Zap, Shield, Leaf, Sparkles } from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

export default function Home() {
  const featured = getFeaturedProducts();
  const heroProduct = featured[0];

  return (
    <div>
      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center bg-white overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(226,232,240,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(226,232,240,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        {/* Gradient fades over grid */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white via-white/80 to-indigo-50/60" />

        {/* Decorative blobs */}
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-indigo-100/40 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-violet-100/30 blur-3xl pointer-events-none" />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Left column — 60% */}
            <div className="lg:col-span-3 space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                FiONCÉ Beauty &amp; Healthy
              </div>

              {/* Heading */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.08] tracking-tight text-balance">
                Saçlarınıza{" "}
                <span className="text-indigo-600">Değer Verin,</span>
                <br />
                Farkı Hissedin
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-slate-500 leading-relaxed max-w-md">
                Doğal içerikler ve ileri teknoloji formülüyle hazırlanan FiONCÉ saç bakım ürünleriyle saçlarınıza sağlık ve parlaklık katın.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-7 py-3.5 rounded-xl font-semibold min-h-[44px] hover:bg-indigo-700 transition-colors duration-150 shadow-lg shadow-indigo-200/60"
                >
                  Ürünleri Keşfet
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-7 py-3.5 rounded-xl font-semibold min-h-[44px] hover:border-indigo-300 hover:text-indigo-600 transition-colors duration-150"
                >
                  Hakkımızda
                </Link>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <CheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                <span>
                  <strong className="text-slate-700 font-semibold">2 Varyant</strong>
                  {" · "}
                  <strong className="text-slate-700 font-semibold">Made in Türkiye</strong>
                  {" · "}
                  <strong className="text-slate-700 font-semibold">Dermatolog Onaylı</strong>
                </span>
              </div>
            </div>

            {/* Right column — 40% featured product preview */}
            <div className="lg:col-span-2 flex justify-center lg:justify-end">
              {heroProduct && (
                <div className="relative w-full max-w-sm">
                  {/* Blob decorators behind card */}
                  <div className="absolute -top-8 -left-8 w-56 h-56 rounded-full bg-indigo-200/30 blur-2xl pointer-events-none" />
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-violet-200/25 blur-2xl pointer-events-none" />

                  {/* Card */}
                  <Link
                    href={`/products/${heroProduct.slug}`}
                    className="relative group block bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xl shadow-slate-200/60 hover:shadow-2xl hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Featured ribbon */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
                        Öne Çıkan
                      </span>
                    </div>

                    {/* Image */}
                    <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                      <Image
                        src={heroProduct.images[0]}
                        alt={heroProduct.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        sizes="(max-width: 768px) 100vw, 400px"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOj9Tt7RaGJ0WC2h9Lim1LSVqSFbJA2TjA9q6SFfLrqEi4tGFIjMOFt5haQCUrwCCD6g13RRQB//2Q=="
                        placeholder="blur"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-medium mb-1">
                        {heroProduct.category}
                      </p>
                      <h3 className="font-semibold text-slate-900 text-[17px] leading-snug line-clamp-2 mb-2">
                        {heroProduct.name}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                        {heroProduct.shortDesc}
                      </p>
                      <div className="flex items-center justify-between">
                        {heroProduct.price && (
                          <span className="text-lg font-bold text-indigo-600">
                            {heroProduct.price}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-sm font-medium text-indigo-600 group-hover:gap-2 transition-all duration-150">
                          İncele <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats / Trust Bar ─────────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-slate-200">
            {[
              { value: "1", label: "Ürün" },
              { value: "250ml", label: "Hacim" },
              { value: "%100", label: "Doğal" },
              { value: "Ücretsiz", label: "İnceleme" },
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
                Her saç tipine özel geliştirilen FiONCÉ bakım serisi
              </p>
            </div>
            <Link
              href="/products"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              Tümünü Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-sm mx-auto">
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
            Dökülme karşıtı ve kepek karşıtı formüllerimizle saçlarınıza ihtiyaç duydukları bakımı verin.
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
