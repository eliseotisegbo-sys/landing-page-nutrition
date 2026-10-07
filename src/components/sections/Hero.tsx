"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { heroWomanImage, guide3dMockup } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-10 pb-16 md:pt-16 md:pb-24 border-b border-neutral-200/60">
      {/* Halos subtils */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-brand/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Colonne Texte */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs sm:text-sm font-semibold tracking-wide mx-auto lg:mx-0 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                Guide pratique de nutrition africaine
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-neutral-900 leading-[1.18] tracking-tight">
                Tu n’as pas besoin d’abandonner le riz, l’igname, le manioc ou le plantain pour mieux manger.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <p className="text-base sm:text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Apprends simplement à mieux composer ton assiette, à gérer tes portions et à préparer tes repas avec les aliments que tu connais déjà.
              </p>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="p-4 rounded-xl bg-white/90 border border-neutral-200/80 shadow-2xs max-w-xl mx-auto lg:mx-0">
                <p className="text-sm sm:text-base font-semibold text-neutral-900 leading-snug">
                  Des recettes locales. Des repères simples. Une méthode pratique pour arrêter d’improviser tes repas.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start items-center">
                  <Button
                    href={PRODUCT_URL}
                    external
                    size="lg"
                    variant="primary"
                    className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl"
                    aria-label="Acheter le Guide Africain de Nutrition sur Chariow"
                  >
                    JE DÉCOUVRE LE GUIDE — {formatPrice()}
                  </Button>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 font-medium">
                  Accès immédiat • Guide numérique pratique
                </p>
              </div>
            </FadeIn>

            {/* Badges de preuves directes sous le CTA du Hero */}
            <FadeIn delay={0.6}>
              <div className="pt-4 grid grid-cols-3 gap-2.5 max-w-md mx-auto lg:mx-0 border-t border-neutral-200/60">
                <div className="text-center p-2 rounded-lg bg-white/70 border border-neutral-200/60">
                  <p className="text-xs font-bold text-brand">100%</p>
                  <p className="text-[11px] text-neutral-600">Aliments locaux</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/70 border border-neutral-200/60">
                  <p className="text-xs font-bold text-brand">Sans balance</p>
                  <p className="text-[11px] text-neutral-600">Repères visuels</p>
                </div>
                <div className="text-center p-2 rounded-lg bg-white/70 border border-neutral-200/60">
                  <p className="text-xs font-bold text-brand">Immédiat</p>
                  <p className="text-[11px] text-neutral-600">Accès mobile</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Colonne Visuel Immersif : Présentation 3D du Livre & Portrait Cuisinière */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <FadeIn delay={0.3} direction="left" className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                {/* Cadre mockup 3D du Guide */}
                <motion.div
                  whileHover={{ rotateY: 5, rotateX: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative rounded-3xl overflow-hidden bg-white p-3 sm:p-4 shadow-2xl border border-neutral-200/80 transition-all"
                  style={{ perspective: 1000 }}
                >
                  <div className="relative aspect-[4/3] sm:aspect-[4/3] w-full rounded-2xl overflow-hidden bg-neutral-100 shadow-md">
                    <Image
                      src={guide3dMockup.src}
                      alt={guide3dMockup.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 450px"
                      className="object-cover"
                    />
                  </div>

                  {/* Vignette portrait culinaire intégrée */}
                  <div className="mt-3 flex items-center gap-3 p-2.5 rounded-xl bg-cream border border-neutral-200/80">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand shadow-sm">
                      <Image
                        src={heroWomanImage.src}
                        alt={heroWomanImage.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-left text-xs leading-tight">
                      <p className="font-bold text-neutral-900">Méthode africaine éprouvée</p>
                      <p className="text-neutral-500 mt-0.5">Pensée pour nos cuisines et nos marchés réels</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
