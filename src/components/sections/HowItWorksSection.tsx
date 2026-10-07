import { Container } from "@/components/ui/Container";

interface StepItem {
  step: string;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    step: "ÉTAPE 1",
    title: "Découvre le principe",
    description: "Comprends ce qui rend un repas plus équilibré.",
  },
  {
    step: "ÉTAPE 2",
    title: "Observe ton assiette",
    description: "Regarde ce que tu manges déjà.",
  },
  {
    step: "ÉTAPE 3",
    title: "Fais de petits changements",
    description: "Ajuste progressivement portions, cuisson et accompagnements.",
  },
  {
    step: "ÉTAPE 4",
    title: "Passe aux recettes",
    description: "Utilise les recettes du guide pour varier tes repas.",
  },
  {
    step: "ÉTAPE 5",
    title: "Organise ta semaine",
    description: "Utilise les repères et la liste de courses pour réduire l’improvisation.",
  },
  {
    step: "ÉTAPE 6",
    title: "Continue à ton rythme",
    description: "L’objectif est de devenir progressivement autonome.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
            Processus pas à pas
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
            COMMENT ÇA MARCHE ?
          </h2>
        </div>

        {/* 6 Étapes en grille */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {steps.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs hover:border-brand/40 transition-all space-y-3"
            >
              <span className="inline-block px-2.5 py-1 rounded bg-brand/10 text-brand font-mono font-bold text-xs uppercase tracking-wider">
                {item.step}
              </span>
              <h3 className="font-display text-lg font-bold text-neutral-900">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bloc "Ce n'est pas un régime compliqué" */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-neutral-200/80 shadow-card text-center space-y-4">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
            CE N’EST PAS UN RÉGIME COMPLIQUÉ
          </h3>

          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Ce guide ne te demande pas de devenir une autre personne.
            <br />
            Il te demande de regarder autrement les repas que tu manges déjà.
          </p>

          <div className="pt-4 border-t border-neutral-100 space-y-1">
            <p className="font-display text-lg sm:text-xl font-bold text-neutral-900">
              Tu gardes ta cuisine.
            </p>
            <p className="font-display text-lg sm:text-xl font-bold text-neutral-900">
              Tu gardes tes aliments.
            </p>
            <p className="font-display text-lg sm:text-xl font-bold text-brand">
              Tu changes progressivement la façon de les associer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
