import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl mb-6">
        <Search className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-bold text-slate-900 mb-3">Sayfa Bulunamadı</h1>
      <p className="text-slate-500 mb-8 max-w-sm">
        Aradığınız ürün veya sayfa mevcut değil. Silindi ya da URL değişmiş olabilir.
      </p>
      <div className="flex gap-3">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
        >
          Tüm Ürünler
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Ana Sayfa
        </Link>
      </div>
    </div>
  );
}
