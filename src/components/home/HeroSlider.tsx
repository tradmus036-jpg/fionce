"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Product } from "@/types/product";

interface HeroSliderProps {
  slides: Product[];
}

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function HeroSlider({ slides }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir);
      setCurrent(index);
    },
    []
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, slides.length, goTo]);

  useEffect(() => {
    if (slides.length <= 1) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, slides.length]);

  const slide = slides[current];

  return (
    <section className="relative w-full h-[88vh] min-h-[540px] overflow-hidden bg-slate-900">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={slide.slug}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background image */}
          <Image
            src={slide.images[0]}
            alt={slide.name}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.55, ease: "easeOut" }}
                className="max-w-2xl space-y-5"
              >
                <span className="inline-block text-xs uppercase tracking-[0.18em] text-white/60 font-medium">
                  {slide.category}
                </span>

                <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight">
                  {slide.name}
                </h2>

                <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-lg">
                  {slide.shortDesc}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={`/products/${slide.slug}`}
                    className="inline-flex items-center gap-2 bg-white text-slate-900 px-7 py-3.5 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-150 shadow-xl"
                  >
                    Ürünü İncele
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors duration-150"
                  >
                    Tüm Ürünler <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-150"
            aria-label="Önceki slayt"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-white/15 hover:bg-white/35 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/20 transition-all duration-150"
            aria-label="Sonraki slayt"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dot navigation */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Slayt ${i + 1}`}
            />
          ))}
        </div>
      )}

      {/* Slide counter */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 right-6 z-20 text-white/50 text-sm font-medium tabular-nums">
          {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </div>
      )}
    </section>
  );
}
