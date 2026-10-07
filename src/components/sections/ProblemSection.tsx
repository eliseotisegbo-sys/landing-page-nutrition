import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProblemSection() {
  const steps = [
    "Tu veux mieux manger.",
    "Tu regardes des conseils sur Internet.",
    "Tu essaies de supprimer certains aliments.",
    "Tu changes tes habitudes pendant quelques jours.",
  ];

  const realities = [
    "Le travail reprend.",
    "Les repas en famille reprennent.",
    "Tu manges au maquis.",
    "Tu manques de temps.",
    "Ton budget devient une contrainte.",
  ];

  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container width="narrow">
        <FadeIn>
          <div className="space-y-4 text-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Comprendre la réalité de nos journées
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              TON PROBLÈME N’EST PAS FORCÉMENT CE QUE TU MANGES.
            </h2>
            <p className="font-display text-lg sm:text-xl font-medium text-brand">
              C’est parfois la façon dont tu le manges.
            </p>
          </div>
        </FadeIn>

        {/* Parcours typique en cartes épurées */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Bloc Ce que tu essaies */}
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs h-full">
              <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">
                La tentative classique
              </h3>
              <ul className="space-y-3">
                {steps.map((step) => (
                  <li key={step} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Bloc La réalité du quotidien */}
          <FadeIn delay={0.2}>
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs h-full">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand mb-4">
                Puis le quotidien reprend le dessus
              </h3>
              <ul className="space-y-2.5">
                {realities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* L'impasse et la solution */}
        <FadeIn delay={0.3}>
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-white border-2 border-neutral-200/80 shadow-sm text-center space-y-4">
            <p className="font-display text-xl sm:text-2xl font-bold text-neutral-900 italic">
              « Je ne sais plus quoi manger. »
            </p>

            <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-xl mx-auto">
              Le problème vient parfois de la composition du repas, des portions, du mode de cuisson, des boissons qui l’accompagnent et du manque d’organisation.
            </p>

            <div className="pt-4 border-t border-neutral-100 max-w-lg mx-auto">
              <p className="text-base sm:text-lg font-bold text-neutral-900">
                Tu n’as pas forcément besoin d’un nouveau régime.
                <br />
                <span className="text-brand">Tu as besoin d’une méthode que tu peux réellement appliquer dans ta vie.</span>
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
