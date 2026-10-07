"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { heroWomanImage, guide3dMockup, livre3dDebout } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-8 pb-16 md:pt-14 md:pb-24 border-b border-neutral-200/60">
      {/* ─── Image de fond culinaire avec voiles dégradés ─── */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        <Image
          src={guide3dMockup.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[1px] opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/95 to-cream/80" />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-transparent to-cream" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Colonne Texte & Copywriting officiel */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand/10 text-brand text-xs sm:text-sm font-semibold tracking-wide mx-auto lg:mx-0 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                GUIDE PRATIQUE DE NUTRITION AFRICAINE
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[2.85rem] font-bold text-neutral-900 leading-[1.16] tracking-tight">
                Tu n’as pas besoin d’abandonner le riz, l’igname, le manioc ou le plantain pour mieux manger.
              </h1>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="p-4 rounded-xl bg-white/90 border-l-4 border-brand border-neutral-200/80 shadow-2xs max-w-xl mx-auto lg:mx-0 text-left">
                <p className="text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  Arrête de croire que mieux manger signifie abandonner la cuisine que tu aimes.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-3 max-w-2xl mx-auto lg:mx-0 text-neutral-700 text-sm sm:text-base leading-relaxed">
                <p>
                  Le vrai changement commence souvent dans la façon dont tu composes ton assiette, dans les portions que tu prends, dans la manière dont tu cuisines et dans l’organisation de tes repas.
                </p>
                <p className="font-semibold text-brand text-base sm:text-lg">
                  Apprends à mieux manger avec les aliments que tu connais déjà.
                </p>
                <p className="text-neutral-600">
                  Découvre une méthode simple, des recettes locales et des repères pratiques pour arrêter d’improviser tes repas.
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
                    pulse={true}
                    className="w-full sm:w-auto text-base sm:text-lg px-8 py-4 shadow-lg hover:shadow-xl font-extrabold tracking-wide"
                    aria-label="Acheter le guide et organiser ses repas sur Chariow"
                  >
                    J’ORGANISE MIEUX MES REPAS — {formatPrice()}
                  </Button>
                </div>

                {/* 3 micro-arguments sous le bouton */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs sm:text-sm text-neutral-600 font-medium pt-1">
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand font-bold">✓</span> Guide numérique pratique
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand font-bold">✓</span> Compatible smartphone
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="text-brand font-bold">✓</span> Repères simples
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Colonne Visuel : Présentation 3D du Livre debout avec animation fluide */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <FadeIn delay={0.3} direction="left" className="w-full max-w-sm sm:max-w-md">
              <div className="relative flex flex-col items-center" style={{ perspective: 1200 }}>
                {/* Livre 3D debout avec animation dynamique continue */}
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotateY: [-8, 8, -8],
                    rotateX: [2, -2, 2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="relative cursor-pointer select-none"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-white">
                    <Image
                      src={livre3dDebout.src}
                      alt={livre3dDebout.alt}
                      fill
                      priority
                      sizes="(max-width: 768px) 80vw, 360px"
                      className="object-cover"
                    />
                  </div>
                </motion.div>

                {/* Ombre portée réaliste au sol synchronisée */}
                <motion.div
                  animate={{
                    scale: [1, 0.85, 1],
                    opacity: [0.35, 0.2, 0.35],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="w-48 sm:w-56 h-4 rounded-full bg-neutral-900/40 blur-md mt-4"
                />

                {/* Vignette de réassurance sous le livre 3D */}
                <div className="mt-4 flex items-center gap-3 p-3 rounded-xl bg-white/95 border border-neutral-200/80 shadow-sm max-w-xs w-full">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand shadow-2xs">
                    <Image
                      src={heroWomanImage.src}
                      alt={heroWomanImage.alt}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-left text-xs leading-tight">
                    <p className="font-bold text-neutral-900">Méthode africaine testée</p>
                    <p className="text-neutral-500 mt-0.5">Pensée pour nos marchés et notre quotidien</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>
    </section>
  );
}
