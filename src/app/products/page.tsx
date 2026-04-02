import type { Metadata } from "next";
import { activeProducts as products, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Badge from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Tüm Ürünler",
  description: "FiONCÉ beauty & healthy ürünlerini keşfedin. Saç bakımı, cilt bakımı ve vücut bakımı için doğal içerikli ürünler.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs items={[{ label: "Ürünler" }]} />

      <div className="mt-8 mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Tüm Ürünler</h1>
        <p className="text-slate-500 mt-2">
          {products.length} ürün · {categories.length} kategori
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-indigo-600 text-white cursor-default">
          Tümü ({products.length})
        </span>
        {categories.map((cat) => (
          <span
            key={cat}
            className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-slate-100 text-slate-700 cursor-default hover:bg-slate-200 transition-colors"
          >
            {cat} ({products.filter((p) => p.category === cat).length})
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
