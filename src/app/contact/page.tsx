import type { Metadata } from "next";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Bizimle iletişime geçin. Sorularınızı, önerilerinizi ve geri bildirimlerinizi bekliyoruz.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "İletişim" }]} />

      <div className="mt-10 mb-12">
        <h1 className="text-4xl font-bold text-slate-900">İletişim</h1>
        <p className="text-xl text-slate-500 mt-4">Sorularınız için buradayız.</p>
      </div>

      {/* WhatsApp CTA */}
      <div className="mb-10">
        <a
          href="https://wa.me/905447175085"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 bg-green-50 border border-green-200 rounded-2xl px-6 py-5 hover:bg-green-100 transition-colors group"
        >
          <div className="p-3 bg-green-500 text-white rounded-xl flex-shrink-0">
            <Phone className="w-5 h-5" />
          </div>
          <div>
            <div className="text-sm font-semibold text-green-800 mb-0.5">Sipariş &amp; WhatsApp Bilgi Hattı</div>
            <div className="text-xl font-bold text-green-700 group-hover:text-green-800 transition-colors">+90 544 717 5085</div>
          </div>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-slate-800">Bize Ulaşın</h2>
          {[
            { icon: Mail, label: "E-posta", value: "info@farmapluskozmetik.com" },
            { icon: MessageSquare, label: "Web", value: "www.farmapluskozmetik.com" },
            { icon: MapPin, label: "Adres", value: "Yenimahalle Mah. D-100 Karayolu Cad. No:849/1, Büyükçekmece / İstanbul" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="p-2.5 bg-indigo-100 text-indigo-600 rounded-xl flex-shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-900">{label}</div>
                <div className="text-sm text-slate-500">{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-800 mb-5">Mesaj Gönder</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Ad Soyad</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">E-posta</label>
              <input
                type="email"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow"
                placeholder="email@ornek.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Mesaj</label>
              <textarea
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow resize-none"
                placeholder="Mesajınızı yazın..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold text-sm hover:bg-indigo-700 transition-colors"
            >
              Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
