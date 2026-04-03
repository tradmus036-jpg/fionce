import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
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
              {product.isBundle && <Badge variant="violet">Fırsat Seti</Badge>}
              {product.isFeatured && !product.isBundle && <Badge variant="indigo">Öne Çıkan</Badge>}
              {product.discountPercent && (
                <span className="inline-flex items-center bg-rose-500 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  %{product.discountPercent} İndirim
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold text-slate-900 leading-tight">{product.name}</h1>
            {product.price && (
              <div className="flex items-baseline gap-3 mt-3">
                <p className="text-3xl font-bold text-indigo-600">{product.price}</p>
                {product.originalPrice && (
                  <p className="text-xl text-slate-400 line-through">{product.originalPrice}</p>
                )}
              </div>
            )}
          </div>

          <p className="text-slate-600 leading-relaxed">{product.longDesc}</p>

          {/* CTA */}
          {(product.hepsiburadaLink || product.trendyolLink) && (
            <div className="flex flex-col gap-3 pt-2">
              <p className="text-sm font-medium text-slate-500">Satın almak için platform seçin:</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {product.hepsiburadaLink && (
                  <a
                    href={product.hepsiburadaLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-white border-2 border-[#FF6000] px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 active:bg-orange-100 transition-colors shadow-sm"
                  >
                    <Image
                      src="/images/brands/hepsiburada.svg"
                      alt="Hepsiburada"
                      width={140}
                      height={30}
                      className="h-9 w-auto"
                    />
                  </a>
                )}
                {product.trendyolLink && (
                  <a
                    href={product.trendyolLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-3 bg-white border-2 border-[#F27A1A] px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 active:bg-orange-100 transition-colors shadow-sm"
                  >
                    <Image
                      src="/images/brands/trendyol.svg"
                      alt="Trendyol"
                      width={120}
                      height={30}
                      className="h-9 w-auto"
                    />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Bundle Contents */}
          {product.isBundle && product.bundleItems && product.bundleItems.length > 0 && (
            <div className="border border-violet-200 rounded-2xl overflow-hidden bg-violet-50/40">
              <div className="px-5 py-3 border-b border-violet-200 bg-violet-50">
                <h2 className="font-semibold text-violet-800 text-sm">Bu Setin İçeriği</h2>
              </div>
              <div className="divide-y divide-violet-100">
                {product.bundleItems.map((itemId) => {
                  const item = products.find((p) => p.id === itemId);
                  if (!item) return null;
                  return (
                    <Link
                      key={itemId}
                      href={`/products/${item.slug}`}
                      className="flex items-center gap-4 px-5 py-3 hover:bg-violet-50 transition-colors group"
                    >
                      <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white border border-violet-100 flex-shrink-0">
                        <Image
                          src={item.images[0]}
                          alt={item.name}
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 group-hover:text-violet-700 transition-colors leading-snug line-clamp-1">
                          {item.name}
                        </p>
                        <p className="text-xs text-slate-400 mt-0.5">{item.shortDesc.split(".")[0]}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

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
