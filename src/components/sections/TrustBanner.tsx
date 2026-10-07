import { Container } from "@/components/ui/Container";

interface TrustPillar {
  tag: string;
  title: string;
  description: string;
}

const pillars: TrustPillar[] = [
  {
    tag: "100% LOCAL",
    title: "Aliments de nos marchés",
    description: "Riz, igname, manioc, plantain, fonio, gombo, niébé — sans ingrédients importés introuvables.",
  },
  {
    tag: "PRATIQUE",
    title: "Sans balance de cuisine",
    description: "Des repères visuels simples (la paume, le poing, la poignée) pour construire ton assiette.",
  },
  {
    tag: "RÉALISTE",
    title: "Pensé pour la vraie vie",
    description: "Des solutions concrètes pour le maquis, le travail, les repas en famille et les budgets serrés.",
  },
  {
    tag: "ACCÈS DIRECT",
    title: "Compatible smartphone",
    description: "Accès numérique immédiat après commande via Chariow, consultable même hors-ligne.",
  },
];

export function TrustBanner() {
  return (
    <section className="bg-white py-8 sm:py-10 border-b border-neutral-200/80">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-4 sm:p-5 rounded-2xl bg-cream/50 border border-neutral-200/70 hover:border-brand/40 transition-all shadow-2xs hover:shadow-xs group"
            >
              <span className="inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider bg-brand/10 text-brand mb-2 group-hover:bg-brand group-hover:text-white transition-colors">
                {pillar.tag}
              </span>
              <h3 className="font-display font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                {pillar.title}
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
