import type { Metadata } from "next";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Markalarımız",
  description:
    "FiONCÉ beauty & healthy çatısı altındaki ürün serilerini ve üretici markamız FARMAPLUS KOZMETİK'i keşfedin.",
};

const brands = [
  {
    name: "FiONCÉ",
    tagline: "beauty & healthy",
    description:
      "Saç, cilt ve vücut bakımında doğal içerikler ile ileri teknoloji formülleri bir araya getiren tüketici markamız. Biotin'den Ozon'a, Collagen'den bitkisel özlere uzanan geniş içerik yelpazesiyle her ihtiyaca özel çözümler sunar.",
    color: "from-purple-50 to-purple-100",
    accent: "bg-purple-600",
    textAccent: "text-purple-700",
    borderAccent: "border-purple-200",
    series: [
      { name: "Anti-Hair Loss Serisi", desc: "Dökülme karşıtı saç bakımı — Biotin, Keratin, Collagen, Ozon" },
      { name: "Anti-Dandruff Serisi", desc: "Kepek karşıtı saç bakımı — Ardıç Katranı, Salicylic Acid, Collagen" },
      { name: "Effective Touch of Plants", desc: "Bitkisel özlü cilt bakımı — Arnica, Viola, Panthenol" },
      { name: "Expert Skin Affect", desc: "Onarıcı cilt bakımı — Hydrolyzed Collagen, Hyaluronate, Argan Oil" },
      { name: "Care Well Series", desc: "Ozonlu yağ serumları — Ozonized Olive Oil, Collagen, Licorice" },
      { name: "Vücut Bakımı", desc: "Roll-on masaj serumu — Ozon, Capsicum, Caffeine, Mentol" },
    ],
  },
  {
    name: "FARMAPLUS",
    tagline: "Kozmetik",
    description:
      "30 yılı aşkın üretim deneyimiyle İstanbul'dan Türkiye'ye ve dünyaya kozmetik kalitesi sunan köklü üretici markamız. FiONCÉ ürünlerinin tamamı FARMAPLUS KOZMETİK tesislerinde üretilmektedir.",
    color: "from-blue-50 to-blue-100",
    accent: "bg-blue-700",
    textAccent: "text-blue-700",
    borderAccent: "border-blue-200",
    series: [
      { name: "Üretim Merkezi", desc: "Made in Türkiye — İstanbul" },
      { name: "Kalite Güvencesi", desc: "Dermatolojik açıdan test edilmiş, güvenli formüller" },
      { name: "Deneyim", desc: "30+ yıllık kozmetik üretim altyapısı" },
    ],
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs />

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Markalarımız</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            FARMAPLUS KOZMETİK'in 30 yıllık üretim birikimi ve FiONCÉ'nin modern beauty & healthy anlayışıyla
            her ihtiyaca özel bakım çözümleri sunuyoruz.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className={`rounded-2xl border ${brand.borderAccent} bg-gradient-to-br ${brand.color} p-8`}
            >
              <div className="flex items-start gap-5 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl ${brand.accent} flex items-center justify-center shrink-0`}
                >
                  <span className="text-white font-bold text-lg leading-none text-center">
                    {brand.name.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <h2 className={`text-2xl font-bold ${brand.textAccent}`}>{brand.name}</h2>
                    <span className="text-sm text-gray-500 italic">{brand.tagline}</span>
                  </div>
                  <p className="text-gray-600 mt-1 leading-relaxed text-sm">{brand.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {brand.series.map((s) => (
                  <div key={s.name} className="bg-white/70 rounded-xl px-4 py-3">
                    <p className={`font-semibold text-sm ${brand.textAccent}`}>{s.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
