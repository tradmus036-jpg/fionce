"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import Logo from "@/components/navigation/Logo";

type NavItem = {
  href: string;
  label: string;
  dropdown?: { href: string; label: string; desc?: string }[];
};

const navLinks: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  {
    href: "/products",
    label: "Ürünler",
    dropdown: [
      { href: "/products", label: "Tüm Ürünler", desc: "Tüm Ürün Kataloğunu Gör" },
      { href: "/products?kategori=Saç Bakımı", label: "Saç Bakımı", desc: "Şampuan ve Saç Serileri" },
      { href: "/products?kategori=Cilt Bakımı", label: "Cilt Bakımı", desc: "Krem ve Serum Ürünleri" },
      { href: "/products?kategori=Vücut Bakımı", label: "Vücut Bakımı", desc: "Masaj ve Vücut Serileri" },
    ],
  },
  {
    href: "/brands",
    label: "Markalarımız",
    dropdown: [
      { href: "/brands#fionc%C3%A9", label: "FiONCÉ", desc: "Beauty & Healthy" },
      { href: "/brands#lifesty", label: "LIFESTY", desc: "Lifestyle & Wellness" },
    ],
  },
  { href: "/about", label: "Hakkımızda" },
  { href: "/contact", label: "İletişim" },
  { href: "/faq", label: "SSS" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleDropdownEnter = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(href);
  };

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 300);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = () => setOpenDropdown(null);
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  const isActive = (link: NavItem) =>
    pathname === link.href || link.dropdown?.some((d) => pathname === d.href);

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
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(link.href)}
                  onMouseLeave={handleDropdownLeave}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Link
                    href={link.href}
                    className={`relative flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                      isActive(link)
                        ? "text-indigo-600"
                        : "text-slate-600 hover:text-indigo-600"
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        openDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                    {isActive(link) && (
                      <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 rounded-full" />
                    )}
                  </Link>

                  {/* Dropdown wrapper — starts at top-full with zero gap so mouseleave never fires mid-travel */}
                  <div
                    className={`absolute top-full left-0 w-56 pt-1.5 ${
                      openDropdown === link.href ? "pointer-events-auto" : "pointer-events-none"
                    }`}
                    onMouseEnter={() => handleDropdownEnter(link.href)}
                    onMouseLeave={handleDropdownLeave}
                  >
                  <div
                    className={`bg-white rounded-xl shadow-lg border border-slate-100 py-2 transition-all duration-150 ${
                      openDropdown === link.href
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-1"
                    }`}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col px-4 py-2.5 hover:bg-indigo-50 transition-colors duration-100 group"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-600">
                          {item.label}
                        </span>
                        {item.desc && (
                          <span className="text-xs text-slate-400 mt-0.5">{item.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                    isActive(link)
                      ? "text-indigo-600"
                      : "text-slate-600 hover:text-indigo-600"
                  }`}
                >
                  {link.label}
                  {isActive(link) && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-1.5 bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-semibold min-h-[44px] hover:bg-indigo-700 transition-colors duration-150 shadow-sm"
            >
              Ürünleri Keşfet
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

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

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href}>
                <button
                  onClick={() =>
                    setMobileExpanded(mobileExpanded === link.href ? null : link.href)
                  }
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 min-h-[44px] ${
                    isActive(link)
                      ? "bg-indigo-50 text-indigo-600 font-semibold"
                      : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded === link.href ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === link.href && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setMobileOpen(false);
                          setMobileExpanded(null);
                        }}
                        className="flex flex-col px-4 py-2.5 rounded-xl hover:bg-indigo-50 transition-colors duration-100"
                      >
                        <span className="text-sm font-medium text-slate-700">{item.label}</span>
                        {item.desc && (
                          <span className="text-xs text-slate-400">{item.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-150 min-h-[44px] ${
                  isActive(link)
                    ? "bg-indigo-50 text-indigo-600 font-semibold"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
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
