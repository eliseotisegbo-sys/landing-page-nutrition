"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { dishImages } from "@/lib/images";

export function DishesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const copywritingMeals = [
    {
      title: "Riz + haricots / niébé + légumes & avocat",
      copyTitle: "Riz + légumes + poisson / niébé",
      copySubtitle: "Un repas familier, simplement mieux composé.",
      image: dishImages[0],
    },
    {
      title: "Plantain + œufs brouillés aux légumes",
      copyTitle: "Plantain + haricots + légumes",
      copySubtitle: "Des aliments que tu connais déjà, avec une structure plus claire.",
      image: dishImages[1],
    },
    {
      title: "Plantain bouilli + œufs + légumes & avocat",
      copyTitle: "Igname + légumes + poisson",
      copySubtitle: "Pas besoin d’abandonner l’igname ou le plantain.",
      image: dishImages[2],
    },
    {
      title: "Viande rôtie + légumes sautés + avocat",
      copyTitle: "Poulet + légumes + patate douce",
      copySubtitle: "Simple, pratique et facile à adapter.",
      image: dishImages[3],
    },
    {
      title: "Riz & féculent + ragoût de légumes frais",
      copyTitle: "Fonio + gombo + poisson",
      copySubtitle: "Une autre manière d’organiser ton assiette.",
      image: dishImages[4],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % copywritingMeals.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + copywritingMeals.length) % copywritingMeals.length);
  };

  // Support swipe tactile mobile
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -40) {
      handleNext();
    } else if (info.offset.x > 40) {
      handlePrev();
    }
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Photographies de nos repas
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              REGARDE CE QUE TU PEUX DÉJÀ FAIRE AVEC TES ALIMENTS
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              Glisse avec ton doigt sur mobile ou utilise les flèches :
            </p>
          </FadeIn>
        </div>

        {/* Contrôles du Carrousel */}
        <div className="flex items-center justify-between mb-4 max-w-4xl mx-auto px-2">
          <span className="text-xs sm:text-sm font-medium text-neutral-500">
            Repas {activeIndex + 1} sur {copywritingMeals.length}
          </span>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Repas précédent"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:scale-95 flex items-center justify-center text-neutral-700 transition shadow-2xs cursor-pointer select-none"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Repas suivant"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:scale-95 flex items-center justify-center text-neutral-700 transition shadow-2xs cursor-pointer select-none"
            >
              →
            </button>
          </div>
        </div>

        {/* Carte principale tactile */}
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="max-w-4xl mx-auto bg-cream rounded-3xl p-4 sm:p-8 shadow-card border border-neutral-200/80 cursor-grab active:cursor-grabbing touch-pan-y"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {/* Photo culinaire réelle */}
            <div className="md:col-span-7">
              <div className="relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden bg-neutral-200 shadow-md">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={copywritingMeals[activeIndex].image.src}
                      alt={copywritingMeals[activeIndex].image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Description du plat */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wide">
                {copywritingMeals[activeIndex].image.tag}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {copywritingMeals[activeIndex].copyTitle}
              </h3>

              <p className="text-base text-brand font-medium">
                {copywritingMeals[activeIndex].copySubtitle}
              </p>

              <div className="pt-2 text-sm text-neutral-600 leading-relaxed border-t border-neutral-200">
                <p className="font-semibold text-neutral-800 mb-1">Détail de l’assiette :</p>
                <p>{copywritingMeals[activeIndex].image.description}</p>
              </div>

              {/* Puces de pagination interactives */}
              <div className="flex gap-2 pt-4">
                {copywritingMeals.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    type="button"
                    aria-label={`Aller au plat ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                      idx === activeIndex
                        ? "w-8 bg-brand"
                        : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Phrase de transition */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center max-w-xl mx-auto p-5 rounded-xl bg-white border border-neutral-200 hover:shadow-sm transition-shadow">
            <p className="text-base sm:text-lg font-bold text-neutral-900">
              Le guide t’apprend le principe.
              <br />
              <span className="text-brand">Les recettes t’aident à l’appliquer.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
