import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { getProductBySlug, products } from "@/data/products";
import ProductGallery from "@/components/product/ProductGallery";
import Breadcrumbs from "@/components/navigation/Breadcrumbs";
import Badge from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "Ürün Bulunamadı" };
  }

  return {
    title: product.name,
    description: product.shortDesc,
    openGraph: {
      title: product.name,
      description: product.shortDesc,
      images: [{ url: product.images[0], width: 800, height: 600 }],
    },
  };
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumbs
        items={[
          { label: "Ürünler", href: "/products" },
          { label: product.name },
        ]}
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Gallery */}
        <div>
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="slate">{product.category}</Badge>
              {product.isFeatured && <Badge variant="indigo">Öne Çıkan</Badge>}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">{product.name}</h1>
            {product.price && (
              <p className="text-3xl font-bold text-indigo-600 mt-3">{product.price}</p>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed">{product.longDesc}</p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={product.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 bg-indigo-600 text-white px-6 py-3.5 rounded-xl font-semibold hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200"
            >
              <ExternalLink className="w-4 h-4" />
              Satın Almak İçin Git
            </a>
          </div>

          {/* Specs Table */}
          {product.specs.length > 0 && (
            <div className="border border-slate-200 rounded-2xl overflow-hidden mt-2">
              <div className="bg-slate-50 px-5 py-3 border-b border-slate-200">
                <h2 className="font-semibold text-slate-800 text-sm">Teknik Özellikler</h2>
              </div>
              <div className="divide-y divide-slate-100">
                {product.specs.map((spec) => (
                  <div key={spec.label} className="flex px-5 py-3">
                    <span className="w-2/5 text-sm text-slate-500 font-medium">{spec.label}</span>
                    <span className="w-3/5 text-sm text-slate-800">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}
