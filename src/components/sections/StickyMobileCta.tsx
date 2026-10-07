"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PRODUCT_URL, formatPrice } from "@/lib/config";

export function StickyMobileCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Afficher seulement après avoir dépassé le Hero (~450px)
      if (window.scrollY > 450) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200/80 shadow-lg"
        >
          <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
            <div className="leading-tight">
              <p className="text-[11px] text-neutral-500 font-medium">Guide numérique</p>
              <p className="text-sm font-bold text-neutral-900">{formatPrice()}</p>
            </div>
            <Button
              href={PRODUCT_URL}
              external
              size="sm"
              variant="primary"
              className="flex-1 font-bold text-sm py-2.5 shadow-sm"
              aria-label="Acheter le guide"
            >
              J’organise mes repas
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
