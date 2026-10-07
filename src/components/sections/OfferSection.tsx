"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { PRODUCT_URL, PRODUCT_NAME, formatPrice } from "@/lib/config";
import { livre3dDebout } from "@/lib/images";

export function OfferSection() {
  const guaranteeBullets = [
    "La méthode visuelle de composition de l’assiette (½ - ¼ - ¼)",
    "Fiches complètes sur les aliments locaux (igname, manioc, plantain, fonio, etc.)",
    "15 recettes concrètes : petits-déjeuners, déjeuners, dîners et collations",
    "Conseils pratiques pour les repas au maquis, au travail et en fête",
    "Liste de courses intelligente (version éco et standard)",
    "Lecture immédiate sur smartphone (PDF haute définition téléchargeable)",
  ];

  return (
    <section id="offre" className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container width="narrow">
        <FadeIn>
          <div className="rounded-3xl bg-white border-2 border-brand/40 p-6 sm:p-10 shadow-card">
            <div className="text-center max-w-xl mx-auto space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand/10 text-brand inline-block">
                OFFRE DE LANCEMENT
              </span>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                ARRÊTE D’IMPROVISER TES REPAS.
              </h2>

              <p className="font-display text-lg sm:text-xl font-bold text-brand">
                COMMENCE À LES ORGANISER.
              </p>

              <div className="p-4 rounded-2xl bg-cream/70 border border-neutral-200/80 text-xs sm:text-sm text-neutral-700 space-y-1.5 leading-relaxed">
                <p>Tu n’as pas besoin d’attendre lundi.</p>
                <p>Tu n’as pas besoin de supprimer toute ta cuisine.</p>
                <p>Tu n’as pas besoin de chercher encore une nouvelle méthode compliquée.</p>
                <p className="font-bold text-neutral-900 pt-1">
                  Commence avec les aliments que tu as déjà. Commence avec ton prochain repas.
                </p>
              </div>

              {/* Présentation du livre et prix */}
              <div className="py-6 flex flex-col sm:flex-row items-center justify-center gap-6 border-y border-neutral-100">
                <div className="relative w-36 sm:w-44 aspect-[3/4] rounded-xl overflow-hidden shadow-lg border border-neutral-200/60 bg-neutral-100 flex-shrink-0">
                  <Image
                    src={livre3dDebout.src}
                    alt={livre3dDebout.alt}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>

                <div className="text-center sm:text-left space-y-2">
                  <h3 className="font-display font-bold text-lg text-neutral-900">
                    {PRODUCT_NAME}
                  </h3>
                  <div className="inline-block p-3 rounded-xl bg-brand/10 border border-brand/20">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-neutral-600">
                      Prix unique de lancement
                    </p>
                    <p className="font-display text-3xl font-extrabold text-brand">
                      {formatPrice()}
                    </p>
                  </div>
                  <p className="text-xs text-neutral-500">
                    Accès numérique immédiat après confirmation
                  </p>
                </div>
              </div>

              {/* Inclusions */}
              <div className="text-left py-2 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                  Ce que tu reçois immédiatement :
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-700">
                  {guaranteeBullets.map((bullet) => (
                    <div key={bullet} className="flex items-start gap-2">
                      <span className="text-brand font-bold mt-0.5 select-none">✓</span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton CTA */}
              <div className="pt-4 space-y-3">
                <Button
                  href={PRODUCT_URL}
                  external
                  size="lg"
                  variant="primary"
                  pulse={true}
                  className="w-full text-base sm:text-lg py-4 shadow-lg hover:shadow-xl font-extrabold tracking-wide"
                  aria-label="Acheter le guide maintenant sur Chariow"
                >
                  J’ORGANISE MIEUX MES REPAS AUJOURD’HUI — {formatPrice()}
                </Button>

                <p className="text-xs text-neutral-500 font-medium">
                  🔒 Paiement et commande sécurisés via Chariow • Accès numérique instantané
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
