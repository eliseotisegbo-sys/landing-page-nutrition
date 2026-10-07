import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_URL, formatPrice } from "@/lib/config";
import { guideCover } from "@/lib/images";

export function WhatYouGetSection() {
  const contents = [
    "La méthode de composition de l’assiette",
    "Les repères sur les portions",
    "Les aliments locaux et leurs utilisations",
    "Les transformations intelligentes",
    "Des recettes pratiques",
    "Des idées de petits-déjeuners",
    "Des déjeuners simples",
    "Des dîners légers",
    "Des collations",
    "Des repas familiaux adaptés",
    "Une liste de courses intelligente",
    "Des conseils pour les repas au travail et au maquis",
    "Des repères simples pour bouger davantage",
  ];

  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
            Contenu complet
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            CE QUE TU REÇOIS
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-card border border-neutral-200/80">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visuel du Guide */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative aspect-[3/4] w-full max-w-[280px] rounded-2xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-50">
                <Image
                  src={guideCover.src}
                  alt={guideCover.alt}
                  fill
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="object-contain p-2"
                />
              </div>
            </div>

            {/* Liste détaillée */}
            <div className="md:col-span-7 space-y-6">
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 flex items-center gap-2">
                  <span>📘</span> LE GUIDE AFRICAIN DE NUTRITION
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mt-2 leading-relaxed">
                  Un guide pratique pour apprendre à mieux organiser ton alimentation avec les aliments que tu connais déjà.
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100">
                <p className="text-xs font-bold uppercase tracking-wider text-brand mb-3">
                  À l’intérieur :
                </p>
                <ul className="grid grid-cols-1 gap-2.5">
                  {contents.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800">
                      <span className="text-brand font-bold mt-0.5 select-none" aria-hidden="true">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-neutral-100">
                <Button
                  href={PRODUCT_URL}
                  external
                  size="md"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Télécharger le guide — {formatPrice()}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
