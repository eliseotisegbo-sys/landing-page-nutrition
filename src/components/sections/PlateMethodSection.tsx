import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { plateMethodImage } from "@/lib/images";

export function PlateMethodSection() {
  const portions = [
    {
      fraction: "½ ASSIETTE",
      category: "Légumes",
      color: "border-green-600 bg-green-50/70 text-green-900",
      badgeColor: "bg-green-700 text-white",
      examples: "Gombo, chou, tomate, carotte, concombre, feuilles vertes, aubergine locale…",
      details: "Apporte fibres, eau, vitamines et volume sans alourdir le repas.",
    },
    {
      fraction: "¼ ASSIETTE",
      category: "Protéines",
      color: "border-orange-500 bg-orange-50/70 text-orange-900",
      badgeColor: "bg-orange-600 text-white",
      examples: "Poisson, œufs, poulet, niébé, haricots…",
      details: "Soutient la satiété durable et préserve la masse musculaire.",
    },
    {
      fraction: "¼ ASSIETTE",
      category: "Féculent",
      color: "border-amber-500 bg-amber-50/70 text-amber-900",
      badgeColor: "bg-amber-600 text-white",
      examples: "Igname, manioc préparé, patate douce, plantain, riz, mil, sorgho, fonio…",
      details: "L'énergie essentielle de nos cuisines africaines, bien proportionnée.",
    },
  ];

  return (
    <section className="bg-cream py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
              Le cœur du mécanisme
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              UNE MÉTHODE SIMPLE POUR TON ASSIETTE
            </h2>
            <p className="text-base sm:text-lg text-neutral-600">
              Pas besoin de peser chaque aliment. Utilise un repère simple :
            </p>
          </FadeIn>
        </div>

        {/* Visuel officiel de l'assiette idéale */}
        <FadeIn delay={0.1}>
          <div className="max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden bg-white p-3 sm:p-5 shadow-card border border-neutral-200/80 hover:shadow-lg transition-shadow">
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden bg-neutral-50">
              <Image
                src={plateMethodImage.src}
                alt={plateMethodImage.alt}
                fill
                sizes="(max-width: 768px) 95vw, 800px"
                className="object-contain"
              />
            </div>
            <p className="text-center text-xs sm:text-sm text-neutral-500 mt-3 font-medium">
              Schéma visuel tiré du Guide Africain de Nutrition — Structure équilibrée des repas
            </p>
          </div>
        </FadeIn>

        {/* Grille des 3 fractions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {portions.map((item, index) => (
            <FadeIn key={item.category} delay={index * 0.1}>
              <div
                className={`h-full rounded-2xl p-6 border-2 shadow-2xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 ${item.color}`}
              >
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${item.badgeColor}`}>
                    {item.fraction}
                  </span>
                  <span className="text-2xl font-display font-bold">
                    {item.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Exemples du marché :
                  </p>
                  <p className="text-sm font-medium leading-relaxed">
                    {item.examples}
                  </p>
                </div>

                <p className="text-xs opacity-75 pt-2 border-t border-current/20">
                  {item.details}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Message rassurant */}
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center max-w-xl mx-auto">
            <p className="font-display text-base sm:text-lg font-bold text-neutral-900 leading-snug">
              L’objectif n’est pas de manger parfait.
              <br />
              <span className="text-brand font-medium">
                L’objectif est de savoir comment construire un repas plus équilibré.
              </span>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
