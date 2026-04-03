"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: "easeOut" }}
    >
      <Link
        href={`/products/${product.slug}`}
        className="group flex flex-col bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/50 hover:-translate-y-1 transition-all duration-300 ease-out"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-[1.04] transition-transform duration-[300ms] ease-out"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOj9Tt7RaGJ0WC2h9Lim1LSVqSFbJA2TjA9q6SFfLrqEi4tGVIjMOFt5haQCUrwCCD6g13RRQB//2Q=="
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />

          {/* Bundle / Featured / Discount ribbons */}
          <div className="absolute top-3 left-0 flex flex-col gap-1.5">
            {product.isBundle && (
              <span className="inline-flex items-center bg-violet-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-r-full shadow-md">
                Fırsat Seti
              </span>
            )}
            {product.isFeatured && !product.isBundle && (
              <span className="inline-flex items-center bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-r-full shadow-md">
                Öne Çıkan
              </span>
            )}
            {product.discountPercent && (
              <span className="inline-flex items-center bg-rose-500 text-white text-[10px] font-bold px-3 py-1 rounded-r-full shadow-md">
                %{product.discountPercent} İndirim
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-3 flex-1">
          {/* Category */}
          <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400 font-medium">
            {product.category}
          </p>

          {/* Product name */}
          <h3
            className="font-semibold text-[18px] text-slate-900 group-hover:text-indigo-600 transition-colors duration-150 leading-snug line-clamp-2"
            style={{ fontFamily: "var(--font-playfair, 'Playfair Display', Georgia, serif)" }}
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-[14px] text-slate-500 leading-relaxed line-clamp-2 flex-1">
            {product.shortDesc}
          </p>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-100 mt-1">
            {product.price ? (
              <div className="flex flex-col gap-0.5">
                <span className="text-[20px] font-bold text-indigo-600 leading-none">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-[13px] text-slate-400 line-through leading-none">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            ) : (
              <span />
            )}
            <span className="flex items-center gap-1 text-sm font-semibold text-indigo-600">
              İncele{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150 ease-out" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
