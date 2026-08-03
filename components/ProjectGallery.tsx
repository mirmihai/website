"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

// Define the props interface
interface ProjectGalleryProps {
  images: string[];
  title: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Navigation Handlers
  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Framer Motion Drag Handler for Mobile Swipe
  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo,
  ) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      handleNext();
    } else if (info.offset.x > swipeThreshold) {
      handlePrev();
    }
  };

  // Keyboard Accessibility Handler
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      handleNext();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      handlePrev();
    }
  };

  // Thumbnail Sliding Window Logic
  const maxVisibleThumbs = 5;
  let startIdx = Math.max(0, activeIndex - Math.floor(maxVisibleThumbs / 2));
  let endIdx = startIdx + maxVisibleThumbs;

  if (endIdx > images.length) {
    startIdx = Math.max(0, images.length - maxVisibleThumbs);
    endIdx = images.length;
  }

  const visibleThumbnails = images
    .map((src, index) => ({ src, originalIndex: index }))
    .slice(startIdx, endIdx);

  return (
    <div
      className="w-full lg:w-2/3 flex flex-col gap-4 sm:gap-6 lg:self-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange rounded-2xl transition-all"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} image gallery`}
    >
      {/* Featured Main Image Container */}
      <div className="flex items-center justify-center gap-0 sm:gap-6 w-full relative">
        {/* Left Arrow */}
        <button
          type="button"
          onClick={handlePrev}
          className="hidden sm:flex flex-shrink-0 z-20 p-3 rounded-full bg-slate-900 hover:bg-handy-orange text-white transition-all border border-slate-700 hover:border-handy-orange shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
          aria-controls="gallery-image-wrapper"
          aria-label="Previous image"
        >
          <LuChevronLeft size={28} />
        </button>

        {/* Image Frame */}
        <div
          id="gallery-image-wrapper"
          className="relative w-full sm:flex-1 aspect-square sm:aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 touch-pan-y group"
          aria-roledescription="slide"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing"
              drag="x"
              dragDirectionLock
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
            >
              <Image
                src={images[activeIndex]}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 50vw"
                alt={`${title} - Image ${activeIndex + 1} of ${images.length}`}
                className="object-cover sm:object-contain transition-all duration-300 pointer-events-none"
                // FIX: Only prioritize the very first image to save Vercel optimizations
                priority={activeIndex === 0}
              />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-transparent to-slate-950/60 pointer-events-none" />
            </motion.div>
          </AnimatePresence>

          {/* Screen Reader Live Region */}
          <div
            aria-live="polite"
            aria-atomic="true"
            className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 bg-slate-950/80 backdrop-blur-sm px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-300 border border-slate-800 pointer-events-none"
          >
            {activeIndex + 1} / {images.length}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          type="button"
          onClick={handleNext}
          className="hidden sm:flex flex-shrink-0 z-20 p-3 rounded-full bg-slate-900 hover:bg-handy-orange text-white transition-all border border-slate-700 hover:border-handy-orange shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-handy-orange"
          aria-controls="gallery-image-wrapper"
          aria-label="Next image"
        >
          <LuChevronRight size={28} />
        </button>
      </div>

      {/* Thumbnail Navigation Strip */}
      <div
        className="flex justify-center gap-2 sm:gap-4 w-full max-w-3xl mx-auto h-20 sm:h-28 mt-2"
        role="tablist"
        aria-label="Thumbnail navigation"
      >
        {visibleThumbnails.map(({ src, originalIndex }) => (
          <button
            key={originalIndex}
            type="button"
            role="tab"
            aria-selected={activeIndex === originalIndex}
            aria-controls="gallery-image-wrapper"
            onClick={() => setActiveIndex(originalIndex)}
            className={`relative w-[18%] sm:w-[15%] max-w-[120px] rounded-xl overflow-hidden border-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-handy-orange ${
              activeIndex === originalIndex
                ? "border-handy-orange opacity-100 scale-[0.98]"
                : "border-slate-800 opacity-40 hover:opacity-100 hover:border-slate-600 mix-blend-luminosity hover:mix-blend-normal"
            }`}
            aria-label={`View ${title} image ${originalIndex + 1}`}
          >
            <Image
              src={src}
              fill
              sizes="(max-width: 768px) 20vw, 15vw"
              alt={`Thumbnail ${originalIndex + 1}`}
              className="object-cover pointer-events-none"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
