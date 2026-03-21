import type { Metadata } from "next";
import { Target, Eye, Heart } from "lucide-react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: "FiONCÉ beauty & healthy hakkında bilgi edinin. Misyonumuz, vizyonumuz ve değerlerimiz.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Hakkımızda" }]} />

      <div className="mt-10 mb-12">
        <h1 className="text-4xl font-bold text-slate-900">Hakkımızda</h1>
        <p className="text-xl text-slate-500 mt-4 leading-relaxed">
          FiONCÉ, saç sağlığını bilim ve doğanın gücüyle buluşturan bir beauty & healthy markasıdır. Türkiye'de üretilen ürünlerimizle saçlarınıza en iyi bakımı sunuyoruz.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {[
          {
            icon: Target,
            title: "Misyonumuz",
            desc: "Doğal içerikler ve ileri teknoloji formüllerle saç sağlığını desteklemek; her saç tipine uygun etkili çözümler sunmak.",
          },
          {
            icon: Eye,
            title: "Vizyonumuz",
            desc: "Türkiye'nin saç bakımında en güvenilir ve tercih edilen markası olmak; her evde FiONCÉ kalitesini hissettirmek.",
          },
          {
            icon: Heart,
            title: "Değerlerimiz",
            desc: "Doğallık, güven ve etkililik. Her ürünümüz titizlikle formüle edilir ve tüm saç tiplerine uygunluğu test edilir.",
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
            <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl w-fit mb-4">
              <Icon className="w-5 h-5" />
            </div>
            <h2 className="font-semibold text-slate-900 mb-2">{title}</h2>
            <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="prose prose-slate max-w-none">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Neden FiONCÉ?</h2>
        <p className="text-slate-600 leading-relaxed mb-4">
          FiONCÉ ürünleri, FARMAPLUS KOZMETİK tarafından İstanbul'da üretilmektedir. Formüllerimiz; Biotin, Keratin, Collagen, Ozon ve onlarca bitkisel özü bir araya getirerek saça gerçek anlamda besleme, güçlendirme ve koruma sağlar.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Dökülme karşıtı ve kepek karşıtı varyantlarımız, saç derisinin farklı ihtiyaçlarına özel geliştirilmiş olup günlük kullanıma uygundur. Tüm saç tiplerine uygun, güvenli formüllerimizle saçlarınıza sevgi katın.
        </p>
      </div>
    </div>
  );
}
