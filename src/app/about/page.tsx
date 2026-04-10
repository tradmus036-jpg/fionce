import type { Metadata } from "next";
import { Target, Eye, Heart, Award, FlaskConical, MapPin } from "lucide-react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "FiONCÉ beauty & healthy hakkında bilgi edinin. FARMAPLUS KOZMETİK'in 30 yıllık deneyimiyle üretilen doğal bakım ürünleri.",
};

const stats = [
  { value: "30+", label: "Yıllık Deneyim" },
  { value: "3", label: "Özgün Marka" },
  { value: "100+", label: "Ürün Formülü" },
  { value: "İstanbul", label: "Üretim Merkezi" },
];

const values = [
  {
    icon: Target,
    title: "Misyonumuz",
    desc: "Doğal içerikler ve ileri teknoloji formüllerle saç, cilt ve vücut sağlığını desteklemek; her ihtiyaca özel, etkili ve güvenli çözümler sunmak.",
  },
  {
    icon: Eye,
    title: "Vizyonumuz",
    desc: "Türkiye'nin beauty & healthy alanında en güvenilir ve tercih edilen markası olmak; dermokozmetik kaliteyi her eve taşımak.",
  },
  {
    icon: Heart,
    title: "Değerlerimiz",
    desc: "Doğallık, güven ve etkililik. Her ürünümüz titizlikle formüle edilir, dermatolojik testlerden geçirilir ve yüksek kalite standartlarıyla üretilir.",
  },
];

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Hakkımızda" }]} />

      {/* Hero */}
      <div className="mt-10 mb-14">
        <span className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-medium mb-5">
          <span className="w-2 h-2 rounded-full bg-indigo-600" />
          FiONCÉ beauty &amp; healthy
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-3">
          Neden FiONCÉ?
        </h1>
        <p className="text-xl font-semibold text-indigo-600 mb-5">
          Bilim ve Doğanın Buluşma Noktası
        </p>
        <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
          FiONCÉ, 30 yılı aşkın dermokozmetik deneyimine sahip FARMAPLUS KOZMETİK tarafından geliştirilen bir Kişisel Bakım markasıdır. Türkiye'nin kalbinde üretilen ürünlerimizle saçınıza, cildinize ve vücudunuza gerçek anlamda bakım sunuyoruz.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-indigo-600 mb-1">{value}</div>
            <div className="text-sm text-slate-500">{label}</div>
          </div>
        ))}
      </div>

      {/* Mission / Vision / Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {values.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all duration-300">
            <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl w-fit mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-slate-900 mb-2">{title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* About FARMAPLUS */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-10 mb-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">FARMAPLUS KOZMETİK</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
            <p>
              Saç bakımı, cilt bakımı, vücut bakımı ve güneş koruma ürünleri başta olmak üzere geniş bir ürün yelpazesinde özel formülasyon ve üretim hizmeti sunmaktayız.
            </p>
            <p>
              FARMAPLUS bünyesinde geliştirilen <strong className="text-slate-800">FiONCÉ</strong>, <strong className="text-slate-800">SNOWO3</strong> ve <strong className="text-slate-800">DIBUAL</strong> markaları, şirketin dermokozmetik uzmanlığını tüketiciye doğrudan yansıtan özgün markalardır.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: Award, text: "30+ yıllık dermokozmetik üretim deneyimi" },
              { icon: FlaskConical, text: "100+ özel geliştirilen ürün formülü" },
              { icon: MapPin, text: "Yenimahalle Mah. D-100 Karayolu Cad. No:849/1, Büyükçekmece / İstanbul" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg flex-shrink-0 mt-0.5">
                  <Icon className="w-4 h-4" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why FiONCÉ */}
      <div>
        <p className="text-slate-600 leading-relaxed mb-4">
          FiONCÉ ürünleri; Biotin, Keratin, Collagen, Ozon Yağı ve onlarca bitkisel özü bir araya getiren özel formülasyonlarla hazırlanır. Her ürün, saç derisinin, cildin ve vücudun farklı ihtiyaçlarına özel geliştirilmiş olup günlük kullanıma uygundur.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Dökülme karşıtı ve kepek karşıtı şampuanlarımızdan cilt nemlendirici kremlerimize, masaj serumumuzdan yağ serumlarımıza kadar tüm ürünlerimiz; <strong className="text-slate-800">Made in Türkiye</strong> kalitesiyle, güvenli ve etkili formüllerle üretilmektedir.
        </p>
      </div>
    </div>
  );
}
