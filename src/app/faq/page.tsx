import type { Metadata } from "next";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Accordion from "@/components/ui/Accordion";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "FiONCÉ saç bakım ürünleri hakkında en sık sorulan soruların cevaplarını bulun.",
};

const faqItems = [
  {
    question: "FiONCÉ şampuanı hangi saç tiplerine uygundur?",
    answer:
      "FiONCÉ Saç Bakım Şampuanı her iki varyantı (Dökülme Karşıtı ve Kepek Karşıtı) da tüm saç tiplerine uygundur. Kuru, yağlı veya karma saç tipine sahip olsanız da güvenle kullanabilirsiniz.",
  },
  {
    question: "Dökülme Karşıtı ve Kepek Karşıtı varyantları arasındaki fark nedir?",
    answer:
      "Dökülme Karşıtı formül; Biotin, Keratin, Collagen ve Ozon ile saç köklerini güçlendirip dökülmeye karşı direnç kazandırır. Kepek Karşıtı formül ise Ardıç Katranı, Salicylic Acid ve Trichogen ile kepek sorununu köklü biçimde çözer ve saç derisini arındırır.",
  },
  {
    question: "Şampuanı nasıl kullanmalıyım?",
    answer:
      "Saç köklerinizi bol suyla iyice ıslatın, yeterli miktarda şampuanı saç diplerinize ve saça uygulayarak masaj yapın. 2-3 dakika bekledikten sonra bol suyla durulayın. Günlük kullanıma uygundur.",
  },
  {
    question: "Arnica & Viola Cream ve Repair Cream nasıl kullanılır?",
    answer:
      "Yeterli miktarda kremi temiz cildinize dairesel hareketlerle hafifçe masaj yaparak uygulayın. Ürünü uyguladıktan sonra durulamayın. Serin ve kuru yerde muhafaza edin. 3 yaş altı çocukların kullanımı için uygun değildir.",
  },
  {
    question: "Roll Fresh Massage Serum hangi bölgelerde kullanılır?",
    answer:
      "Roll Fresh, roll-on başlığı sayesinde doğrudan ihtiyaç duyulan bölgeye kolayca uygulanır. Boyun, omuz, sırt, bel, kol ve bacak gibi gerginlik hissedilen bölgelerde kullanılabilir. Gün içinde gerektiği kadar tekrarlanabilir. Kadın ve erkek kullanımına uygundur.",
  },
  {
    question: "Ozone Oil Serum'lar nasıl kullanılır?",
    answer:
      "Ozone & Collagen ve Ozone & Licorice Oil Serum'ları temiz cilde 2–3 damla uygulayın. Nazik masaj hareketleriyle cilde yedirin. Sabah ve/veya akşam bakım rutininizde kullanılabilir. Hafif yapısı sayesinde yağlı his bırakmaz.",
  },
  {
    question: "Ürünler nerede üretiliyor?",
    answer:
      "FiONCÉ ürünleri, FARMAPLUS KOZMETİK İLAÇ SAN. VE TİC. LTD. ŞTİ. tarafından İstanbul Büyükçekmece'de üretilmektedir. Made in Türkiye kalitesiyle tüm standartlara uygun şekilde üretilmektedir.",
  },
  {
    question: "Ürünleri nereden satın alabilirim?",
    answer:
      "Ürün sayfasındaki 'Satın Almak İçin Git' butonuna tıklayarak yetkili satıcı sayfasına yönlendirilirsiniz. En güncel fiyat ve stok bilgisi için satıcı sayfasını ziyaret etmenizi öneririz.",
  },
  {
    question: "Ürün hakkında daha fazla bilgi almak istiyorum, kiminle iletişime geçebilirim?",
    answer:
      "İletişim sayfamızdan bize ulaşabilir veya info@farmapluskozmetik.com adresine e-posta gönderebilirsiniz. Ayrıca www.farmapluskozmetik.com adresini ziyaret edebilirsiniz.",
  },
];

export default function FaqPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "SSS" }]} />

      <div className="mt-10 mb-10">
        <h1 className="text-4xl font-bold text-slate-900">Sık Sorulan Sorular</h1>
        <p className="text-slate-500 mt-3 text-lg">
          Aklınızdaki soruların cevabını burada bulamazsanız{" "}
          <a href="/contact" className="text-indigo-600 hover:underline font-medium">
            bizimle iletişime geçin
          </a>
          .
        </p>
      </div>

      <Accordion items={faqItems} />
    </div>
  );
}
