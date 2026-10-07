"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { guidePages } from "@/lib/images";

export function BookPreviewSection() {
  const contentPillars = [
    "La méthode de composition de l’assiette (½ - ¼ - ¼)",
    "Les fiches pratiques sur les aliments locaux",
    "Les 15 recettes du quotidien expliquées pas à pas",
    "Le tableau des transformations intelligentes",
    "Les repères pour les repas au maquis, au travail et en fête",
    "La liste de courses intelligente (version éco & standard)",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60 overflow-hidden">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Transparence totale
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              FEUILLETTE LE GUIDE AVANT DE L’ACHETER.
            </h2>
            <p className="font-display text-base sm:text-lg font-medium text-brand">
              REGARDE CE QUE TU VAS RÉELLEMENT RECEVOIR.
            </p>
          </FadeIn>
        </div>

        {/* Aperçu horizontal des pages du guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guidePages.map((page, idx) => (
            <FadeIn key={page.title} delay={idx * 0.1}>
              <div className="rounded-2xl border border-neutral-200/80 bg-cream/50 overflow-hidden shadow-2xs hover:shadow-sm transition-all group flex flex-col justify-between h-full">
                <div className="relative aspect-[4/3] w-full bg-neutral-100 overflow-hidden">
                  <Image
                    src={page.src}
                    alt={page.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    className="object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-base text-neutral-900 leading-snug">
                      {page.title}
                    </h3>
                    <p className="text-xs font-semibold text-brand mt-0.5">
                      {page.subtitle}
                    </p>
                    <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                      {page.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Liste des points inclus dans le guide */}
        <FadeIn delay={0.3}>
          <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-cream border border-neutral-200/80 max-w-3xl mx-auto shadow-2xs">
            <h3 className="font-display font-bold text-lg text-neutral-900 mb-4 text-center">
              À l&apos;intérieur du guide de 31 pages :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contentPillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                  <span className="text-brand font-bold mt-0.5 select-none">✓</span>
                  <span>{pillar}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-200/60 text-center space-y-4">
              <p className="font-display text-base sm:text-lg font-bold text-neutral-900">
                Tu ne regardes pas simplement une couverture.
                <br />
                <span className="text-brand">Tu vois la méthode que tu vas utiliser.</span>
              </p>

              <div>
                <Button
                  href={PRODUCT_URL}
                  external
                  size="md"
                  variant="primary"
                  pulse={true}
                  className="w-full sm:w-auto text-sm sm:text-base px-8 py-3.5 shadow-md"
                >
                  JE FEUILLETTE LE GUIDE ET JE COMMENCE — {formatPrice()}
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
