import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface LearnItem {
  number: string;
  title: string;
  description: string;
  icon: string;
}

const learnItems: LearnItem[] = [
  {
    number: "01",
    title: "Comprendre ce qui bloque",
    description: "Comprendre le rôle des portions, de la composition des repas, des boissons, des fritures et de l’organisation.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Composer ton assiette",
    description: "Utiliser des repères simples pour équilibrer tes repas sans avoir besoin d’une balance de cuisine.",
    icon: "🍽️",
  },
  {
    number: "03",
    title: "Mieux utiliser les aliments locaux",
    description: "Découvrir comment utiliser l’igname, le plantain, le fonio, le gombo, le niébé, les légumes-feuilles, les fruits locaux et bien d’autres aliments.",
    icon: "🌱",
  },
  {
    number: "04",
    title: "Transformer tes habitudes",
    description: "Apprendre à remplacer progressivement certaines habitudes sans bouleverser toute ta cuisine.",
    icon: "🔄",
  },
  {
    number: "05",
    title: "Préparer des recettes simples",
    description: "Des recettes pensées pour être accessibles et compatibles avec les aliments disponibles autour de toi.",
    icon: "🍳",
  },
  {
    number: "06",
    title: "Gérer les situations réelles",
    description: "Que faire quand tu travailles ? Quand tu manges au maquis ? Quand tu es invité ? Quand le budget est limité ? Quand ta journée ne se passe pas comme prévu ?",
    icon: "⚡",
  },
];

export function LearnSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Programme pratique
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              CE QUE TU VAS APPRENDRE
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {learnItems.map((item, index) => (
            <FadeIn key={item.number} delay={index * 0.08}>
              <div
                className="h-full p-6 sm:p-7 rounded-2xl bg-cream/70 border border-neutral-200/80 shadow-2xs hover:shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="font-mono text-sm font-bold text-brand bg-white px-2.5 py-1 rounded-md border border-brand/20">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-neutral-900">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
