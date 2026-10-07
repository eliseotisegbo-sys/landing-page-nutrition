import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function WhoIsItForSection() {
  const forYouPoints = [
    "Tu veux mieux organiser ton alimentation.",
    "Tu veux continuer à manger des aliments africains.",
    "Tu ne sais pas toujours quelles portions prendre.",
    "Tu manques d’idées pour préparer tes repas.",
    "Tu veux cuisiner plus simplement.",
    "Tu manges régulièrement dehors.",
    "Tu veux une méthode pratique plutôt qu’une longue théorie.",
  ];

  const notPoints = [
    "Ce guide ne remplace pas un médecin ou un diététicien.",
    "Il ne traite pas le diabète.",
    "Il ne traite pas l’hypertension.",
    "Il ne garantit pas un nombre précis de kilos perdus.",
    "Il ne remplace pas un accompagnement médical professionnel lorsque celui-ci est nécessaire.",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* Bloc Pour qui c'est fait */}
          <FadeIn delay={0.1}>
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-cream/70 border-2 border-brand/40 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand text-white inline-block">
                  POUR QUI ?
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  CE GUIDE EST FAIT POUR TOI SI :
                </h2>

                <ul className="space-y-2.5 pt-2">
                  {forYouPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-800">
                      <span className="text-brand font-bold select-none mt-0.5">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-brand/20">
                <p className="font-display font-bold text-sm sm:text-base text-brand">
                  Tu n’as pas besoin d’être parfaite.
                  <br />
                  <span className="text-neutral-900">Tu as besoin d’une méthode que tu peux appliquer.</span>
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Bloc Ce que ce guide n'est pas */}
          <FadeIn delay={0.2}>
            <div className="h-full p-6 sm:p-8 rounded-3xl bg-neutral-50/90 border border-neutral-200/80 shadow-2xs flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-neutral-200 text-neutral-700 inline-block">
                  AVERTISSEMENT RESPONSABLE
                </span>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                  CE GUIDE N’EST PAS UN MIRACLE.
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-neutral-600">
                  Et c’est justement pourquoi il est pensé pour la vraie vie.
                </p>

                <ul className="space-y-2.5 pt-2">
                  {notPoints.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600">
                      <span className="text-neutral-400 font-bold select-none mt-0.5">❌</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-200/60">
                <p className="text-xs sm:text-sm font-medium text-neutral-700 leading-relaxed">
                  <strong>C’est un guide pratique général pour mieux organiser ton alimentation.</strong>
                  <br />
                  <span className="text-neutral-500 text-xs">Le livre précise lui-même ces limites afin de rester dans un cadre responsable.</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
