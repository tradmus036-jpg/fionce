"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => setActiveIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setActiveIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 group">
        <Image
          src={images[activeIndex]}
          alt={`${productName} - Görsel ${activeIndex + 1}`}
          fill
          className="object-contain transition-all duration-500"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUE/8QAIhAAAQMEAgMAAAAAAAAAAAAAAQIDBAAFERIhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOj9Tt7RaGJ0WC2h9Lim1LSVqSFbJA2TjA9q6SFfLrqEi4tGVIjMOFt5haQCUrwCCD6g13RRQB//2Q=="
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Önceki görsel"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
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
                  onClick={() => setActiveIndex(i)}
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
  );
}
