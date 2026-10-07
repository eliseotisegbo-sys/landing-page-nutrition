import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_URL, formatPrice } from "@/lib/config";

export function FinalCtaSection() {
  const finalPoints = [
    "Tu dois simplement apprendre à mieux le composer.",
    "Tu dois apprendre à mieux gérer les portions.",
    "Tu dois apprendre à mieux organiser tes repas.",
    "Tu dois apprendre à faire des choix plus simples dans la vie quotidienne.",
  ];

  const highlights = [
    "Guide numérique pratique",
    "Une méthode simple",
    "Des aliments que tu connais",
    "Des recettes que tu peux utiliser",
  ];

  return (
    <section className="bg-brand text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Halos décoratifs discrets */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <Container width="narrow">
        <div className="relative z-10 text-center space-y-6">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/20 text-white text-xs font-semibold uppercase tracking-widest">
            Passe à l&apos;action
          </span>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
            TU SAIS MAINTENANT CE QUI TE RESTE À FAIRE.
          </h2>

          <p className="font-display text-lg sm:text-xl font-medium text-amber-200">
            TU PEUX CONTINUER À MANGER CE QUE TU CONNAIS.
          </p>

          <div className="space-y-2 max-w-md mx-auto text-sm sm:text-base text-white/90">
            {finalPoints.map((point) => (
              <p key={point}>• {point}</p>
            ))}
          </div>

          <p className="text-base sm:text-lg font-bold text-white pt-2">
            Et tu peux commencer aujourd’hui.
          </p>

          {/* Bouton CTA */}
          <div className="pt-2 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Button
              href={PRODUCT_URL}
              external
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white !text-brand hover:!bg-brand hover:!text-white hover:!border-white px-8 py-4 font-extrabold text-base sm:text-lg shadow-xl"
              aria-label="Acheter le guide maintenant sur Chariow"
            >
              J’ORGANISE MIEUX MES REPAS AUJOURD’HUI — {formatPrice()}
            </Button>
          </div>

          {/* 4 points de réassurance */}
          <div className="pt-6 border-t border-white/20 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs text-white/80">
            {highlights.map((item) => (
              <div key={item} className="flex items-center justify-center gap-1.5">
                <span className="text-amber-300 font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 space-y-1">
            <p className="text-base font-medium text-white/90">
              Commence simplement.
            </p>
            <p className="font-display text-lg font-bold text-amber-200">
              Un repas à la fois.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
