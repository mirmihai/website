"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { LuArrowUp } from "react-icons/lu";

export default function BackToTopButton() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowTopBtn(latest > 400);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showTopBtn && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-handy-orange text-white rounded-full shadow-[0_0_20px_rgba(234,88,12,0.5)] hover:bg-orange-600 transition-colors z-50 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Scroll back to top"
        >
          <LuArrowUp size={24} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
