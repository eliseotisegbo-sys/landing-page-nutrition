import { Container } from "@/components/ui/Container";

export function WhoIsItForSection() {
  const targetProfiles = [
    "Tu veux mieux organiser ton alimentation.",
    "Tu veux continuer à manger des aliments africains.",
    "Tu ne sais pas toujours quelles portions prendre.",
    "Tu manques d’idées pour tes repas.",
    "Tu veux cuisiner plus simplement.",
    "Tu veux mieux gérer tes repas quand tu manges dehors.",
    "Tu veux une méthode pratique plutôt qu’une longue théorie.",
  ];

  const whatItIsNot = [
    "Une prescription médicale.",
    "Un traitement du diabète ou de l’hypertension.",
    "Une promesse de perte de poids garantie.",
    "Un régime basé sur des aliments importés ou difficiles à trouver.",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 border-b border-neutral-200/60">
      <Container>
        <div className="space-y-16 max-w-4xl mx-auto">
          {/* Bloc 1 : À qui s'adresse ce guide */}
          <div className="bg-cream rounded-3xl p-6 sm:p-10 border border-neutral-200/80 shadow-2xs space-y-6">
            <div className="text-center sm:text-left space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-brand">
                Public cible
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                À QUI S’ADRESSE CE GUIDE ?
              </h2>
              <p className="text-sm sm:text-base font-semibold text-neutral-800">
                Ce guide est particulièrement adapté si :
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {targetProfiles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-neutral-200/70 text-sm sm:text-base text-neutral-800"
                >
                  <span className="text-brand font-bold mt-0.5 select-none" aria-hidden="true">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bloc 2 : Ce que le guide n'est pas */}
          <div className="bg-neutral-50 rounded-3xl p-6 sm:p-10 border border-neutral-200/80 space-y-6">
            <div className="text-center sm:text-left space-y-2">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-neutral-500">
                Transparence & Déontologie
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-neutral-900 leading-tight">
                CE GUIDE N’EST PAS
              </h2>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {whatItIsNot.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-neutral-200 text-sm sm:text-base text-neutral-700"
                >
                  <span className="text-red-500 font-bold mt-0.5 select-none" aria-hidden="true">
                    ❌
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 rounded-xl bg-neutral-200/60 text-center font-medium text-neutral-900 text-sm sm:text-base">
              C’est un guide pratique général pour mieux organiser son alimentation.
            </div>
          </div>

          {/* Bloc 3 : Ce que tu peux attendre du guide */}
          <div className="bg-brand-light/40 rounded-3xl p-8 sm:p-10 border border-brand/30 text-center space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900">
              CE QUE TU PEUX ATTENDRE DU GUIDE
            </h3>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              À la fin, ton objectif n’est pas de mémoriser une longue liste d’interdictions.
              <br />
              Ton objectif est de pouvoir regarder ce que tu as devant toi et te demander :
            </p>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-brand/30 shadow-sm max-w-xl mx-auto">
              <p className="font-serif italic text-lg sm:text-xl font-bold text-brand-dark">
                « Comment puis-je mieux composer ce repas avec ce que j’ai déjà ? »
              </p>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 font-medium">
              C’est cette autonomie que le guide cherche à développer.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
