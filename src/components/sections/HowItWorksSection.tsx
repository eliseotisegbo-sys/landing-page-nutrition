import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "1",
    title: "OBSERVE",
    description: "Regarde comment tu manges aujourd’hui.",
  },
  {
    number: "2",
    title: "COMPRENDS",
    description: "Identifie ce que tu peux améliorer.",
  },
  {
    number: "3",
    title: "COMPOSE",
    description: "Construis ton assiette avec les bons repères.",
  },
  {
    number: "4",
    title: "CUISINE",
    description: "Adapte progressivement tes modes de préparation.",
  },
  {
    number: "5",
    title: "ORGANISE",
    description: "Utilise les recettes et la liste de courses pour réduire l’improvisation.",
  },
  {
    number: "6",
    title: "CONTINUE",
    description: "Répète les bonnes habitudes à ton rythme.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              La méthode en pratique
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              TOUT EST PENSÉ POUR ÊTRE SIMPLE.
            </h2>
            <p className="font-display text-base sm:text-lg font-medium text-brand">
              VOICI COMMENT UTILISER LE GUIDE.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {steps.map((step, idx) => (
            <FadeIn key={step.number} delay={idx * 0.05}>
              <div className="h-full p-5 sm:p-6 rounded-2xl bg-white border border-neutral-200/80 shadow-2xs hover:shadow-xs transition-all flex items-start gap-4">
                <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand text-white font-mono font-bold text-sm flex items-center justify-center shadow-2xs">
                  {step.number}
                </span>
                <div className="space-y-1">
                  <h3 className="font-display font-bold text-base text-neutral-900">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <span className="inline-block px-4 py-2 rounded-full bg-brand/10 text-brand font-display font-bold text-sm sm:text-base">
              Commence avec ton prochain repas.
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
