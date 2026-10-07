"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { plateBeforeImage, plateAfterImage } from "@/lib/images";

export function ComparisonSection() {
  const beforePoints = [
    "Supprimer les aliments que tu aimes.",
    "Chercher des recettes compliquées.",
    "Improviser chaque repas.",
    "Manger sans repère sur les portions.",
    "Se retrouver perdu dès qu’on mange dehors.",
  ];

  const afterPoints = [
    "Garder les aliments que tu connais.",
    "Apprendre à mieux composer ton assiette.",
    "Utiliser des portions faciles à estimer.",
    "Adapter la cuisson et les accompagnements.",
    "Savoir quoi faire même au travail, au maquis ou pendant une fête.",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Changement de perspective
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mt-1">
              L’ANCIENNE FAÇON VS LA NOUVELLE
            </h2>
          </FadeIn>
        </div>

        {/* ─── DÉMONSTRATION VISUELLE AVANT / APRÈS ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {/* Assiette Avant */}
          <FadeIn delay={0.1} direction="up">
            <div className="rounded-2xl p-4 sm:p-5 bg-neutral-50 border border-neutral-200/80 shadow-2xs hover:shadow-md transition-shadow">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-neutral-200">
                <Image
                  src={plateBeforeImage.src}
                  alt={plateBeforeImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-red-600/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Repas improvisé (Avant)
                </span>
              </div>
              <p className="text-xs text-neutral-500 italic text-center">
                Excès d’huile, montagne de féculents, absence quasi-totale de légumes
              </p>
            </div>
          </FadeIn>

          {/* Assiette Après */}
          <FadeIn delay={0.2} direction="up">
            <div className="rounded-2xl p-4 sm:p-5 bg-brand-light/40 border-2 border-brand/30 shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden mb-4 border border-brand/20">
                <Image
                  src={plateAfterImage.src}
                  alt={plateAfterImage.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-brand text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Assiette équilibrée (Avec le Guide)
                </span>
              </div>
              <p className="text-xs text-brand font-medium italic text-center">
                ½ légumes locaux savoureux, ¼ poisson braisé, ¼ riz modéré
              </p>
            </div>
          </FadeIn>
        </div>

        {/* ─── LISTE COMPARATIVE DÉTAILLÉE ─── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Colonne Avant */}
          <FadeIn delay={0.2}>
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-neutral-50 border border-neutral-200/80 space-y-5 hover:border-neutral-300 transition-all">
              <div className="flex items-center gap-3 border-b border-neutral-200 pb-4">
                <span className="w-8 h-8 rounded-full bg-red-100 text-red-600 font-bold flex items-center justify-center text-sm">
                  ✕
                </span>
                <h3 className="font-sans font-bold text-lg text-neutral-800 tracking-wider">
                  AVANT
                </h3>
              </div>

              <ul className="space-y-4">
                {beforePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-neutral-600 text-sm sm:text-base">
                    <span className="text-red-500 font-bold mt-0.5 select-none" aria-hidden="true">
                      ❌
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Colonne Avec le Guide */}
          <FadeIn delay={0.3}>
            <div className="h-full rounded-2xl p-6 sm:p-8 bg-brand-light/50 border-2 border-brand/40 shadow-sm space-y-5 relative hover:border-brand transition-all">
              <div className="flex items-center gap-3 border-b border-brand/20 pb-4">
                <span className="w-8 h-8 rounded-full bg-brand text-white font-bold flex items-center justify-center text-sm">
                  ✓
                </span>
                <h3 className="font-sans font-bold text-lg text-brand-dark tracking-wider">
                  AVEC LE GUIDE
                </h3>
              </div>

              <ul className="space-y-4">
                {afterPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-neutral-800 font-medium text-sm sm:text-base">
                    <span className="text-brand font-bold mt-0.5 select-none" aria-hidden="true">
                      ✓
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Phrase de conclusion forte */}
        <FadeIn delay={0.4}>
          <div className="mt-12 text-center max-w-xl mx-auto p-6 rounded-2xl bg-cream border border-neutral-200/80 shadow-2xs hover:shadow-card transition-all">
            <p className="font-display text-lg sm:text-xl font-bold text-neutral-900 leading-snug">
              Tu ne changes pas complètement ta cuisine.
              <br />
              <span className="text-brand">Tu apprends à mieux l’organiser.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
