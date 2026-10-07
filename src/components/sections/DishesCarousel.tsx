"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { dishImages } from "@/lib/images";

export function DishesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const copywritingMeals = [
    {
      aliment: "Riz",
      title: "Riz : garde ton riz, change l'équilibre",
      advice: "Ajoute davantage de légumes. Ajoute une source de protéines. Adapte la portion de riz.",
      dishName: "Riz blanc, ragoût mijoté de niébé et haricots, avocat frais",
      tag: "Féculent quotidien",
      image: dishImages[0],
    },
    {
      aliment: "Igname",
      title: "Igname : pas besoin de l'abandonner",
      advice: "Garde l’igname. Associe-la avec des légumes et une source de protéines. Privilégie une préparation adaptée plutôt que la friture fréquente.",
      dishName: "Igname bouillie ou en foutou léger, sauce claire aux légumes",
      tag: "Trésor local",
      image: dishImages[2],
    },
    {
      aliment: "Plantain",
      title: "Plantain : varie les cuissons intelligemment",
      advice: "Tu n’as pas besoin de le supprimer. Apprends à varier sa préparation (bouilli, au four, grillé) et à l’associer correctement.",
      dishName: "Plantains alloco dorés ou bouillis accompagnés d’œufs aux légumes",
      tag: "Saveur authentique",
      image: dishImages[1],
    },
    {
      aliment: "Fonio",
      title: "Fonio : l'énergie douce à digestion lente",
      advice: "Utilise-le comme ton féculent du repas. Associe-le avec des légumes et une source de protéines.",
      dishName: "Fonio vapeur, sauce gombo onctueuse et poisson grillé",
      tag: "Céréale ancestrale",
      image: dishImages[4],
    },
    {
      aliment: "Niébé",
      title: "Niébé : fibres & protéines végétales parfaites",
      advice: "Profite de sa combinaison de protéines végétales et de fibres. Associe-le avec des légumes et adapte le reste du repas.",
      dishName: "Niébé mijoté aux tomates et oignons avec légumes verts",
      tag: "Protéine économique",
      image: dishImages[3],
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % copywritingMeals.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + copywritingMeals.length) % copywritingMeals.length);
  };

  // Défilement automatique dynamique chaque seconde (~1.2s pour transition fluide)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % copywritingMeals.length);
    }, 1200);

    return () => clearInterval(timer);
  }, [isPaused, copywritingMeals.length]);

  // Support swipe tactile mobile
  const handleDragEnd = (_: any, info: { offset: { x: number } }) => {
    if (info.offset.x < -30) {
      handleNext();
    } else if (info.offset.x > 30) {
      handlePrev();
    }
  };

  return (
    <section id="assiettes" className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold mb-2">
              <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-brand animate-pulse"}`} />
              {isPaused ? "En pause (survol / toucher)" : "Défilement dynamique actif (1s)"}
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              REGARDE TES PLATS AUTREMENT.
            </h2>
            <p className="font-display text-base sm:text-lg font-medium text-brand">
              TU PEUX GARDER CE QUE TU AIMES ET FAIRE DE MEILLEURS CHOIX.
            </p>
            <p className="text-xs sm:text-sm text-neutral-500">
              Chaque seconde une nouvelle assiette défile. Touche ou survole pour t’arrêter et regarder :
            </p>
          </FadeIn>
        </div>

        {/* Contrôles du Carrousel */}
        <div className="flex items-center justify-between mb-4 max-w-4xl mx-auto px-2">
          <div className="flex items-center gap-2">
            <span className="text-xs sm:text-sm font-semibold text-neutral-800">
              Plat {activeIndex + 1} sur {copywritingMeals.length} : <span className="text-brand font-bold">{copywritingMeals[activeIndex].aliment}</span>
            </span>
            <button
              onClick={() => setIsPaused(!isPaused)}
              type="button"
              className="text-xs px-2.5 py-1 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-600 transition cursor-pointer"
              title={isPaused ? "Reprendre le défilement automatique" : "Mettre en pause"}
            >
              {isPaused ? "▶ Reprendre" : "⏸ Pause"}
            </button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Plat précédent"
              className="w-10 h-10 rounded-full border border-neutral-300 bg-white hover:bg-neutral-100 active:scale-95 flex items-center justify-center text-neutral-700 transition shadow-2xs cursor-pointer select-none"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Plat suivant"
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
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
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

            {/* Description officielle de l'aliment */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-bold tracking-wide">
                {copywritingMeals[activeIndex].tag}
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {copywritingMeals[activeIndex].title}
              </h3>

              <div className="p-3.5 rounded-xl bg-white border border-neutral-200/80 shadow-2xs">
                <p className="text-xs font-bold uppercase text-brand mb-1">Conseil du guide :</p>
                <p className="text-sm text-neutral-800 leading-relaxed font-medium">
                  {copywritingMeals[activeIndex].advice}
                </p>
              </div>

              <p className="text-xs text-neutral-500 leading-normal">
                {copywritingMeals[activeIndex].dishName}
              </p>

              {/* Puces de pagination interactives */}
              <div className="flex gap-2 pt-2">
                {copywritingMeals.map((meal, idx) => (
                  <button
                    key={meal.aliment}
                    onClick={() => setActiveIndex(idx)}
                    type="button"
                    aria-label={`Aller à ${meal.aliment}`}
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

        {/* Synthèse officielle */}
        <FadeIn delay={0.2}>
          <div className="mt-12 text-center max-w-xl mx-auto p-5 rounded-2xl bg-cream/70 border border-neutral-200/80 shadow-2xs">
            <p className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-snug">
              Le principe est simple.
              <br />
              <span className="text-brand">Tu gardes tes aliments. Tu apprends à mieux les associer.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
