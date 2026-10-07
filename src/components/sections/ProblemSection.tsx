import { Container } from "@/components/ui/Container";

export function ProblemSection() {
  const obstacles = [
    "Le travail.",
    "Les repas en famille.",
    "Le maquis.",
    "Le manque de temps.",
    "Le budget.",
  ];

  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container width="narrow">
        <div className="space-y-8 text-center sm:text-left">
          {/* Tag */}
          <div className="text-center">
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Constat du quotidien
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 mt-2 leading-tight">
              ET SI LE PROBLÈME N’ÉTAIT PAS CE QUE TU MANGES ?
            </h2>
          </div>

          {/* Récit immersif */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 shadow-card border border-neutral-200/80 space-y-6 text-neutral-700 leading-relaxed text-base sm:text-lg">
            <p>Tu as peut-être déjà essayé de mieux manger.</p>
            <p>Tu as peut-être supprimé certains aliments.</p>
            <p>Tu as peut-être essayé des recettes trouvées sur Internet.</p>
            <p className="font-medium text-neutral-900">
              Puis la vie quotidienne a repris le dessus.
            </p>

            {/* Piliers du quotidien */}
            <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start py-2">
              {obstacles.map((obs) => (
                <span
                  key={obs}
                  className="px-3.5 py-1.5 rounded-lg bg-neutral-100 text-neutral-800 font-semibold text-sm border border-neutral-200"
                >
                  {obs}
                </span>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-neutral-900 font-serif italic text-lg sm:text-xl text-center">
              « Je ne sais plus quoi manger. »
            </div>

            <div className="pt-4 border-t border-neutral-100 space-y-3">
              <p className="font-bold text-neutral-900 text-lg sm:text-xl text-center sm:text-left">
                Le problème n’est pas forcément l’aliment.
              </p>
              <p className="text-neutral-600">
                Il peut venir de la façon dont ton repas est composé, de la quantité, de la cuisson, des boissons qui l’accompagnent et de ton organisation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
