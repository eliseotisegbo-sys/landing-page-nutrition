import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

interface StepModule {
  num: string;
  tag: string;
  title: string;
  description: string;
}

const modules: StepModule[] = [
  {
    num: "01",
    tag: "FONDATION",
    title: "COMPRENDRE CE QUI BLOQUE",
    description: "Comprends l’impact des portions, de la composition des repas, des boissons, des fritures et de l’organisation.",
  },
  {
    num: "02",
    tag: "REPÈRES VISUELS",
    title: "COMPOSER TON ASSIETTE",
    description: "Utilise des repères simples pour construire tes repas sans avoir besoin d’une balance de cuisine.",
  },
  {
    num: "03",
    tag: "MARCHÉ LOCAL",
    title: "MIEUX UTILISER LES ALIMENTS LOCAUX",
    description: "Découvre comment mieux utiliser l’igname, le plantain, le fonio, le gombo, le niébé, les légumes-feuilles et les fruits locaux.",
  },
  {
    num: "04",
    tag: "PROGRESSION",
    title: "TRANSFORMER TES HABITUDES",
    description: "Apprends à modifier progressivement certaines habitudes sans bouleverser toute ta cuisine.",
  },
  {
    num: "05",
    tag: "EN CUISINE",
    title: "PASSER AUX RECETTES",
    description: "Découvre des préparations simples et adaptées aux aliments disponibles autour de toi.",
  },
  {
    num: "06",
    tag: "QUOTIDIEN RÉEL",
    title: "GÉRER LA VRAIE VIE",
    description: "Sache quoi faire lorsque tu travailles, manges au maquis, es invité, as un budget limité ou lorsque ta journée ne se passe pas comme prévu.",
  },
];

export function LearnSection() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <FadeIn>
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand">
              Programme du livre
            </span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
              TU VAS ENFIN SAVOIR QUOI FAIRE AVEC TES REPAS.
            </h2>
            <p className="font-display text-base sm:text-lg font-medium text-brand">
              LE GUIDE TE DONNE UNE MÉTHODE CONCRÈTE.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {modules.map((m, idx) => (
            <FadeIn key={m.num} delay={idx * 0.05}>
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-cream/50 border border-neutral-200/80 hover:border-brand/40 transition-all shadow-2xs hover:shadow-xs flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black text-brand bg-brand/10 px-2.5 py-1 rounded-md">
                      {m.num}
                    </span>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-400 group-hover:text-brand transition-colors">
                      {m.tag}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900 leading-snug">
                    {m.title}
                  </h3>

                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center text-xs sm:text-sm text-neutral-500 font-medium">
            *Le livre traite précisément chacune de ces situations de la vie quotidienne.*
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
