import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface TrustItem {
  title: string;
  description: string;
  icon: string;
}

const trustItems: TrustItem[] = [
  {
    title: "ALIMENTS LOCAUX",
    description: "Pensé autour des aliments que l’on trouve facilement dans nos marchés.",
    icon: "🥬",
  },
  {
    title: "MÉTHODE SIMPLE",
    description: "Des repères visuels pour construire ton assiette sans compliquer ta vie.",
    icon: "🍽️",
  },
  {
    title: "RECETTES PRATIQUES",
    description: "Des idées concrètes pour le petit-déjeuner, le déjeuner, le dîner et les collations.",
    icon: "🍲",
  },
];

export function TrustBanner() {
  return (
    <section className="bg-white py-10 sm:py-12 border-b border-neutral-200/70">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {trustItems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.1}>
              <div
                className="h-full flex items-start gap-4 p-5 rounded-2xl bg-cream/60 border border-neutral-200/60 hover:border-brand/40 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200"
              >
                <span className="text-2xl sm:text-3xl select-none" aria-hidden="true">
                  {item.icon}
                </span>
                <div className="space-y-1">
                  <h2 className="text-sm sm:text-base font-bold tracking-wider text-brand font-sans uppercase">
                    {item.title}
                  </h2>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
