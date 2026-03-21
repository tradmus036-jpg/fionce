"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Logo from "@/components/navigation/Logo";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/products", label: "Ürünler" },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
  { href: "/faq", label: "SSS" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-white/80 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity duration-150">
            <Logo iconSize={32} wordmarkClass="text-xl font-bold text-indigo-600" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                  pathname === link.href
                    ? "text-indigo-600"
                    : "text-slate-600 hover:text-indigo-600"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold min-h-[44px] hover:bg-indigo-700 transition-colors duration-150 shadow-sm"
            >
              Ürünleri Keşfet
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center rounded-lg text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors duration-150"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav — sheet style */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 min-h-[44px] ${
                pathname === link.href
                  ? "bg-indigo-50 text-indigo-600 font-semibold"
                  : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2">
            <Link
              href="/products"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-4 py-3 rounded-xl text-sm font-semibold min-h-[44px] hover:bg-indigo-700 transition-colors duration-150 w-full"
            >
              Ürünleri Keşfet <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
