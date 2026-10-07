import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PRODUCT_URL, formatPrice } from "@/lib/config";

export function FinalCtaSection() {
  return (
    <section className="bg-brand text-white py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Motifs géométriques décoratifs légers en fond */}
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
            Tu n’as pas besoin de changer toute ta cuisine.
          </h2>

          <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl mx-auto">
            Tu as besoin d’une méthode simple pour mieux organiser ce que tu manges déjà.
          </p>

          <p className="text-sm sm:text-base font-semibold text-white/95">
            Découvre le Guide Africain de Nutrition et commence à composer tes repas autrement.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-3">
            <Button
              href={PRODUCT_URL}
              external
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto bg-white text-brand hover:bg-neutral-100 hover:text-brand-dark px-8 py-4 font-extrabold text-base sm:text-lg shadow-xl"
              aria-label="Acheter le guide maintenant sur Chariow"
            >
              JE DÉCOUVRE LE GUIDE — {formatPrice()}
            </Button>
          </div>

          <div className="pt-4 border-t border-white/20 space-y-1">
            <p className="text-base font-medium text-white/95">
              Commence simplement.
            </p>
            <p className="text-base font-bold text-amber-200">
              Un repas à la fois.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
