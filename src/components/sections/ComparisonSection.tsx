"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { plateBeforeImage, plateAfterImage } from "@/lib/images";

export function ComparisonSection() {
  const beforePoints = [
    "Tu supprimes les aliments que tu aimes.",
    "Tu cherches des recettes compliquées.",
    "Tu improvises tes repas.",
    "Tu manges sans repère clair sur les portions.",
    "Tu te retrouves perdu lorsque tu manges dehors.",
  ];

  const afterPoints = [
    "Tu gardes les aliments que tu connais.",
    "Tu apprends à mieux composer ton assiette.",
    "Tu utilises des repères simples pour estimer les portions.",
    "Tu adaptes progressivement la cuisson et les accompagnements.",
    "Tu sais quoi faire même au travail, au maquis, pendant une fête ou lorsque ta journée ne se passe pas comme prévu.",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Deux visions de ton assiette
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              ARRÊTE DE LUTTER CONTRE TA CUISINE.
            </h2>
            <p className="font-display text-lg sm:text-xl font-medium text-brand">
              APPRENDS À MIEUX L’ORGANISER.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Colonne AVANT */}
          <FadeIn delay={0.1} direction="right">
            <div className="h-full rounded-3xl bg-neutral-50/80 border border-neutral-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xs">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-neutral-200/60">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-200 text-neutral-700">
                    L&apos;ANCIENNE FAÇON
                  </span>
                  <span className="font-display font-bold text-lg text-neutral-500">AVANT</span>
                </div>

                {/* Photo réelle de l'assiette avant */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-200 shadow-inner">
                  <Image
                    src={plateBeforeImage.src}
                    alt={plateBeforeImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-neutral-900/80 backdrop-blur-xs text-white text-xs p-2 rounded-lg text-center font-medium">
                    Portion disproportionnée de féculent sans structure
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {beforePoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-neutral-600">
                      <span className="text-neutral-400 font-bold select-none mt-0.5">❌</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Colonne AVEC LE GUIDE */}
          <FadeIn delay={0.2} direction="left">
            <div className="h-full rounded-3xl bg-cream/70 border-2 border-brand/40 p-6 sm:p-8 flex flex-col justify-between shadow-sm relative">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-brand/20">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand text-white shadow-2xs">
                    MÉTHODE SIMPLE & DURABLE
                  </span>
                  <span className="font-display font-bold text-lg text-brand">AVEC LE GUIDE</span>
                </div>

                {/* Photo réelle de l'assiette après */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 shadow-md border border-brand/20">
                  <Image
                    src={plateAfterImage.src}
                    alt={plateAfterImage.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-brand/90 backdrop-blur-xs text-white text-xs p-2 rounded-lg text-center font-semibold">
                    ½ légumes colorés, ¼ protéine locale, ¼ féculent
                  </div>
                </div>

                <ul className="space-y-3 pt-2">
                  {afterPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-neutral-900 font-medium">
                      <span className="text-brand font-bold select-none mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Phrase de synthèse officielle */}
        <FadeIn delay={0.3}>
          <div className="mt-10 p-6 rounded-2xl bg-cream border border-neutral-200/80 text-center max-w-2xl mx-auto shadow-2xs">
            <p className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-snug">
              Tu ne changes pas toute ta cuisine.
              <br />
              <span className="text-brand">Tu changes progressivement ta manière de l’organiser.</span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
