"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ZoomIn, X } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  // Close lightbox on Escape key
  useEffect(() => {
    if (!zoomed) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setZoomed(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomed]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = zoomed ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [zoomed]);

  return (
    <>
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div
          className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 group cursor-zoom-in"
          onClick={() => setZoomed(true)}
        >
          <Image
            src={images[activeIndex]}
            alt={`${productName} - Görsel ${activeIndex + 1}`}
            fill
            className="object-contain transition-transform duration-500 group-hover:scale-[1.04]"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOj9Tt7RaGJ0WC2h9Lim1LSVqSFbJA2TjA9q6SFfLrqEi4tGVIjMOFt5haQCUrwCCD6g13RRQB//2Q=="
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          {/* Zoom hint */}
          <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-slate-700 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm pointer-events-none">
            <ZoomIn className="w-4 h-4" />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setActiveIndex(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      i === activeIndex ? "bg-white w-4" : "bg-white/60"
                    }`}
                    aria-label={`Görsel ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`relative flex-1 aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                  i === activeIndex
                    ? "border-indigo-500 shadow-md"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                aria-label={`Görsel ${i + 1}`}
              >
                <Image
                  src={img}
                  alt={`${productName} küçük resim ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {zoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 bg-white/15 hover:bg-white/30 text-white rounded-full p-2.5 transition-colors z-10"
            onClick={() => setZoomed(false)}
            aria-label="Kapat"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="relative w-[90vw] h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${productName} - Görsel ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                aria-label="Önceki görsel"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/15 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                aria-label="Sonraki görsel"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
