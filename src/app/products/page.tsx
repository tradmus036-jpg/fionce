import type { Metadata } from "next";
import Link from "next/link";
import { activeProducts as allProducts, categories } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";

interface PageProps {
  searchParams: Promise<{ kategori?: string }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { kategori } = await searchParams;
  return {
    title: kategori ? `${kategori} Ürünleri` : "Tüm Ürünler",
    description: "FiONCÉ beauty & healthy ürünlerini keşfedin. Saç bakımı, cilt bakımı ve vücut bakımı için doğal içerikli ürünler.",
  };
}

export default async function ProductsPage({ searchParams }: PageProps) {
  const { kategori } = await searchParams;

  const filtered = kategori
    ? allProducts.filter((p) => p.category === kategori)
    : allProducts;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Ürünler", href: "/products" },
          ...(kategori ? [{ label: kategori }] : []),
        ]}
      />

      <div className="mt-8 mb-10">
        <h1 className="text-3xl font-bold text-slate-900">
          {kategori ?? "Tüm Ürünler"}
        </h1>
        <p className="text-slate-500 mt-2">
          {filtered.length} ürün
        </p>
      </div>

      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        <Link
          href="/products"
          className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
            !kategori
              ? "bg-indigo-600 text-white"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        >
          Tümü ({allProducts.length})
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/products?kategori=${encodeURIComponent(cat)}`}
            className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
              kategori === cat
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {cat} ({allProducts.filter((p) => p.category === cat).length})
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
}
