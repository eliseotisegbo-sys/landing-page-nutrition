"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { guidePages } from "@/lib/images";

export function BookPreviewSection() {
  const [selectedPage, setSelectedPage] = useState(0);

  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Aperçu exclusif de l’intérieur
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              FEUILLETTE LES PAGES DU GUIDE
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Un aperçu horizontal des fiches pratiques et de la maquette du livre :
            </p>
          </FadeIn>
        </div>

        {/* ─── DÉFILEMENT HORIZONTAL DES FICHES (CAROUSEL / TABS) ─── */}
        <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 pt-2 no-scrollbar px-2 sm:justify-center">
          {guidePages.map((page, idx) => (
            <button
              key={page.title}
              onClick={() => setSelectedPage(idx)}
              type="button"
              className={`flex-shrink-0 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer text-left border ${
                selectedPage === idx
                  ? "bg-brand text-white border-brand shadow-md scale-102"
                  : "bg-white text-neutral-700 hover:bg-neutral-50 border-neutral-200 shadow-2xs"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  selectedPage === idx ? "bg-white text-brand" : "bg-neutral-100 text-neutral-600"
                }`}>
                  {idx + 1}
                </span>
                <span>{page.title}</span>
              </div>
            </button>
          ))}
        </div>

        {/* ─── CADRE VISUEL IMMERSIF ─── */}
        <FadeIn delay={0.2}>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-4 sm:p-8 shadow-card border border-neutral-200/80 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Image de la fiche */}
              <div className="md:col-span-7">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 shadow-sm">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedPage}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={guidePages[selectedPage].src}
                        alt={guidePages[selectedPage].alt}
                        fill
                        sizes="(max-width: 768px) 95vw, 600px"
                        className="object-contain p-2"
                        loading="lazy"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Texte explicatif de la fiche */}
              <div className="md:col-span-5 space-y-4 text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-cream text-brand text-xs font-bold tracking-wide border border-brand/20">
                  Extrait du livre
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  {guidePages[selectedPage].title}
                </h3>

                <p className="text-sm sm:text-base font-semibold text-brand">
                  {guidePages[selectedPage].subtitle}
                </p>

                <p className="text-sm text-neutral-600 leading-relaxed pt-2 border-t border-neutral-100">
                  {guidePages[selectedPage].description}
                </p>

                <div className="pt-2 text-xs text-neutral-400 italic">
                  ✓ Fiches conçues pour consultation immédiate sur smartphone
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
