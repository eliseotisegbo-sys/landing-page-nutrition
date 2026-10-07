"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, PRODUCT_NAME, formatPrice } from "@/lib/config";
import { guide3dMockup } from "@/lib/images";

export function OfferSection() {
  const guaranteeBullets = [
    "Format numérique compatible smartphone, tablette & ordinateur",
    "Méthode visuelle basée sur 100% d'aliments africains locaux",
    "Téléchargement instantané dès confirmation de paiement",
    "Accès sécurisé et disponible à vie",
  ];

  return (
    <section id="offre" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <FadeIn>
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border-2 border-brand/30 relative overflow-hidden">
            {/* Badge promo */}
            <div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-bl-2xl shadow-sm">
              Offre de lancement
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              {/* Visuel du livre en 3D dans l'offre */}
              <div className="md:col-span-5 flex justify-center">
                <motion.div
                  whileHover={{ rotateY: 4, scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative aspect-[4/3] w-full max-w-[340px] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-50"
                  style={{ perspective: 1000 }}
                >
                  <Image
                    src={guide3dMockup.src}
                    alt={guide3dMockup.alt}
                    fill
                    sizes="(max-width: 768px) 80vw, 340px"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Détails de l'offre */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left">
                <div className="space-y-2">
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
                    Offre Spéciale
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                    {PRODUCT_NAME}
                  </h2>
                </div>

                {/* Prix bien visible */}
                <div className="p-4 rounded-2xl bg-cream border border-neutral-200/80 inline-block w-full sm:w-auto">
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Prix de lancement
                  </p>
                  <p className="font-display text-3xl sm:text-4xl font-extrabold text-brand mt-0.5">
                    {formatPrice()}
                  </p>
                </div>

                <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                  Tu reçois immédiatement ton guide numérique et tu peux commencer à appliquer la méthode dès aujourd’hui.
                </p>

                <ul className="space-y-2.5 text-left border-t border-neutral-100 pt-4">
                  {guaranteeBullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700">
                      <span className="text-brand font-bold mt-0.5 select-none" aria-hidden="true">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 space-y-3">
                  <Button
                    href={PRODUCT_URL}
                    external
                    size="lg"
                    variant="primary"
                    className="w-full text-base sm:text-lg py-4 shadow-lg hover:shadow-xl font-bold"
                    aria-label="Acheter le guide maintenant sur Chariow"
                  >
                    JE VEUX LE GUIDE — {formatPrice()}
                  </Button>

                  <p className="text-xs text-neutral-500 font-medium text-center md:text-left">
                    🔒 Paiement sécurisé via Chariow • Accès numérique immédiat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
