import Link from "next/link";
import { Github, Twitter, Instagram, Phone } from "lucide-react";
import Logo from "@/components/navigation/Logo";

const footerLinks = [
  { href: "/products", label: "Tüm Ürünler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
  { href: "/faq", label: "SSS" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter / X", href: "#" },
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F172A] text-slate-400">
      {/* Upper section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity duration-150">
              <Logo iconSize={36} wordmarkClass="text-2xl font-bold text-white" />
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-slate-400">
              Saç, cilt ve vücut bakımı için doğal içerikli ürünler. FARMAPLUS KOZMETİK tarafından İstanbul'da üretilmektedir.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-2" />

          {/* Pages column */}
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Sayfalar
            </h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-indigo-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info column */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-5 uppercase tracking-wider">
              Hakkında
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-slate-400">FiONCÉ beauty &amp; healthy</span>
              </li>
              <li>
                <span className="text-slate-400">Made in Türkiye</span>
              </li>
              <li>
                <span className="text-slate-400">info@farmapluskozmetik.com</span>
              </li>
              <li>
                <a
                  href="https://wa.me/905447175085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors duration-150"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  +90 544 717 5085
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Thin separator */}
      <div className="border-t border-slate-800" />

      {/* Lower copyright bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} FiONCÉ beauty &amp; healthy. Tüm hakları saklıdır.</p>
          <p className="text-slate-600">
            Tasarım &amp; Geliştirme ile yapılmıştır.
          </p>
        </div>
      </div>
    </footer>
  );
}
