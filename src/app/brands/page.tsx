import type { Metadata } from "next";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Markalarımız",
  description:
    "FiONCÉ beauty & healthy ve LIFESTY — doğal içerikli bakım ve lifestyle ürünleriyle her ihtiyaca özel çözümler.",
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
    name: "LIFESTY",
    tagline: "Lifestyle & Wellness",
    description:
      "Günlük yaşamı güzelleştiren, doğal içerikler ve modern formüller ile hazırlanmış lifestyle & wellness ürün serisi. Sağlıklı ve dengeli bir yaşam tarzı için tasarlanmış; cilt, saç ve vücut bakımını bütüncül bir anlayışla ele alır.",
    color: "from-teal-50 to-teal-100",
    accent: "bg-teal-600",
    textAccent: "text-teal-700",
    borderAccent: "border-teal-200",
    series: [
      { name: "Wellness Serisi", desc: "Günlük bakım rutini için doğal içerikli ürünler" },
      { name: "Lifestyle Koleksiyonu", desc: "Modern yaşam tarzına uygun bakım çözümleri" },
    ],
  },
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={[{ label: "Markalarımız" }]} />

        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Markalarımız</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            FiONCÉ beauty & healthy ve LIFESTY — doğal içerikler ve modern formüller ile her ihtiyaca özel bakım ve wellness çözümleri sunuyoruz.
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
