"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { plateMethodImage } from "@/lib/images";

export function PlateMethodSection() {
  return (
    <section id="methode" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              La règle visuelle fondamentale
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              VOICI LE PRINCIPE QUI CHANGE TOUT.
            </h2>
            <p className="font-display text-lg sm:text-xl font-medium text-brand">
              UNE ASSIETTE PLUS SIMPLE À COMPRENDRE.
            </p>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Pas besoin de peser chaque aliment pour commencer. Utilise un repère visuel simple :
            </p>
          </FadeIn>
        </div>

        {/* Infographie officielle de l'assiette idéale */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto mb-12 rounded-3xl overflow-hidden shadow-card border border-neutral-200/80 bg-white p-3 sm:p-5">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-neutral-100">
              <Image
                src={plateMethodImage.src}
                alt={plateMethodImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 950px"
                className="object-contain"
              />
            </div>
          </div>
        </FadeIn>

        {/* 3 Blocs de composition de l'assiette */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Bloc 1 : 1/2 Légumes */}
          <FadeIn delay={0.2}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-brand/30 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-brand text-white">
                  ½ ASSIETTE
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  LÉGUMES
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  Repère : deux poignées, ou la moitié de l’assiette.
                </p>
                <div className="pt-2 border-t border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-800 mb-1">Exemples du marché :</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Gombo, chou, tomate, carotte, concombre, feuilles vertes, aubergine locale...
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bloc 2 : 1/4 Protéines */}
          <FadeIn delay={0.3}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-neutral-200 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-neutral-800 text-white">
                  ¼ ASSIETTE
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  PROTÉINES
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  Repère : la taille de votre paume.
                </p>
                <div className="pt-2 border-t border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-800 mb-1">Exemples du marché :</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Poisson (frais ou fumé), œufs, poulet sans peau, niébé, haricots...
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Bloc 3 : 1/4 Féculent */}
          <FadeIn delay={0.4}>
            <div className="h-full p-6 sm:p-7 rounded-2xl bg-white border-2 border-neutral-200 shadow-2xs flex flex-col justify-between">
              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-amber-700 text-white">
                  ¼ ASSIETTE
                </span>
                <h3 className="font-display text-xl font-bold text-neutral-900">
                  FÉCULENT
                </h3>
                <p className="text-xs text-neutral-500 font-medium">
                  Repère : la taille de votre poing, un seul féculent.
                </p>
                <div className="pt-2 border-t border-neutral-100">
                  <p className="text-xs font-semibold text-neutral-800 mb-1">Exemples du marché :</p>
                  <p className="text-sm text-neutral-700 leading-relaxed">
                    Riz, igname, manioc préparé, patate douce, plantain, mil, sorgho, fonio...
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Conclusion & CTA */}
        <FadeIn delay={0.5}>
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-neutral-200/80 max-w-3xl mx-auto text-center space-y-5 shadow-sm">
            <p className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-snug">
              L’objectif n’est pas la perfection.
              <br />
              <span className="text-brand">L’objectif est de savoir comment construire un repas plus équilibré avec ce que tu as déjà.</span>
            </p>

            <div className="pt-2">
              <Button
                href={PRODUCT_URL}
                external
                size="md"
                variant="primary"
                pulse={true}
                className="w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 shadow-md"
              >
                JE COMMENCE À MIEUX COMPOSER MON ASSIETTE — {formatPrice()}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
